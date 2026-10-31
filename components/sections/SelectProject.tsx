"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectItem {
  id: number;
  title: string;
  image: string;
  alt: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Sunset by the Lake",
    image: "/images/portfolio-project-1.jpg",
    alt: "3D animated girl with wind-swept hair and golden retriever puppy sitting on a wooden lake dock watching a vibrant mountain sunset",
  },
  {
    id: 2,
    title: "Enchanted Twilight Castle",
    image: "/images/portfolio-project-2.jpg",
    alt: "3D animated fairytale castle glowing warmly at twilight surrounded by enchanted forest trees, floating lanterns, and vibrant flowers",
  },
  {
    id: 3,
    title: "Lakeside Companions",
    image: "/images/portfolio-project-3.jpg",
    alt: "3D animated girl hugging her golden dog beside a sunlit wooden cabin porch overlooking a calm lake and distant village at sunset",
  },
  {
    id: 4,
    title: "Starlight Forest Cottage",
    image: "/images/portfolio-project-4.jpg",
    alt: "Three 3D animated children sitting on a glowing green meadow looking toward a warm illuminated cottage nestled among night forest trees",
  },
];

export function SelectProject() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = PROJECTS[activeIndex];
  const sideProjects = PROJECTS.filter((_, index) => index !== activeIndex);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const formattedCurrent = String(activeIndex + 1).padStart(2, "0");
  const formattedTotal = String(PROJECTS.length).padStart(2, "0");

  return (
    <section
      id="work"
      aria-labelledby="select-project-heading"
      className="relative isolate w-full overflow-hidden bg-white py-12 lg:min-h-[52vw] lg:py-[3.2vw]"
    >
      <div className="w-full px-6 sm:px-10 lg:px-[2.65vw]">
        {/* Top-Left Section Header: 02 Badge + SELECT A PROJECT */}
        <div className="flex items-center gap-4 lg:gap-[3.3vw]">
          <span className="grid h-[50px] w-[56px] shrink-0 place-items-center rounded-[11px] border border-[#e3e5eb] bg-[#f5f6f8] font-sans text-[20px] font-extrabold tracking-[-0.03em] text-[#0c0c10] shadow-[0_2px_6px_rgb(15_23_42/0.04)] lg:h-[5.3vw] lg:w-[6.05vw] lg:rounded-[0.95vw] lg:text-[2.15vw]">
            02
          </span>
          <div>
            <h2
              id="select-project-heading"
              className="font-sans text-[19px] font-extrabold uppercase leading-[1.1] tracking-[0.03em] text-[#0c0c10] lg:text-[2.05vw]"
            >
              SELECT A PROJECT
            </h2>
            <p className="mt-1 font-sans text-[14px] font-normal leading-[1.25] tracking-[-0.01em] text-[#727580] lg:mt-[0.3vw] lg:text-[1.45vw]">
              Click to explore a featured animation.
            </p>
          </div>
        </div>

        {/* Showcase Row: Left 3D-Tilted Featured Player + Right 3 Stacked Thumbnails */}
        <div className="mt-7 grid grid-cols-1 items-center gap-6 lg:mt-[1.1vw] lg:grid-cols-[1fr_21.8vw] lg:gap-[2.1vw]">
          {/* Left Column: Featured Animation Screen with subtle perspective tilt & orange glow */}
          <div className="relative w-full lg:py-[0.8vw] lg:pl-[0.4vw]">
            <div
              onClick={handleNext}
              role="button"
              tabIndex={0}
              aria-label={`Featured animation: ${activeProject.title}. Click to view next project.`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleNext();
                }
              }}
              className="group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[16px] border-[2.2px] border-[#f48836] bg-[#12131a] shadow-[0_14px_38px_-6px_rgb(255_104_26/0.34),0_0_0_1px_rgb(255_140_66/0.2)] transition-all duration-300 lg:aspect-auto lg:h-[36.2vw] lg:rounded-[1.25vw] lg:[transform:perspective(1500px)_rotateY(6.5deg)_skewY(-1.35deg)] lg:hover:[transform:perspective(1500px)_rotateY(5deg)_skewY(-1deg)_scale(1.005)]"
            >
              <Image
                key={activeProject.image}
                src={activeProject.image}
                alt={activeProject.alt}
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 72vw, 95vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Subtle warm vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid size-[68px] place-items-center rounded-full border-[3.5px] border-white bg-black/45 text-white shadow-[0_12px_34px_rgb(0_0_0/0.45)] backdrop-blur-[2px] transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#ff4b16]/85 lg:size-[8.4vw] lg:border-[0.34vw]">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-8 translate-x-[2px] fill-current lg:size-[3.6vw]"
                    aria-hidden="true"
                  >
                    <path d="M6.8 4.4v15.2a.9.9 0 0 0 1.38.76l12.2-7.6a.9.9 0 0 0 0-1.52L8.18 3.64a.9.9 0 0 0-1.38.76Z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Stacked Interactive Project Thumbnails */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:flex lg:flex-col lg:gap-[1.15vw]">
            {sideProjects.map((project) => {
              const originalIndex = PROJECTS.findIndex((p) => p.id === project.id);
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveIndex(originalIndex)}
                  aria-label={`Select project: ${project.title}`}
                  className="group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[12px] border-[2px] border-[#ee964b] bg-[#12131a] text-left shadow-[0_10px_24px_-6px_rgb(244_124_42/0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff5516] hover:shadow-[0_14px_28px_-6px_rgb(255_85_22/0.42)] lg:aspect-auto lg:h-[11.35vw] lg:rounded-[0.95vw] lg:[transform:perspective(1100px)_rotateY(-5deg)_skewY(-0.9deg)]"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    quality={85}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 32vw, 92vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/10" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Pagination Controls: Prev Arrow + 01 / 04 + Next Arrow */}
        <div className="mt-8 flex items-center justify-center gap-6 lg:mt-[1.65vw] lg:gap-[3.3vw]">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous project"
            className="grid size-10 cursor-pointer place-items-center rounded-full bg-[linear-gradient(180deg,#ff6c15_0%,#ee3815_100%)] text-white shadow-[0_6px_16px_-3px_rgb(242_72_21/0.5)] transition-transform duration-150 hover:scale-105 active:scale-95 lg:size-[3.5vw]"
          >
            <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.45vw]" fill="none" aria-hidden="true">
              <path
                d="M14.5 10H5.5M9.5 5.5 5 10l4.5 4.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            aria-live="polite"
            className="flex items-baseline font-sans text-[18px] tracking-[-0.02em] lg:text-[1.85vw]"
          >
            <span className="font-semibold text-[#111217]">{formattedCurrent}</span>
            <span className="mx-2.5 font-normal text-[#9da1ac] lg:mx-[0.85vw]">/</span>
            <span className="font-medium text-[#8a8e99]">{formattedTotal}</span>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next project"
            className="grid size-10 cursor-pointer place-items-center rounded-full bg-[linear-gradient(180deg,#ff6c15_0%,#ee3815_100%)] text-white shadow-[0_6px_16px_-3px_rgb(242_72_21/0.5)] transition-transform duration-150 hover:scale-105 active:scale-95 lg:size-[3.5vw]"
          >
            <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.45vw]" fill="none" aria-hidden="true">
              <path
                d="M5.5 10h9M10.5 5.5 15 10l-4.5 4.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
