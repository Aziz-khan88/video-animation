import Image from "next/image";
import Link from "next/link";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  ParallaxBackground,
} from "@/components/motion/MotionPrimitives";

const FEATURES = [
  {
    title: "Character Animation",
    description: "Expressive, believable and full of personality.",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 lg:size-[2.05vw]" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="9.2" cy="10.2" r="1.1" fill="currentColor" />
        <circle cx="14.8" cy="10.2" r="1.1" fill="currentColor" />
        <path
          d="M8.5 13.6c.8 1.8 2.1 2.7 3.5 2.7s2.7-.9 3.5-2.7"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Explainer Videos",
    description: "Simplify complex ideas with engaging stories.",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 lg:size-[2.05vw]" fill="none" aria-hidden="true">
        <path
          d="M12 6.5c-1.8-1.2-4.2-1.5-6.5-1.2a.9.9 0 0 0-.8.9v10.5c0 .5.4.9.9.9 2.2-.2 4.5.2 6.4 1.4m0-12.5c1.8-1.2 4.2-1.5 6.5-1.2.5.1.8.4.8.9v10.5c0 .5-.4.9-.9.9-2.2-.2-4.5.2-6.4 1.4m0-12.5v12.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Educational Content",
    description: "Make learning fun and memorable.",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 lg:size-[2.05vw]" fill="none" aria-hidden="true">
        <path
          d="M3.2 9.6 12 5.2l8.8 4.4L12 14 3.2 9.6Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M6.8 11.6v4.2c0 1.4 2.4 2.8 5.2 2.8s5.2-1.4 5.2-2.8v-4.2M20.8 9.8v5.4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Custom Illustration",
    description: "Unique 2D art tailored to your brand.",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 lg:size-[2.05vw]" fill="none" aria-hidden="true">
        <path
          d="m14.8 6.2 3 3M18.9 5.1a2.1 2.1 0 0 1 0 3l-8.3 8.3c-.4.4-.9.7-1.4.8l-3.4.8.8-3.4c.1-.5.4-1 .8-1.4l8.3-8.3a2.1 2.1 0 0 1 3.2.2Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export function TwoDAnimation() {
  return (
    <section
      id="services"
      aria-labelledby="two-d-animation-heading"
      className="relative isolate w-full overflow-hidden bg-white lg:h-[56.25vw]"
    >
      {/* Full-width 16:9 split sketch-to-final background artwork with subtle scroll parallax */}
      <ParallaxBackground
        offset={22}
        scaleFrom={1.03}
        className="pointer-events-none relative aspect-[16/9] w-full overflow-hidden lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto"
      >
        <Image
          src="/images/two-d-animation-bg.jpg"
          alt="Hand-drawn 2D character concept sketch transitioning into a vibrant full-color animated girl reaching forward in a fantasy sunset world"
          fill
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent lg:hidden" />
      </ParallaxBackground>

      {/* Full-width content container calibrated to 1024x576 reference coordinates */}
      <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-10 lg:h-[56.25vw] lg:px-[4.59vw] lg:py-0">
        <div className="relative z-10 max-w-[540px] lg:max-w-[43vw]">
          {/* Eyebrow + Gradient Line */}
          <Reveal y={16} className="flex items-center gap-3.5 lg:gap-[1.85vw]">
            <span className="whitespace-nowrap font-sans text-[12px] font-bold uppercase tracking-[0.24em] text-[#e5251a] lg:text-[1.15vw]">
              2D ANIMATION
            </span>
            <span
              aria-hidden="true"
              className="h-[2px] w-12 shrink-0 rounded-full bg-gradient-to-r from-[#e5251a] to-[#d99b26] lg:h-[0.2vw] lg:w-[6.05vw]"
            />
          </Reveal>

          {/* Display Heading */}
          <h2
            id="two-d-animation-heading"
            className="mt-3 font-sans text-[clamp(1.95rem,5.15vw,5.35rem)] font-extrabold leading-[1.02] tracking-[-0.044em] text-[#0a0a0d] lg:mt-[0.95vw]"
          >
            <Reveal as="span" y={22} delay={0.06} className="block sm:whitespace-nowrap">
              Characters
            </Reveal>
            <Reveal as="span" y={22} delay={0.12} className="mt-[0.06vw] block sm:whitespace-nowrap">
              That <span className="text-hero-gradient">Come to Life.</span>
            </Reveal>
          </h2>

          {/* Lead Paragraph */}
          <Reveal
            as="p"
            y={18}
            delay={0.18}
            className="mt-4 font-sans text-[15px] font-normal leading-[1.44] tracking-[-0.01em] text-[#565863] lg:mt-[1.3vw] lg:text-[1.34vw]"
          >
            Expressive 2D animation for powerful storytelling.
            <br className="hidden sm:inline" /> We craft memorable characters, rich emotions and
            <br className="hidden sm:inline" /> beautiful visuals that bring your ideas to life.
          </Reveal>

          {/* 4 Feature Items */}
          <StaggerGroup
            as="ul"
            stagger={0.08}
            delayChildren={0.22}
            className="mt-6 space-y-3.5 lg:mt-[1.75vw] lg:space-y-[0.88vw]"
          >
            {FEATURES.map((item) => (
              <StaggerItem
                as="li"
                key={item.title}
                y={16}
                className="group flex items-center gap-4 lg:gap-[1.75vw]"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#f8dcd1] bg-[#fdf1ed] text-[#e04f26] transition-transform duration-200 group-hover:scale-105 lg:size-[4.2vw]">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-sans text-[15px] font-bold leading-[1.18] tracking-[-0.015em] text-[#0c0d12] lg:text-[1.34vw]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 font-sans text-[13px] font-normal leading-[1.3] text-[#686a74] lg:mt-[0.18vw] lg:text-[1.12vw]">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Explore 2D Animation CTA Button */}
          <Reveal y={18} delay={0.42} className="mt-7 lg:mt-[1.75vw]">
            <Link
              href="/2d"
              className="group bg-cta-gradient inline-flex h-[48px] items-center justify-center gap-3 rounded-[10px] px-7 font-sans text-[15px] font-bold tracking-[-0.01em] text-white shadow-[0_12px_28px_-6px_rgb(255_45_27/0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-6px_rgb(255_45_27/0.55)] lg:h-[4.45vw] lg:w-[24.9vw] lg:gap-[1.1vw] lg:rounded-[0.9vw] lg:px-0 lg:text-[1.36vw]"
            >
              <span>Explore 2D Animation</span>
              <svg
                viewBox="0 0 20 20"
                className="size-4 transition-transform duration-200 group-hover:translate-x-1 lg:size-[1.35vw]"
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
