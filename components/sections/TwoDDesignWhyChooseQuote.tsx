"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  EASE_OUT_EXPO,
  FloatingElement,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

interface WhyChooseCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WHY_CHOOSE_CARDS: readonly WhyChooseCard[] = [
  {
    id: "complex-ideas-simple",
    title: "Make Complex Ideas Simple",
    description:
      "Turn technical, medical, or process-heavy information into easy-to-follow 2D animations.",
    icon: (
      <svg
        viewBox="0 0 44 44"
        className="size-11 shrink-0 text-[#e4231d] transition-transform duration-300 group-hover:scale-110 lg:size-12"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="20" cy="24" r="13" stroke="currentColor" strokeWidth="2.1" />
        <circle cx="20" cy="24" r="8" stroke="currentColor" strokeWidth="2.1" />
        <circle cx="20" cy="24" r="3.2" fill="currentColor" />
        <path
          d="M35.5 8.5 22 22M30 8.5h5.5V14"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m33.5 6.5 4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "engage-audience",
    title: "Engage Your Audience",
    description:
      "Clear visuals, real characters, and purposeful storytelling that get results.",
    icon: (
      <svg
        viewBox="0 0 48 44"
        className="size-11 shrink-0 text-[#e4231d] transition-transform duration-300 group-hover:scale-110 lg:size-12"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="24" cy="15" r="5" stroke="currentColor" strokeWidth="2.1" />
        <path
          d="M15 32c0-4.4 4-8 9-8s9 3.6 9 8"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="12.5" cy="18.5" r="3.8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M6.5 32c0-3.5 3-6.3 6.8-6.3"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <circle cx="35.5" cy="18.5" r="3.8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M41.5 32c0-3.5-3-6.3-6.8-6.3"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "drive-business-results",
    title: "Drive Real Business Results",
    description:
      "Educate, build trust, and increase conversions across marketing, sales, and training.",
    icon: (
      <svg
        viewBox="0 0 44 44"
        className="size-11 shrink-0 text-[#e4231d] transition-transform duration-300 group-hover:scale-110 lg:size-12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 36h32"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <rect
          x="9.5"
          y="26"
          width="5.5"
          height="10"
          rx="1"
          stroke="currentColor"
          strokeWidth="2.1"
        />
        <rect
          x="18.5"
          y="20"
          width="5.5"
          height="16"
          rx="1"
          stroke="currentColor"
          strokeWidth="2.1"
        />
        <path
          d="M27.5 36V14.5l4-4 4 4V36"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 15.5 31.5 10 37 15.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

interface OrbitalIndustryNode {
  id: string;
  label: string;
  industryOptionValue: string;
  image: string;
  alt: string;
  hotspotPositionClass: string;
  badgePositionClass: string;
  floatAmplitude: number;
  floatDuration: number;
  floatDelay: number;
  icon: React.ReactNode;
}

const ORBITAL_INDUSTRY_NODES: readonly OrbitalIndustryNode[] = [
  {
    id: "automotive",
    label: "Automotive",
    industryOptionValue: "Automotive",
    image: "/images/two-d-quote-thumb-1-automotive.jpg?v=4",
    alt: "2D cutaway illustration of a sleek silver electric car showing a glowing blue battery pack and orange drivetrain cables",
    hotspotPositionClass: "left-[3%] top-[12%] w-[38%] h-[42%]",
    badgePositionClass: "left-[16%] top-[4%]",
    floatAmplitude: 4,
    floatDuration: 4.5,
    floatDelay: 0,
    icon: (
      <svg viewBox="0 0 20 16" className="h-3.5 w-4 shrink-0 fill-current" aria-hidden="true">
        <path d="M4.2 2.5A2.2 2.2 0 0 1 6.3 1h7.4a2.2 2.2 0 0 1 2.1 1.5l1.4 3.8c.9.3 1.5 1.1 1.5 2.1v4.1a1.2 1.2 0 0 1-1.2 1.2h-.8a1.2 1.2 0 0 1-1.2-1.2v-1H4.5v1a1.2 1.2 0 0 1-1.2 1.2h-.8a1.2 1.2 0 0 1-1.2-1.2V8.4c0-1 .6-1.8 1.5-2.1l1.4-3.8Zm1.9.6L5 6h10l-1.1-2.9H6.1ZM4.8 9.8a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm10.4 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z" />
      </svg>
    ),
  },
  {
    id: "healthcare",
    label: "Healthcare",
    industryOptionValue: "Healthcare",
    image: "/images/two-d-quote-thumb-2-healthcare.jpg?v=4",
    alt: "2D medical illustration of a human heart with glowing blue ECG waveform and diagnostic checklist bars",
    hotspotPositionClass: "left-[37%] top-[2%] w-[29%] h-[36%]",
    badgePositionClass: "left-[6%] top-[2%]",
    floatAmplitude: 4.5,
    floatDuration: 4.9,
    floatDelay: 0.4,
    icon: (
      <svg viewBox="0 0 16 16" className="size-3.5 shrink-0 fill-current" aria-hidden="true">
        <path d="M6.4 1.8h3.2v4.6h4.6v3.2H9.6v4.6H6.4V9.6H1.8V6.4h4.6V1.8Z" />
      </svg>
    ),
  },
  {
    id: "aircraft",
    label: "Aircraft",
    industryOptionValue: "Aerospace & Aviation",
    image: "/images/two-d-quote-thumb-3-aircraft.jpg?v=4",
    alt: "2D cutaway illustration of a commercial passenger jet showing a glowing orange turbofan jet engine above the clouds",
    hotspotPositionClass: "left-[63%] top-[14%] w-[35%] h-[40%]",
    badgePositionClass: "left-[24%] top-[3%]",
    floatAmplitude: 4.5,
    floatDuration: 4.7,
    floatDelay: 0.8,
    icon: (
      <svg viewBox="0 0 18 18" className="size-3.5 shrink-0 fill-current" aria-hidden="true">
        <path d="M16.2 2.4c.5.5.4 1.4-.2 2l-3.6 3.6 1.9 6.9-1.6 1.6-3.1-5.6-3.1 3.1.4 2.4-1.2 1.2-1.8-2.9-2.9-1.8 1.2-1.2 2.4.4 3.1-3.1-5.6-3.1L3.7 4.3l6.9 1.9 3.6-3.6c.6-.6 1.5-.7 2-.2Z" />
      </svg>
    ),
  },
  {
    id: "product",
    label: "Product",
    industryOptionValue: "Product & Manufacturing",
    image: "/images/two-d-quote-thumb-4-product.jpg?v=4",
    alt: "2D illustration of interlocking silver and golden-orange mechanical gears rotating with directional motion arrows",
    hotspotPositionClass: "left-[6%] top-[55%] w-[33%] h-[39%]",
    badgePositionClass: "left-[18%] top-[3%]",
    floatAmplitude: 4,
    floatDuration: 4.4,
    floatDelay: 0.25,
    icon: (
      <svg viewBox="0 0 18 18" className="size-3.5 shrink-0 fill-current" aria-hidden="true">
        <path d="M7.6 1.6h2.8l.4 1.8c.5.2 1 .5 1.4.8l1.7-.8 1.9 1.9-.8 1.7c.3.4.6.9.8 1.4l1.8.4v2.8l-1.8.4c-.2.5-.5 1-.8 1.4l.8 1.7-1.9 1.9-1.7-.8c-.4.3-.9.6-1.4.8l-.4 1.8H7.6l-.4-1.8a5.8 5.8 0 0 1-1.4-.8l-1.7.8-1.9-1.9.8-1.7a5.8 5.8 0 0 1-.8-1.4l-1.8-.4V7.6l1.8-.4c.2-.5.5-1 .8-1.4l-.8-1.7 1.9-1.9 1.7.8c.4-.3.9-.6 1.4-.8l.4-1.8ZM9 6.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Z" />
      </svg>
    ),
  },
  {
    id: "beauty",
    label: "Beauty",
    industryOptionValue: "Beauty & Consumer Goods",
    image: "/images/two-d-quote-thumb-5-beauty.jpg?v=4",
    alt: "2D illustration of a luxury pink face cream jar and gold pump serum bottle surrounded by green leaves and pink blossoms",
    hotspotPositionClass: "left-[62%] top-[55%] w-[35%] h-[40%]",
    badgePositionClass: "left-[28%] top-[2%]",
    floatAmplitude: 4.5,
    floatDuration: 4.8,
    floatDelay: 0.65,
    icon: (
      <svg viewBox="0 0 18 18" className="size-3.5 shrink-0 fill-current" aria-hidden="true">
        <path d="M9 2.2c1.6 2.3 2.5 4.6 2.2 6.8 1.6-1.3 3.4-1.8 5.3-1.4-.6 2.8-2.4 4.8-5.3 5.7H6.8C3.9 12.4 2.1 10.4 1.5 7.6c1.9-.4 3.7.1 5.3 1.4C6.5 6.8 7.4 4.5 9 2.2Z" />
      </svg>
    ),
  },
] as const;

const INDUSTRY_SELECT_OPTIONS = [
  "Automotive",
  "Healthcare",
  "Aerospace & Aviation",
  "Product & Manufacturing",
  "Beauty & Consumer Goods",
  "Technology & SaaS",
  "Finance & Fintech",
  "Education & Training",
  "Other Industry",
] as const;

export function TwoDDesignWhyChooseQuote() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [workEmail, setWorkEmail] = useState<string>("");
  const [projectDetails, setProjectDetails] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelectIndustryFromOrb = (industryValue: string) => {
    setSelectedIndustry(industryValue);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="why-choose-and-quote"
      aria-labelledby="why-choose-heading"
      className="relative isolate w-full overflow-hidden bg-[#fbfaf7] py-12 sm:py-16 lg:pt-12 lg:pb-16"
    >
      <div className="mx-auto w-[96%]">
        {/* PART 1: "Why Choose VideoAnimation.us?" + 3 Value Cards */}
        <Reveal className="text-center">
          <h2
            id="why-choose-heading"
            className="font-sans text-[30px] font-extrabold tracking-[-0.03em] text-[#0c0d12] sm:text-[40px] lg:text-[50px] xl:text-[58px] 2xl:text-[64px]"
          >
            Why Choose VideoAnimation.us?
          </h2>
        </Reveal>

        <StaggerGroup
          className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-8 lg:gap-6"
          stagger={0.09}
          delayChildren={0.05}
        >
          {WHY_CHOOSE_CARDS.map((card) => (
            <StaggerItem key={card.id}>
              <div className="group flex h-full items-center gap-4 rounded-[14px] border border-[#f8dfdc] bg-[#fdf3f2] px-5 py-4 shadow-[0_4px_14px_-6px_rgb(228_35_29/0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f4beb8] hover:bg-[#fff7f6] hover:shadow-[0_12px_24px_-8px_rgb(228_35_29/0.15)] lg:px-6 lg:py-5">
                {card.icon}
                <div className="min-w-0">
                  <h3 className="font-sans text-[17px] font-extrabold tracking-[-0.015em] text-[#0c0d12] lg:text-[19px] xl:text-[21px]">
                    {card.title}
                  </h3>
                  <p className="mt-1 font-sans text-[13.5px] font-normal leading-[1.42] text-[#353843] lg:text-[14.5px] xl:text-[15.5px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* PART 2: Split Main Content — Left: Heading + Orbital 5-Sector Play Hub | Right: Glowing Dark Quote Form */}
        <div
          id="quote"
          className="mt-10 grid grid-cols-1 items-start gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-8"
        >
          {/* LEFT COLUMN (7 Cols): "Let's make your idea move." + Regenerated Orbital Play Hub */}
          <div className="lg:col-span-7">
            <StaggerGroup stagger={0.09} delayChildren={0.05}>
              <StaggerItem>
                <h2 className="font-sans text-[42px] font-extrabold leading-[1.03] tracking-[-0.035em] text-[#0c0d12] sm:text-[54px] lg:text-[66px] xl:text-[76px] 2xl:text-[84px]">
                  <span className="block">Let’s make your</span>
                  <span className="mt-1 block">
                    idea{" "}
                    <span className="relative inline-block bg-[linear-gradient(90deg,#e4171f_0%,#ff4f15_55%,#ff8e0a_100%)] bg-clip-text text-transparent">
                      move.
                      {/* Animated Curved Brush Underline beneath "move." */}
                      <svg
                        viewBox="0 0 210 22"
                        className="pointer-events-none absolute -bottom-2 left-0 w-full overflow-visible"
                        fill="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient
                            id="move-underline-grad"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#e51820" />
                            <stop offset="55%" stopColor="#ff5315" />
                            <stop offset="100%" stopColor="#ff920a" />
                          </linearGradient>
                        </defs>
                        <motion.path
                          d="M4 16.5C58 6.5 138 4.8 204 12.5"
                          stroke="url(#move-underline-grad)"
                          strokeWidth="6.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{
                            duration: 0.85,
                            delay: 0.25,
                            ease: EASE_OUT_EXPO,
                          }}
                        />
                      </svg>
                    </span>
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-4 font-sans text-[17px] font-medium tracking-[-0.015em] text-[#353843] sm:text-[19px] lg:mt-5 lg:text-[21px] xl:text-[23px]">
                  Tell us about your project and get a fixed quote.
                </p>
              </StaggerItem>
            </StaggerGroup>

            {/* Desktop Unified Orbital Play Hub Stage with 5 Interactive Animated Pill Badges */}
            <div className="relative mt-5 hidden aspect-[16/10] w-full lg:block">
              {/* Regenerated Unified Orbital Play Hub Artwork (Play Orb + Ribbons + 5 Organic Blobs) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, ease: EASE_OUT_EXPO }}
                className="pointer-events-none absolute inset-0"
              >
                <Image
                  src="/images/two-d-why-choose-bg.jpg?v=4"
                  alt="Glowing crimson-orange 2D play button orb surrounded by Automotive, Healthcare, Aircraft, Product, and Beauty illustrations"
                  fill
                  quality={96}
                  unoptimized
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-contain object-center mix-blend-multiply"
                />
              </motion.div>

              {/* Subtle Interactive Pulse Ring Over the Central Play Button Orb */}
              <div className="pointer-events-none absolute top-[62%] left-[44%] z-10 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{
                    scale: [1, 1.07, 1],
                    opacity: [0.25, 0.55, 0.25],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="size-[150px] rounded-full ring-2 ring-[#ff5c16]/45 xl:size-[195px] 2xl:size-[220px]"
                />
              </div>

              {/* 5 Interactive Sector Hotspots + Floating Red-Orange Pill Category Badges */}
              {ORBITAL_INDUSTRY_NODES.map((node, idx) => {
                const isSelected = selectedIndustry === node.industryOptionValue;
                return (
                  <div
                    key={node.id}
                    className={`absolute z-20 ${node.hotspotPositionClass}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 14, scale: 0.92 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.15 + idx * 0.08,
                        ease: EASE_OUT_EXPO,
                      }}
                      className="h-full w-full"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          handleSelectIndustryFromOrb(node.industryOptionValue)
                        }
                        aria-label={`Select ${node.label} industry`}
                        className="group relative block h-full w-full cursor-pointer rounded-3xl text-left focus:outline-none"
                      >
                        {/* Floating Pill Category Badge Positioned Identically to Reference */}
                        <div className={`absolute z-20 ${node.badgePositionClass}`}>
                          <FloatingElement
                            amplitude={node.floatAmplitude}
                            duration={node.floatDuration}
                            delay={node.floatDelay}
                          >
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(90deg,#e4151f_0%,#ff4f15_55%,#ff8b0a_100%)] px-3.5 py-1 font-sans text-[12.5px] font-bold tracking-[-0.01em] text-white shadow-[0_6px_14px_-3px_rgb(235_35_25/0.55)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-[0_10px_20px_-3px_rgb(235_35_25/0.75)] xl:px-4 xl:py-1.5 xl:text-[13.5px] ${
                                isSelected ? "ring-2 ring-white ring-offset-2 ring-offset-[#ff4f15]" : ""
                              }`}
                            >
                              {node.icon}
                              <span>{node.label}</span>
                            </span>
                          </FloatingElement>
                        </div>
                      </button>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet Responsive Grid using the 5 Regenerated Organic Blob Illustrations */}
            <StaggerGroup
              className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden"
              stagger={0.07}
              delayChildren={0.1}
            >
              {ORBITAL_INDUSTRY_NODES.map((node) => {
                const isSelected = selectedIndustry === node.industryOptionValue;
                return (
                  <StaggerItem
                    key={node.id}
                    className="last:col-span-2 last:mx-auto last:w-[calc(50%-0.5rem)] sm:last:col-span-1 sm:last:w-full"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        handleSelectIndustryFromOrb(node.industryOptionValue)
                      }
                      className={`group relative block aspect-[16/11] w-full cursor-pointer rounded-2xl p-1 text-left transition-transform duration-300 hover:-translate-y-1 ${
                        isSelected ? "ring-2 ring-[#ff4f15]" : ""
                      }`}
                    >
                      <span className="absolute top-1 left-2.5 z-10 inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(90deg,#e4151f_0%,#ff4f15_55%,#ff8b0a_100%)] px-2.5 py-0.5 font-sans text-[11px] font-bold text-white shadow-sm">
                        {node.icon}
                        <span>{node.label}</span>
                      </span>
                      <div className="relative h-full w-full overflow-hidden rounded-xl">
                        <Image
                          src={node.image}
                          alt={node.alt}
                          fill
                          unoptimized
                          sizes="(min-width: 640px) 30vw, 46vw"
                          className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </button>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>

          {/* RIGHT COLUMN (5 Cols): Dark Glowing Quote Form Card */}
          <Reveal className="lg:col-span-5" delay={0.12}>
            <div className="relative rounded-[22px] p-[2.5px] shadow-[0_0_38px_rgb(245_68_22/0.35),0_24px_48px_-12px_rgb(10_12_20/0.55)]">
              {/* Outer Neon Red-Orange Glowing Border Gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[22px] bg-[linear-gradient(135deg,#e51520_0%,#ff5514_50%,#ff980a_100%)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-[3px] -z-10 rounded-[24px] bg-[linear-gradient(135deg,#e51520_0%,#ff5514_50%,#ff980a_100%)] opacity-55 blur-md"
              />

              {/* Form Card Interior */}
              <div className="relative rounded-[20px] bg-[#13141b] px-5 py-6 text-white sm:px-7 sm:py-7">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Your name */}
                  <div>
                    <label
                      htmlFor="twod-quote-name"
                      className="mb-2 flex items-center gap-2.5 font-sans text-[14px] font-extrabold tracking-[-0.01em] text-white sm:text-[15px]"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="size-4 shrink-0 text-[#ff6118]"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="10"
                          cy="6.5"
                          r="3.2"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M4.2 16.8c0-3 2.6-5.3 5.8-5.3s5.8 2.3 5.8 5.3"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span aria-hidden="true" className="h-3.5 w-px bg-white/25" />
                      <span>Your name</span>
                    </label>
                    <input
                      id="twod-quote-name"
                      name="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="h-[44px] w-full rounded-[10px] border border-white/15 bg-white px-4 font-sans text-[14px] font-medium text-[#14161d] placeholder:text-[#727684] focus:border-[#ff5a16] focus:ring-2 focus:ring-[#ff5a16]/35 focus:outline-none"
                    />
                  </div>

                  {/* Field 2: Work email */}
                  <div>
                    <label
                      htmlFor="twod-quote-email"
                      className="mb-2 flex items-center gap-2.5 font-sans text-[14px] font-extrabold tracking-[-0.01em] text-white sm:text-[15px]"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="size-4 shrink-0 text-[#ff6118]"
                        fill="none"
                        aria-hidden="true"
                      >
                        <rect
                          x="2.5"
                          y="4.5"
                          width="15"
                          height="11"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <path
                          d="m3.2 5.5 6.8 5.2 6.8-5.2"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span aria-hidden="true" className="h-3.5 w-px bg-white/25" />
                      <span>Work email</span>
                    </label>
                    <input
                      id="twod-quote-email"
                      name="workEmail"
                      type="email"
                      required
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="h-[44px] w-full rounded-[10px] border border-white/15 bg-white px-4 font-sans text-[14px] font-medium text-[#14161d] placeholder:text-[#727684] focus:border-[#ff5a16] focus:ring-2 focus:ring-[#ff5a16]/35 focus:outline-none"
                    />
                  </div>

                  {/* Field 3: Industry */}
                  <div>
                    <label
                      htmlFor="twod-quote-industry"
                      className="mb-2 flex items-center gap-2.5 font-sans text-[14px] font-extrabold tracking-[-0.01em] text-white sm:text-[15px]"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="size-4 shrink-0 text-[#ff6118]"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 2.8 17.2 6.6 10 10.4 2.8 6.6 10 2.8Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <path
                          d="m2.8 10 7.2 3.8 7.2-3.8M2.8 13.4l7.2 3.8 7.2-3.8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span aria-hidden="true" className="h-3.5 w-px bg-white/25" />
                      <span>Industry</span>
                    </label>
                    <div className="relative">
                      <select
                        id="twod-quote-industry"
                        name="industry"
                        required
                        value={selectedIndustry}
                        onChange={(e) => setSelectedIndustry(e.target.value)}
                        className="h-[44px] w-full appearance-none rounded-[10px] border border-white/15 bg-white pr-10 pl-4 font-sans text-[14px] font-medium text-[#14161d] focus:border-[#ff5a16] focus:ring-2 focus:ring-[#ff5a16]/35 focus:outline-none"
                      >
                        <option value="" disabled>
                          Select your industry
                        </option>
                        {INDUSTRY_SELECT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <svg
                        viewBox="0 0 20 20"
                        className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-[#242731]"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="m5.5 7.8 4.5 4.5 4.5-4.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Field 4: Tell us about your project */}
                  <div>
                    <label
                      htmlFor="twod-quote-details"
                      className="mb-2 flex items-center gap-2.5 font-sans text-[14px] font-extrabold tracking-[-0.01em] text-white sm:text-[15px]"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="size-4 shrink-0 text-[#ff6118]"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 16.5c4.1 0 7.5-2.8 7.5-6.3S14.1 3.9 10 3.9 2.5 6.7 2.5 10.2c0 1.5.6 2.9 1.7 4L3.2 17l3.4-1.1c1 .4 2.2.6 3.4.6Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <circle cx="7.2" cy="10.2" r="0.9" fill="currentColor" />
                        <circle cx="10" cy="10.2" r="0.9" fill="currentColor" />
                        <circle cx="12.8" cy="10.2" r="0.9" fill="currentColor" />
                      </svg>
                      <span aria-hidden="true" className="h-3.5 w-px bg-white/25" />
                      <span>Tell us about your project</span>
                    </label>
                    <textarea
                      id="twod-quote-details"
                      name="projectDetails"
                      rows={3}
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      placeholder="Share your idea, goals, scope, timeline, or any specific requirements..."
                      className="w-full resize-y rounded-[10px] border border-white/15 bg-white p-3.5 font-sans text-[13.5px] font-normal leading-relaxed text-[#14161d] placeholder:text-[#727684] focus:border-[#ff5a16] focus:ring-2 focus:ring-[#ff5a16]/35 focus:outline-none"
                    />
                  </div>

                  {/* Submit Pill CTA Button */}
                  <button
                    type="submit"
                    className="group relative mt-1 flex h-[50px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[12px] bg-[linear-gradient(90deg,#e4131e_0%,#ff4f14_52%,#ff9709_100%)] px-6 font-sans text-[16px] font-extrabold tracking-[-0.015em] text-white shadow-[0_12px_28px_-6px_rgb(245_55_20/0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-4px_rgb(245_55_20/0.75)]"
                  >
                    <span>Get a Fixed Quote</span>
                    <svg
                      viewBox="0 0 20 20"
                      className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4.2 10h11.6M10.8 5.2 15.8 10l-5 4.8"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg border border-emerald-400/30 bg-emerald-500/15 px-3.5 py-2 text-center font-sans text-xs font-semibold text-emerald-200"
                    >
                      Thank you! We received your request{selectedIndustry ? ` for ${selectedIndustry}` : ""} and will send your fixed quote shortly.
                    </motion.p>
                  )}

                  {/* Privacy Footer Note */}
                  <div className="flex items-center gap-3 pt-1">
                    <svg
                      viewBox="0 0 22 24"
                      className="size-5 shrink-0 text-[#ff5d17]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M11 2.2 3.5 5.4v6.2c0 5.1 3.2 9.7 7.5 11.2 4.3-1.5 7.5-6.1 7.5-11.2V5.4L11 2.2Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="m8 12.2 2.1 2.1 4.2-4.3"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span aria-hidden="true" className="h-6 w-px shrink-0 bg-white/20" />
                    <p className="font-sans text-[11.5px] font-normal leading-[1.38] text-white/80">
                      Your information is private and secure. We’ll only use it to
                      respond to your request and discuss your project.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
