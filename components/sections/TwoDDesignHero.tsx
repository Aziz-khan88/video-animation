"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  EASE_OUT_EXPO,
  FloatingElement,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

const NAV_LINKS = [
  { label: "Home", href: "/2d-animation-design", active: true },
  { label: "Services", href: "#services", active: false },
  { label: "Portfolio", href: "#portfolio", active: false },
  { label: "Industries", href: "#industries", active: false },
  { label: "Pricing", href: "#pricing", active: false },
  { label: "FAQ", href: "#faq", active: false },
] as const;

interface HeroVideoThumbnail {
  id: string;
  title: string;
  category: string;
  duration: string;
  progressPercent: number;
  showPlayerBar: boolean;
  image: string;
  alt: string;
  desktopPositionClass: string;
  floatAmplitude: number;
  floatDuration: number;
  floatDelay: number;
  description: string;
}

const HERO_VIDEO_THUMBNAILS: readonly HeroVideoThumbnail[] = [
  {
    id: "mechanical",
    title: "Technical & Mechanical Cutaway",
    category: "Mechanical Animation",
    duration: "01:45",
    progressPercent: 42,
    showPlayerBar: true,
    image: "/images/two-d-design-thumb-1-mechanical.jpg?v=4",
    alt: "2D cutaway illustration of an industrial mechanical turbine engine showing internal pistons and glowing orange combustion",
    desktopPositionClass:
      "lg:left-[52.4%] lg:top-[6%] lg:w-[14%] lg:h-[37.5%] lg:[transform:perspective(950px)_rotateY(-5deg)_rotateZ(-0.8deg)_skewY(-0.4deg)]",
    floatAmplitude: 4,
    floatDuration: 4.4,
    floatDelay: 0,
    description:
      "Visualize internal engine mechanics, fluid dynamics, and complex engineering assemblies with crystal-clear 2D cutaway animation.",
  },
  {
    id: "healthcare",
    title: "Patient & Medical Explainer",
    category: "Healthcare Animation",
    duration: "02:10",
    progressPercent: 46,
    showPlayerBar: true,
    image: "/images/two-d-design-thumb-2-healthcare.jpg?v=4",
    alt: "2D animated female doctor in white lab coat with stethoscope gesturing toward a red heart with an ECG heartbeat line",
    desktopPositionClass:
      "lg:left-[67.4%] lg:top-[4.2%] lg:w-[14.8%] lg:h-[38.5%] lg:[transform:perspective(950px)_rotateY(-5.5deg)_rotateZ(-0.7deg)_skewY(-0.4deg)]",
    floatAmplitude: 4.5,
    floatDuration: 4.8,
    floatDelay: 0.55,
    description:
      "Communicate medical procedures, clinical workflows, and patient education with warm, trustworthy 2D character storytelling.",
  },
  {
    id: "product",
    title: "Consumer Product Commercial",
    category: "Product Animation",
    duration: "01:15",
    progressPercent: 44,
    showPlayerBar: true,
    image: "/images/two-d-design-thumb-3-product.jpg?v=4",
    alt: "2D animated orange juice bottle surrounded by fresh oranges, citrus slices, and green leaves on a warm yellow background",
    desktopPositionClass:
      "lg:left-[83.2%] lg:top-[2.5%] lg:w-[14.8%] lg:h-[39%] lg:[transform:perspective(950px)_rotateY(-5deg)_rotateZ(-0.5deg)_skewY(-0.3deg)]",
    floatAmplitude: 4,
    floatDuration: 4.6,
    floatDelay: 1.1,
    description:
      "Bring consumer products, food & beverage brands, and retail launches to life with vibrant colors and kinetic 2D motion.",
  },
] as const;

const TRUST_BADGES = [
  {
    title: "Fixed Pricing",
    subtitle: "No hidden costs",
    icon: (
      <svg
        viewBox="0 0 28 28"
        className="size-6 shrink-0 text-[#ed261f] xl:size-7"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="10.5" stroke="currentColor" strokeWidth="1.9" />
        <path
          d="M14 8.5v5.8l3.8 2.2"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    subtitle: "On-time, always",
    icon: (
      <svg
        viewBox="0 0 28 28"
        className="size-6 shrink-0 text-[#ed261f] xl:size-7"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="4.5"
          y="6.5"
          width="19"
          height="17"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <path
          d="M4.5 11.5h19M9.5 4.2v4.2M18.5 4.2v4.2"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <circle cx="9.8" cy="15.5" r="1.1" fill="currentColor" />
        <circle cx="14" cy="15.5" r="1.1" fill="currentColor" />
        <circle cx="18.2" cy="15.5" r="1.1" fill="currentColor" />
        <circle cx="9.8" cy="19.2" r="1.1" fill="currentColor" />
        <circle cx="14" cy="19.2" r="1.1" fill="currentColor" />
        <circle cx="18.2" cy="19.2" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Revision Included",
    subtitle: "Until you're happy",
    icon: (
      <svg
        viewBox="0 0 28 28"
        className="size-6 shrink-0 text-[#ed261f] xl:size-7"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="10.5" stroke="currentColor" strokeWidth="1.9" />
        <path
          d="m9.8 14.2 2.9 3 5.7-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export function TwoDDesignHero() {
  const [activeShowreel, setActiveShowreel] = useState<HeroVideoThumbnail | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <section
      id="two-d-design-hero"
      aria-labelledby="two-d-design-hero-heading"
      className="relative isolate w-full overflow-hidden bg-[#fbfaf7]"
    >
      {/* Top Studio Navigation Bar */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
        className="relative z-40 w-full border-b border-[#ece9e2] bg-[#fbfaf7]/95 backdrop-blur-xs"
      >
        <div className="mx-auto flex h-[64px] w-[96%] items-center justify-between lg:h-[72px]">
          {/* Left: Brand Logo */}
          <Link
            href="/"
            aria-label="VideoAnimation.us — Home"
            className="group inline-flex shrink-0 items-center gap-2.5"
          >
            <motion.svg
              viewBox="0 0 42 44"
              whileHover={{ rotate: -6, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className="h-[28px] w-[26px] shrink-0 lg:h-[31px] lg:w-[29px]"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="twod-design-play-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f21820" />
                  <stop offset="55%" stopColor="#ff4518" />
                  <stop offset="100%" stopColor="#ff6f10" />
                </linearGradient>
              </defs>
              <motion.path
                d="M6.5 7.2c0-2.7 3-4.3 5.3-2.9l23.4 14.8c2.1 1.3 2.1 4.5 0 5.8L11.8 39.7c-2.3 1.4-5.3-.2-5.3-2.9V7.2Z"
                fill="none"
                stroke="url(#twod-design-play-grad)"
                strokeWidth="4.8"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
              />
            </motion.svg>
            <span className="font-sans text-[19px] font-extrabold tracking-[-0.035em] text-[#0c0d12] lg:text-[21px]">
              VideoAnimation<span className="text-[#ef231c]">.us</span>
            </span>
          </Link>

          {/* Center: Navigation Links */}
          <nav
            aria-label="2D Animation Page Navigation"
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden h-full md:flex md:items-center"
          >
            <ul className="flex h-full items-center gap-7 lg:gap-9">
              {NAV_LINKS.map((item) => (
                <li
                  key={item.label}
                  onMouseEnter={() => setHoveredNav(item.label)}
                  className="relative flex h-full items-center"
                >
                  <Link
                    href={item.href}
                    aria-current={item.active ? "page" : undefined}
                    className={
                      item.active
                        ? "relative z-10 font-sans text-[14.5px] font-bold tracking-[-0.01em] text-[#eb2419] lg:text-[15px]"
                        : "relative z-10 font-sans text-[14.5px] font-bold tracking-[-0.01em] text-[#14161d] transition-colors duration-200 hover:text-[#eb2419] lg:text-[15px]"
                    }
                  >
                    {item.label}
                  </Link>
                  {hoveredNav === item.label && !item.active && (
                    <motion.span
                      layoutId="twod-design-nav-hover"
                      aria-hidden="true"
                      transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                      className="absolute inset-x-0 bottom-0 h-[2.5px] rounded-full bg-[#ff6c18]/55"
                    />
                  )}
                  {item.active && (
                    <motion.span
                      layoutId="twod-design-nav-underline"
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[#eb2419]"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Pill CTA Button + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="#quote"
              className="group hidden h-[40px] shrink-0 items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#e7131e_0%,#ff4d15_55%,#ff880a_100%)] px-5 font-sans text-[13.5px] font-bold tracking-[-0.01em] text-white shadow-[0_8px_20px_-5px_rgb(245_45_24/0.48)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-4px_rgb(245_45_24/0.6)] sm:inline-flex lg:h-[42px] lg:px-6 lg:text-[14px]"
            >
              <span>Get a Fixed Quote</span>
              <svg
                viewBox="0 0 20 20"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4.2 10h11.6M10.8 5.2 15.8 10l-5 4.8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-[#e5e7ef] text-[#14161d] md:hidden"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
                <path
                  d={
                    mobileMenuOpen
                      ? "M6 6l12 12M18 6 6 18"
                      : "M4 7h16M4 12h16M8 17h12"
                  }
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-[#eceef4] bg-[#fbfaf7] py-4 md:hidden"
            >
              <ul className="mx-auto flex w-[96%] flex-col gap-3">
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={
                        item.active
                          ? "block font-sans text-[15px] font-bold text-[#eb2419]"
                          : "block font-sans text-[15px] font-semibold text-[#14161d]"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Hero Stage — 70vh height on desktop as requested */}
      <div className="relative isolate w-full overflow-hidden lg:h-[70vh] lg:min-h-[540px] lg:max-h-[760px]">
        {/* Regenerated Clean 2D Animator Studio Background Image (1960x768, matched to 70vh aspect ratio) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.15, ease: EASE_OUT_EXPO }}
          className="pointer-events-none absolute inset-0 -z-10 w-full"
        >
          <Image
            src="/images/two-d-design-hero-bg.jpg?v=4"
            alt="Sunlit 2D animation studio where an animator in a red hoodie and headphones illustrates on a digital tablet while viewing a running character animation on a desktop monitor"
            fill
            priority
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-cover object-[74%_center] mix-blend-multiply lg:object-fill"
          />
          {/* Responsive readability gradient for smaller viewports */}
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#fbfaf7] via-[#fbfaf7]/95 to-[#fbfaf7]/35 lg:hidden" />
        </motion.div>

        {/* Left Column: Hero Typography, Dual Pill CTAs & 3 Trust Badges */}
        <div className="relative z-10 mx-auto flex h-full w-[96%] flex-col justify-center pt-8 pb-10 lg:py-8">
          <StaggerGroup
            className="max-w-[560px] lg:max-w-[460px] xl:max-w-[580px] 2xl:max-w-[680px]"
            stagger={0.08}
            delayChildren={0.05}
          >
            {/* 2-Line Display Heading */}
            <StaggerItem>
              <h1
                id="two-d-design-hero-heading"
                className="font-sans text-[32px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0c0d12] sm:text-[42px] lg:text-[42px] xl:text-[52px] 2xl:text-[62px]"
              >
                <span className="block sm:whitespace-nowrap">2D Animation Videos</span>
                <span className="mt-1 block sm:whitespace-nowrap">for Every Industry</span>
              </h1>
            </StaggerItem>

            {/* 3-Line Lead Copy */}
            <StaggerItem>
              <p className="mt-3.5 font-sans text-[14.5px] font-medium leading-[1.48] tracking-[-0.01em] text-[#282b34] lg:mt-4 lg:text-[15px] xl:text-[17px] 2xl:text-[19px]">
                We turn complex ideas into clear, engaging 2D animation
                <br className="hidden sm:inline" /> videos — for products, processes, training,
                marketing,
                <br className="hidden sm:inline" /> and more across 8+ industries.
              </p>
            </StaggerItem>

            {/* Dual Pill CTA Buttons Row */}
            <StaggerItem>
              <div className="mt-6 flex flex-wrap items-center gap-3.5 lg:mt-7">
                {/* Primary Pill CTA: Get a Fixed Quote -> */}
                <Link
                  href="#quote"
                  className="group relative inline-flex h-[46px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(90deg,#ea2127_0%,#f35321_54%,#f88c15_100%)] px-6 font-sans text-[14.5px] font-bold tracking-[-0.01em] text-white shadow-[0_10px_22px_-6px_rgb(238_42_24/0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-6px_rgb(238_42_24/0.65)] lg:h-[50px] lg:px-7 lg:text-[15.5px]"
                >
                  {/* Continuous Diagonal Light Shimmer */}
                  <motion.span
                    aria-hidden="true"
                    initial={{ x: "-140%" }}
                    animate={{ x: "260%" }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      repeatDelay: 2.2,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 w-14 -skew-x-20 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                  />
                  <span className="relative z-10">Get a Fixed Quote</span>
                  <svg
                    viewBox="0 0 20 20"
                    className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.2 10h11.6M10.8 5.2 15.8 10l-5 4.8"
                      stroke="currentColor"
                      strokeWidth="2.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                {/* Secondary Pill CTA: Watch Showreel */}
                <motion.button
                  type="button"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveShowreel(HERO_VIDEO_THUMBNAILS[0])}
                  className="group inline-flex h-[46px] cursor-pointer items-center justify-center gap-2 rounded-full border-[1.8px] border-[#262932] bg-white/95 px-6 font-sans text-[14.5px] font-bold tracking-[-0.01em] text-[#0c0d12] shadow-[0_4px_12px_rgb(12_13_18/0.05)] transition-colors duration-300 hover:border-[#eb2419] hover:text-[#eb2419] lg:h-[50px] lg:px-7 lg:text-[15.5px]"
                >
                  <motion.svg
                    viewBox="0 0 18 18"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="size-4 shrink-0 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M4.2 3.3c0-.7.75-1.12 1.35-.75l8.1 5.1c.56.35.56 1.15 0 1.5l-8.1 5.1c-.6.37-1.35-.05-1.35-.75V3.3Z" />
                  </motion.svg>
                  <span>Watch Showreel</span>
                </motion.button>
              </div>
            </StaggerItem>

            {/* Bottom 3 Trust Badges Row */}
            <StaggerItem>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#eceef4] pt-4 sm:gap-x-0 sm:border-t-0 sm:pt-0 lg:mt-8 lg:flex-nowrap">
                {TRUST_BADGES.map((badge, index) => (
                  <motion.div
                    key={badge.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.35 + index * 0.1,
                      ease: EASE_OUT_EXPO,
                    }}
                    className="flex shrink-0 items-center"
                  >
                    {index > 0 && (
                      <motion.span
                        aria-hidden="true"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.45, delay: 0.4 + index * 0.1 }}
                        className="mx-3 hidden h-7 w-px origin-center bg-[#dadde6] sm:inline-block lg:mx-3.5"
                      />
                    )}
                    <div className="group flex shrink-0 items-center gap-2.5">
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{
                          duration: 3 + index * 0.4,
                          delay: index * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      >
                        {badge.icon}
                      </motion.div>
                      <div className="leading-[1.2]">
                        <p className="font-sans text-[12.5px] font-extrabold tracking-[-0.015em] text-[#0c0d12] xl:text-[13.5px]">
                          {badge.title}
                        </p>
                        <p className="mt-0.5 font-sans text-[11px] font-normal text-[#565965] xl:text-[11.5px]">
                          {badge.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </StaggerItem>
          </StaggerGroup>

          {/* Mobile / Tablet Responsive Grid for the 3 Video Player Thumbnails */}
          <StaggerGroup
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:hidden"
            stagger={0.08}
            delayChildren={0.18}
          >
            {HERO_VIDEO_THUMBNAILS.map((thumb) => (
              <StaggerItem key={thumb.id}>
                <button
                  type="button"
                  onClick={() => setActiveShowreel(thumb)}
                  className="group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-[10px] border-[2.5px] border-white bg-white text-left shadow-[0_12px_28px_-6px_rgb(15_28_55/0.25),3px_4px_0_rgb(76_90_115/0.75)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#d8eeff]">
                    <Image
                      src={thumb.image}
                      alt={thumb.alt}
                      fill
                      unoptimized
                      sizes="(min-width: 640px) 32vw, 92vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex h-6 w-full items-center gap-2.5 bg-[#2e384b] px-3">
                    <svg
                      viewBox="0 0 12 12"
                      className="size-2.5 shrink-0 fill-white/95"
                      aria-hidden="true"
                    >
                      <path d="M2.5 1.8v8.4L10 6 2.5 1.8Z" />
                    </svg>
                    <div className="relative h-1 flex-1 rounded-full bg-[#8cb8e8]/65">
                      <div
                        className="h-full rounded-full bg-[#f02424]"
                        style={{ width: `${thumb.progressPercent}%` }}
                      />
                      <span
                        className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xs"
                        style={{ left: `${thumb.progressPercent}%` }}
                      />
                    </div>
                    <svg
                      viewBox="0 0 16 16"
                      className="size-3 shrink-0 text-white/85"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 6V2.5H6M10 2.5h3.5V6M13.5 10v3.5H10M6 13.5H2.5V10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* Desktop 3 Floating Video Player Thumbnails Positioned Above the Studio Monitor */}
        <div
          aria-label="Featured 2D industry animations"
          className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
        >
          {HERO_VIDEO_THUMBNAILS.map((thumb, idx) => (
            <div
              key={thumb.id}
              className={`pointer-events-auto absolute ${thumb.desktopPositionClass}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.65,
                  delay: 0.2 + idx * 0.1,
                  ease: EASE_OUT_EXPO,
                }}
                className="h-full w-full"
              >
                <FloatingElement
                  amplitude={thumb.floatAmplitude}
                  duration={thumb.floatDuration}
                  delay={thumb.floatDelay}
                  className="h-full w-full"
                >
                  <button
                    type="button"
                    onClick={() => setActiveShowreel(thumb)}
                    aria-label={`Play ${thumb.title} preview`}
                    className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-[6px] border-[3px] border-white bg-white shadow-[3px_4px_0_#4c5a73,0_12px_24px_-6px_rgb(16_33_64/0.28)] ring-1 ring-[#9eb2cc]/60 transition-all duration-300 hover:z-30 hover:-translate-y-1 hover:scale-[1.035] hover:shadow-[4px_5px_0_#ef231c,0_18px_32px_-6px_rgb(16_33_64/0.38)]"
                  >
                    {/* Thumbnail Illustration Area */}
                    <div className="relative w-full flex-1 overflow-hidden bg-[#d8eeff]">
                      <Image
                        src={thumb.image}
                        alt={thumb.alt}
                        fill
                        quality={95}
                        unoptimized
                        sizes="18vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Hover play badge */}
                      <div className="absolute inset-0 flex items-center justify-center bg-[#0c1220]/0 transition-colors duration-300 group-hover:bg-[#0c1220]/20">
                        <span className="grid size-9 scale-75 place-items-center rounded-full bg-[linear-gradient(135deg,#ff1920_0%,#ff6810_100%)] text-white opacity-0 shadow-[0_6px_16px_rgb(239_35_28/0.55)] transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                          <svg
                            viewBox="0 0 18 18"
                            className="size-4 translate-x-[1px] fill-current"
                            aria-hidden="true"
                          >
                            <path d="M4.5 3.4v11.2l9-5.6-9-5.6Z" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Bottom Video Player Scrubber Bar */}
                    {thumb.showPlayerBar && (
                      <div className="flex h-[22px] w-full shrink-0 items-center gap-2 bg-[#2e384b] px-2.5 xl:h-[24px]">
                        {/* Left Play Triangle Icon */}
                        <svg
                          viewBox="0 0 12 12"
                          className="size-2.5 shrink-0 fill-white/95"
                          aria-hidden="true"
                        >
                          <path d="M2.5 1.8v8.4L10 6 2.5 1.8Z" />
                        </svg>

                        {/* Center Scrubber Track */}
                        <div className="relative h-[3px] flex-1 rounded-full bg-[#8cb8e8]/70">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${thumb.progressPercent}%` }}
                            transition={{
                              duration: 1.05,
                              delay: 0.5 + idx * 0.14,
                              ease: EASE_OUT_EXPO,
                            }}
                            className="h-full rounded-full bg-[#f22424] group-hover:bg-[#ff5516]"
                          />
                          <motion.span
                            initial={{ left: "0%" }}
                            animate={{ left: `${thumb.progressPercent}%` }}
                            transition={{
                              duration: 1.05,
                              delay: 0.5 + idx * 0.14,
                              ease: EASE_OUT_EXPO,
                            }}
                            className="absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_1px_3px_rgb(0_0_0/0.45)] transition-transform duration-200 group-hover:scale-125"
                          />
                        </div>

                        {/* Fullscreen Frame Icon */}
                        <svg
                          viewBox="0 0 16 16"
                          className="size-3 shrink-0 text-white/85 transition-colors group-hover:text-white"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.5 6V2.5H6M10 2.5h3.5V6M13.5 10v3.5H10M6 13.5H2.5V10"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                </FloatingElement>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Showreel Preview Modal */}
      <AnimatePresence>
        {activeShowreel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeShowreel.title} Showreel Preview`}
            onClick={() => setActiveShowreel(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#090d16]/80 p-4 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-[#121723] text-white shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block size-2.5 rounded-full bg-[#ff2a1f]" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#ff7635]">
                    {activeShowreel.category}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="font-sans text-sm font-bold text-white">
                    {activeShowreel.title}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveShowreel(null)}
                  aria-label="Close Showreel Modal"
                  className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-[#eb2419] hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Active Video Frame Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#0b0f19]">
                <Image
                  src={activeShowreel.image}
                  alt={activeShowreel.alt}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 768px, 95vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/90 via-transparent to-transparent" />
                <div className="absolute inset-x-6 bottom-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div className="max-w-lg">
                    <span className="inline-block rounded-full bg-[#eb2419]/90 px-3 py-0.5 font-sans text-[11px] font-bold uppercase tracking-wider text-white">
                      2D Showreel Spotlight • {activeShowreel.duration}
                    </span>
                    <h3 className="mt-2 font-sans text-xl font-extrabold text-white">
                      {activeShowreel.title}
                    </h3>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-white/80 sm:text-sm">
                      {activeShowreel.description}
                    </p>
                  </div>
                  <Link
                    href="#quote"
                    onClick={() => setActiveShowreel(null)}
                    className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#e5121d_0%,#ff4d15_54%,#ff890a_100%)] px-5 font-sans text-xs font-bold text-white shadow-lg"
                  >
                    <span>Get a Fixed Quote</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Switcher Bar for the 3 Hero Thumbnails */}
              <div className="grid grid-cols-1 gap-2.5 bg-[#0e131d] p-4 sm:grid-cols-3 sm:gap-3">
                {HERO_VIDEO_THUMBNAILS.map((item) => {
                  const isSelected = item.id === activeShowreel.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveShowreel(item)}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-2 text-left transition-all ${
                        isSelected
                          ? "border-[#ff4d15] bg-white/10"
                          : "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className="relative aspect-video w-16 shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          unoptimized
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-sans text-xs font-bold text-white">
                          {item.category}
                        </p>
                        <p className="truncate font-sans text-[11px] text-white/60">
                          {item.duration}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
