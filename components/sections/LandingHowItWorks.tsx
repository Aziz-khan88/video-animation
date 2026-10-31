import Image from "next/image";

const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Script",
    line1: "We turn your idea into a clear,",
    line2: "engaging script.",
    image: "/images/how-it-works-1-script.jpg",
    alt: "Spiral script notebook showing Scene 1 typewriter text with a black and silver pen",
    icon: (
      <svg viewBox="0 0 28 28" className="size-6 shrink-0 text-[#f2131d] lg:size-[2.2vw]" fill="none" aria-hidden="true">
        <path
          d="M7 4.5h9.5L21 9v14.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 7 23.5v-17A1.5 1.5 0 0 1 8.5 4.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M16 4.5V9h4.5M10 13h8M10 16.5h8M10 20h5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Storyboard",
    line1: "You review the visuals and",
    line2: "storyboard before we animate.",
    image: "/images/how-it-works-2-storyboard.jpg",
    alt: "Black and white hand-drawn storyboard panels showing a young girl gesturing toward futuristic spires",
    icon: (
      <svg viewBox="0 0 28 28" className="size-6 shrink-0 text-[#f2131d] lg:size-[2.2vw]" fill="none" aria-hidden="true">
        <rect
          x="4.5"
          y="5.5"
          width="19"
          height="17"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="10" cy="11" r="1.6" fill="currentColor" />
        <path
          d="m5.5 20 5.5-5.5 4 4 3-3 4.5 4.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Animation",
    line1: "We bring it to life with",
    line2: "professional 2D or 3D animation.",
    image: "/images/how-it-works-3-animation.jpg",
    alt: "Full-color 3D animated girl in a red hoodie reaching toward a golden sunset castle city with an animation progress bar",
    icon: (
      <svg viewBox="0 0 28 28" className="size-6 shrink-0 text-[#f2131d] lg:size-[2.2vw]" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="9.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 10.2v7.6l6.2-3.8L12 10.2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Delivery",
    line1: "You get the final videos, ready",
    line2: "to use across your channels.",
    image: "/images/how-it-works-4-delivery.jpg",
    alt: "Final widescreen video player showing the 3D animated scene ready for playback and multi-channel delivery",
    icon: (
      <svg viewBox="0 0 28 28" className="size-6 shrink-0 text-[#f2131d] lg:size-[2.2vw]" fill="none" aria-hidden="true">
        <path
          d="M7 4.5h9.5L21 9v14.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 7 23.5v-17A1.5 1.5 0 0 1 8.5 4.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M14 11.5v7.5M11 16l3 3 3-3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export function LandingHowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="landing-how-it-works-heading"
      className="relative isolate w-full overflow-hidden bg-[#fafbfd] py-14 lg:min-h-[56.25vw] lg:py-0"
    >
      {/* Subtle warm radial glow behind the 4 process cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-[radial-gradient(65%_55%_at_50%_68%,rgba(255,120,45,0.11),transparent_75%)]"
      />

      {/* Main Content Container calibrated to the 1024x576 reference */}
      <div className="flex w-full flex-col justify-between px-6 sm:px-10 lg:min-h-[56.25vw] lg:px-[2.45vw] lg:pt-[4.1vw] lg:pb-[1.8vw]">
        {/* Top Full-Width Heading Block */}
        <div className="w-full max-w-none lg:pl-[2.6vw]">
          {/* 05 | HOW IT WORKS ——————> Eyebrow */}
          <div className="flex items-center gap-3 lg:gap-[1.05vw]">
            <span className="font-sans text-[18px] font-extrabold tracking-[-0.02em] text-[#ef141e] lg:text-[1.78vw]">
              05
            </span>
            <span
              aria-hidden="true"
              className="h-4 w-[1.5px] shrink-0 bg-[#ef141e] lg:h-[1.55vw]"
            />
            <p className="whitespace-nowrap font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#353946] lg:text-[0.96vw]">
              HOW IT WORKS
            </p>
            <svg
              viewBox="0 0 210 14"
              className="ml-1 h-3.5 w-16 shrink-0 text-[#686f80] sm:w-32 lg:ml-[0.6vw] lg:h-[1.05vw] lg:w-[20.5vw]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 7h205M200 2l6 5-6 5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* 1-Line Full-Width Display Heading */}
          <h2
            id="landing-how-it-works-heading"
            className="mt-3 font-sans text-[clamp(2.35rem,6.85vw,7.05rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-[#08090c] lg:mt-[0.9vw] lg:whitespace-nowrap"
          >
            You approve{" "}
            <span className="bg-[linear-gradient(90deg,#ef131e_0%,#ff4617_54%,#ff6c10_100%)] bg-clip-text text-transparent">
              every step.
            </span>
          </h2>

          {/* 2-Line Wide Subtitle */}
          <p className="mt-3.5 max-w-[780px] font-sans text-[15px] font-normal leading-[1.38] tracking-[-0.015em] text-[#353b4b] lg:mt-[1.05vw] lg:max-w-[76vw] lg:text-[1.86vw]">
            A simple, transparent process from first thought to final frame.
            <br className="hidden sm:inline" /> We keep you involved at every stage so the result is exactly what you envision.
          </p>
        </div>

        {/* Middle Row: 4 Process Cards + Glowing White-Orange Chevrons Between Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[1.45vw] lg:grid-cols-4 lg:gap-[1.75vw]">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div key={step.number} className="relative flex flex-col">
              <article className="group flex h-full flex-col justify-between overflow-hidden rounded-[16px] border border-[#edf0f6] bg-white p-4 shadow-[0_14px_34px_-10px_rgb(15_23_42/0.1)] transition-transform duration-200 hover:-translate-y-1 lg:rounded-[1.2vw] lg:p-[1.25vw]">
                {/* Top Card Header: Red Number Circle + Outlined Red Icon + Bold Title + 2-Line Copy */}
                <div>
                  <div className="flex items-center gap-2.5 lg:gap-[0.75vw]">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#f2131d] font-sans text-[12px] font-extrabold text-white shadow-[0_4px_10px_rgb(242_19_29/0.3)] lg:size-[2.35vw] lg:text-[0.98vw]">
                      {step.number}
                    </span>
                    {step.icon}
                    <h3 className="font-sans text-[17px] font-extrabold leading-none tracking-[-0.02em] text-[#090a0d] lg:text-[1.42vw]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-2.5 pl-1 font-sans text-[12.5px] font-normal leading-[1.35] tracking-[-0.01em] text-[#4c5162] lg:mt-[0.65vw] lg:pl-[0.4vw] lg:text-[0.94vw]">
                    <span className="block">{step.line1}</span>
                    <span className="block">{step.line2}</span>
                  </p>
                </div>

                {/* Bottom Stage Thumbnail Visual */}
                <div className="relative mt-3.5 aspect-[212/130] w-full overflow-hidden rounded-[11px] bg-[#f7f8fa] lg:mt-[0.95vw] lg:rounded-[0.82vw]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </article>

              {/* Glowing White Chevron (>) Between Cards on Desktop */}
              {index < HOW_IT_WORKS_STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-[55%] -right-[1.35vw] z-20 hidden -translate-y-1/2 lg:block"
                >
                  <svg
                    viewBox="0 0 28 44"
                    className="h-[3.5vw] w-[2.2vw] overflow-visible drop-shadow-[0_2px_8px_rgb(255_94_20/0.85)]"
                    fill="none"
                  >
                    <path
                      d="m6 6 16 16L6 38"
                      stroke="#ff6a16"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.45"
                    />
                    <path
                      d="m6 6 16 16L6 38"
                      stroke="#ffffff"
                      strokeWidth="4.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner: Curved Red-Orange Arc + Handwritten Tagline + Sweeping Right Arrow */}
        <div className="mt-8 flex flex-col items-center justify-center lg:mt-[0.9vw]">
          <div className="flex w-full max-w-[780px] items-center justify-center gap-3 lg:max-w-[68vw] lg:gap-[1.4vw]">
            {/* Left Curved Arc */}
            <svg
              viewBox="0 0 160 36"
              className="hidden h-7 w-32 shrink-0 text-[#f23829] sm:block lg:h-[2.6vw] lg:w-[14.5vw]"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="how-left-arc" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f23829" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#f2281c" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              <path
                d="M4 4c18 19 68 27 154 28"
                stroke="url(#how-left-arc)"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            {/* Center Script Callout + Brush Underline */}
            <div className="relative text-center">
              <p className="font-serif text-[18px] font-bold italic tracking-[-0.01em] text-[#ee2418] sm:text-[21px] lg:text-[1.78vw]">
                From idea to final frame —{" "}
                <span className="bg-[linear-gradient(90deg,#ef1c18_0%,#ff6610_100%)] bg-clip-text text-transparent">
                  you&apos;re in control.
                </span>
              </p>
              <span
                aria-hidden="true"
                className="mx-auto mt-1 block h-[3px] w-4/5 rounded-full bg-[linear-gradient(90deg,transparent_0%,#ffb07b_45%,#ff7a29_80%,transparent_100%)] lg:h-[0.22vw]"
              />
            </div>

            {/* Right Sweeping Curved Arrow */}
            <svg
              viewBox="0 0 170 36"
              className="hidden h-7 w-32 shrink-0 text-[#f2281c] sm:block lg:h-[2.6vw] lg:w-[15vw]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 26c58-2 118-9 160-20"
                stroke="url(#how-right-arc)"
                strokeWidth="2.1"
                strokeLinecap="round"
              />
              <path
                d="M148 3.5 163.5 5.5 154 16"
                stroke="#ff4b14"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="how-right-arc" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff5514" />
                  <stop offset="100%" stopColor="#ee1b1b" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
