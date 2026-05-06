"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "4", label: "Core Services" },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#0e1f0b] text-white">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
        alt="Hero background"
        fill
        className="object-cover opacity-30"
        priority
        sizes="100vw"
      />

      {/* Gradient — dark at top for navbar legibility, rich green in middle, fades to near-black at bottom */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,31,11,0.85)_0%,rgba(20,44,16,0.6)_45%,rgba(10,22,8,0.95)_100%)]" />

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

      {/* Main content — vertically centered */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-6 pb-32 pt-32 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#fbbf24]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
              Your Brand · Our Creativity · Your Success
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-7 text-5xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl"
          >
            We Build Brands
            <br />
            <span className="text-[#fbbf24]">That Stand Out.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/55"
          >
            A creative studio for businesses ready to look sharp, sound
            confident, and dominate online. From branding to web — we do it all.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#fbbf24] px-8 py-3.5 text-sm font-semibold text-[#0e1f0b] transition-all duration-200 hover:bg-[#f0b020] hover:-translate-y-0.5"
            >
              Start a Project
            </a>
            <a
              href="#showcase"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10"
            >
              See Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats strip — pinned to bottom */}
      {/* <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative border-t border-white/10 bg-white/[0.04] backdrop-blur-sm"
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 divide-x divide-white/10 px-6 md:grid-cols-4 md:px-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-6 text-center">
              <span className="text-2xl font-bold text-[#fbbf24] md:text-3xl">{stat.value}</span>
              <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/45">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div> */}

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-[88px] left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 pt-1.5"
        >
          <div className="h-1.5 w-0.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
