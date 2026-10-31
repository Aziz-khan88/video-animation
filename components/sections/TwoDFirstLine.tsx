import Image from "next/image";

export function TwoDFirstLine() {
  return (
    <section
      id="first-line"
      aria-labelledby="first-line-heading"
      className="relative isolate w-full overflow-hidden bg-white lg:h-[56.25vw]"
    >
      {/* Full-width overlay layout calibrated to the 1024x576 reference coordinates */}
      <div className="flex w-full flex-col justify-between gap-6 px-6 py-8 sm:px-10 lg:h-[56.25vw] lg:px-[3.1vw] lg:pt-[3.1vw] lg:pb-[6.2vw]">
        {/* Top-Left: 02 Badge + THE FIRST LINE + Subtitle */}
        <div className="relative z-10 flex items-center gap-4 lg:gap-[2.15vw]">
          <span className="grid h-[52px] w-[54px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#ff171d_0%,#ff4b16_55%,#ff7610_100%)] font-sans text-[22px] font-extrabold tracking-[-0.02em] text-white shadow-[0_8px_20px_-4px_rgb(255_55_22/0.45)] lg:h-[6.4vw] lg:w-[6.6vw] lg:rounded-[1.15vw] lg:text-[2.6vw]">
            02
          </span>
          <div>
            <h2
              id="first-line-heading"
              className="font-sans text-[18px] font-black uppercase leading-[1.08] tracking-[0.02em] text-[#090a0d] lg:text-[2.2vw]"
            >
              THE FIRST LINE
            </h2>
            <p className="mt-1 font-sans text-[14px] font-normal leading-[1.25] tracking-[-0.01em] text-[#727680] lg:mt-[0.35vw] lg:text-[1.72vw]">
              It all starts with a simple idea.
            </p>
          </div>
        </div>

        {/* Full-width 16:9 animator's sketch & red pencil artwork (inline on mobile/tablet, full-bleed background on desktop) */}
        <div className="pointer-events-none relative -mx-6 aspect-[16/9] w-[calc(100%+3rem)] overflow-hidden sm:-mx-10 sm:w-[calc(100%+5rem)] lg:absolute lg:inset-0 lg:-z-10 lg:mx-0 lg:aspect-auto lg:w-full">
          <Image
            src="/images/two-d-first-line-bg.jpg"
            alt="Animator's hand holding a bright red pencil sketching a joyful young adventurer girl on cream construction-grid paper, with a full-body pose study on the left and a sweeping red-orange line flourish"
            fill
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Bottom-Right: Hand-drawn curved orange arrow + 3-Line Display Quote */}
        <div className="relative z-10 self-end lg:mr-[0.65vw]">
          <div className="relative flex items-end gap-3 lg:gap-[1.15vw]">
            {/* Hand-drawn curved orange arrow pointing into "of possibilities." */}
            <svg
              viewBox="0 0 96 64"
              fill="none"
              aria-hidden="true"
              className="mb-1 h-10 w-14 shrink-0 text-[#f57919] lg:mb-[0.3vw] lg:h-[5.4vw] lg:w-[8.1vw]"
            >
              <path
                d="M7 10c7 29 37 44 76 26"
                stroke="currentColor"
                strokeWidth="5.5"
                strokeLinecap="round"
              />
              <path
                d="M65 25c9 1 17 4 21 9-4 6-8 14-10 22"
                stroke="currentColor"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="font-sans text-[clamp(1.5rem,3.38vw,3.52rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0b0d12]">
              <span className="block sm:whitespace-nowrap">A single line</span>
              <span className="block sm:whitespace-nowrap">sparks a world</span>
              <span className="block sm:whitespace-nowrap">
                of{" "}
                <span className="bg-[linear-gradient(90deg,#f03219_0%,#ff5615_55%,#ff7611_100%)] bg-clip-text text-transparent">
                  possibilities
                </span>
                .
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
