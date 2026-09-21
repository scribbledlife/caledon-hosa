"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { staggerContainer, staggerItem } from "@/lib/animations";

const tracks = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a3.276 3.276 0 0 0 .22 4.78 3.3 3.3 0 0 0 4.56-.178l.962-.962M5 14.5l2.47 2.47a3.276 3.276 0 0 1-.22 4.78 3.3 3.3 0 0 1-4.56-.178L1.728 20.61" />
      </svg>
    ),
    title: "Medical Innovation & Engineering",
    description:
      "Mentorship for teams designing, coding, and prototyping original medical devices, apps, and clinical software. From concept to competition-ready prototype.",
    glow: "copper" as const,
    accent: "text-copper",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.54 23.54 0 0 0-2.688 3.202c5.156 2.973 10.616 4.79 16.468 4.79A47.86 47.86 0 0 0 21.95 13.35a23.54 23.54 0 0 0-2.688-3.202m-15.482 0c3.623-1.285 7.512-2 11.612-2 4.1 0 7.989.715 11.613 2" />
      </svg>
    ),
    title: "Clinical & Academic Excellence",
    description:
      "Rigorous training for standard clinical events like Medical Math and Health Informatics, plus specialized National Geographic Learning (ATC) academic exams.",
    glow: "navy" as const,
    accent: "text-navy-light",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Professional Development",
    description:
      "Workshops focused on clinical problem-solving, scientific communication, and real-world health literacy. Build skills that matter beyond the classroom.",
    glow: "maroon" as const,
    accent: "text-maroon-light",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5A3.375 3.375 0 0 0 13.125 10.875h-2.25A3.375 3.375 0 0 0 7.5 14.25v4.5m6-15a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM3 15.75h.008v.008H3v-.008Zm18 0h.008v.008H21v-.008Z" />
      </svg>
    ),
    title: "The Road to ILC",
    description:
      "Our ultimate aim — preparing our roster to dominate the HOSA Canada vSLC and in-person SLC, directly securing tickets to the International Leadership Conference.",
    glow: "navy" as const,
    accent: "text-navy-light",
  },
];

export default function WhatWeDo() {
  return (
    <SectionWrapper id="what-we-do" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={staggerItem} className="text-copper font-semibold text-sm uppercase tracking-widest mb-4">
            Our Core Tracks
          </motion.p>
          <motion.h2 variants={staggerItem} className="font-display text-3xl md:text-5xl font-bold mb-6">
            What We <span className="text-gradient">Do</span> & Our Aims
          </motion.h2>
          <motion.p variants={staggerItem} className="text-silver/60 text-lg max-w-2xl mx-auto">
            Four pillars driving our chapter toward excellence.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {tracks.map((track) => (
            <motion.div key={track.title} variants={staggerItem}>
              <GlassCard hoverGlow={track.glow} className="h-full">
                <div className={`${track.accent} mb-4`}>{track.icon}</div>
                <h3 className="font-display text-xl font-bold mb-3 text-white">
                  {track.title}
                </h3>
                <p className="text-silver/60 leading-relaxed text-[15px]">
                  {track.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
