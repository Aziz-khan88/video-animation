"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT_EXPO } from "@/components/motion/MotionPrimitives";

export interface ServiceMenuItem {
  label: string;
  href: string;
  badge: string;
  shortDesc: string;
  previewImage: string;
}

export const SERVICE_MENU_ITEMS: readonly ServiceMenuItem[] = [
  {
    label: "2D Animation",
    href: "/2d-animation",
    badge: "Character & Story",
    shortDesc: "Expressive 2D characters, explainers, and narrative worlds.",
    previewImage: "/images/portfolio-style-1-2d.jpg",
  },
  {
    label: "3D Animation",
    href: "/3d-animation",
    badge: "Cinematic Depth",
    shortDesc: "Photorealistic 3D characters, products, and environments.",
    previewImage: "/images/portfolio-style-2-3d.jpg",
  },
  {
    label: "Motion Graphics",
    href: "/motion-graphics",
    badge: "Brand & Kinetic",
    shortDesc: "Dynamic typography, UI motion, and high-impact brand visuals.",
    previewImage: "/images/portfolio-style-3-motion.jpg",
  },
  {
    label: "Whiteboard Animation",
    href: "/whiteboard-animation",
    badge: "Visual Storytelling",
    shortDesc: "Hand-drawn step-by-step illustrations that simplify complex ideas.",
    previewImage: "/images/portfolio-style-4-whiteboard.jpg",
  },
  {
    label: "Video Editing",
    href: "/video-editing",
    badge: "Post-Production",
    shortDesc: "Precision cuts, color grading, sound design, and pacing.",
    previewImage: "/images/behind-frame-3.jpg",
  },
  {
    label: "Logo Animation",
    href: "/logo-animation",
    badge: "Brand Identity",
    shortDesc: "Memorable animated stingers and signature brand reveals.",
    previewImage: "/images/motion-portfolio-1-kinetic.jpg",
  },
  {
    label: "CGI-VFX",
    href: "/cgi-and-vfx-services",
    badge: "Visual Effects",
    shortDesc: "Seamless CGI compositing, simulations, and visual effects.",
    previewImage: "/images/featured-project-bg.jpg",
  },
  {
    label: "Infographics",
    href: "/infographics-designs",
    badge: "Data Visualization",
    shortDesc: "Turn statistics and reports into engaging animated data stories.",
    previewImage: "/images/motion-portfolio-2-infographic.jpg",
  },
  {
    label: "Cel Animation",
    href: "/cel-animation",
    badge: "Frame-by-Frame",
    shortDesc: "Traditional hand-crafted frame-by-frame artistry and fluidity.",
    previewImage: "/images/portfolio-style-5-cel.jpg",
  },
  {
    label: "Hybrid Animation",
    href: "/hybrid-animation",
    badge: "2D + 3D Fusion",
    shortDesc: "Blending 2D artistic expression with dimensional 3D worlds.",
    previewImage: "/images/portfolio-style-6-hybrid.jpg",
  },
  {
    label: "Architectural Visualization",
    href: "/3d-architectural-animation",
    badge: "3D Walkthroughs",
    shortDesc: "Photorealistic interior, exterior, and real-estate flythroughs.",
    previewImage: "/images/three-d-animation-bg.jpg",
  },
] as const;

const PRIMARY_NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "SERVICES", href: "/2d-animation", hasMegaMenu: true },
  { label: "PRICING", href: "/pricing" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "CONTACT US", href: "/contact-us" },
  { label: "LANDING PAGE", href: "/landing-page" },
  { label: "2D DESIGN", href: "/2d-animation-design" },
] as const;

const SOCIAL_LINKS = [
  { label: "Pinterest", href: "https://www.pinterest.com/animationvideous/" },
  { label: "Facebook", href: "https://www.facebook.com/videoanimationus" },
  { label: "X", href: "https://x.com/vid_animationus" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/video-animation-us" },
  { label: "Vimeo", href: "https://vimeo.com/videoanimationus" },
] as const;

export function Header() {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith("/landing-page");

  const [megaOpen, setMegaOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<ServiceMenuItem>(SERVICE_MENU_ITEMS[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(true);
  const megaRef = useRef<HTMLLIElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isServiceRoute =
    pathname === "/2d" || SERVICE_MENU_ITEMS.some((s) => pathname.startsWith(s.href));

  useEffect(() => {
    setMegaOpen(false);
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setDrawerOpen(false);
      }
    }
    function handleClickOutside(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnterMega = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setMegaOpen(true);
  };

  const handleMouseLeaveMega = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 180);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      className="relative z-50 w-full"
    >
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
          className="group inline-flex shrink-0 items-center gap-[0.8vw]"
        >
          <svg
            viewBox="0 0 42 44"
            className="h-[36px] w-[34px] shrink-0 transition-transform duration-300 group-hover:scale-105 lg:h-[3.5vw] lg:w-[3.3vw]"
            aria-hidden="true"
          >
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
            {PRIMARY_NAV_ITEMS.map((item) => {
              const hasMega = "hasMegaMenu" in item && item.hasMegaMenu;
              const isActive = hasMega
                ? isServiceRoute
                : item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (hasMega) {
                return (
                  <li
                    key={item.label}
                    ref={megaRef}
                    className="relative"
                    onMouseEnter={handleMouseEnterMega}
                    onMouseLeave={handleMouseLeaveMega}
                  >
                    <button
                      type="button"
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      onClick={() => setMegaOpen((prev) => !prev)}
                      className={
                        isActive || megaOpen
                          ? "relative inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap py-1.5 text-[11.5px] font-bold tracking-[0.05em] text-[#0c0c10] lg:text-[0.98vw]"
                          : "relative inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap py-1.5 text-[11.5px] font-medium tracking-[0.05em] text-[#45474f] transition-colors duration-200 hover:text-[#0c0c10] lg:text-[0.98vw]"
                      }
                    >
                      <span>{item.label}</span>
                      <svg
                        viewBox="0 0 16 16"
                        className={`size-3.5 transition-transform duration-200 lg:size-[0.98vw] ${
                          megaOpen ? "rotate-180 text-[#ff3b1b]" : ""
                        }`}
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="m4 6 4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {(isActive || megaOpen) && (
                        <motion.span
                          layoutId="header-active-underline"
                          aria-hidden="true"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          className="absolute inset-x-0 -bottom-[3px] h-[2.5px] rounded-full bg-[linear-gradient(90deg,#ff1b1c,#ff6214)] lg:h-[0.22vw]"
                        />
                      )}
                    </button>

                    {/* Desktop Mega Menu Dropdown */}
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                          role="region"
                          aria-label="Animation Services Mega Menu"
                          className="absolute -left-[180px] top-full z-50 w-[720px] pt-3 lg:-left-[14vw] lg:w-[880px] xl:w-[980px]"
                        >
                          <div className="overflow-hidden rounded-[20px] border border-[#f1dcd4] bg-white p-6 shadow-[0_28px_70px_-15px_rgb(15_23_42/0.26)]">
                            {/* Mega Menu Header Bar */}
                            <div className="flex items-center justify-between border-b border-[#f0f1f5] pb-4">
                              <div className="flex items-center gap-3">
                                <span className="inline-flex h-7 items-center rounded-full bg-[#fff1ec] px-3 font-sans text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#ff3219]">
                                  All 11 Animation Services
                                </span>
                                <p className="font-sans text-[13px] font-medium text-[#646772]">
                                  End-to-end studio production from VideoAnimation.us
                                </p>
                              </div>
                              <Link
                                href="/portfolio"
                                onClick={() => setMegaOpen(false)}
                                className="inline-flex items-center gap-1.5 font-sans text-[12.5px] font-bold text-[#ff3219] transition-colors hover:text-[#0c0c10]"
                              >
                                <span>View Full Portfolio</span>
                                <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
                                  <path
                                    d="M4.5 10h11M11 5.5 15.5 10 11 14.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            </div>

                            {/* Mega Menu Body: 11 Services Grid + Live Preview Spotlight Card */}
                            <div className="mt-5 grid grid-cols-12 gap-6">
                              {/* 11 Services Grid (8 cols) */}
                              <div className="col-span-8 grid grid-cols-2 gap-x-4 gap-y-2">
                                {SERVICE_MENU_ITEMS.map((service, index) => {
                                  const activeService = pathname.startsWith(service.href);
                                  return (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      onClick={() => setMegaOpen(false)}
                                      onMouseEnter={() => setHoveredService(service)}
                                      className={`group flex items-start gap-3 rounded-[12px] p-2.5 transition-all duration-150 ${
                                        activeService
                                          ? "bg-[#fff2ed] ring-1 ring-[#ffcab8]"
                                          : "hover:bg-[#f9fafc]"
                                      }`}
                                    >
                                      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-[9px] bg-[linear-gradient(135deg,#fff1ec_0%,#ffe3d8_100%)] font-sans text-[11px] font-extrabold text-[#ff3219] transition-colors group-hover:bg-[linear-gradient(135deg,#ff1d1f_0%,#ff6b12_100%)] group-hover:text-white">
                                        {String(index + 1).padStart(2, "0")}
                                      </span>
                                      <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-2">
                                          <span className="truncate font-sans text-[13.5px] font-bold tracking-[-0.01em] text-[#0c0c10] group-hover:text-[#ff2e1a]">
                                            {service.label}
                                          </span>
                                          <span className="shrink-0 rounded-full bg-[#f3f4f7] px-2 py-0.5 font-sans text-[10px] font-semibold text-[#666975] group-hover:bg-[#ffe8df] group-hover:text-[#e03519]">
                                            {service.badge}
                                          </span>
                                        </div>
                                        <p className="mt-0.5 line-clamp-1 font-sans text-[11.5px] leading-[1.35] text-[#6d707c]">
                                          {service.shortDesc}
                                        </p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>

                              {/* Featured Service Spotlight Card (4 cols) */}
                              <div className="col-span-4 flex flex-col justify-between overflow-hidden rounded-[16px] border border-[#f2dfd7] bg-[#0d0e12] p-4 text-white">
                                <div>
                                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[11px] bg-[#191b22]">
                                    <Image
                                      src={hoveredService.previewImage}
                                      alt={hoveredService.label}
                                      fill
                                      sizes="320px"
                                      className="object-cover object-center transition-all duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent" />
                                    <span className="absolute left-2.5 top-2.5 rounded-full bg-black/65 px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#ff7c38] backdrop-blur-sm">
                                      {hoveredService.badge}
                                    </span>
                                  </div>

                                  <h3 className="mt-3.5 font-sans text-[17px] font-extrabold tracking-[-0.02em] text-white">
                                    {hoveredService.label}
                                  </h3>
                                  <p className="mt-1 font-sans text-[12px] leading-[1.45] text-white/75">
                                    {hoveredService.shortDesc}
                                  </p>
                                </div>

                                <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/10 pt-3">
                                  <Link
                                    href={hoveredService.href}
                                    onClick={() => setMegaOpen(false)}
                                    className="bg-cta-gradient inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-[9px] px-3 font-sans text-[12px] font-bold text-white shadow-[0_8px_20px_-4px_rgb(255_45_27/0.45)] transition-transform hover:-translate-y-0.5"
                                  >
                                    <span>Explore Service</span>
                                    <svg viewBox="0 0 20 20" className="size-3.5" fill="none" aria-hidden="true">
                                      <path
                                        d="M4.2 10h11.6M10.8 5.2 15.8 10l-5 4.8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </Link>
                                  <Link
                                    href="/pricing"
                                    onClick={() => setMegaOpen(false)}
                                    className="inline-flex h-9 items-center justify-center rounded-[9px] border border-white/20 px-3 font-sans text-[12px] font-semibold text-white/90 transition-colors hover:bg-white/10"
                                  >
                                    Pricing
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={item.label} className="relative">
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      isActive
                        ? "relative block whitespace-nowrap py-1.5 text-[11.5px] font-bold tracking-[0.05em] text-[#0c0c10] lg:text-[0.98vw]"
                        : "relative block whitespace-nowrap py-1.5 text-[11.5px] font-medium tracking-[0.05em] text-[#45474f] transition-colors duration-200 hover:text-[#0c0c10] lg:text-[0.98vw]"
                    }
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="header-active-underline"
                        aria-hidden="true"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-x-0 -bottom-[3px] h-[2.5px] rounded-full bg-[linear-gradient(90deg,#ff1b1c,#ff6214)] lg:h-[0.22vw]"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Actions: Top-Right CTA on Landing Page + Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 md:ml-auto">
          {isLandingPage && (
            <Link
              href="#quote"
              className="group hidden h-[38px] shrink-0 items-center justify-center gap-2 rounded-[9px] bg-[linear-gradient(92deg,#ff0e22_0%,#ff4718_54%,#ff790f_100%)] px-4 font-sans text-[13px] font-semibold tracking-[-0.01em] text-white shadow-[0_8px_20px_-4px_rgb(255_45_27/0.45)] transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex lg:h-[3.9vw] lg:gap-[0.65vw] lg:rounded-[0.78vw] lg:px-[1.55vw] lg:text-[1.12vw]"
            >
              <span>Get a Fixed Quote</span>
              <svg
                viewBox="0 0 20 20"
                className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 lg:size-[1.15vw]"
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
          )}

          {/* Mobile Menu Toggle Button (Hidden on Desktop) */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open Navigation Menu"
            aria-expanded={drawerOpen}
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-[10px] border border-[#e6e8ef] bg-white/90 text-[#0c0c10] shadow-sm transition-colors hover:border-[#ff4719] hover:text-[#ff2e1a] md:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M9 17h11"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Overlay Navigation Menu (Live Site Structure) */}
      {drawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Site Navigation"
          className="fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto bg-[#0b0c10] px-6 py-6 text-white sm:px-10 md:hidden"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <Link
              href="/"
              onClick={() => setDrawerOpen(false)}
              className="inline-flex items-center gap-3"
            >
              <svg viewBox="0 0 42 44" className="h-[34px] w-[32px]" aria-hidden="true">
                <path
                  d="M6.5 7.2c0-2.7 3-4.3 5.3-2.9l23.4 14.8c2.1 1.3 2.1 4.5 0 5.8L11.8 39.7c-2.3 1.4-5.3-.2-5.3-2.9V7.2Z"
                  fill="none"
                  stroke="#ff4719"
                  strokeWidth="4.6"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-sans text-[21px] font-extrabold tracking-[-0.04em] text-white">
                Video<span className="text-hero-gradient">Animation</span>.us
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close Navigation Menu"
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-[#ff4719] hover:bg-[#ff4719]"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="my-auto py-8">
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Services", href: "#services-drawer", isToggle: true },
                { label: "Pricing", href: "/pricing" },
                { label: "About Us", href: "/about-us" },
                { label: "Contact Us", href: "/contact-us" },
              ].map((nav) => {
                if (nav.isToggle) {
                  return (
                    <li key={nav.label}>
                      <button
                        type="button"
                        onClick={() => setMobileServicesExpanded((v) => !v)}
                        className="inline-flex cursor-pointer items-center gap-3 font-sans text-[26px] font-black tracking-[-0.03em] text-white transition-colors hover:text-[#ff5520]"
                      >
                        <span>Services</span>
                        <span className="grid size-7 place-items-center rounded-full bg-[#ff3b1b] text-[16px] font-bold text-white">
                          {mobileServicesExpanded ? "−" : "+"}
                        </span>
                      </button>

                      {mobileServicesExpanded && (
                        <div className="mt-3 grid grid-cols-1 gap-2.5 pl-2 sm:grid-cols-2">
                          {SERVICE_MENU_ITEMS.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setDrawerOpen(false)}
                              className="rounded-[12px] border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-[#ff4b19]"
                            >
                              <span className="block font-sans text-[14px] font-bold text-white">
                                {service.label}
                              </span>
                              <span className="mt-0.5 block font-sans text-[11.5px] text-white/60">
                                {service.shortDesc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                }
                return (
                  <li key={nav.label}>
                    <Link
                      href={nav.href}
                      onClick={() => setDrawerOpen(false)}
                      className="block font-sans text-[26px] font-black tracking-[-0.03em] text-white/90 transition-colors hover:text-[#ff5520]"
                    >
                      {nav.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-5 text-[12.5px] text-white/70">
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/terms-and-conditions" onClick={() => setDrawerOpen(false)}>
                Terms of Use
              </Link>
              <Link href="/privacy-policy" onClick={() => setDrawerOpen(false)}>
                Privacy Policy
              </Link>
              <a href="tel:8336666684" className="font-semibold text-white">
                (833) 666-6684
              </a>
            </div>
            <ul className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-3 py-1 text-[11.5px] font-semibold text-white/80"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.header>
  );
}
