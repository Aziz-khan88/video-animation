"use client";

import { useState } from "react";
import Image from "next/image";

const WORLD_SCENES = [
  {
    id: "sunset-harbour",
    title: "Golden Sunset Harbour",
    image: "/images/two-d-world-1.jpg",
    alt: "Young adventurer girl and her fox companion sitting on a sunlit stone ledge at golden sunset overlooking a fairytale harbour and castle town",
  },
  {
    id: "sunny-coastal-bay",
    title: "Sunlit Coastal Kingdom",
    image: "/images/two-d-world-2.jpg",
    alt: "Young adventurer girl with red scarf and teal backpack sitting beside her orange fox on a mossy stone wall under a tree, gazing across a sparkling blue bay with sailboats toward a fairytale hillside castle town",
  },
  {
    id: "river-stone-bridges",
    title: "River Stone Bridges",
    image: "/images/two-d-world-3.jpg",
    alt: "Lush 2D animated townscape with arched stone bridges spanning a calm blue river framed by a leafy tree and vibrant pink flowers",
  },
  {
    id: "hilltop-citadel",
    title: "Hilltop Fairytale Citadel",
    image: "/images/two-d-world-4.jpg",
    alt: "Panoramic 2D world view of a grand multi-spired castle and terraced hillside village overlooking a coastal bay framed by blossoms",
  },
  {
    id: "emerald-waterfall-valley",
    title: "Emerald Waterfall Valley",
    image: "/images/two-d-world-5.jpg",
    alt: "Enchanted 2D mountain valley with a cascading waterfall, turquoise river, cliffside tower, and tall evergreen pine trees",
  },
] as const;

export function TwoDWorldTakesShape() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeScene = WORLD_SCENES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? WORLD_SCENES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === WORLD_SCENES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="world-takes-shape"
      aria-labelledby="world-takes-shape-heading"
      className="relative isolate w-full overflow-hidden bg-white lg:h-[56.25vw]"
    >
      {/* Upper Panoramic 2D World Stage */}
      <div className="relative aspect-[16/9] w-full overflow-hidden lg:aspect-auto lg:h-[41.2vw]">
        <Image
          key={activeScene.image}
          src={activeScene.image}
          alt={activeScene.alt}
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center transition-opacity duration-300"
        />

        {/* Top-Left Curved White Header Cutout Wave (Desktop) matching the reference */}
        <svg
          viewBox="0 0 1024 140"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-[13.4vw] w-full lg:block"
        >
          <path
            d="M0 0 H790 C665 18 565 122 395 122 H0 Z"
            fill="#ffffff"
          />
          <path
            d="M0 122 H395 C565 122 665 18 790 0"
            fill="none"
            stroke="#dbe4f0"
            strokeWidth="2.5"
          />
        </svg>

        {/* Mobile/Tablet Header Bar on White */}
        <div className="relative z-20 bg-white/95 px-6 py-5 backdrop-blur-xs sm:px-10 lg:bg-transparent lg:px-[2.4vw] lg:pt-[2.2vw] lg:pb-0 lg:backdrop-blur-none">
          <div className="flex items-center gap-4 lg:gap-[2.05vw]">
            <span className="grid h-[50px] w-[52px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#ff171d_0%,#ff4b16_55%,#ff7610_100%)] font-sans text-[21px] font-extrabold tracking-[-0.02em] text-white shadow-[0_8px_20px_-4px_rgb(255_55_22/0.45)] lg:h-[6.35vw] lg:w-[6.55vw] lg:rounded-[1.15vw] lg:text-[2.55vw]">
              04
            </span>
            <div>
              <h2
                id="world-takes-shape-heading"
                className="font-sans text-[clamp(1.2rem,2.45vw,2.55rem)] font-black uppercase leading-[1.08] tracking-[-0.015em] text-[#090a0d]"
              >
                A WORLD TAKES SHAPE
              </h2>
              <p className="mt-1 font-sans text-[13.5px] font-normal leading-[1.25] tracking-[-0.01em] text-[#747882] lg:mt-[0.3vw] lg:text-[1.68vw]">
                Beautiful 2D worlds, full of life and detail.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 5-Thumbnail Selector Strip with Left/Right Arrows */}
      <div className="flex w-full items-center justify-between gap-2 bg-white px-4 py-5 sm:px-8 lg:h-[15.05vw] lg:justify-center lg:gap-[1.5vw] lg:px-[2.2vw] lg:py-0">
        {/* Previous Scene Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous 2D world scene"
          className="grid size-10 shrink-0 place-items-center rounded-full border border-[#eef0f5] bg-white text-[#1f2229] shadow-[0_4px_16px_rgb(15_23_42/0.08)] transition-colors hover:border-[#ff5516] hover:text-[#ff4518] lg:size-[4.3vw]"
        >
          <svg
            viewBox="0 0 20 20"
            className="size-4 lg:size-[1.65vw]"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12.5 5 7.5 10l5 5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 5 Scene Thumbnails */}
        <div
          role="tablist"
          aria-label="2D world scenes"
          className="grid flex-1 grid-cols-2 gap-2.5 sm:grid-cols-5 lg:flex lg:flex-initial lg:items-center lg:gap-[1.08vw]"
        >
          {WORLD_SCENES.map((scene, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={scene.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={scene.title}
                onClick={() => setActiveIndex(index)}
                className={
                  isSelected
                    ? "group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-[10px] p-[2px] ring-[2.5px] ring-[#ff5a16] ring-offset-2 ring-offset-white transition-all duration-200 lg:aspect-auto lg:h-[9.6vw] lg:w-[15.7vw] lg:rounded-[0.78vw]"
                    : "group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-[10px] opacity-95 shadow-[0_6px_16px_-6px_rgb(15_23_42/0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-100 lg:aspect-auto lg:h-[9.1vw] lg:w-[15.1vw] lg:rounded-[0.72vw]"
                }
              >
                <div className="relative h-full w-full overflow-hidden rounded-[8px] lg:rounded-[0.65vw]">
                  <Image
                    src={scene.image}
                    alt={scene.title}
                    fill
                    quality={85}
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 18vw, 45vw"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Next Scene Arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next 2D world scene"
          className="grid size-10 shrink-0 place-items-center rounded-full border border-[#eef0f5] bg-white text-[#1f2229] shadow-[0_4px_16px_rgb(15_23_42/0.08)] transition-colors hover:border-[#ff5516] hover:text-[#ff4518] lg:size-[4.3vw]"
        >
          <svg
            viewBox="0 0 20 20"
            className="size-4 lg:size-[1.65vw]"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m7.5 5 5 5-5 5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
