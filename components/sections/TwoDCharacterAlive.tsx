"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { EASE_OUT_EXPO, Reveal } from "@/components/motion/MotionPrimitives";

export function TwoDCharacterAlive() {
  return (
    <section
      id="character-alive"
      aria-labelledby="character-alive-heading"
      className="relative isolate w-full overflow-hidden bg-white lg:h-[56.25vw]"
    >
      {/* Top-Left: 03 Badge + CHARACTER COMES ALIVE + Subtitle */}
      <Reveal className="relative z-10 w-full px-6 pt-8 pb-4 sm:px-10 lg:px-[2.2vw] lg:pt-[3.2vw] lg:pb-0" y={20}>
        <div className="flex items-center gap-4 lg:gap-[2.05vw]">
          <span className="grid h-[52px] w-[54px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#ff171d_0%,#ff4b16_55%,#ff7610_100%)] font-sans text-[22px] font-extrabold tracking-[-0.02em] text-white shadow-[0_8px_20px_-4px_rgb(255_55_22/0.45)] lg:h-[6.4vw] lg:w-[6.6vw] lg:rounded-[1.15vw] lg:text-[2.6vw]">
            03
          </span>
          <div>
            <h2
              id="character-alive-heading"
              className="font-sans text-[clamp(1.35rem,3.05vw,3.2rem)] font-black uppercase leading-[1.05] tracking-[-0.02em] text-[#090a0d]"
            >
              CHARACTER{" "}
              <span className="bg-[linear-gradient(90deg,#ff171b_0%,#ff4c15_52%,#ff7b11_100%)] bg-clip-text text-transparent">
                COMES ALIVE
              </span>
            </h2>
            <p className="mt-1 font-sans text-[14px] font-normal leading-[1.25] tracking-[-0.01em] text-[#686c75] lg:mt-[0.35vw] lg:text-[1.78vw]">
              From sketches to fully animated characters.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Full-width 16:9 character expression sheet (5 pencil sketches + color palette + 5 full-color busts) */}
      <motion.div
        className="pointer-events-none relative aspect-[16/9] w-full overflow-hidden lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto"
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
      >
        <Image
          src="/images/two-d-character-alive-bg.jpg"
          alt="2D character expression sheet showing five graphite pencil sketches in the top row, a six-swatch color palette on the right, and five vibrant full-color animated character busts in the bottom row"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Crisp hand-drawn comic expression accent marks aligned with the 5 character busts */}
        <svg
          viewBox="0 0 1024 576"
          fill="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        >
          {/* Bust 1: left red accent ticks */}
          <motion.path
            d="M36 318l17 20M28 336l19 13"
            stroke="#eb2622"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.15, ease: EASE_OUT_EXPO }}
          />
          {/* Bust 2: top-left dark accent ticks */}
          <motion.path
            d="M234 328l-8 14M242 338l-11 9"
            stroke="#16181f"
            strokeWidth="2.8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.25, ease: EASE_OUT_EXPO }}
          />
          {/* Bust 3: top-left & top-right red accent ticks */}
          <motion.path
            d="M453 324l6 15M443 331l10 12M621 307l-5 15M632 316l-10 11"
            stroke="#eb2622"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.35, ease: EASE_OUT_EXPO }}
          />
          {/* Bust 4: top-right dark accent ticks */}
          <motion.path
            d="M841 329l-6 13M850 336l-10 10"
            stroke="#16181f"
            strokeWidth="2.8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.45, ease: EASE_OUT_EXPO }}
          />
          {/* Bust 5: top-right red heart + right red accent ticks */}
          <motion.path
            d="M987 328c-2-5-8-7-10-2-1 5 3 11 7 16 6-3 12-7 14-12 2-4-4-7-8-2-1 1-2 1-3 0Z"
            fill="#eb2622"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.52, ease: EASE_OUT_EXPO }}
          />
          <motion.path
            d="M995 391l11-7M996 403l12-2"
            stroke="#eb2622"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.58, ease: EASE_OUT_EXPO }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
