"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Reveal,
  ParallaxBackground,
  EASE_OUT_EXPO,
} from "@/components/motion/MotionPrimitives";

const CATEGORIES = [
  "All",
  "2D Animation",
  "3D Animation",
  "Motion Graphics",
  "Explainer Videos",
] as const;

type Category = (typeof CATEGORIES)[number];

interface PortfolioItem {
  title: string;
  category: Exclude<Category, "All">;
  categoryLabel: string;
  duration: string;
  image: string;
  objectPosition?: string;
}

const TOP_ROW_ITEMS: PortfolioItem[] = [
  {
    title: "A Brighter Tomorrow",
    category: "2D Animation",
    categoryLabel: "2D ANIMATION",
    duration: "02:18",
    image: "/images/portfolio-1-brighter.jpg",
    objectPosition: "object-[center_28%]",
  },
  {
    title: "Beyond the Horizon",
    category: "3D Animation",
    categoryLabel: "3D ANIMATION",
    duration: "01:52",
    image: "/images/portfolio-2-horizon.jpg",
    objectPosition: "object-[center_22%]",
  },
  {
    title: "Drive What's Next",
    category: "Motion Graphics",
    categoryLabel: "MOTION GRAPHICS",
    duration: "01:28",
    image: "/images/portfolio-3-drive.jpg",
    objectPosition: "object-center",
  },
];

const BOTTOM_ROW_ITEMS: PortfolioItem[] = [
  {
    title: "Small Ideas, Big Worlds",
    category: "2D Animation",
    categoryLabel: "2D ANIMATION",
    duration: "01:46",
    image: "/images/portfolio-4-worlds.jpg",
    objectPosition: "object-[center_25%]",
  },
  {
    title: "Simple. Smarter. Together.",
    category: "Explainer Videos",
    categoryLabel: "EXPLAINER VIDEOS",
    duration: "01:32",
    image: "/images/portfolio-5-smarter.jpg",
    objectPosition: "object-center",
  },
  {
    title: "Technology for a Kinder Tomorrow",
    category: "3D Animation",
    categoryLabel: "3D ANIMATION",
    duration: "02:04",
    image: "/images/portfolio-6-kinder.jpg",
    objectPosition: "object-[center_25%]",
  },
  {
    title: "A Cleaner, Brighter Future",
    category: "Explainer Videos",
    categoryLabel: "EXPLAINER VIDEOS",
    duration: "01:37",
    image: "/images/portfolio-7-cleaner.jpg",
    objectPosition: "object-[center_30%]",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredTop =
    activeCategory === "All"
      ? TOP_ROW_ITEMS
      : TOP_ROW_ITEMS.filter((item) => item.category === activeCategory);

  const filteredBottom =
    activeCategory === "All"
      ? BOTTOM_ROW_ITEMS
      : BOTTOM_ROW_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="work"
      aria-labelledby="portfolio-heading"
      className="relative isolate w-full overflow-hidden bg-white pb-12 lg:min-h-[56.25vw] lg:pb-[2.1vw]"
    >
      {/* Top Header Banner with full-width right-side boy & floating islands artwork */}
      <div className="relative isolate w-full overflow-hidden px-6 pt-10 pb-6 sm:px-10 lg:h-[22.56vw] lg:px-[4.1vw] lg:pt-[2.8vw] lg:pb-0">
        <ParallaxBackground
          offset={16}
          scaleFrom={1.03}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <Image
            src="/images/portfolio-banner-bg.jpg"
            alt="Smiling animated boy with backpack looking up at floating islands and a fairytale castle at sunset"
            fill
            quality={85}
            sizes="100vw"
            className="object-cover object-[78%_4%] lg:object-[center_4%]"
          />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white/95 to-white/70 sm:w-4/5 sm:to-transparent lg:hidden" />
        </ParallaxBackground>

        <div className="relative z-10 max-w-[580px] lg:max-w-[56vw]">
          <Reveal
            as="p"
            y={14}
            className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#e5251a] lg:text-[1.08vw]"
          >
            OUR PORTFOLIO
          </Reveal>

          <h2
            id="portfolio-heading"
            className="mt-2 font-sans text-[clamp(1.75rem,4.35vw,4.5rem)] font-extrabold leading-[1.04] tracking-[-0.043em] text-[#0a0a0d] lg:mt-[0.85vw]"
          >
            <Reveal as="span" y={20} delay={0.05} className="block sm:whitespace-nowrap">
              Made to Be Seen.
            </Reveal>
            <Reveal as="span" y={20} delay={0.11} className="mt-[0.05vw] block sm:whitespace-nowrap">
              Built to Be <span className="text-hero-gradient">Remembered.</span>
            </Reveal>
          </h2>

          <Reveal
            as="p"
            y={16}
            delay={0.17}
            className="mt-3 font-sans text-[14px] font-normal leading-[1.42] tracking-[-0.01em] text-[#5a5d68] lg:mt-[0.95vw] lg:text-[1.22vw]"
          >
            Dive into a collection of animated videos crafted to inspire, engage
            <br className="hidden sm:inline" /> and deliver real results for brands around the world.
          </Reveal>

          {/* Filter Pills Row */}
          <Reveal
            y={14}
            delay={0.22}
            className="mt-5 flex flex-wrap items-center gap-2 lg:mt-[1.35vw] lg:gap-[0.75vw]"
          >
            <div
              role="tablist"
              aria-label="Portfolio categories"
              className="flex flex-wrap items-center gap-2 lg:gap-[0.75vw]"
            >
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={
                      isActive
                        ? "bg-cta-gradient inline-flex h-[34px] cursor-pointer items-center justify-center rounded-full px-5 font-sans text-[12px] font-bold text-white shadow-[0_6px_16px_-4px_rgb(255_45_27/0.48)] transition-transform lg:h-[3.03vw] lg:min-w-[6.1vw] lg:px-[1.6vw] lg:text-[1.06vw]"
                        : "inline-flex h-[34px] cursor-pointer items-center justify-center rounded-full border border-[#ebedf2] bg-[#f6f7fa]/95 px-4 font-sans text-[12px] font-semibold text-[#1c1d22] backdrop-blur-xs transition-colors hover:border-[#d5d8e2] hover:bg-white lg:h-[3.03vw] lg:px-[1.5vw] lg:text-[1.06vw]"
                    }
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Full-width Cards Grid Container */}
      <div className="w-full px-6 pt-2 sm:px-10 lg:px-[4.1vw] lg:pt-[0.25vw]">
        {/* Row 1: 3 Large Cards */}
        <AnimatePresence mode="popLayout">
          {filteredTop.length > 0 && (
            <motion.div
              layout
              className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-[1.05vw]"
            >
              {filteredTop.map((item, idx) => (
                <motion.article
                  layout
                  key={item.title}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: EASE_OUT_EXPO }}
                  className="group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[12px] bg-[#0d0e14] shadow-[0_10px_24px_-8px_rgb(15_23_42/0.28)] transition-shadow duration-300 hover:shadow-[0_16px_32px_-8px_rgb(15_23_42/0.4)] lg:aspect-auto lg:h-[13.67vw] lg:rounded-[0.85vw]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={85}
                    sizes="(min-width: 1024px) 31vw, (min-width: 768px) 33vw, 95vw"
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${item.objectPosition ?? "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-[1.15vw]">
                    <span className="mb-2 grid size-9 place-items-center rounded-full border-[1.6px] border-white/85 bg-black/35 text-white backdrop-blur-[2px] transition-all duration-200 group-hover:scale-105 group-hover:border-[#ff4518] group-hover:bg-[#ff4518] lg:mb-[0.65vw] lg:size-[3.4vw]">
                      <svg
                        viewBox="0 0 20 20"
                        className="size-3.5 translate-x-[1px] fill-current lg:size-[1.25vw]"
                        aria-hidden="true"
                      >
                        <path d="M6.2 4.5v11a.8.8 0 0 0 1.22.68l8.8-5.5a.8.8 0 0 0 0-1.36l-8.8-5.5a.8.8 0 0 0-1.22.68Z" />
                      </svg>
                    </span>

                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <h3 className="font-sans text-[15px] font-bold leading-[1.15] tracking-[-0.015em] text-white drop-shadow-xs lg:text-[1.3vw]">
                          {item.title}
                        </h3>
                        <p className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-white/80 lg:mt-[0.22vw] lg:text-[0.82vw]">
                          {item.categoryLabel}
                        </p>
                      </div>
                      <span className="font-sans text-[11px] font-semibold leading-none text-white/95 lg:text-[0.95vw]">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Row 2: 4 Medium Cards */}
        <AnimatePresence mode="popLayout">
          {filteredBottom.length > 0 && (
            <motion.div
              layout
              className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[0.98vw] lg:grid-cols-4 lg:gap-[1.02vw]"
            >
              {filteredBottom.map((item, idx) => (
                <motion.article
                  layout
                  key={item.title}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, delay: 0.1 + idx * 0.07, ease: EASE_OUT_EXPO }}
                  className="group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[11px] bg-[#0d0e14] shadow-[0_10px_22px_-8px_rgb(15_23_42/0.25)] transition-shadow duration-300 hover:shadow-[0_16px_30px_-8px_rgb(15_23_42/0.38)] lg:aspect-auto lg:h-[11.13vw] lg:rounded-[0.78vw]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={85}
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 48vw, 95vw"
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${item.objectPosition ?? "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-3.5 lg:p-[0.9vw]">
                    <span className="mb-1.5 grid size-7 place-items-center rounded-full border-[1.5px] border-white/85 bg-black/35 text-white backdrop-blur-[2px] transition-all duration-200 group-hover:scale-105 group-hover:border-[#ff4518] group-hover:bg-[#ff4518] lg:mb-[0.5vw] lg:size-[2.45vw]">
                      <svg
                        viewBox="0 0 20 20"
                        className="size-3 translate-x-[0.8px] fill-current lg:size-[0.95vw]"
                        aria-hidden="true"
                      >
                        <path d="M6.2 4.5v11a.8.8 0 0 0 1.22.68l8.8-5.5a.8.8 0 0 0 0-1.36l-8.8-5.5a.8.8 0 0 0-1.22.68Z" />
                      </svg>
                    </span>

                    <h3 className="font-sans text-[13px] font-bold leading-[1.15] tracking-[-0.02em] text-white drop-shadow-xs lg:text-[1.02vw]">
                      {item.title}
                    </h3>
                    <div className="mt-0.5 flex items-center justify-between gap-2 lg:mt-[0.2vw]">
                      <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.08em] text-white/80 lg:text-[0.75vw]">
                        {item.categoryLabel}
                      </p>
                      <span className="shrink-0 font-sans text-[10px] font-semibold leading-none text-white/95 lg:text-[0.86vw]">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Pagination Arrows + View Full Portfolio CTA */}
        <Reveal
          y={16}
          delay={0.22}
          className="mt-7 flex items-center justify-center gap-6 lg:mt-[1.55vw] lg:gap-[3.5vw]"
        >
          <button
            type="button"
            aria-label="Previous portfolio page"
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-[#eceef3] bg-white text-[#1c1d22] shadow-[0_4px_14px_rgb(0_0_0/0.06)] transition-all duration-200 hover:scale-105 hover:border-[#d5d8e2] hover:text-[#ff251b] lg:size-[3.5vw]"
          >
            <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.35vw]" fill="none" aria-hidden="true">
              <path
                d="M15.2 10H4.8M9.2 5.4 4.6 10l4.6 4.6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <Link
            href="/portfolio"
            className="group bg-cta-gradient inline-flex h-[44px] items-center justify-center gap-2.5 rounded-[10px] px-6 font-sans text-[14px] font-bold tracking-[-0.01em] text-white shadow-[0_10px_24px_-6px_rgb(255_45_27/0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-6px_rgb(255_45_27/0.55)] lg:h-[3.81vw] lg:w-[17.8vw] lg:gap-[0.8vw] lg:rounded-[0.8vw] lg:px-0 lg:text-[1.12vw]"
          >
            <span>View Full Portfolio</span>
            <svg
              viewBox="0 0 20 20"
              className="size-3.5 transition-transform duration-200 group-hover:translate-x-1 lg:size-[1.15vw]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4.2 10h11.6M10.8 5.2 15.8 10l-5 4.8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <button
            type="button"
            aria-label="Next portfolio page"
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-[#eceef3] bg-white text-[#1c1d22] shadow-[0_4px_14px_rgb(0_0_0/0.06)] transition-all duration-200 hover:scale-105 hover:border-[#d5d8e2] hover:text-[#ff251b] lg:size-[3.5vw]"
          >
            <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.35vw]" fill="none" aria-hidden="true">
              <path
                d="M4.8 10h10.4M10.8 5.4l4.6 4.6-4.6 4.6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
