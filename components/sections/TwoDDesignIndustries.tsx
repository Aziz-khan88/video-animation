"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  EASE_OUT_EXPO,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

interface IndustryShowcaseItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
  objectPosition?: string;
}

const KEY_INDUSTRIES: readonly IndustryShowcaseItem[] = [
  {
    id: "mechanical",
    title: "Mechanical",
    caption: "Explain complex machines with clear, engaging animation.",
    image: "/images/two-d-industry-card-mechanical.jpg",
    alt: "Detailed 2D cutaway of a 4-cylinder mechanical engine showing pistons, valves, crankshaft, and glowing combustion",
    objectPosition: "center",
  },
  {
    id: "automotive",
    title: "Automotive",
    caption: "Showcase EV architecture, autonomous systems, and connected vehicles.",
    image: "/images/two-d-industry-card-automotive.jpg",
    alt: "2D illustration of a milky-white electric car with glowing charging station and red highway light trails at dusk",
    objectPosition: "center",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    caption: "Simplify clinical research, medical devices, and patient education.",
    image: "/images/two-d-industry-card-healthcare.jpg",
    alt: "2D illustration of a female doctor looking through a laboratory microscope with ECG and X-ray monitors behind her",
    objectPosition: "38% center",
  },
  {
    id: "product-animation",
    title: "Product\nAnimation",
    caption: "Reveal internal components, build quality, and standout features.",
    image: "/images/two-d-industry-card-product.jpg",
    alt: "2D exploded-view technical illustration of wireless headphones showing speaker driver and glowing green circuit board",
    objectPosition: "center",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    caption: "Bring residential developments and commercial properties to life.",
    image: "/images/two-d-industry-card-realestate.jpg",
    alt: "2D architectural illustration of a luxury modern glass home glowing warmly at dusk with landscaped gardens",
    objectPosition: "center",
  },
  {
    id: "fashion",
    title: "Fashion",
    caption: "Elevate luxury apparel, lookbooks, and retail brand storytelling.",
    image: "/images/two-d-industry-card-fashion.jpg",
    alt: "2D fashion illustration of a glamorous woman in a flowing crimson gown with gold jewelry",
    objectPosition: "62% center",
  },
  {
    id: "industrial",
    title: "Industrial",
    caption: "Demonstrate factory automation, robotics, and supply-chain workflows.",
    image: "/images/two-d-industry-card-industrial.jpg",
    alt: "2D industrial illustration of an orange robotic arm assembling cardboard boxes on an automated conveyor line",
    objectPosition: "28% center",
  },
  {
    id: "aerospace",
    title: "Aerospace",
    caption: "Visualize aviation propulsion, avionics, and flight operations.",
    image: "/images/two-d-industry-card-aerospace.jpg",
    alt: "2D aerospace illustration of a commercial passenger airliner soaring above sunset clouds",
    objectPosition: "60% center",
  },
] as const;

export function TwoDDesignIndustries() {
  const [activeId, setActiveId] = useState<string>("mechanical");

  return (
    <section
      id="industries"
      aria-labelledby="two-d-design-industries-heading"
      className="relative isolate w-full overflow-hidden bg-[#fbfaf7] py-12 sm:py-16 lg:py-14"
    >
      <div className="mx-auto w-[96%]">
        {/* Section Heading */}
        <Reveal className="text-center">
          <h2
            id="two-d-design-industries-heading"
            className="font-sans text-[30px] font-extrabold tracking-[-0.03em] text-[#0c0d12] sm:text-[42px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px]"
          >
            2D Animation Services for{" "}
            <span className="text-[#e51a20]">8 Key</span>{" "}
            <span className="bg-[linear-gradient(90deg,#f04e18_0%,#f58c1f_100%)] bg-clip-text text-transparent">
              Industries
            </span>
          </h2>
        </Reveal>

        {/* Desktop 8-Column Interactive Accordion Strip */}
        <div className="mt-7 hidden h-[420px] w-full items-stretch gap-2 lg:mt-8 lg:flex xl:h-[450px] xl:gap-2.5">
          {KEY_INDUSTRIES.map((industry, idx) => {
            const isExpanded = industry.id === activeId;

            return (
              <motion.div
                key={industry.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => setActiveId(industry.id)}
                onMouseEnter={() => setActiveId(industry.id)}
                transition={{
                  layout: { duration: 0.55, ease: EASE_OUT_EXPO },
                  opacity: { duration: 0.55, delay: idx * 0.06, ease: EASE_OUT_EXPO },
                  y: { duration: 0.55, delay: idx * 0.06, ease: EASE_OUT_EXPO },
                }}
                style={{ flex: isExpanded ? 3.35 : 1 }}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-label={`${industry.title.replace("\n", " ")} industry showcase`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveId(industry.id);
                  }
                }}
                className="group relative h-full cursor-pointer overflow-hidden rounded-[16px] bg-[#141722] shadow-[0_14px_32px_-10px_rgb(12_15_28/0.32)] select-none focus:ring-2 focus:ring-[#ff5c16] focus:outline-none"
              >
                {/* Background Illustration */}
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  quality={95}
                  unoptimized
                  sizes={isExpanded ? "34vw" : "12vw"}
                  style={{ objectPosition: industry.objectPosition ?? "center" }}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Dark Readability Gradient for Title & Accent Bar */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[34%] bg-gradient-to-b from-[#0b0e18]/90 via-[#0b0e18]/45 to-transparent"
                />

                {/* Bottom Dark Readability Gradient + Diagonal Orange Corner Accents when Expanded */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 bottom-0 transition-opacity duration-500 ${
                    isExpanded
                      ? "h-[36%] bg-gradient-to-t from-[#190c0c]/95 via-[#190c0c]/55 to-transparent opacity-100"
                      : "h-[24%] bg-gradient-to-t from-[#0b0e18]/75 to-transparent opacity-80"
                  }`}
                />

                {/* Top-Right & Bottom-Left Red-Orange Diagonal Ribbon Accents on Expanded Card */}
                {isExpanded && (
                  <>
                    <motion.div
                      aria-hidden="true"
                      initial={{ opacity: 0, x: 18, y: -18 }}
                      animate={{ opacity: 0.9, x: 0, y: 0 }}
                      transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                      className="pointer-events-none absolute -top-6 -right-10 h-20 w-44 rotate-[26deg] bg-[linear-gradient(90deg,#d81920_0%,#ff7b14_100%)]"
                    />
                    <motion.div
                      aria-hidden="true"
                      initial={{ opacity: 0, x: -18, y: 18 }}
                      animate={{ opacity: 0.85, x: 0, y: 0 }}
                      transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                      className="pointer-events-none absolute -bottom-8 -left-10 h-16 w-40 rotate-[22deg] bg-[linear-gradient(90deg,#d81920_0%,#ff7b14_100%)]"
                    />
                  </>
                )}

                {/* Top Left Header: Category Title + Red-to-Orange Pill Accent Bar */}
                <div
                  className={`relative z-10 flex flex-col items-start transition-all duration-300 ${
                    isExpanded ? "p-5 xl:p-6" : "p-3 xl:p-3.5"
                  }`}
                >
                  <h3
                    className={`font-sans font-extrabold tracking-[-0.02em] whitespace-pre-line text-white transition-all duration-300 ${
                      isExpanded
                        ? "text-[20px] leading-[1.12] xl:text-[23px]"
                        : "text-[12.5px] leading-[1.15] xl:text-[13.5px]"
                    }`}
                  >
                    {industry.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className={`mt-1.5 block rounded-full bg-[linear-gradient(90deg,#e51820_0%,#ff8b12_100%)] transition-all duration-300 ${
                      isExpanded ? "h-[4px] w-14" : "h-[3px] w-10"
                    }`}
                  />
                </div>

                {/* Bottom Caption on Expanded Card */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.12, ease: EASE_OUT_EXPO }}
                    className="absolute inset-x-4 bottom-4 z-10 text-center xl:inset-x-6 xl:bottom-5"
                  >
                    <p className="mx-auto max-w-[300px] font-sans text-[14px] font-bold leading-[1.35] tracking-[-0.01em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)] xl:text-[15px]">
                      {industry.caption}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / Tablet Responsive Grid */}
        <StaggerGroup
          className="mt-7 grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:hidden"
          stagger={0.07}
          delayChildren={0.04}
        >
          {KEY_INDUSTRIES.map((industry) => {
            const isSelected = industry.id === activeId;
            return (
              <StaggerItem
                key={industry.id}
                className={isSelected ? "col-span-2 sm:col-span-2" : ""}
              >
                <button
                  type="button"
                  onClick={() => setActiveId(industry.id)}
                  className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl bg-[#141722] text-left shadow-md transition-all ${
                    isSelected
                      ? "aspect-[16/11] ring-2 ring-[#ff5c16]"
                      : "aspect-[3/4.2]"
                  }`}
                >
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    fill
                    unoptimized
                    sizes="(min-width: 640px) 45vw, 90vw"
                    style={{ objectPosition: industry.objectPosition ?? "center" }}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/80" />
                  <div className="relative z-10 p-3.5">
                    <h3 className="font-sans text-sm font-extrabold whitespace-pre-line text-white sm:text-base">
                      {industry.title}
                    </h3>
                    <span className="mt-1.5 block h-1 w-9 rounded-full bg-[linear-gradient(90deg,#e51820_0%,#ff8b12_100%)]" />
                  </div>
                  {isSelected && (
                    <div className="absolute inset-x-3 bottom-3 z-10">
                      <p className="font-sans text-xs font-semibold leading-snug text-white">
                        {industry.caption}
                      </p>
                    </div>
                  )}
                </button>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
