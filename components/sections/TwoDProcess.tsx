"use client";

import Image from "next/image";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

const PROCESS_STEPS = [
  {
    number: "01",
    titleLines: ["IDEATION"],
    description: "Discover your story, goals, audience, and creative vision.",
    image: "/images/two-d-process-1.jpg",
    alt: "Hand-drawn pencil portrait sketch of the smiling young adventurer girl on cream construction-grid paper",
  },
  {
    number: "02",
    titleLines: ["DEVELOPMENT"],
    description: "Create characters, storyboards, and a visual direction.",
    image: "/images/two-d-process-2.jpg",
    alt: "2D character development expression sheet showing graphite sketches above vibrant full-color character busts",
  },
  {
    number: "03",
    titleLines: ["ANIMATION", "PRODUCTION"],
    description: "Bring every character and scene into motion.",
    image: "/images/two-d-process-3.jpg",
    alt: "Animated scene of the young adventurer girl and her orange fox riding in a wooden rowboat with a play button overlay",
  },
  {
    number: "04",
    titleLines: ["FINALIZATION"],
    description: "Polish movement, sound, and deliver the final film.",
    image: "/images/two-d-process-4.jpg",
    alt: "Final polished 2D animated scene of the wooden boat bow facing a glowing golden sunset over a fairytale coastal town",
  },
] as const;

export function TwoDProcess() {
  return (
    <section
      id="two-d-process"
      aria-labelledby="two-d-process-heading"
      className="relative isolate w-full overflow-hidden bg-white py-8 lg:min-h-[56.25vw] lg:py-0"
    >
      {/* Top-Left Header: 07 Badge + OUR PROCESS + Subtitle */}
      <Reveal className="w-full px-6 pt-2 sm:px-10 lg:px-[2.45vw] lg:pt-[2.2vw]" y={18}>
        <div className="flex items-center gap-4 lg:gap-[2.1vw]">
          <span className="grid h-[50px] w-[52px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#ff171d_0%,#ff4b16_55%,#ff7610_100%)] font-sans text-[21px] font-extrabold tracking-[-0.02em] text-white shadow-[0_8px_20px_-4px_rgb(255_55_22/0.45)] lg:h-[6.35vw] lg:w-[6.55vw] lg:rounded-[1.15vw] lg:text-[2.55vw]">
            07
          </span>
          <div>
            <h2
              id="two-d-process-heading"
              className="font-sans text-[clamp(1.25rem,2.45vw,2.55rem)] font-black uppercase leading-[1.08] tracking-[-0.02em] text-[#090a0d]"
            >
              OUR PROCESS
            </h2>
            <p className="mt-1 font-sans text-[13.5px] font-normal leading-[1.25] tracking-[-0.01em] text-[#747882] lg:mt-[0.3vw] lg:text-[1.66vw]">
              A smooth, collaborative journey from your first idea to the final frame.
            </p>
          </div>
        </div>
      </Reveal>

      {/* 4 Process Cards Grid */}
      <div className="mt-6 w-full px-6 sm:px-10 lg:mt-[1.6vw] lg:px-[2.15vw]">
        <StaggerGroup
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[1.08vw]"
          stagger={0.11}
        >
          {PROCESS_STEPS.map((step, index) => (
            <StaggerItem key={step.number} y={24}>
              <article className="group relative flex h-full flex-col rounded-[14px] border border-[#eceef3] bg-[#f9f9fb] p-3 pb-6 shadow-[0_4px_18px_-8px_rgb(15_23_42/0.06)] transition-transform duration-300 hover:-translate-y-1 lg:min-h-[39.4vw] lg:rounded-[1.15vw] lg:p-[0.82vw] lg:pb-[1.8vw]">
                {/* Rounded Square Stage Thumbnail */}
                <div className="relative aspect-[218/206] w-full overflow-hidden rounded-[10px] bg-white shadow-[0_2px_10px_rgb(15_23_42/0.06)] lg:aspect-auto lg:h-[20.1vw] lg:rounded-[0.85vw]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Orange Connector Arrow to Next Card (Desktop) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-[21.1vw] -right-[0.54vw] z-20 hidden translate-x-1/2 text-[#ff6214] lg:block"
                  >
                    <svg
                      viewBox="0 0 24 20"
                      className="h-[1.85vw] w-[2.25vw]"
                      fill="none"
                    >
                      <path
                        d="M2.5 10h17.5M13.5 4l6.5 6-6.5 6"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}

                {/* Step Content */}
                <div className="mt-4 px-1.5 lg:mt-[1.45vw] lg:px-[0.55vw]">
                  {/* Circular Step Number Badge */}
                  <span className="grid size-10 place-items-center rounded-full bg-[linear-gradient(135deg,#ff171d_0%,#ff4b16_55%,#ff7610_100%)] font-sans text-[15px] font-extrabold tracking-[-0.02em] text-white shadow-[0_6px_14px_-4px_rgb(255_55_22/0.45)] transition-transform duration-300 group-hover:scale-105 lg:size-[4.1vw] lg:text-[1.58vw]">
                    {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="mt-3 font-sans text-[18px] font-black uppercase leading-[1.06] tracking-[-0.02em] text-[#090a0d] lg:mt-[1.15vw] lg:text-[1.76vw]">
                    {step.titleLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2 font-sans text-[13.5px] font-normal leading-[1.36] tracking-[-0.01em] text-[#747882] lg:mt-[0.75vw] lg:text-[1.32vw]">
                    {step.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Bottom-Left Gradient Footer Tagline */}
        <Reveal delay={0.2} y={12}>
          <p className="mt-5 font-sans text-[12px] font-extrabold uppercase tracking-[0.015em] bg-[linear-gradient(90deg,#e52020_0%,#ff5516_55%,#e57c16_100%)] bg-clip-text text-transparent lg:mt-[1.5vw] lg:pl-[0.4vw] lg:text-[1.28vw]">
            FROM FIRST THOUGHT TO FINAL FRAME
          </p>
        </Reveal>
      </div>
    </section>
  );
}
