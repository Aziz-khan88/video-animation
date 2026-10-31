"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  EASE_OUT_EXPO,
  ParallaxBackground,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

const FAQ_ITEMS = [
  {
    number: "01",
    question: "Do I get to approve the script?",
    answer:
      "Yes — you review and approve the script, visual style, and full storyboard before we animate a single frame.",
    icon: (
      <svg viewBox="0 0 28 28" className="size-5.5 shrink-0 lg:size-[2vw]" fill="none" aria-hidden="true">
        <rect
          x="5.5"
          y="4.5"
          width="15"
          height="19"
          rx="2"
          stroke="#111319"
          strokeWidth="1.9"
        />
        <path
          d="M9 9.5h7M9 13h6M9 16.5h4"
          stroke="#111319"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <path
          d="m16.2 18.8 6.3-6.3a1.4 1.4 0 0 1 2 2l-6.3 6.3-2.8.8.8-2.8Z"
          fill="#ff2b19"
          stroke="#ff2b19"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    question: "How many revisions are included?",
    answer:
      "Two structured revision rounds are included at every production stage — script, storyboard, and animation — so there are never surprise fees.",
    icon: (
      <svg viewBox="0 0 28 28" className="size-5.5 shrink-0 lg:size-[2vw]" fill="none" aria-hidden="true">
        <path
          d="M6.5 12A7.8 7.8 0 0 1 20 8.2L21.5 10M21.5 5.5V10H17"
          stroke="#111319"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.5 16A7.8 7.8 0 0 1 8 19.8L6.5 18M6.5 22.5V18H11"
          stroke="#111319"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    question: "Who owns the final video?",
    answer:
      "You own 100% of the rights to the final delivered animation files to use across your website, social channels, events, and paid campaigns.",
    icon: (
      <svg viewBox="0 0 28 28" className="size-5.5 shrink-0 lg:size-[2vw]" fill="none" aria-hidden="true">
        <path
          d="M14 4.5 6.5 7.8v6c0 5.2 3.2 8.7 7.5 10.2 4.3-1.5 7.5-5 7.5-10.2v-6L14 4.5Z"
          stroke="#111319"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path
          d="m10.8 14.2 2.2 2.2 4.4-4.5"
          stroke="#ff251b"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    question: "How long does a project take?",
    answer:
      "A typical 60-second 2D explainer takes 3 to 4 weeks from kickoff to final delivery, while custom 3D animations take 4 to 6 weeks depending on complexity.",
    icon: (
      <svg viewBox="0 0 28 28" className="size-5.5 shrink-0 lg:size-[2vw]" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="9" stroke="#111319" strokeWidth="1.9" />
        <path
          d="M14 9v5.2l3.6 1.8"
          stroke="#111319"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "05",
    question: "What do you need from me to get started?",
    answer:
      "Just a short brief or 15-minute call about your product, target audience, and goals — your dedicated producer handles the rest.",
    icon: (
      <svg viewBox="0 0 28 28" className="size-5.5 shrink-0 lg:size-[2vw]" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="3.2" stroke="#111319" strokeWidth="1.9" />
        <path
          d="M14 4.8v2.4M14 20.8v2.4M4.8 14h2.4M20.8 14h2.4M7.5 7.5l1.7 1.7M18.8 18.8l1.7 1.7M20.5 7.5l-1.7 1.7M9.2 18.8l-1.7 1.7"
          stroke="#111319"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

export function LandingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      aria-labelledby="landing-faq-heading"
      className="relative isolate w-full overflow-hidden bg-white py-14 lg:min-h-[56.25vw] lg:py-0"
    >
      {/* Full-bleed 16:9 background artwork featuring the 3D animated woman at a laptop with floating question & workflow thumbnails */}
      <ParallaxBackground
        className="pointer-events-none relative mb-8 aspect-[16/9] w-full overflow-hidden lg:absolute lg:inset-0 lg:-z-10 lg:mb-0 lg:aspect-auto"
        offset={22}
      >
        <Image
          src="/images/landing-faq-bg.jpg"
          alt="Thoughtful 3D animated woman in a red sweater sitting at a desk with a laptop and branded mug, surrounded by floating 3D question mark bubbles, video player, storyboard sketch, and clapperboard cards"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-right lg:object-center"
        />
      </ParallaxBackground>

      {/* Main Content Container calibrated to the 1024x576 reference */}
      <div className="relative z-10 flex w-full flex-col justify-between px-6 sm:px-10 lg:min-h-[56.25vw] lg:px-[4.4vw] lg:pt-[4.6vw] lg:pb-[3.2vw]">
        {/* Top Row: Left Heading Column + Top-Right Arrow */}
        <div className="flex items-start justify-between gap-6">
          <StaggerGroup
            className="max-w-[480px] lg:max-w-[38vw]"
            stagger={0.09}
            delayChildren={0.05}
          >
            {/* 07 | COMMON QUESTIONS Eyebrow */}
            <StaggerItem>
              <div className="flex items-center gap-3 lg:gap-[1.05vw]">
                <span className="font-sans text-[18px] font-extrabold tracking-[-0.02em] text-[#2c3342] lg:text-[1.78vw]">
                  07
                </span>
                <span
                  aria-hidden="true"
                  className="h-4 w-[1.5px] shrink-0 bg-[#c8cdd8] lg:h-[1.55vw]"
                />
                <p className="whitespace-nowrap font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#353b4b] lg:text-[0.95vw]">
                  COMMON QUESTIONS
                </p>
              </div>
            </StaggerItem>

            {/* 2-Line Display Heading */}
            <StaggerItem>
              <h2
                id="landing-faq-heading"
                className="mt-3 font-sans text-[clamp(2.45rem,5.45vw,5.6rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#08090c] lg:mt-[1.35vw]"
              >
                <span className="block whitespace-nowrap">Common</span>
                <span className="mt-[0.04vw] block whitespace-nowrap bg-[linear-gradient(90deg,#ef131e_0%,#ff4617_54%,#ff6c10_100%)] bg-clip-text text-transparent">
                  questions.
                </span>
              </h2>
            </StaggerItem>

            {/* 2-Line Subtitle */}
            <StaggerItem>
              <p className="mt-3 font-sans text-[14.5px] font-normal leading-[1.4] tracking-[-0.01em] text-[#454a59] lg:mt-[1.1vw] lg:text-[1.34vw]">
                Straight answers to help you feel confident
                <br className="hidden sm:inline" /> about your animation project.
              </p>
            </StaggerItem>
          </StaggerGroup>

          {/* Top-Right Decorative Arrow */}
          <div className="hidden pt-1 lg:block lg:pt-[0.3vw]" aria-hidden="true">
            <svg
              viewBox="0 0 38 16"
              className="h-4 w-9 text-[#171920] lg:h-[1.35vw] lg:w-[3.1vw]"
              fill="none"
            >
              <path
                d="M2 8h33M29 2.5 35.5 8 29 13.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* 5 Stacked FAQ Accordion Bars */}
        <StaggerGroup
          className="mt-6 w-full max-w-[540px] space-y-2.5 lg:mt-[1.65vw] lg:max-w-[42.2vw] lg:space-y-[0.65vw]"
          stagger={0.07}
          delayChildren={0.12}
        >
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <StaggerItem
                key={item.number}
                className="overflow-hidden rounded-[11px] border border-[#edf0f6] bg-white/95 shadow-[0_6px_20px_-6px_rgb(15_23_42/0.08)] backdrop-blur-xs transition-shadow hover:shadow-[0_10px_24px_-6px_rgb(15_23_42/0.12)] lg:rounded-[0.82vw]"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left lg:h-[4.2vw] lg:px-[1.2vw] lg:py-0"
                >
                  <div className="flex items-center gap-3.5 lg:gap-[1.35vw]">
                    {/* Red Number Badge */}
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ff1b1f_0%,#e61419_100%)] font-sans text-[12px] font-bold text-white shadow-[0_3px_8px_rgb(235_22_28/0.3)] lg:size-[2.45vw] lg:text-[1.02vw]">
                      {item.number}
                    </span>

                    {/* Question Icon */}
                    {item.icon}

                    {/* Question Title */}
                    <span className="font-sans text-[14px] font-semibold tracking-[-0.015em] text-[#12151e] lg:text-[1.12vw]">
                      {item.question}
                    </span>
                  </div>

                  {/* Right Chevron */}
                  <svg
                    viewBox="0 0 16 16"
                    className={`size-4 shrink-0 text-[#262b38] transition-transform duration-300 lg:size-[1.15vw] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m3.5 6 4.5 4.5L12.5 6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#f1f3f8] px-4 pt-2.5 pb-3.5 font-sans text-[13px] leading-[1.45] text-[#4c5162] lg:px-[1.2vw] lg:py-[0.85vw] lg:text-[0.96vw]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
