import Image from "next/image";
import Link from "next/link";

const CHECKLIST_ITEMS = [
  "Logo Animation",
  "Kinetic Typography",
  "Infographics",
  "UI/UX Animation",
  "Explainer Videos",
] as const;

export function MotionGraphics() {
  return (
    <section
      aria-labelledby="motion-graphics-heading"
      className="relative isolate w-full overflow-hidden bg-white lg:h-[56.25vw]"
    >
      {/* Full-width 16:9 3D isometric motion-graphics dashboard background artwork */}
      <div className="pointer-events-none relative aspect-[16/9] w-full overflow-hidden lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <Image
          src="/images/motion-graphics-bg.jpg"
          alt="3D isometric motion-graphics dashboard with a central video play screen surrounded by floating analytics charts, vector Bezier curves, and video editing cards"
          fill
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent lg:hidden" />
      </div>

      {/* Full-width content container calibrated to 1024x576 reference coordinates */}
      <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-10 lg:h-[56.25vw] lg:px-[4.88vw] lg:py-0">
        <div className="relative z-10 max-w-[540px] lg:max-w-[42vw]">
          {/* Eyebrow */}
          <p className="whitespace-nowrap font-sans text-[13px] font-extrabold uppercase tracking-[0.22em] text-hero-gradient lg:text-[1.45vw]">
            MOTION GRAPHICS
          </p>

          {/* Display Heading */}
          <h2
            id="motion-graphics-heading"
            className="mt-3 font-sans text-[clamp(2.15rem,4.68vw,4.85rem)] font-extrabold leading-[1.04] tracking-[-0.043em] text-[#0a0a0d] lg:mt-[1.4vw]"
          >
            <span className="block whitespace-nowrap">Design That</span>
            <span className="mt-[0.06vw] block whitespace-nowrap">
              Never Stands Still<span className="text-[#ff251b]">.</span>
            </span>
          </h2>

          {/* 3-Line Lead Paragraph */}
          <p className="mt-4 font-sans text-[15px] font-normal leading-[1.48] tracking-[-0.01em] text-[#5a5d68] lg:mt-[1.5vw] lg:text-[1.4vw]">
            Dynamic motion graphics for modern brands.
            <br className="hidden sm:inline" /> We turn ideas into visually compelling animations
            <br className="hidden sm:inline" /> that communicate, engage, and drive results.
          </p>

          {/* 5 Checklist Items */}
          <ul className="mt-6 space-y-2.5 lg:mt-[1.5vw] lg:space-y-[0.54vw]">
            {CHECKLIST_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-3.5 lg:gap-[1.35vw]">
                <span className="grid size-6 shrink-0 place-items-center rounded-full border-[1.8px] border-[#ff3b1f] text-[#ff3b1f] lg:size-[2.5vw]">
                  <svg
                    viewBox="0 0 20 20"
                    className="size-3.5 lg:size-[1.35vw]"
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
                <span className="font-sans text-[15px] font-normal leading-[1.3] text-[#1c1d22] lg:text-[1.46vw]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* See Motion Graphics CTA Button */}
          <div className="mt-7 lg:mt-[2.1vw]">
            <Link
              href="#work"
              className="bg-cta-gradient inline-flex h-[52px] items-center justify-center gap-3 rounded-[11px] px-7 font-sans text-[15px] font-bold tracking-[-0.01em] text-white shadow-[0_12px_28px_-6px_rgb(255_45_27/0.45)] transition-transform duration-150 hover:-translate-y-0.5 lg:h-[5.47vw] lg:w-[25.49vw] lg:gap-[1.2vw] lg:rounded-[1.05vw] lg:px-0 lg:text-[1.46vw]"
            >
              <span>See Motion Graphics</span>
              <svg
                viewBox="0 0 20 20"
                className="size-4 lg:size-[1.45vw]"
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
          </div>
        </div>
      </div>
    </section>
  );
}
