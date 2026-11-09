"""Contract tests with in-memory AWS substitutes; no emails or cloud writes."""
import importlib.util
import json
import os
import sys
import types
import unittest
from unittest.mock import Mock

os.environ.update(LEAD_TABLE='test', ENQUIRY_INBOX='hello@example.test',
                  ALLOWED_ORIGINS='https://example.test', RATE_SALT='test-only')


class ClientError(Exception):
    def __init__(self, code):
        self.response = {'Error': {'Code': code}}


class Table:
    def __init__(self):
        self.items = {}
        self.count = 0

    def get_item(self, Key, **kwargs):
        return {'Item': self.items[Key['pk']]} if Key['pk'] in self.items else {}

    def put_item(self, Item, **kwargs):
        if Item['pk'] in self.items:
            raise ClientError('ConditionalCheckFailedException')
        self.items[Item['pk']] = dict(Item)

    def update_item(self, Key, UpdateExpression, ExpressionAttributeValues, **kwargs):
        v = ExpressionAttributeValues
        if Key['pk'].startswith('RATE#'):
            if self.count >= 5:
                raise ClientError('ConditionalCheckFailedException')
            self.count += 1
            return
        item = self.items[Key['pk']]
        if ':lease' in v:
            if item['notificationStatus'] == 'sent':
                raise ClientError('ConditionalCheckFailedException')
            item.update(notificationStatus='sending', leaseUntil=v[':lease'])
        elif ':sent' in v:
            item.update(notificationStatus='sent', messageId=v[':message'])
        else:
            item['notificationStatus'] = 'pending'

    def query(self, **kwargs):
        state = kwargs['ExpressionAttributeValues'][':status']
        return {'Items': [i for i in self.items.values() if i['notificationStatus'] == state]}


sys.modules['boto3'] = types.SimpleNamespace(resource=lambda _: Mock(Table=lambda _: Table()), client=lambda _: Mock())
sys.modules['botocore.exceptions'] = types.SimpleNamespace(ClientError=ClientError)
spec = importlib.util.spec_from_file_location('intake', os.path.join(os.path.dirname(__file__), 'handler.py'))
intake = importlib.util.module_from_spec(spec)
spec.loader.exec_module(intake)


class IntakeTests(unittest.TestCase):
    def setUp(self):
        intake.db = Table()
        intake.ses = Mock()
        intake.ses.send_email.return_value = {'MessageId': 'test-message'}
        self.data = dict(name='Delivery Test', email='test@example.test', company='',
                         brief='TEST ONLY: checking the enquiry contract.', scope='Help me choose',
                         requestId='11111111-2222-4333-8444-555555555555')

    def send(self, data=None, **overrides):
        event = dict(headers={'origin': 'https://example.test', 'content-type': 'application/json'},
                     requestContext={'http': {'method': 'POST', 'sourceIp': '127.0.0.1'}},
                     body=json.dumps(self.data if data is None else data))
        event.update(overrides)
        result = intake.handler(event, None)
        return result['statusCode'], json.loads(result['body'])

    def test_receipt_requires_durable_capture_and_retry_is_idempotent(self):
        status, receipt = self.send()
        self.assertEqual(status, 201)
        self.assertTrue(receipt['ok'])
        self.assertEqual(len(intake.db.items), 1)
        self.assertEqual(self.send(), (200, receipt))
        intake.ses.send_email.assert_called_once()

    def test_changed_payload_cannot_overwrite_existing_lead(self):
        self.send()
        self.assertEqual(self.send({**self.data, 'brief': 'A different valid project brief'})[0], 409)
        intake.ses.send_email.assert_called_once()

    def test_notification_failure_preserves_lead_and_retries(self):
        intake.ses.send_email.side_effect = RuntimeError('mail unavailable')
        self.assertEqual(self.send()[0], 201)
        self.assertEqual(next(iter(intake.db.items.values()))['notificationStatus'], 'pending')
        intake.ses.send_email.side_effect = None
        intake.retry_notifications()
        self.assertEqual(next(iter(intake.db.items.values()))['notificationStatus'], 'sent')

    def test_storage_failure_never_returns_success(self):
        intake.db.put_item = Mock(side_effect=RuntimeError('storage unavailable'))
        self.assertEqual(self.send()[0], 503)
        intake.ses.send_email.assert_not_called()

    def test_rejects_invalid_fields_without_side_effects(self):
        for field, value in [('name', 'x'), ('email', 'bad'), ('brief', 'short'),
                             ('scope', 'invented'), ('requestId', '-' * 36), ('brief', 123)]:
            with self.subTest(field=field, value=value):
                status, body = self.send({**self.data, field: value})
                self.assertEqual(status, 422)
                self.assertIn(field, body['fields'])
        self.assertFalse(intake.db.items)
        intake.ses.send_email.assert_not_called()

    def test_rejects_bad_transport_and_honeypot(self):
        self.assertEqual(self.send(headers={'origin': 'https://wrong.test'})[0], 403)
        self.assertEqual(self.send(headers={'origin': 'https://example.test'})[0], 415)
        self.assertEqual(self.send(body='not json')[0], 400)
        self.assertEqual(self.send(body='x' * 16001)[0], 413)
        self.assertEqual(self.send({**self.data, 'website': 'spam'})[0], 422)
        self.assertFalse(intake.db.items)

    def test_rate_limit_does_not_block_safe_retry(self):
        self.send()
        intake.db.count = 5
        self.assertEqual(self.send()[0], 200)
        self.assertEqual(self.send({**self.data, 'requestId': 'aaaaaaaa-2222-4333-8444-555555555555'})[0], 429)


if __name__ == '__main__':
    unittest.main()
