import Image from "next/image";
import Link from "next/link";

const STYLE_CARDS = [
  {
    id: "character-animation",
    line1: "Character",
    line2: "Animation",
    image: "/images/two-d-style-1.jpg",
    alt: "Expressive 2D character animation portrait of the young adventurer girl with brass goggles and red scarf in front of a fairytale castle town",
  },
  {
    id: "explainer-animation",
    line1: "Explainer",
    line2: "Animation",
    image: "/images/two-d-style-2.jpg",
    alt: "Clean vector 2D explainer animation character holding a tablet and pointing up to a glowing yellow idea lightbulb",
  },
  {
    id: "cel-style-animation",
    line1: "Cel-Style",
    line2: "Animation",
    image: "/images/two-d-style-3.jpg",
    alt: "Dynamic cel-shaded anime-style young hero with spiky dark hair, red cape, and staff overlooking a mountain castle",
  },
  {
    id: "educational-animation",
    line1: "Educational",
    line2: "Animation",
    image: "/images/two-d-style-4.jpg",
    alt: "Friendly 2D educational animation of a cheerful schoolboy holding an open book in front of a classroom chalkboard with ABCs and a globe drawing",
  },
] as const;

export function TwoDStyles() {
  return (
    <section
      id="two-d-styles"
      aria-labelledby="two-d-styles-heading"
      className="relative isolate w-full overflow-hidden bg-white py-8 lg:h-[56.25vw] lg:py-0"
    >
      {/* Top-Left Header: 06 Badge + 2D STYLES + Subtitle */}
      <div className="w-full px-6 pt-2 sm:px-10 lg:px-[2.45vw] lg:pt-[2.4vw]">
        <div className="flex items-center gap-4 lg:gap-[2.15vw]">
          <span className="grid h-[52px] w-[56px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#ff171d_0%,#ff4b16_55%,#ff7610_100%)] font-sans text-[22px] font-extrabold tracking-[-0.02em] text-white shadow-[0_8px_20px_-4px_rgb(255_55_22/0.45)] lg:h-[6.8vw] lg:w-[7.2vw] lg:rounded-[1.2vw] lg:text-[2.8vw]">
            06
          </span>
          <div>
            <h2
              id="two-d-styles-heading"
              className="font-sans text-[clamp(1.35rem,2.6vw,2.7rem)] font-black uppercase leading-[1.06] tracking-[-0.02em] text-[#090a0d]"
            >
              2D STYLES
            </h2>
            <p className="mt-1 font-sans text-[14px] font-normal leading-[1.25] tracking-[-0.01em] text-[#747882] lg:mt-[0.3vw] lg:text-[1.72vw]">
              Different styles for different stories.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Style Cards Row */}
      <div className="mt-6 w-full px-6 sm:px-10 lg:mt-[1.65vw] lg:px-[2.45vw]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[1.15vw]">
          {STYLE_CARDS.map((card) => (
            <article
              key={card.id}
              className="group relative flex flex-col overflow-hidden rounded-[14px] border border-[#f0f2f6] bg-white shadow-[0_10px_28px_-8px_rgb(15_23_42/0.1)] transition-transform duration-200 hover:-translate-y-1 lg:rounded-[1.2vw]"
            >
              {/* Artwork Panel */}
              <div className="relative aspect-[235/268] w-full overflow-hidden bg-[#eef3fa] lg:aspect-auto lg:h-[27.2vw]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  quality={92}
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 92vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Lower White Card Content overlapping bottom of image with rounded top corners */}
              <div className="relative z-10 -mt-3 flex flex-1 flex-col justify-between rounded-t-[12px] bg-white px-5 pt-3.5 pb-4 lg:-mt-[1.1vw] lg:rounded-t-[1.05vw] lg:px-[1.5vw] lg:pt-[1.1vw] lg:pb-[1.3vw]">
                <h3 className="font-sans text-[22px] font-black leading-[1.06] tracking-[-0.03em] text-[#090a0d] lg:text-[2.2vw]">
                  <span className="block">{card.line1}</span>
                  <span className="block">{card.line2}</span>
                </h3>

                <div className="mt-3.5 lg:mt-[1.05vw]">
                  <Link
                    href="#work"
                    aria-label={`Explore ${card.line1} ${card.line2}`}
                    className="grid size-11 place-items-center rounded-full border-[2.5px] border-[#ff3d16] bg-white text-[#090a0d] shadow-[0_4px_12px_rgb(255_61_22/0.14)] transition-colors duration-200 group-hover:bg-[#ff3d16] group-hover:text-white lg:size-[5.15vw] lg:border-[0.26vw]"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="size-4.5 lg:size-[1.95vw]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4.2 10h11.2M10.8 5.2 15.6 10l-4.8 4.8"
                        stroke="currentColor"
                        strokeWidth="2.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
