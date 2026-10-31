"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { EASE_OUT_EXPO, Reveal } from "@/components/motion/MotionPrimitives";

const WAVEFORM_BARS = [
  { heightPct: 38, color: "#f58572" },
  { heightPct: 68, color: "#f37664" },
  { heightPct: 92, color: "#f16b5b" },
  { heightPct: 54, color: "#f68f68" },
  { heightPct: 86, color: "#f26e5c" },
  { heightPct: 34, color: "#f79f66" },
  { heightPct: 52, color: "#f47e63" },
  { heightPct: 78, color: "#f48858" },
  { heightPct: 95, color: "#f79a52" },
  { heightPct: 84, color: "#f8aa56" },
  { heightPct: 48, color: "#f6975c" },
  { heightPct: 36, color: "#f8b364" },
  { heightPct: 62, color: "#f7a258" },
  { heightPct: 34, color: "#f58962" },
  { heightPct: 56, color: "#f16d5a" },
  { heightPct: 58, color: "#f16c59" },
  { heightPct: 44, color: "#f6935f" },
  { heightPct: 64, color: "#f8ad5b" },
  { heightPct: 32, color: "#f9ba66" },
  { heightPct: 74, color: "#f8a655" },
  { heightPct: 68, color: "#f69558" },
  { heightPct: 78, color: "#f7a356" },
  { heightPct: 34, color: "#f9bd68" },
  { heightPct: 60, color: "#f8ab5b" },
  { heightPct: 88, color: "#f8a854" },
  { heightPct: 96, color: "#f69352" },
  { heightPct: 100, color: "#f58c50" },
  { heightPct: 76, color: "#f79d56" },
  { heightPct: 36, color: "#f9be68" },
  { heightPct: 78, color: "#f4835b" },
  { heightPct: 98, color: "#f17257" },
  { heightPct: 84, color: "#f37a5b" },
  { heightPct: 62, color: "#f6955d" },
  { heightPct: 36, color: "#f9be69" },
  { heightPct: 68, color: "#f79e59" },
  { heightPct: 82, color: "#e56a54" },
  { heightPct: 92, color: "#ea6d55" },
  { heightPct: 86, color: "#f2785b" },
  { heightPct: 62, color: "#f6935d" },
  { heightPct: 34, color: "#f9be69" },
  { heightPct: 66, color: "#f6915d" },
  { heightPct: 50, color: "#f9b864" },
  { heightPct: 64, color: "#f6915e" },
  { heightPct: 36, color: "#f9be68" },
  { heightPct: 52, color: "#f68f60" },
  { heightPct: 36, color: "#f8ab62" },
  { heightPct: 68, color: "#f3795e" },
  { heightPct: 76, color: "#f2745b" },
  { heightPct: 68, color: "#f4825d" },
  { heightPct: 50, color: "#f6935f" },
] as const;

export function TwoDStoryboardToFinal() {
  const [progress, setProgress] = useState(52);

  return (
    <section
      id="storyboard-to-final"
      aria-labelledby="storyboard-to-final-heading"
      className="relative isolate w-full overflow-hidden bg-white py-8 lg:min-h-[56.25vw] lg:py-0"
    >
      {/* Top-Left Header: 08 Badge + STORYBOARD TO FINAL + Subtitle */}
      <Reveal className="w-full px-6 pt-2 sm:px-10 lg:px-[2.45vw] lg:pt-[2.2vw]" y={18}>
        <div className="flex items-center gap-4 lg:gap-[2.1vw]">
          <span className="grid h-[50px] w-[52px] shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#ff7610_0%,#ff4b16_48%,#ff171d_100%)] font-sans text-[21px] font-extrabold tracking-[-0.02em] text-white shadow-[0_8px_20px_-4px_rgb(255_55_22/0.45)] lg:h-[6.35vw] lg:w-[6.55vw] lg:rounded-[1.15vw] lg:text-[2.55vw]">
            08
          </span>
          <div>
            <h2
              id="storyboard-to-final-heading"
              className="font-sans text-[clamp(1.25rem,2.45vw,2.55rem)] font-black uppercase leading-[1.08] tracking-[-0.02em] text-[#090a0d]"
            >
              STORYBOARD TO FINAL
            </h2>
            <p className="mt-1 font-sans text-[13.5px] font-normal leading-[1.25] tracking-[-0.01em] text-[#747882] lg:mt-[0.3vw] lg:text-[1.66vw]">
              See the transformation from concept sketches to finished 2D animation.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Main Split Storyboard-to-Final Comparison Canvas */}
      <div className="mt-5 w-full px-6 sm:px-10 lg:mt-[1.45vw] lg:px-[4.3vw]">
        <Reveal y={22} delay={0.08}>
          <div className="group relative aspect-[928/354] w-full overflow-hidden rounded-[14px] border border-[#e3e6ee] bg-white shadow-[0_14px_34px_-10px_rgb(15_23_42/0.16)] lg:aspect-auto lg:h-[34.8vw] lg:rounded-[1.15vw]">
            <Image
              src="/images/two-d-storyboard-final.jpg"
              alt="Split comparison showing black-and-white 2D storyboard line art on the left transitioning across an orange divider into the finished full-color 2D animation of the adventurer girl and her fox in a wooden boat at sunset on the right"
              fill
              quality={92}
              sizes="92vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </Reveal>

        {/* Bottom Interactive Timeline Waveform & Scrubber */}
        <div className="mt-4 w-full select-none lg:mt-[1.25vw]">
          <div className="relative flex h-12 w-full items-center justify-between gap-[2px] px-1 sm:gap-[3px] lg:h-[5.4vw] lg:gap-[0.95vw]">
            {/* 50 Vertical Waveform Bars */}
            {WAVEFORM_BARS.map((bar, index) => (
              <motion.span
                key={index}
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.008, 0.38),
                  ease: EASE_OUT_EXPO,
                }}
                style={{
                  height: `${bar.heightPct}%`,
                  backgroundColor: bar.color,
                }}
                className="min-w-[2px] max-w-[4px] flex-1 origin-center rounded-full transition-transform duration-150 lg:w-[0.58vw] lg:max-w-none lg:flex-initial lg:shrink-0"
              />
            ))}

            {/* Horizontal Scrubber Line overlaid across lower third of waveform */}
            <div className="pointer-events-none absolute inset-x-0 bottom-[18%] flex items-center">
              {/* Active Red-Orange Left Track */}
              <div
                style={{ width: `${progress}%` }}
                className="h-[3px] rounded-l-full bg-[linear-gradient(90deg,#e52220_0%,#ff5816_100%)] lg:h-[0.28vw]"
              />
              {/* Inactive Soft Gray Right Track */}
              <div className="h-[2px] flex-1 rounded-r-full bg-[#e5e7ef] lg:h-[0.18vw]" />
            </div>

            {/* Scrubber Thumb Circle */}
            <div
              style={{ left: `${progress}%` }}
              className="pointer-events-none absolute bottom-[18%] z-10 size-4 -translate-x-1/2 translate-y-1/2 rounded-full border-[3px] border-[#e8381b] bg-white shadow-[0_2px_8px_rgb(232_56_27/0.35)] lg:size-[1.65vw] lg:border-[0.28vw]"
            />

            {/* Accessible Range Input for Scrubbing */}
            <input
              type="range"
              min={5}
              max={95}
              value={progress}
              aria-label="Timeline progress from Concept to Final Frame"
              onChange={(e) => setProgress(Number(e.target.value))}
              className="absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
            />
          </div>

          {/* Bottom Labels: CONCEPT and FINAL FRAME */}
          <div className="mt-1 flex items-center justify-between font-sans text-[11px] font-medium uppercase tracking-[0.03em] text-[#686c75] lg:mt-[0.35vw] lg:text-[1.12vw]">
            <span>CONCEPT</span>
            <span>FINAL FRAME</span>
          </div>
        </div>
      </div>
    </section>
  );
}
