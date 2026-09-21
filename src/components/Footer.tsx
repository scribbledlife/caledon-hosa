"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Footer() {
  return (
    <footer id="contact" className="relative">
      {/* Final CTA */}
      <motion.div
        className="section-padding pb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to <span className="text-gradient">Unlock Your Potential</span>?
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-silver/60 text-lg mb-8 leading-relaxed"
          >
            Whether you&apos;re an ambitious student ready to compete on the national stage
            or a mentor passionate about shaping the next generation of health professionals
            — there&apos;s a place for you here.
          </motion.p>
          <motion.a
            href="https://linktr.ee/caledonhosa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-maroon to-maroon-dark text-white font-semibold text-lg shadow-lg hover:shadow-maroon/30 hover:shadow-2xl transition-shadow"
            variants={staggerItem}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved Today
          </motion.a>
        </div>
      </motion.div>

      {/* Footer Bar */}
      <div className="glass border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Caledon HOSA" width={36} height={36} className="rounded-full" />
              <span className="font-display font-semibold text-sm text-silver/80">
                Caledon HOSA Community Chapter
              </span>
            </div>

            {/* Contact & Social */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:caledonhosa@gmail.com"
                className="text-silver/50 hover:text-white transition-colors text-sm"
              >
                caledonhosa@gmail.com
              </a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/caledonhosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver/50 hover:text-copper transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </motion.a>
            </div>

            {/* Copyright */}
            <p className="text-silver/30 text-xs">
              &copy; {new Date().getFullYear()} Caledon HOSA Community Chapter. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
