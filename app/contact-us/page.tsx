import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Contact Us | VideoAnimation.us",
  description:
    "Let's Create Something Beyond Ordinary, Our Team Would Love To Hear Your Idea. Call (833) 666-6684 or email hello@videoanimation.us.",
};

const OFFICES = [
  {
    city: "New York Studio",
    address: "389 Grand St, New York, NY 10002",
    phone: "(833) 666-6684",
    email: "hello@videoanimation.us",
  },
  {
    city: "Los Angeles Studio",
    address: "3415 S Sepulveda Blvd, Los Angeles, CA 90034",
    phone: "(833) 666-6684",
    email: "hello@videoanimation.us",
  },
] as const;

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b0b0c]">
      <main>
        <section className="relative isolate w-full overflow-hidden bg-[#fafbfd] pb-20">
          <Header />

          <div className="mx-auto max-w-[1380px] px-6 pt-8 sm:px-10 lg:px-[4.3vw] lg:pt-14">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Left Column: Headline & Direct Studio Contact Info */}
              <div className="lg:col-span-5">
                <span className="inline-flex items-center rounded-full bg-[#fff1ec] px-4 py-1.5 font-sans text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff2e1a]">
                  START THE CONVERSATION
                </span>
                <h1 className="mt-4 font-sans text-[clamp(2.2rem,4.1vw,4.1rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-[#0a0a0d]">
                  Let&apos;s Create Something{" "}
                  <span className="text-hero-gradient">Beyond Ordinary.</span>
                </h1>
                <p className="mt-4 font-sans text-[16px] leading-[1.55] text-[#555864]">
                  Our team would love to hear your idea. Whether you need a 30-second product
                  explainer, a 3D character spot, or an entire multi-video campaign, we are ready to
                  bring your vision to life.
                </p>

                {/* Direct Phone & Email Cards */}
                <div className="mt-8 space-y-4">
                  <a
                    href="tel:8336666684"
                    className="flex items-center gap-4 rounded-[16px] border border-[#e7e9f2] bg-white p-4 shadow-sm transition-colors hover:border-[#ff4719]"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-[12px] bg-[#fff1ec] font-sans text-[18px] font-bold text-[#ff2e1a]">
                      ☎
                    </span>
                    <div>
                      <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6d707c]">
                        Toll-Free Studio Line
                      </p>
                      <p className="font-sans text-[19px] font-extrabold text-[#0c0d12]">
                        (833) 666-6684
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@videoanimation.us"
                    className="flex items-center gap-4 rounded-[16px] border border-[#e7e9f2] bg-white p-4 shadow-sm transition-colors hover:border-[#ff4719]"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-[12px] bg-[#fff1ec] font-sans text-[18px] font-bold text-[#ff2e1a]">
                      ✉
                    </span>
                    <div>
                      <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6d707c]">
                        Direct Producer Email
                      </p>
                      <p className="font-sans text-[19px] font-extrabold text-[#0c0d12]">
                        hello@videoanimation.us
                      </p>
                    </div>
                  </a>
                </div>

                {/* NY & LA Studio Locations */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {OFFICES.map((office) => (
                    <div
                      key={office.city}
                      className="rounded-[16px] border border-[#e7e9f2] bg-white p-5"
                    >
                      <h2 className="font-sans text-[15px] font-extrabold text-[#0c0d12]">
                        {office.city}
                      </h2>
                      <p className="mt-1.5 font-sans text-[13px] leading-[1.45] text-[#646774]">
                        {office.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Multi-Service Contact Form */}
              <div className="lg:col-span-7">
                <ContactFormSection />
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
    </div>
  );
}
