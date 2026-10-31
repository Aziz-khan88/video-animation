import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { CreativeProcess } from "@/components/sections/CreativeProcess";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Animation Pricing & Packages | VideoAnimation.us",
  description:
    "Realistic Animations With Best Rates. Explore our transparent Silver, Gold, and Platinum animation packages with unlimited revisions and dedicated studio support.",
};

const PRICING_PLANS = [
  {
    name: "Silver Package",
    tagline: "Ideal for startups, product intros, and crisp brand explainers.",
    price: "$499",
    duration: "30 Seconds Duration",
    popular: false,
    features: [
      "30 Seconds Duration",
      "Professional Script Writing",
      "Custom Artwork & Storyboard",
      "Background Music & Sound Effects (SFX)",
      "Professional Voice-over Recording",
      "Unlimited Revisions",
      "1080p Full HD Format Video",
      "100% Ownership Rights",
      "Dedicated Project Manager",
    ],
  },
  {
    name: "Gold Package",
    tagline: "Our most popular studio package for bespoke hand-drawn illustration & storytelling.",
    price: "$999",
    duration: "60 Seconds Duration",
    popular: true,
    features: [
      "60 Seconds Duration",
      "Conversion-Focused Script Writing",
      "Hand-Drawn Custom Illustrations",
      "Custom Storyboarding & Animatics",
      "Professional Voice-over & Bespoke SFX",
      "Unlimited Revisions",
      "4K Ultra HD & Social Aspect Ratios",
      "Source Files Included",
      "Priority Dedicated Studio Support",
    ],
  },
  {
    name: "Platinum Package",
    tagline: "Cinema-grade character animation, complex environments, and multi-channel deliverables.",
    price: "$1,799",
    duration: "90+ Seconds Duration",
    popular: false,
    features: [
      "90 Seconds Duration (Customizable)",
      "Senior Creative Director & Scriptwriter",
      "Custom 2D / 3D Character Illustration & Rigging",
      "Rich Multi-Layered Environments",
      "Studio Voice-over Cast & Original Sound Design",
      "Unlimited Revisions",
      "4K Master + Raw Project Files",
      "Social Cutdowns (16:9, 9:16, 1:1)",
      "VIP 24/7 Dedicated Account Team",
    ],
  },
] as const;

const FAQS = [
  {
    q: "How much does a custom animated video cost?",
    a: "Our standard studio packages start at $499 for a 30-second 2D or motion graphics video. Complex 3D character animation, CGI/VFX, or architectural walkthroughs are quoted transparently based on runtime, asset complexity, and timeline.",
  },
  {
    q: "Do all packages really include unlimited revisions?",
    a: "Yes. At every production milestone—script, storyboard, illustration, voiceover, and animation—we refine the work until you are 100% thrilled before moving to the next stage.",
  },
  {
    q: "How long does it take to produce an animated video?",
    a: "A typical 30-to-60-second animation takes 2 to 4 weeks from kickoff to final master delivery. Need it sooner? Ask our producers about expedited studio rush delivery.",
  },
  {
    q: "Do I own full commercial rights to the finished animation?",
    a: "Absolutely. Upon completion, 100% of the commercial broadcast, web, and intellectual property rights transfer directly to your brand.",
  },
] as const;

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b0b0c]">
      <main>
        {/* Hero Section */}
        <section className="relative isolate w-full overflow-hidden bg-white pb-14">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <Image
              src="/images/hero-bg.jpg"
              alt="VideoAnimation studio pricing background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/95 to-white" />
          </div>

          <Header />

          <div className="mx-auto max-w-[1380px] px-6 pt-8 text-center sm:px-10 lg:pt-14">
            <span className="inline-flex items-center rounded-full bg-[#fff1ec] px-4 py-1.5 font-sans text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff2e1a]">
              TRANSPARENT STUDIO RATES
            </span>
            <h1 className="mx-auto mt-4 max-w-4xl font-sans text-[clamp(2.35rem,5vw,5rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#0a0a0d]">
              Realistic Animations With{" "}
              <span className="text-hero-gradient">Best Rates.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-[16px] leading-[1.55] text-[#555864] lg:text-[18px]">
              Predictable fixed-price packages with zero hidden fees. Every tier includes scriptwriting,
              custom artwork, professional voiceover, and unlimited revisions.
            </p>
          </div>

          {/* 3 Pricing Cards Grid */}
          <div className="mx-auto mt-12 max-w-[1340px] px-6 sm:px-10">
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
              {PRICING_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col justify-between rounded-[24px] p-8 transition-transform duration-200 hover:-translate-y-1 ${
                    plan.popular
                      ? "border-2 border-[#ff3b1b] bg-[#0d0e13] text-white shadow-[0_28px_65px_-15px_rgb(255_55_24/0.28)]"
                      : "border border-[#e7e9f0] bg-white text-[#0b0c10] shadow-[0_14px_38px_-12px_rgb(15_23_42/0.08)]"
                  }`}
                >
                  {plan.popular && (
                    <span className="bg-cta-gradient absolute -top-3.5 right-6 rounded-full px-4 py-1 font-sans text-[11px] font-extrabold uppercase tracking-[0.14em] text-white shadow-md">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="font-sans text-[24px] font-extrabold tracking-[-0.03em]">
                        {plan.name}
                      </h2>
                    </div>
                    <p
                      className={`mt-2 font-sans text-[13.5px] leading-[1.45] ${
                        plan.popular ? "text-white/75" : "text-[#646774]"
                      }`}
                    >
                      {plan.tagline}
                    </p>

                    <div className="mt-6 flex items-baseline gap-2 border-b border-current/10 pb-6">
                      <span className="font-sans text-[44px] font-black tracking-[-0.04em]">
                        {plan.price}
                      </span>
                      <span
                        className={`font-sans text-[13px] font-semibold ${
                          plan.popular ? "text-[#ff7e42]" : "text-[#686b78]"
                        }`}
                      >
                        / {plan.duration}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#ff3b1b]/15 text-[#ff4719]">
                            <svg viewBox="0 0 20 20" className="size-3.5" fill="none" aria-hidden="true">
                              <path
                                d="m5 10.2 3.2 3.2L15 6.6"
                                stroke="currentColor"
                                strokeWidth="2.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span
                            className={`font-sans text-[14px] leading-[1.35] ${
                              plan.popular ? "text-white/90" : "text-[#2c2e36]"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href="/contact-us"
                      className={
                        plan.popular
                          ? "bg-cta-gradient inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-[12px] font-sans text-[15px] font-bold text-white shadow-[0_12px_28px_-6px_rgb(255_45_27/0.5)] transition-transform hover:-translate-y-0.5"
                          : "inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-[12px] border-2 border-[#0c0d12] bg-transparent font-sans text-[15px] font-bold text-[#0c0d12] transition-colors hover:border-[#ff3b1b] hover:bg-[#ff3b1b] hover:text-white"
                      }
                    >
                      <span>Order {plan.name}</span>
                      <span>→</span>
                    </Link>
                    <div className="mt-3 flex items-center justify-between text-[12px] opacity-75">
                      <a href="tel:8336666684" className="hover:underline">
                        Call: (833) 666-6684
                      </a>
                      <Link href="/contact-us" className="hover:underline">
                        Request Custom Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creative Process & Testimonials */}
        <CreativeProcess />
        <Testimonials />

        {/* Pricing FAQ Section */}
        <section className="w-full bg-[#fafbfd] px-6 py-16 sm:px-10 lg:px-[4.3vw] lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="font-sans text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff2e1a]">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="mt-2 font-sans text-[clamp(1.85rem,3.4vw,3.1rem)] font-extrabold tracking-[-0.03em] text-[#0a0a0d]">
                Everything You Need to Know About Pricing
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {FAQS.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[18px] border border-[#e8eaf2] bg-white p-6 shadow-sm"
                >
                  <h3 className="font-sans text-[17px] font-extrabold text-[#0c0d12]">
                    {item.q}
                  </h3>
                  <p className="mt-2 font-sans text-[14px] leading-[1.55] text-[#5e616e]">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
