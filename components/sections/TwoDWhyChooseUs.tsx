"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  EASE_OUT_EXPO,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

const FAQ_ITEMS = [
  {
    question: "What types of 2D animation do you create?",
    answer:
      "We create expressive 2D character animation, explainer videos, cel-style animation, educational series, brand storytelling films, and custom 2D motion sequences.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most 60 to 90-second 2D animated videos take between 4 to 6 weeks from initial concept and storyboard to final animation and sound design.",
  },
  {
    question: "Can you create custom characters?",
    answer:
      "Yes! Every character is original and custom-designed from scratch by our concept artists to fit your brand personality, audience, and story.",
  },
  {
    question: "Do you provide voiceover and sound?",
    answer:
      "Absolutely. We offer end-to-end production including scriptwriting, professional voiceover casting in multiple languages, custom music, and sound effects.",
  },
  {
    question: "What information do you need to get started?",
    answer:
      "Just share your core idea, target audience, approximate video length, and any brand guidelines or style references—we will guide you through the rest.",
  },
] as const;

const WHY_CHOOSE_CARDS = [
  {
    number: "1",
    title: "Experienced Team",
    subtitle: "Character artists and storytellers",
  },
  {
    number: "2",
    title: "Creative Vision",
    subtitle: "Original designs, made for your story",
  },
  {
    number: "3",
    title: "Production Quality",
    subtitle: "Refined movement and polished visuals",
  },
  {
    number: "4",
    title: "Dedicated Support",
    subtitle: "A clear collaborative process",
  },
] as const;

export function TwoDWhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="relative isolate w-full overflow-hidden bg-white py-8 lg:min-h-[56.25vw] lg:py-0"
    >
      {/* Subtle Top-Right & Bottom-Right Soft Peach/Blush Organic Background Accents */}
      <svg
        viewBox="0 0 1024 576"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      >
        <defs>
          <linearGradient id="faq-peach-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde7da" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#fff7f3" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="faq-peach-arch" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fce4d6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M785 110 C820 30 890 -10 1024 0 L1024 220 C910 180 845 140 785 110 Z"
          fill="url(#faq-peach-top)"
        />
        <path
          d="M700 108 C725 32 820 18 872 108 Z"
          fill="url(#faq-peach-arch)"
        />
        <path
          d="M830 576 C890 520 960 495 1024 490 L1024 576 Z"
          fill="url(#faq-peach-top)"
        />
      </svg>

      {/* Top-Left Header: 11 Badge + WHY CHOOSE US + FAQ + Subtitle */}
      <Reveal className="w-full px-6 pt-2 sm:px-10 lg:px-[2.45vw] lg:pt-[2.1vw]" y={18}>
        <div className="flex items-center gap-4 lg:gap-[2.05vw]">
          <span className="grid h-[48px] w-[52px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#ff171d_0%,#ff4b16_55%,#ff7610_100%)] font-sans text-[20px] font-extrabold tracking-[-0.02em] text-white shadow-[0_8px_20px_-4px_rgb(255_55_22/0.45)] lg:h-[5.85vw] lg:w-[6.35vw] lg:rounded-[1.1vw] lg:text-[2.35vw]">
            11
          </span>
          <div>
            <h2
              id="why-choose-us-heading"
              className="font-sans text-[clamp(1.25rem,2.35vw,2.45rem)] font-black uppercase leading-[1.08] tracking-[-0.02em] text-[#090a0d]"
            >
              WHY CHOOSE US + FAQ
            </h2>
            <p className="mt-1 font-sans text-[13.5px] font-normal leading-[1.25] tracking-[-0.01em] text-[#747882] lg:mt-[0.25vw] lg:text-[1.48vw]">
              A team that understands character-led 2D animation.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Main 2-Column Content: Left Artist Studio Image + Right FAQ Card */}
      <div className="mt-5 w-full px-6 sm:px-10 lg:mt-[1.4vw] lg:px-[2.25vw]">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-[1.15vw]">
          {/* Left Column: Studio Artist Image */}
          <Reveal className="lg:col-span-5" y={22} delay={0.05}>
            <div className="group relative aspect-[441/345] w-full overflow-hidden rounded-[14px] bg-[#1a1312] shadow-[0_12px_30px_-8px_rgb(15_23_42/0.18)] lg:aspect-auto lg:h-[34.5vw] lg:rounded-[1.15vw]">
              <Image
                src="/images/two-d-why-choose-us.jpg"
                alt="2D character artist with glasses sketching the young adventurer girl on a large digital drawing monitor in a warm studio with concept sketches pinned to the wall"
                fill
                quality={92}
                sizes="(min-width: 1024px) 44vw, 94vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

          {/* Right Column: Frequently Asked Questions Card */}
          <Reveal
            className="flex flex-col justify-center rounded-[14px] border border-[#eceef4] bg-white px-5 py-6 shadow-[0_10px_28px_-8px_rgb(15_23_42/0.06)] sm:px-7 lg:col-span-7 lg:min-h-[34.5vw] lg:rounded-[1.15vw] lg:px-[2.25vw] lg:py-[1.9vw]"
            y={22}
            delay={0.12}
          >
            <h3 className="font-sans text-[20px] font-extrabold leading-tight tracking-[-0.025em] text-[#090a0d] lg:text-[2.05vw]">
              Frequently Asked Questions
            </h3>

            <div className="mt-4 space-y-2.5 lg:mt-[1.35vw] lg:space-y-[0.82vw]">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.question}
                    className="overflow-hidden rounded-[10px] border border-[#ebedf3] bg-[#f8f9fb] transition-colors hover:border-[#dfe3ec] lg:rounded-[0.78vw]"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleItem(index)}
                      className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left lg:px-[1.45vw] lg:py-[1.02vw]"
                    >
                      <span className="font-sans text-[14px] font-normal leading-[1.3] tracking-[-0.01em] text-[#181a20] lg:text-[1.42vw]">
                        {item.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className="grid size-5 shrink-0 place-items-center text-[#ff4814] lg:size-[1.65vw]"
                      >
                        <svg
                          viewBox="0 0 16 16"
                          className="size-4 transition-transform duration-200 lg:size-[1.4vw]"
                          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                          fill="none"
                        >
                          <path
                            d={isOpen ? "M3 8h10" : "M8 3v10M3 8h10"}
                            stroke="currentColor"
                            strokeWidth="2.1"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
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
                          <div className="border-t border-[#ebedf3] bg-white px-4 py-3 font-sans text-[13px] leading-[1.45] text-[#5c606b] lg:px-[1.45vw] lg:py-[0.9vw] lg:text-[1.22vw]">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Bottom 4 "Why Choose Us" Numbered Feature Cards */}
        <StaggerGroup
          className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:mt-[1.5vw] lg:grid-cols-4 lg:gap-[1.35vw]"
          stagger={0.08}
        >
          {WHY_CHOOSE_CARDS.map((card) => (
            <StaggerItem key={card.number} y={18}>
              <div className="flex h-full items-center gap-3.5 rounded-[12px] border border-[#edf0f5] bg-white px-4 py-3.5 shadow-[0_6px_20px_-6px_rgb(15_23_42/0.06)] transition-transform duration-200 hover:-translate-y-0.5 lg:gap-[0.95vw] lg:rounded-[1.05vw] lg:px-[1.15vw] lg:py-[1.15vw]">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ff171d_0%,#ff4e15_55%,#ff7a10_100%)] font-sans text-[15px] font-extrabold text-white shadow-[0_4px_12px_rgb(255_55_22/0.35)] lg:size-[3.55vw] lg:text-[1.48vw]">
                  {card.number}
                </span>
                <div className="min-w-0">
                  <h4 className="font-sans text-[14.5px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#090a0d] lg:truncate lg:text-[1.38vw]">
                    {card.title}
                  </h4>
                  <p className="mt-0.5 font-sans text-[12px] font-normal leading-[1.25] tracking-[-0.01em] text-[#7a7e88] lg:mt-[0.22vw] lg:truncate lg:text-[1.08vw]">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
