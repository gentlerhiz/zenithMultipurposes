"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export default function AboutStatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: "10+", label: "Years in market" },
    { value: "200+", label: "Projects delivered" },
    { value: "5", label: "Core service lines" },
    { value: "98%", label: "Client satisfaction" },
  ];

  return (
    <section ref={ref} className="bg-linear-to-br from-dark-green to-[#0e1f0b] py-20 text-white">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? "show" : "hidden"} className="mb-12">
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.35em] text-neon-green">
            By The Numbers
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold md:text-4xl">
            Proven track record across all services.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-base leading-7 text-white/70">
            Our commitment to quality, strategy, and delivery has been recognized through consistent results and client trust.
          </motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? "show" : "hidden"} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-neon-green/40 hover:bg-white/8"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-neon-green/0 to-neon-green/0 opacity-0 transition-all duration-300 group-hover:from-neon-green/5 group-hover:to-neon-green/0" />

              <div className="relative flex flex-col">
                <div className="text-5xl font-bold text-neon-green md:text-6xl">
                  {stat.value}
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/70 transition-colors duration-300 group-hover:text-neon-green">
                  {stat.label}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 h-24 w-24 bg-linear-to-br from-neon-green to-transparent opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
