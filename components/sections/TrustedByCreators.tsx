"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  EASE_OUT_EXPO,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

const TESTIMONIALS = [
  {
    id: 0,
    quote: "“The team brought my children’s book to life perfectly. The animation exceeded my expectations!”",
    name: "Emily Carter",
    role: "Children’s Book Author",
    avatar: "/images/portfolio-client-emily.jpg",
  },
  {
    id: 1,
    quote: "“Their 3D animation and storytelling transformed our product launch into our highest-converting campaign.”",
    name: " Emily Carter",
    role: "Creative Director",
    avatar: "/images/portfolio-client-emily.jpg",
  },
  {
    id: 2,
    quote: "“Every frame was crafted with care, emotion, and cinematic polish. Truly world-class animation partners.”",
    name: "Emily Carter",
    role: "Brand Storyteller",
    avatar: "/images/portfolio-client-emily.jpg",
  },
  {
    id: 3,
    quote: "“From initial concept sketches to final delivery, the studio made our vision move people worldwide.”",
    name: "Emily Carter",
    role: "Publishing Founder",
    avatar: "/images/portfolio-client-emily.jpg",
  },
] as const;

const BRAND_LOGOS = [
  { name: "Google", image: "/images/portfolio-logo-1-google.jpg" },
  { name: "Microsoft", image: "/images/portfolio-logo-2-microsoft.jpg" },
  { name: "Amazon", image: "/images/portfolio-logo-3-amazon.jpg" },
  { name: "Coca-Cola", image: "/images/portfolio-logo-4-cocacola.jpg" },
  { name: "Nike", image: "/images/portfolio-logo-5-nike.jpg" },
  { name: "Adobe", image: "/images/portfolio-logo-6-adobe.jpg" },
  { name: "Disney", image: "/images/portfolio-logo-7-disney.jpg" },
  { name: "Upwork", image: "/images/portfolio-logo-8-upwork.jpg" },
] as const;

export function TrustedByCreators() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentTestimonial = TESTIMONIALS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="trusted-by-creators"
      aria-labelledby="trusted-by-creators-heading"
      className="w-full bg-white px-6 py-6 sm:px-10 lg:px-[0.98vw] lg:py-[1.5vw]"
    >
      {/* Framed Rounded Card Container */}
      <div className="relative isolate w-full overflow-hidden rounded-[18px] border-[1.5px] border-[#f28430] bg-white px-5 pt-6 pb-6 shadow-[0_14px_40px_-12px_rgb(15_23_42/0.07)] sm:px-8 lg:rounded-[1.25vw] lg:px-[2.2vw] lg:pt-[2.25vw] lg:pb-[1.85vw]">
        {/* Top Header Row: 10 Badge + TRUSTED BY CREATORS WORLDWIDE */}
        <Reveal className="flex items-center gap-4 lg:gap-[2.5vw]" y={18}>
          <span className="grid h-[58px] w-[68px] shrink-0 place-items-center rounded-[13px] bg-[linear-gradient(135deg,#f3271c_0%,#ff5516_55%,#f68d14_100%)] font-sans text-[26px] font-extrabold tracking-[-0.03em] text-white shadow-[0_8px_20px_-6px_rgb(243_39_28/0.45)] lg:h-[6.35vw] lg:w-[7.05vw] lg:rounded-[1.25vw] lg:text-[2.85vw]">
            10
          </span>
          <div>
            <h2
              id="trusted-by-creators-heading"
              className="font-sans text-[21px] font-black uppercase leading-[1.08] tracking-[-0.02em] text-[#0c0c10] lg:text-[2.65vw]"
            >
              TRUSTED BY CREATORS{" "}
              <span className="bg-[linear-gradient(92deg,#f1271c_0%,#ff5816_50%,#ff8c14_100%)] bg-clip-text text-transparent">
                WORLDWIDE
              </span>
            </h2>
            <p className="mt-1 font-sans text-[14px] font-normal leading-[1.28] tracking-[-0.01em] text-[#6c707c] lg:mt-[0.35vw] lg:text-[1.68vw]">
              Authors, brands and businesses who believe in the power of animation.
            </p>
          </div>
        </Reveal>

        {/* Middle Showcase Row: Left Testimonial Card + Right 4x2 Brand Logos Grid */}
        <div className="relative mt-6 flex flex-col items-center justify-between gap-6 lg:mt-[2.2vw] lg:flex-row lg:items-stretch lg:gap-[1.2vw]">
          {/* Left Circular Prev Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute -left-2 top-1/2 z-20 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[#f59c5b] bg-white text-[#ef3219] shadow-[0_6px_18px_rgb(245_120_40/0.24)] transition-transform duration-150 hover:scale-105 active:scale-95 lg:-left-[1.75vw] lg:size-[4.1vw]"
          >
            <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.6vw]" fill="none" aria-hidden="true">
              <path
                d="M12.2 5.2 7.4 10l4.8 4.8"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Left Testimonial Card */}
          <Reveal
            as="article"
            className="relative flex w-full flex-col items-center gap-5 rounded-[16px] border-[1.4px] border-[#f39855] bg-white p-5 shadow-[0_10px_28px_-8px_rgb(243_130_50/0.18)] sm:flex-row lg:h-[18.6vw] lg:w-[42.5vw] lg:shrink-0 lg:gap-[1.5vw] lg:rounded-[1.15vw] lg:px-[1.5vw] lg:py-[1.3vw]"
            y={22}
            delay={0.05}
          >
            {/* Circular Client Portrait */}
            <div className="relative size-[110px] shrink-0 overflow-hidden rounded-full border-[3px] border-white shadow-[0_6px_18px_rgb(0_0_0/0.12)] lg:size-[13.6vw]">
              <Image
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                fill
                quality={90}
                sizes="(min-width: 1024px) 14vw, 120px"
                className="object-cover"
              />
            </div>

            {/* Quote & Author Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                className="relative flex flex-col justify-center text-center sm:text-left"
              >
                {/* Opening Double Quote Icon */}
                <svg
                  viewBox="0 0 38 28"
                  className="mx-auto mb-1 h-6 w-8 sm:mx-0 lg:-ml-[1.6vw] lg:mb-[0.1vw] lg:h-[2.6vw] lg:w-[3.5vw]"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="quote-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f1221c" />
                      <stop offset="100%" stopColor="#ff7a14" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M14.8 1.6C8.2 4.4 4.2 9.8 4.2 16.5c0 4.8 3.2 8.2 7.4 8.2 4 0 6.8-2.8 6.8-6.5 0-3.6-2.6-6.2-6-6.2-.8 0-1.6.2-2.1.4.7-3.4 3.2-6.4 6.8-8.1L14.8 1.6Zm18 0c-6.6 2.8-10.6 8.2-10.6 14.9 0 4.8 3.2 8.2 7.4 8.2 4 0 6.8-2.8 6.8-6.5 0-3.6-2.6-6.2-6-6.2-.8 0-1.6.2-2.1.4.7-3.4 3.2-6.4 6.8-8.1L32.8 1.6Z"
                    fill="url(#quote-grad)"
                  />
                </svg>

                <blockquote className="font-sans text-[14px] font-normal leading-[1.42] tracking-[-0.01em] text-[#22252f] lg:text-[1.22vw]">
                  {currentTestimonial.quote}
                </blockquote>

                <div className="mt-3 lg:mt-[1.05vw]">
                  <p className="font-sans text-[16px] font-extrabold leading-tight tracking-[-0.02em] text-[#0c0c10] lg:text-[1.48vw]">
                    {currentTestimonial.name}
                  </p>
                  <p className="mt-0.5 font-sans text-[13px] font-normal leading-tight text-[#727682] lg:mt-[0.2vw] lg:text-[1.22vw]">
                    {currentTestimonial.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>

          {/* Right 4x2 Brand Logos Grid */}
          <StaggerGroup
            className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[48.5vw] lg:gap-[0.95vw]"
            stagger={0.06}
          >
            {BRAND_LOGOS.map((brand) => (
              <StaggerItem key={brand.name} y={16}>
                <div className="flex h-[82px] items-center justify-center overflow-hidden rounded-[10px] border border-[#f0f1f5] bg-white p-2 shadow-[0_6px_20px_-6px_rgb(15_23_42/0.09)] transition-transform duration-200 hover:-translate-y-0.5 lg:h-[8.8vw] lg:rounded-[0.78vw] lg:p-[0.5vw]">
                  <div className="relative h-full w-full">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      quality={90}
                      sizes="(min-width: 1024px) 11vw, (min-width: 640px) 22vw, 44vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Right Circular Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute -right-2 top-1/2 z-20 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[#f59c5b] bg-white text-[#ef3219] shadow-[0_6px_18px_rgb(245_120_40/0.24)] transition-transform duration-150 hover:scale-105 active:scale-95 lg:-right-[1.75vw] lg:size-[4.1vw]"
          >
            <svg viewBox="0 0 20 20" className="size-4 lg:size-[1.6vw]" fill="none" aria-hidden="true">
              <path
                d="m7.8 5.2 4.8 4.8-4.8 4.8"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Bottom Pagination Dots (aligned under the Left Testimonial Card) */}
        <div className="mt-4 flex items-center justify-center gap-3 lg:mt-[1.25vw] lg:w-[42.5vw] lg:gap-[1.25vw]">
          {TESTIMONIALS.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View testimonial ${idx + 1}`}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive
                    ? "grid size-5 cursor-pointer place-items-center rounded-full bg-[linear-gradient(135deg,#f3271c_0%,#ff7814_100%)] shadow-[0_3px_10px_rgb(243_39_28/0.4)] lg:size-[2.25vw]"
                    : "size-2 cursor-pointer rounded-full bg-[#8c909b] transition-colors hover:bg-[#ef4b18] lg:size-[0.82vw]"
                }
              >
                {isActive && <span className="size-2 rounded-full bg-white lg:size-[0.88vw]" />}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
