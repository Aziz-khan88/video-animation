import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Terms & Conditions | VideoAnimation.us",
  description: "Terms of Use and Production Agreement for VideoAnimation.us.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b0b0c]">
      <main>
        <Header />
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10">
          <span className="font-sans text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff2e1a]">
            LEGAL
          </span>
          <h1 className="mt-2 font-sans text-[clamp(2rem,4vw,3.6rem)] font-extrabold tracking-[-0.03em] text-[#0a0a0d]">
            Terms &amp; Conditions
          </h1>
          <div className="mt-8 space-y-6 font-sans text-[15px] leading-[1.65] text-[#4e515c]">
            <p>
              Welcome to <strong>VideoAnimation.us</strong>. By accessing our website or engaging our
              studio for 2D animation, 3D animation, motion graphics, video editing, or CGI/VFX
              services, you agree to the following terms and conditions.
            </p>
            <h2 className="font-sans text-[20px] font-extrabold text-[#0c0d12]">
              1. Project Milestones &amp; Revisions
            </h2>
            <p>
              Every production proceeds through structured approval stages: Scriptwriting,
              Storyboard/Illustration, Voiceover, and Animation. Unlimited revisions apply within the
              agreed scope of each milestone prior to final sign-off.
            </p>
            <h2 className="font-sans text-[20px] font-extrabold text-[#0c0d12]">
              2. Intellectual Property &amp; Ownership
            </h2>
            <p>
              Upon receipt of full payment for your selected package or custom quote, 100% of the
              commercial usage and ownership rights to the final rendered video transfer to the
              client.
            </p>
            <h2 className="font-sans text-[20px] font-extrabold text-[#0c0d12]">
              3. Contact Information
            </h2>
            <p>
              For questions regarding these terms, contact us at{" "}
              <a href="mailto:hello@videoanimation.us" className="font-bold text-[#ff2e1a]">
                hello@videoanimation.us
              </a>{" "}
              or call{" "}
              <a href="tel:8336666684" className="font-bold text-[#ff2e1a]">
                (833) 666-6684
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
