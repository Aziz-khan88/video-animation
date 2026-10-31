"use client";

import { useState } from "react";
import Image from "next/image";

const SHOWREEL_ITEMS = [
  {
    id: "sunset-voyage",
    title: "Sunset Harbour Voyage",
    image: "/images/two-d-showreel-1.jpg",
    thumb: "/images/two-d-showreel-thumb-1.jpg",
    hasBuiltInPlayIcon: true,
    alt: "Young adventurer girl with goggles and red scarf riding in a wooden rowboat with her orange fox companion across sparkling sunset waters between fairytale coastal towns",
  },
  {
    id: "underwater-reef",
    title: "Underwater Coral Kingdom",
    image: "/images/two-d-showreel-2.jpg",
    thumb: "/images/two-d-showreel-2.jpg",
    hasBuiltInPlayIcon: false,
    alt: "Young adventurer girl and her orange fox swimming underwater through sunlit turquoise ocean currents above a colorful coral reef",
  },
  {
    id: "wildflower-meadow",
    title: "Sunlit Wildflower Meadow",
    image: "/images/two-d-showreel-3.jpg",
    thumb: "/images/two-d-showreel-3.jpg",
    hasBuiltInPlayIcon: false,
    alt: "Young adventurer girl and her fox sitting among blooming wildflowers in a sunny meadow with fairytale castle towers in the background",
  },
  {
    id: "sky-lanterns",
    title: "Festival of Sky Lanterns",
    image: "/images/two-d-showreel-4.jpg",
    thumb: "/images/two-d-showreel-4.jpg",
    hasBuiltInPlayIcon: false,
    alt: "Young adventurer girl holding a glowing lantern beside her fox at twilight as dozens of warm golden sky lanterns float into the night sky",
  },
  {
    id: "forest-bridge",
    title: "Enchanted Forest Bridge",
    image: "/images/two-d-showreel-5.jpg",
    thumb: "/images/two-d-showreel-5.jpg",
    hasBuiltInPlayIcon: false,
    alt: "Young adventurer girl and her fox meeting on an arched mossy stone bridge over a stream in a sun-dappled green forest",
  },
] as const;

export function TwoDShowreel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = SHOWREEL_ITEMS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? SHOWREEL_ITEMS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === SHOWREEL_ITEMS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="two-d-showreel"
      aria-labelledby="two-d-showreel-heading"
      className="relative isolate w-full overflow-hidden bg-white py-6 lg:h-[56.25vw] lg:py-0"
    >
      {/* Top-Left Header: 05 Badge + 2D SHOWREEL + Subtitle */}
      <div className="w-full px-6 pt-2 sm:px-10 lg:px-[2.15vw] lg:pt-[2.1vw]">
        <div className="flex items-center gap-4 lg:gap-[2.1vw]">
          <span className="grid h-[50px] w-[52px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#ff171d_0%,#ff4b16_55%,#ff7610_100%)] font-sans text-[21px] font-extrabold tracking-[-0.02em] text-white shadow-[0_8px_20px_-4px_rgb(255_55_22/0.45)] lg:h-[6.35vw] lg:w-[6.55vw] lg:rounded-[1.15vw] lg:text-[2.55vw]">
            05
          </span>
          <div>
            <h2
              id="two-d-showreel-heading"
              className="font-sans text-[clamp(1.25rem,2.45vw,2.55rem)] font-black uppercase leading-[1.08] tracking-[-0.015em] text-[#090a0d]"
            >
              2D SHOWREEL
            </h2>
            <p className="mt-1 font-sans text-[13.5px] font-normal leading-[1.25] tracking-[-0.01em] text-[#747882] lg:mt-[0.3vw] lg:text-[1.68vw]">
              A showcase of our 2D animation work.
            </p>
          </div>
        </div>
      </div>

      {/* Main Wide Rounded Showreel Video Stage */}
      <div className="mt-4 w-full px-6 sm:px-10 lg:mt-[1.4vw] lg:px-[2.05vw]">
        <div className="group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[14px] bg-[#0d0e14] shadow-[0_14px_34px_-10px_rgb(15_23_42/0.32)] lg:aspect-auto lg:h-[32.7vw] lg:rounded-[1.25vw]">
          <Image
            key={activeItem.image}
            src={activeItem.image}
            alt={activeItem.alt}
            fill
            quality={92}
            sizes="96vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.015]"
          />

          {/* Interactive Play Button Overlay */}
          <button
            type="button"
            aria-label={`Play ${activeItem.title} showreel`}
            className="absolute inset-0 grid place-items-center focus:outline-none"
          >
            {!activeItem.hasBuiltInPlayIcon && (
              <span className="grid size-16 place-items-center rounded-full border-[3px] border-white bg-black/45 text-white shadow-[0_10px_28px_rgb(0_0_0/0.42)] backdrop-blur-[3px] transition-all duration-200 group-hover:scale-105 group-hover:bg-[#ff4518]/85 lg:size-[8.6vw] lg:border-[0.34vw]">
                <svg
                  viewBox="0 0 24 24"
                  className="size-7 translate-x-[2px] fill-current lg:size-[3.5vw]"
                  aria-hidden="true"
                >
                  <path d="M6.8 4.4v15.2a.9.9 0 0 0 1.38.76l12.2-7.6a.9.9 0 0 0 0-1.52L8.18 3.64a.9.9 0 0 0-1.38.76Z" />
                </svg>
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Bottom 5-Thumbnail Selector Strip with Red-Orange Outlined Navigation Arrows */}
      <div className="mt-5 flex w-full items-center justify-between gap-2 px-4 sm:px-8 lg:mt-[1.55vw] lg:justify-between lg:gap-[1.2vw] lg:px-[2.05vw]">
        {/* Previous Clip Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous showreel clip"
          className="grid size-10 shrink-0 place-items-center rounded-full border-[2px] border-[#ef5a28] bg-white text-[#181a20] shadow-[0_4px_14px_rgb(239_90_40/0.12)] transition-colors hover:bg-[#ff4518] hover:text-white lg:size-[4.65vw]"
        >
          <svg
            viewBox="0 0 20 20"
            className="size-4 lg:size-[1.7vw]"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12.5 5 7.5 10l5 5"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 5 Showreel Thumbnails */}
        <div
          role="tablist"
          aria-label="2D showreel clips"
          className="grid flex-1 grid-cols-2 gap-2.5 sm:grid-cols-5 lg:flex lg:flex-initial lg:items-center lg:gap-[1.08vw]"
        >
          {SHOWREEL_ITEMS.map((item, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={item.title}
                onClick={() => setActiveIndex(index)}
                className={
                  isSelected
                    ? "group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-[10px] p-[2px] ring-[2.5px] ring-[#ff5a16] ring-offset-2 ring-offset-white shadow-[0_10px_24px_-6px_rgb(255_75_22/0.5)] transition-all duration-200 lg:aspect-auto lg:h-[9.7vw] lg:w-[15.8vw] lg:rounded-[0.82vw]"
                    : "group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-[10px] opacity-95 shadow-[0_6px_16px_-6px_rgb(15_23_42/0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-100 lg:aspect-auto lg:h-[9.1vw] lg:w-[15.1vw] lg:rounded-[0.75vw]"
                }
              >
                <div className="relative h-full w-full overflow-hidden rounded-[8px] lg:rounded-[0.68vw]">
                  <Image
                    src={item.thumb}
                    alt={item.title}
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

        {/* Next Clip Arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next showreel clip"
          className="grid size-10 shrink-0 place-items-center rounded-full border-[2px] border-[#ef5a28] bg-white text-[#181a20] shadow-[0_4px_14px_rgb(239_90_40/0.12)] transition-colors hover:bg-[#ff4518] hover:text-white lg:size-[4.65vw]"
        >
          <svg
            viewBox="0 0 20 20"
            className="size-4 lg:size-[1.7vw]"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m7.5 5 5 5-5 5"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
