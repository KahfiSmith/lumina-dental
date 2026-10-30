"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function Counter({
  value,
  duration = 1.8,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || shouldReduceMotion || !ref.current) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);
      const currentCount = easedProgress * value;

      if (ref.current) {
        const formatted =
          decimals > 0
            ? currentCount.toFixed(decimals)
            : Math.floor(currentCount).toString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else if (ref.current) {
        const finalVal =
          decimals > 0 ? value.toFixed(decimals) : value.toString();
        ref.current.textContent = `${prefix}${finalVal}${suffix}`;
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, value, duration, decimals, prefix, suffix, shouldReduceMotion]);

  const initialText = `${prefix}${
    decimals > 0
      ? shouldReduceMotion
        ? value.toFixed(decimals)
        : (0).toFixed(decimals)
      : shouldReduceMotion
      ? value.toString()
      : "0"
  }${suffix}`;

  return (
    <span ref={ref} className={className}>
      {initialText}
    </span>
  );
}
