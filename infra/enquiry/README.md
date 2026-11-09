# Enquiry intake

The 2D service page sends JSON directly to an AWS HTTP API. Lambda validates the
request and stores it in private DynamoDB before returning a reference. SES then
notifies `hello@videoanimation.us`, with the visitor's address as Reply-To.
Failed notifications remain pending and are retried every five minutes.

## Deployment

With an authenticated AWS CLI, run `python infra/enquiry/deploy.py`, then wait for
CloudFormation stack `videoanimation-enquiries` in `us-west-1` to finish. The
script uses previous secret parameters on updates and never stores credentials.
The stack's `Endpoint` output must be set as `NEXT_PUBLIC_ENQUIRY_ENDPOINT` **before
building** the frontend. This URL is public, not a secret. Keep the API's origin
allowlist in `deploy.py` in sync with approved frontend domains.

The AWS preview and original Vercel hostname are allowed. Vercel needs this
environment variable and a new frontend deployment before it can submit.
For AWS static previews, build with `STATIC_PREVIEW=1` and publish `out/`.

## Inbox setup

SES is in its sandbox. Verify `hello@videoanimation.us` using the AWS verification
email. Both sender and recipient are this same verified identity, so this intake
does not need to send to arbitrary unverified recipients. It sends no automated
email to the visitor. Do not claim inbox delivery merely from a successful API
response: the response confirms storage, while `notificationStatus=sent` and
`messageId` show SES accepted a notification.

## Operations

- Table: `videoanimation-enquiries`; lead partition keys are `LEAD#<requestId>`.
- `notification-status` index contains pending, sending and sent records. Query
  pending records when diagnosing notifications; avoid exporting customer data.
- Logs: `/aws/lambda/videoanimation-enquiries`, retained for 14 days. Logs contain
  event names and references, not enquiry contents.
- An identical request ID and body return the same receipt without another email.
  Changed content under the same ID returns 409. The browser preserves IDs on retry.
- Public intake has API throttling, validation, a honeypot and five new requests
  per source IP per hour. CORS/origin checks are not authentication or full bot
  protection. Monitor unwanted submissions before increasing campaign traffic.
- Lead records are encrypted, have point-in-time recovery, and survive stack
  deletion. Only short-lived rate counters use TTL. Delete lead data explicitly
  under the business's retention/privacy process.
- Notification delivery is at-least-once: a rare interruption after SES accepts
  mail but before the database update may cause a duplicate. References identify it.

Run isolated contract tests with `python infra/enquiry/test_handler.py`. They use
in-memory substitutes and do not contact AWS or send mail. A real end-to-end test
must use a clearly labelled brief and an explicitly approved inbox.
