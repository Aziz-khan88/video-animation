"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ParallaxBackground,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

const FEATURED_WORK_ITEMS = [
  {
    title: "Software Animation",
    line1: "Turn complex software",
    line2: "into simple stories.",
    image: "/images/featured-work-1-software.jpg",
    alt: "Laptop screen displaying glowing blue software analytics dashboards and UI widgets",
  },
  {
    title: "Education Animation",
    line1: "Make learning engaging",
    line2: "and memorable.",
    image: "/images/featured-work-2-education.jpg",
    alt: "3D animated girl smiling and pointing at a glowing lightbulb diagram on a classroom whiteboard",
  },
  {
    title: "Medical Animation",
    line1: "Explain healthcare",
    line2: "with clarity and care.",
    image: "/images/featured-work-3-medical.jpg",
    alt: "Glowing blue translucent 3D human anatomy hologram highlighting the heart and circulatory system",
  },
  {
    title: "Product Animation",
    line1: "Showcase products",
    line2: "with stunning detail.",
    image: "/images/featured-work-4-product.jpg",
    alt: "Exploded-view 3D product animation of a smartwatch revealing internal gears, sensors, and glowing copper coils",
  },
  {
    title: "Marketing Animation",
    line1: "Create videos that",
    line2: "convert and inspire.",
    image: "/images/featured-work-5-marketing.jpg",
    alt: "3D animated woman smiling beside floating holographic video play and rising bar-chart screens",
  },
  {
    title: "Engineering Animation",
    line1: "Visualize complex",
    line2: "engineering ideas.",
    image: "/images/featured-work-6-engineering.jpg",
    alt: "3D engineer in a white hard hat holding a tablet in front of an industrial facility with a glowing blue CAD schematic",
  },
] as const;

export function LandingFeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? FEATURED_WORK_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === FEATURED_WORK_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="featured-work"
      aria-labelledby="landing-featured-work-heading"
      className="relative isolate w-full overflow-hidden bg-white py-14 lg:min-h-[56.25vw] lg:py-0"
    >
      {/* Full-bleed 16:9 background featuring the upper-right 3D engineer & jet turbine video player */}
      <ParallaxBackground
        className="pointer-events-none hidden lg:absolute lg:inset-0 lg:-z-10 lg:block"
        offset={24}
      >
        <Image
          src="/images/landing-featured-work-bg.jpg"
          alt="Widescreen featured animation player showing a 3D engineer inspecting a glowing blue CAD wireframe jet turbine engine"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </ParallaxBackground>

      {/* Main Content Container calibrated to the 1024x576 reference */}
      <div className="relative z-10 flex w-full flex-col justify-between px-6 sm:px-10 lg:min-h-[56.25vw] lg:px-[3.4vw] lg:pt-[5.2vw] lg:pb-[1.8vw]">
        {/* Top Row: Left Heading Column + Mobile/Tablet Player Preview */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:pl-[1vw]">
          <StaggerGroup
            className="max-w-[500px] lg:max-w-[38vw] lg:pt-[3.6vw]"
            stagger={0.09}
            delayChildren={0.05}
          >
            {/* 04 | FEATURED WORK ————> Eyebrow */}
            <StaggerItem>
              <div className="flex items-center gap-3 lg:gap-[1.05vw]">
                <span className="font-sans text-[18px] font-extrabold tracking-[-0.02em] text-[#08090c] lg:text-[1.78vw]">
                  04
                </span>
                <span
                  aria-hidden="true"
                  className="h-4 w-[1.5px] shrink-0 bg-[#c5cad6] lg:h-[1.55vw]"
                />
                <p className="whitespace-nowrap font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#3a3e4b] lg:text-[0.98vw]">
                  FEATURED WORK
                </p>
                <svg
                  viewBox="0 0 150 14"
                  className="ml-1 h-3.5 w-24 shrink-0 text-[#686f80] lg:ml-[0.5vw] lg:h-[1.05vw] lg:w-[14.2vw]"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 7h146M141 2l6 5-6 5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </StaggerItem>

            {/* 1-Line Display Heading */}
            <StaggerItem>
              <h2
                id="landing-featured-work-heading"
                className="mt-4 font-sans text-[clamp(2.45rem,5.25vw,5.4rem)] font-extrabold leading-[1.0] tracking-[-0.045em] text-[#08090c] lg:mt-[1.6vw]"
              >
                See the{" "}
                <span className="bg-[linear-gradient(90deg,#ef131e_0%,#ff4617_54%,#ff6c10_100%)] bg-clip-text text-transparent">
                  work.
                </span>
              </h2>
            </StaggerItem>

            {/* 3-Line Subtitle */}
            <StaggerItem>
              <p className="mt-4 font-sans text-[14.5px] font-normal leading-[1.44] tracking-[-0.01em] text-[#454a59] lg:mt-[1.4vw] lg:text-[1.34vw]">
                Real animation projects for real businesses.
                <br className="hidden sm:inline" /> Explore how we turn ideas into clear, engaging
                <br className="hidden sm:inline" /> videos across six key industries.
              </p>
            </StaggerItem>
          </StaggerGroup>

          {/* Mobile / Tablet Featured Video Player Preview */}
          <Reveal
            className="relative aspect-[562/250] w-full overflow-hidden rounded-[14px] shadow-[0_16px_38px_-10px_rgb(15_23_42/0.25)] lg:hidden"
            y={18}
            scale={0.97}
          >
            <Image
              src="/images/featured-work-player.jpg"
              alt="Featured animation player showing a 3D engineer inspecting a glowing blue CAD wireframe jet turbine engine"
              fill
              quality={90}
              sizes="95vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        {/* Bottom 6 Industry Cards Carousel + Prev/Next Buttons + Pagination Dots */}
        <div className="mt-10 lg:mt-auto">
          <div className="relative">
            {/* Left Carousel Arrow Button (<) */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous featured work category"
              className="absolute top-[64px] -left-3 z-20 grid size-9 cursor-pointer place-items-center rounded-full border border-[#d6dbe6] bg-white text-[#4b5060] shadow-[0_6px_18px_rgb(15_23_42/0.12)] transition-all duration-150 hover:scale-105 hover:border-[#eb3d16] hover:text-[#eb3d16] lg:top-[5.1vw] lg:-left-[1.9vw] lg:size-[3.85vw]"
            >
              <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.45vw]" fill="none" aria-hidden="true">
                <path
                  d="M12.5 5 7.5 10l5 5"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Right Carousel Arrow Button (>) */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next featured work category"
              className="absolute top-[64px] -right-3 z-20 grid size-9 cursor-pointer place-items-center rounded-full border border-[#eb7b59] bg-white text-[#eb3d16] shadow-[0_6px_18px_rgb(15_23_42/0.12)] transition-all duration-150 hover:scale-105 hover:bg-[#eb3d16] hover:text-white lg:top-[5.1vw] lg:-right-[1.9vw] lg:size-[3.85vw]"
            >
              <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.45vw]" fill="none" aria-hidden="true">
                <path
                  d="m7.5 5 5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* 6 Industry Cards Grid */}
            <StaggerGroup
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-[0.78vw]"
              stagger={0.08}
              delayChildren={0.1}
            >
              {FEATURED_WORK_ITEMS.map((item, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <StaggerItem key={item.title}>
                    <article
                      onClick={() => setActiveIndex(idx)}
                      className="group flex cursor-pointer flex-col"
                    >
                      {/* Top Rounded Thumbnail Image (with bottom-left category icon badge) */}
                      <div
                        className={`relative aspect-[149/115] w-full overflow-hidden rounded-[11px] bg-[#0e1424] shadow-[0_8px_22px_-8px_rgb(15_23_42/0.22)] transition-transform duration-200 group-hover:-translate-y-0.5 lg:rounded-[0.82vw] ${
                          isSelected ? "ring-2 ring-[#ff3d17]/75" : ""
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          quality={90}
                          sizes="(min-width: 1024px) 16vw, (min-width: 768px) 32vw, (min-width: 640px) 48vw, 92vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Title & 2-Line Description */}
                      <div className="mt-2.5 px-1 lg:mt-[0.75vw] lg:px-[0.2vw]">
                        <h3 className="font-sans text-[14.5px] font-extrabold leading-[1.2] tracking-[-0.015em] text-[#090a0d] transition-colors group-hover:text-[#eb3318] lg:text-[1.06vw]">
                          {item.title}
                        </h3>
                        <p className="mt-1 font-sans text-[12.5px] font-normal leading-[1.35] tracking-[-0.01em] text-[#4e5362] lg:mt-[0.35vw] lg:text-[0.9vw]">
                          <span className="block">{item.line1}</span>
                          <span className="block">{item.line2}</span>
                        </p>
                      </div>
                    </article>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>

          {/* Bottom-Center 6 Pagination Dots */}
          <div
            role="tablist"
            aria-label="Featured work slides"
            className="mt-6 flex items-center justify-center gap-2.5 lg:mt-[1.65vw] lg:gap-[0.78vw]"
          >
            {FEATURED_WORK_ITEMS.map((item, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Show ${item.title}`}
                  onClick={() => setActiveIndex(idx)}
                  className={
                    isSelected
                      ? "size-2.5 cursor-pointer rounded-full bg-[#e51920] transition-transform scale-110 lg:size-[0.78vw]"
                      : "size-2 cursor-pointer rounded-full bg-[#d5d8e0] transition-colors hover:bg-[#aeb3c0] lg:size-[0.65vw]"
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
