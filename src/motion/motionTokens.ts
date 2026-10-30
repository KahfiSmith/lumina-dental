import type { Transition, Variants } from "motion/react";

export const editorialEase = [0.16, 1, 0.3, 1] as const;
export const gentleEase = [0.25, 0.1, 0.25, 1] as const;

export const editorialSpring: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 28,
  mass: 0.8,
};

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 24,
  mass: 0.5,
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 160,
  damping: 22,
  mass: 1,
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: editorialEase,
    },
  },
};

export const fadeScaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: editorialEase,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const maskRevealVariants: Variants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    y: 20,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    y: 0,
    transition: {
      duration: 0.85,
      ease: editorialEase,
    },
  },
};

export const lineTextVariants: Variants = {
  hidden: {
    y: "110%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: editorialEase,
    },
  },
};

export const buttonHoverVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: snappySpring,
  },
  tap: {
    scale: 0.97,
    transition: snappySpring,
  },
};

export const cardInteractiveVariants: Variants = {
  rest: {
    y: 0,
    transition: {
      duration: 0.25,
      ease: editorialEase,
    },
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.25,
      ease: editorialEase,
    },
  },
};
