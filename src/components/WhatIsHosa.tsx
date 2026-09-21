"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = Date.now();
          const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-gradient">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 300000, suffix: "+", label: "Members Globally" },
  { value: 65, suffix: "+", label: "Years of Impact" },
  { value: 170, suffix: "+", label: "Competitive Events" },
];

export default function WhatIsHosa() {
  return (
    <SectionWrapper id="what-is-hosa" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={staggerItem} className="text-copper font-semibold text-sm uppercase tracking-widest mb-4">
            About the Organization
          </motion.p>
          <motion.h2 variants={staggerItem} className="font-display text-3xl md:text-5xl font-bold mb-6">
            What is <span className="text-gradient">HOSA</span>?
          </motion.h2>
          <motion.p variants={staggerItem} className="text-silver/70 text-lg max-w-3xl mx-auto leading-relaxed">
            HOSA — Future Health Professionals — is a premier international student organization
            with over <span className="text-white font-semibold">300,000 members</span> across the globe.
            It is officially recognized by government and education ministries worldwide, providing
            a unique pipeline for <span className="text-copper">leadership development</span>,{" "}
            <span className="text-copper">technical skills</span>, and{" "}
            <span className="text-copper">industry recognition</span> exclusively for students
            pursuing health science and biomedical careers.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <GlassCard className="text-center" hoverGlow="navy">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-silver/60 mt-3 text-sm uppercase tracking-wider">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Detail blurb */}
        <motion.div
          className="glass-card p-8 md:p-12 rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">
                More Than a Club — A <span className="text-gradient">Career Launchpad</span>
              </h3>
              <p className="text-silver/70 leading-relaxed">
                HOSA bridges the gap between the classroom and the health professions. Through
                competitive events, leadership conferences, and community service, members gain
                real-world experience that sets them apart in university applications, medical
                school interviews, and professional careers.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Government & Ministry Recognized",
                "Direct Pipeline to Health Careers",
                "National & International Competitions",
                "Leadership & Networking Opportunities",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-maroon to-copper flex-shrink-0" />
                  <span className="text-silver/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
