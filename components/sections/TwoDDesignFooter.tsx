"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

const FOOTER_SERVICES = [
  { label: "Explainer Videos", href: "#services" },
  { label: "Product Videos", href: "#services" },
  { label: "Corporate Videos", href: "#services" },
  { label: "Marketing Videos", href: "#services" },
  { label: "Training Videos", href: "#services" },
  { label: "Motion Graphics", href: "/motion-graphics" },
] as const;

const FOOTER_INDUSTRIES = [
  { label: "Healthcare", href: "#industries" },
  { label: "Technology", href: "#industries" },
  { label: "Manufacturing", href: "#industries" },
  { label: "Education", href: "#industries" },
  { label: "Finance", href: "#industries" },
  { label: "Retail & E-commerce", href: "#industries" },
] as const;

const FOOTER_COMPANY = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#faq" },
] as const;

export function TwoDDesignFooter() {
  return (
    <footer className="relative isolate w-full overflow-hidden bg-white">
      {/* TOP PRE-FOOTER STAGE: Full-Bleed Unified Panoramic Artwork (Airplane, Gears, Bottle, Building & Sweeping Red-Orange Wave) */}
      <div className="relative isolate w-full overflow-hidden bg-white lg:aspect-[1376/578]">
        {/* Desktop Full-Bleed Panoramic Pre-Footer Background Image (includes integrated red-orange wave & #0d0814 bottom curve) */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
          <Image
            src="/images/two-d-design-footer-bg.jpg?v=5"
            alt="2D illustration collage featuring a flying red and white propeller plane with dashed trail, interlocking yellow/red/grey gears, a white botanical pump bottle with 3 orange sparks, and a modern commercial building with trees over a sweeping red-to-orange wave"
            fill
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-fill"
          />
        </div>

        {/* Left Column Content Aligned to the 96% Container Grid */}
        <div className="relative z-10 mx-auto flex h-full w-[96%] flex-col justify-start pt-8 pb-4 sm:pt-10 lg:pt-[2.2%] lg:pb-0">
          <StaggerGroup
            className="max-w-[540px] lg:max-w-[44%]"
            stagger={0.09}
            delayChildren={0.05}
          >
            <StaggerItem>
              <h2 className="font-sans text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] text-[#0c0d12] sm:text-[44px] lg:text-[42px] xl:text-[54px] 2xl:text-[64px]">
                <span className="block sm:whitespace-nowrap">Let’s bring your</span>
                <span className="relative mt-0.5 inline-block bg-[linear-gradient(90deg,#e51b23_0%,#f2541b_52%,#f89614_100%)] bg-clip-text text-transparent sm:whitespace-nowrap">
                  ideas to life.
                  {/* 3 Warm Orange Burst Rays at the Top-Right of "life." */}
                  <svg
                    viewBox="0 0 32 32"
                    className="pointer-events-none absolute -top-1.5 -right-6 size-6 text-[#f68815] lg:-top-2 lg:-right-8 lg:size-7 xl:size-8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 16 14 4M10 21l15-9M12 26l16-2"
                      stroke="currentColor"
                      strokeWidth="3.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-2 font-sans text-[15.5px] font-semibold tracking-[-0.015em] text-[#50535f] sm:text-[18px] lg:mt-2 lg:text-[17.5px] xl:text-[21px] 2xl:text-[24px]">
                2D animation for every industry.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-4 lg:mt-4 xl:mt-6">
                <Link
                  href="#quote"
                  className="group inline-flex h-[46px] items-center justify-center gap-3 rounded-full bg-[linear-gradient(90deg,#e41520_0%,#f14f1b_52%,#f89012_100%)] px-7 font-sans text-[15.5px] font-extrabold tracking-[-0.01em] text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.35),0_10px_24px_-6px_rgb(235_45_24/0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),0_14px_30px_-6px_rgb(235_45_24/0.7)] lg:h-[46px] lg:px-7 lg:text-[16px] xl:h-[54px] xl:px-10 xl:text-[19px]"
                >
                  <span>Get a Fixed Quote</span>
                  <svg
                    viewBox="0 0 20 20"
                    className="size-4.5 transition-transform duration-300 group-hover:translate-x-1 lg:size-5"
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
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>

        {/* Mobile / Tablet Responsive Panoramic Illustration + Wave (crops empty left desktop space on small screens) */}
        <div className="relative z-10 w-full lg:hidden">
          <div className="relative aspect-[16/9] w-full sm:aspect-[16/7.5]">
            <Image
              src="/images/two-d-design-footer-bg.jpg?v=5"
              alt="2D illustration collage featuring a flying red and white propeller plane with dashed trail, interlocking yellow/red/grey gears, a white botanical pump bottle with 3 orange sparks, and a modern commercial building with trees"
              fill
              quality={96}
              unoptimized
              sizes="100vw"
              className="object-cover object-right-bottom"
            />
          </div>
        </div>
      </div>

      {/* DARK FOOTER BODY (#0d0814 — matches bottom pixel row of two-d-design-footer-bg.jpg seamlessly) */}
      <div className="relative z-20 -mt-[2px] w-full bg-[#0d0814] text-white">
        <div className="mx-auto w-[96%] pt-2 pb-7 lg:pt-1 lg:pb-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-0">
            {/* Left Brand & Phone Column (4 Cols) + Right Vertical Divider */}
            <Reveal className="flex flex-col justify-between lg:col-span-4 lg:border-r lg:border-white/20 lg:pr-8">
              {/* 3D Layered Play Logo + Brand Name + Centered Studio Subtitle */}
              <Link
                href="/"
                aria-label="VideoAnimation.us — Home"
                className="group inline-flex flex-col items-start"
              >
                <div className="inline-flex items-center gap-3.5">
                  <svg
                    viewBox="0 0 56 56"
                    className="size-12 shrink-0 transition-transform duration-300 group-hover:scale-105 lg:size-13 xl:size-14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="footer-play-back"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#b31219" />
                        <stop offset="100%" stopColor="#e84915" />
                      </linearGradient>
                      <linearGradient
                        id="footer-play-front"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#f22922" />
                        <stop offset="55%" stopColor="#ff5b18" />
                        <stop offset="100%" stopColor="#ff9412" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M14 13.5c0-3.2 3.5-5.1 6.2-3.4l24.5 15.2c2.5 1.6 2.5 5.2 0 6.8L20.2 47.3c-2.7 1.7-6.2-.2-6.2-3.4V13.5Z"
                      fill="url(#footer-play-back)"
                      opacity="0.75"
                    />
                    <path
                      d="M8.5 9.5c0-3.2 3.5-5.1 6.2-3.4l24.5 15.2c2.5 1.6 2.5 5.2 0 6.8L14.7 43.3c-2.7 1.7-6.2-.2-6.2-3.4V9.5Z"
                      fill="url(#footer-play-front)"
                    />
                    <path
                      d="M17.5 17.5v14l11.5-7-11.5-7Z"
                      fill="#ffffff"
                    />
                  </svg>

                  <div className="flex flex-col items-center">
                    <span className="block font-sans text-[24px] font-extrabold tracking-[-0.03em] text-white lg:text-[27px] xl:text-[30px]">
                      VideoAnimation
                      <span className="bg-[linear-gradient(90deg,#f0531c_0%,#f89416_100%)] bg-clip-text text-transparent">
                        .us
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 block h-[3.5px] w-36 rounded-full bg-[linear-gradient(90deg,transparent_0%,#ef381e_25%,#ff8c12_75%,transparent_100%)] lg:w-44"
                    />
                    <span className="mt-2 block text-center font-sans text-[10px] font-normal uppercase tracking-[0.28em] text-white/85 lg:text-[11px]">
                      2D ANIMATION STUDIO
                    </span>
                  </div>
                </div>
              </Link>

              {/* Phone Number CTA */}
              <div className="mt-5 lg:mt-6">
                <a
                  href="tel:8336666684"
                  className="group inline-flex items-center gap-3.5 transition-transform duration-200 hover:translate-x-0.5"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#e51b22_0%,#ff7415_100%)] text-white shadow-[0_6px_16px_rgb(239_45_24/0.45)] lg:size-11">
                    <svg
                      viewBox="0 0 20 20"
                      className="size-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M2.8 4.2c0-.8.6-1.4 1.4-1.4h2.3c.6 0 1.2.4 1.3 1l.8 2.7c.2.5 0 1.1-.4 1.4l-1.3 1a11.2 11.2 0 0 0 4.2 4.2l1-1.3c.3-.4.9-.6 1.4-.4l2.7.8c.6.2 1 .7 1 1.3v2.3c0 .8-.6 1.4-1.4 1.4A14.4 14.4 0 0 1 2.8 4.2Z" />
                    </svg>
                  </span>
                  <span className="font-sans text-[22px] font-extrabold tracking-[-0.02em] text-white group-hover:text-[#ff7a20] lg:text-[25px] xl:text-[28px]">
                    (833) 666-6684
                  </span>
                </a>
              </div>
            </Reveal>

            {/* Right 3 Navigation Columns (8 Cols): Services, Industries, Company */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:pl-10 xl:pl-14">
              {/* Column 1: Services */}
              <Reveal delay={0.06}>
                <h3 className="font-sans text-[16px] font-extrabold tracking-[-0.015em] text-white lg:text-[18px] xl:text-[19px]">
                  Services
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1.5 block h-[3px] w-11 rounded-full bg-[linear-gradient(90deg,#e51a20_0%,#ff8712_100%)]"
                />
                <ul className="mt-3 space-y-1.5">
                  {FOOTER_SERVICES.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="font-sans text-[13.5px] font-normal leading-[1.4] text-white/90 transition-colors duration-200 hover:text-[#ff761b] lg:text-[14.5px] xl:text-[15px]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Column 2: Industries */}
              <Reveal delay={0.12}>
                <h3 className="font-sans text-[16px] font-extrabold tracking-[-0.015em] text-white lg:text-[18px] xl:text-[19px]">
                  Industries
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1.5 block h-[3px] w-11 rounded-full bg-[linear-gradient(90deg,#e51a20_0%,#ff8712_100%)]"
                />
                <ul className="mt-3 space-y-1.5">
                  {FOOTER_INDUSTRIES.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="font-sans text-[13.5px] font-normal leading-[1.4] text-white/90 transition-colors duration-200 hover:text-[#ff761b] lg:text-[14.5px] xl:text-[15px]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Column 3: Company */}
              <Reveal delay={0.18}>
                <h3 className="font-sans text-[16px] font-extrabold tracking-[-0.015em] text-white lg:text-[18px] xl:text-[19px]">
                  Company
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1.5 block h-[3px] w-11 rounded-full bg-[linear-gradient(90deg,#e51a20_0%,#ff8712_100%)]"
                />
                <ul className="mt-3 space-y-1.5">
                  {FOOTER_COMPANY.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="font-sans text-[13.5px] font-normal leading-[1.4] text-white/90 transition-colors duration-200 hover:text-[#ff761b] lg:text-[14.5px] xl:text-[15px]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links Bar */}
          <div className="mt-7 flex flex-col items-center justify-between gap-3 border-t border-white/25 pt-4 text-center sm:flex-row sm:text-left lg:mt-8">
            <p className="font-sans text-[12.5px] font-normal text-white/85 lg:text-[13.5px]">
              © 2025 VideoAnimation.us. All Rights Reserved.
            </p>
            <div className="flex items-center gap-5 font-sans text-[12.5px] font-normal text-white/90 lg:text-[13.5px]">
              <Link href="/privacy-policy" className="transition-colors hover:text-[#ff761b]">
                Privacy Policy
              </Link>
              <span aria-hidden="true" className="text-white/45">
                |
              </span>
              <Link href="/terms-and-conditions" className="transition-colors hover:text-[#ff761b]">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
