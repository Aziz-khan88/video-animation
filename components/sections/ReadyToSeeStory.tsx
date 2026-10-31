"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ParallaxBackground,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

export function ReadyToSeeStory() {
  return (
    <section className="relative w-full overflow-hidden bg-white lg:aspect-[16/9] lg:min-h-[56.25vw]">
      {/* Full-Section Background Artwork (Animator at Dual-Monitor Desk + Wall Sketches + Rounded Orange Border) */}
      <ParallaxBackground
        className="relative w-full aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto"
        offset={22}
      >
        <Image
          src="/images/portfolio-cta-bg.jpg"
          alt="Animator working at a dual-monitor workstation surrounded by character sketches and storyboards"
          fill
          sizes="100vw"
          className="object-cover object-center select-none"
        />
      </ParallaxBackground>

      {/* Left-Side Content Overlay Positioned Inside the Rounded Frame */}
      <div className="relative z-10 w-full px-5 py-8 sm:px-8 lg:absolute lg:inset-0 lg:px-[3.3vw] lg:pt-[8.3vw] lg:pb-[7.5vw] flex flex-col justify-start">
        <StaggerGroup
          className="max-w-[600px] lg:max-w-[54vw]"
          stagger={0.09}
          delayChildren={0.05}
        >
          {/* 11 Badge */}
          <StaggerItem>
            <div className="inline-flex h-[56px] w-[66px] sm:h-[64px] sm:w-[70px] lg:h-[6.35vw] lg:w-[6.74vw] shrink-0 items-center justify-center rounded-[13px] lg:rounded-[1.2vw] bg-[linear-gradient(135deg,#ef1920_0%,#ff5516_55%,#f78a16_100%)] shadow-[0_8px_22px_rgba(241,28,32,0.24)]">
              <span className="text-[25px] sm:text-[29px] lg:text-[2.75vw] font-bold tracking-[-0.02em] text-white leading-none">
                11
              </span>
            </div>
          </StaggerItem>

          {/* Main Heading */}
          <StaggerItem>
            <h2 className="mt-5 lg:mt-[2.55vw] text-[32px] sm:text-[44px] lg:text-[4.15vw] font-black uppercase leading-[1.05] tracking-[-0.025em] text-[#0b0b0f]">
              <span className="block">READY TO SEE</span>
              <span className="mt-0.5 lg:mt-[0.15vw] block">
                <span className="bg-[linear-gradient(92deg,#f11c20_0%,#ff5516_52%,#f48918_100%)] bg-clip-text text-transparent">
                  YOUR STORY{" "}
                </span>
                <span className="text-[#0b0b0f]">HERE?</span>
              </span>
            </h2>
          </StaggerItem>

          {/* Subtitle */}
          <StaggerItem>
            <p className="mt-3 lg:mt-[1.15vw] text-[15px] sm:text-[18px] lg:text-[1.48vw] font-normal leading-[1.4] tracking-[-0.01em] text-[#555963]">
              Let&apos;s create an animation that leaves a lasting impression.
            </p>
          </StaggerItem>

          {/* CTA Buttons Row */}
          <StaggerItem>
            <div className="mt-6 lg:mt-[2.25vw] flex flex-wrap items-center gap-3.5 lg:gap-[1.56vw]">
              {/* Primary Button: Start Your Project */}
              <Link
                href="/contact"
                className="group inline-flex h-[48px] sm:h-[54px] lg:h-[5.08vw] px-6 sm:px-8 lg:px-0 lg:w-[23.6vw] items-center justify-center gap-2.5 lg:gap-[1.1vw] rounded-[11px] lg:rounded-[1.1vw] bg-[linear-gradient(92deg,#ef1920_0%,#ff5516_55%,#f78a16_100%)] text-[15px] sm:text-[17px] lg:text-[1.42vw] font-semibold tracking-[-0.01em] text-white shadow-[0_10px_24px_rgba(241,28,32,0.26)] transition-transform duration-200 hover:scale-[1.02]"
              >
                <span>Start Your Project</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 sm:h-5 sm:w-5 lg:h-[1.5vw] lg:w-[1.5vw] stroke-current stroke-[2.3] transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              {/* Secondary Button: Our Process */}
              <Link
                href="#behind-the-frames"
                className="group inline-flex h-[48px] sm:h-[54px] lg:h-[5.08vw] px-5 sm:px-7 lg:px-0 lg:w-[17.4vw] items-center justify-center gap-2.5 lg:gap-[0.95vw] rounded-[11px] lg:rounded-[1.1vw] border-[1.5px] border-[#e27a34] bg-white/95 backdrop-blur-sm text-[15px] sm:text-[17px] lg:text-[1.42vw] font-semibold tracking-[-0.01em] text-[#0c0c10] shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition-all duration-200 hover:border-[#f12722] hover:bg-white"
              >
                <span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 lg:h-[2.6vw] lg:w-[2.6vw] shrink-0 items-center justify-center rounded-full border-[1.6px] border-[#ef2d22] text-[#ef2d22] transition-transform duration-200 group-hover:scale-105">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3 w-3 lg:h-[0.95vw] lg:w-[0.95vw] translate-x-[0.5px]"
                  >
                    <path d="M8 5.5v13l10.5-6.5L8 5.5z" />
                  </svg>
                </span>
                <span>Our Process</span>
              </Link>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
