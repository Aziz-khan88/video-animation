import Image from "next/image";
import Link from "next/link";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  ParallaxBackground,
} from "@/components/motion/MotionPrimitives";

const THUMBNAILS = [
  {
    title: "2D Animation",
    image: "/images/story-thumb-2d.jpg",
    href: "/2d",
  },
  {
    title: "3D Animation",
    image: "/images/story-thumb-3d.jpg",
    href: "#services",
  },
  {
    title: "Motion Graphics",
    image: "/images/story-thumb-motion.jpg",
    href: "#services",
  },
  {
    title: "Explainer Videos",
    image: "/images/story-thumb-explainer.jpg",
    href: "#services",
  },
] as const;

export function Story() {
  return (
    <section
      id="about"
      aria-labelledby="story-heading"
      className="relative isolate w-full overflow-hidden bg-white lg:min-h-[39.95vw]"
    >
      {/* Full-width panoramic background artwork with subtle scroll parallax */}
      <ParallaxBackground
        offset={22}
        scaleFrom={1.035}
        className="pointer-events-none relative aspect-[16/9] w-full overflow-hidden lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto"
      >
        <Image
          src="/images/story-bg.jpg"
          alt="Young adventurer with backpack sitting on a rocky cliff overlooking a fairytale castle city and floating islands at sunset"
          fill
          quality={85}
          sizes="100vw"
          className="object-cover object-[70%_center] lg:object-[center_22%]"
        />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent lg:hidden" />
      </ParallaxBackground>

      {/* Full-width content container matching the exact proportions of the 1024x409 reference */}
      <div className="flex w-full flex-col justify-between gap-10 px-6 py-12 sm:px-10 lg:min-h-[39.95vw] lg:flex-row lg:items-center lg:px-[4.3vw] lg:py-[4vw]">
        {/* Left Column: Eyebrow + Heading + Copy + Watch Showreel CTA */}
        <div className="relative z-10 max-w-[540px] lg:max-w-[36vw]">
          <Reveal
            as="p"
            y={16}
            className="font-sans text-[12px] font-bold uppercase tracking-[0.26em] text-[#ff251b] lg:text-[1.15vw]"
          >
            SHOWREEL
          </Reveal>

          <h2
            id="story-heading"
            className="mt-3 font-sans text-[clamp(2.5rem,5.05vw,5.25rem)] font-extrabold leading-[1.03] tracking-[-0.042em] text-[#0a0a0d] lg:mt-[1.4vw]"
          >
            <Reveal as="span" y={22} delay={0.06} className="block">
              Every Frame
            </Reveal>
            <Reveal as="span" y={22} delay={0.13} className="mt-[0.1vw] block">
              Tells a <span className="text-hero-gradient">Story.</span>
            </Reveal>
          </h2>

          <Reveal
            as="p"
            y={18}
            delay={0.2}
            className="mt-4 font-sans text-[clamp(0.95rem,1.26vw,1.35rem)] font-normal leading-[1.48] tracking-[-0.01em] text-[#55565e] lg:mt-[1.35vw]"
          >
            From concepts to captivating animated videos,
            <br className="hidden sm:inline" /> we turn ideas into unforgettable visual experiences.
          </Reveal>

          {/* Circular Play Button + Watch Showreel -> */}
          <Reveal y={18} delay={0.27} className="mt-7 lg:mt-[2.2vw]">
            <button
              type="button"
              className="group inline-flex items-center gap-4 text-left lg:gap-[1.8vw]"
            >
              <span className="grid size-[62px] shrink-0 place-items-center rounded-full border-[2.2px] border-[#ff4518] bg-white text-[#ff4518] shadow-[0_10px_28px_-6px_rgb(255_59_31/0.45)] transition-transform duration-200 group-hover:scale-105 lg:size-[6.35vw]">
                <svg
                  viewBox="0 0 24 24"
                  className="size-6 translate-x-[1.5px] fill-current lg:size-[2.15vw]"
                  aria-hidden="true"
                >
                  <path d="M7 4.8v14.4a1 1 0 0 0 1.52.85l11.5-7.2a1 1 0 0 0 0-1.7L8.52 3.95A1 1 0 0 0 7 4.8Z" />
                </svg>
              </span>

              <span className="inline-flex items-center gap-3 font-sans text-[16px] font-bold tracking-[-0.015em] text-[#0a0a0d] transition-colors group-hover:text-[#ff251b] lg:gap-[1.2vw] lg:text-[1.42vw]">
                <span>Watch Showreel</span>
                <svg
                  viewBox="0 0 20 20"
                  className="size-[18px] text-[#ff251b] transition-transform duration-200 group-hover:translate-x-1 lg:size-[1.45vw]"
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
              </span>
            </button>
          </Reveal>
        </div>

        {/* Right Column: 4 Stacked Video Category Thumbnail Cards */}
        <StaggerGroup
          stagger={0.09}
          delayChildren={0.12}
          className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:w-[16.4vw] lg:flex-col lg:gap-[1.2vw] lg:mr-[-1vw]"
        >
          {THUMBNAILS.map((item) => (
            <StaggerItem key={item.title} x={24} y={10}>
              <Link
                href={item.href}
                className="group relative block aspect-[168/66] w-full overflow-hidden rounded-[12px] border-[1.75px] border-white/90 bg-[#0d0e14] shadow-[0_12px_28px_-8px_rgb(0_0_0/0.55)] transition-transform duration-200 hover:-translate-y-0.5 lg:rounded-[0.95vw]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 17vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Bottom gradient vignette for crisp white label legibility */}
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Bottom-left title + bottom-right circular arrow button */}
                <span className="absolute inset-x-3 bottom-2.5 flex items-center justify-between gap-2 lg:inset-x-[1vw] lg:bottom-[0.65vw]">
                  <span className="truncate font-sans text-[14px] font-bold tracking-[-0.015em] text-white drop-shadow-xs lg:text-[1.12vw]">
                    {item.title}
                  </span>
                  <span className="grid size-6 shrink-0 place-items-center rounded-full border border-white/75 bg-black/35 text-white backdrop-blur-[2px] transition-colors group-hover:border-[#ff4518] group-hover:bg-[#ff4518] lg:size-[2vw]">
                    <svg viewBox="0 0 20 20" className="size-3 lg:size-[0.95vw]" fill="none" aria-hidden="true">
                      <path
                        d="M5 10h10M11 6l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
