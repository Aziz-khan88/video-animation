"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  EASE_OUT_EXPO,
  FloatingElement,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "whats-included",
    question: "What’s included in the price?",
    answer:
      "Every package includes concept development, scriptwriting, custom storyboard illustrations, original 2D asset creation, professional voice-over, sound design, and final Full HD (1080p) video delivery with commercial usage rights.",
  },
  {
    id: "delivery-timeline",
    question: "How long does it take to deliver a video?",
    answer:
      "A standard 60–90 second 2D animation takes 3 to 4 weeks from kickoff to final delivery. Need it sooner? We offer expedited production schedules for time-sensitive product launches and events.",
  },
  {
    id: "script-storyboard",
    question: "Can you help with the script and storyboard?",
    answer:
      "Yes! Our writers and creative directors craft both the script and the visual storyboard for your approval before any animation begins, ensuring your technical or marketing message is 100% accurate.",
  },
  {
    id: "revisions-policy",
    question: "Do you offer revisions?",
    answer:
      "Absolutely. We include dedicated revision rounds at every stage—script, storyboard, voice-over, and animation—so you are completely happy with the final result.",
  },
] as const;

export function TwoDDesignFaq() {
  const [openId, setOpenId] = useState<string | null>("whats-included");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="two-d-design-faq-heading"
      className="relative isolate w-full overflow-hidden bg-[#fbfaf7] pt-10 pb-8 sm:pt-14 sm:pb-12 lg:pt-12 lg:pb-10"
    >
      <div className="mx-auto w-[96%]">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Column (4 Cols): Thinking Character Illustration Aligned Flush Left */}
          <Reveal
            x={-26}
            y={0}
            className="flex justify-center lg:col-span-4 lg:justify-start lg:pt-6"
          >
            <FloatingElement amplitude={4.5} duration={4.6} className="w-full max-w-[380px] lg:max-w-[460px]">
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src="/images/two-d-design-faq-character.jpg"
                  alt="2D illustrated young man resting his chin on his hand looking up at a red question mark speech bubble"
                  fill
                  quality={95}
                  unoptimized
                  sizes="(min-width: 1024px) 460px, 380px"
                  className="object-contain object-left mix-blend-multiply"
                />
              </div>
            </FloatingElement>
          </Reveal>

          {/* Right Column (8 Cols): Heading + 4 Rounded Grey Accordion Bars */}
          <div className="lg:col-span-8">
            <Reveal className="mb-6 text-center lg:mb-7">
              <h2
                id="two-d-design-faq-heading"
                className="font-sans text-[30px] font-extrabold tracking-[-0.03em] text-[#0c0d12] sm:text-[38px] lg:text-[46px] xl:text-[52px] 2xl:text-[58px]"
              >
                Frequently Asked Questions
              </h2>
            </Reveal>

            <StaggerGroup
              className="space-y-3"
              stagger={0.09}
              delayChildren={0.05}
            >
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <StaggerItem key={item.id}>
                    <motion.div
                      whileHover={{ y: -1.5 }}
                      transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                      className={`overflow-hidden rounded-[12px] border transition-colors duration-200 ${
                        isOpen
                          ? "border-[#f39c80] bg-[#fffaf8] shadow-[0_8px_22px_-10px_rgb(235_55_25/0.16)]"
                          : "border-[#e3e5ec] bg-[#f1f2f6] hover:border-[#d5d8e2] hover:bg-[#eceef3]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-3.5 text-left lg:px-6 lg:py-4"
                      >
                        <span
                          className={`font-sans text-[14.5px] font-extrabold tracking-[-0.015em] sm:text-[15.5px] lg:text-[16px] ${
                            isOpen ? "text-[#e51a20]" : "text-[#0c0d12]"
                          }`}
                        >
                          {item.question}
                        </span>
                        <motion.svg
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                          viewBox="0 0 20 20"
                          className={`size-5 shrink-0 ${
                            isOpen ? "text-[#e51a20]" : "text-[#14161d]"
                          }`}
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="m5 7.5 5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="2.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
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
                            <div className="border-t border-[#f4dcd3] px-5 pt-3 pb-4 font-sans text-[13.5px] leading-relaxed text-[#353843] lg:px-6 lg:text-[14.5px]">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>

        {/* Bottom Mid-Page Orange-Red Gradient CTA Banner */}
        <Reveal className="mt-9 lg:mt-11" delay={0.12}>
          <div className="relative overflow-hidden rounded-[16px] bg-[linear-gradient(90deg,#f35b1c_0%,#f77c14_35%,#ea3c1d_72%,#f57816_100%)] px-6 py-4 text-white shadow-[0_14px_32px_-10px_rgb(238_65_24/0.45)] sm:px-8 sm:py-5 lg:px-10">
            {/* Subtle Animated Diagonal Sheen Accents */}
            <motion.div
              aria-hidden="true"
              animate={{ x: [0, 14, 0], opacity: [0.09, 0.16, 0.09] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -top-10 left-[8%] h-36 w-28 rotate-[28deg] bg-white"
            />
            <motion.div
              aria-hidden="true"
              animate={{ x: [0, -14, 0], opacity: [0.09, 0.16, 0.09] }}
              transition={{ duration: 4.5, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-12 right-[12%] h-40 w-32 rotate-[28deg] bg-white"
            />

            <div className="relative z-10 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
              <div>
                <h3 className="font-sans text-[20px] font-extrabold tracking-[-0.02em] text-white sm:text-[24px] lg:text-[28px] xl:text-[32px]">
                  Ready to Bring Your Idea to Life with 2D Animation?
                </h3>
                <p className="mt-1 font-sans text-[13.5px] font-normal text-white/95 sm:text-[15px] lg:text-[16.5px]">
                  Get a fast, clear fixed quote and see how 2D animation can work for your business.
                </p>
              </div>

              <Link
                href="#quote"
                className="group inline-flex h-[40px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 font-sans text-[13px] font-extrabold tracking-[-0.01em] text-[#14161d] shadow-[0_8px_20px_-4px_rgb(0_0_0/0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#fff9f6] sm:w-auto lg:h-[42px] lg:px-6 lg:text-[14px]"
              >
                <span>Get a Fixed Quote</span>
                <svg
                  viewBox="0 0 18 18"
                  className="size-3.5 text-[#e6211f] transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3.8 9h10.4M9.8 4.6 14.2 9l-4.4 4.4"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
