import Image from "next/image";
import Link from "next/link";

const INDUSTRY_CARDS = [
  {
    number: "01",
    title: "Software & Technology",
    description: "Simplify complex ideas with clear, engaging animation.",
    image: "/images/industry-reveal-1-software.jpg",
    alt: "3D animated software developer with glasses working at a laptop surrounded by glowing blue code and cloud holograms",
    stepOffsetClass: "lg:mt-[9.6vw]",
  },
  {
    number: "02",
    title: "Education & Training",
    description: "Make learning visual, interactive and memorable.",
    image: "/images/industry-reveal-2-education.jpg",
    alt: "3D animated teacher in a yellow top pointing at a glowing lightbulb diagram on a classroom whiteboard",
    stepOffsetClass: "lg:mt-[7.6vw]",
  },
  {
    number: "03",
    title: "Healthcare & Medical",
    description: "Build understanding and trust through visuals.",
    image: "/images/industry-reveal-3-healthcare.jpg",
    alt: "3D animated female doctor in white lab coat and stethoscope smiling beside glowing blue medical anatomy screens",
    stepOffsetClass: "lg:mt-[5.6vw]",
  },
  {
    number: "04",
    title: "E-commerce & Retail",
    description: "Showcase products and boost customer engagement.",
    image: "/images/industry-reveal-4-ecommerce.jpg",
    alt: "3D shopping cart with a red sneaker and floating e-commerce product and engagement cards",
    stepOffsetClass: "lg:mt-[3.7vw]",
  },
  {
    number: "05",
    title: "Advertising & Marketing",
    description: "Create stories that capture attention and drive results.",
    image: "/images/industry-reveal-5-marketing.jpg",
    alt: "3D animated marketer holding an orange megaphone surrounded by social media icons and rising bar charts",
    stepOffsetClass: "lg:mt-[1.8vw]",
  },
  {
    number: "06",
    title: "Engineering & Manufacturing",
    description: "Visualize innovation and processes in action.",
    image: "/images/industry-reveal-6-manufacturing.jpg",
    alt: "3D engineer in a white hard hat and safety glasses inspecting a glowing blue CAD wireframe jet turbine engine",
    stepOffsetClass: "lg:mt-0",
  },
] as const;

export function LandingIndustries() {
  return (
    <section
      id="industries"
      aria-labelledby="landing-industries-heading"
      className="relative isolate w-full overflow-hidden bg-white py-14 lg:min-h-[56.25vw] lg:py-0"
    >
      {/* Full-bleed 16:9 background artwork featuring the 3D animated girl & holographic screens in the upper right */}
      <div className="pointer-events-none hidden lg:absolute lg:inset-0 lg:-z-10 lg:block">
        <Image
          src="/images/landing-industries-bg.jpg"
          alt="Cheerful 3D animated young woman with flowing brown hair reaching toward floating holographic play and globe screens"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Main Content Container calibrated to the 1024x576 reference */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:min-h-[56.25vw] lg:px-[3.1vw] lg:pt-[4.1vw] lg:pb-[2.4vw]">
        {/* Top Row: Left Heading & CTA + Top-Right Arrow */}
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-[500px] lg:max-w-[41vw]">
            {/* 03 | INDUSTRIES REVEAL Eyebrow */}
            <div className="flex items-center gap-3 lg:gap-[0.95vw]">
              <span className="font-sans text-[17px] font-extrabold tracking-[-0.02em] text-[#090a0d] lg:text-[1.68vw]">
                03
              </span>
              <span
                aria-hidden="true"
                className="h-4 w-[1.5px] shrink-0 bg-[#9ca1ae] lg:h-[1.55vw]"
              />
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#454954] lg:text-[0.94vw]">
                INDUSTRIES REVEAL
              </p>
            </div>

            {/* 2-Line Display Heading */}
            <h2
              id="landing-industries-heading"
              className="mt-3 font-sans text-[clamp(2rem,5.2vw,5.35rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-[#090a0d] lg:mt-[1.1vw]"
            >
              <span className="block sm:whitespace-nowrap">Animation for</span>
              <span className="mt-[0.04vw] block sm:whitespace-nowrap bg-[linear-gradient(90deg,#ef131e_0%,#ff4617_54%,#ff6c10_100%)] bg-clip-text text-transparent">
                every industry.
              </span>
            </h2>

            {/* 3-Line Subtitle */}
            <p className="mt-3.5 font-sans text-[14.5px] font-normal leading-[1.42] tracking-[-0.01em] text-[#4c505e] lg:mt-[1.15vw] lg:text-[1.35vw]">
              Engaging 2D and 3D animation videos
              <br className="hidden sm:inline" /> that help businesses explain, educate
              <br className="hidden sm:inline" /> and grow across industries.
            </p>

            {/* Get a Fixed Quote -> CTA Button */}
            <div className="mt-5 lg:mt-[1.45vw]">
              <Link
                href="#quote"
                className="inline-flex h-[46px] items-center justify-center gap-2.5 rounded-[9px] bg-[linear-gradient(92deg,#ff0e22_0%,#ff4618_54%,#ff780f_100%)] px-6 font-sans text-[14.5px] font-semibold tracking-[-0.01em] text-white shadow-[0_12px_26px_-6px_rgb(255_42_24/0.46)] transition-transform duration-200 hover:-translate-y-0.5 lg:h-[3.95vw] lg:w-[17.6vw] lg:gap-[0.75vw] lg:rounded-[0.75vw] lg:px-0 lg:text-[1.28vw]"
              >
                <span>Get a Fixed Quote</span>
                <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.2vw]" fill="none" aria-hidden="true">
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

          {/* Top-Right Decorative Arrow */}
          <div className="hidden pt-2 lg:block lg:pt-[0.4vw]" aria-hidden="true">
            <svg
              viewBox="0 0 48 18"
              className="h-4 w-11 text-[#171920] lg:h-[1.5vw] lg:w-[3.8vw]"
              fill="none"
            >
              <path
                d="M2 9h43M38 2.5 45.5 9 38 15.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Ascending Stair-Step 6 Industry Cards Row (01 to 06) */}
        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:-mt-[7.6vw] lg:grid-cols-6 lg:items-start lg:gap-[1.05vw]">
          {INDUSTRY_CARDS.map((card) => (
            <article
              key={card.number}
              className={`group relative flex flex-col ${card.stepOffsetClass}`}
            >
              {/* Top-Left Overlapping Circular Number Badge (01..06) + Ascending Curved Arrow */}
              <div className="relative z-20 mb-[-14px] flex items-center gap-1.5 pl-2 lg:mb-[-1.15vw] lg:gap-[0.45vw] lg:pl-[0.55vw]">
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#f2e4df] bg-white font-sans text-[13px] font-extrabold tracking-[-0.02em] text-[#eb3d16] shadow-[0_6px_16px_rgb(15_23_42/0.12)] lg:size-[3.05vw] lg:text-[1.18vw]">
                  {card.number}
                </span>

                {/* Ascending Curved Orange Arrow */}
                <svg
                  viewBox="0 0 68 24"
                  className="h-4 w-12 shrink-0 -translate-y-1 text-[#e85525] lg:h-[1.5vw] lg:w-[5.2vw] lg:-translate-y-[0.35vw]"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 20c18-2 38-7 61-15"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                  />
                  <path
                    d="M57 2.5 63.5 5 59.5 11"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Card Body with Subtle Upward Stair-Step Slant on Desktop */}
              <div className="flex flex-col overflow-hidden rounded-[13px] border border-[#eceef4] bg-white shadow-[0_14px_32px_-8px_rgb(15_23_42/0.12)] transition-transform duration-300 group-hover:-translate-y-1 lg:rounded-[0.95vw] lg:[transform:skewY(-4.2deg)]">
                {/* Top Thumbnail Image */}
                <div className="relative aspect-[145/102] w-full overflow-hidden bg-[#0e1424]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 16vw, (min-width: 768px) 32vw, (min-width: 640px) 48vw, 92vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 lg:[transform:skewY(4.2deg)_scale(1.12)] lg:group-hover:[transform:skewY(4.2deg)_scale(1.17)]"
                  />
                </div>

                {/* Bottom White Text Area (Counter-skewed on desktop so typography stays level) */}
                <div className="flex flex-col justify-between gap-2 bg-white p-3.5 lg:p-[0.9vw] lg:[transform:skewY(4.2deg)]">
                  <h3 className="font-sans text-[14.5px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0b0c10] lg:text-[1.02vw]">
                    {card.title}
                  </h3>

                  <div className="flex items-end justify-between gap-2">
                    <p className="font-sans text-[12px] font-normal leading-[1.32] tracking-[-0.01em] text-[#555966] lg:text-[0.8vw]">
                      {card.description}
                    </p>

                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#fff1ee] text-[#eb3318] transition-colors duration-200 group-hover:bg-[#eb3318] group-hover:text-white lg:size-[2.25vw]">
                      <svg
                        viewBox="0 0 20 20"
                        className="size-3.5 lg:size-[1.05vw]"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.5 10h11M11 5.5 15.5 10 11 14.5"
                          stroke="currentColor"
                          strokeWidth="1.9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
