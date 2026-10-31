"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    id: 0,
    title: "Cyber Robot Metropolis",
    mainImage: "/images/portfolio-3d-main.jpg",
    hasBakedPlayIcon: true,
    alt: "Glossy white 3D robot character with glowing cyan eyes reaching forward in a futuristic sunset metropolis",
    leftPeek: "/images/portfolio-3d-side-left.jpg",
    rightPeek: "/images/portfolio-3d-side-right.jpg",
  },
  {
    id: 1,
    title: "Apex Red Supercar",
    mainImage: "/images/portfolio-3d-thumb-1.jpg",
    hasBakedPlayIcon: false,
    alt: "Sleek metallic red 3D sports car speeding down a wet city highway at sunset",
    leftPeek: "/images/portfolio-3d-main.jpg",
    rightPeek: "/images/portfolio-3d-thumb-2.jpg",
  },
  {
    id: 2,
    title: "Citadel Bridge at Twilight",
    mainImage: "/images/portfolio-3d-thumb-2.jpg",
    hasBakedPlayIcon: false,
    alt: "Grand 3D fairytale castle with glowing warm lights and arched stone bridge over a river at twilight",
    leftPeek: "/images/portfolio-3d-thumb-1.jpg",
    rightPeek: "/images/portfolio-3d-thumb-3.jpg",
  },
  {
    id: 3,
    title: "Future Skyline Explorer",
    mainImage: "/images/portfolio-3d-thumb-3.jpg",
    hasBakedPlayIcon: false,
    alt: "3D animated boy with backpack overlooking a futuristic sci-fi city skyline at sunset with flying drones",
    leftPeek: "/images/portfolio-3d-thumb-2.jpg",
    rightPeek: "/images/portfolio-3d-thumb-4.jpg",
  },
  {
    id: 4,
    title: "Crimson Dragon & Kingdom",
    mainImage: "/images/portfolio-3d-thumb-4.jpg",
    hasBakedPlayIcon: false,
    alt: "Majestic red-and-gold 3D dragon roaring before a fantasy castle silhouette at sunset",
    leftPeek: "/images/portfolio-3d-thumb-3.jpg",
    rightPeek: "/images/portfolio-3d-thumb-5.jpg",
  },
] as const;

const THUMBNAILS = [
  {
    id: 0,
    slideIndex: 1,
    title: "Apex Red Supercar",
    image: "/images/portfolio-3d-thumb-1.jpg",
    alt: "Sleek metallic red 3D sports car speeding down a wet city highway at sunset",
    widthClass: "lg:w-[21.3vw]",
  },
  {
    id: 1,
    slideIndex: 2,
    title: "Citadel Bridge at Twilight",
    image: "/images/portfolio-3d-thumb-2.jpg",
    alt: "Grand 3D fairytale castle with glowing warm lights and arched stone bridge over a river at twilight",
    widthClass: "lg:w-[17.1vw]",
  },
  {
    id: 2,
    slideIndex: 3,
    title: "Future Skyline Explorer",
    image: "/images/portfolio-3d-thumb-3.jpg",
    alt: "3D animated boy with backpack overlooking a futuristic sci-fi city skyline at sunset with flying drones",
    widthClass: "lg:w-[16.2vw]",
  },
  {
    id: 3,
    slideIndex: 4,
    title: "Crimson Dragon",
    image: "/images/portfolio-3d-thumb-4.jpg",
    alt: "Majestic red-and-gold 3D dragon roaring before a fantasy castle silhouette at sunset",
    widthClass: "lg:w-[19.1vw]",
  },
  {
    id: 4,
    slideIndex: 0,
    title: "Island Castle Kingdom",
    image: "/images/portfolio-3d-thumb-5.jpg",
    alt: "Sunlit 3D fairytale castle on a green island peninsula surrounded by a sparkling alpine lake and flowers",
    widthClass: "lg:w-[19.4vw]",
  },
] as const;

export function ThreeDAnimationPortfolio() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = SLIDES[activeSlide];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="three-d-portfolio"
      aria-labelledby="three-d-portfolio-heading"
      className="w-full bg-white px-6 py-6 sm:px-10 lg:px-[1.18vw] lg:py-[1.5vw]"
    >
      {/* Framed Rounded Card Container */}
      <div className="relative isolate w-full overflow-hidden rounded-[18px] border-[1.5px] border-[#ee8d43] bg-white pt-6 pb-6 shadow-[0_14px_40px_-12px_rgb(15_23_42/0.07)] lg:rounded-[1.25vw] lg:pt-[1.6vw] lg:pb-[1.8vw]">
        {/* Row 1: 06 Badge + 3D ANIMATION PORTFOLIO on Left, View All Button on Right */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 sm:px-8 lg:px-[1.55vw]">
          <div className="flex items-center gap-4 lg:gap-[2.9vw]">
            <span className="grid h-[56px] w-[66px] shrink-0 place-items-center rounded-[13px] bg-[linear-gradient(135deg,#f3271c_0%,#ff5516_55%,#f68d14_100%)] font-sans text-[24px] font-extrabold tracking-[-0.03em] text-white shadow-[0_8px_20px_-6px_rgb(243_39_28/0.45)] lg:h-[6.35vw] lg:w-[7.22vw] lg:rounded-[1.25vw] lg:text-[2.6vw]">
              06
            </span>
            <div>
              <h2
                id="three-d-portfolio-heading"
                className="font-sans text-[20px] font-extrabold uppercase leading-[1.1] tracking-[0.02em] text-[#0c0c10] lg:text-[2.3vw]"
              >
                3D ANIMATION PORTFOLIO
              </h2>
              <p className="mt-1 font-sans text-[14px] font-normal leading-[1.25] tracking-[-0.01em] text-[#60646f] lg:mt-[0.3vw] lg:text-[1.55vw]">
                Realistic visuals. Immersive experiences.
              </p>
            </div>
          </div>

          <Link
            href="#all-projects"
            className="inline-flex h-[42px] items-center justify-center gap-3 rounded-full border-[1.4px] border-[#ca5b38] bg-white px-6 font-sans text-[14px] font-bold tracking-[-0.01em] text-[#d9331a] shadow-[0_2px_8px_rgb(217_51_26/0.08)] transition-all hover:-translate-y-0.5 hover:bg-[#fff5f2] lg:h-[4.4vw] lg:w-[16.2vw] lg:gap-[1.4vw] lg:px-0 lg:text-[1.45vw]"
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

        {/* Row 2: 3D Side-Peek Panels + Center Widescreen Featured Player */}
        <div className="relative mt-5 flex items-center justify-between px-5 sm:px-8 lg:mt-[1.46vw] lg:px-[0.5vw]">
          {/* Left Circular Prev Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous 3D animation slide"
            className="absolute left-2 z-20 grid size-11 cursor-pointer place-items-center rounded-full border border-[#e4e6ec] bg-white text-[#0c0c10] shadow-[0_8px_22px_rgb(0_0_0/0.18)] transition-transform duration-150 hover:scale-105 active:scale-95 sm:left-4 lg:left-[0.8vw] lg:size-[5.1vw]"
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

          {/* Far-Left 3D Perspective Side Peek Panel (Desktop) */}
          <div
            onClick={handlePrev}
            aria-hidden="true"
            className="relative hidden h-[26.8vw] w-[11.2vw] shrink-0 cursor-pointer overflow-hidden rounded-[12px] border-[1.5px] border-[#ee964b] bg-[#12131a] shadow-[0_10px_24px_-6px_rgb(15_23_42/0.28)] transition-opacity hover:opacity-90 lg:block lg:[transform:perspective(420px)_rotateY(24deg)] lg:origin-left"
          >
            <Image
              src={currentSlide.leftPeek}
              alt=""
              fill
              quality={85}
              sizes="12vw"
              className="object-cover"
            />
          </div>

          {/* Center Widescreen Featured Player */}
          <article
            onClick={handleNext}
            className="group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[14px] border-[1.6px] border-[#ee964b] bg-[#12131a] shadow-[0_14px_34px_-8px_rgb(15_23_42/0.26)] lg:mx-auto lg:aspect-auto lg:h-[27.7vw] lg:w-[72.6vw] lg:rounded-[1.1vw]"
          >
            <Image
              key={currentSlide.mainImage}
              src={currentSlide.mainImage}
              alt={currentSlide.alt}
              fill
              quality={90}
              sizes="(min-width: 1024px) 74vw, 95vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {!currentSlide.hasBakedPlayIcon && (
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid size-[60px] place-items-center rounded-full border-[3px] border-white bg-black/55 text-white shadow-[0_10px_28px_rgb(0_0_0/0.45)] backdrop-blur-[2px] transition-transform duration-200 group-hover:scale-110 lg:size-[7.1vw]">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-7 translate-x-[1.5px] fill-current lg:size-[3.1vw]"
                    aria-hidden="true"
                  >
                    <path d="M6.8 4.4v15.2a.9.9 0 0 0 1.38.76l12.2-7.6a.9.9 0 0 0 0-1.52L8.18 3.64a.9.9 0 0 0-1.38.76Z" />
                  </svg>
                </span>
              </div>
            )}
          </article>

          {/* Far-Right 3D Perspective Side Peek Panel (Desktop) */}
          <div
            onClick={handleNext}
            aria-hidden="true"
            className="relative hidden h-[26.8vw] w-[11.2vw] shrink-0 cursor-pointer overflow-hidden rounded-[12px] border-[1.5px] border-[#ee964b] bg-[#12131a] shadow-[0_10px_24px_-6px_rgb(15_23_42/0.28)] transition-opacity hover:opacity-90 lg:block lg:[transform:perspective(420px)_rotateY(-24deg)] lg:origin-right"
          >
            <Image
              src={currentSlide.rightPeek}
              alt=""
              fill
              quality={85}
              sizes="12vw"
              className="object-cover"
            />
          </div>

          {/* Right Circular Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next 3D animation slide"
            className="absolute right-2 z-20 grid size-11 cursor-pointer place-items-center rounded-full border border-[#e4e6ec] bg-white text-[#0c0c10] shadow-[0_8px_22px_rgb(0_0_0/0.18)] transition-transform duration-150 hover:scale-105 active:scale-95 sm:right-4 lg:right-[0.8vw] lg:size-[5.1vw]"
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
        </div>

        {/* Row 3: 5 Carousel Pagination Dots */}
        <div className="mt-4 flex items-center justify-center gap-3 lg:mt-[1.1vw] lg:gap-[1.4vw]">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to 3D slide ${idx + 1}`}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive
                    ? "size-3 cursor-pointer rounded-full bg-[#ff5a16] shadow-[0_2px_6px_rgb(255_90_22/0.4)] transition-transform lg:size-[1.2vw]"
                    : "size-2 cursor-pointer rounded-full bg-[#8c909b] transition-colors hover:bg-[#ff5a16] lg:size-[0.78vw]"
                }
              />
            );
          })}
        </div>

        {/* Row 4: Bottom Row of 5 3D Animation Thumbnail Cards */}
        <div className="mt-4 grid grid-cols-1 gap-3.5 px-5 sm:grid-cols-2 md:grid-cols-3 sm:px-8 lg:mt-[1.1vw] lg:flex lg:items-center lg:justify-between lg:gap-[0.95vw] lg:px-[1.15vw]">
          {THUMBNAILS.map((thumb) => {
            const isSelected = activeSlide === thumb.slideIndex;
            return (
              <button
                key={thumb.id}
                type="button"
                onClick={() => setActiveSlide(thumb.slideIndex)}
                aria-label={`Select 3D project: ${thumb.title}`}
                className={`group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[10px] border-[1.5px] bg-[#12131a] text-left shadow-[0_8px_20px_-6px_rgb(15_23_42/0.2)] transition-all duration-200 hover:-translate-y-1 lg:aspect-auto lg:h-[11.2vw] lg:rounded-[0.8vw] ${
                  thumb.widthClass
                } ${
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
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 48vw, 95vw"
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
