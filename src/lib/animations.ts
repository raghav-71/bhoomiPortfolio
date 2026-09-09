import type { Variants } from "motion/react";

/**
 * =========================================================================
 * BHOOMI JAKKANNAVAR — SYNCHRONIZED ANIMATION SYSTEM
 * =========================================================================
 * Unified animation orchestrator to ensure photos/images and information
 * (name, title, description, skills/tags, buttons) always animate in
 * one cohesive, premium timeline across desktop, tablet, and mobile.
 *
 * Sequence Timeline:
 *  0.0s → Section / Image starts (smooth fade-in + subtle scale/slide-up, 0.6s)
 *  0.1s → Name / Sub-label starts (smooth fade-in + slide-up, 0.5s)
 *  0.3s → Professional title / Heading starts (smooth fade-in + slide-up)
 *  0.45s → Description / Bio starts (smooth fade-in with subtle upward motion)
 *  0.6s → Skills, tags, social links start (staggered 0.08–0.12s)
 *  0.75s–0.85s → Buttons finish appearing
 */

export const EASING_PREMIUM = [0.16, 1, 0.3, 1] as const;

// Parent Orchestrator: triggers once in view and sequences children
export const syncContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// 1. Profile photo / Project image
// Starts at 0.0s, duration 0.6s, subtle fade-in + scale/slide-up
export const syncImageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASING_PREMIUM,
    },
  },
};

// 2. Name / Badge / Category index
// Starts at ~0.1s, duration 0.5s
export const syncNameVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: EASING_PREMIUM,
    },
  },
};

// 3. Professional Title / Headline
// Starts at ~0.3s, duration 0.5s
export const syncTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.28,
      ease: EASING_PREMIUM,
    },
  },
};

// 4. Description / Bio / Paragraphs
// Starts at ~0.45s, subtle upward movement
export const syncDescVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.44,
      ease: EASING_PREMIUM,
    },
  },
};

// 5. Skills, Tags, Feature chips container (staggers items starting at ~0.58s)
export const syncTagListVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.58,
      staggerChildren: 0.08,
    },
  },
};

export const syncTagItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: EASING_PREMIUM,
    },
  },
};

// 6. Action buttons / CTAs
// Appear at ~0.72s and finish by ~0.82s
export const syncButtonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.72,
      ease: EASING_PREMIUM,
    },
  },
};
