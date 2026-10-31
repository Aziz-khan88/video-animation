"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "2D", href: "/2d" },
  { label: "LANDING PAGE", href: "/landing-page" },
  { label: "SERVICES", href: "/#services" },
  { label: "WORK", href: "/#work" },
  { label: "ABOUT", href: "/#about" },
  { label: "PROCESS", href: "/#process" },
  { label: "CONTACT", href: "/#contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith("/landing-page");

  return (
    <header className="relative z-30 w-full">
      <div
        className={
          isLandingPage
            ? "flex w-full items-center justify-between px-6 pt-5 pb-3 sm:px-10 lg:gap-[2.1vw] lg:px-[3.6vw] lg:pt-[1.8vw]"
            : "flex w-full items-center justify-between px-6 pt-8 pb-4 sm:px-10 lg:justify-start lg:gap-[2.4vw] lg:px-[4.3vw] lg:pt-[3.6vw]"
        }
      >
        {/* Brand Logo: Outlined red-orange rounded play triangle + VideoAnimation.us */}
        <Link
          href="/"
          aria-label="VideoAnimation.us — Home"
          className="inline-flex shrink-0 items-center gap-[0.8vw]"
        >
          <svg viewBox="0 0 42 44" className="h-[36px] w-[34px] shrink-0 lg:h-[3.5vw] lg:w-[3.3vw]" aria-hidden="true">
            <defs>
              <linearGradient id="brand-play-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff1821" />
                <stop offset="55%" stopColor="#ff4719" />
                <stop offset="100%" stopColor="#ff6c11" />
              </linearGradient>
            </defs>
            <path
              d="M6.5 7.2c0-2.7 3-4.3 5.3-2.9l23.4 14.8c2.1 1.3 2.1 4.5 0 5.8L11.8 39.7c-2.3 1.4-5.3-.2-5.3-2.9V7.2Z"
              fill="none"
              stroke="url(#brand-play-grad)"
              strokeWidth="4.6"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-sans text-[20px] font-extrabold tracking-[-0.04em] text-[#0c0c10] lg:text-[1.85vw]">
            Video<span className="text-hero-gradient">Animation</span>.us
          </span>
        </Link>

        {/* Primary Desktop Navigation */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-4 lg:gap-[1.75vw]">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/portfolio"
                  ? pathname.startsWith("/portfolio")
                  : item.href === "/2d"
                    ? pathname.startsWith("/2d")
                    : item.href === "/landing-page"
                      ? pathname.startsWith("/landing-page")
                      : item.href === "/" && pathname === "/";

              return (
                <li key={item.label} className="relative">
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      isActive
                        ? "relative block whitespace-nowrap py-1.5 text-[11.5px] font-bold tracking-[0.05em] text-[#0c0c10] lg:text-[0.98vw]"
                        : "relative block whitespace-nowrap py-1.5 text-[11.5px] font-medium tracking-[0.05em] text-[#45474f] transition-colors hover:text-[#0c0c10] lg:text-[0.98vw]"
                    }
                  >
                    {item.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-[3px] h-[2.5px] rounded-full bg-[linear-gradient(90deg,#ff1b1c,#ff6214)] lg:h-[0.22vw]"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Top-Right CTA Button on Landing Page */}
        {isLandingPage && (
          <Link
            href="#quote"
            className="inline-flex h-[38px] shrink-0 items-center justify-center gap-2 rounded-[9px] bg-[linear-gradient(92deg,#ff0e22_0%,#ff4718_54%,#ff790f_100%)] px-4 font-sans text-[13px] font-semibold tracking-[-0.01em] text-white shadow-[0_8px_20px_-4px_rgb(255_45_27/0.45)] transition-transform duration-200 hover:-translate-y-0.5 lg:ml-auto lg:h-[3.9vw] lg:gap-[0.65vw] lg:rounded-[0.78vw] lg:px-[1.55vw] lg:text-[1.12vw]"
          >
            <span>Get a Fixed Quote</span>
            <svg viewBox="0 0 20 20" className="size-3.5 lg:size-[1.15vw]" fill="none" aria-hidden="true">
              <path
                d="M4.2 10h11.6M10.8 5.2 15.8 10l-5 4.8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        )}
      </div>
    </header>
  );
}
