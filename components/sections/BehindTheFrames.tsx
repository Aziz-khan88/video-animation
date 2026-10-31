import Image from "next/image";

const PROCESS_STEPS = [
  {
    number: "01",
    label: "Concept",
    ringClass: "border-[#ef411e] text-[#ef411e]",
    icon: (
      <svg viewBox="0 0 28 28" className="size-6 lg:size-[2.5vw]" fill="none" aria-hidden="true">
        <rect x="6" y="4.5" width="16" height="19" rx="2" stroke="currentColor" strokeWidth="2.1" />
        <path
          d="M9.5 9.5h9M9.5 13.5h9M9.5 17.5h5.5"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Storyboards",
    ringClass: "border-[#f2641b] text-[#f2641b]",
    icon: (
      <svg viewBox="0 0 28 28" className="size-6 lg:size-[2.5vw]" fill="none" aria-hidden="true">
        <path
          d="M9 7.5h4.5L19 14l-5.5 6.5H9L14.5 14 9 7.5Z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Design",
    ringClass: "border-[#f2711b] text-[#f2711b]",
    icon: (
      <svg viewBox="0 0 28 28" className="size-6 lg:size-[2.5vw]" fill="none" aria-hidden="true">
        <rect x="5" y="6" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2.1" />
        <circle cx="10.2" cy="11" r="1.6" fill="currentColor" />
        <path
          d="m6.5 19.5 5-5 3.5 3.5 3.5-4 3 5.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    label: "Animation",
    ringClass: "border-[#ef621b] text-[#ef621b]",
    icon: (
      <svg viewBox="0 0 28 28" className="size-6 lg:size-[2.5vw]" fill="none" aria-hidden="true">
        {/* Top cube */}
        <path
          d="M14 5.5 19 8.3v5.4L14 16.5 9 13.7V8.3L14 5.5Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        {/* Bottom-left cube */}
        <path
          d="M9.5 14 14 16.5V22l-4.5-2.5V14Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        {/* Bottom-right cube */}
        <path
          d="M18.5 14 14 16.5V22l4.5-2.5V14Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "05",
    label: "Final Frame",
    ringClass: "border-[#e8341e] text-[#e8341e]",
    icon: (
      <svg viewBox="0 0 28 28" className="size-6 lg:size-[2.5vw]" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="2.1" />
        <path d="M12.2 10.6v6.8l5.6-3.4-5.6-3.4Z" fill="currentColor" />
      </svg>
    ),
  },
] as const;

export function BehindTheFrames() {
  return (
    <section
      id="behind-the-frames"
      aria-labelledby="behind-the-frames-heading"
      className="w-full bg-white px-6 py-6 sm:px-10 lg:px-[1.18vw] lg:py-[1.5vw]"
    >
      {/* Framed Rounded Card Container */}
      <div className="relative isolate w-full overflow-hidden rounded-[18px] border-[1.5px] border-[#ee8d43] bg-white px-5 pt-6 pb-6 shadow-[0_14px_40px_-12px_rgb(15_23_42/0.07)] sm:px-8 lg:rounded-[1.25vw] lg:px-[1.08vw] lg:pt-[1.46vw] lg:pb-[1.6vw]">
        {/* Top-Left Header Row: 09 Badge + BEHIND THE FRAMES */}
        <div className="relative z-20 flex items-center gap-4 lg:max-w-[54vw] lg:gap-[3.3vw] lg:pl-[0.1vw]">
          <span className="grid h-[56px] w-[66px] shrink-0 place-items-center rounded-[13px] bg-[linear-gradient(135deg,#f3271c_0%,#ff5516_55%,#f68d14_100%)] font-sans text-[24px] font-extrabold tracking-[-0.03em] text-white shadow-[0_8px_20px_-6px_rgb(243_39_28/0.45)] lg:h-[6.35vw] lg:w-[7.22vw] lg:rounded-[1.25vw] lg:text-[2.6vw]">
            09
          </span>
          <div>
            <h2
              id="behind-the-frames-heading"
              className="font-sans text-[21px] font-extrabold uppercase leading-[1.1] tracking-[0.02em] text-[#0c0c10] lg:text-[2.4vw]"
            >
              BEHIND THE FRAMES
            </h2>
            <p className="mt-1 font-sans text-[15px] font-normal leading-[1.25] tracking-[-0.01em] text-[#5e626d] lg:mt-[0.3vw] lg:text-[1.6vw]">
              From concept to final animation.
            </p>
          </div>
        </div>

        {/* Middle Split-Stage Artwork Banner (Sketch on Left -> Full 3D Color on Right) */}
        <div className="relative z-10 mt-5 aspect-[984/372] w-full overflow-hidden rounded-[12px] lg:-mt-[3.4vw] lg:rounded-[0.95vw]">
          <Image
            src="/images/portfolio-behind-frames.jpg"
            alt="Split-screen animation comparison showing a hand-drawn pencil concept sketch on the left transitioning into a vibrant full-color 3D animated girl and golden puppy in a sunlit meadow on the right"
            fill
            quality={90}
            sizes="(min-width: 1024px) 96vw, 100vw"
            className="object-contain object-center"
          />
        </div>

        {/* Bottom 5-Step Process Timeline */}
        <div className="relative z-20 mt-6 lg:mt-[1.15vw] lg:px-[4.8vw]">
          {/* Horizontal Connecting Line (Desktop) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[2.68vw] right-[8.5vw] left-[8.5vw] hidden h-[2px] bg-gradient-to-r from-[#eb4a22] via-[#ef7e22] to-[#e43b20] lg:block"
          />

          <ol className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:flex lg:items-start lg:justify-between">
            {PROCESS_STEPS.map((step) => (
              <li
                key={step.number}
                className="relative z-10 flex flex-col items-center text-center last:col-span-2 sm:last:col-span-1 lg:w-[11vw]"
              >
                <span
                  className={`grid size-[52px] place-items-center rounded-full border-[2.5px] bg-white shadow-[0_6px_16px_-4px_rgb(242_100_27/0.25)] lg:size-[5.35vw] lg:border-[0.26vw] ${step.ringClass}`}
                >
                  {step.icon}
                </span>
                <span className="mt-2 font-sans text-[15px] font-extrabold leading-none tracking-[-0.02em] text-[#0c0c10] lg:mt-[0.65vw] lg:text-[1.42vw]">
                  {step.number}
                </span>
                <span className="mt-1 font-sans text-[14px] font-normal leading-tight text-[#686b75] lg:mt-[0.28vw] lg:text-[1.42vw]">
                  {step.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
