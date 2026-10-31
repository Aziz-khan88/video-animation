import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Privacy Policy | VideoAnimation.us",
  description: "Privacy Policy and Data Protection practices for VideoAnimation.us.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b0b0c]">
      <main>
        <Header />
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10">
          <span className="font-sans text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff2e1a]">
            PRIVACY &amp; SECURITY
          </span>
          <h1 className="mt-2 font-sans text-[clamp(2rem,4vw,3.6rem)] font-extrabold tracking-[-0.03em] text-[#0a0a0d]">
            Privacy Policy
          </h1>
          <div className="mt-8 space-y-6 font-sans text-[15px] leading-[1.65] text-[#4e515c]">
            <p>
              At <strong>VideoAnimation.us</strong>, we respect your privacy and are committed to
              protecting your personal and project information.
            </p>
            <h2 className="font-sans text-[20px] font-extrabold text-[#0c0d12]">
              1. Information We Collect
            </h2>
            <p>
              We collect contact details (name, work email, phone number) and project briefs that you
              voluntarily submit through our quote and contact forms so our producers can prepare
              accurate estimates and creative treatments.
            </p>
            <h2 className="font-sans text-[20px] font-extrabold text-[#0c0d12]">
              2. Confidentiality &amp; NDA
            </h2>
            <p>
              All scripts, unreleased product assets, CAD files, and storyboards shared with our
              studio are treated as strictly confidential. We happily execute mutual NDAs prior to
              project kickoff.
            </p>
            <h2 className="font-sans text-[20px] font-extrabold text-[#0c0d12]">
              3. Contact Us
            </h2>
            <p>
              To request data deletion or inquire about our privacy practices, email{" "}
              <a href="mailto:hello@videoanimation.us" className="font-bold text-[#ff2e1a]">
                hello@videoanimation.us
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
