"use client";

import { motion, useReducedMotion } from "motion/react";

interface EditorialTickerProps {
  items?: string[];
  speedSeconds?: number;
  reverse?: boolean;
  className?: string;
}

const defaultItems = [
  "3D INTRAORAL OPTICAL SCAN",
  "AUTOCLAVE KELAS B 134°C",
  "PIEZO ULTRASONIC SCALING",
  "BEHEL SAPPHIRE & CLEAR ALIGNERS",
  "PORCELAIN VENEER E-MAX",
  "DOKTER SPESIALIS RESMI PBDI",
  "MINIMAL INVASIVE & GENTLE TOUCH",
  "SURABAYA BARAT STUDIO",
];

export function EditorialTicker({
  items = defaultItems,
  speedSeconds = 28,
  reverse = false,
  className = "",
}: EditorialTickerProps) {
  const shouldReduceMotion = useReducedMotion();

  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      className={`w-full overflow-hidden whitespace-nowrap border-y border-[#E5E7EB] bg-white py-3 select-none ${className}`}
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: speedSeconds,
                repeat: Infinity,
                ease: "linear",
              }
        }
        className="inline-flex items-center gap-8 will-change-transform"
      >
        {repeatedItems.map((text, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-4 font-mono text-[11px] font-bold tracking-widest uppercase text-[#12151A]"
          >
            <span>{text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D284]" aria-hidden="true" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
