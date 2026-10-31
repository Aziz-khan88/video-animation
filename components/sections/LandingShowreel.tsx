import Image from "next/image";

const SHOWREEL_INDUSTRIES = [
  {
    title: "Technology",
    subtitle: "Explain. Demonstrate. Inspire.",
    image: "/images/showreel-thumb-tech.jpg",
    alt: "Hand touching a glowing blue 3D holographic globe surrounded by futuristic HUD screens",
    badgeClass: "bg-[linear-gradient(135deg,#ff1c22_0%,#e1121a_100%)] shadow-[0_4px_10px_rgb(235_22_30/0.32)]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 lg:size-[1.45vw]" fill="none" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="1.8" stroke="currentColor" strokeWidth="1.9" />
        <rect x="9.8" y="9.8" width="4.4" height="4.4" rx="0.6" fill="currentColor" />
        <path
          d="M9.5 4v3M14.5 4v3M9.5 17v3M14.5 17v3M4 9.5h3M4 14.5h3M17 9.5h3M17 14.5h3"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Education",
    subtitle: "Simplify. Engage. Empower.",
    image: "/images/showreel-thumb-education.jpg",
    alt: "Cheerful 3D animated girl smiling and looking up at a glowing lightbulb drawn on a classroom chalkboard",
    badgeClass: "bg-[linear-gradient(135deg,#ff7a14_0%,#ed5314_100%)] shadow-[0_4px_10px_rgb(242_95_20/0.32)]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 lg:size-[1.5vw]" fill="none" aria-hidden="true">
        <path
          d="M3 9.5 12 5l9 4.5L12 14 3 9.5Z"
          stroke="currentColor"
          strokeWidth="1.85"
          strokeLinejoin="round"
        />
        <path
          d="M6.8 11.8v3.6c0 1.4 2.3 2.6 5.2 2.6s5.2-1.2 5.2-2.6v-3.6M20.5 9.8v5"
          stroke="currentColor"
          strokeWidth="1.85"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    subtitle: "Inform. Build Trust. Make Impact.",
    image: "/images/showreel-thumb-healthcare.jpg",
    alt: "Friendly 3D animated female doctor in a white lab coat and stethoscope smiling in a modern clinic",
    badgeClass: "bg-[linear-gradient(135deg,#ff1c22_0%,#e1121a_100%)] shadow-[0_4px_10px_rgb(235_22_30/0.32)]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 lg:size-[1.45vw]" fill="none" aria-hidden="true">
        <path
          d="M12 19.5s-7-4.3-7-9.3a4 4 0 0 1 7-2.6 4 4 0 0 1 7 2.6c0 5-7 9.3-7 9.3Z"
          stroke="currentColor"
          strokeWidth="1.85"
          strokeLinejoin="round"
        />
        <path
          d="M7.8 11.5h2l1.1-2.2 1.8 4.2 1.2-2h2.3"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Retail",
    subtitle: "Showcase. Convert. Grow.",
    image: "/images/showreel-thumb-retail.jpg",
    alt: "3D shopping cart filled with orange boxes in a warm sunlit modern retail store aisle",
    badgeClass: "bg-[linear-gradient(135deg,#ff9c14_0%,#f07311_100%)] shadow-[0_4px_10px_rgb(245_128_18/0.32)]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 lg:size-[1.45vw]" fill="none" aria-hidden="true">
        <path
          d="M4 5.5h2l1.7 8.5a1.4 1.4 0 0 0 1.4 1.1h7.2a1.4 1.4 0 0 0 1.3-1l1.6-5.8H6.4"
          stroke="currentColor"
          strokeWidth="1.85"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9.6" cy="18.5" r="1.4" fill="currentColor" />
        <circle cx="16.2" cy="18.5" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Marketing",
    subtitle: "Tell Stories. Drive Results.",
    image: "/images/showreel-thumb-marketing.jpg",
    alt: "3D glowing golden bar chart columns with a sweeping red-orange upward growth arrow against a sunset city skyline",
    badgeClass: "bg-[linear-gradient(135deg,#ff1c22_0%,#e1121a_100%)] shadow-[0_4px_10px_rgb(235_22_30/0.32)]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 lg:size-[1.45vw]" fill="none" aria-hidden="true">
        <rect x="6" y="13" width="2.8" height="5.5" rx="0.6" fill="currentColor" />
        <rect x="10.6" y="9.8" width="2.8" height="8.7" rx="0.6" fill="currentColor" />
        <rect x="15.2" y="6" width="2.8" height="12.5" rx="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Manufacturing",
    subtitle: "Visualize. Train. Innovate.",
    image: "/images/showreel-thumb-manufacturing.jpg",
    alt: "3D metallic jet turbine engine surrounded by glowing blue CAD wireframe rings and engineering schematics",
    badgeClass: "bg-[linear-gradient(135deg,#ff9c14_0%,#f07311_100%)] shadow-[0_4px_10px_rgb(245_128_18/0.32)]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 lg:size-[1.45vw]" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 4.5v2.2M12 17.3v2.2M4.5 12h2.2M17.3 12h2.2M6.7 6.7l1.6 1.6M15.7 15.7l1.6 1.6M17.3 6.7l-1.6 1.6M8.3 15.7l-1.6 1.6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

export function LandingShowreel() {
  return (
    <section
      id="showreel"
      aria-labelledby="landing-showreel-heading"
      className="relative isolate w-full overflow-hidden bg-white py-12 lg:min-h-[56.25vw] lg:py-0"
    >
      {/* Full-bleed 16:9 background artwork with upper-right 3D robot showreel composite */}
      <div className="pointer-events-none hidden lg:absolute lg:inset-0 lg:-z-10 lg:block">
        <Image
          src="/images/landing-showreel-bg.jpg"
          alt="3D robot character reaching out from a widescreen showreel video player surrounded by floating industry animation frames for education, technology, marketing, and healthcare"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Main Content Container calibrated to the 1024x576 reference */}
      <div className="flex w-full flex-col justify-between px-6 sm:px-10 lg:min-h-[56.25vw] lg:px-[2.65vw] lg:pt-[4.4vw] lg:pb-[3.8vw]">
        {/* Top Row: Left Heading Column + Mobile/Tablet Showreel Preview */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:pl-[1.45vw]">
          <div className="max-w-[500px] lg:max-w-[31vw] lg:pt-[3.1vw]">
            {/* 02 — ENTER THE SHOWREEL -> Eyebrow */}
            <div className="flex items-center gap-3 lg:gap-[0.95vw]">
              <span className="font-sans text-[18px] font-bold tracking-[-0.02em] text-[#626c7f] lg:text-[1.78vw]">
                02
              </span>
              <span
                aria-hidden="true"
                className="h-[1.5px] w-6 shrink-0 bg-[#c8cdd8] lg:w-[2.3vw]"
              />
              <p className="whitespace-nowrap font-sans text-[11px] font-bold uppercase tracking-[0.06em] text-[#1b1e26] lg:text-[0.98vw]">
                ENTER THE SHOWREEL
              </p>
              <svg
                viewBox="0 0 44 12"
                className="h-3 w-9 shrink-0 text-[#626c7f] lg:h-[0.9vw] lg:w-[3.8vw]"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 6h41M37 1.5 42 6l-5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* 3-Line Display Heading */}
            <h2
              id="landing-showreel-heading"
              className="mt-4 font-sans text-[clamp(2.45rem,5.25vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#08090c] lg:mt-[1.35vw]"
            >
              <span className="block whitespace-nowrap">Every idea</span>
              <span className="mt-[0.04vw] block whitespace-nowrap">deserves</span>
              <span className="mt-[0.04vw] block whitespace-nowrap bg-[linear-gradient(90deg,#ef131e_0%,#ff4617_54%,#ff6c10_100%)] bg-clip-text text-transparent">
                motion.
              </span>
            </h2>

            {/* 2-Line Subtitle */}
            <p className="mt-4 font-sans text-[14px] font-normal leading-[1.44] tracking-[-0.01em] text-[#555a68] lg:mt-[1.4vw] lg:text-[1.28vw]">
              Explore our showreel and see how animation
              <br className="hidden sm:inline" /> brings ideas to life across six industries.
            </p>
          </div>

          {/* Mobile/Tablet Showreel Player Preview */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px] shadow-[0_16px_38px_-10px_rgb(15_23_42/0.22)] lg:hidden">
            <Image
              src="/images/landing-showreel-bg.jpg"
              alt="Showreel preview featuring 3D robot character and industry highlights"
              fill
              quality={90}
              sizes="95vw"
              className="object-cover object-[88%_25%]"
            />
          </div>
        </div>

        {/* Bottom 6 Industry Cards Row */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-auto lg:grid-cols-6 lg:gap-[0.88vw]">
          {SHOWREEL_INDUSTRIES.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-[12px] border border-[#eef0f5] bg-white shadow-[0_10px_28px_-8px_rgb(15_23_42/0.12)] transition-transform duration-200 hover:-translate-y-1 lg:rounded-[0.85vw]"
            >
              {/* Top 16:10 Industry Thumbnail Image */}
              <div className="relative aspect-[153/95] w-full overflow-hidden bg-[#0d1220]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 32vw, (min-width: 640px) 48vw, 92vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Card Footer: Colored Circular Icon Badge + Title & 3-Word Tagline */}
              <div className="flex items-center gap-2.5 px-3 py-3 lg:gap-[0.65vw] lg:px-[0.75vw] lg:py-[0.78vw]">
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full text-white lg:size-[2.85vw] ${item.badgeClass}`}
                >
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate font-sans text-[14px] font-bold leading-[1.15] tracking-[-0.015em] text-[#0c0d12] lg:text-[1.06vw]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 truncate font-sans text-[11px] font-normal leading-[1.2] tracking-[-0.01em] text-[#6d7280] lg:mt-[0.18vw] lg:text-[0.74vw]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
