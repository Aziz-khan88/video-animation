"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CAROUSEL_SLIDES = [
  {
    id: 0,
    leftMain: {
      title: "Meadow Companions",
      image: "/images/portfolio-2d-main-1.jpg",
      alt: "Cheerful 2D animated girl in purple shirt sitting with her happy golden dog in a sunlit wildflower meadow with a castle in the distance",
    },
    rightMain: {
      title: "Forest Bear Hug",
      image: "/images/portfolio-2d-main-2.jpg",
      alt: "Cheerful 2D animated girl in red shirt and overalls hugging a friendly smiling brown bear cub in a sunlit forest meadow",
    },
    leftPeek: "/images/portfolio-all-6.jpg",
    rightPeek: "/images/portfolio-1-brighter.jpg",
  },
  {
    id: 1,
    leftMain: {
      title: "Lake Rowboat Adventure",
      image: "/images/portfolio-2d-thumb-2.jpg",
      alt: "Animated girl, boy rowing oars, and golden puppy in a wooden rowboat on a sparkling alpine lake",
    },
    rightMain: {
      title: "Sunny Wildflower Hills",
      image: "/images/portfolio-2d-thumb-1.jpg",
      alt: "Animated girl and golden puppy lying in a sunny wildflower meadow with yellow butterflies",
    },
    leftPeek: "/images/portfolio-2d-main-1.jpg",
    rightPeek: "/images/portfolio-2d-thumb-3.jpg",
  },
  {
    id: 2,
    leftMain: {
      title: "Young Creator's Desk",
      image: "/images/portfolio-2d-thumb-3.jpg",
      alt: "Young boy with backpack sitting at a sunlit wooden desk sketching stories",
    },
    rightMain: {
      title: "Meadow Companions",
      image: "/images/portfolio-2d-main-1.jpg",
      alt: "Cheerful 2D animated girl sitting with her happy golden dog in a wildflower meadow",
    },
    leftPeek: "/images/portfolio-2d-thumb-2.jpg",
    rightPeek: "/images/portfolio-2d-thumb-4.jpg",
  },
  {
    id: 3,
    leftMain: {
      title: "Dragon of the Valley",
      image: "/images/portfolio-2d-thumb-4.jpg",
      alt: "Majestic red-and-gold dragon in a fantasy forest looking toward a fairytale castle at sunset",
    },
    rightMain: {
      title: "Forest Bear Hug",
      image: "/images/portfolio-2d-main-2.jpg",
      alt: "Cheerful 2D animated girl hugging a friendly smiling brown bear cub in a sunlit forest meadow",
    },
    leftPeek: "/images/portfolio-2d-thumb-3.jpg",
    rightPeek: "/images/portfolio-2d-main-1.jpg",
  },
] as const;

const BOTTOM_THUMBNAILS = [
  {
    id: 0,
    title: "Sunny Wildflower Meadow",
    image: "/images/portfolio-2d-thumb-1.jpg",
    alt: "Animated girl and her golden puppy lying in a sunny wildflower meadow with yellow butterflies",
  },
  {
    id: 1,
    title: "Alpine Lake Rowboat",
    image: "/images/portfolio-2d-thumb-2.jpg",
    alt: "Animated girl, boy rowing wooden oars, and golden puppy in a rowboat on a sparkling alpine lake",
  },
  {
    id: 2,
    title: "Story Sketching at Desk",
    image: "/images/portfolio-2d-thumb-3.jpg",
    alt: "Young boy with backpack sitting at a wooden desk in a sunlit room sketching on paper",
  },
  {
    id: 3,
    title: "Guardian Dragon at Sunset",
    image: "/images/portfolio-2d-thumb-4.jpg",
    alt: "Majestic red-and-gold dragon in a fantasy forest looking toward a fairytale castle at sunset",
  },
] as const;

export function TwoDAnimationPortfolio() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = CAROUSEL_SLIDES[activeSlide];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === CAROUSEL_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="two-d-portfolio"
      aria-labelledby="two-d-portfolio-heading"
      className="w-full bg-white px-6 py-6 sm:px-10 lg:px-[1.18vw] lg:py-[1.5vw]"
    >
      {/* Framed Rounded Card Container */}
      <div className="relative isolate w-full overflow-hidden rounded-[18px] border-[1.5px] border-[#ee8d43] bg-white pt-6 pb-6 shadow-[0_14px_40px_-12px_rgb(15_23_42/0.07)] lg:rounded-[1.25vw] lg:pt-[1.6vw] lg:pb-[1.8vw]">
        {/* Row 1: 05 Badge + 2D ANIMATION PORTFOLIO on Left, View All Button on Right */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 sm:px-8 lg:px-[1.55vw]">
          <div className="flex items-center gap-4 lg:gap-[2.9vw]">
            <span className="grid h-[56px] w-[66px] shrink-0 place-items-center rounded-[13px] bg-[linear-gradient(135deg,#f3271c_0%,#ff5516_55%,#f68d14_100%)] font-sans text-[24px] font-extrabold tracking-[-0.03em] text-white shadow-[0_8px_20px_-6px_rgb(243_39_28/0.45)] lg:h-[6.35vw] lg:w-[7.22vw] lg:rounded-[1.25vw] lg:text-[2.6vw]">
              05
            </span>
            <div>
              <h2
                id="two-d-portfolio-heading"
                className="font-sans text-[20px] font-extrabold uppercase leading-[1.1] tracking-[0.02em] text-[#0c0c10] lg:text-[2.3vw]"
              >
                2D ANIMATION PORTFOLIO
              </h2>
              <p className="mt-1 font-sans text-[14px] font-normal leading-[1.25] tracking-[-0.01em] text-[#60646f] lg:mt-[0.3vw] lg:text-[1.55vw]">
                Colorful worlds. Memorable characters.
              </p>
            </div>
          </div>

          <Link
            href="#all-projects"
            className="inline-flex h-[42px] items-center justify-center gap-3 rounded-full border-[1.4px] border-[#ca5b38] bg-white px-6 font-sans text-[14px] font-bold tracking-[-0.01em] text-[#d9331a] shadow-[0_2px_8px_rgb(217_51_26/0.08)] transition-all hover:-translate-y-0.5 hover:bg-[#fff5f2] lg:h-[4.78vw] lg:w-[18.1vw] lg:gap-[1.5vw] lg:px-0 lg:text-[1.48vw]"
          >
            <span>View All</span>
            <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.5vw]" fill="none" aria-hidden="true">
              <path
                d="M4.2 10h11.6M10.8 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Row 2: 3D Side-Peek + Dual Featured Cards Carousel Row */}
        <div className="relative mt-5 flex items-center justify-between px-5 sm:px-8 lg:mt-[1.46vw] lg:px-0">
          {/* Far-Left 3D Perspective Side Peek Panel (Desktop) */}
          <div
            onClick={handlePrev}
            aria-hidden="true"
            className="relative -ml-[1.2vw] hidden h-[21.5vw] w-[8.2vw] shrink-0 cursor-pointer overflow-hidden rounded-r-[12px] border-[1.5px] border-l-0 border-[#ee964b] bg-[#12131a] shadow-[0_10px_24px_-6px_rgb(15_23_42/0.28)] transition-opacity hover:opacity-90 lg:block lg:[transform:perspective(420px)_rotateY(-28deg)] lg:origin-right"
          >
            <Image
              src={currentSlide.leftPeek}
              alt=""
              fill
              quality={80}
              sizes="9vw"
              className="object-cover"
            />
          </div>

          {/* Left Circular Prev Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous 2D animation slide"
            className="absolute left-2 z-20 grid size-11 cursor-pointer place-items-center rounded-full border-[1.5px] border-[#e88748] bg-white text-[#0c0c10] shadow-[0_8px_22px_rgb(0_0_0/0.18)] transition-transform duration-150 hover:scale-105 active:scale-95 sm:left-4 lg:left-[5.05vw] lg:size-[5.1vw]"
          >
            <svg viewBox="0 0 20 20" className="size-5 lg:size-[1.95vw]" fill="none" aria-hidden="true">
              <path
                d="M12.5 5 7.5 10l5 5"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Center 2 Large Featured Cards */}
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:mx-auto lg:w-[81.5vw] lg:grid-cols-[42.1vw_38.4vw] lg:gap-[1vw]">
            <article className="group relative aspect-[16/10] w-full overflow-hidden rounded-[13px] border-[1.6px] border-[#ee964b] bg-[#12131a] shadow-[0_12px_28px_-8px_rgb(15_23_42/0.22)] lg:aspect-auto lg:h-[25vw] lg:rounded-[1vw]">
              <Image
                key={currentSlide.leftMain.image}
                src={currentSlide.leftMain.image}
                alt={currentSlide.leftMain.alt}
                fill
                quality={90}
                sizes="(min-width: 1024px) 43vw, (min-width: 768px) 48vw, 95vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </article>

            <article className="group relative aspect-[16/10] w-full overflow-hidden rounded-[13px] border-[1.6px] border-[#ee964b] bg-[#12131a] shadow-[0_12px_28px_-8px_rgb(15_23_42/0.22)] lg:aspect-auto lg:h-[25vw] lg:rounded-[1vw]">
              <Image
                key={currentSlide.rightMain.image}
                src={currentSlide.rightMain.image}
                alt={currentSlide.rightMain.alt}
                fill
                quality={90}
                sizes="(min-width: 1024px) 39vw, (min-width: 768px) 48vw, 95vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </article>
          </div>

          {/* Right Circular Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next 2D animation slide"
            className="absolute right-2 z-20 grid size-11 cursor-pointer place-items-center rounded-full border-[1.5px] border-[#e88748] bg-white text-[#0c0c10] shadow-[0_8px_22px_rgb(0_0_0/0.18)] transition-transform duration-150 hover:scale-105 active:scale-95 sm:right-4 lg:right-[5.05vw] lg:size-[5.1vw]"
          >
            <svg viewBox="0 0 20 20" className="size-5 lg:size-[1.95vw]" fill="none" aria-hidden="true">
              <path
                d="m7.5 5 5 5-5 5"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Far-Right 3D Perspective Side Peek Panel (Desktop) */}
          <div
            onClick={handleNext}
            aria-hidden="true"
            className="relative -mr-[1.2vw] hidden h-[21.5vw] w-[8.2vw] shrink-0 cursor-pointer overflow-hidden rounded-l-[12px] border-[1.5px] border-r-0 border-[#ee964b] bg-[#12131a] shadow-[0_10px_24px_-6px_rgb(15_23_42/0.28)] transition-opacity hover:opacity-90 lg:block lg:[transform:perspective(420px)_rotateY(28deg)] lg:origin-left"
          >
            <Image
              src={currentSlide.rightPeek}
              alt=""
              fill
              quality={80}
              sizes="9vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Row 3: Carousel Pagination Indicator Dots */}
        <div className="mt-4 flex items-center justify-center gap-2.5 lg:mt-[1.15vw] lg:gap-[1.35vw]">
          {CAROUSEL_SLIDES.map((slide, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive
                    ? "relative flex h-3.5 w-8 cursor-pointer items-center justify-end rounded-full bg-[linear-gradient(90deg,#f3271c_0%,#ff7e14_100%)] px-1.5 shadow-[0_2px_8px_rgb(243_39_28/0.35)] transition-all lg:h-[1.45vw] lg:w-[3.2vw] lg:px-[0.42vw]"
                    : "size-2 cursor-pointer rounded-full bg-[#8c909b] transition-colors hover:bg-[#ef4b18] lg:size-[0.82vw]"
                }
              >
                {isActive && (
                  <span className="size-1.5 rounded-full bg-white lg:size-[0.58vw]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Row 4: Bottom 4 2D Animation Thumbnail Cards */}
        <div className="mt-4 grid grid-cols-1 gap-3.5 px-5 sm:grid-cols-2 sm:px-8 lg:mt-[1.15vw] lg:grid-cols-4 lg:gap-[1.15vw] lg:px-[1.15vw]">
          {BOTTOM_THUMBNAILS.map((thumb, idx) => {
            const isSelected = activeSlide === idx;
            return (
              <button
                key={thumb.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Select 2D animation project: ${thumb.title}`}
                className={`group relative aspect-[236/123] w-full cursor-pointer overflow-hidden rounded-[11px] border-[1.5px] bg-[#12131a] text-left shadow-[0_8px_20px_-6px_rgb(15_23_42/0.18)] transition-all duration-200 hover:-translate-y-1 lg:aspect-auto lg:h-[12.1vw] lg:rounded-[0.85vw] ${
                  isSelected
                    ? "border-[#ff4b18] ring-2 ring-[#ff4b18]/25"
                    : "border-[#ee964b] hover:border-[#ff4b18]"
                }`}
              >
                <Image
                  src={thumb.image}
                  alt={thumb.alt}
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 95vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
