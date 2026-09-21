"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { slideInLeft, slideInRight, staggerContainer, staggerItem } from "@/lib/animations";

export default function CaledonChapter() {
  return (
    <SectionWrapper id="our-mission" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={staggerItem} className="text-copper font-semibold text-sm uppercase tracking-widest mb-4">
            Our Origin & Mission
          </motion.p>
          <motion.h2 variants={staggerItem} className="font-display text-3xl md:text-5xl font-bold">
            The <span className="text-gradient">Caledon Chapter</span>
          </motion.h2>
        </motion.div>

        {/* Problem & Solution Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* The Problem */}
          <motion.div
            className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-maroon to-copper" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-maroon/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-maroon-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-maroon-light">The Problem</h3>
            </div>

            <p className="text-silver/70 leading-relaxed text-[15px]">
              In Peel Region, many high schools lack a HOSA chapter entirely, or face such
              overwhelming demand that they enforce{" "}
              <span className="text-white font-semibold">strict capacity caps</span> and{" "}
              <span className="text-white font-semibold">random club lotteries</span>.
            </p>
            <p className="text-silver/70 leading-relaxed mt-4 text-[15px]">
              As a result, hundreds of dedicated, highly intelligent students are{" "}
              <span className="text-maroon-light font-semibold">turned away from STEM opportunities</span>{" "}
              through no fault of their own — their ambition capped by arbitrary systems.
            </p>
          </motion.div>

          {/* Our Solution */}
          <motion.div
            className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Accent bar */}
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-navy to-navy-light" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-navy/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-navy-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-light">Our Solution</h3>
            </div>

            <p className="text-silver/70 leading-relaxed text-[15px]">
              We built this independent community chapter to{" "}
              <span className="text-white font-semibold">dismantle those artificial barriers</span>.
              We operate on a{" "}
              <span className="text-navy-light font-semibold">merit-first, open-access model</span>.
            </p>
            <p className="text-silver/70 leading-relaxed mt-4 text-[15px]">
              We believe a student&apos;s opportunity to explore a career in healthcare should never
              be dictated by a{" "}
              <span className="text-copper font-semibold">postal code</span> or a{" "}
              <span className="text-copper font-semibold">waitlist</span>. Every ambitious student
              deserves a seat at the table.
            </p>
          </motion.div>
        </div>

        {/* Animated divider */}
        <motion.div
          className="flex justify-center my-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        >
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-copper/50 to-transparent" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
