import Image from "next/image";
import Link from "next/link";

const MOTION_THUMBNAILS = [
  {
    id: 1,
    title: "After Effects 3D Prism",
    image: "/images/portfolio-motion-thumb-1.jpg",
    alt: "Glowing red-orange 3D wireframe pyramid on a dark glass screen with an Ae motion graphics badge",
    widthClass: "lg:w-[16.1vw]",
  },
  {
    id: 2,
    title: "UI/UX Dashboard Motion",
    image: "/images/portfolio-motion-thumb-2.jpg",
    alt: "Futuristic blue glass studio corridor with floating white translucent UI dashboard screens and red play chart",
    widthClass: "lg:w-[20.4vw]",
  },
  {
    id: 3,
    title: "Abstract Neon Waves",
    image: "/images/portfolio-motion-thumb-3.jpg",
    alt: "Luminous neon energy ribbons in orange, magenta, cyan, and violet flowing across a dark particle grid",
    widthClass: "lg:w-[18.6vw]",
  },
  {
    id: 4,
    title: "Holographic Play Portals",
    image: "/images/portfolio-motion-thumb-4.jpg",
    alt: "Glowing cyan-blue and magenta holographic glass play-button portals standing on a reflective dark floor",
    widthClass: "lg:w-[18.4vw]",
  },
  {
    id: 5,
    title: "Stylized 3D Action Combat",
    image: "/images/portfolio-motion-thumb-5.jpg",
    alt: "Stylized geometric white robot warrior clashing staffs with an armored hero against a bright blue sky",
    widthClass: "lg:w-[19.1vw]",
  },
] as const;

export function MotionGraphicsPortfolio() {
  return (
    <section
      id="motion-graphics-portfolio"
      aria-labelledby="motion-graphics-portfolio-heading"
      className="w-full bg-white px-6 py-6 sm:px-10 lg:px-[1.08vw] lg:py-[1.3vw]"
    >
      {/* Framed Rounded Card with Warm Amber-Orange Border */}
      <div className="relative isolate flex w-full flex-col justify-between overflow-hidden rounded-[20px] border-[1.5px] border-[#df9755] bg-white shadow-[0_14px_40px_-12px_rgb(15_23_42/0.08)] lg:min-h-[53.6vw] lg:rounded-[1.35vw]">
        {/* Full-bleed 3D Motion Graphics Multi-Monitor Studio Background */}
        <div className="pointer-events-none relative aspect-[16/9] w-full overflow-hidden lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
          <Image
            src="/images/portfolio-motion-bg.jpg"
            alt="3D isometric motion-graphics multi-monitor installation with floating UI cards, bar charts, audio waveforms, and glowing orange light bars on a reflective studio floor"
            fill
            quality={90}
            sizes="(min-width: 1024px) 98vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Top Bar: 07 Badge + Title/Subtitle on Left, View All Button on Right */}
        <div className="relative z-10 flex flex-wrap items-start justify-between gap-4 px-6 pt-6 sm:px-8 lg:px-[1.46vw] lg:pt-[1.55vw]">
          <div className="flex items-center gap-4 lg:gap-[2.75vw]">
            <span className="grid h-[56px] w-[62px] shrink-0 place-items-center rounded-[13px] bg-[linear-gradient(135deg,#f31820_0%,#ff4b18_55%,#ff8214_100%)] font-sans text-[24px] font-extrabold tracking-[-0.03em] text-white shadow-[0_8px_20px_-6px_rgb(243_24_32/0.45)] lg:h-[6.64vw] lg:w-[7.22vw] lg:rounded-[1.25vw] lg:text-[2.75vw]">
              07
            </span>
            <div>
              <h2
                id="motion-graphics-portfolio-heading"
                className="font-sans text-[19px] font-extrabold uppercase leading-[1.1] tracking-[0.03em] text-[#0c0c10] lg:text-[2.15vw]"
              >
                MOTION GRAPHICS PORTFOLIO
              </h2>
              <p className="mt-1 font-sans text-[14px] font-normal leading-[1.25] tracking-[-0.01em] text-[#6d7079] lg:mt-[0.3vw] lg:text-[1.48vw]">
                Ideas in motion. Designed to make an impact.
              </p>
            </div>
          </div>

          <Link
            href="#work"
            className="inline-flex h-[42px] items-center justify-center gap-3 rounded-full border-[1.4px] border-[#ca5b38] bg-white/95 px-6 font-sans text-[14px] font-bold tracking-[-0.01em] text-[#d9331a] shadow-[0_2px_8px_rgb(217_51_26/0.08)] backdrop-blur-xs transition-all hover:-translate-y-0.5 hover:bg-[#fff5f2] lg:mt-[0.2vw] lg:h-[4.3vw] lg:w-[16vw] lg:gap-[1.4vw] lg:px-0 lg:text-[1.45vw]"
          >
            <span>View All</span>
            <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.5vw]" fill="none" aria-hidden="true">
              <path
                d="M4.2 10h11.6M10.8 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Middle Right Callout Typography: TURN IDEAS INTO MOTION. */}
        <div className="relative z-10 flex justify-end px-6 py-6 sm:px-8 lg:min-h-[29.2vw] lg:items-end lg:px-[2.05vw] lg:pb-[3.1vw]">
          <div className="relative rounded-xl bg-white/90 p-4 backdrop-blur-xs lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            {/* Small Orange Accent Dot at top-right */}
            <span
              aria-hidden="true"
              className="ml-auto mb-2 block size-2 rounded-full bg-[#ff5c16] lg:mb-[1.1vw] lg:mr-[0.4vw] lg:size-[0.68vw]"
            />
            <p className="font-sans text-[30px] font-black uppercase leading-[0.98] tracking-[-0.03em] lg:text-[3.7vw]">
              <span className="block text-[#ed2618]">TURN</span>
              <span className="block text-[#ed2618]">IDEAS</span>
              <span className="block text-[#0c0c10]">INTO</span>
              <span className="block text-[#ed2618]">MOTION.</span>
            </p>
          </div>
        </div>

        {/* Bottom Row: 5 Motion Graphics Thumbnail Cards */}
        <div className="relative z-10 grid grid-cols-1 gap-3.5 px-6 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:items-center lg:justify-between lg:gap-[0.95vw] lg:px-[1.65vw] lg:pb-[2.3vw]">
          {MOTION_THUMBNAILS.map((thumb) => (
            <article
              key={thumb.id}
              className={`group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[10px] border border-[#d88954]/65 bg-[#120d16] shadow-[0_8px_22px_-6px_rgb(15_23_42/0.38)] transition-all duration-200 hover:-translate-y-1 hover:border-[#ff4b18] lg:aspect-auto lg:h-[10.45vw] lg:rounded-[0.75vw] ${thumb.widthClass}`}
            >
              <Image
                src={thumb.image}
                alt={thumb.alt}
                fill
                quality={85}
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 48vw, 95vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
