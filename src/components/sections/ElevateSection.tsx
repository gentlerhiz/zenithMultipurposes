"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeLeft, staggerContainer } from "@/lib/motion";

export default function ElevateSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-off-white py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(205,255,0,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,36,25,0.08),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative mx-auto w-full max-w-6xl px-6 md:px-10"
      >
        <motion.div
          variants={fadeLeft}
          className="relative overflow-hidden border border-black/10 bg-white p-8 shadow-[0_24px_60px_rgba(17,17,17,0.08)] md:p-10"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-neon-green via-dark-green to-neon-green" />
          <div className="absolute -right-20 -top-20 h-48 w-48 bg-neon-green/8 blur-3xl" />

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">
            Introduction
          </p>
          <h2 className="mt-4 text-2xl font-bold text-text-primary md:text-3xl">
            Zenith Multipurposes — because your business deserves more than average  
          </h2>
          <p className="mt-4 text-base leading-7 text-[#6B7280]">
            Zenith Multipurposes is a division of Bornstellar Limited, operating under Zenith Multiservices. 
            We help businesses look better, run smarter, and grow faster. From building standout websites and 
            designing high-quality graphics to managing your social media, crafting a powerful corporate brand, 
            and integrating AI automation into your operations — we handle it all. If you&apos;re ready to take your business to the next level, Zenith Multipurposes is the partner that gets it done.
           </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
