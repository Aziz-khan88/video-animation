"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";

type Props = {
  brief: string;
  setBrief: (value: string) => void;
  scope: string;
  setScope: (value: string) => void;
};
const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;

export function TwoDEnquiry({ brief, setBrief, scope, setScope }: Props) {
  const [sending, setSending] = useState(false);
  const [receipt, setReceipt] = useState<{
    reference: string;
    email: string;
  } | null>(null);
  const [error, setError] = useState("");
  const [fields, setFields] = useState<Record<string, string>>({});
  const request = useRef<{ payload: string; id: string } | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim(),
      scope,
      brief: brief.trim(),
      website: String(data.get("website") || ""),
    };
    const fingerprint = JSON.stringify(payload);
    if (!request.current || request.current.payload !== fingerprint)
      request.current = { payload: fingerprint, id: crypto.randomUUID() };
    setError("");
    setFields({});
    setSending(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      if (!endpoint)
        throw new Error(
          "Submission is temporarily unavailable. Please call (833) 666-6684, or try again shortly.",
        );
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, requestId: request.current.id }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (
        !response.ok ||
        !result.ok ||
        !/^VA-[A-F0-9]{8}$/.test(result.reference || "")
      ) {
        if (result.fields) {
          setFields(result.fields);
          const first = Object.keys(result.fields)[0];
          form
            .querySelector<HTMLElement>(
              `[name="${first.replace(/[^a-z]/g, "")}"]`,
            )
            ?.focus();
        }
        if (response.status === 409) request.current = null;
        throw new Error(
          result.error ||
            "We couldn’t confirm receipt. Please try again; your brief is still here.",
        );
      }
      setReceipt({ reference: result.reference, email: payload.email });
      window.dispatchEvent(
        new CustomEvent("enquiry:submitted", {
          detail: { reference: result.reference },
        }),
      );
      requestAnimationFrame(() => statusRef.current?.focus());
    } catch (cause) {
      setError(
        cause instanceof Error &&
          cause.name !== "AbortError" &&
          cause.message !== "Failed to fetch"
          ? cause.message
          : "We couldn’t confirm receipt. Your brief is still here. Please try again—retries won’t create a second enquiry.",
      );
    } finally {
      clearTimeout(timeout);
      setSending(false);
    }
  }

  return (
    <div id="quote" className="b2-form v3-enquiry-anchor">
      {receipt ? (
        <div ref={statusRef} className="v3-receipt" role="status" tabIndex={-1}>
          <span className="v3-receipt-check">
            <Check size={26} />
          </span>
          <p className="b2-eyebrow">Your next story starts here</p>
          <h3>We’ve received your enquiry.</h3>
          <p>
            Your reference is <strong>{receipt.reference}</strong>. Our team
            will review your brief and follow up at{" "}
            <strong>{receipt.email}</strong> to discuss the direction, scope and
            next steps.
          </p>
          <p>
            No need to send a separate email. Keep your reference if you’d like
            to follow up by phone.
          </p>
          <a href="tel:+18336666684" className="b2-text-link">
            (833) 666-6684 <ArrowRight size={17} />
          </a>
          <button
            type="button"
            className="v3-start-again"
            onClick={() => {
              setReceipt(null);
              setBrief("");
              request.current = null;
            }}
          >
            Start another enquiry
          </button>
        </div>
      ) : (
        <form
          onSubmit={submit}
          aria-label="Request a custom animation quote"
          onChange={() => {
            if (error) setError("");
            if (Object.keys(fields).length) setFields({});
          }}
        >
          <h3>Let’s talk about your project.</h3>
          <p className="v3-form-intro">
            Tell us a little. We’ll help with the rest.
          </p>
          <fieldset disabled={sending}>
            <div className="b2-form-row">
              <label htmlFor="enquiry-name">
                Your name
                <input
                  id="enquiry-name"
                  name="name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder="Full name"
                  aria-invalid={!!fields.name}
                  aria-describedby={fields.name ? "name-error" : undefined}
                />
                {fields.name && (
                  <span id="name-error" className="v3-field-error">
                    {fields.name}
                  </span>
                )}
              </label>
              <label htmlFor="enquiry-email">
                Email address
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@company.com"
                  aria-invalid={!!fields.email}
                  aria-describedby={fields.email ? "email-error" : undefined}
                />
                {fields.email && (
                  <span id="email-error" className="v3-field-error">
                    {fields.email}
                  </span>
                )}
              </label>
            </div>
            <label htmlFor="enquiry-company">
              Company <span>(optional)</span>
              <input
                id="enquiry-company"
                name="company"
                autoComplete="organization"
                maxLength={160}
                placeholder="Company or brand"
              />
            </label>
            <label htmlFor="enquiry-scope">
              Project scope
              <select
                id="enquiry-scope"
                name="scope"
                value={scope}
                onChange={(event) => setScope(event.target.value)}
              >
                {[
                  "Help me choose",
                  "A single video",
                  "A campaign or series",
                  "Custom scope",
                ].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label htmlFor="enquiry-brief">
              What would you like your video to do?
              <textarea
                id="enquiry-brief"
                name="brief"
                required
                minLength={12}
                maxLength={5000}
                rows={4}
                value={brief}
                onChange={(event) => setBrief(event.target.value)}
                placeholder="Your product, audience, goal and any deadline…"
                aria-invalid={!!fields.brief}
                aria-describedby={fields.brief ? "brief-error" : undefined}
              />
              {fields.brief && (
                <span id="brief-error" className="v3-field-error">
                  {fields.brief}
                </span>
              )}
            </label>
            <div className="v3-honeypot" aria-hidden="true">
              <label>
                Leave this field empty
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            {error && (
              <p className="v3-submit-error" role="alert">
                {error}
              </p>
            )}
            <button className="b2-button" type="submit" disabled={sending}>
              {sending ? (
                <>
                  Sending your enquiry{" "}
                  <LoaderCircle size={18} className="v3-spinner" />
                </>
              ) : (
                <>
                  Send my enquiry <ArrowRight size={18} />
                </>
              )}
            </button>
          </fieldset>
          <p className="b2-form-note">
            No obligation. Your details are used to respond to this enquiry.{" "}
            <a href="/privacy-policy">Privacy policy</a>
          </p>
        </form>
      )}
    </div>
  );
}
