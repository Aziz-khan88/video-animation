"use client";

import Link from "next/link";
import {
  FloatingElement,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

function PaperPlaneIcon() {
  return (
    <svg
      viewBox="0 0 72 60"
      className="h-12 w-14 lg:h-[5.4vw] lg:w-[6.3vw]"
      fill="none"
      aria-hidden="true"
    >
      {/* Lower paper fold */}
      <path
        d="M62 8 34 52l-6-20L62 8Z"
        fill="#f4f6f9"
        stroke="#7e8490"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Upper dark wing stroke */}
      <path
        d="M62 8 10 32l18 0L62 8Z"
        fill="#ffffff"
        stroke="#161c26"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center crease */}
      <path
        d="M62 8 28 32"
        stroke="#161c26"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GoldCrownIcon() {
  return (
    <svg
      viewBox="0 0 80 62"
      className="h-12 w-16 lg:h-[5.4vw] lg:w-[6.8vw]"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gold-crown-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fae08c" />
          <stop offset="55%" stopColor="#efc050" />
          <stop offset="100%" stopColor="#d99722" />
        </linearGradient>
        <linearGradient id="gold-crown-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3c556" />
          <stop offset="50%" stopColor="#e5a429" />
          <stop offset="100%" stopColor="#ce8514" />
        </linearGradient>
      </defs>
      {/* Crown main silhouette */}
      <path
        d="M8 52 13 17l16 16L40 9l11 24 16-16 5 35H8Z"
        fill="url(#gold-crown-right)"
      />
      {/* Left lighter facet */}
      <path
        d="M8 52 13 17l16 16L40 9v43H8Z"
        fill="url(#gold-crown-left)"
      />
      {/* Subtle diagonal sheen */}
      <path
        d="M29 33 40 9l5 11-18 32H8l21-19Z"
        fill="#fbe59b"
        fillOpacity="0.35"
      />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg
      viewBox="0 0 72 62"
      className="h-12 w-14 lg:h-[5.4vw] lg:w-[6.3vw]"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer upper left & right subtle grey edges */}
      <path
        d="M21 8h30l13 14-28 34L8 22 21 8Z"
        fill="#ffffff"
        stroke="#9fa5b2"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Crisp dark center geometric facets */}
      <path
        d="M21 8 28 22 36 56 44 22 51 8M8 22h56M28 22l8-14 8 14"
        stroke="#151a22"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 22 36 56 64 22"
        stroke="#7d8390"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PLANS = [
  {
    name: "SILVER",
    subtitle: "A great fit for shorter videos",
    featured: false,
    icon: <PaperPlaneIcon />,
    features: [
      "Ideal for small projects",
      "High-quality 2D animation",
      "Essential production features",
    ],
  },
  {
    name: "GOLD",
    subtitle: "Built for growing businesses",
    featured: true,
    icon: <GoldCrownIcon />,
    features: [
      "Custom characters & scenes",
      "Advanced animation & effects",
      "Priority project support",
    ],
  },
  {
    name: "PLATINUM",
    subtitle: "For larger, complex productions",
    featured: false,
    icon: <DiamondIcon />,
    features: [
      "Fully customized production",
      "Premium visual features",
      "Dedicated project support",
    ],
  },
] as const;

export function TwoDPricingPlans() {
  return (
    <section
      id="two-d-pricing"
      aria-labelledby="two-d-pricing-heading"
      className="relative isolate w-full overflow-hidden bg-white py-8 lg:min-h-[56.25vw] lg:py-0"
    >
      {/* Top-Left Header: 10 Badge + PRICING PLANS + Subtitle */}
      <Reveal className="w-full px-6 pt-2 sm:px-10 lg:px-[2.45vw] lg:pt-[2.2vw]" y={18}>
        <div className="flex items-center gap-4 lg:gap-[2.05vw]">
          <span className="grid h-[48px] w-[50px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#e31720_0%,#f22d22_100%)] font-sans text-[20px] font-extrabold tracking-[-0.02em] text-white shadow-[0_8px_20px_-4px_rgb(229_24_34/0.42)] lg:h-[5.85vw] lg:w-[6.05vw] lg:rounded-[1.1vw] lg:text-[2.35vw]">
            10
          </span>
          <div>
            <h2
              id="two-d-pricing-heading"
              className="font-sans text-[clamp(1.25rem,2.35vw,2.45rem)] font-black uppercase leading-[1.08] tracking-[-0.02em] text-[#090a0d]"
            >
              PRICING PLANS
            </h2>
            <p className="mt-1 font-sans text-[13.5px] font-normal leading-[1.25] tracking-[-0.01em] text-[#747882] lg:mt-[0.25vw] lg:text-[1.48vw]">
              Flexible plans to suit your project needs.
            </p>
          </div>
        </div>
      </Reveal>

      {/* 3 Pricing Cards Row */}
      <div className="mt-6 w-full px-6 sm:px-10 lg:mt-[1.65vw] lg:px-[2.55vw]">
        <StaggerGroup
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-[2.45vw]"
          stagger={0.11}
        >
          {PLANS.map((plan, index) => (
            <StaggerItem key={plan.name} y={24}>
              <article
                className={
                  plan.featured
                    ? "relative flex h-full flex-col justify-between rounded-[16px] border-[1.8px] border-[#ff7d1a] bg-white px-6 pt-7 pb-6 shadow-[0_14px_38px_-8px_rgb(255_115_22/0.18)] transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[39.8vw] lg:rounded-[1.35vw] lg:px-[2.15vw] lg:pt-[2.2vw] lg:pb-[2.1vw]"
                    : "relative flex h-full flex-col justify-between rounded-[16px] border border-[#edf0f5] bg-[#fafbfc] px-6 pt-7 pb-6 shadow-[0_12px_32px_-8px_rgb(15_23_42/0.07)] transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[39.8vw] lg:rounded-[1.35vw] lg:px-[2.15vw] lg:pt-[2.2vw] lg:pb-[2.1vw]"
                }
              >
                <div>
                  {/* Centered Plan Icon + Heading + Subtitle */}
                  <div className="flex flex-col items-center text-center">
                    <FloatingElement
                      className="grid h-14 place-items-center lg:h-[5.8vw]"
                      amplitude={4}
                      duration={4.5}
                      delay={index * 0.4}
                    >
                      {plan.icon}
                    </FloatingElement>

                    <h3 className="mt-3 font-sans text-[24px] font-black uppercase leading-none tracking-[-0.02em] text-[#090a0d] lg:mt-[1.2vw] lg:text-[2.55vw]">
                      {plan.name}
                    </h3>

                    <p className="mt-2.5 font-sans text-[14px] font-normal leading-[1.3] tracking-[-0.01em] text-[#747882] lg:mt-[0.85vw] lg:text-[1.44vw]">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* 3 Feature Rows */}
                  <ul className="mt-6 space-y-4 lg:mt-[2.1vw] lg:space-y-[1.45vw]">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3.5 lg:gap-[1.15vw]"
                      >
                        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ee1921_0%,#ff4d17_55%,#ff7a10_100%)] text-white shadow-[0_4px_10px_rgb(255_55_22/0.3)] lg:size-[2.25vw]">
                          <svg
                            viewBox="0 0 16 16"
                            className="size-3.5 lg:size-[1.25vw]"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="m3.8 8.3 2.6 2.6 5.8-5.8"
                              stroke="currentColor"
                              strokeWidth="2.1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="font-sans text-[14.5px] font-normal leading-[1.3] tracking-[-0.01em] text-[#1e2028] lg:text-[1.42vw]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Get Started CTA Button */}
                <div className="mt-8 lg:mt-[2.6vw]">
                  <Link
                    href="#contact"
                    className="group inline-flex h-[48px] w-full items-center justify-center gap-2.5 rounded-[10px] bg-[linear-gradient(90deg,#e91522_0%,#ff4618_52%,#f67c11_100%)] font-sans text-[15px] font-bold tracking-[-0.01em] text-white shadow-[0_10px_22px_-6px_rgb(255_55_22/0.42)] transition-transform duration-150 hover:-translate-y-0.5 lg:h-[4.3vw] lg:gap-[0.8vw] lg:rounded-[0.85vw] lg:text-[1.46vw]"
                  >
                    <span>Get Started</span>
                    <svg
                      viewBox="0 0 16 16"
                      className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 lg:size-[1.2vw]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m6 4 4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Bottom-Left Disclaimer Note */}
        <Reveal delay={0.2} y={10}>
          <p className="mt-4 font-sans text-[11px] font-normal tracking-[-0.005em] text-[#9ca0aa] lg:mt-[1.45vw] lg:pl-[0.4vw] lg:text-[1.02vw]">
            Package details shown are concept copy; confirm actual service inclusions before publishing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
