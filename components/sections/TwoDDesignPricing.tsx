"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  EASE_OUT_EXPO,
  FloatingElement,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  popular?: boolean;
  ctaLabel: string;
  borderColorClass: string;
  illustrationImage: string;
  illustrationAlt: string;
  features: readonly string[];
}

const PRICING_PLANS: readonly PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$1,490",
    ctaLabel: "Get Started with Starter",
    borderColorClass: "border-[#eb7b78]",
    illustrationImage: "/images/two-d-pricing-starter-bg.jpg?v=4",
    illustrationAlt:
      "2D illustrated female presenter in a yellow top holding a pointer stylus toward a presentation board with two interlocking blue mechanical gears",
    features: [
      "Up to 60 seconds",
      "Custom 2D animation",
      "Script & storyboard",
      "Professional voice-over (1 option)",
      "Up to 2 rounds of revisions",
      "HD (1080p) delivery",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "$2,999",
    popular: true,
    ctaLabel: "Get Started with Standard",
    borderColorClass: "border-[#ee8a49]",
    illustrationImage: "/images/two-d-pricing-standard-bg.jpg?v=4",
    illustrationAlt:
      "2D illustrated male presenter in a blue shirt and glasses holding a tablet and gesturing toward an industrial mechanical engine cutaway screen",
    features: [
      "Up to 180 seconds (3 minutes)",
      "Custom 2D animation (Advanced)",
      "Script, storyboard & scene design",
      "Professional voice-over (1 option)",
      "Up to 3 rounds of revisions",
      "HD (1080p) delivery",
    ],
  },
] as const;

export function TwoDDesignPricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="two-d-design-pricing-heading"
      className="relative isolate w-full overflow-hidden bg-[#fbfaf7] py-12 sm:py-16 lg:py-14"
    >
      <div className="mx-auto w-[96%]">
        {/* Section Heading with Left & Right Horizontal Accent Lines */}
        <Reveal className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-9">
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT_EXPO }}
            className="h-[3px] w-16 origin-right rounded-full bg-[linear-gradient(90deg,#d62420_0%,#e54b1f_100%)] sm:w-36 lg:w-64 xl:w-80"
          />
          <h2
            id="two-d-design-pricing-heading"
            className="text-center font-sans text-[30px] font-extrabold tracking-[-0.03em] text-[#0c0d12] sm:text-[40px] lg:text-[50px] xl:text-[58px] 2xl:text-[64px]"
          >
            Simple, Transparent Pricing
          </h2>
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT_EXPO }}
            className="h-[3px] w-16 origin-left rounded-full bg-[linear-gradient(90deg,#df6324_0%,#d4792a_100%)] sm:w-36 lg:w-64 xl:w-80"
          />
        </Reveal>

        {/* Two Pricing Cards Grid */}
        <StaggerGroup
          className="mt-8 grid grid-cols-1 gap-6 lg:mt-9 lg:grid-cols-2 lg:gap-8"
          stagger={0.14}
          delayChildren={0.06}
        >
          {PRICING_PLANS.map((plan, idx) => (
            <StaggerItem key={plan.id}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                className={`group relative overflow-hidden rounded-[18px] border-[1.8px] bg-[#fdfcfa] p-6 shadow-[0_12px_32px_-12px_rgb(15_23_42/0.08)] transition-shadow duration-300 hover:shadow-[0_20px_42px_-12px_rgb(235_45_25/0.16)] sm:min-h-[360px] sm:p-7 lg:min-h-[380px] lg:p-8 ${plan.borderColorClass}`}
              >
                {/* "Most Popular" Top-Right Badge on Standard Card */}
                {plan.popular && (
                  <motion.div
                    initial={{ y: -28, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.28, ease: EASE_OUT_EXPO }}
                    className="absolute top-0 right-5 z-30 lg:right-6"
                  >
                    <span className="inline-flex items-center justify-center rounded-b-[10px] bg-[linear-gradient(90deg,#ec4818_0%,#f77c12_100%)] px-4 py-1.5 font-sans text-[12.5px] font-extrabold tracking-[-0.01em] text-white shadow-[0_6px_16px_-4px_rgb(240_85_20/0.5)] lg:px-5 lg:py-2 lg:text-[13.5px]">
                      Most Popular
                    </span>
                  </motion.div>
                )}

                {/* Right-Side Unified Presenter + Presentation Board Illustration */}
                <div className="pointer-events-none absolute top-6 right-1 bottom-2 hidden w-[56%] sm:block lg:top-8 lg:right-2 lg:w-[57%]">
                  <FloatingElement
                    amplitude={3.5}
                    duration={4.6 + idx * 0.4}
                    delay={idx * 0.35}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={plan.illustrationImage}
                      alt={plan.illustrationAlt}
                      fill
                      quality={96}
                      unoptimized
                      sizes="(min-width: 1024px) 28vw, 48vw"
                      className="object-contain object-right-bottom mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </FloatingElement>
                </div>

                {/* Left Column Content: Plan Title, Price, 6 Features & CTA Pill Button */}
                <div className="relative z-20 max-w-full sm:max-w-[50%]">
                  <h3 className="font-sans text-[24px] font-extrabold tracking-[-0.02em] text-[#0c0d12] lg:text-[30px] xl:text-[34px]">
                    {plan.name}
                  </h3>
                  <p className="mt-1 font-sans text-[42px] font-black leading-none tracking-[-0.035em] text-[#e61d24] lg:text-[52px] xl:text-[58px]">
                    {plan.price}
                  </p>

                  {/* Features Checklist */}
                  <ul className="mt-4 space-y-2 lg:mt-5 lg:space-y-2.5">
                    {plan.features.map((feature, fIdx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.42,
                          delay: 0.16 + idx * 0.1 + fIdx * 0.05,
                          ease: EASE_OUT_EXPO,
                        }}
                        className="flex items-center gap-2.5"
                      >
                        <svg
                          viewBox="0 0 18 18"
                          className="size-4 shrink-0 text-[#e61d24] lg:size-[17px]"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="m3.5 9.2 3.4 3.4 7.6-7.6"
                            stroke="currentColor"
                            strokeWidth="2.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="font-sans text-[13px] font-semibold tracking-[-0.01em] text-[#1a1d24] lg:text-[14px]">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Mobile Presenter + Screen Preview */}
                  <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-xl sm:hidden">
                    <Image
                      src={plan.illustrationImage}
                      alt={plan.illustrationAlt}
                      fill
                      unoptimized
                      sizes="90vw"
                      className="object-contain mix-blend-multiply"
                    />
                  </div>

                  {/* Bottom CTA Pill Button */}
                  <div className="mt-6 lg:mt-7">
                    <Link
                      href="#quote"
                      className="group/btn relative inline-flex h-[44px] w-full items-center justify-center gap-2 overflow-hidden rounded-[10px] bg-[linear-gradient(90deg,#e5141f_0%,#ff4e15_55%,#ff870b_100%)] px-4 font-sans text-[13.5px] font-extrabold tracking-[-0.01em] text-white shadow-[0_10px_22px_-6px_rgb(238_42_24/0.48)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-6px_rgb(238_42_24/0.65)] sm:w-auto sm:px-5 sm:text-[14px] lg:h-[46px] lg:px-6 lg:text-[14.5px]"
                    >
                      <motion.span
                        aria-hidden="true"
                        initial={{ x: "-140%" }}
                        animate={{ x: "260%" }}
                        transition={{
                          duration: 2.8,
                          delay: idx * 0.6,
                          repeat: Infinity,
                          repeatDelay: 2.5,
                          ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute inset-y-0 w-14 -skew-x-20 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                      />
                      <span className="relative z-10">{plan.ctaLabel}</span>
                      <svg
                        viewBox="0 0 20 20"
                        className="relative z-10 size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
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
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
