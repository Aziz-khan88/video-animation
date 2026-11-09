# 2D service page verification — 9 November 2026

- Normal Next.js production build and AWS static export: all 24 routes passed.
- TypeScript and focused ESLint: passed.
- Backend contract tests: 7 passed, including durable capture, duplicate-safe retry,
  changed-body conflict, rate limiting, validation and storage/notification failures.
- Live API: invalid JSON 400, invalid fields 422 with correct CORS, rejected origin
  403 without CORS. No enquiry was created by these negative checks.
- Goal panel: all three states at 320, 375, 390, 430, 768 and 1440 pixels showed
  no internal text overflow and no document overflow (18 combinations).
- At 320px, header quote action landed the form at approximately 85px below the
  viewport top. Fields stayed inside their card. Campaign CTA prefilled both scope
  and brief. Empty submit focused the required name field.
- Published studio Vimeo film: clicked through to actual playback, verified Pause
  control, then paused. Concept art is separately labelled.
- Approved live test: reference VA-D23C70DA, durable DynamoDB record confirmed.
  Replaying the identical request returned HTTP 200 and the same reference.
- SES verification remains pending. Notification is queued, not confirmed delivered.
  No extra test lead or email was created. User has been asked to verify the inbox.
- AWS Amplify deployment job 3 succeeded at the existing review URL. The exact
  temporary S3 upload and staging bucket were removed after deployment.

Independent Astra high review is recorded separately in `astra-review.md`.
