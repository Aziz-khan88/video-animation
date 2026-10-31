import Image from "next/image";
import Link from "next/link";

const ANIMATION_STYLES = [
  {
    id: 1,
    line1: "2D",
    line2: "Animation",
    image: "/images/portfolio-style-1-2d.jpg",
    alt: "Cheerful 2D animated girl with wavy brown hair smiling in warm golden sunlight",
    href: "/2d-animation",
  },
  {
    id: 2,
    line1: "3D",
    line2: "Animation",
    image: "/images/portfolio-style-2-3d.jpg",
    alt: "Cute glossy white 3D robot character with glowing blue eyes in an animation studio",
    href: "/3d-animation",
  },
  {
    id: 3,
    line1: "Motion",
    line2: "Graphics",
    image: "/images/portfolio-style-3-motion.jpg",
    alt: "Abstract 3D motion graphics with glowing red and orange geometric neon ribbons",
    href: "/motion-graphics",
  },
  {
    id: 4,
    line1: "Whiteboard",
    line2: "Animation",
    image: "/images/portfolio-style-4-whiteboard.jpg",
    alt: "Hand-drawn black line-art whiteboard illustration of a presenter with lightbulb and bar chart",
    href: "/whiteboard-animation",
  },
  {
    id: 5,
    line1: "Cel",
    line2: "Animation",
    image: "/images/portfolio-style-5-cel.jpg",
    alt: "Anime cel-shaded adventurer looking toward a sunlit hillside fairytale castle",
    href: "/cel-animation",
  },
  {
    id: 6,
    line1: "Hybrid",
    line2: "Animation",
    image: "/images/portfolio-style-6-hybrid.jpg",
    alt: "Detailed 2D and 3D hybrid fantasy red dragon in a misty sunlit canyon with waterfalls",
    href: "/hybrid-animation",
  },
] as const;

export function ExploreByStyle() {
  return (
    <section
      id="animation-styles"
      aria-labelledby="explore-by-style-heading"
      className="w-full bg-white px-6 py-6 sm:px-10 lg:px-[0.98vw] lg:py-[1.5vw]"
    >
      {/* Framed Rounded Card Container */}
      <div className="relative isolate w-full overflow-hidden rounded-[18px] border-[1.5px] border-[#ee8d43] bg-[#fbfbfc] px-5 pt-6 pb-6 shadow-[0_14px_40px_-12px_rgb(15_23_42/0.07)] sm:px-8 lg:rounded-[1.25vw] lg:px-[1.08vw] lg:pt-[1.85vw] lg:pb-[1.5vw]">
        {/* Top Header Row: 04 Badge + EXPLORE BY ANIMATION STYLE */}
        <div className="flex items-center gap-4 lg:gap-[2.9vw]">
          <span className="grid h-[54px] w-[62px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#f3271c_0%,#ff5516_55%,#f68d14_100%)] font-sans text-[23px] font-extrabold tracking-[-0.03em] text-white shadow-[0_8px_20px_-6px_rgb(243_39_28/0.45)] lg:ml-[0.68vw] lg:h-[6.05vw] lg:w-[6.74vw] lg:rounded-[1.15vw] lg:text-[2.5vw]">
            04
          </span>
          <div>
            <h2
              id="explore-by-style-heading"
              className="font-sans text-[19px] font-extrabold uppercase leading-[1.1] tracking-[0.02em] text-[#0c0c10] lg:text-[2.15vw]"
            >
              EXPLORE BY ANIMATION STYLE
            </h2>
            <p className="mt-1 font-sans text-[14px] font-normal leading-[1.25] tracking-[-0.01em] text-[#6d7079] lg:mt-[0.3vw] lg:text-[1.48vw]">
              Different styles. Unique stories. Endless possibilities.
            </p>
          </div>
        </div>

        {/* 6 Vertical Style Cards Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-[1.46vw] lg:grid-cols-6 lg:gap-[0.98vw]">
          {ANIMATION_STYLES.map((style) => (
            <Link
              key={style.id}
              href={style.href}
              className="group relative flex flex-col items-center overflow-hidden rounded-[13px] border-[1.4px] border-[#f29653] bg-white pb-4 shadow-[0_6px_18px_-6px_rgb(15_23_42/0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-[#ff4b18] hover:shadow-[0_14px_28px_-8px_rgb(255_75_24/0.22)] lg:h-[33.9vw] lg:rounded-[1vw] lg:pb-[1.15vw]"
            >
              {/* Top Portrait Thumbnail */}
              <div className="relative h-[240px] w-full overflow-hidden bg-[#f4f5f8] lg:h-[22.8vw]">
                <Image
                  src={style.image}
                  alt={style.alt}
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 32vw, (min-width: 640px) 48vw, 92vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Soft bottom blend into white label area */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-7 bg-gradient-to-t from-white via-white/40 to-transparent lg:h-[1.6vw]" />
              </div>

              {/* 2-Line Style Title */}
              <h3 className="mt-1.5 text-center font-sans text-[16px] font-extrabold leading-[1.16] tracking-[-0.02em] text-[#0c0c10] lg:mt-[0.35vw] lg:text-[1.52vw]">
                <span className="block">{style.line1}</span>
                <span className="block">{style.line2}</span>
              </h3>

              {/* Bottom Circular Orange-Red Chevron Button */}
              <div className="mt-auto pt-2.5 lg:pt-[0.65vw]">
                <span className="grid size-[42px] place-items-center rounded-full bg-[linear-gradient(135deg,#ff3419_0%,#ff7414_100%)] text-white shadow-[0_6px_16px_-4px_rgb(255_78_20/0.48)] transition-transform duration-200 group-hover:scale-110 lg:size-[4.4vw]">
                  <svg
                    viewBox="0 0 20 20"
                    className="size-4 translate-x-[0.5px] lg:size-[1.75vw]"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m7.5 5 5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
