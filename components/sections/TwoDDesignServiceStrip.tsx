"use client";

import { motion } from "motion/react";
import {
  EASE_OUT_EXPO,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

interface ServiceStripItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const SERVICE_STRIP_ITEMS: readonly ServiceStripItem[] = [
  {
    id: "explainer-videos",
    title: "Explainer Videos",
    subtitle: "Simplify & educate",
    icon: (
      <motion.svg
        viewBox="0 0 40 32"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        className="h-8 w-10 shrink-0 text-white transition-colors duration-300 group-hover:scale-110 group-hover:text-[#ff531a]"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="2.2"
          y="2.2"
          width="35.6"
          height="27.6"
          rx="3.2"
          stroke="currentColor"
          strokeWidth="2.3"
        />
        <path
          d="M8.5 2.5v27M31.5 2.5v27"
          stroke="currentColor"
          strokeWidth="2.1"
        />
        <path
          d="M2.5 8.5h6M2.5 14h6M2.5 19.5h6M2.5 24.5h6"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M31.5 8.5h6M31.5 14h6M31.5 19.5h6M31.5 24.5h6"
          stroke="currentColor"
          strokeWidth="2"
        />
        <motion.path
          d="M17.2 11.2v9.6l7.8-4.8-7.8-4.8Z"
          fill="currentColor"
          animate={{ scale: [1, 1.16, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "20px 16px" }}
        />
      </motion.svg>
    ),
  },
  {
    id: "technical-animation",
    title: "Technical Animation",
    subtitle: "Show how it works",
    icon: (
      <motion.svg
        viewBox="0 0 36 36"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="size-9 shrink-0 text-white transition-colors duration-500 group-hover:scale-110 group-hover:text-[#ff531a]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M15.4 3.5h5.2l.8 3.3a11.3 11.3 0 0 1 2.7 1.1l3-1.7 3.6 3.6-1.7 3a11.3 11.3 0 0 1 1.1 2.7l3.3.8v5.2l-3.3.8a11.3 11.3 0 0 1-1.1 2.7l1.7 3-3.6 3.6-3-1.7a11.3 11.3 0 0 1-2.7 1.1l-.8 3.3h-5.2l-.8-3.3a11.3 11.3 0 0 1-2.7-1.1l-3 1.7-3.6-3.6 1.7-3a11.3 11.3 0 0 1-1.1-2.7l-3.3-.8v-5.2l3.3-.8a11.3 11.3 0 0 1 1.1-2.7l-1.7-3 3.6-3.6 3 1.7a11.3 11.3 0 0 1 2.7-1.1l.8-3.3Z"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="2.3" />
      </motion.svg>
    ),
  },
  {
    id: "product-animation",
    title: "Product Animation",
    subtitle: "Present, demo & sell",
    icon: (
      <motion.svg
        viewBox="0 0 36 36"
        animate={{ y: [0, -2.5, 0] }}
        transition={{ duration: 3.1, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
        className="size-9 shrink-0 text-white transition-colors duration-300 group-hover:scale-110 group-hover:text-[#ff531a]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M18 3.5 31 10.8v14.4L18 32.5 5 25.2V10.8L18 3.5Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M5.4 11 18 18.2 30.6 11M18 18.2v14"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    ),
  },
  {
    id: "training-process-videos",
    title: "Training & Process Videos",
    subtitle: "Teach, onboard & drive results",
    icon: (
      <motion.svg
        viewBox="0 0 40 34"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3.6, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
        className="h-9 w-10 shrink-0 text-white transition-colors duration-300 group-hover:scale-110 group-hover:text-[#ff531a]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 4.5 36.5 12 20 19.5 3.5 12 20 4.5Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M10.2 15.5v7.2c0 2.6 4.4 4.8 9.8 4.8s9.8-2.2 9.8-4.8v-7.2"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34.2 13.2v11.5"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
        <circle cx="34.2" cy="25.8" r="1.5" fill="currentColor" />
      </motion.svg>
    ),
  },
] as const;

export function TwoDDesignServiceStrip() {
  return (
    <section
      id="services"
      aria-label="2D Animation Core Service Categories"
      className="relative z-20 w-full bg-[#050608] text-white"
    >
      <div className="mx-auto w-[96%] py-5">
        <StaggerGroup
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:flex lg:items-center lg:justify-between lg:gap-0"
          stagger={0.11}
          delayChildren={0.05}
        >
          {SERVICE_STRIP_ITEMS.map((item, idx) => (
            <StaggerItem
              key={item.id}
              y={16}
              className="flex items-center lg:flex-1 lg:justify-center first:lg:justify-start last:lg:justify-end"
            >
              {/* Vertical Divider Line on Desktop between columns */}
              {idx > 0 && (
                <motion.span
                  aria-hidden="true"
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.12 + idx * 0.08,
                    ease: EASE_OUT_EXPO,
                  }}
                  className="mr-4 hidden h-[42px] w-px shrink-0 origin-center bg-white/35 lg:mr-6 lg:inline-block xl:mr-11"
                />
              )}

              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                className="group flex w-full items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05] lg:w-auto lg:gap-4 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:hover:bg-transparent"
              >
                {item.icon}
                <div className="min-w-0 leading-tight">
                  <h2 className="font-sans text-[15px] font-extrabold tracking-[-0.015em] text-white transition-colors duration-300 group-hover:text-[#ff6a26] lg:text-[16px] xl:text-[17px]">
                    {item.title}
                  </h2>
                  <p className="mt-0.5 font-sans text-[12.5px] font-normal tracking-[-0.01em] text-white/85 lg:text-[13.5px]">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
