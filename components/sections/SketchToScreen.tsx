import Image from "next/image";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

const STAGES = [
  {
    label: "CONCEPT",
    image: "/images/sketch-concept.jpg",
    alt: "Hand-drawn pencil concept sketch of a cheerful young boy with tousled hair and hoodie",
    widthClass: "lg:w-[13.48vw]",
    objectPosition: "object-[center_35%]",
  },
  {
    label: "STORYBOARD",
    image: "/images/sketch-storyboard.jpg",
    alt: "Black and white storyboard panel sketch of the boy looking toward a fairytale castle",
    widthClass: "lg:w-[14.75vw]",
    objectPosition: "object-[center_45%]",
  },
  {
    label: "ANIMATION",
    image: "/images/sketch-animation.jpg",
    alt: "Full-color 3D animated portrait of the smiling boy in warm golden sunset lighting",
    widthClass: "lg:w-[15.33vw]",
    objectPosition: "object-[center_28%]",
  },
  {
    label: "FINAL RESULT",
    image: "/images/sketch-final.jpg",
    alt: "Final 3D animated scene of the boy on a rocky cliff overlooking floating islands and a fairytale castle at sunset",
    widthClass: "lg:w-[23.14vw]",
    objectPosition: "object-center",
  },
] as const;

export function SketchToScreen() {
  return (
    <section
      id="process"
      aria-labelledby="sketch-to-screen-heading"
      className="relative isolate w-full overflow-hidden bg-white lg:min-h-[35.55vw]"
    >
      {/* Subtle diagonal soft gray-blue wave background matching reference */}
      <svg
        viewBox="0 0 1024 364"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      >
        <path
          d="M0 310 Q 520 260 905 0 L 1024 0 L 1024 364 L 0 364 Z"
          fill="#f8f9fc"
        />
      </svg>

      {/* Full-width container calibrated to 1024x364 reference coordinates */}
      <div className="flex w-full flex-col justify-between gap-10 px-6 py-14 sm:px-10 lg:min-h-[35.55vw] lg:flex-row lg:items-start lg:gap-[1.15vw] lg:pl-[3.22vw] lg:pr-[2.93vw] lg:pt-[6.74vw] lg:pb-[5.5vw]">
        {/* Left Column: Eyebrow + Heading + Description */}
        <div className="w-full max-w-[460px] shrink-0 lg:w-[22.8vw] lg:max-w-none lg:pt-[0.1vw]">
          <Reveal y={16} className="flex items-center gap-3 lg:gap-[0.95vw]">
            <span className="whitespace-nowrap font-sans text-[11px] font-bold uppercase tracking-[0.115em] text-[#ff251b] lg:text-[0.98vw]">
              FROM SKETCH TO SCREEN
            </span>
            <span
              aria-hidden="true"
              className="h-[2.5px] w-10 shrink-0 rounded-full bg-gradient-to-r from-[#ff251b] to-[#ff7a00] lg:h-[0.22vw] lg:w-[3.85vw]"
            />
          </Reveal>

          <h2
            id="sketch-to-screen-heading"
            className="mt-3 font-sans text-[clamp(2rem,4.08vw,4.25rem)] font-extrabold leading-[1.03] tracking-[-0.045em] text-[#0a0a0d] lg:mt-[1.65vw]"
          >
            <Reveal as="span" y={20} delay={0.06} className="block sm:whitespace-nowrap">
              From Sketch
            </Reveal>
            <Reveal as="span" y={20} delay={0.12} className="mt-[0.1vw] block sm:whitespace-nowrap">
              to Screen<span className="text-[#ff3b1f]">.</span>
            </Reveal>
          </h2>

          <Reveal
            as="p"
            y={18}
            delay={0.18}
            className="mt-4 font-sans text-[14px] font-normal leading-[1.48] tracking-[-0.01em] text-[#636773] lg:mt-[1.65vw] lg:w-[22.4vw] lg:text-[1.14vw]"
          >
            We turn ideas, sketches and concepts
            <br className="hidden lg:inline" /> into stunning animated videos that
            <br className="hidden lg:inline" /> inspire, engage and bring your story
            <br className="hidden lg:inline" /> to life.
          </Reveal>
        </div>

        {/* Right Column: 4 Stage Cards + Overlapping Circular Arrows + Bottom Labels */}
        <StaggerGroup
          stagger={0.11}
          delayChildren={0.1}
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:w-auto lg:items-start lg:gap-[1.32vw]"
        >
          {STAGES.map((stage, index) => (
            <StaggerItem
              key={stage.label}
              y={24}
              scale={0.98}
              className={`group relative flex flex-col items-center ${stage.widthClass}`}
            >
              {/* Card Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[12px] bg-[#f5efe6] shadow-[0_10px_26px_-8px_rgb(15_23_42/0.16)] transition-transform duration-300 group-hover:-translate-y-1 lg:aspect-auto lg:h-[19.92vw] lg:rounded-[0.95vw]">
                <Image
                  src={stage.image}
                  alt={stage.alt}
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${stage.objectPosition}`}
                />
              </div>

              {/* Overlapping White Circular Arrow Badge between cards (Desktop) */}
              {index < STAGES.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-[12.25vw] -right-[0.66vw] z-20 hidden size-[3.52vw] translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#ff3b1f] shadow-[0_6px_18px_rgb(0_0_0/0.13)] lg:grid"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="size-[1.65vw]"
                    fill="none"
                  >
                    <path
                      d="M4.2 10h11.2M10.8 5.2 15.6 10l-4.8 4.8"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}

              {/* Bottom Stage Label */}
              <p className="mt-3 text-center font-sans text-[13px] font-extrabold uppercase tracking-[0.025em] text-[#17181c] lg:mt-[1.22vw] lg:text-[1.16vw]">
                {stage.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
