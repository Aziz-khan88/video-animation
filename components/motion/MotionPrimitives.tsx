"use client";

import React, { useRef } from "react";
import {
  motion,
  MotionConfig,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "motion/react";

export const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_OUT_QUART: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Global provider wrapped in root layout so all Motion animations respect
 * the user's OS `prefers-reduced-motion` setting automatically.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: boolean;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "article" | "header" | "footer" | "span" | "p" | "h1" | "h2" | "h3" | "li" | "ul" | "dl";
}

/**
 * Smooth directional fade + transform reveal triggered when entering the viewport.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.65,
  y = 22,
  x = 0,
  scale = 1,
  blur = false,
  once = true,
  amount = 0.12,
  as = "div",
}: RevealProps) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      initial={{
        opacity: 0,
        y,
        x,
        scale,
        ...(blur ? { filter: "blur(6px)" } : {}),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        ...(blur ? { filter: "blur(0px)" } : {}),
      }}
      viewport={{ once, amount, margin: "0px 0px -30px 0px" }}
      transition={{
        duration,
        delay,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "ul" | "ol" | "dl" | "section";
  role?: string;
  "aria-label"?: string;
}

/**
 * Orchestrates sequential child reveals when the container enters the viewport.
 */
export function StaggerGroup({
  children,
  className,
  stagger = 0.09,
  delayChildren = 0.04,
  once = true,
  amount = 0.1,
  as = "div",
  role,
  "aria-label": ariaLabel,
}: StaggerGroupProps) {
  const Component = motion[as] as typeof motion.div;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -25px 0px" }}
      className={className}
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  as?: "div" | "li" | "article" | "span" | "p";
  onClick?: () => void;
}

export function StaggerItem({
  children,
  className,
  y = 20,
  x = 0,
  scale = 1,
  duration = 0.6,
  as = "div",
  onClick,
}: StaggerItemProps) {
  const Component = motion[as] as typeof motion.div;

  const itemVariants: Variants = {
    hidden: { opacity: 0, y, x, scale },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        ease: EASE_OUT_EXPO,
      },
    },
  };

  return (
    <Component variants={itemVariants} className={className} onClick={onClick}>
      {children}
    </Component>
  );
}

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
  scaleFrom?: number;
  entranceDuration?: number;
}

/**
 * Subtle scroll-linked vertical parallax + gentle cinematic zoom-out on entrance
 * for full-bleed section background artwork.
 */
export function ParallaxBackground({
  children,
  className,
  offset = 24,
  scaleFrom = 1.035,
  entranceDuration = 1.15,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0px", "0px"] : [`-${offset}px`, `${offset}px`]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ y }}
        initial={{ scale: scaleFrom, opacity: 0.92 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: entranceDuration, ease: EASE_OUT_QUART }}
        className="relative h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

/**
 * Gentle, organic floating oscillation for holographic HUD cards, icons, or badges.
 */
export function FloatingElement({
  children,
  className,
  amplitude = 5,
  duration = 4.2,
  delay = 0,
}: FloatingElementProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        prefersReducedMotion
          ? undefined
          : {
              y: [0, -amplitude, 0],
            }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
