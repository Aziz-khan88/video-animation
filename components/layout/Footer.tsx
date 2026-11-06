"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Reveal } from "@/components/motion/MotionPrimitives";

const FOOTER_NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/2d-animation" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export function Footer() {
  const pathname = usePathname();
  if (
    pathname.startsWith("/landing-page") ||
    pathname.startsWith("/2d-animation-design")
  ) {
    return null;
  }

  return (
    <footer className="w-full border-t border-[#eceef3] bg-white px-6 py-6 text-[#0c0c10] sm:px-10 lg:flex lg:h-[9.57vw] lg:flex-col lg:justify-between lg:px-[4.39vw] lg:pt-[2.15vw] lg:pb-[1.45vw]">
      {/* Top Row: Brand Logo (Left) + Navigation Links (Center) + Social Icons (Right) */}
      <Reveal
        y={14}
        duration={0.55}
        className="relative flex flex-col items-center justify-between gap-5 md:flex-row"
      >
        {/* Left: Brand Logo */}
        <Link
          href="/"
          aria-label="VideoAnimation.us — Home"
          className="group inline-flex shrink-0 items-center gap-2 lg:gap-[0.75vw]"
        >
          <svg
            viewBox="0 0 42 44"
            className="h-[32px] w-[30px] shrink-0 transition-transform duration-300 group-hover:scale-105 lg:h-[3.3vw] lg:w-[3.1vw]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="footer-brand-play-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff1821" />
                <stop offset="55%" stopColor="#ff4719" />
                <stop offset="100%" stopColor="#ff6c11" />
              </linearGradient>
            </defs>
            <path
              d="M6.5 7.2c0-2.7 3-4.3 5.3-2.9l23.4 14.8c2.1 1.3 2.1 4.5 0 5.8L11.8 39.7c-2.3 1.4-5.3-.2-5.3-2.9V7.2Z"
              fill="none"
              stroke="url(#footer-brand-play-grad)"
              strokeWidth="4.6"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-sans text-[18px] font-extrabold tracking-[-0.035em] text-[#0c0c10] lg:text-[1.72vw]">
            VideoAnimation.us
          </span>
        </Link>

        {/* Center: Footer Navigation */}
        <nav
          aria-label="Footer"
          className="md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <ul className="flex flex-wrap items-center justify-center gap-6 lg:gap-[2.85vw]">
            {FOOTER_NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap font-sans text-[13.5px] font-normal text-[#383a42] transition-colors duration-200 hover:text-[#ff251b] lg:text-[1.12vw]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: 4 Solid Dark Social Icons (YouTube, LinkedIn, Instagram, Vimeo) */}
        <div className="flex shrink-0 items-center gap-4 lg:gap-[1.55vw]">
          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-[#0c0c10] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#ff251b]"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5 lg:size-[2.05vw]"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.14 5.6 12 5.6 12 5.6s-6.14 0-7.86.46a2.75 2.75 0 0 0-1.94 1.94C1.74 9.72 1.74 12 1.74 12s0 2.28.46 3.999a2.75 2.75 0 0 0 1.94 1.94c1.72.46 7.86.46 7.86.46s6.14 0 7.86-.46a2.75 2.75 0 0 0 1.94-1.94c.46-1.72.46-4 .46-4s0-2.28-.46-3.999ZM9.95 15.02V8.98L15.2 12l-5.25 3.02Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#0c0c10] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#ff251b]"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5 lg:size-[1.9vw]"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.5 18H6V10h2.5v8ZM7.25 8.8a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9ZM18 18h-2.5v-4.2c0-1.05-.4-1.75-1.35-1.75-.95 0-1.45.65-1.45 1.75V18h-2.5V10h2.4v1.1c.5-.8 1.35-1.3 2.45-1.3 1.85 0 3 1.15 3 3.55V18Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#0c0c10] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#ff251b]"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5 lg:size-[1.9vw]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
              aria-hidden="true"
            >
              <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.6" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* Vimeo */}
          <a
            href="https://vimeo.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vimeo"
            className="text-[#0c0c10] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#ff251b]"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5 lg:size-[1.95vw]"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M21.9 7.3c-.1 2.2-1.6 5.2-4.6 9-3 3.9-5.6 5.8-7.7 5.8-1.3 0-2.4-1.2-3.3-3.6l-1.8-6.6c-.6-2.4-1.3-3.6-2.1-3.6-.2 0-.8.4-1.8 1.1L-.5 8c1.1-1 2.2-2 3.3-3 1.5-1.3 2.6-2 3.4-2.1 1.8-.2 2.9 1.1 3.3 3.8.4 2.8.8 4.5 1 5.2.5 2.3 1.1 3.4 1.8 3.4.5 0 1.3-.8 2.3-2.5 1-1.6 1.5-2.8 1.6-3.6.1-1.4-.4-2.1-1.6-2.1-.6 0-1.2.1-1.8.4 1.2-3.9 3.5-5.8 6.9-5.7 2.5.1 3.7 1.7 3.6 4.9Z" />
            </svg>
          </a>
        </div>
      </Reveal>

      {/* Bottom Row: Copyright */}
      <Reveal
        as="p"
        y={10}
        delay={0.08}
        duration={0.5}
        className="mt-4 text-center font-sans text-[11.5px] font-normal text-[#6d707b] lg:mt-0 lg:text-[0.92vw]"
      >
        © 2024 VideoAnimation.us. All rights reserved.
      </Reveal>
    </footer>
  );
}
