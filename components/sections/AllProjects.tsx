"use client";

import { useState } from "react";
import Image from "next/image";

const CATEGORIES = [
  "All",
  "2D Animation",
  "3D Animation",
  "Motion Graphics",
  "Whiteboard",
  "Hybrid",
  "Cel Animation",
] as const;

type Category = (typeof CATEGORIES)[number];

interface ProjectCardItem {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  row: "top" | "bottom";
  image: string;
  alt: string;
}

const ALL_PROJECTS: ProjectCardItem[] = [
  {
    id: 1,
    title: "Autumn Friends",
    category: "2D Animation",
    row: "top",
    image: "/images/portfolio-all-1.jpg",
    alt: "Smiling animated girl in red sweater hugging her golden puppy in sunlit autumn leaves",
  },
  {
    id: 2,
    title: "Cyber Bot Odyssey",
    category: "3D Animation",
    row: "top",
    image: "/images/portfolio-all-2.jpg",
    alt: "Glossy white 3D robot character with glowing blue eyes in a futuristic neon city",
  },
  {
    id: 3,
    title: "Smart Business Explainer",
    category: "Whiteboard",
    row: "top",
    image: "/images/portfolio-all-3.jpg",
    alt: "Hand-drawn black line-art whiteboard animation of a presenter at a laptop with lightbulb and video screen",
  },
  {
    id: 4,
    title: "Apex Velocity",
    category: "Hybrid",
    row: "top",
    image: "/images/portfolio-all-4.jpg",
    alt: "Sleek metallic red sports car speeding down a neon-lit city street at sunset",
  },
  {
    id: 5,
    title: "Dragon of the Citadel",
    category: "Hybrid",
    row: "top",
    image: "/images/portfolio-all-5.jpg",
    alt: "Majestic red dragon roaring before a fairytale castle at golden sunset",
  },
  {
    id: 6,
    title: "The Enchanted Manor",
    category: "3D Animation",
    row: "bottom",
    image: "/images/portfolio-all-6.jpg",
    alt: "Young adventurer with backpack walking along a flower-lined path toward a glowing twilight castle",
  },
  {
    id: 7,
    title: "Meadow Runner",
    category: "2D Animation",
    row: "bottom",
    image: "/images/portfolio-all-7.jpg",
    alt: "Joyful animated boy in green jacket running through a sunlit meadow of orange wildflowers and butterflies",
  },
  {
    id: 8,
    title: "Pulse Analytics UI",
    category: "Motion Graphics",
    row: "bottom",
    image: "/images/portfolio-all-8.jpg",
    alt: "Futuristic dark glass UI analytics dashboard with glowing neon bar charts, donut chart, and play icons",
  },
  {
    id: 9,
    title: "Alpine Horizon",
    category: "Cel Animation",
    row: "bottom",
    image: "/images/portfolio-all-9.jpg",
    alt: "Anime cel-shaded alpine lake reflecting snow-capped mountains, pine forests, and a distant castle town",
  },
];

function GridNineIcon() {
  return (
    <svg viewBox="0 0 18 18" className="size-4 lg:size-[1.45vw]" fill="currentColor" aria-hidden="true">
      <rect x="2" y="2" width="3.5" height="3.5" rx="0.8" />
      <rect x="7.25" y="2" width="3.5" height="3.5" rx="0.8" />
      <rect x="12.5" y="2" width="3.5" height="3.5" rx="0.8" />
      <rect x="2" y="7.25" width="3.5" height="3.5" rx="0.8" />
      <rect x="7.25" y="7.25" width="3.5" height="3.5" rx="0.8" />
      <rect x="12.5" y="7.25" width="3.5" height="3.5" rx="0.8" />
      <rect x="2" y="12.5" width="3.5" height="3.5" rx="0.8" />
      <rect x="7.25" y="12.5" width="3.5" height="3.5" rx="0.8" />
      <rect x="12.5" y="12.5" width="3.5" height="3.5" rx="0.8" />
    </svg>
  );
}

export function AllProjects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"compact" | "standard">("standard");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredProjects = ALL_PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      normalizedQuery === "" ||
      project.title.toLowerCase().includes(normalizedQuery) ||
      project.category.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });

  const isDefaultAllView = activeCategory === "All" && normalizedQuery === "" && viewMode === "standard";
  const topRowProjects = ALL_PROJECTS.filter((p) => p.row === "top");
  const bottomRowProjects = ALL_PROJECTS.filter((p) => p.row === "bottom");

  return (
    <section
      id="all-projects"
      aria-labelledby="all-projects-heading"
      className="w-full bg-white px-6 py-6 sm:px-10 lg:px-[0.98vw] lg:py-[1.5vw]"
    >
      {/* Framed Rounded Card Container */}
      <div className="relative isolate w-full overflow-hidden rounded-[18px] border-[1.5px] border-[#ee8d43] bg-white px-5 pt-6 pb-6 shadow-[0_14px_40px_-12px_rgb(15_23_42/0.07)] sm:px-8 lg:rounded-[1.25vw] lg:px-[1.18vw] lg:pt-[1.85vw] lg:pb-[1.85vw]">
        {/* Row 1: 08 Badge + ALL PROJECTS Header on Left, Search Input on Right */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 lg:gap-[2.9vw]">
            <span className="grid h-[54px] w-[62px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#f3271c_0%,#ff5516_55%,#f68d14_100%)] font-sans text-[23px] font-extrabold tracking-[-0.03em] text-white shadow-[0_8px_20px_-6px_rgb(243_39_28/0.45)] lg:ml-[0.5vw] lg:h-[6.05vw] lg:w-[6.05vw] lg:rounded-[1.15vw] lg:text-[2.45vw]">
              08
            </span>
            <div>
              <h2
                id="all-projects-heading"
                className="font-sans text-[20px] font-extrabold uppercase leading-[1.1] tracking-[0.02em] text-[#0c0c10] lg:text-[2.3vw]"
              >
                ALL PROJECTS
              </h2>
              <p className="mt-1 font-sans text-[14px] font-normal leading-[1.25] tracking-[-0.01em] text-[#6d7079] lg:mt-[0.3vw] lg:text-[1.48vw]">
                Browse our complete collection.
              </p>
            </div>
          </div>

          {/* Search Pill Input */}
          <label className="relative flex h-[46px] w-full max-w-[360px] items-center gap-3 rounded-full border-[1.4px] border-[#eda34c] bg-white px-4 shadow-[0_2px_8px_rgb(237_163_76/0.08)] focus-within:border-[#ff4b18] lg:mr-[0.4vw] lg:h-[5.47vw] lg:w-[32.9vw] lg:max-w-none lg:gap-[1.5vw] lg:px-[1.55vw]">
            <svg
              viewBox="0 0 24 24"
              className="size-5 shrink-0 text-[#ef6c18] lg:size-[2.05vw]"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="6.8" stroke="currentColor" strokeWidth="2.3" />
              <path d="m16.2 16.2 4.3 4.3" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              aria-label="Search projects"
              className="w-full bg-transparent font-sans text-[14px] font-normal text-[#14151a] placeholder:text-[#7c808b] focus:outline-none lg:text-[1.45vw]"
            />
          </label>
        </div>

        {/* Row 2: Category Filter Pills + Grid View Toggle Buttons */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 lg:mt-[1.46vw] lg:px-[0.5vw]">
          <div
            role="tablist"
            aria-label="Project categories"
            className="flex flex-wrap items-center gap-2 lg:gap-[0.78vw]"
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
                      ? "inline-flex h-[38px] cursor-pointer items-center justify-center rounded-[10px] bg-[linear-gradient(92deg,#ff2c19_0%,#ff7e14_100%)] px-5 font-sans text-[13px] font-bold text-white shadow-[0_6px_16px_-4px_rgb(255_65_22/0.45)] transition-transform lg:h-[4.1vw] lg:min-w-[9.1vw] lg:rounded-[0.85vw] lg:px-[1.8vw] lg:text-[1.18vw]"
                      : "inline-flex h-[38px] cursor-pointer items-center justify-center rounded-[10px] border border-[#e2e4ea] bg-[#f8f9fb] px-4 font-sans text-[13px] font-semibold text-[#14151a] transition-colors hover:border-[#ee8d43] hover:bg-white lg:h-[4.1vw] lg:rounded-[0.85vw] lg:px-[1.85vw] lg:text-[1.18vw]"
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Right Grid View Toggle Buttons */}
          <div className="flex items-center gap-2 lg:gap-[0.68vw]">
            <button
              type="button"
              onClick={() => setViewMode("compact")}
              aria-label="Compact grid view"
              aria-pressed={viewMode === "compact"}
              className={
                viewMode === "compact"
                  ? "grid size-[38px] cursor-pointer place-items-center rounded-[9px] bg-[linear-gradient(135deg,#ff3818_0%,#ff7c14_100%)] text-white shadow-[0_4px_12px_rgb(255_75_24/0.35)] lg:size-[3.6vw] lg:rounded-[0.75vw]"
                  : "grid size-[38px] cursor-pointer place-items-center rounded-[9px] border border-[#e2e4ea] bg-[#f8f9fb] text-[#4b4e57] transition-colors hover:border-[#ee8d43] lg:size-[3.6vw] lg:rounded-[0.75vw]"
              }
            >
              <GridNineIcon />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("standard")}
              aria-label="Standard showcase grid view"
              aria-pressed={viewMode === "standard"}
              className={
                viewMode === "standard"
                  ? "grid size-[38px] cursor-pointer place-items-center rounded-[9px] bg-[linear-gradient(135deg,#ff3818_0%,#ff7c14_100%)] text-white shadow-[0_4px_12px_rgb(255_75_24/0.35)] lg:size-[3.6vw] lg:rounded-[0.75vw]"
                  : "grid size-[38px] cursor-pointer place-items-center rounded-[9px] border border-[#e2e4ea] bg-[#f8f9fb] text-[#4b4e57] transition-colors hover:border-[#ee8d43] lg:size-[3.6vw] lg:rounded-[0.75vw]"
              }
            >
              <GridNineIcon />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        {isDefaultAllView ? (
          <div className="mt-5 lg:mt-[1.46vw] lg:px-[0.5vw]">
            {/* Row 1: 5 Cards */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-[1.05vw]">
              {topRowProjects.map((project) => (
                <article
                  key={project.id}
                  className="group relative aspect-[190/145] w-full cursor-pointer overflow-hidden rounded-[11px] border-[1.4px] border-[#ee964b] bg-[#f6f7f9] shadow-[0_8px_20px_-6px_rgb(15_23_42/0.16)] transition-all duration-200 hover:-translate-y-1 hover:border-[#ff4b18] hover:shadow-[0_14px_28px_-6px_rgb(255_75_24/0.28)] lg:aspect-auto lg:h-[14.25vw] lg:rounded-[0.85vw]"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    quality={85}
                    sizes="(min-width: 1024px) 19vw, (min-width: 768px) 32vw, (min-width: 640px) 48vw, 95vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </article>
              ))}
            </div>

            {/* Row 2: 4 Wide Cards */}
            <div className="mt-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:mt-[1.15vw] lg:grid-cols-4 lg:gap-[1.05vw]">
              {bottomRowProjects.map((project) => (
                <article
                  key={project.id}
                  className="group relative aspect-[235/155] w-full cursor-pointer overflow-hidden rounded-[11px] border-[1.4px] border-[#ee964b] bg-[#12131a] shadow-[0_8px_20px_-6px_rgb(15_23_42/0.2)] transition-all duration-200 hover:-translate-y-1 hover:border-[#ff4b18] hover:shadow-[0_14px_28px_-6px_rgb(255_75_24/0.28)] lg:aspect-auto lg:h-[15.2vw] lg:rounded-[0.85vw]"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    quality={85}
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 95vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-[1.46vw] lg:grid-cols-4 lg:gap-[1.05vw] lg:px-[0.5vw]">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-[11px] border-[1.4px] border-[#ee964b] bg-[#12131a] shadow-[0_8px_20px_-6px_rgb(15_23_42/0.18)] transition-all duration-200 hover:-translate-y-1 hover:border-[#ff4b18] lg:rounded-[0.85vw]"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 95vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
