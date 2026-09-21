"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useState } from "react";

const founders = [
  {
    name: "Mridul Goel",
    role: "Founder & President",
    initials: "MG",
    bio: "Driven by a firsthand understanding of how arbitrary barriers block talented students from STEM opportunities, Mridul founded the Caledon HOSA Community Chapter to build a merit-first environment where ambition is the only prerequisite. He is committed to creating a competitive, high-standard platform that prepares peers for national and international stages.",
    gradient: "from-maroon to-copper",
    glowColor: "rgba(107, 29, 74, 0.3)",
  },
  {
    name: "Pranav Yellapragada",
    role: "Founder & Vice President",
    initials: "PY",
    bio: "Pranav co-founded the chapter with a vision to democratize STEM access across Caledon and Peel Region. With deep expertise in health sciences and a passion for mentorship, he ensures every member receives the rigorous training and support needed to excel at the highest levels of HOSA competition.",
    gradient: "from-navy to-navy-light",
    glowColor: "rgba(46, 107, 158, 0.3)",
  },
];

export default function Founders() {
  return (
    <SectionWrapper id="founders" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={staggerItem} className="text-copper font-semibold text-sm uppercase tracking-widest mb-4">
            Leadership
          </motion.p>
          <motion.h2 variants={staggerItem} className="font-display text-3xl md:text-5xl font-bold">
            Meet the <span className="text-gradient">Founders</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {founders.map((founder) => (
            <motion.div key={founder.name} variants={staggerItem}>
              <FounderCard founder={founder} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function FounderCard({ founder }: { founder: (typeof founders)[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      whileHover={{
        boxShadow: `0 20px 60px ${founder.glowColor}`,
        borderColor: "rgba(255, 255, 255, 0.2)",
      }}
      layout
    >
      <div className="p-8">
        {/* Avatar */}
        <motion.div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center mb-6 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <span className="text-2xl font-display font-bold text-white">
            {founder.initials}
          </span>
        </motion.div>

        {/* Info */}
        <h3 className="font-display text-xl font-bold text-white mb-1">
          {founder.name}
        </h3>
        <p className="text-copper text-sm font-medium mb-4">{founder.role}</p>

        {/* Bio - expands on hover */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="overflow-hidden"
        >
          <p className="text-silver/60 text-sm leading-relaxed pt-2 border-t border-white/10">
            {founder.bio}
          </p>
        </motion.div>

        {/* Expand hint */}
        <motion.p
          className="text-white/30 text-xs mt-4 flex items-center gap-1"
          animate={{ opacity: isExpanded ? 0 : 1 }}
        >
          <span>Hover to learn more</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.p>
      </div>
    </motion.div>
  );
}
