import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  ParallaxBackground,
} from "@/components/motion/MotionPrimitives";

function TrophyIcon() {
  return (
    <svg viewBox="0 0 36 36" className="size-[34px] shrink-0 lg:size-[3.3vw]" fill="none" aria-hidden="true">
      <path
        d="M11 6.5h14v7.5a7 7 0 0 1-14 0V6.5Z"
        stroke="#ef4b16"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M11 9.5H6.5v2a4.5 4.5 0 0 0 4.5 4.5M25 9.5h4.5v2A4.5 4.5 0 0 1 25 16"
        stroke="#ef4b16"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 21v5.5M12.5 29.5h11l-1.5-3h-8l-1.5 3Z"
        stroke="#ef4b16"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 36 36" className="size-[34px] shrink-0 lg:size-[3.3vw]" fill="none" aria-hidden="true">
      <path
        d="M18 6.5 6.5 13 18 19.5 29.5 13 18 6.5Z"
        stroke="#ef4b16"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 18 18 24.5 29.5 18"
        stroke="#ef4b16"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 23 18 29.5 29.5 23"
        stroke="#ef4b16"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 36 36" className="size-[34px] shrink-0 lg:size-[3.3vw]" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="11.5" stroke="#686a73" strokeWidth="1.9" />
      <ellipse cx="18" cy="18" rx="5.2" ry="11.5" stroke="#686a73" strokeWidth="1.9" />
      <path d="M7 14.2h22M7 21.8h22" stroke="#686a73" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-svh w-full overflow-hidden bg-white"
    >
      {/* Full-bleed background image extending behind the header across 100% width with subtle cinematic parallax */}
      <ParallaxBackground
        offset={20}
        scaleFrom={1.04}
        className="pointer-events-none absolute inset-0 -z-10 w-full"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Professional digital cinema camera on rocky terrain against a dramatic golden sunset sky"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-[72%_center] lg:object-right"
        />
        {/* Soft left fade on smaller viewports */}
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white/90 to-transparent lg:hidden" />
      </ParallaxBackground>

      {/* Top Header sitting directly over the full-width hero canvas */}
      <Header />

      {/* Full-Width Hero Content Container */}
      <div className="w-full px-6 pt-10 pb-16 sm:px-10 lg:px-[4.3vw] lg:pt-[5.2vw] lg:pb-[4.5vw]">
        <div className="max-w-none">
          <h1
            id="hero-heading"
            className="font-sans text-[clamp(2.75rem,5.95vw,6.15rem)] font-extrabold leading-[1.03] tracking-[-0.045em] text-[#0a0a0d]"
          >
            <Reveal as="span" y={26} duration={0.68} className="block">
              Ideas begin.
            </Reveal>
            <Reveal as="span" y={26} delay={0.09} duration={0.68} className="mt-[0.1vw] block">
              We make <span className="text-hero-gradient">them move.</span>
            </Reveal>
          </h1>

          <Reveal
            as="p"
            y={20}
            delay={0.18}
            duration={0.65}
            className="mt-6 max-w-[640px] font-sans text-[clamp(1.125rem,1.76vw,1.82rem)] font-normal leading-[1.45] tracking-[-0.015em] text-[#55565e] lg:mt-[2.2vw] lg:max-w-[44vw]"
          >
            Animated videos that tell your story,
            <br className="hidden sm:inline" /> engage your audience, and drive real results.
          </Reveal>

          {/* CTA Buttons Row */}
          <Reveal
            y={18}
            delay={0.26}
            duration={0.62}
            className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 lg:mt-[2.8vw] lg:gap-[1.55vw]"
          >
            <Link
              href="#work"
              className="group bg-cta-gradient inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-[10px] px-7 font-sans text-[15px] font-semibold tracking-[-0.01em] text-white shadow-[0_12px_26px_-6px_rgb(255_37_27/0.48)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-6px_rgb(255_37_27/0.58)] sm:h-[56px] sm:w-auto sm:text-[16px] lg:h-[5.4vw] lg:min-w-[20.1vw] lg:gap-[0.9vw] lg:rounded-[0.85vw] lg:px-[2.4vw] lg:text-[1.48vw]"
            >
              <span>Explore Our Work</span>
              <svg
                viewBox="0 0 20 20"
                className="size-[18px] transition-transform duration-200 group-hover:translate-x-1 lg:size-[1.45vw]"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4.2 10h11.6M10.8 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <button
              type="button"
              className="group inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-[10px] border border-[#cfd2d9] bg-white/95 px-6 font-sans text-[15px] font-bold tracking-[-0.01em] text-[#0c0c10] shadow-[0_2px_10px_rgb(10_10_13/0.04)] backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b5b8c2] sm:h-[56px] sm:w-auto sm:text-[16px] lg:h-[5.4vw] lg:min-w-[18.6vw] lg:gap-[1vw] lg:rounded-[0.85vw] lg:px-[2vw] lg:text-[1.48vw]"
            >
              <span className="grid size-[32px] place-items-center rounded-full border-[2.2px] border-[#ff4518] text-[#ff4518] transition-transform duration-200 group-hover:scale-105 sm:size-[34px] lg:size-[3.1vw]">
                <svg
                  viewBox="0 0 20 20"
                  className="size-3.5 translate-x-[1px] fill-current lg:size-[1.15vw]"
                  aria-hidden="true"
                >
                  <path d="M6 4.2v11.6a.8.8 0 0 0 1.22.68l9.2-5.8a.8.8 0 0 0 0-1.36l-9.2-5.8A.8.8 0 0 0 6 4.2Z" />
                </svg>
              </span>
              <span>Watch Showreel</span>
            </button>
          </Reveal>

          {/* Bottom Stats Row */}
          <StaggerGroup
            as="dl"
            stagger={0.1}
            delayChildren={0.34}
            className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:flex sm:flex-wrap sm:items-center sm:gap-y-5 lg:mt-[3.8vw]"
          >
            <StaggerItem className="flex items-center gap-3.5 sm:pr-7 lg:gap-[0.9vw] lg:pr-[2.15vw]">
              <TrophyIcon />
              <div>
                <dd className="font-sans text-[20px] font-extrabold leading-none tracking-[-0.02em] text-[#0a0a0d] sm:text-[22px] lg:text-[1.78vw]">
                  10+
                </dd>
                <dt className="mt-1.5 font-sans text-[13px] font-normal leading-none text-[#55565e] lg:mt-[0.42vw] lg:text-[1.08vw]">
                  Years Experience
                </dt>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-center gap-3.5 border-[#d8dbe2] sm:border-l sm:px-7 lg:gap-[0.9vw] lg:px-[2.15vw]">
              <LayersIcon />
              <div>
                <dd className="font-sans text-[20px] font-extrabold leading-none tracking-[-0.02em] text-[#0a0a0d] sm:text-[22px] lg:text-[1.78vw]">
                  500+
                </dd>
                <dt className="mt-1.5 font-sans text-[13px] font-normal leading-none text-[#55565e] lg:mt-[0.42vw] lg:text-[1.08vw]">
                  Projects Delivered
                </dt>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-center gap-3.5 border-[#d8dbe2] sm:border-l sm:pl-7 lg:gap-[0.9vw] lg:pl-[2.15vw]">
              <GlobeIcon />
              <div>
                <dd className="font-sans text-[20px] font-extrabold leading-none tracking-[-0.02em] text-[#0a0a0d] sm:text-[22px] lg:text-[1.78vw]">
                  Global
                </dd>
                <dt className="mt-1.5 font-sans text-[13px] font-normal leading-none text-[#55565e] lg:mt-[0.42vw] lg:text-[1.08vw]">
                  Clients Worldwide
                </dt>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
