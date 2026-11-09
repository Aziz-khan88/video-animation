"""Public enquiry intake: validate, retain the lead, and notify the verified inbox."""
import hashlib
import json
import os
import re
import time
import uuid
from datetime import datetime, timezone

import boto3
from botocore.exceptions import ClientError

TABLE = os.environ['LEAD_TABLE']
INBOX = os.environ['ENQUIRY_INBOX']
ORIGINS = set(os.environ['ALLOWED_ORIGINS'].split(','))
db = boto3.resource('dynamodb').Table(TABLE)
ses = boto3.client('sesv2')
SCOPES = {'Help me choose', 'A single video', 'A campaign or series', 'Custom scope'}


def response(code, data):
    return {'statusCode': code, 'headers': {'Content-Type': 'application/json', 'Cache-Control': 'no-store'}, 'body': json.dumps(data)}


def validate(data):
    limits = {'name': (2, 100), 'email': (3, 254), 'company': (0, 160), 'brief': (12, 5000), 'scope': (1, 80)}
    clean, errors = {}, {}
    for field, (minimum, maximum) in limits.items():
        value = data.get(field, '')
        if not isinstance(value, str):
            errors[field] = 'Please enter text.'
            continue
        value = value.strip()
        if len(value) < minimum or len(value) > maximum:
            errors[field] = f'Use {minimum}–{maximum} characters.'
        elif any(ord(c) < 32 and c not in '\n\r\t' for c in value):
            errors[field] = 'Please remove unsupported characters.'
        clean[field] = value
    if 'email' in clean and not re.fullmatch(r'[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+', clean['email']):
        errors['email'] = 'Enter a valid email address.'
    if clean.get('scope') not in SCOPES:
        errors['scope'] = 'Choose a project scope.'
    try:
        request_id = data.get('requestId', '')
        if str(uuid.UUID(request_id)) != request_id:
            raise ValueError()
    except (ValueError, TypeError, AttributeError):
        errors['requestId'] = 'Refresh the page and try again.'
    return clean, errors


def notify(lead):
    now = int(time.time())
    try:
        db.update_item(Key={'pk': lead['pk']}, UpdateExpression='SET notificationStatus=:sending, leaseUntil=:lease',
            ConditionExpression='notificationStatus=:pending OR (notificationStatus=:sending AND leaseUntil < :now)',
            ExpressionAttributeValues={':sending': 'sending', ':pending': 'pending', ':lease': now + 90, ':now': now})
    except ClientError as exc:
        if exc.response['Error']['Code'] == 'ConditionalCheckFailedException':
            return
        raise
    try:
        body = '\n'.join([f"Enquiry reference: {lead['reference']}", f"Received: {lead['createdAt']}",
            f"Name: {lead['name']}", f"Email: {lead['email']}", f"Company: {lead['company'] or 'Not supplied'}",
            f"Scope: {lead['scope']}", '\nProject brief:', lead['brief'], '\nSource: 2D animation service page'])
        result = ses.send_email(FromEmailAddress=INBOX, Destination={'ToAddresses': [INBOX]}, ReplyToAddresses=[lead['email']],
            Content={'Simple': {'Subject': {'Data': f"2D animation enquiry | {lead['reference']}"}, 'Body': {'Text': {'Data': body}}}})
        db.update_item(Key={'pk': lead['pk']}, UpdateExpression='SET notificationStatus=:sent, messageId=:message REMOVE leaseUntil',
            ExpressionAttributeValues={':sent': 'sent', ':message': result['MessageId']})
    except Exception:
        db.update_item(Key={'pk': lead['pk']}, UpdateExpression='SET notificationStatus=:pending REMOVE leaseUntil',
            ExpressionAttributeValues={':pending': 'pending'})
        # Do not log contact details or the project brief.
        print(json.dumps({'event': 'notification_retry_required', 'reference': lead['reference']}))


def retry_notifications():
    # Query pending states rather than scanning customer records.
    for state in ('pending', 'sending'):
        args = {'IndexName': 'notification-status', 'KeyConditionExpression': 'notificationStatus = :status',
                'ExpressionAttributeValues': {':status': state}, 'Limit': 25}
        for lead in db.query(**args).get('Items', []):
            notify(lead)
    return {'retried': True}


def handler(event, context):
    if event.get('source') == 'aws.events':
        return retry_notifications()
    origin = event.get('headers', {}).get('origin', '')
    if origin not in ORIGINS:
        return response(403, {'error': 'This website is not permitted to submit.'})
    if event.get('requestContext', {}).get('http', {}).get('method') != 'POST':
        return response(405, {'error': 'Use POST.'})
    if 'application/json' not in event.get('headers', {}).get('content-type', ''):
        return response(415, {'error': 'Use JSON.'})
    raw = event.get('body', '')
    if event.get('isBase64Encoded') or not isinstance(raw, str) or len(raw.encode('utf-8')) > 16000:
        return response(413, {'error': 'Please shorten your enquiry.'})
    try:
        data = json.loads(raw)
        if not isinstance(data, dict):
            raise ValueError()
    except (ValueError, TypeError):
        return response(400, {'error': 'Invalid request.'})
    if data.get('website'):
        return response(422, {'error': 'Please leave the website field empty.'})
    clean, errors = validate(data)
    if errors:
        return response(422, {'error': 'Please check the highlighted fields.', 'fields': errors})
    request_id = data['requestId']
    pk = 'LEAD#' + request_id
    digest = hashlib.sha256(json.dumps(clean, sort_keys=True).encode()).hexdigest()
    try:
        existing = db.get_item(Key={'pk': pk}, ConsistentRead=True).get('Item')
        if existing:
            if existing['digest'] != digest:
                return response(409, {'error': 'The brief changed. Please submit again.'})
            notify(existing)
            return response(200, {'ok': True, 'reference': existing['reference']})
        ip = event.get('requestContext', {}).get('http', {}).get('sourceIp', 'unknown')
        now = int(time.time())
        rate_key = 'RATE#' + hashlib.sha256((os.environ['RATE_SALT'] + ip + str(now // 3600)).encode()).hexdigest()
        try:
            db.update_item(Key={'pk': rate_key}, UpdateExpression='SET expiresAt=:expiry ADD submissions :one',
                ConditionExpression='attribute_not_exists(submissions) OR submissions < :max',
                ExpressionAttributeValues={':expiry': now + 7200, ':one': 1, ':max': 5})
        except ClientError as exc:
            if exc.response['Error']['Code'] == 'ConditionalCheckFailedException':
                return response(429, {'error': 'Too many enquiries. Please try again in an hour or call us.'})
            raise
        lead = {'pk': pk, **clean, 'digest': digest, 'reference': 'VA-' + request_id[:8].upper(),
                'createdAt': datetime.now(timezone.utc).isoformat(), 'notificationStatus': 'pending'}
        try:
            db.put_item(Item=lead, ConditionExpression='attribute_not_exists(pk)')
        except ClientError as exc:
            if exc.response['Error']['Code'] != 'ConditionalCheckFailedException':
                raise
            raced = db.get_item(Key={'pk': pk}, ConsistentRead=True)['Item']
            if raced['digest'] != digest:
                return response(409, {'error': 'The brief changed. Please submit again.'})
            return response(200, {'ok': True, 'reference': raced['reference']})
        notify(lead)
        return response(201, {'ok': True, 'reference': lead['reference']})
    except Exception:
        print(json.dumps({'event': 'enquiry_service_error'}))
        return response(503, {'error': 'We could not confirm receipt. Your brief is still here; please try again.'})
