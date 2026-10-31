"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ParallaxBackground,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

const TWO_D_FEATURES = [
  "A script written for your product",
  "A storyboard you approve before we animate",
  "English voiceover",
  "Animation in 2D, whiteboard or motion graphics",
  "Three video formats and two revision rounds per stage",
] as const;

const THREE_D_FEATURES = [
  "A script written for your product",
  "A storyboard you approve before we animate",
  "English voiceover",
  "High-quality 3D animation and motion graphics",
  "Three video formats and two revision rounds per stage",
] as const;

function CheckBadge() {
  return (
    <span className="grid size-4.5 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ff141f_0%,#ff4d14_100%)] text-white shadow-[0_2px_6px_rgb(255_37_27/0.28)] lg:size-[1.5vw]">
      <svg viewBox="0 0 20 20" className="size-2.5 lg:size-[0.9vw]" fill="none" aria-hidden="true">
        <path
          d="m5.2 10.3 3.1 3.1 6.5-6.6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function LandingPricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="landing-pricing-heading"
      className="relative isolate w-full overflow-hidden bg-white py-14 lg:min-h-[56.25vw] lg:py-0"
    >
      {/* Full-bleed 16:9 background artwork featuring the upper-right 2D girl & 3D astronaut robot studio composite */}
      <ParallaxBackground
        className="pointer-events-none hidden lg:absolute lg:inset-0 lg:-z-10 lg:block"
        offset={24}
      >
        <Image
          src="/images/landing-pricing-bg.jpg"
          alt="2D character sketches and a smiling animated girl alongside a 3D astronaut robot and futuristic CAD monitors"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </ParallaxBackground>

      {/* Main Content Container calibrated to the 1024x576 reference */}
      <div className="relative z-10 flex w-full flex-col justify-between px-6 sm:px-10 lg:min-h-[56.25vw] lg:px-[4.1vw] lg:pt-[3.6vw] lg:pb-[1.1vw]">
        {/* Top Row: Left Heading Column + Top-Right Arrow */}
        <div className="flex items-start justify-between gap-6">
          <StaggerGroup
            className="max-w-[460px] lg:max-w-[33vw]"
            stagger={0.09}
            delayChildren={0.05}
          >
            {/* 06 | PRICING REVEAL ————— Eyebrow */}
            <StaggerItem>
              <div className="flex items-center gap-3 lg:gap-[1.05vw]">
                <span className="font-sans text-[18px] font-extrabold tracking-[-0.02em] text-[#08090c] lg:text-[1.78vw]">
                  06
                </span>
                <span
                  aria-hidden="true"
                  className="h-4 w-[1.5px] shrink-0 bg-[#9ca1ae] lg:h-[1.55vw]"
                />
                <p className="whitespace-nowrap font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#353946] lg:text-[0.96vw]">
                  PRICING REVEAL
                </p>
                <span
                  aria-hidden="true"
                  className="ml-1 h-[1.2px] w-12 shrink-0 bg-[#c5cad6] sm:w-20 lg:ml-[0.5vw] lg:w-[13.2vw]"
                />
              </div>
            </StaggerItem>

            {/* 2-Line Display Heading */}
            <StaggerItem>
              <h2
                id="landing-pricing-heading"
                className="mt-3 font-sans text-[clamp(2.15rem,5.95vw,6.15rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#08090c] lg:mt-[1.35vw]"
              >
                <span className="block sm:whitespace-nowrap">One</span>
                <span className="mt-[0.04vw] block sm:whitespace-nowrap bg-[linear-gradient(90deg,#ef131e_0%,#ff4617_54%,#ff6c10_100%)] bg-clip-text text-transparent">
                  clear price.
                </span>
              </h2>
            </StaggerItem>

            {/* 2-Line Subtitle */}
            <StaggerItem>
              <p className="mt-3 font-sans text-[14.5px] font-normal leading-[1.4] tracking-[-0.01em] text-[#3c4150] lg:mt-[1.05vw] lg:text-[1.34vw]">
                High-quality 2D and 3D animation,
                <br className="hidden sm:inline" /> at a transparent, straightforward price.
              </p>
            </StaggerItem>
          </StaggerGroup>

          {/* Top-Right Decorative Arrow */}
          <div className="hidden pt-1 lg:block lg:pt-[0.2vw]" aria-hidden="true">
            <svg
              viewBox="0 0 88 18"
              className="h-4 w-20 text-[#171920] lg:h-[1.5vw] lg:w-[7.5vw]"
              fill="none"
            >
              <path
                d="M2 9h83M78 2.5 85.5 9 78 15.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Bottom Row: 2 Side-by-Side Pricing Cards */}
        <StaggerGroup
          className="mt-8 grid grid-cols-1 gap-6 lg:mt-[1.1vw] lg:grid-cols-2 lg:gap-[2.1vw] lg:px-[4.4vw]"
          stagger={0.14}
          delayChildren={0.1}
        >
          {/* Card 1: 2D Explainer Video ($2,999) */}
          <StaggerItem className="h-full">
            <article className="group flex h-full flex-col justify-between rounded-[16px] border border-[#eceef4] bg-white p-5 shadow-[0_16px_38px_-10px_rgb(15_23_42/0.12)] transition-transform duration-300 hover:-translate-y-1 lg:rounded-[1.25vw] lg:px-[2.15vw] lg:py-[1.45vw]">
              <div>
                {/* Top Sub-Grid: Left Title & Price + Right Video Thumbnail */}
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <div className="flex items-center gap-2.5 lg:gap-[0.75vw]">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#feeae6] text-[#f21b22] transition-transform duration-300 group-hover:scale-110 lg:size-[2.55vw]">
                        <svg
                          viewBox="0 0 24 24"
                          className="size-4 lg:size-[1.3vw]"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="m14.5 5.5 4 4M5 19l4.2-1 9.6-9.6a1.8 1.8 0 0 0 0-2.6l-1.6-1.6a1.8 1.8 0 0 0-2.6 0L5 13.8 4 18l1 1Z"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <h3 className="font-sans text-[16px] font-bold tracking-[-0.015em] text-[#090a0d] lg:text-[1.24vw]">
                        2D explainer video
                      </h3>
                    </div>

                    <p className="mt-2.5 font-sans text-[36px] font-extrabold leading-none tracking-[-0.035em] text-[#ee1b22] lg:mt-[0.7vw] lg:text-[3.55vw]">
                      $2,999
                    </p>
                    <p className="mt-1 font-sans text-[14.5px] font-medium text-[#111319] lg:mt-[0.25vw] lg:text-[1.34vw]">
                      for 60 seconds
                    </p>
                  </div>

                  {/* Right 2D Video Thumbnail */}
                  <div className="relative aspect-[170/96] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#fdf3d7] sm:w-[175px] lg:w-[16.6vw] lg:rounded-[0.78vw]">
                    <Image
                      src="/images/pricing-thumb-2d.jpg"
                      alt="2D animated girl smiling and pointing at a glowing lightbulb sketch with a play button"
                      fill
                      quality={90}
                      sizes="(min-width: 1024px) 17vw, 200px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* 5 Checkmark Features */}
                <ul className="mt-3.5 space-y-1.5 lg:mt-[0.65vw] lg:space-y-[0.38vw]">
                  {TWO_D_FEATURES.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 lg:gap-[0.75vw]">
                      <CheckBadge />
                      <span className="font-sans text-[12.5px] font-normal leading-[1.3] text-[#262934] lg:text-[0.94vw]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Divider + Payment Milestone Note + CTA Button */}
              <div className="mt-4 border-t border-[#e8ebf2] pt-3 lg:mt-[0.8vw] lg:pt-[0.65vw]">
                <p className="font-sans text-[11.5px] font-normal leading-[1.35] text-[#454a59] lg:text-[0.82vw]">
                  You pay 50% to start, 40% after storyboard approval, 10% before final files.
                </p>

                <div className="mt-2.5 lg:mt-[0.65vw]">
                  <Link
                    href="#quote"
                    className="group/btn inline-flex h-[42px] items-center justify-center gap-2.5 rounded-[8px] bg-[linear-gradient(92deg,#ff0e22_0%,#ff4618_54%,#ff780f_100%)] px-6 font-sans text-[14px] font-semibold tracking-[-0.01em] text-white shadow-[0_10px_22px_-6px_rgb(255_42_24/0.46)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-6px_rgb(255_42_24/0.56)] lg:h-[3.55vw] lg:w-[21.2vw] lg:gap-[0.7vw] lg:rounded-[0.68vw] lg:px-0 lg:text-[1.18vw]"
                  >
                    <span>Get a Fixed Quote</span>
                    <svg viewBox="0 0 20 20" className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1 lg:size-[1.1vw]" fill="none" aria-hidden="true">
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
            </article>
          </StaggerItem>

          {/* Card 2: 3D Animation (From $5,500) */}
          <StaggerItem className="h-full">
            <article className="group flex h-full flex-col justify-between rounded-[16px] border border-[#eceef4] bg-white p-5 shadow-[0_16px_38px_-10px_rgb(15_23_42/0.12)] transition-transform duration-300 hover:-translate-y-1 lg:rounded-[1.25vw] lg:px-[2.15vw] lg:py-[1.45vw]">
              <div>
                {/* Top Sub-Grid: Left Title & Price + Right Video Thumbnail */}
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <div className="flex items-center gap-2.5 lg:gap-[0.75vw]">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#feeae6] text-[#f21b22] transition-transform duration-300 group-hover:scale-110 lg:size-[2.55vw]">
                        <svg
                          viewBox="0 0 24 24"
                          className="size-4 lg:size-[1.3vw]"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M12 3.5 4.5 7.8v8.4L12 20.5l7.5-4.3V7.8L12 3.5Z"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.5 7.8 12 12l7.5-4.2M12 12v8.5"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <h3 className="font-sans text-[16px] font-bold tracking-[-0.015em] text-[#090a0d] lg:text-[1.24vw]">
                        3D animation
                      </h3>
                    </div>

                    <p className="mt-2.5 font-sans leading-none tracking-[-0.035em] lg:mt-[0.7vw]">
                      <span className="text-[24px] font-extrabold text-[#eb261d] lg:text-[2.35vw]">
                        From{" "}
                      </span>
                      <span className=" bg-[linear-gradient(90deg,#ef131e_0%,#ff5514_100%)] bg-clip-text text-[34px] font-extrabold text-transparent lg:text-[3.35vw]">
                        $5,500
                      </span>
                    </p>
                    <p className="mt-1.5 font-sans text-[13px] font-normal text-[#2e323f] lg:mt-[0.35vw] lg:text-[1.08vw]">
                      Quoted by scope after a short brief.
                    </p>
                  </div>

                  {/* Right 3D Video Thumbnail */}
                  <div className="relative aspect-[165/96] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#0d1528] sm:w-[170px] lg:w-[16.2vw] lg:rounded-[0.78vw]">
                    <Image
                      src="/images/pricing-thumb-3d.jpg"
                      alt="3D astronaut robot in orbit above Earth with a play button"
                      fill
                      quality={90}
                      sizes="(min-width: 1024px) 17vw, 200px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* 5 Checkmark Features */}
                <ul className="mt-3.5 space-y-1.5 lg:mt-[0.65vw] lg:space-y-[0.38vw]">
                  {THREE_D_FEATURES.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 lg:gap-[0.75vw]">
                      <CheckBadge />
                      <span className="font-sans text-[12.5px] font-normal leading-[1.3] text-[#262934] lg:text-[0.94vw]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Full Pricing Page Link + Confirmation Note */}
              <div className="mt-4 pt-3 lg:mt-[0.8vw] lg:pt-[0.65vw]">
                <Link
                  href="#quote"
                  className="group/link inline-flex items-center gap-1.5 font-sans text-[14px] font-bold tracking-[-0.01em] text-[#e0351b] underline decoration-[#e0351b]/60 underline-offset-4 transition-colors hover:text-[#ff1b1c] lg:text-[1.14vw]"
                >
                  <span>See the full pricing page</span>
                  <svg
                    viewBox="0 0 20 20"
                    className="size-3.5 transition-transform duration-150 group-hover/link:translate-x-0.5 lg:size-[1.1vw]"
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

                <p className="mt-1.5 font-sans text-[11.5px] font-normal leading-[1.35] text-[#6d7280] lg:mt-[0.4vw] lg:text-[0.88vw]">
                  Pricing and terms subject to confirmation.
                </p>
              </div>
            </article>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
