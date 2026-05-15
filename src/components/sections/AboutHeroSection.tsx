"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-dark-green pb-16 pt-24 text-white md:pt-28">
      <Image
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
        alt="Team collaboration background"
        fill
        className="object-cover opacity-20"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,36,25,0.95)_0%,rgba(26,58,46,0.85)_50%,rgba(15,36,25,0.98)_100%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <motion.div variants={fadeUp}>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-neon-green">
              About Us
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Welcome to Zenith Multipurposes
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              We help businesses look the part, communicate with confidence, and run more efficiently. From building your brand identity and designing high-quality visuals to setting up your online presence and automating your operations — Zenith Multipurposes gives businesses everything they need to compete and grow.
            </p>
            <motion.div variants={staggerContainer} className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
              <motion.div variants={staggerItem}>
                <Link
                  href="/services"
                  className="bg-neon-green px-5 py-2.5 text-dark-green transition-all hover:bg-[#B8E600]"
                >
                  Explore services
                </Link>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Link
                  href="/contact"
                  className="border border-white/20 px-5 py-2.5 text-white transition-all hover:border-neon-green hover:bg-neon-green/10 hover:text-neon-green"
                >
                  Talk to the team
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-4">
            <div className="relative aspect-4/3 overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                alt="Team collaborating on a brand strategy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,36,25,0.1)_0%,rgba(15,36,25,0.45)_100%)]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
