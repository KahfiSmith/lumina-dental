"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { editorialEase } from "@/motion/motionTokens";

interface KineticHeadlineProps {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "span" | "div";
  className?: string;
  lineClassName?: string;
  delay?: number;
  highlightLineIndex?: number;
  highlightClassName?: string;
}

export function KineticHeadline({
  lines,
  as: Component = "h2",
  className = "",
  lineClassName = "",
  delay = 0,
  highlightLineIndex,
  highlightClassName = "text-[#1D4ED8]",
}: KineticHeadlineProps) {
  const shouldReduceMotion = useReducedMotion();
  const fullText = lines.join(" ");

  if (shouldReduceMotion) {
    return (
      <Component className={className}>
        {lines.map((line, idx) => (
          <span
            key={idx}
            className={`block ${idx === highlightLineIndex ? highlightClassName : ""} ${lineClassName}`}
          >
            {line}
          </span>
        ))}
      </Component>
    );
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const lineVariants = {
    hidden: {
      y: "105%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.65,
        ease: editorialEase,
      },
    },
  };

  return (
    <Component className={className} aria-label={fullText}>
      <motion.span
        className="block"
        aria-hidden="true"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {lines.map((line, idx) => {
          const isHighlight = idx === highlightLineIndex;
          return (
            <span
              key={idx}
              className="block overflow-hidden py-1 sm:py-1.5 leading-[1.06]"
            >
              <motion.span
                variants={lineVariants}
                className={`block transform-gpu origin-bottom ${
                  isHighlight ? highlightClassName : ""
                } ${lineClassName}`}
              >
                {line}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
}
