"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  EASE_OUT_EXPO,
} from "@/components/motion/MotionPrimitives";

const TESTIMONIAL_SLIDES = [
  {
    name: "Sarah Johnson",
    roleLine1: "Marketing Director",
    roleLine2: "at Microsoft",
    quoteLines: [
      "An amazing team that",
      "truly understands",
      "storytelling. Highly",
      "recommended!",
    ],
  },
  {
    name: "David Chen",
    roleLine1: "VP of Brand Strategy",
    roleLine2: "at Google",
    quoteLines: [
      "Every frame was crafted",
      "with emotion, clarity",
      "and studio polish.",
      "Outstanding partner!",
    ],
  },
  {
    name: "Elena Rodriguez",
    roleLine1: "Head of Creative",
    roleLine2: "at Amazon",
    quoteLines: [
      "They transformed our",
      "complex product story",
      "into an unforgettable",
      "animated film.",
    ],
  },
  {
    name: "Marcus Vance",
    roleLine1: "Global Campaign Lead",
    roleLine2: "at Upwork",
    quoteLines: [
      "Fast, collaborative, and",
      "genuinely world-class",
      "animation quality from",
      "sketch to screen.",
    ],
  },
] as const;

export function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const current = TESTIMONIAL_SLIDES[activeSlide];

  const handlePrev = () => {
    setActiveSlide((prev) =>
      prev === 0 ? TESTIMONIAL_SLIDES.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveSlide((prev) =>
      prev === TESTIMONIAL_SLIDES.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative isolate w-full overflow-hidden bg-white px-6 py-14 sm:px-10 lg:min-h-[56.25vw] lg:pl-[4.39vw] lg:pr-[3.32vw] lg:pt-[6.7vw] lg:pb-[4.5vw]"
    >
      {/* Top Row: Left Text Column + Right Split Video Testimonial Card */}
      <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:gap-[1.95vw]">
        {/* Left Column */}
        <div className="w-full max-w-[460px] shrink-0 lg:w-[34.67vw] lg:max-w-none lg:pt-[0.7vw]">
          <Reveal
            as="p"
            y={16}
            className="whitespace-nowrap font-sans text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#ff1e1e] lg:text-[1.18vw]"
          >
            CLIENT TESTIMONIALS
          </Reveal>

          <h2
            id="testimonials-heading"
            className="mt-3 font-sans text-[clamp(1.85rem,4.18vw,4.35rem)] font-extrabold leading-[1.03] tracking-[-0.045em] text-[#0a0a0d] lg:mt-[1.5vw]"
          >
            <Reveal as="span" y={22} delay={0.06} className="block sm:whitespace-nowrap">
              Great Stories.
            </Reveal>
            <Reveal as="span" y={22} delay={0.12} className="mt-[0.06vw] block sm:whitespace-nowrap">
              Real <span className="text-hero-gradient">Connections.</span>
            </Reveal>
          </h2>

          <Reveal
            as="p"
            y={18}
            delay={0.18}
            className="mt-4 font-sans text-[15px] font-normal leading-[1.48] tracking-[-0.01em] text-[#686a75] lg:mt-[1.6vw] lg:text-[1.32vw]"
          >
            <span className="font-medium text-[#4b4d57]">VideoAnimation.us</span> brought our idea to life{" "}
            <span className="font-medium text-[#4b4d57]">beyond</span>
            <br className="hidden sm:inline" /> our expectations. The quality, creativity and
            <br className="hidden sm:inline" /> attention to detail were outstanding!
          </Reveal>
        </div>

        {/* Right Column: Split Video Card + Carousel Controls Below */}
        <Reveal
          x={24}
          y={14}
          delay={0.12}
          className="flex w-full flex-col lg:w-[55.76vw]"
        >
          {/* Split Video Testimonial Card */}
          <div className="flex w-full flex-col overflow-hidden rounded-[14px] border border-[#eef0f5] bg-white shadow-[0_18px_45px_-12px_rgb(15_23_42/0.12)] sm:flex-row lg:h-[29.4vw] lg:rounded-[1.2vw]">
            {/* Left Image Half with Glowing Play Button */}
            <div className="group relative aspect-[16/11] w-full shrink-0 cursor-pointer overflow-hidden bg-[#1a1817] sm:aspect-auto sm:w-[62.5%] lg:h-full">
              <Image
                src="/images/testimonial-sarah.jpg"
                alt="Sarah Johnson, Marketing Director at Microsoft, smiling in a creative studio"
                fill
                quality={85}
                sizes="(min-width: 1024px) 36vw, (min-width: 640px) 60vw, 95vw"
                className="object-cover object-[62%_20%] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Glowing Circular Play Button Overlay */}
              <button
                type="button"
                aria-label={`Play video testimonial from ${current.name}`}
                className="absolute right-6 bottom-5 grid size-16 place-items-center rounded-full border-2 border-white/95 bg-black/55 text-white shadow-[0_0_24px_4px_rgb(255_45_27/0.65)] backdrop-blur-[2px] transition-transform duration-200 group-hover:scale-105 lg:right-[3.8vw] lg:bottom-[2.6vw] lg:size-[7.2vw] lg:border-[0.2vw]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-6 translate-x-[1.5px] fill-current lg:size-[2.5vw]"
                  aria-hidden="true"
                >
                  <path d="M7 4.8v14.4a1 1 0 0 0 1.52.85l11.5-7.2a1 1 0 0 0 0-1.7L8.52 3.95A1 1 0 0 0 7 4.8Z" />
                </svg>
              </button>
            </div>

            {/* Right Quote Half */}
            <div className="flex flex-1 flex-col justify-center p-6 sm:p-7 lg:px-[2.9vw] lg:py-[2.6vw]">
              {/* Large Orange-Red Opening Quote Icon */}
              <svg
                viewBox="0 0 42 36"
                className="h-8 w-auto self-start lg:h-[3.3vw]"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="testimonial-quote-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff1b1c" />
                    <stop offset="100%" stopColor="#ff6a11" />
                  </linearGradient>
                </defs>
                <path
                  d="M12.2 35C5.1 35 1 29.8 1 22.1 1 12.2 7.8 4.2 17.5 1l1.9 3.6c-6 2.8-9.3 6.8-9.9 12.2.9-.3 2.1-.5 3.4-.5 4.9 0 8.5 3.6 8.5 8.9 0 5.6-3.9 9.8-9.2 9.8Zm20.6 0c-7.1 0-11.2-5.2-11.2-12.9 0-9.9 6.8-17.9 16.5-21.1L40 4.6c-6 2.8-9.3 6.8-9.9 12.2.9-.3 2.1-.5 3.4-.5 4.9 0 8.5 3.6 8.5 8.9 0 5.6-3.9 9.8-9.2 9.8Z"
                  fill="url(#testimonial-quote-grad)"
                />
              </svg>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                  className="flex flex-col"
                >
                  {/* Quote Copy */}
                  <blockquote className="mt-4 font-sans text-[15px] font-normal leading-[1.42] tracking-[-0.01em] text-[#4e505a] lg:mt-[1.4vw] lg:text-[1.35vw]">
                    {current.quoteLines.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < current.quoteLines.length - 1 && (
                          <br className="hidden lg:inline" />
                        )}{" "}
                      </span>
                    ))}
                  </blockquote>

                  {/* Short Orange-Red Divider Line */}
                  <span
                    aria-hidden="true"
                    className="mt-5 h-[2.5px] w-10 rounded-full bg-gradient-to-r from-[#ff1e1e] to-[#ff7a00] lg:mt-[1.8vw] lg:h-[0.22vw] lg:w-[3.8vw]"
                  />

                  {/* Author Name & Role */}
                  <div className="mt-4 lg:mt-[1.5vw]">
                    <p className="font-sans text-[15px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0a0a0d] lg:text-[1.38vw]">
                      {current.name}
                    </p>
                    <p className="mt-1 font-sans text-[13px] font-normal leading-[1.3] text-[#686a75] lg:mt-[0.3vw] lg:text-[1.15vw]">
                      {current.roleLine1}
                      <br />
                      {current.roleLine2}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Carousel Dots & Prev/Next Arrows (Right-aligned below card) */}
          <div className="mt-4 flex items-center justify-end gap-6 lg:mt-[1.2vw] lg:gap-[2.6vw] lg:pr-[1.4vw]">
            <div className="flex items-center gap-2.5 lg:gap-[0.9vw]" role="tablist" aria-label="Testimonial slides">
              {TESTIMONIAL_SLIDES.map((slide, idx) => {
                const isSelected = idx === activeSlide;
                return (
                  <button
                    key={slide.name}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-label={`Testimonial ${idx + 1}`}
                    onClick={() => setActiveSlide(idx)}
                    className={
                      isSelected
                        ? "size-3.5 cursor-pointer rounded-full bg-gradient-to-br from-[#ff1e1e] to-[#ff6a00] shadow-[0_2px_8px_rgb(255_45_27/0.45)] transition-all lg:size-[1.25vw]"
                        : "size-2.5 cursor-pointer rounded-full bg-[#c5c7d0] transition-colors hover:bg-[#9fa3b0] lg:size-[0.9vw]"
                    }
                  />
                );
              })}
            </div>

            <div className="flex items-center gap-3 lg:gap-[1.35vw]">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="grid size-10 cursor-pointer place-items-center rounded-full border border-[#ebedf2] bg-white text-[#17181c] shadow-[0_6px_18px_rgb(15_23_42/0.08)] transition-all duration-200 hover:scale-105 hover:border-[#d5d8e2] hover:text-[#ff251b] lg:size-[4.1vw]"
              >
                <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.45vw]" fill="none" aria-hidden="true">
                  <path
                    d="M15.2 10H4.8M9.2 5.4 4.6 10l4.6 4.6"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="grid size-10 cursor-pointer place-items-center rounded-full border border-[#ebedf2] bg-white text-[#17181c] shadow-[0_6px_18px_rgb(15_23_42/0.08)] transition-all duration-200 hover:scale-105 hover:border-[#d5d8e2] hover:text-[#ff251b] lg:size-[4.1vw]"
              >
                <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.45vw]" fill="none" aria-hidden="true">
                  <path
                    d="M4.8 10h10.4M10.8 5.4l4.6 4.6-4.6 4.6"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom Trusted By Creative Teams At + 5 Brand Logos Row */}
      <div className="mt-12 w-full lg:mt-[2.2vw]">
        <Reveal y={14} className="flex items-center">
          <span aria-hidden="true" className="h-px flex-1 bg-[#e6e8ef]" />
          <p className="px-5 text-center font-sans text-[10px] font-bold uppercase tracking-[0.26em] text-[#7c7f8a] lg:px-[2.2vw] lg:text-[0.86vw]">
            TRUSTED BY CREATIVE TEAMS AT
          </p>
          <span aria-hidden="true" className="h-px flex-1 bg-[#e6e8ef]" />
        </Reveal>

        <StaggerGroup
          stagger={0.08}
          delayChildren={0.12}
          className="mt-7 grid grid-cols-2 items-center gap-y-6 sm:grid-cols-3 lg:mt-[2.1vw] lg:grid-cols-5"
        >
          {/* 1. Microsoft */}
          <StaggerItem className="flex items-center justify-center px-4">
            <div className="inline-flex items-center gap-2.5 text-[#383a42] transition-opacity duration-200 hover:opacity-80 lg:gap-[0.75vw]">
              <svg viewBox="0 0 24 24" className="size-6 lg:size-[2.3vw]" fill="currentColor" aria-hidden="true">
                <rect x="1.5" y="1.5" width="9.5" height="9.5" />
                <rect x="13" y="1.5" width="9.5" height="9.5" />
                <rect x="1.5" y="13" width="9.5" height="9.5" />
                <rect x="13" y="13" width="9.5" height="9.5" />
              </svg>
              <span className="font-sans text-[18px] font-semibold tracking-[-0.02em] lg:text-[1.72vw]">
                Microsoft
              </span>
            </div>
          </StaggerItem>

          {/* 2. Google */}
          <StaggerItem className="flex items-center justify-center border-[#e6e8ef] px-4 sm:border-l">
            <span className="font-sans text-[22px] font-semibold tracking-[-0.03em] text-[#383a42] transition-opacity duration-200 hover:opacity-80 lg:text-[2.15vw]">
              Google
            </span>
          </StaggerItem>

          {/* 3. amazon */}
          <StaggerItem className="flex items-center justify-center border-[#e6e8ef] px-4 sm:border-l">
            <div className="relative inline-flex flex-col items-center text-[#383a42] transition-opacity duration-200 hover:opacity-80">
              <span className="font-sans text-[21px] font-extrabold leading-none tracking-[-0.04em] lg:text-[2.05vw]">
                amazon
              </span>
              <svg
                viewBox="0 0 90 16"
                className="-mt-0.5 h-3 w-16 lg:h-[0.95vw] lg:w-[6.2vw]"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 3.5c19 9.5 45 9.5 64 1.5"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M68 2.2c4.2-.2 7.8.8 8.8 1.8-.3 1.5-1.8 4.8-4.2 6.8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </StaggerItem>

          {/* 4. Coca-Cola */}
          <StaggerItem className="flex items-center justify-center border-[#e6e8ef] px-4 lg:border-l">
            <span
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              className="text-[22px] font-bold italic tracking-[-0.03em] text-[#383a42] transition-opacity duration-200 hover:opacity-80 lg:text-[2.15vw]"
            >
              Coca-Cola
            </span>
          </StaggerItem>

          {/* 5. upwork */}
          <StaggerItem className="col-span-2 flex items-center justify-center border-[#e6e8ef] px-4 sm:col-span-1 lg:border-l">
            <span className="font-sans text-[21px] font-extrabold tracking-[-0.04em] text-[#383a42] transition-opacity duration-200 hover:opacity-80 lg:text-[2.05vw]">
              upwork
            </span>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
