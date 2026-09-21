"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  duration: number;
  delay: number;
  parallaxFactor: number;
}

const colors = [
  "rgba(107, 29, 74, 0.15)",
  "rgba(46, 107, 158, 0.12)",
  "rgba(192, 98, 58, 0.1)",
  "rgba(107, 29, 74, 0.08)",
  "rgba(46, 107, 158, 0.08)",
];

export default function ParticleField() {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const { scrollY } = useScroll();

  useEffect(() => {
    const generated: Orb[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 150 + Math.random() * 400,
      color: colors[i % colors.length],
      opacity: 0.3 + Math.random() * 0.4,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * 10,
      parallaxFactor: 0.1 + Math.random() * 0.4,
    }));
    setOrbs(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {orbs.map((orb) => (
        <ParallaxOrb key={orb.id} orb={orb} scrollY={scrollY} />
      ))}
    </div>
  );
}

function ParallaxOrb({ orb, scrollY }: { orb: Orb; scrollY: ReturnType<typeof useScroll>["scrollY"] }) {
  const y = useTransform(scrollY, [0, 3000], [0, -3000 * orb.parallaxFactor]);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${orb.x}%`,
        top: `${orb.y}%`,
        width: orb.size,
        height: orb.size,
        background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
        filter: `blur(${orb.size * 0.3}px)`,
        y,
      }}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -25, 15, -10, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration: orb.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: orb.delay,
      }}
    />
  );
}
