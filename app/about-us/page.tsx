import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Story } from "@/components/sections/Story";
import { SketchToScreen } from "@/components/sections/SketchToScreen";
import { CreativeProcess } from "@/components/sections/CreativeProcess";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "About Us | VideoAnimation.us",
  description:
    "Next-Gen Branding With Video Animation. Over 2,000+ projects completed, 500M+ client video views, $11M+ revenue generated, and 22+ international awards.",
};

const BY_THE_NUMBERS = [
  {
    value: "2,000+",
    label: "Projects Completed",
    detail: "Delivered for startups, authors, agencies, and Fortune 500 enterprises.",
  },
  {
    value: "500M+",
    label: "Views on Client Videos",
    detail: "Organic and paid reach across YouTube, broadcast, and social platforms.",
  },
  {
    value: "$11M+",
    label: "Revenue Generated",
    detail: "Measurable pipeline and product launch growth driven by our explainers & ads.",
  },
  {
    value: "22+",
    label: "International Awards",
    detail: "Recognized for excellence in character design, 3D craft, and storytelling.",
  },
] as const;

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b0b0c]">
      <main>
        {/* About Hero Section */}
        <section className="relative isolate w-full overflow-hidden bg-white pb-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <Image
              src="/images/story-bg.jpg"
              alt="VideoAnimation studio artists and directors"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/65" />
          </div>

          <Header />

          <div className="mx-auto max-w-[1400px] px-6 pt-8 sm:px-10 lg:px-[4.3vw] lg:pt-14">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-[#fff1ec] px-4 py-1.5 font-sans text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff2e1a]">
                ABOUT VIDEOANIMATION.US
              </span>
              <h1 className="mt-4 font-sans text-[clamp(2.4rem,5.1vw,5.1rem)] font-extrabold leading-[1.03] tracking-[-0.04em] text-[#0a0a0d]">
                Next-Gen Branding With{" "}
                <span className="text-hero-gradient">Video Animation.</span>
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-[16px] leading-[1.55] text-[#525560] lg:text-[18px]">
                We are a full-service creative animation studio uniting directors, scriptwriters,
                illustrators, 2D/3D animators, and sound designers under one roof to turn bold ideas
                into unforgettable visual stories.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/portfolio"
                  className="bg-cta-gradient inline-flex h-[48px] items-center justify-center gap-2.5 rounded-[10px] px-6 font-sans text-[14.5px] font-bold text-white shadow-[0_12px_28px_-6px_rgb(255_45_27/0.45)] transition-transform hover:-translate-y-0.5"
                >
                  <span>Explore Our Work</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex h-[48px] items-center justify-center rounded-[10px] border border-[#d9dce3] bg-white px-6 font-sans text-[14.5px] font-bold text-[#141519] transition-colors hover:border-[#ff4719] hover:text-[#ff2e1a]"
                >
                  Meet Our Producers
                </Link>
              </div>
            </div>

            {/* By The Numbers Grid (From Live Site) */}
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {BY_THE_NUMBERS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[20px] border border-[#eceef4] bg-white/95 p-6 shadow-[0_14px_34px_-12px_rgb(15_23_42/0.08)]"
                >
                  <p className="font-sans text-[38px] font-black tracking-[-0.04em] text-hero-gradient lg:text-[44px]">
                    {stat.value}
                  </p>
                  <h2 className="mt-1 font-sans text-[17px] font-extrabold text-[#0c0d12]">
                    {stat.label}
                  </h2>
                  <p className="mt-2 font-sans text-[13.5px] leading-[1.45] text-[#646774]">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Story, Sketch-to-Screen, Process & Testimonials */}
        <Story />
        <SketchToScreen />
        <CreativeProcess />
        <Testimonials />
      </main>
    </div>
  );
}
