import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";

const CHECKLIST_ITEMS = [
  "A named producer replies within (reply time) on weekdays.",
  "You approve the script and the storyboard before we animate.",
  "The price is shown below. No surprises.",
] as const;

const INDUSTRY_THUMBNAILS = [
  {
    title: "Technology",
    image: "/images/landing-thumb-tech.jpg",
    alt: "3D metallic jet turbine engine surrounded by glowing blue CAD wireframe schematics and telemetry graphs",
    desktopClass:
      "lg:top-[9.6vw] lg:left-[46.6vw] lg:w-[15.8vw] lg:h-[12.2vw] lg:[transform:perspective(950px)_rotateY(14deg)_rotateZ(1.5deg)_skewY(1.2deg)]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 shrink-0 lg:size-[1.35vw]" fill="none" aria-hidden="true">
        <rect x="6.5" y="6.5" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.9" />
        <rect x="9.5" y="9.5" width="5" height="5" rx="0.8" fill="currentColor" />
        <path
          d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Education",
    image: "/images/landing-thumb-education.jpg",
    alt: "3D animated boy in a red hoodie smiling and pointing up at a glowing yellow lightbulb",
    desktopClass:
      "lg:top-[12.2vw] lg:left-[63.5vw] lg:w-[15.8vw] lg:h-[11.2vw] lg:[transform:perspective(950px)_rotateX(2deg)]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 shrink-0 lg:size-[1.45vw]" fill="none" aria-hidden="true">
        <path
          d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z"
          fill="currentColor"
        />
        <path
          d="M6.5 12.2v3.6c0 1.5 2.5 2.7 5.5 2.7s5.5-1.2 5.5-2.7v-3.6M20.5 10.2v5.2"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    image: "/images/landing-thumb-healthcare.jpg",
    alt: "3D animated female doctor in white lab coat and stethoscope beside glowing blue medical heartbeat hologram",
    desktopClass:
      "lg:top-[9.6vw] lg:left-[80.4vw] lg:w-[16.8vw] lg:h-[12.2vw] lg:[transform:perspective(950px)_rotateY(-14deg)_rotateZ(-1.5deg)_skewY(-1.2deg)]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 shrink-0 lg:size-[1.35vw]" fill="none" aria-hidden="true">
        <path
          d="M9.5 4.5h5v5h5v5h-5v5h-5v-5h-5v-5h5v-5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Retail",
    image: "/images/landing-thumb-retail.jpg",
    alt: "3D athletic sneaker product shot on a modern pedestal with glowing neon orange and cyan light trails",
    desktopClass:
      "lg:top-[23.2vw] lg:left-[46.6vw] lg:w-[14.8vw] lg:h-[10.8vw] lg:[transform:perspective(950px)_rotateY(13deg)_rotateZ(1deg)_skewY(0.9deg)]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 shrink-0 lg:size-[1.35vw]" fill="none" aria-hidden="true">
        <path
          d="M3.5 5h2.2l1.8 9.2a1.5 1.5 0 0 0 1.5 1.2h7.8a1.5 1.5 0 0 0 1.4-1l1.8-6.4H6.2"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9.5" cy="19" r="1.6" fill="currentColor" />
        <circle cx="16.5" cy="19" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Marketing",
    image: "/images/landing-thumb-marketing.jpg",
    alt: "3D animated bearded marketer in a yellow sweater gesturing toward rising 3D blue bar charts and growth arrow",
    desktopClass:
      "lg:top-[24.2vw] lg:left-[68.2vw] lg:w-[13.6vw] lg:h-[9.8vw] lg:[transform:perspective(950px)_rotateX(1.5deg)]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 shrink-0 lg:size-[1.3vw]" fill="none" aria-hidden="true">
        <path
          d="M5 19.5v-5M10 19.5v-8M15 19.5v-11M4.5 11.5l5-4.5 3.5 2.5 6-5.5M15.5 4h3.5v3.5"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Manufacturing",
    image: "/images/landing-thumb-manufacturing.jpg",
    alt: "3D orange articulated industrial robotic arm assembling components on a high-tech factory conveyor line",
    desktopClass:
      "lg:top-[22.8vw] lg:left-[82.8vw] lg:w-[14.8vw] lg:h-[10.8vw] lg:[transform:perspective(950px)_rotateY(-13deg)_rotateZ(-1deg)_skewY(-0.9deg)]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 shrink-0 lg:size-[1.35vw]" fill="none" aria-hidden="true">
        <path
          d="M3.5 20h17V10.5l-4.5 3v-3l-4.5 3V6.5h-3.5v7l-4.5-2.5V20Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
] as const;

export function LandingHero() {
  return (
    <section
      id="landing-hero"
      aria-labelledby="landing-hero-heading"
      className="relative isolate min-h-svh w-full overflow-hidden bg-white lg:min-h-[56.25vw]"
    >
      {/* Full-bleed studio & 3D robot animator background image */}
      <div className="pointer-events-none absolute inset-0 -z-10 w-full">
        <Image
          src="/images/landing-hero-bg.jpg"
          alt="Sunlit animation studio featuring a glossy white and orange 3D robot character drawing on a digital pen display at a wooden desk with storyboards and animation books, pointing upward toward floating industry video screens"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[74%_center] lg:object-right"
        />
        {/* Soft left fade on smaller viewports for crisp text legibility */}
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white/92 to-transparent lg:hidden" />
      </div>

      {/* Top Header with Landing Page active state & top-right Get a Fixed Quote CTA */}
      <Header />

      {/* Main Hero Content Container calibrated to the 1024x576 reference */}
      <div className="relative z-10 w-full px-6 pt-4 pb-20 sm:px-10 lg:px-[5.1vw] lg:pt-[2.1vw] lg:pb-[5.2vw]">
        <div className="max-w-[540px] lg:max-w-[42.5vw]">
          {/* 01 + Horizontal Rule + HERO INTRODUCTION Eyebrow */}
          <div className="flex items-center gap-3.5 lg:gap-[1.1vw]">
            <span className="font-sans text-[15px] font-extrabold tracking-[-0.02em] text-[#eb3318] lg:text-[1.38vw]">
              01
            </span>
            <span
              aria-hidden="true"
              className="h-[1.5px] w-8 shrink-0 bg-[#d5d8e0] lg:w-[2.85vw]"
            />
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.11em] text-[#3a3d46] lg:text-[0.98vw]">
              HERO INTRODUCTION
            </p>
          </div>

          {/* 3-Line Display Heading */}
          <h1
            id="landing-hero-heading"
            className="mt-4 font-sans text-[clamp(1.95rem,4.78vw,4.95rem)] font-extrabold leading-[1.04] tracking-[-0.042em] text-[#0a0a0d] lg:mt-[1.35vw]"
          >
            <span className="block sm:whitespace-nowrap">Animation that</span>
            <span className="mt-[0.05vw] block sm:whitespace-nowrap bg-[linear-gradient(90deg,#ef131e_0%,#ff4118_54%,#ff6811_100%)] bg-clip-text text-transparent">
              explains, educates
            </span>
            <span className="mt-[0.05vw] block sm:whitespace-nowrap bg-[linear-gradient(90deg,#ef131e_0%,#ff4617_54%,#ff6c10_100%)] bg-clip-text text-transparent">
              and inspires.
            </span>
          </h1>

          {/* 2-Line Subtitle Lead Copy */}
          <p className="mt-4 font-sans text-[15px] font-normal leading-[1.42] tracking-[-0.015em] text-[#3e414c] lg:mt-[1.35vw] lg:text-[1.44vw]">
            2D and 3D videos for technology, education,
            <br className="hidden sm:inline" /> healthcare, retail, marketing and manufacturing.
          </p>

          {/* 2 CTA Buttons Row: Get a Fixed Quote -> & See the price */}
          <div className="mt-6 flex flex-wrap items-center gap-3.5 lg:mt-[1.95vw] lg:gap-[1.15vw]">
            <Link
              href="#quote"
              className="inline-flex h-[48px] items-center justify-center gap-2.5 rounded-[9px] bg-[linear-gradient(92deg,#ff0e22_0%,#ff4618_54%,#ff780f_100%)] px-6 font-sans text-[15px] font-semibold tracking-[-0.01em] text-white shadow-[0_12px_26px_-6px_rgb(255_42_24/0.48)] transition-transform duration-200 hover:-translate-y-0.5 lg:h-[4.3vw] lg:w-[19.3vw] lg:gap-[0.75vw] lg:rounded-[0.78vw] lg:px-0 lg:text-[1.34vw]"
            >
              <span>Get a Fixed Quote</span>
              <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.25vw]" fill="none" aria-hidden="true">
                <path
                  d="M4.2 10h11.6M10.8 5.2 15.8 10l-5 4.8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="#pricing"
              className="inline-flex h-[48px] items-center justify-center gap-3 rounded-[9px] border border-[#969ba8] bg-white/95 px-5 font-sans text-[15px] font-bold tracking-[-0.015em] text-[#0c0d12] shadow-[0_2px_10px_rgb(10_10_13/0.04)] backdrop-blur-xs transition-colors hover:border-[#5e6370] lg:h-[4.3vw] lg:w-[16.9vw] lg:gap-[0.8vw] lg:rounded-[0.78vw] lg:px-0 lg:text-[1.34vw]"
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-full border-[2.2px] border-[#ff3d17] text-[#ff3d17] lg:size-[2.55vw]">
                <svg
                  viewBox="0 0 20 20"
                  className="size-3 translate-x-[0.8px] fill-current lg:size-[1.05vw]"
                  aria-hidden="true"
                >
                  <path d="M6.2 4.4v11.2a.8.8 0 0 0 1.22.68l8.8-5.6a.8.8 0 0 0 0-1.36l-8.8-5.6a.8.8 0 0 0-1.22.68Z" />
                </svg>
              </span>
              <span>See the price</span>
            </Link>
          </div>

          {/* 3 Red-Orange Checkmark Bullet Points */}
          <ul className="mt-6 space-y-2.5 lg:mt-[1.85vw] lg:space-y-[0.72vw]">
            {CHECKLIST_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-3 lg:gap-[0.95vw]">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ff141f_0%,#ff5514_100%)] text-white shadow-[0_3px_8px_rgb(255_37_27/0.32)] lg:size-[1.95vw]">
                  <svg
                    viewBox="0 0 20 20"
                    className="size-3 lg:size-[1.1vw]"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m5.2 10.3 3.1 3.1 6.5-6.6"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-sans text-[13.5px] font-normal leading-[1.32] tracking-[-0.01em] text-[#3c3f4a] lg:text-[1.18vw]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile / Tablet Responsive Grid for the 6 Holographic Industry Thumbnails */}
        <div className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
          {INDUSTRY_THUMBNAILS.map((thumb) => (
            <div
              key={thumb.title}
              className="group relative aspect-[16/10] w-full overflow-hidden rounded-[11px] border-[1.8px] border-white/90 bg-[#0e1526] shadow-[0_10px_24px_-6px_rgb(15_23_42/0.4)]"
            >
              <Image
                src={thumb.image}
                alt={thumb.alt}
                fill
                quality={85}
                sizes="(min-width: 768px) 32vw, (min-width: 640px) 48vw, 92vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1224]/80 via-transparent to-black/25" />
              <div className="absolute top-2.5 left-3 flex items-center gap-2 text-white drop-shadow-[0_1px_3px_rgb(0_0_0/0.8)]">
                {thumb.icon}
                <span className="font-sans text-[14px] font-bold tracking-[-0.01em]">
                  {thumb.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop 3D Curved Holographic Industry Thumbnails Array above the Robot */}
      <div
        aria-label="Industries we serve"
        className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
      >
        {INDUSTRY_THUMBNAILS.map((thumb) => (
          <div
            key={thumb.title}
            className={`group pointer-events-auto absolute overflow-hidden rounded-[0.72vw] border-[1.8px] border-white/85 bg-[#0e1526]/90 shadow-[0_0_22px_rgb(125_195_255/0.42),0_12px_26px_-6px_rgb(0_0_0/0.45)] backdrop-blur-[2px] transition-transform duration-300 hover:z-20 hover:scale-[1.03] ${thumb.desktopClass}`}
          >
            <Image
              src={thumb.image}
              alt={thumb.alt}
              fill
              quality={85}
              sizes="18vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Top HUD header gradient for crisp white icon & label */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#091022]/85 via-[#091022]/25 to-transparent" />
            {/* Subtle glowing inner border */}
            <div className="pointer-events-none absolute inset-0 rounded-[0.65vw] ring-1 ring-inset ring-sky-200/40" />

            {/* Top-Left Category Icon + Title */}
            <div className="absolute top-[0.6vw] right-[0.7vw] left-[0.75vw] flex items-center justify-between gap-1 text-white">
              <div className="flex items-center gap-[0.42vw] drop-shadow-[0_1px_3px_rgb(0_0_0/0.85)]">
                {thumb.icon}
                <span className="font-sans text-[1.06vw] font-bold tracking-[-0.015em] text-white">
                  {thumb.title}
                </span>
              </div>
              {/* Subtle Holographic HUD Window Dots */}
              <div className="flex items-center gap-[0.22vw] opacity-75" aria-hidden="true">
                <span className="size-[0.24vw] rounded-full bg-sky-200" />
                <span className="size-[0.24vw] rounded-full bg-white/70" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom-Center Scroll to Discover Indicator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-3 z-20 flex flex-col items-center justify-center text-center lg:bottom-[1.2vw]">
        {/* Mouse Pill Icon */}
        <div
          aria-hidden="true"
          className="flex h-[28px] w-[18px] items-start justify-center rounded-full border-[1.7px] border-white/90 bg-black/25 pt-1.5 shadow-[0_2px_8px_rgb(0_0_0/0.35)] backdrop-blur-[2px] lg:h-[2.65vw] lg:w-[1.68vw] lg:pt-[0.45vw]"
        >
          <span className="h-1.5 w-[2px] rounded-full bg-white lg:h-[0.55vw] lg:w-[0.16vw]" />
        </div>
        <span className="mt-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-white drop-shadow-[0_1px_4px_rgb(0_0_0/0.85)] lg:mt-[0.45vw] lg:text-[0.86vw]">
          SCROLL TO DISCOVER
        </span>
        <svg
          viewBox="0 0 16 10"
          className="mt-0.5 h-2.5 w-3.5 text-white drop-shadow-[0_1px_3px_rgb(0_0_0/0.85)] lg:mt-[0.2vw] lg:h-[0.65vw] lg:w-[1.05vw]"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="m2 2 6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
