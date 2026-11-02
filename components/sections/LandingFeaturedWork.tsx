"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  EASE_OUT_EXPO,
  ParallaxBackground,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

interface FeaturedWorkItem {
  title: string;
  line1: string;
  line2: string;
  image: string;
  playerImage: string;
  alt: string;
  playerAlt: string;
  durationSec: number;
  defaultSec: number;
}

const FEATURED_WORK_ITEMS: readonly FeaturedWorkItem[] = [
  {
    title: "Software Animation",
    line1: "Turn complex software",
    line2: "into simple stories.",
    image: "/images/featured-work-1-software.jpg",
    playerImage: "/images/featured-player-1-software.jpg",
    alt: "Laptop screen displaying glowing blue software analytics dashboards and UI widgets",
    playerAlt:
      "Software Animation showcase — sleek laptop displaying glowing blue SaaS analytics dashboards and floating holographic UI panels",
    durationSec: 135, // 02:15
    defaultSec: 68, // 01:08
  },
  {
    title: "Education Animation",
    line1: "Make learning engaging",
    line2: "and memorable.",
    image: "/images/featured-work-2-education.jpg",
    playerImage: "/images/featured-player-2-education.jpg",
    alt: "3D animated girl smiling and pointing at a glowing lightbulb diagram on a classroom whiteboard",
    playerAlt:
      "Education Animation showcase — cheerful 3D girl pointing at a glowing yellow lightbulb diagram and formulas on a classroom whiteboard",
    durationSec: 110, // 01:50
    defaultSec: 52, // 00:52
  },
  {
    title: "Medical Animation",
    line1: "Explain healthcare",
    line2: "with clarity and care.",
    image: "/images/featured-work-3-medical.jpg",
    playerImage: "/images/featured-player-3-medical.jpg",
    alt: "Glowing blue translucent 3D human anatomy hologram highlighting the heart and circulatory system",
    playerAlt:
      "Medical Animation showcase — glowing blue translucent 3D human anatomy hologram highlighting the heart and circulatory system",
    durationSec: 125, // 02:05
    defaultSec: 74, // 01:14
  },
  {
    title: "Product Animation",
    line1: "Showcase products",
    line2: "with stunning detail.",
    image: "/images/featured-work-4-product.jpg",
    playerImage: "/images/featured-player-4-product.jpg",
    alt: "Exploded-view 3D product animation of a smartwatch revealing internal gears, sensors, and glowing copper coils",
    playerAlt:
      "Product Animation showcase — exploded-view 3D render of a smartwatch revealing internal precision gears, sensors, and glowing copper coils",
    durationSec: 105, // 01:45
    defaultSec: 58, // 00:58
  },
  {
    title: "Marketing Animation",
    line1: "Create videos that",
    line2: "convert and inspire.",
    image: "/images/featured-work-5-marketing.jpg",
    playerImage: "/images/featured-player-5-marketing.jpg",
    alt: "3D animated woman smiling beside floating holographic video play and rising bar-chart screens",
    playerAlt:
      "Marketing Animation showcase — 3D woman smiling beside floating holographic video play and rising growth chart displays",
    durationSec: 95, // 01:35
    defaultSec: 46, // 00:46
  },
  {
    title: "Engineering Animation",
    line1: "Visualize complex",
    line2: "engineering ideas.",
    image: "/images/featured-work-6-engineering.jpg",
    playerImage: "/images/featured-player-6-engineering.jpg",
    alt: "3D engineer in a white hard hat holding a tablet in front of an industrial facility with a glowing blue CAD schematic",
    playerAlt:
      "Engineering Animation showcase — 3D engineer inspecting a metallic jet turbine engine surrounded by glowing blue CAD wireframes",
    durationSec: 150, // 02:30
    defaultSec: 84, // 01:24
  },
] as const;

function formatTime(totalSeconds: number): string {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(clamped / 60);
  const secs = clamped % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function LandingFeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSec, setCurrentSec] = useState<number>(150 * 0.56); // 01:24
  const playerContainerRef = useRef<HTMLDivElement>(null);

  const activeItem = FEATURED_WORK_ITEMS[activeIndex];
  // Before clicking any service card, show the default hero engineering turbine player scene (01:24 / 02:30);
  // as soon as the user clicks any service card (including Software Animation), show that service's scene.
  const displayedPlayerImage = hasInteracted
    ? activeItem.playerImage
    : "/images/featured-player-6-engineering.jpg";
  const displayedPlayerAlt = hasInteracted
    ? activeItem.playerAlt
    : FEATURED_WORK_ITEMS[5].playerAlt;
  const displayedDuration = hasInteracted ? activeItem.durationSec : 150;

  const selectCategory = (idx: number) => {
    setHasInteracted(true);
    setActiveIndex(idx);
    setCurrentSec(FEATURED_WORK_ITEMS[idx].defaultSec);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const nextIdx =
      activeIndex === 0 ? FEATURED_WORK_ITEMS.length - 1 : activeIndex - 1;
    selectCategory(nextIdx);
  };

  const handleNext = () => {
    const nextIdx =
      activeIndex === FEATURED_WORK_ITEMS.length - 1 ? 0 : activeIndex + 1;
    selectCategory(nextIdx);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = window.setInterval(() => {
      setCurrentSec((prev) => {
        if (prev + 0.25 >= displayedDuration) {
          return 0;
        }
        return prev + 0.25;
      });
    }, 250);
    return () => window.clearInterval(interval);
  }, [isPlaying, displayedDuration]);

  const progressPercent = Math.min(
    100,
    Math.max(0, (currentSec / displayedDuration) * 100)
  );

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(
      1,
      Math.max(0, (e.clientX - rect.left) / rect.width)
    );
    setCurrentSec(ratio * displayedDuration);
  };

  const handleFullscreen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const el = playerContainerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    }
  };

  return (
    <section
      id="featured-work"
      aria-labelledby="landing-featured-work-heading"
      className="relative isolate w-full overflow-hidden bg-white py-14 lg:min-h-[56.25vw] lg:py-0"
    >
      {/* Full-bleed 16:9 background */}
      <ParallaxBackground
        className="pointer-events-none hidden lg:absolute lg:inset-0 lg:-z-10 lg:block"
        offset={24}
      >
        <Image
          src="/images/landing-featured-work-bg.jpg"
          alt=""
          fill
          quality={100}
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </ParallaxBackground>

      {/* Main Content Container calibrated to the 1024x576 reference */}
      <div className="relative z-10 flex w-full flex-col justify-between px-6 sm:px-10 lg:min-h-[56.25vw] lg:px-[3.4vw] lg:pt-[5.2vw] lg:pb-[1.8vw]">
        {/* Top Row: Left Heading Column + Right Interactive Main Video Player */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:pl-[1vw]">
          <StaggerGroup
            className="max-w-[500px] lg:max-w-[36vw] lg:pt-[3.6vw]"
            stagger={0.09}
            delayChildren={0.05}
          >
            {/* 04 | FEATURED WORK ————> Eyebrow */}
            <StaggerItem>
              <div className="flex items-center gap-3 lg:gap-[1.05vw]">
                <span className="font-sans text-[18px] font-extrabold tracking-[-0.02em] text-[#08090c] lg:text-[1.78vw]">
                  04
                </span>
                <span
                  aria-hidden="true"
                  className="h-4 w-[1.5px] shrink-0 bg-[#c5cad6] lg:h-[1.55vw]"
                />
                <p className="whitespace-nowrap font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#3a3e4b] lg:text-[0.98vw]">
                  FEATURED WORK
                </p>
                <svg
                  viewBox="0 0 150 14"
                  className="ml-1 h-3.5 w-24 shrink-0 text-[#686f80] lg:ml-[0.5vw] lg:h-[1.05vw] lg:w-[14.2vw]"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 7h146M141 2l6 5-6 5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </StaggerItem>

            {/* 1-Line Display Heading */}
            <StaggerItem>
              <h2
                id="landing-featured-work-heading"
                className="mt-4 font-sans text-[clamp(2.45rem,5.25vw,5.4rem)] font-extrabold leading-[1.0] tracking-[-0.045em] text-[#08090c] lg:mt-[1.6vw]"
              >
                See the{" "}
                <span className="bg-[linear-gradient(90deg,#ef131e_0%,#ff4617_54%,#ff6c10_100%)] bg-clip-text text-transparent">
                  work.
                </span>
              </h2>
            </StaggerItem>

            {/* 3-Line Subtitle */}
            <StaggerItem>
              <p className="mt-4 font-sans text-[14.5px] font-normal leading-[1.44] tracking-[-0.01em] text-[#454a59] lg:mt-[1.4vw] lg:text-[1.34vw]">
                Real animation projects for real businesses.
                <br className="hidden sm:inline" /> Explore how we turn ideas into clear, engaging
                <br className="hidden sm:inline" /> videos across six key industries.
              </p>
            </StaggerItem>
          </StaggerGroup>

          {/* Interactive Main Widescreen Video Player (Desktop + Mobile/Tablet) */}
          <Reveal
            className="w-full lg:w-[54.8vw] lg:pt-[1.6vw]"
            y={18}
            scale={0.98}
          >
            <div
              ref={playerContainerRef}
              onClick={() => setIsPlaying((prev) => !prev)}
              role="region"
              aria-label={`Featured video player — ${activeItem.title}`}
              className="group/player relative aspect-[562/250] w-full cursor-pointer overflow-hidden rounded-[14px] bg-[#070b14] shadow-[0_20px_48px_-12px_rgb(15_23_42/0.32)] ring-1 ring-black/10 select-none lg:rounded-[1.15vw]"
            >
              {/* Animated Widescreen Video Scene */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayedPlayerImage}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{
                    opacity: 1,
                    scale: isPlaying ? [1, 1.06, 1.02] : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    opacity: { duration: 0.38, ease: EASE_OUT_EXPO },
                    scale: isPlaying
                      ? { duration: 10, repeat: Infinity, ease: "easeInOut" }
                      : { duration: 0.45, ease: EASE_OUT_EXPO },
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={displayedPlayerImage}
                    alt={displayedPlayerAlt}
                    fill
                    quality={100}
                    unoptimized
                    sizes="(min-width: 1024px) 56vw, 95vw"
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Top-Left Active Category Badge */}
              <div className="pointer-events-none absolute top-3 left-3.5 z-20 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 backdrop-blur-md lg:top-[0.9vw] lg:left-[1.05vw] lg:gap-[0.45vw] lg:px-[0.85vw] lg:py-[0.3vw]">
                <span
                  className={`size-2 rounded-full bg-[#ff3b14] lg:size-[0.5vw] ${
                    isPlaying ? "animate-ping" : ""
                  }`}
                />
                <span className="font-sans text-[11px] font-semibold tracking-[0.02em] text-white lg:text-[0.78vw]">
                  {activeItem.title}
                </span>
              </div>

              {/* Center Circular Play/Pause Button Overlay */}
              <div
                className={`pointer-events-none absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 ${
                  isPlaying
                    ? "opacity-0 group-hover/player:opacity-100"
                    : "opacity-100"
                }`}
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.38)] transition-transform duration-200 group-hover/player:scale-108 lg:size-[5.8vw]">
                  {isPlaying ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="size-6 text-[#ff2b14] lg:size-[2.3vw]"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <rect x="6.5" y="5.5" width="3.8" height="13" rx="1.2" />
                      <rect x="13.7" y="5.5" width="3.8" height="13" rx="1.2" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="ml-0.5 size-6 lg:ml-[0.2vw] lg:size-[2.5vw]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient
                          id="featured-player-play-grad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#ff101b" />
                          <stop offset="100%" stopColor="#ff6a00" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M6.8 4.8c0-1.1 1.2-1.8 2.1-1.2l10.6 7.2c.8.55.8 1.85 0 2.4L8.9 20.4c-.9.6-2.1-.1-2.1-1.2V4.8Z"
                        fill="url(#featured-player-play-grad)"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* Bottom Dark Video Player Control Bar */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute inset-x-0 bottom-0 z-20 flex h-[38px] items-center gap-3 bg-gradient-to-t from-black/92 via-black/82 to-black/45 px-3.5 backdrop-blur-[4px] lg:h-[3.35vw] lg:gap-[1.05vw] lg:px-[1.25vw]"
              >
                {/* Play / Pause Button */}
                <button
                  type="button"
                  onClick={() => setIsPlaying((prev) => !prev)}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="flex size-6 shrink-0 cursor-pointer items-center justify-center text-white transition-transform hover:scale-110 lg:size-[1.45vw]"
                >
                  {isPlaying ? (
                    <svg
                      viewBox="0 0 20 20"
                      className="size-4 lg:size-[1.2vw]"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <rect x="4.5" y="3.8" width="3.4" height="12.4" rx="1" />
                      <rect x="12.1" y="3.8" width="3.4" height="12.4" rx="1" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 20 20"
                      className="size-4 lg:size-[1.25vw]"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5 3.8c0-.7.8-1.1 1.4-.7l9.2 6.2c.5.35.5 1.05 0 1.4l-9.2 6.2c-.6.4-1.4 0-1.4-.7V3.8Z" />
                    </svg>
                  )}
                </button>

                {/* Timeline Scrubber + Timestamp */}
                <div className="flex flex-1 flex-col justify-center">
                  <div
                    onClick={handleTimelineClick}
                    role="slider"
                    aria-label="Video timeline"
                    aria-valuemin={0}
                    aria-valuemax={displayedDuration}
                    aria-valuenow={Math.round(currentSec)}
                    tabIndex={0}
                    className="group/scrub relative flex h-3 w-full cursor-pointer items-center"
                  >
                    <div className="h-[3.5px] w-full overflow-hidden rounded-full bg-white/30 lg:h-[0.28vw]">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#ff141e_0%,#ff5510_100%)]"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <span
                      className="absolute size-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.5)] transition-transform group-hover/scrub:scale-125 lg:size-[0.72vw]"
                      style={{ left: `${progressPercent}%` }}
                    />
                  </div>
                  <span className="-mt-0.5 font-sans text-[9.5px] font-medium tracking-[0.02em] text-white/90 lg:text-[0.72vw]">
                    {formatTime(currentSec)} / {formatTime(displayedDuration)}
                  </span>
                </div>

                {/* Volume Toggle */}
                <button
                  type="button"
                  onClick={() => setIsMuted((prev) => !prev)}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="flex size-6 shrink-0 cursor-pointer items-center justify-center text-white/90 transition-colors hover:text-white lg:size-[1.4vw]"
                >
                  {isMuted ? (
                    <svg
                      viewBox="0 0 20 20"
                      className="size-4 lg:size-[1.2vw]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.5 4.5 5.8 7.5H3.2v5h2.6l3.7 3V4.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="m13 8 4 4m0-4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 20 20"
                      className="size-4 lg:size-[1.2vw]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.5 4.5 5.8 7.5H3.2v5h2.6l3.7 3V4.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.8 7.2a3.8 3.8 0 0 1 0 5.6M15 5.2a6.8 6.8 0 0 1 0 9.6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>

                {/* Fullscreen Button */}
                <button
                  type="button"
                  onClick={handleFullscreen}
                  aria-label="Toggle fullscreen"
                  className="flex size-6 shrink-0 cursor-pointer items-center justify-center text-white/90 transition-colors hover:text-white lg:size-[1.4vw]"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="size-4 lg:size-[1.15vw]"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.8 7.2V3.8h3.4M12.8 3.8h3.4v3.4M16.2 12.8v3.4h-3.4M7.2 16.2H3.8v-3.4"
                      stroke="currentColor"
                      strokeWidth="1.65"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom 6 Industry Cards Carousel + Prev/Next Buttons + Pagination Dots */}
        <div className="mt-10 lg:mt-auto">
          <div className="relative">
            {/* Left Carousel Arrow Button (<) */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous featured work category"
              className="absolute top-[64px] -left-3 z-20 grid size-9 cursor-pointer place-items-center rounded-full border border-[#d6dbe6] bg-white text-[#4b5060] shadow-[0_6px_18px_rgb(15_23_42/0.12)] transition-all duration-150 hover:scale-105 hover:border-[#eb3d16] hover:text-[#eb3d16] lg:top-[5.1vw] lg:-left-[1.9vw] lg:size-[3.85vw]"
            >
              <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.45vw]" fill="none" aria-hidden="true">
                <path
                  d="M12.5 5 7.5 10l5 5"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Right Carousel Arrow Button (>) */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next featured work category"
              className="absolute top-[64px] -right-3 z-20 grid size-9 cursor-pointer place-items-center rounded-full border border-[#eb7b59] bg-white text-[#eb3d16] shadow-[0_6px_18px_rgb(15_23_42/0.12)] transition-all duration-150 hover:scale-105 hover:bg-[#eb3d16] hover:text-white lg:top-[5.1vw] lg:-right-[1.9vw] lg:size-[3.85vw]"
            >
              <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.45vw]" fill="none" aria-hidden="true">
                <path
                  d="m7.5 5 5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* 6 Industry Cards Grid */}
            <StaggerGroup
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-[0.78vw]"
              stagger={0.08}
              delayChildren={0.1}
            >
              {FEATURED_WORK_ITEMS.map((item, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <StaggerItem key={item.title}>
                    <article
                      onClick={() => selectCategory(idx)}
                      className="group flex cursor-pointer flex-col"
                    >
                      {/* Top Rounded Thumbnail Image (with bottom-left category icon badge) */}
                      <div
                        className={`relative aspect-[149/115] w-full overflow-hidden rounded-[11px] bg-[#0e1424] shadow-[0_8px_22px_-8px_rgb(15_23_42/0.22)] transition-all duration-200 group-hover:-translate-y-0.5 lg:rounded-[0.82vw] ${
                          isSelected
                            ? "ring-2 ring-[#ff3d17] shadow-[0_12px_28px_-6px_rgb(255_61_23/0.35)]"
                            : ""
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          quality={90}
                          sizes="(min-width: 1024px) 16vw, (min-width: 768px) 32vw, (min-width: 640px) 48vw, 92vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Title & 2-Line Description */}
                      <div className="mt-2.5 px-1 lg:mt-[0.75vw] lg:px-[0.2vw]">
                        <h3
                          className={`font-sans text-[14.5px] font-extrabold leading-[1.2] tracking-[-0.015em] transition-colors group-hover:text-[#eb3318] lg:text-[1.06vw] ${
                            isSelected ? "text-[#eb3318]" : "text-[#090a0d]"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className="mt-1 font-sans text-[12.5px] font-normal leading-[1.35] tracking-[-0.01em] text-[#4e5362] lg:mt-[0.35vw] lg:text-[0.9vw]">
                          <span className="block">{item.line1}</span>
                          <span className="block">{item.line2}</span>
                        </p>
                      </div>
                    </article>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>

          {/* Bottom-Center 6 Pagination Dots */}
          <div
            role="tablist"
            aria-label="Featured work slides"
            className="mt-6 flex items-center justify-center gap-2.5 lg:mt-[1.65vw] lg:gap-[0.78vw]"
          >
            {FEATURED_WORK_ITEMS.map((item, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Show ${item.title}`}
                  onClick={() => selectCategory(idx)}
                  className={
                    isSelected
                      ? "size-2.5 cursor-pointer rounded-full bg-[#e51920] transition-transform scale-110 lg:size-[0.78vw]"
                      : "size-2 cursor-pointer rounded-full bg-[#d5d8e0] transition-colors hover:bg-[#aeb3c0] lg:size-[0.65vw]"
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
