"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverGlow?: "maroon" | "navy" | "copper";
}

const glowColors = {
  maroon: "rgba(107, 29, 74, 0.25)",
  navy: "rgba(46, 107, 158, 0.25)",
  copper: "rgba(192, 98, 58, 0.25)",
};

export default function GlassCard({
  children,
  className = "",
  hoverGlow = "maroon",
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div className="perspective-1000">
      <motion.div
        ref={ref}
        className={`glass-card p-8 preserve-3d cursor-pointer transition-shadow duration-300 ${className}`}
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          boxShadow: `0 20px 60px ${glowColors[hoverGlow]}, 0 0 40px ${glowColors[hoverGlow]}`,
          borderColor: "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
