import Image from "next/image";
import Link from "next/link";

export function CtaFooter() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative w-full overflow-hidden bg-white lg:h-[46.58vw]"
    >
      {/* Full-bleed background illustration (boy on cliff overlooking sunset valley & castle) */}
      <div className="pointer-events-none relative aspect-[1024/477] w-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
        <Image
          src="/images/cta-bg.jpg"
          alt="Boy with backpack sitting on a rocky cliff at sunset overlooking a glowing fairytale castle and winding river valley"
          fill
          quality={85}
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Subtle left white blend to guarantee crisp typography legibility */}
        <div
          aria-hidden="true"
          className="hidden lg:block lg:absolute lg:inset-y-0 lg:left-0 lg:w-[41vw] lg:bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_76%,rgba(255,255,255,0)_100%)]"
        />
      </div>

      {/* Foreground Content Container */}
      <div className="relative z-10 w-full px-6 py-10 sm:px-10 lg:h-full lg:px-[4.39vw] lg:py-0">
        {/* Top Brand Logo (y = 23..65 -> pt-[2.34vw]) */}
        <div className="lg:pt-[2.34vw]">
          <Link
            href="/"
            aria-label="VideoAnimation.us — Home"
            className="inline-flex items-center gap-2.5 lg:gap-[0.85vw]"
          >
            <svg
              viewBox="0 0 42 44"
              className="h-[36px] w-[34px] shrink-0 lg:h-[3.9vw] lg:w-[3.7vw]"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="cta-brand-play-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff1821" />
                  <stop offset="55%" stopColor="#ff4719" />
                  <stop offset="100%" stopColor="#ff6c11" />
                </linearGradient>
              </defs>
              <path
                d="M6.5 7.2c0-2.7 3-4.3 5.3-2.9l23.4 14.8c2.1 1.3 2.1 4.5 0 5.8L11.8 39.7c-2.3 1.4-5.3-.2-5.3-2.9V7.2Z"
                fill="none"
                stroke="url(#cta-brand-play-grad)"
                strokeWidth="4.6"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-sans text-[20px] font-extrabold tracking-[-0.035em] text-[#0c0c10] lg:text-[1.98vw]">
              VideoAnimation.us
            </span>
          </Link>
        </div>

        {/* Eyebrow Row: ANIMATION • STORYTELLING • REAL RESULTS (y = 92..103) */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5 lg:mt-[2.55vw] lg:gap-[1.15vw]">
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#6d707b] lg:text-[0.94vw]">
            ANIMATION
          </span>
          <span
            aria-hidden="true"
            className="size-1 rounded-full bg-[#ff3b1f] lg:size-[0.36vw]"
          />
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#6d707b] lg:text-[0.94vw]">
            STORYTELLING
          </span>
          <span
            aria-hidden="true"
            className="size-1 rounded-full bg-[#ff3b1f] lg:size-[0.36vw]"
          />
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#6d707b] lg:text-[0.94vw]">
            REAL RESULTS
          </span>
        </div>

        {/* Main 2-Line Display Heading (y = 120..239) */}
        <h2
          id="cta-heading"
          className="mt-3 font-sans text-[clamp(2.35rem,5.42vw,5.65rem)] font-extrabold leading-[1.03] tracking-[-0.044em] text-[#0a0a0d] lg:mt-[1.45vw]"
        >
          <span className="block whitespace-nowrap">Let’s Bring Your</span>
          <span className="mt-[0.04em] block whitespace-nowrap">
            Idea to <span className="text-hero-gradient">Life.</span>
          </span>
        </h2>

        {/* 2-Line Lead Paragraph (y = 259..305) */}
        <p className="mt-4 max-w-[480px] font-sans text-[15px] font-normal leading-[1.46] tracking-[-0.01em] text-[#565863] lg:mt-[1.5vw] lg:max-w-none lg:text-[1.42vw]">
          <span className="lg:block lg:whitespace-nowrap">
            Whether you have a concept, a sketch or a big vision,
          </span>
          <span className="lg:block lg:whitespace-nowrap">
            we’re here to turn it into an unforgettable animated video.
          </span>
        </p>

        {/* Dual CTA Buttons Row (y = 317..370) */}
        <div className="mt-6 flex flex-wrap items-center gap-3.5 lg:mt-[1.65vw] lg:gap-[1.25vw]">
          {/* Primary Gradient Button: Start a Project -> */}
          <Link
            href="#quote"
            className="inline-flex h-[48px] items-center justify-center gap-2.5 rounded-[10px] bg-cta-gradient px-6 font-sans text-[15px] font-semibold tracking-[-0.01em] text-white shadow-[0_12px_26px_-6px_rgb(255_37_27/0.48)] transition-transform duration-200 hover:-translate-y-0.5 lg:h-[4.69vw] lg:w-[20.02vw] lg:gap-[0.75vw] lg:rounded-[0.82vw] lg:px-0 lg:text-[1.38vw]"
          >
            <span>Start a Project</span>
            <svg
              viewBox="0 0 20 20"
              className="size-4 lg:size-[1.35vw]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 10h12M11.2 5.2 16 10l-4.8 4.8"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Secondary White Button: Watch Showreel */}
          <Link
            href="#showreel"
            className="inline-flex h-[48px] items-center justify-center gap-2.5 rounded-[10px] border border-[#dcdfe6] bg-white/95 px-5 font-sans text-[14.5px] font-bold tracking-[-0.015em] text-[#0c0c10] shadow-[0_2px_10px_rgb(10_10_13/0.04)] transition-transform duration-200 hover:-translate-y-0.5 lg:h-[4.69vw] lg:w-[17.87vw] lg:gap-[0.75vw] lg:rounded-[0.82vw] lg:px-0 lg:text-[1.28vw]"
          >
            {/* Circular Red-Orange Outlined Play Icon */}
            <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border-[2px] border-[#ff3b1f] text-[#ff3b1f] lg:size-[2.55vw] lg:border-[0.18vw]">
              <svg
                viewBox="0 0 16 16"
                className="ml-[1px] size-3 lg:size-[1.05vw]"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.5 3.2c0-.6.65-.96 1.16-.64l6.2 3.8c.5.3.5 1 0 1.3l-6.2 3.8c-.51.32-1.16-.04-1.16-.64V3.2Z" />
              </svg>
            </span>
            <span>Watch Showreel</span>
          </Link>
        </div>

        {/* Bottom 3 Trust Features Row (y = 394..432) */}
        <div className="mt-8 flex flex-wrap items-center gap-6 lg:mt-[2.4vw] lg:gap-[2.8vw]">
          {/* 1. Creative Partnership */}
          <div className="flex items-center gap-2.5 lg:gap-[0.85vw]">
            <svg
              viewBox="0 0 36 36"
              className="size-8 shrink-0 text-[#ff2e17] lg:size-[3.3vw]"
              fill="none"
              aria-hidden="true"
            >
              {/* Rays */}
              <path
                d="M18 3.5v2.8M6.8 8.2l2 2M3.5 18h2.8M6.8 27.8l2-2M29.2 8.2l-2 2M32.5 18h-2.8M29.2 27.8l-2-2"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
              />
              {/* Bulb outline */}
              <path
                d="M13.5 23.8c-2.5-1.4-4-4-4-7 0-4.7 3.8-8.4 8.5-8.4s8.5 3.7 8.5 8.4c0 3-1.5 5.6-4 7l-.6 2.7H14.1l-.6-2.7Z"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinejoin="round"
              />
              <path
                d="M14.8 29.5h6.4M16 32.5h4"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
              />
            </svg>
            <div className="font-sans text-[12px] font-medium leading-[1.28] text-[#2c2e35] lg:text-[1.05vw]">
              <span className="block">Creative</span>
              <span className="block">Partnership</span>
            </div>
          </div>

          {/* 2. Studio-Quality Production */}
          <div className="flex items-center gap-2.5 lg:gap-[0.85vw]">
            <svg
              viewBox="0 0 36 36"
              className="size-8 shrink-0 text-[#ff2e17] lg:size-[3.15vw]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M18 4.8 30 11.6v12.8L18 31.2 6 24.4V11.6L18 4.8Z"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <path
                d="M6 11.6 18 18.4l12-6.8M18 18.4v12.8"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="font-sans text-[12px] font-medium leading-[1.28] text-[#2c2e35] lg:text-[1.05vw]">
              <span className="block">Studio-Quality</span>
              <span className="block">Production</span>
            </div>
          </div>

          {/* 3. On-Time Delivery */}
          <div className="flex items-center gap-2.5 lg:gap-[0.85vw]">
            <svg
              viewBox="0 0 38 36"
              className="size-8 shrink-0 text-[#ff2e17] lg:size-[3.25vw]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 9.5h18.5v14.5H4V9.5Z"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <path
                d="M22.5 14h6.8l4.7 5v5h-11.5V14Z"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <circle
                cx="10.5"
                cy="25.5"
                r="3.2"
                fill="white"
                stroke="currentColor"
                strokeWidth="2.2"
              />
              <circle
                cx="28.5"
                cy="25.5"
                r="3.2"
                fill="white"
                stroke="currentColor"
                strokeWidth="2.2"
              />
            </svg>
            <div className="font-sans text-[12px] font-medium leading-[1.28] text-[#2c2e35] lg:text-[1.05vw]">
              <span className="block">On-Time</span>
              <span className="block">Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
