import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";

export function PortfolioHero() {
  return (
    <section
      id="portfolio-hero"
      aria-labelledby="portfolio-hero-heading"
      className="relative isolate min-h-svh w-full overflow-hidden bg-white lg:min-h-[56.25vw]"
    >
      {/* Full-bleed studio background image extending behind the header across 100% width */}
      <div className="pointer-events-none absolute inset-0 -z-10 w-full">
        <Image
          src="/images/portfolio-hero-bg.jpg"
          alt="Animation director's studio featuring a VideoAnimation.us director's chair, dual monitors displaying 3D castle and character animations, pinned concept art thumbnails on the wall, vintage film reels, and a clapperboard"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[74%_center] lg:object-right"
        />
        {/* Soft left fade on smaller viewports */}
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white/90 to-transparent lg:hidden" />
      </div>

      {/* Top Header with Portfolio link */}
      <Header />

      {/* Full-width Hero Content Container calibrated to the 1024x576 reference */}
      <div className="w-full px-6 pt-6 pb-16 sm:px-10 lg:px-[3.35vw] lg:pt-[2.1vw] lg:pb-[4.2vw]">
        <div className="max-w-[540px] lg:max-w-[35vw]">
          {/* 01 Eyebrow Badge + Subtitle */}
          <div className="flex items-center gap-4 lg:gap-[2.05vw]">
            <span className="grid h-[46px] w-[48px] shrink-0 place-items-center rounded-[10px] border-[1.5px] border-[#eb9860] bg-[#fffaf6] font-sans text-[18px] font-extrabold tracking-[-0.02em] text-[#0c0c10] shadow-[0_2px_8px_rgb(235_152_96/0.12)] lg:h-[4.68vw] lg:w-[4.78vw] lg:rounded-[0.95vw] lg:text-[1.78vw]">
              01
            </span>
            <div>
              <p className="font-sans text-[13px] font-bold uppercase leading-[1.15] tracking-[0.04em] text-[#0c0c10] lg:text-[1.38vw]">
                PORTFOLIO HERO
              </p>
              <p className="mt-1 font-sans text-[13px] font-normal leading-[1.2] tracking-[-0.01em] text-[#6d7079] lg:mt-[0.28vw] lg:text-[1.32vw]">
                Our work. Your next big idea.
              </p>
            </div>
          </div>

          {/* 3-Line Display Heading */}
          <h1
            id="portfolio-hero-heading"
            className="mt-6 font-sans text-[clamp(2.35rem,6.35vw,6.6rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#0a0a0d] lg:mt-[2.45vw]"
          >
            <span className="block sm:whitespace-nowrap">Stories</span>
            <span className="mt-[0.04vw] block sm:whitespace-nowrap">
              That <span className="bg-[linear-gradient(92deg,#ff4a14_0%,#f36d17_100%)] bg-clip-text text-transparent">Move</span>
            </span>
            <span className="mt-[0.04vw] block sm:whitespace-nowrap bg-[linear-gradient(92deg,#ff3d16_0%,#f36d17_100%)] bg-clip-text text-transparent">
              People.
            </span>
          </h1>

          {/* 3-Line Description Copy */}
          <p className="mt-5 font-sans text-[clamp(0.95rem,1.46vw,1.52rem)] font-normal leading-[1.42] tracking-[-0.01em] text-[#666973] lg:mt-[1.85vw]">
            A collection of animation projects
            <br className="hidden sm:inline" /> created for brands, authors and
            <br className="hidden sm:inline" /> visionaries around the world.
          </p>

          {/* Explore Our Work CTA Button */}
          <div className="mt-7 lg:mt-[2.25vw]">
            <Link
              href="#work"
              className="inline-flex h-[52px] items-center justify-center gap-4 rounded-[12px] bg-[linear-gradient(92deg,#ff3419_0%,#ff5c15_55%,#f47619_100%)] px-7 font-sans text-[15px] font-medium tracking-[-0.01em] text-white shadow-[0_12px_26px_-6px_rgb(255_68_22/0.46)] transition-transform duration-200 hover:-translate-y-0.5 lg:h-[5.25vw] lg:w-[22.25vw] lg:gap-[1.5vw] lg:rounded-[1.08vw] lg:px-0 lg:text-[1.48vw]"
            >
              <span>Explore Our Work</span>
              <svg viewBox="0 0 20 20" className="size-[18px] lg:size-[1.55vw]" fill="none" aria-hidden="true">
                <path
                  d="M4.2 10h11.6M10.8 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
