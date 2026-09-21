"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, gentleSpring } from "@/lib/animations";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 800], [0, 200]);
  const headlineY = useTransform(scrollY, [0, 800], [0, 150]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Decorative gradient rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-maroon/20 animate-glow-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-navy/10 animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
      >
        {/* Floating Logo */}
        <motion.div
          className="relative mb-8"
          style={{ y: logoY }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-maroon/20 blur-3xl scale-150 animate-glow-pulse" />
          <Image
            src="/logo.png"
            alt="Caledon HOSA - Future Health Professionals"
            width={180}
            height={180}
            className="relative z-10 drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.div style={{ y: headlineY }}>
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
            variants={staggerItem}
          >
            <span className="text-gradient">Welcome to the</span>
            <br />
            <span className="text-white">Caledon HOSA</span>
            <br />
            <span className="text-gradient">Community Chapter.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-silver/80 max-w-2xl mx-auto mb-12 leading-relaxed"
            variants={staggerItem}
          >
            Redefining STEM and Healthcare Opportunities for Peel Region.
            <br />
            <span className="text-copper font-medium">No caps. No lotteries. Just pure potential.</span>
          </motion.p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={staggerItem}
        >
          <motion.a
            href="https://linktr.ee/caledonhosa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-maroon to-maroon-dark text-white font-semibold text-lg shadow-lg hover:shadow-maroon/30 hover:shadow-2xl transition-shadow text-center"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the 26/27 Season
          </motion.a>

          <motion.button
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll('#our-mission')}
          >
            Explore Our Mission
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-white/60"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
