"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  EASE_OUT_EXPO,
  FloatingElement,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

interface ApprovalProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  hasApprovalBadge: boolean;
  cardOffsetClass: string;
  pinX: number;
  pinY: number;
  stemStartY: number;
  image: string;
  alt: string;
}

// Pin (x, y) coordinates are measured directly in the 1347x366 pixel space of /images/two-d-process-roadmap-bg.jpg
const APPROVAL_STEPS: readonly ApprovalProcessStep[] = [
  {
    id: "script",
    number: "01",
    title: "Script",
    description: "We write it for your\nstory and audience.",
    hasApprovalBadge: true,
    cardOffsetClass: "lg:mt-[14px]",
    pinX: 135,
    pinY: 80,
    stemStartY: -20,
    image: "/images/two-d-process-step-1-script.jpg?v=4",
    alt: "2D illustration of a laptop displaying a script with three red checkmarks alongside a houseplant, play mug, and orange notebook",
  },
  {
    id: "storyboard",
    number: "02",
    title: "Storyboard",
    description: "You review and\napprove the visuals.",
    hasApprovalBadge: true,
    cardOffsetClass: "lg:mt-0",
    pinX: 478,
    pinY: 122,
    stemStartY: -28,
    image: "/images/two-d-process-step-2-storyboard.jpg?v=4",
    alt: "2D illustration of a standing storyboard easel displaying 4 numbered factory bottling panels (01, 02, 03, 04)",
  },
  {
    id: "animation",
    number: "03",
    title: "Animation",
    description: "We animate and add\nthe voiceover.",
    hasApprovalBadge: false,
    cardOffsetClass: "lg:mt-[10px]",
    pinX: 815,
    pinY: 92,
    stemStartY: -54,
    image: "/images/two-d-process-step-3-animation.jpg?v=4",
    alt: "2D illustration of an animator in a red shirt working at a widescreen monitor showing factory animation, voiceover waveform, and timeline tracks",
  },
  {
    id: "delivery",
    number: "04",
    title: "Delivery",
    description: "You receive your\nfinished video.",
    hasApprovalBadge: false,
    cardOffsetClass: "lg:mt-0",
    pinX: 1172,
    pinY: 54,
    stemStartY: -58,
    image: "/images/two-d-process-step-4-delivery.jpg?v=4",
    alt: "2D illustration of an open laptop playing the finished bottling video with a central play button next to a sealed brown delivery box",
  },
] as const;

export function TwoDDesignApprovalProcess() {
  return (
    <section
      id="process"
      aria-labelledby="two-d-approval-process-heading"
      className="relative isolate w-full overflow-hidden bg-[#fbfaf7] py-10 sm:py-14 lg:py-14"
    >
      <div className="mx-auto w-[96%]">
        {/* Section Heading: "Our Simple [4-Step] Approval Process" with Left & Right Spark Rays */}
        <Reveal className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-7">
            {/* Left Red Spark Rays */}
            <motion.svg
              viewBox="0 0 38 44"
              initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden size-10 shrink-0 text-[#e61e24] sm:block lg:size-14 xl:size-16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M28 9 15 2M24 20 7 15M25 31l-14 1.5"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </motion.svg>

            <h2
              id="two-d-approval-process-heading"
              className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 font-sans text-[32px] font-extrabold tracking-[-0.03em] text-[#0c0d12] sm:text-[44px] lg:text-[56px] xl:text-[66px] 2xl:text-[74px]"
            >
              <span>Our Simple</span>
              <motion.span
                initial={{ opacity: 0, scale: 0.84, rotate: -4 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, delay: 0.12, ease: EASE_OUT_EXPO }}
                className="inline-block -skew-x-10 rounded-[10px] bg-[linear-gradient(90deg,#e4171f_0%,#f14f1b_52%,#f88212_100%)] px-4 py-0.5 text-white shadow-[0_10px_22px_-6px_rgb(235_45_25/0.55)] lg:px-6 lg:py-1"
              >
                <span className="inline-block skew-x-10 italic">4-Step</span>
              </motion.span>
              <span>Approval Process</span>
            </h2>

            {/* Right Orange Spark Rays */}
            <motion.svg
              viewBox="0 0 38 44"
              initial={{ opacity: 0, scale: 0.6, rotate: 12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 2.8,
                delay: 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden size-10 shrink-0 text-[#f37519] sm:block lg:size-14 xl:size-16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 9 23 2M14 20l17-5M13 31l14 1.5"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>
        </Reveal>

        {/* DESKTOP VIEW: 4 Step Cards + Regenerated Unified 3D Route Map & Stage Illustrations Scene */}
        <div className="relative mt-8 hidden w-full lg:mt-10 lg:block">
          {/* Top Row: 4 Staggered Step Cards Aligned Flush Across the 96% Container */}
          <StaggerGroup
            className="relative z-30 grid grid-cols-4 items-start gap-6 xl:gap-8"
            stagger={0.12}
            delayChildren={0.05}
          >
            {APPROVAL_STEPS.map((step) => (
              <StaggerItem
                key={step.id}
                className={`flex flex-col ${step.cardOffsetClass}`}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.015 }}
                  transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                  className="group w-full overflow-hidden rounded-[16px] border-[2px] border-[#ee5a24] bg-[linear-gradient(90deg,#e3141f_0%,#f14e1b_55%,#f88312_100%)] shadow-[0_10px_24px_-10px_rgb(15_23_42/0.12)] transition-shadow duration-300 hover:shadow-[0_16px_32px_-10px_rgb(235_55_25/0.24)]"
                >
                  {/* Top Red-to-Orange Header Bar */}
                  <div className="px-4 py-2 xl:px-5 xl:py-2.5">
                    <h3 className="font-sans text-[17.5px] font-extrabold tracking-[-0.02em] text-white xl:text-[21px]">
                      {step.number} {step.title}
                    </h3>
                  </div>

                  {/* White Card Body with Curved Top-Right Lip */}
                  <div className="flex flex-col justify-between rounded-tr-[16px] bg-white px-4 py-3.5 xl:px-5 xl:py-4">
                    <p className="font-sans text-[13.5px] font-semibold leading-[1.38] whitespace-pre-line text-[#14161d] xl:text-[15.5px]">
                      {step.description}
                    </p>

                    {step.hasApprovalBadge && (
                      <div className="mt-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#24a13b] px-4 py-1 font-sans text-[13px] font-bold text-white shadow-xs transition-transform duration-300 group-hover:scale-105">
                          <svg
                            viewBox="0 0 14 14"
                            className="size-3.5 shrink-0"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="m2.5 7.2 2.8 2.8 6.2-6.2"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>You approve</span>
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Bottom Unified Panoramic 3D Winding Route Map + 4 Stage Illustrations Image */}
          <div className="relative z-10 -mt-[8px] aspect-[1347/366] w-full">
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: EASE_OUT_EXPO }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/two-d-process-roadmap-bg.jpg?v=4"
                alt="Winding 3D dark-navy route map connecting the 4 approval stages: 01 Script laptop, 02 Storyboard 4-panel board, 03 Animation studio workstation, and 04 Delivery finished video laptop with parcel box"
                fill
                quality={96}
                unoptimized
                sizes="96vw"
                className="object-fill mix-blend-multiply"
              />
            </motion.div>

            {/* Exact Coordinate SVG Overlay for the 4 Vertical Red-Orange Stems & Glowing Road Pins */}
            <svg
              viewBox="0 0 1347 366"
              className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                {/* userSpaceOnUse ensures vertical lines/rects always render their gradient fill */}
                <linearGradient
                  id="process-stem-grad"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="-75"
                  x2="0"
                  y2="140"
                >
                  <stop offset="0%" stopColor="#e51820" />
                  <stop offset="55%" stopColor="#f04e1b" />
                  <stop offset="100%" stopColor="#f67c14" />
                </linearGradient>
                <linearGradient id="process-pin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e51820" />
                  <stop offset="55%" stopColor="#f25219" />
                  <stop offset="100%" stopColor="#f88912" />
                </linearGradient>
              </defs>

              {APPROVAL_STEPS.map((step, idx) => {
                const stemHeight = step.pinY - step.stemStartY;
                return (
                  <g key={step.id}>
                    {/* Animated Vertical Red-to-Orange Connector Stem drawing downward from card to road pin */}
                    <motion.rect
                      x={step.pinX - 2}
                      y={step.stemStartY}
                      width="4"
                      height={stemHeight}
                      rx="2"
                      fill="url(#process-stem-grad)"
                      initial={{ scaleY: 0, opacity: 0 }}
                      whileInView={{ scaleY: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.22 + idx * 0.12,
                        ease: EASE_OUT_EXPO,
                      }}
                      style={{
                        transformOrigin: `${step.pinX}px ${step.stemStartY}px`,
                      }}
                    />
                    {/* Continuous Pulsing Outer Pin Halo */}
                    <motion.circle
                      cx={step.pinX}
                      cy={step.pinY}
                      r="14"
                      fill="#f25219"
                      animate={{
                        scale: [1, 1.38, 1],
                        opacity: [0.22, 0.48, 0.22],
                      }}
                      transition={{
                        duration: 2.4,
                        delay: idx * 0.35,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        transformOrigin: `${step.pinX}px ${step.pinY}px`,
                      }}
                    />
                    {/* Glowing Orange-Red Pin Circle with White Border */}
                    <motion.circle
                      cx={step.pinX}
                      cy={step.pinY}
                      r="10"
                      fill="url(#process-pin-grad)"
                      stroke="#ffffff"
                      strokeWidth="3"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.36 + idx * 0.12,
                        ease: EASE_OUT_EXPO,
                      }}
                      style={{
                        transformOrigin: `${step.pinX}px ${step.pinY}px`,
                      }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* MOBILE & TABLET VIEW: Responsive 2-Column / 1-Column Cards + Individual Stage Illustrations */}
        <StaggerGroup
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden"
          stagger={0.09}
          delayChildren={0.05}
        >
          {APPROVAL_STEPS.map((step, idx) => (
            <StaggerItem
              key={`${step.id}-mobile`}
              className="flex flex-col items-center"
            >
              <div className="w-full overflow-hidden rounded-[16px] border-[2px] border-[#ee5a24] bg-[linear-gradient(90deg,#e3141f_0%,#f14e1b_55%,#f88312_100%)] shadow-md">
                <div className="px-4 py-2">
                  <h3 className="font-sans text-[17px] font-extrabold tracking-[-0.02em] text-white">
                    {step.number} {step.title}
                  </h3>
                </div>
                <div className="rounded-tr-[15px] bg-white px-4 py-3">
                  <p className="font-sans text-[13.5px] font-semibold leading-[1.35] whitespace-pre-line text-[#14161d]">
                    {step.description}
                  </p>
                  {step.hasApprovalBadge && (
                    <div className="mt-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#24a13b] px-3 py-0.5 font-sans text-[12px] font-bold text-white">
                        <span>✓ You approve</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Connector Stem + Pin */}
              <div className="flex flex-col items-center">
                <span className="h-6 w-[3.5px] bg-[linear-gradient(180deg,#e51820_0%,#f67c14_100%)]" />
                <span className="-mt-1 size-4 rounded-full border-2 border-white bg-[#f25219] shadow-xs" />
              </div>

              <FloatingElement
                amplitude={3}
                duration={4.2 + idx * 0.25}
                delay={idx * 0.15}
                className="mt-1 w-full"
              >
                <div className="relative aspect-[1200/760] w-full overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    unoptimized
                    sizes="(min-width: 640px) 46vw, 92vw"
                    className="object-contain object-bottom mix-blend-multiply"
                  />
                </div>
              </FloatingElement>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Bottom Revision Guarantee Line */}
        <Reveal
          className="mt-6 flex items-center justify-center gap-4 sm:gap-6 lg:mt-5"
          delay={0.2}
        >
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.65, delay: 0.28, ease: EASE_OUT_EXPO }}
            className="h-[2px] w-14 origin-right rounded-full bg-[linear-gradient(90deg,#d82420_0%,#eb521d_100%)] sm:w-28 lg:w-56"
          />
          <p className="text-center font-sans text-[14px] font-bold italic tracking-[-0.01em] text-[#0c0d12] sm:text-[15.5px] lg:text-[17px]">
            Two revision rounds are included at each stage.
          </p>
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.65, delay: 0.28, ease: EASE_OUT_EXPO }}
            className="h-[2px] w-14 origin-left rounded-full bg-[linear-gradient(90deg,#ef661c_0%,#f68c13_100%)] sm:w-28 lg:w-56"
          />
        </Reveal>
      </div>
    </section>
  );
}
