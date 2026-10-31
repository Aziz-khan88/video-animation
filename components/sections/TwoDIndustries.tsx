import Image from "next/image";
import Link from "next/link";

const INDUSTRIES = [
  {
    title: "Software & Technology",
    image: "/images/two-d-industry-1.jpg",
    alt: "2D animated software developer with glasses working on a laptop surrounded by code blocks, cloud icons, and UI windows",
  },
  {
    title: "Education & Training",
    image: "/images/two-d-industry-2.jpg",
    alt: "2D animated teacher holding an open book and pointing to an ABC whiteboard with an idea lightbulb",
  },
  {
    title: "Healthcare & Medical",
    image: "/images/two-d-industry-3.jpg",
    alt: "2D animated female doctor in a white coat and stethoscope presenting a medical diagnostic display with a heartbeat icon",
  },
  {
    title: "E-commerce & Retail",
    image: "/images/two-d-industry-4.jpg",
    alt: "2D animated online shopper holding a credit card in front of a laptop, shopping bags, and an e-commerce storefront",
  },
  {
    title: "Advertising & Marketing",
    image: "/images/two-d-industry-5.jpg",
    alt: "2D animated marketer speaking through a megaphone surrounded by rising bar charts, video icons, and a target bullseye",
  },
  {
    title: "Engineering & Manufacturing",
    image: "/images/two-d-industry-6.jpg",
    alt: "2D animated industrial engineer in a hard hat and safety vest holding a tablet next to an automated robotic arm",
  },
] as const;

export function TwoDIndustries() {
  return (
    <section
      id="two-d-industries"
      aria-labelledby="two-d-industries-heading"
      className="relative isolate w-full overflow-hidden bg-white py-8 lg:min-h-[56.25vw] lg:py-0"
    >
      {/* Top-Left Header: 09 Badge + INDUSTRIES + Subtitle */}
      <div className="w-full px-6 pt-2 sm:px-10 lg:px-[2.45vw] lg:pt-[2.1vw]">
        <div className="flex items-center gap-4 lg:gap-[2.05vw]">
          <span className="grid h-[48px] w-[50px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#ff171d_0%,#ff4b16_55%,#ff7610_100%)] font-sans text-[20px] font-extrabold tracking-[-0.02em] text-white shadow-[0_8px_20px_-4px_rgb(255_55_22/0.45)] lg:h-[5.85vw] lg:w-[6.05vw] lg:rounded-[1.1vw] lg:text-[2.35vw]">
            09
          </span>
          <div>
            <h2
              id="two-d-industries-heading"
              className="font-sans text-[clamp(1.25rem,2.35vw,2.45rem)] font-black uppercase leading-[1.08] tracking-[-0.02em] text-[#090a0d]"
            >
              INDUSTRIES
            </h2>
            <p className="mt-1 font-sans text-[13.5px] font-normal leading-[1.25] tracking-[-0.01em] text-[#747882] lg:mt-[0.25vw] lg:text-[1.48vw]">
              2D animation for every industry, from education to engineering.
            </p>
          </div>
        </div>
      </div>

      {/* 3x2 Industry Cards Grid */}
      <div className="mt-5 w-full px-6 sm:px-10 lg:mt-[1.4vw] lg:px-[2.45vw]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[1.65vw] lg:gap-y-[1.35vw]">
          {INDUSTRIES.map((industry) => (
            <article
              key={industry.title}
              className="group flex flex-col rounded-[14px] border border-[#edf0f5] bg-white p-1.5 shadow-[0_8px_24px_-6px_rgb(15_23_42/0.09)] transition-transform duration-200 hover:-translate-y-0.5 lg:rounded-[1.1vw] lg:p-[0.55vw]"
            >
              {/* Top Rounded Artwork Panel */}
              <div className="relative aspect-[300/141] w-full overflow-hidden rounded-[10px] bg-[#f4f6fa] lg:aspect-auto lg:h-[13.8vw] lg:rounded-[0.8vw]">
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  quality={92}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Title + Circular Red-Orange Arrow Button */}
              <div className="flex items-center justify-between gap-2 px-2.5 pt-2.5 pb-1.5 lg:px-[0.8vw] lg:pt-[0.85vw] lg:pb-[0.45vw]">
                <h3 className="truncate font-sans text-[15px] font-extrabold tracking-[-0.02em] text-[#090a0d] lg:text-[1.42vw]">
                  {industry.title}
                </h3>

                <Link
                  href="#work"
                  aria-label={`Explore ${industry.title}`}
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ff171d_0%,#ff4e15_55%,#ff7a10_100%)] text-white shadow-[0_4px_12px_rgb(255_55_22/0.35)] transition-transform duration-200 group-hover:scale-105 lg:size-[3.05vw]"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="size-4 lg:size-[1.45vw]"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.5 10h11M11 5.5 15.5 10 11 14.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
