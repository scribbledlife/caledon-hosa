"use client";

import { motion } from "framer-motion";
import { fadeInUp, gentleSpring } from "@/lib/animations";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  enableBob?: boolean;
  delay?: number;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  enableBob = false,
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`relative ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { ...gentleSpring, delay },
        },
      }}
    >
      {enableBob ? (
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.section>
  );
}
