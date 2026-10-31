"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ParallaxBackground,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

interface BottomIndustryItem {
  id: string;
  name: string;
  subtitle: string;
  thumbnail: string;
  alt: string;
}

const BOTTOM_INDUSTRIES: BottomIndustryItem[] = [
  {
    id: "technology",
    name: "Technology",
    subtitle: "Animation",
    thumbnail: "/images/contact-thumb-1-tech.jpg",
    alt: "Technology Animation — laptop and analytics dashboard",
  },
  {
    id: "education",
    name: "Education",
    subtitle: "Animation",
    thumbnail: "/images/contact-thumb-2-education.jpg",
    alt: "Education Animation — 3D character with glowing lightbulb",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    subtitle: "Animation",
    thumbnail: "/images/contact-thumb-3-healthcare.jpg",
    alt: "Healthcare Animation — 3D medical professional",
  },
  {
    id: "retail",
    name: "Retail",
    subtitle: "Animation",
    thumbnail: "/images/contact-thumb-4-retail.jpg",
    alt: "Retail Animation — shopping cart and mobile storefront",
  },
  {
    id: "marketing",
    name: "Marketing",
    subtitle: "Animation",
    thumbnail: "/images/contact-thumb-5-marketing.jpg",
    alt: "Marketing Animation — megaphone and growth charts",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    subtitle: "Animation",
    thumbnail: "/images/contact-thumb-6-manufacturing.jpg",
    alt: "Manufacturing Animation — 3D industrial turbine engine",
  },
];

const TRUST_BADGES = [
  "Named producer replies",
  "No surprises",
  "Fast turnaround",
] as const;

export function LandingContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="quote"
      aria-label="08 — Ready to Create"
      className="relative w-full overflow-hidden bg-white text-[#0b0c10] lg:aspect-[16/9] lg:min-h-[56.25vw]"
    >
      {/* Desktop Full-Bleed Studio Background Scene */}
      <ParallaxBackground
        className="pointer-events-none hidden lg:absolute lg:inset-0 lg:block"
        offset={20}
      >
        <Image
          src="/images/landing-contact-bg.jpg"
          alt="3D animator illustrating storyboards and 3D scenes on a dual studio display"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      </ParallaxBackground>

      {/* Top Eyebrow Row: 08 READY TO CREATE (Left) + Arrow (Right) */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-6 sm:px-10 lg:absolute lg:inset-x-[1.95%] lg:top-[3.1%] lg:px-0 lg:pt-0">
        <Reveal className="flex items-center gap-3 lg:gap-[1.35vw]">
          <span className="font-sans text-[20px] font-extrabold tracking-[-0.03em] text-[#0b0c10] lg:text-[2.15vw]">
            08
          </span>
          <span className="font-sans text-[11px] font-bold tracking-[0.14em] text-[#111318] uppercase lg:text-[1.12vw]">
            READY TO CREATE
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <svg
            viewBox="0 0 36 16"
            className="h-[14px] w-[30px] text-[#111318] lg:h-[1.5vw] lg:w-[3.15vw]"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 8h33M27.5 1.5 34 8l-6.5 6.5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Reveal>
      </div>

      {/* Centered Display Heading & Subtitle */}
      <div className="relative z-10 mt-6 px-6 text-center sm:px-10 lg:absolute lg:top-[13.8%] lg:left-[18.2%] lg:mt-0 lg:w-[71%] lg:px-0">
        <Reveal>
          <h2 className="font-sans text-[32px] leading-[1.03] font-extrabold tracking-[-0.04em] text-[#0a0b0e] sm:text-[44px] lg:whitespace-nowrap lg:text-[5.5vw]">
            Tell us about{" "}
            <span className="bg-[linear-gradient(90deg,#ea121a_0%,#ff2e08_48%,#ff6b00_100%)] bg-clip-text text-transparent">
              your project.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mx-auto mt-2 max-w-[640px] font-sans text-[13.5px] font-medium tracking-[-0.01em] text-[#283044] sm:text-[15px] lg:mt-[0.45vw] lg:max-w-none lg:text-[1.25vw]">
            Share a few details and we&apos;ll get back to you with a clear, fixed quote.
          </p>
        </Reveal>
      </div>

      {/* Mobile / Tablet Studio Preview Image */}
      <div className="relative mt-6 px-6 sm:px-10 lg:hidden">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/images/landing-contact-bg.jpg"
            alt="3D animator working at studio monitor"
            fill
            sizes="100vw"
            className="object-cover object-left-top"
          />
        </div>
      </div>

      {/* Right-Side Interactive Quote Form Card */}
      <div className="relative z-20 mx-auto mt-6 max-w-[540px] px-6 sm:px-10 lg:absolute lg:top-[31.42%] lg:left-[59.57%] lg:mx-0 lg:mt-0 lg:h-[26.86vw] lg:w-[37.7vw] lg:max-w-none lg:px-0">
        <Reveal
          delay={0.1}
          className=" flex h-full w-full flex-col justify-between rounded-[16px] bg-white p-5 shadow-[0_18px_48px_-12px_rgba(12,18,30,0.22)] ring-1 ring-[#e6e9f0] sm:p-6 lg:rounded-[1.56vw] lg:px-[1.55vw] lg:py-[1.25vw]"
        >
          {submitted ? (
            <div className="flex flex-1 flex-col items-center justify-center py-8 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-[#fff1f0] text-[#f51415] lg:size-[3.2vw]">
                <svg
                  viewBox="0 0 24 24"
                  className="size-6 lg:size-[1.6vw]"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12.5 9.5 17 19 7.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-3 font-sans text-[18px] font-bold text-[#0c0e14] lg:mt-[0.8vw] lg:text-[1.35vw]">
                Request received!
              </h3>
              <p className="mt-1 max-w-[320px] font-sans text-[13px] text-[#4b5262] lg:text-[0.95vw]">
                A named producer will reply with your clear, fixed quote on weekdays.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 font-sans text-[12px] font-semibold text-[#ff2a14] underline underline-offset-4 lg:mt-[0.9vw] lg:text-[0.88vw]"
              >
                Send another project brief
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col justify-between gap-3.5 lg:gap-[0.65vw]"
            >
              {/* Row 1: Service + Timeline */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-[0.95vw]">
                {/* Field 1: What service do you need? */}
                <div>
                  <label
                    htmlFor="quote-service"
                    className="mb-1 block font-sans text-[11.5px] font-semibold tracking-[-0.01em] text-[#181b22] lg:mb-[0.3vw] lg:text-[0.84vw]"
                  >
                    What service do you need?{" "}
                    <span className="text-[#f01818]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    {/* Play triangle icon */}
                    <svg
                      viewBox="0 0 16 16"
                      className="pointer-events-none absolute left-2.5 size-3.5 text-[#373d4b] lg:left-[0.68vw] lg:size-[0.92vw]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4.2 3.2c0-.6.65-.95 1.15-.62l6.8 4.4c.46.3.46.96 0 1.26l-6.8 4.4c-.5.33-1.15-.02-1.15-.62V3.2Z"
                        stroke="currentColor"
                        strokeWidth="1.35"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <select
                      id="quote-service"
                      name="service"
                      required
                      defaultValue=""
                      className="h-[36px] w-full appearance-none rounded-[7px] border border-[#dce0e8] bg-white pr-7 pl-8 font-sans text-[12px] text-[#222630] invalid:text-[#8c93a4] focus:border-[#ff3b14] focus:outline-none lg:h-[2.75vw] lg:rounded-[0.48vw] lg:pr-[1.8vw] lg:pl-[2.05vw] lg:text-[0.82vw]"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="2d-explainer">2D Explainer Video ($2,999)</option>
                      <option value="3d-animation">3D Animation (From $5,500)</option>
                      <option value="motion-graphics">Motion Graphics</option>
                      <option value="whiteboard">Whiteboard Animation</option>
                      <option value="product-demo">Product & SaaS Demo</option>
                    </select>
                    {/* Chevron down */}
                    <svg
                      viewBox="0 0 16 16"
                      className="pointer-events-none absolute right-2.5 size-3.5 text-[#373d4b] lg:right-[0.65vw] lg:size-[0.88vw]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m4.5 6.2 3.5 3.5 3.5-3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Field 2: When do you need it? */}
                <div>
                  <label
                    htmlFor="quote-timeline"
                    className="mb-1 block font-sans text-[11.5px] font-semibold tracking-[-0.01em] text-[#181b22] lg:mb-[0.3vw] lg:text-[0.84vw]"
                  >
                    When do you need it?{" "}
                    <span className="text-[#f01818]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    {/* Calendar icon */}
                    <svg
                      viewBox="0 0 16 16"
                      className="pointer-events-none absolute left-2.5 size-3.5 text-[#373d4b] lg:left-[0.68vw] lg:size-[0.92vw]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="2.2"
                        y="3.2"
                        width="11.6"
                        height="10.4"
                        rx="1.8"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                      <path
                        d="M2.2 6.4h11.6M5.2 2v2.2M10.8 2v2.2"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <select
                      id="quote-timeline"
                      name="timeline"
                      required
                      defaultValue=""
                      className="h-[36px] w-full appearance-none rounded-[7px] border border-[#dce0e8] bg-white pr-7 pl-8 font-sans text-[12px] text-[#222630] invalid:text-[#8c93a4] focus:border-[#ff3b14] focus:outline-none lg:h-[2.75vw] lg:rounded-[0.48vw] lg:pr-[1.8vw] lg:pl-[2.05vw] lg:text-[0.82vw]"
                    >
                      <option value="" disabled>
                        Select timeline
                      </option>
                      <option value="2-3-weeks">2–3 weeks (Rush)</option>
                      <option value="4-6-weeks">4–6 weeks (Standard)</option>
                      <option value="1-2-months">1–2 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    {/* Chevron down */}
                    <svg
                      viewBox="0 0 16 16"
                      className="pointer-events-none absolute right-2.5 size-3.5 text-[#373d4b] lg:right-[0.65vw] lg:size-[0.88vw]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m4.5 6.2 3.5 3.5 3.5-3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 2: Your name + Your email */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-[0.95vw]">
                {/* Field 3: Your name */}
                <div>
                  <label
                    htmlFor="quote-name"
                    className="mb-1 block font-sans text-[11.5px] font-semibold tracking-[-0.01em] text-[#181b22] lg:mb-[0.3vw] lg:text-[0.84vw]"
                  >
                    Your name <span className="text-[#f01818]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    {/* User icon */}
                    <svg
                      viewBox="0 0 16 16"
                      className="pointer-events-none absolute left-2.5 size-3.5 text-[#373d4b] lg:left-[0.68vw] lg:size-[0.92vw]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="8"
                        cy="5.4"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                      <path
                        d="M3.2 13.4c.5-2.3 2.4-3.6 4.8-3.6s4.3 1.3 4.8 3.6"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <input
                      id="quote-name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      className="h-[36px] w-full rounded-[7px] border border-[#dce0e8] bg-white pr-3 pl-8 font-sans text-[12px] text-[#222630] placeholder:text-[#8c93a4] focus:border-[#ff3b14] focus:outline-none lg:h-[2.75vw] lg:rounded-[0.48vw] lg:pr-[0.8vw] lg:pl-[2.05vw] lg:text-[0.82vw]"
                    />
                  </div>
                </div>

                {/* Field 4: Your email */}
                <div>
                  <label
                    htmlFor="quote-email"
                    className="mb-1 block font-sans text-[11.5px] font-semibold tracking-[-0.01em] text-[#181b22] lg:mb-[0.3vw] lg:text-[0.84vw]"
                  >
                    Your email <span className="text-[#f01818]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    {/* Mail envelope icon */}
                    <svg
                      viewBox="0 0 16 16"
                      className="pointer-events-none absolute left-2.5 size-3.5 text-[#373d4b] lg:left-[0.68vw] lg:size-[0.92vw]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="2"
                        y="3.4"
                        width="12"
                        height="9.2"
                        rx="1.6"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                      <path
                        d="m2.5 4.4 5.5 4 5.5-4"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="h-[36px] w-full rounded-[7px] border border-[#dce0e8] bg-white pr-3 pl-8 font-sans text-[12px] text-[#222630] placeholder:text-[#8c93a4] focus:border-[#ff3b14] focus:outline-none lg:h-[2.75vw] lg:rounded-[0.48vw] lg:pr-[0.8vw] lg:pl-[2.05vw] lg:text-[0.82vw]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Tell us about your project */}
              <div>
                <label
                  htmlFor="quote-details"
                  className="mb-1 block font-sans text-[11.5px] font-semibold tracking-[-0.01em] text-[#181b22] lg:mb-[0.3vw] lg:text-[0.84vw]"
                >
                  Tell us about your project.{" "}
                  <span className="text-[#f01818]">*</span>
                </label>
                <div className="relative">
                  {/* Message bubble icon */}
                  <svg
                    viewBox="0 0 16 16"
                    className="pointer-events-none absolute top-2.5 left-2.5 size-3.5 text-[#373d4b] lg:top-[0.68vw] lg:left-[0.68vw] lg:size-[0.92vw]"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.4 3.4h11.2c.55 0 1 .45 1 1v6.4c0 .55-.45 1-1 1H6.2l-3.2 2.4v-2.4H2.4c-.55 0-1-.45-1-1V4.4c0-.55.45-1 1-1Z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.8 6.4h6.4M4.8 8.8h4.2"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <textarea
                    id="quote-details"
                    name="details"
                    required
                    rows={2}
                    placeholder="Share your goals, ideas, audience, style or any reference links..."
                    className="h-[58px] w-full resize-none rounded-[7px] border border-[#dce0e8] bg-white pt-2 pr-3 pb-2 pl-8 font-sans text-[12px] leading-[1.35] text-[#222630] placeholder:text-[#8c93a4] focus:border-[#ff3b14] focus:outline-none lg:h-[4.35vw] lg:rounded-[0.48vw] lg:pt-[0.55vw] lg:pr-[0.8vw] lg:pb-[0.45vw] lg:pl-[2.05vw] lg:text-[0.82vw]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group inline-flex h-[42px] w-full items-center justify-center gap-2 rounded-[9px] bg-[linear-gradient(90deg,#f50914_0%,#ff3205_52%,#ff8a00_100%)] font-sans text-[14px] font-bold tracking-[-0.01em] text-white shadow-[0_8px_22px_-4px_rgba(255,45,20,0.48)] transition-transform duration-200 hover:-translate-y-0.5 lg:h-[3.8vw] lg:gap-[0.55vw] lg:rounded-[0.65vw] lg:text-[1.12vw]"
              >
                <span>Get a Fixed Quote</span>
                <svg
                  viewBox="0 0 20 20"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 lg:size-[1.15vw]"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4.2 10h11.6M10.8 5.2 15.8 10l-5 4.8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Bottom 3 Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 pt-0.5 lg:justify-between lg:gap-x-[0.8vw] lg:px-[0.5vw] lg:pt-0">
                {TRUST_BADGES.map((badge) => (
                  <div
                    key={badge}
                    className="inline-flex items-center gap-1.5 lg:gap-[0.42vw]"
                  >
                    <span className="flex size-[15px] shrink-0 items-center justify-center rounded-full bg-[#f3121b] text-white lg:size-[1.22vw]">
                      <svg
                        viewBox="0 0 12 12"
                        className="size-2.5 lg:size-[0.72vw]"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.6 6.2 4.9 8.5 9.4 3.8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-sans text-[11px] font-medium tracking-[-0.01em] text-[#262b36] lg:text-[0.78vw]">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </form>
          )}
        </Reveal>
      </div>

      {/* Bottom 6-Industry Thumbnail Strip */}
      <div className="relative z-10 mt-8 border-t border-[#eef0f5] bg-white px-6 py-5 sm:px-10 lg:absolute lg:inset-x-0 lg:top-[80.9%] lg:mt-0 lg:flex lg:h-[10.07%] lg:items-center lg:border-t-0 lg:px-[3.22vw] lg:py-0">
        <StaggerGroup
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-0"
          stagger={0.07}
          delayChildren={0.08}
        >
          {BOTTOM_INDUSTRIES.map((item) => (
            <StaggerItem
              key={item.id}
              className="group flex items-center gap-2.5 lg:gap-[0.88vw]"
            >
              <div className="relative h-[42px] w-[66px] shrink-0 overflow-hidden rounded-[8px] shadow-[0_2px_8px_rgba(15,23,42,0.08)] lg:h-[4.3vw] lg:w-[7.1vw] lg:rounded-[0.68vw]">
                <Image
                  src={item.thumbnail}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 8vw, 80px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className=" leading-[1.18]">
                <p className="font-sans text-[12.5px] font-bold tracking-[-0.015em] text-[#0e1117] lg:text-[0.95vw]">
                  {item.name}
                </p>
                <p className="font-sans text-[12px] font-normal tracking-[-0.01em] text-[#2b303c] lg:text-[0.93vw]">
                  {item.subtitle}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* Bottom Dark Brand Footer Strip */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 bg-[#020912] px-6 py-4 text-white sm:px-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-[9.03%] lg:gap-0 lg:px-[1.95vw] lg:py-0">
        <Link
          href="/"
          aria-label="VideoAnimation.us — Home"
          className="group inline-flex items-center gap-2 lg:gap-[0.68vw]"
        >
          <svg
            viewBox="0 0 42 44"
            className="h-[24px] w-[22px] shrink-0 transition-transform duration-300 group-hover:scale-105 lg:h-[2.45vw] lg:w-[2.28vw]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="landing-contact-footer-play"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ff1821" />
                <stop offset="55%" stopColor="#ff4719" />
                <stop offset="100%" stopColor="#ff6c11" />
              </linearGradient>
            </defs>
            <path
              d="M6.5 7.2c0-2.7 3-4.3 5.3-2.9l23.4 14.8c2.1 1.3 2.1 4.5 0 5.8L11.8 39.7c-2.3 1.4-5.3-.2-5.3-2.9V7.2Z"
              fill="none"
              stroke="url(#landing-contact-footer-play)"
              strokeWidth="4.8"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-sans text-[15px] font-extrabold tracking-[-0.025em] text-white lg:text-[1.28vw]">
            VideoAnimation.us
          </span>
        </Link>

        <span
          aria-hidden="true"
          className="hidden h-[18px] w-px bg-white/25 sm:inline-block lg:mx-[1.45vw] lg:h-[1.85vw]"
        />

        <p className="font-sans text-[12px] font-normal tracking-[-0.005em] text-white/85 lg:text-[1.02vw]">
          Animation that explains, educates and inspires.
        </p>
      </div>
    </section>
  );
}
