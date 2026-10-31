import Image from "next/image";
import Link from "next/link";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  ParallaxBackground,
} from "@/components/motion/MotionPrimitives";

const CHECKLIST_ITEMS = [
  "3D Character Animation",
  "Product Visualization",
  "3D Explainer Videos",
  "Architectural & Industrial Animation",
] as const;

export function ThreeDAnimation() {
  return (
    <section
      aria-labelledby="three-d-animation-heading"
      className="relative isolate w-full overflow-hidden bg-white lg:h-[56.25vw]"
    >
      {/* Full-width 16:9 3D robot studio background artwork with subtle scroll parallax */}
      <ParallaxBackground
        offset={24}
        scaleFrom={1.035}
        className="pointer-events-none relative aspect-[16/9] w-full overflow-hidden lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto"
      >
        <Image
          src="/images/three-d-animation-bg.jpg"
          alt="Friendly glossy white and red 3D robot character with glowing crescent eyes reaching toward the viewer in an animation studio"
          fill
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent lg:hidden" />
      </ParallaxBackground>

      {/* Full-width content container calibrated to 1024x576 reference coordinates */}
      <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-10 lg:h-[56.25vw] lg:px-[4.49vw] lg:py-0">
        <div className="relative z-10 max-w-[540px] lg:max-w-[44vw]">
          {/* Eyebrow + Gradient Line */}
          <Reveal y={16} className="flex items-center gap-3.5 lg:gap-[1.27vw]">
            <span className="whitespace-nowrap font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-[#e5251a] lg:text-[1.12vw]">
              3D ANIMATION
            </span>
            <span
              aria-hidden="true"
              className="h-[2px] w-24 shrink-0 rounded-full bg-gradient-to-r from-[#e5251a] to-[#d99b26] lg:h-[0.18vw] lg:w-[14.25vw]"
            />
          </Reveal>

          {/* Display Heading */}
          <h2
            id="three-d-animation-heading"
            className="mt-3 font-sans text-[clamp(2rem,5.55vw,5.75rem)] font-extrabold leading-[1.03] tracking-[-0.043em] text-[#0a0a0d] lg:mt-[1.5vw]"
          >
            <Reveal as="span" y={22} delay={0.06} className="block sm:whitespace-nowrap">
              Give Every
            </Reveal>
            <Reveal as="span" y={22} delay={0.12} className="mt-[0.06vw] block sm:whitespace-nowrap">
              Detail <span className="text-hero-gradient">Dimension.</span>
            </Reveal>
          </h2>

          {/* 5-Line Lead Paragraph */}
          <Reveal
            as="p"
            y={18}
            delay={0.18}
            className="mt-4 font-sans text-[15px] font-normal leading-[1.46] tracking-[-0.01em] text-[#565863] lg:mt-[1.6vw] lg:text-[1.35vw]"
          >
            Stunning 3D animation that makes your
            <br className="hidden sm:inline" /> brand unforgettable. From expressive
            <br className="hidden sm:inline" /> characters to immersive worlds, we bring
            <br className="hidden sm:inline" /> your ideas to life with cinematic quality
            <br className="hidden sm:inline" /> and technical precision.
          </Reveal>

          {/* 4 Checklist Items */}
          <StaggerGroup
            as="ul"
            stagger={0.08}
            delayChildren={0.22}
            className="mt-6 space-y-2.5 lg:mt-[1.6vw] lg:space-y-[0.62vw]"
          >
            {CHECKLIST_ITEMS.map((item) => (
              <StaggerItem
                as="li"
                key={item}
                y={14}
                className="flex items-center gap-3 lg:gap-[1.25vw]"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full border-[1.8px] border-[#e53e1a] text-[#e53e1a] lg:size-[2.3vw]">
                  <svg
                    viewBox="0 0 20 20"
                    className="size-3.5 lg:size-[1.25vw]"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m5.2 10.3 3.1 3.1 6.5-6.6"
                      stroke="currentColor"
                      strokeWidth="2.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-sans text-[14px] font-normal leading-[1.3] text-[#4b4d57] lg:text-[1.34vw]">
                  {item}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Explore 3D Animation CTA Button */}
          <Reveal y={18} delay={0.4} className="mt-7 lg:mt-[1.9vw]">
            <Link
              href="/portfolio#three-d-portfolio"
              className="group bg-cta-gradient inline-flex h-[50px] items-center justify-center gap-3 rounded-[11px] px-7 font-sans text-[15px] font-bold tracking-[-0.01em] text-white shadow-[0_12px_28px_-6px_rgb(255_45_27/0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-6px_rgb(255_45_27/0.55)] lg:h-[5.08vw] lg:w-[25.49vw] lg:gap-[1.15vw] lg:rounded-[1vw] lg:px-0 lg:text-[1.38vw]"
            >
              <span>Explore 3D Animation</span>
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
