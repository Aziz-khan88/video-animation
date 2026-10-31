"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

export function TwoDReadyToCreate() {
  return (
    <section
      id="ready-to-create"
      aria-labelledby="ready-to-create-heading"
      className="relative isolate w-full overflow-hidden bg-white py-8 lg:h-[56.25vw] lg:py-0"
    >
      {/* Subtle Warm Ivory/Peach Curved Background Accents Behind Center-Left */}
      <svg
        viewBox="0 0 1024 576"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      >
        <path
          d="M280 576 C335 450 355 310 305 180 C355 95 395 65 445 85 L445 576 Z"
          fill="#fdf6f1"
          fillOpacity="0.85"
        />
        <path
          d="M270 576 C295 430 330 340 410 315 L410 576 Z"
          fill="#fcedde"
          fillOpacity="0.45"
        />
      </svg>

      {/* Main 2-Column Container calibrated to the 1024x576 reference */}
      <div className="mx-auto flex w-full flex-col justify-between gap-8 px-6 sm:px-10 lg:h-[56.25vw] lg:flex-row lg:items-stretch lg:gap-[2.2vw] lg:px-[2.25vw] lg:py-[2.25vw]">
        {/* Left Column: 12 Badge + Heading + Copy + Start Your Project CTA */}
        <StaggerGroup
          className="flex flex-col justify-between py-2 lg:w-[37.5vw] lg:py-[0.4vw] lg:pl-[0.2vw]"
          stagger={0.1}
          delayChildren={0.05}
        >
          {/* Top-Left: 12 Badge + READY TO CREATE? */}
          <StaggerItem>
            <div className="flex items-center gap-3.5 lg:gap-[1.35vw]">
              <span className="grid h-[50px] w-[52px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#ee1921_0%,#ff4d17_55%,#ff7610_100%)] font-sans text-[21px] font-extrabold tracking-[-0.02em] text-white shadow-[0_8px_20px_-4px_rgb(255_55_22/0.45)] lg:h-[5.95vw] lg:w-[5.95vw] lg:rounded-[1.1vw] lg:text-[2.4vw]">
                12
              </span>
              <p className="font-sans text-[15px] font-black uppercase leading-none tracking-[-0.01em] text-[#090a0d] lg:text-[1.72vw]">
                READY TO CREATE?
              </p>
            </div>
          </StaggerItem>

          {/* Center: 3-Line Uppercase Display Heading + 2-Line Description */}
          <StaggerItem>
            <div className="my-8 lg:my-0">
              <h2
                id="ready-to-create-heading"
                className="font-sans text-[clamp(2rem,3.65vw,3.8rem)] font-black uppercase leading-[1.12] tracking-[-0.025em] text-[#090a0d]"
              >
                <span className="block whitespace-nowrap">LET&apos;S BRING</span>
                <span className="mt-[0.06vw] block whitespace-nowrap bg-[linear-gradient(90deg,#e91620_0%,#ff4a16_52%,#f47912_100%)] bg-clip-text text-transparent">
                  YOUR 2D STORY
                </span>
                <span className="mt-[0.06vw] block whitespace-nowrap">TO LIFE.</span>
              </h2>

              <p className="mt-5 font-sans text-[15px] font-normal leading-[1.42] tracking-[-0.01em] text-[#787c86] lg:mt-[2.2vw] lg:text-[1.48vw]">
                <span className="block">Ideas, characters and worlds -</span>
                <span className="block">all it takes is a conversation.</span>
              </p>
            </div>
          </StaggerItem>

          {/* Bottom-Left: Start Your Project > CTA Button */}
          <StaggerItem>
            <div className="lg:pb-[2.5vw]">
              <Link
                href="/#contact"
                className="group inline-flex h-[52px] w-full max-w-[300px] items-center justify-center gap-3 rounded-[12px] bg-[linear-gradient(90deg,#e61722_0%,#ff4417_52%,#f57811_100%)] px-7 font-sans text-[16px] font-bold tracking-[-0.01em] text-white shadow-[0_12px_28px_-6px_rgb(255_55_22/0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-6px_rgb(255_55_22/0.55)] lg:h-[5.65vw] lg:w-[29.4vw] lg:max-w-none lg:gap-[1.1vw] lg:rounded-[1.05vw] lg:px-0 lg:text-[1.68vw]"
              >
                <span>Start Your Project</span>
                <svg
                  viewBox="0 0 16 16"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1 lg:size-[1.4vw]"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="m5.5 3.8 4.5 4.2-4.5 4.2"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </StaggerItem>
        </StaggerGroup>

        {/* Right Column: Large Rounded Digital Tablet Artwork Card */}
        <Reveal
          className="group relative aspect-[588/519] w-full overflow-hidden rounded-[16px] bg-[#161922] shadow-[0_16px_38px_-10px_rgb(15_23_42/0.22)] lg:aspect-auto lg:h-full lg:flex-1 lg:rounded-[1.35vw]"
          y={20}
          scale={0.97}
          delay={0.12}
        >
          <Image
            src="/images/two-d-ready-to-create.jpg"
            alt="Artist's hand holding a digital stylus pen bringing the young adventurer girl and her smiling orange fox companion to life on a drawing monitor in front of a fairytale castle town"
            fill
            quality={92}
            sizes="(min-width: 1024px) 58vw, 94vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </Reveal>
      </div>
    </section>
  );
}
