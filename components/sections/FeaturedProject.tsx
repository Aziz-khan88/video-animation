import Image from "next/image";
import Link from "next/link";

export function FeaturedProject() {
  return (
    <section
      id="featured-project"
      aria-labelledby="featured-project-heading"
      className="w-full bg-white px-6 py-8 sm:px-10 lg:px-[2.34vw] lg:py-[2.2vw]"
    >
      {/* Framed Rounded Card with Warm Amber-Orange Border */}
      <div className="relative isolate w-full overflow-hidden rounded-[18px] border-[1.5px] border-[#df9755] bg-white shadow-[0_14px_40px_-12px_rgb(15_23_42/0.08)] lg:min-h-[47.46vw] lg:rounded-[1.25vw]">
        {/* Full-bleed Right-Side Autumn Girl & Puppy Artwork */}
        <div className="pointer-events-none relative aspect-[16/9] w-full overflow-hidden lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
          <Image
            src="/images/portfolio-featured-bg.jpg"
            alt="Young animated girl in a red knit sweater peacefully hugging her fluffy golden puppy amidst falling autumn leaves and warm golden sunlight"
            fill
            quality={90}
            sizes="(min-width: 1024px) 96vw, 100vw"
            className="object-cover object-[74%_center] lg:object-right"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent lg:hidden" />
        </div>

        {/* Left Content Column calibrated to the 1024x576 reference */}
        <div className="relative z-10 w-full px-6 py-8 sm:px-10 lg:max-w-[48vw] lg:px-[2.15vw] lg:pt-[2.05vw] lg:pb-[2.35vw]">
          {/* Top Eyebrow Row: 03 Red-Orange Badge + FEATURED PROJECT */}
          <div className="flex items-center gap-4 lg:gap-[2.7vw]">
            <span className="grid h-[54px] w-[58px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#f31820_0%,#ff4b18_60%,#ff7614_100%)] font-sans text-[22px] font-extrabold tracking-[-0.03em] text-white shadow-[0_8px_20px_-6px_rgb(243_24_32/0.45)] lg:h-[5.75vw] lg:w-[6.25vw] lg:rounded-[1.15vw] lg:text-[2.35vw]">
              03
            </span>
            <div>
              <p className="font-sans text-[19px] font-extrabold uppercase leading-[1.1] tracking-[0.04em] text-[#0c0c10] lg:text-[2.15vw]">
                FEATURED PROJECT
              </p>
              <p className="mt-1 font-sans text-[14px] font-normal leading-[1.25] tracking-[-0.01em] text-[#6d7079] lg:mt-[0.35vw] lg:text-[1.46vw]">
                A closer look at one of our recent creations.
              </p>
            </div>
          </div>

          {/* 2-Line Display Heading */}
          <h2
            id="featured-project-heading"
            className="mt-6 font-sans text-[clamp(2.15rem,4.78vw,4.95rem)] font-extrabold leading-[1.02] tracking-[-0.042em] text-[#0a0a0d] lg:mt-[3.5vw]"
          >
            <span className="block whitespace-nowrap">A Heartwarming</span>
            <span className="mt-[0.05vw] block whitespace-nowrap">
              Animated{" "}
              <span className="bg-[linear-gradient(92deg,#f11920_0%,#ff5516_52%,#ff9114_100%)] bg-clip-text text-transparent">
                Story
              </span>
            </span>
          </h2>

          {/* Category Pills Row */}
          <div className="mt-5 flex flex-wrap items-center gap-3 lg:mt-[1.6vw] lg:gap-[1.05vw]">
            <span className="inline-flex h-[34px] items-center justify-center rounded-full border border-[#c7cbd4] bg-white/95 px-5 font-sans text-[11.5px] font-medium uppercase tracking-[0.04em] text-[#3a3d45] lg:h-[3.52vw] lg:min-w-[15.3vw] lg:px-[1.8vw] lg:text-[1.14vw]">
              2D ANIMATION
            </span>
            <span className="inline-flex h-[34px] items-center justify-center rounded-full border border-[#c7cbd4] bg-white/95 px-5 font-sans text-[11.5px] font-medium uppercase tracking-[0.04em] text-[#3a3d45] lg:h-[3.52vw] lg:min-w-[18.2vw] lg:px-[1.8vw] lg:text-[1.14vw]">
              CHILDREN&apos;S BOOK
            </span>
          </div>

          {/* 4-Line Story Description */}
          <p className="mt-5 font-sans text-[15px] font-normal leading-[1.4] tracking-[-0.01em] text-[#666973] lg:mt-[1.85vw] lg:text-[1.52vw]">
            A touching story about friendship,
            <br className="hidden sm:inline" /> courage and never giving up,
            <br className="hidden sm:inline" /> brought to life with beautiful
            <br className="hidden sm:inline" /> hand-drawn animation.
          </p>

          {/* Bottom Action Buttons: Watch Project + Project Details */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5 lg:mt-[2.2vw] lg:gap-[1.15vw]">
            <Link
              href="#work"
              className="inline-flex h-[48px] items-center justify-center gap-3.5 rounded-[12px] bg-[linear-gradient(92deg,#ef1720_0%,#ff4d17_52%,#ff8b14_100%)] px-6 font-sans text-[15px] font-bold tracking-[-0.01em] text-white shadow-[0_10px_24px_-6px_rgb(255_58_23/0.45)] transition-transform duration-150 hover:-translate-y-0.5 lg:h-[4.68vw] lg:w-[21.48vw] lg:gap-[1.5vw] lg:rounded-[1.15vw] lg:px-0 lg:text-[1.48vw]"
            >
              <span>Watch Project</span>
              <svg viewBox="0 0 20 20" className="size-[18px] lg:size-[1.5vw]" fill="none" aria-hidden="true">
                <path
                  d="M4.2 10h11.6M10.8 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="#work"
              className="inline-flex h-[48px] items-center justify-center rounded-[12px] border-[1.4px] border-[#b4533a] bg-white/95 px-6 font-sans text-[15px] font-bold tracking-[-0.01em] text-[#0c0c10] shadow-[0_2px_10px_rgb(10_10_13/0.04)] backdrop-blur-xs transition-colors hover:border-[#ef1720] hover:text-[#ef1720] lg:h-[4.68vw] lg:w-[17.95vw] lg:rounded-[1.15vw] lg:px-0 lg:text-[1.48vw]"
            >
              Project Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
