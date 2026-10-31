"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import {
  ParallaxBackground,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

export function TwoDHero() {
  return (
    <section
      id="two-d-hero"
      aria-labelledby="two-d-hero-heading"
      className="relative isolate min-h-svh w-full overflow-hidden bg-white lg:min-h-[56.25vw]"
    >
      {/* Full-bleed split sketch-to-living-story 2D background artwork */}
      <ParallaxBackground className="pointer-events-none absolute inset-0 -z-10 w-full" offset={26}>
        <Image
          src="/images/two-d-hero-bg.jpg"
          alt="Hand-drawn 2D pencil sketch of a young adventurer girl with goggles transitioning across a dynamic red and blue brushstroke slash into a vibrant full-color animated scene with her fox companion and a fairytale hilltop castle town"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[72%_center] lg:object-right"
        />
        {/* Soft left fade on smaller viewports for text legibility */}
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white/90 to-transparent lg:hidden" />
      </ParallaxBackground>

      {/* Top Header */}
      <Header />

      {/* Full-width Hero Content Container calibrated to the 1024x576 reference */}
      <div className="w-full px-6 pt-6 pb-16 sm:px-10 lg:px-[3.6vw] lg:pt-[2.2vw] lg:pb-[4.5vw]">
        <StaggerGroup className="max-w-[540px] lg:max-w-[40vw]" stagger={0.09} delayChildren={0.05}>
          {/* 01 Red-Orange Rounded Square Badge + 2D ANIMATION HERO Eyebrow */}
          <StaggerItem className="flex items-center gap-4 lg:gap-[1.85vw]">
            <span className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#ff171d_0%,#ff4b16_55%,#ff7310_100%)] font-sans text-[22px] font-extrabold tracking-[-0.02em] text-white shadow-[0_8px_20px_-4px_rgb(255_55_22/0.45)] lg:h-[6.05vw] lg:w-[6.05vw] lg:rounded-[1.15vw] lg:text-[2.45vw]">
              01
            </span>
            <p className="font-sans text-[15px] font-bold uppercase leading-none tracking-[0.04em] text-[#22242a] lg:text-[1.78vw]">
              2D ANIMATION HERO
            </p>
          </StaggerItem>

          {/* 3-Line Uppercase Display Heading */}
          <StaggerItem>
            <h1
              id="two-d-hero-heading"
              className="mt-6 font-sans text-[clamp(2rem,5.2vw,5.4rem)] font-black uppercase leading-[1.04] tracking-[-0.03em] text-[#090a0d] lg:mt-[2.8vw]"
            >
              <span className="block sm:whitespace-nowrap">FROM FIRST</span>
              <span className="mt-[0.06vw] block sm:whitespace-nowrap">SKETCH TO</span>
              <span className="mt-[0.06vw] block sm:whitespace-nowrap bg-[linear-gradient(90deg,#ff171b_0%,#ff4c15_52%,#ff7b11_100%)] bg-clip-text text-transparent">
                LIVING STORY.
              </span>
            </h1>
          </StaggerItem>

          {/* 3-Line Stacked Lead Copy */}
          <StaggerItem>
            <p className="mt-5 font-sans text-[clamp(1.05rem,2.05vw,2.15rem)] font-normal leading-[1.32] tracking-[-0.015em] text-[#6d717b] lg:mt-[1.85vw]">
              <span className="block">Expressive characters.</span>
              <span className="block">Expanded worlds.</span>
              <span className="block">Meaningful stories.</span>
            </p>
          </StaggerItem>

          {/* Pill CTA Button */}
          <StaggerItem className="mt-7 lg:mt-[2.45vw]">
            <Link
              href="#work"
              className="group inline-flex h-[54px] items-center justify-center gap-3.5 rounded-full bg-[linear-gradient(90deg,#ff111e_0%,#ff4617_54%,#ff7912_100%)] px-8 font-sans text-[16px] font-bold tracking-[-0.01em] text-white shadow-[0_12px_28px_-6px_rgb(255_52_22/0.5)] transition-transform duration-200 hover:-translate-y-0.5 lg:h-[5.85vw] lg:w-[29.5vw] lg:gap-[1.2vw] lg:px-0 lg:text-[1.72vw]"
            >
              <span>Explore 2D Animation</span>
              <svg
                viewBox="0 0 20 20"
                className="size-[18px] transition-transform duration-200 group-hover:translate-x-1 lg:size-[1.8vw]"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3.8 10h12M11.2 5.2 16 10l-4.8 4.8"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
