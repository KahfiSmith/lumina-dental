"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { editorialEase } from "@/motion/motionTokens";

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  scale?: number;
  threshold?: number;
  once?: boolean;
}

export function MotionReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  yOffset = 24,
  scale = 1,
  threshold = 0.2,
  once = true,
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: yOffset,
        scale,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: editorialEase,
      }}
    >
      {children}
    </motion.div>
  );
}
