import { type Variants } from "framer-motion";

// Spring configurations
export const gentleSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
  mass: 1,
};

export const bouncySpring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 10,
  mass: 0.8,
};

export const stiffSpring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
  mass: 1,
};

// Scroll-triggered variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: gentleSpring,
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: gentleSpring,
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: gentleSpring,
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: gentleSpring,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: bouncySpring,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: gentleSpring,
  },
};

// Levitation animation for continuous floating
export const levitateAnimation = {
  y: [-8, 8, -8],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// 3D tilt calculation helper
export function calculateTilt(
  e: React.MouseEvent<HTMLDivElement>,
  element: HTMLDivElement,
  maxTilt: number = 15
) {
  const rect = element.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -maxTilt;
  const rotateY = ((x - centerX) / centerX) * maxTilt;
  return { rotateX, rotateY };
}
