"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  EASE_OUT_EXPO,
} from "@/components/motion/MotionPrimitives";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    line1: "We understand your",
    line2: "goals, audience and ideas.",
    image: "/images/process-1-discover.jpg",
    alt: "Animated boy at a desk sketching and smiling at a glowing lightbulb hologram with idea doodles",
    icon: (
      <svg viewBox="0 0 32 32" className="size-8 lg:size-[3.2vw]" fill="none" aria-hidden="true">
        <path
          d="M16 4.2v2.4M7.7 7.7l1.7 1.7M4.2 16h2.4M24.3 7.7l-1.7 1.7M27.8 16h-2.4"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M12.2 21.3c-1.8-1.3-2.9-3.3-2.9-5.6a6.7 6.7 0 1 1 13.4 0c0 2.3-1.1 4.3-2.9 5.6-.6.5-1 1.2-1 2v1.2a1.5 1.5 0 0 1-1.5 1.5h-2.6a1.5 1.5 0 0 1-1.5-1.5v-1.2c0-.8-.4-1.5-1-2Z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
        <path
          d="M13.6 28.2h4.8"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Storyboard",
    line1: "We visualize the concept",
    line2: "with storyboards.",
    image: "/images/process-2-storyboard.jpg",
    alt: "Artist hand holding a stylus drawing multi-panel black and white animation storyboards",
    icon: (
      <svg viewBox="0 0 32 32" className="size-8 lg:size-[3.1vw]" fill="none" aria-hidden="true">
        <rect
          x="7.5"
          y="5.5"
          width="17"
          height="21"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="2.3"
        />
        <path
          d="M11.5 11.5h9M11.5 16h9M11.5 20.5h6.5"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Animate",
    line1: "We bring it to life with",
    line2: "expert animation.",
    image: "/images/process-3-animate.jpg",
    alt: "Vibrant 3D animated boy flying forward through a golden sunset sky with floating islands and castle",
    icon: (
      <svg viewBox="0 0 32 32" className="size-8 lg:size-[3.1vw]" fill="none" aria-hidden="true">
        <path
          d="M11 8.6c0-1.3 1.4-2.1 2.5-1.4l10.8 7.4c1 .7 1 2.1 0 2.8l-10.8 7.4c-1.1.7-2.5-.1-2.5-1.4V8.6Z"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Deliver",
    line1: "Polish, optimize",
    line2: "and launch.",
    image: "/images/process-4-deliver.jpg",
    alt: "Wide final 3D animated fantasy scene of the boy on a cliff overlooking floating islands and castle at sunset",
    icon: (
      <svg viewBox="0 0 32 32" className="size-8 lg:size-[3.1vw]" fill="none" aria-hidden="true">
        <path
          d="M18.8 13.2a2 2 0 1 0 2.8-2.8 2 2 0 0 0-2.8 2.8Z"
          fill="currentColor"
        />
        <path
          d="M24.8 7.2c-4.5-.4-8.8 1.6-11.7 4.5l-3.8 1.1a1.2 1.2 0 0 0-.6 1.9l2.4 2.4 3.4 3.4 2.4 2.4a1.2 1.2 0 0 0 1.9-.6l1.1-3.8c2.9-2.9 4.9-7.2 4.9-11.3Z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 19.5c-1.5 1.5-2.2 4.2-2.2 4.2s2.7-.7 4.2-2.2"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export function CreativeProcess() {
  return (
    <section
      aria-labelledby="creative-process-heading"
      className="relative isolate w-full overflow-hidden bg-[#fbfcfe] px-6 py-14 sm:px-10 lg:min-h-[39.94vw] lg:px-[1.95vw] lg:pt-[1.85vw] lg:pb-[1.85vw]"
    >
      {/* Top Centered Header */}
      <div className="mx-auto flex flex-col items-center text-center">
        <Reveal y={14} className="flex items-center gap-3.5 lg:gap-[1.46vw]">
          <span
            aria-hidden="true"
            className="h-[1.5px] w-6 rounded-full bg-[#ff4518] lg:h-[0.14vw] lg:w-[2.15vw]"
          />
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#ff251b] lg:text-[0.95vw]">
            OUR CREATIVE PROCESS
          </span>
          <span
            aria-hidden="true"
            className="h-[1.5px] w-6 rounded-full bg-[#ff4518] lg:h-[0.14vw] lg:w-[2.15vw]"
          />
        </Reveal>

        <Reveal
          as="h2"
          y={20}
          delay={0.07}
          className="mt-3 font-sans text-[clamp(1.85rem,4.25vw,4.4rem)] font-extrabold leading-[1.05] tracking-[-0.043em] text-[#0a0a0d] lg:mt-[1.05vw]"
        >
          <span id="creative-process-heading">
            From First Thought to <span className="text-hero-gradient">Final Frame.</span>
          </span>
        </Reveal>

        <Reveal
          as="p"
          y={16}
          delay={0.14}
          className="mt-2 font-sans text-[14px] font-normal leading-[1.4] tracking-[-0.01em] text-[#565863] lg:mt-[0.65vw] lg:text-[1.36vw]"
        >
          A simple, collaborative process that brings your ideas to life.
        </Reveal>
      </div>

      {/* 4-Step Timeline + Bottom Thumbnail Cards */}
      <div className="relative mt-10 w-full lg:mt-[1.35vw]">
        {/* Animated Horizontal Connecting Orange-Red Gradient Line behind the 4 Circles (Desktop) */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.95, delay: 0.15, ease: EASE_OUT_EXPO }}
          className="pointer-events-none absolute top-[3.32vw] right-[12%] left-[12%] hidden h-[0.24vw] origin-left -translate-y-1/2 bg-gradient-to-r from-[#ff1e1e] via-[#ff5a14] to-[#ff1e1e] lg:block"
        />

        <StaggerGroup
          stagger={0.12}
          delayChildren={0.12}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[1.76vw]"
        >
          {PROCESS_STEPS.map((step) => (
            <StaggerItem
              key={step.number}
              y={24}
              className="group relative z-10 flex flex-col items-center text-center"
            >
              {/* Circular Icon Badge */}
              <div className="grid size-16 place-items-center rounded-full border-2 border-[#ff3319] bg-white text-[#ff2e17] shadow-[0_4px_22px_rgb(255_59_31/0.32)] transition-transform duration-300 group-hover:scale-105 lg:size-[6.64vw] lg:border-[0.2vw]">
                {step.icon}
              </div>

              {/* Step Number */}
              <span className="mt-3 font-sans text-[16px] font-extrabold leading-none text-[#0a0a0d] lg:mt-[0.95vw] lg:text-[1.48vw]">
                {step.number}
              </span>

              {/* Step Title */}
              <h3 className="mt-1 font-sans text-[17px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0a0a0d] lg:mt-[0.3vw] lg:text-[1.48vw]">
                {step.title}
              </h3>

              {/* 2-Line Step Description */}
              <p className="mt-1.5 font-sans text-[12px] font-normal leading-[1.35] text-[#636672] lg:mt-[0.5vw] lg:text-[0.98vw]">
                <span className="block">{step.line1}</span>
                <span className="block">{step.line2}</span>
              </p>

              {/* Bottom 16:9 Stage Thumbnail Card */}
              <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-[12px] bg-[#101218] shadow-[0_10px_24px_-8px_rgb(15_23_42/0.22)] transition-transform duration-300 group-hover:-translate-y-1 lg:mt-[1.15vw] lg:aspect-auto lg:h-[11.82vw] lg:rounded-[0.95vw]">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 48vw, 95vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
