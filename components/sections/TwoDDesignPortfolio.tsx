"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  EASE_OUT_EXPO,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

interface PortfolioSlide {
  id: string;
  title: string;
  category: string;
  duration: string;
  image: string;
  alt: string;
  description: string;
}

const PORTFOLIO_SLIDES: readonly PortfolioSlide[] = [
  {
    id: "aerospace-rocket",
    title: "Orbital Launch Vehicle Telemetry",
    category: "Aerospace",
    duration: "01:50",
    image: "/images/two-d-portfolio-left-rocket.jpg?v=4",
    alt: "2D illustration of a white and red space rocket launching into starry night sky above Earth",
    description:
      "High-impact 2D aerospace animation explaining multi-stage propulsion, orbital insertion, and mission telemetry.",
  },
  {
    id: "real-estate-villa",
    title: "Architectural Property Showcase",
    category: "Real Estate",
    duration: "01:35",
    image: "/images/two-d-industry-card-realestate.jpg?v=4",
    alt: "2D architectural illustration of a luxury modern glass home glowing warmly at dusk",
    description:
      "Warm architectural storytelling highlighting smart-home integration, modern lighting, and residential lifestyle.",
  },
  {
    id: "automotive-ev",
    title: "EV Battery & Drivetrain Architecture",
    category: "Automotive",
    duration: "02:05",
    image: "/images/two-d-portfolio-left-car.jpg?v=4",
    alt: "2D illustration of a sleek white electric sedan on a twilight highway with glowing cyan X-ray drivetrain cutaway",
    description:
      "Clear visual breakdown of electric vehicle battery management, regenerative braking, and fast-charging networks.",
  },
  {
    id: "mechanical-engine",
    title: "4-Cylinder Internal Combustion Blueprint",
    category: "Mechanical Engineering",
    duration: "02:20",
    image: "/images/two-d-portfolio-center-engine.jpg?v=4",
    alt: "Detailed 2D cutaway illustration of a 4-cylinder internal combustion engine with glowing pistons, air intake arrows, and HUD schematics",
    description:
      "Precision technical 2D animation demonstrating air intake, compression, internal combustion, and crankshaft kinematics.",
  },
  {
    id: "healthcare-clinical",
    title: "Cardiology & Clinical Diagnostics",
    category: "Healthcare",
    duration: "01:45",
    image: "/images/two-d-portfolio-right-healthcare.jpg?v=4",
    alt: "2D medical illustration featuring a modern hospital building, medical chart clipboard, and glowing red anatomical heart with ECG pulse",
    description:
      "Patient-friendly medical explainer simplifying cardiac diagnostics, hospital workflows, and clinical outcomes.",
  },
  {
    id: "product-headphones",
    title: "Acoustic Engineering & Wireless Audio",
    category: "Product Animation",
    duration: "01:25",
    image: "/images/two-d-portfolio-right-headphones.jpg?v=4",
    alt: "2D product illustration of metallic orange wireless headphones with soundwave, battery, and Bluetooth feature callouts",
    description:
      "Vibrant consumer product commercial showcasing active noise cancellation, battery life, and Bluetooth connectivity.",
  },
] as const;

export function TwoDDesignPortfolio() {
  // Default active slide is index 3 ("Mechanical Engine") matching the reference image
  const [activeIndex, setActiveIndex] = useState<number>(3);
  const [modalSlide, setModalSlide] = useState<PortfolioSlide | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const total = PORTFOLIO_SLIDES.length;

  useEffect(() => {
    if (isPaused || modalSlide) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, modalSlide, total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Compute relative offset from activeIndex so we can position the 6 cards in the curved 3D stage:
  // slots: -3 (far-left), -2 (mid-left), -1 (near-left), 0 (center featured), +1 (near-right), +2 (far-right)
  const getRelativeSlot = (idx: number) => {
    let diff = idx - activeIndex;
    if (diff > 2) diff -= total;
    if (diff < -3) diff += total;
    return diff;
  };

  const getSlotStyles = (slot: number) => {
    switch (slot) {
      case 0:
        return {
          left: "50%",
          width: "38%",
          height: "305px",
          zIndex: 30,
          rotateY: 0,
          translateZ: 0,
          opacity: 1,
          borderColor: "#ff6b18",
          hasTopStepBracket: false,
        };
      case -1:
        // Near-left card: right edge touches center card (closer/taller), left edge recedes into depth (-Z) -> negative rotateY
        return {
          left: "24.2%",
          width: "16.8%",
          height: "246px",
          zIndex: 22,
          rotateY: -28,
          translateZ: -35,
          opacity: 0.96,
          borderColor: "#f03a47",
          hasTopStepBracket: false,
        };
      case -2:
        return {
          left: "13.2%",
          width: "11.8%",
          height: "204px",
          zIndex: 16,
          rotateY: -33,
          translateZ: -70,
          opacity: 0.92,
          borderColor: "#ff7218",
          hasTopStepBracket: true,
        };
      case -3:
        return {
          left: "4.9%",
          width: "9.8%",
          height: "174px",
          zIndex: 10,
          rotateY: -37,
          translateZ: -105,
          opacity: 0.88,
          borderColor: "#f03330",
          hasTopStepBracket: false,
        };
      case 1:
        // Near-right card: left edge touches center card (closer/taller), right edge recedes into depth (-Z) -> positive rotateY
        return {
          left: "75.8%",
          width: "16.8%",
          height: "246px",
          zIndex: 22,
          rotateY: 28,
          translateZ: -35,
          opacity: 0.96,
          borderColor: "#ff5c1a",
          hasTopStepBracket: false,
        };
      case 2:
      default:
        return {
          left: "91.1%",
          width: "17.8%",
          height: "206px",
          zIndex: 14,
          rotateY: 33,
          translateZ: -75,
          opacity: 0.92,
          borderColor: "#ff7a14",
          hasTopStepBracket: true,
        };
    }
  };

  return (
    <section
      id="portfolio"
      aria-labelledby="two-d-design-portfolio-heading"
      className="relative isolate w-full overflow-hidden bg-[radial-gradient(ellipse_75%_60%_at_50%_42%,#141a46_0%,#080a22_58%,#040511_100%)] py-12 text-white sm:py-16 lg:py-16"
    >
      {/* Ambient Stage Floor Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[16%] h-[160px] bg-[radial-gradient(ellipse_65%_50%_at_50%_50%,rgb(56_130_246/0.2)_0%,rgb(255_90_20/0.14)_45%,transparent_75%)] blur-2xl"
      />

      <div className="mx-auto w-[96%]">
        {/* Section Heading & Subtitle */}
        <Reveal className="text-center">
          <h2
            id="two-d-design-portfolio-heading"
            className="font-sans text-[32px] font-extrabold tracking-[-0.03em] text-white sm:text-[44px] lg:text-[54px] xl:text-[62px] 2xl:text-[70px]"
          >
            Our 2D Animation{" "}
            <span className="bg-[linear-gradient(90deg,#f22420_0%,#ff5c15_55%,#ff920a_100%)] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>

          <div className="mt-3 flex items-center justify-center gap-3.5 sm:gap-5">
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.65, delay: 0.15, ease: EASE_OUT_EXPO }}
              className="h-[2px] w-14 origin-right bg-gradient-to-r from-transparent to-[#ef2920] sm:w-28 lg:w-36"
            />
            <p className="font-sans text-[15px] font-normal tracking-[-0.01em] text-white/90 sm:text-[18px] lg:text-[21px] xl:text-[23px]">
              See ideas come to life across industries.
            </p>
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.65, delay: 0.15, ease: EASE_OUT_EXPO }}
              className="h-[2px] w-14 origin-left bg-gradient-to-l from-transparent to-[#ff8212] sm:w-28 lg:w-36"
            />
          </div>
        </Reveal>

        {/* Desktop 3D Perspective Coverflow Stage */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: EASE_OUT_EXPO }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mt-8 hidden h-[390px] w-full select-none lg:block"
          style={{ perspective: "1250px" }}
        >
          {PORTFOLIO_SLIDES.map((slide, idx) => {
            const slot = getRelativeSlot(idx);
            const style = getSlotStyles(slot);
            const isCenter = slot === 0;

            return (
              <motion.div
                key={slide.id}
                animate={{
                  left: style.left,
                  width: style.width,
                  height: style.height,
                  rotateY: style.rotateY,
                  z: style.translateZ,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                }}
                transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
                onClick={() => {
                  if (isCenter) {
                    setModalSlide(slide);
                  } else {
                    setActiveIndex(idx);
                  }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                className="group absolute top-[45%] cursor-pointer"
              >
                {/* Center Card Outer Vertical Tech Brackets & Glowing Corner Nodes (matching reference) */}
                {isCenter && (
                  <>
                    {/* Left Vertical Tech Post */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-[18px] bottom-0 -left-[9px] w-[14px] border-t-[1.8px] border-l-[1.8px] border-[#ff2f24]"
                    >
                      <motion.span
                        animate={{ scale: [1, 1.35, 1], opacity: [0.85, 1, 0.85] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[4px] right-0 size-2 rounded-full bg-[#ff2a22] shadow-[0_0_8px_#ff2a22]"
                      />
                    </div>
                    {/* Right Vertical Tech Post */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-[18px] -right-[9px] bottom-0 w-[14px] border-t-[1.8px] border-r-[1.8px] border-[#ff8a12]"
                    >
                      <motion.span
                        animate={{ scale: [1, 1.35, 1], opacity: [0.85, 1, 0.85] }}
                        transition={{ duration: 2, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[4px] left-0 size-2 rounded-full bg-[#ff8a12] shadow-[0_0_8px_#ff8a12]"
                      />
                    </div>
                  </>
                )}

                {/* Side Card Top Stepped Tech Bracket (matching reference on -2 and +2 cards) */}
                {style.hasTopStepBracket && (
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -top-[12px] h-[12px] border-t-[1.5px] border-[#ff6b1b]/75 ${
                      slot < 0
                        ? "right-0 left-[4%] border-l-[1.5px]"
                        : "right-[32%] left-0 border-r-[1.5px]"
                    }`}
                  >
                    <span
                      className={`absolute -top-[3.5px] size-1.5 rounded-full bg-[#ff6b1b] ${
                        slot < 0 ? "-left-[3px]" : "-right-[3px]"
                      }`}
                    />
                  </div>
                )}

                {/* Screen Card Body */}
                <div
                  className="relative h-full w-full overflow-hidden rounded-[3px] border-[1.8px] bg-[#080d22] shadow-[0_22px_50px_-10px_rgb(0_0_0/0.8)] transition-transform duration-300 group-hover:scale-[1.015]"
                  style={{ borderColor: style.borderColor }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    quality={95}
                    unoptimized
                    sizes={isCenter ? "42vw" : "20vw"}
                    className="object-cover"
                  />

                  {/* Center Active Screen Glowing Play Button Overlay */}
                  {isCenter ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5 transition-colors group-hover:bg-black/15">
                      <motion.span
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{
                          duration: 2.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="grid size-[68px] place-items-center rounded-full border-[3px] border-[#ff6c18] bg-[#141829]/85 text-white shadow-[0_0_28px_rgb(255_92_20/0.65)] backdrop-blur-xs transition-transform duration-300 group-hover:scale-110"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="size-7 translate-x-[1.5px] fill-current"
                          aria-hidden="true"
                        >
                          <path d="M5 3.8v12.4l10.2-6.2L5 3.8Z" />
                        </svg>
                      </motion.span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-[#050819]/15 transition-opacity duration-300 group-hover:opacity-0" />
                  )}
                </div>

                {/* Glossy Floor Reflection Beneath Each Screen */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -bottom-[36%] h-[34%] overflow-hidden opacity-35 blur-[2.5px] [transform:scaleY(-1)]"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, transparent 22%, rgba(0,0,0,0.9) 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 22%, rgba(0,0,0,0.9) 100%)",
                  }}
                >
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    unoptimized
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile / Tablet Responsive Portfolio Grid */}
        <StaggerGroup
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden"
          stagger={0.08}
          delayChildren={0.05}
        >
          {PORTFOLIO_SLIDES.map((slide, idx) => (
            <StaggerItem key={slide.id}>
              <button
                type="button"
                onClick={() => {
                  setActiveIndex(idx);
                  setModalSlide(slide);
                }}
                className={`group relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl border-2 text-left shadow-xl ${
                  idx === activeIndex ? "border-[#ff6b18]" : "border-white/20"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  unoptimized
                  sizes="(min-width: 640px) 48vw, 94vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <span className="grid size-12 place-items-center rounded-full border-2 border-[#ff6c18] bg-[#141829]/85 text-white shadow-lg">
                    <svg viewBox="0 0 20 20" className="size-5 translate-x-[1px] fill-current">
                      <path d="M5 3.8v12.4l10.2-6.2L5 3.8Z" />
                    </svg>
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#ff7c2a]">
                    {slide.category}
                  </span>
                  <p className="font-sans text-sm font-bold text-white">{slide.title}</p>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Carousel Navigation Arrows + Pagination Dots */}
        <div className="mt-3 flex items-center justify-center gap-8 sm:gap-14 lg:gap-20">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Portfolio Video"
            className="grid size-9 cursor-pointer place-items-center rounded-full border-[1.6px] border-[#ff5b16] bg-[#0d1025]/80 text-white transition-all duration-200 hover:scale-110 hover:bg-[#ff5b16] lg:size-10"
          >
            <svg
              viewBox="0 0 16 16"
              className="size-4"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 3.5 5.5 8 10 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2.5" role="tablist" aria-label="Portfolio Slides">
            {PORTFOLIO_SLIDES.map((slide, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  aria-label={`View ${slide.title}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer rounded-full transition-all duration-300 ${
                    isCurrent
                      ? "size-3 bg-[#ff7a14] shadow-[0_0_10px_#ff7a14]"
                      : "size-2.5 bg-white/35 hover:bg-white/65"
                  }`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Portfolio Video"
            className="grid size-9 cursor-pointer place-items-center rounded-full border-[1.6px] border-[#ff5b16] bg-[#0d1025]/80 text-white transition-all duration-200 hover:scale-110 hover:bg-[#ff5b16] lg:size-10"
          >
            <svg
              viewBox="0 0 16 16"
              className="size-4"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 3.5 10.5 8 6 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Bottom Pill CTA: View Full Portfolio -> */}
        <Reveal className="mt-6 flex justify-center lg:mt-7" delay={0.12}>
          <Link
            href="/portfolio"
            className="group relative inline-flex h-[46px] items-center justify-center gap-2.5 overflow-hidden rounded-[12px] bg-[linear-gradient(90deg,#e6171f_0%,#ff5114_55%,#ff8e0a_100%)] px-7 font-sans text-[15px] font-extrabold tracking-[-0.01em] text-white shadow-[0_14px_30px_-6px_rgb(245_55_20/0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-6px_rgb(245_55_20/0.75)] lg:h-[48px] lg:px-8 lg:text-[15.5px]"
          >
            <motion.span
              aria-hidden="true"
              initial={{ x: "-140%" }}
              animate={{ x: "260%" }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 2.3,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 w-16 -skew-x-20 bg-gradient-to-r from-transparent via-white/35 to-transparent"
            />
            <span className="relative z-10">View Full Portfolio</span>
            <svg
              viewBox="0 0 20 20"
              className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4.2 10h11.6M10.8 5.2 15.8 10l-5 4.8"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Reveal>
      </div>

      {/* Lightbox Video Preview Modal */}
      <AnimatePresence>
        {modalSlide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${modalSlide.title} Portfolio Preview`}
            onClick={() => setModalSlide(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-[#0e1326] text-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block size-2.5 rounded-full bg-[#ff5b16]" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#ff7d2b]">
                    {modalSlide.category}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="font-sans text-sm font-bold text-white">
                    {modalSlide.title}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setModalSlide(null)}
                  aria-label="Close Portfolio Modal"
                  className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-[#e6171f] hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="relative aspect-video w-full overflow-hidden bg-[#060916]">
                <Image
                  src={modalSlide.image}
                  alt={modalSlide.alt}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 768px, 95vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060916]/90 via-transparent to-transparent" />
                <div className="absolute inset-x-6 bottom-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div className="max-w-lg">
                    <span className="inline-block rounded-full bg-[#e6171f]/90 px-3 py-0.5 font-sans text-[11px] font-bold uppercase tracking-wider text-white">
                      2D Portfolio Spotlight • {modalSlide.duration}
                    </span>
                    <h3 className="mt-2 font-sans text-xl font-extrabold text-white">
                      {modalSlide.title}
                    </h3>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-white/80 sm:text-sm">
                      {modalSlide.description}
                    </p>
                  </div>
                  <Link
                    href="#quote"
                    onClick={() => setModalSlide(null)}
                    className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#e6171f_0%,#ff5114_55%,#ff8e0a_100%)] px-5 font-sans text-xs font-bold text-white shadow-lg"
                  >
                    <span>Get a Fixed Quote</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
