"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeLeft, fadeRight, staggerContainer } from "@/lib/motion";

export default function ElevateSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#f6f5f1] py-4 pb-16 md:pb-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mx-auto grid w-full max-w-6xl gap-6 px-6 md:grid-cols-[1fr_1fr] md:px-10"
      >
        <motion.div
          variants={fadeLeft}
          className="rounded-[28px] border border-black/8 bg-white p-8 shadow-[0_18px_45px_rgba(17,17,17,0.07)] md:p-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#1f3f16]">
            Elevate Your Digital Presence
          </p>
          <h2 className="mt-4 text-2xl font-bold text-[#141414] md:text-3xl">
            Our Comprehensive Business Solutions
          </h2>
          <p className="mt-4 text-base leading-7 text-[#575757]">
            At ZENITH MULTIPURPOSES we specialize in delivering top-notch
            services to enhance your online presence and give your business the
            edge. Whether you&apos;re a startup or an established business
            seeking a fresh perspective, we&apos;ve got you covered.
          </p>
        </motion.div>

        <motion.div variants={fadeRight} className="grid gap-6">
          <div className="rounded-[24px] bg-[#1f3f16] p-7 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#fbbf24]">
              Brand your business in style
            </p>
            <p className="mt-3 text-xl font-bold leading-snug">
              Clean identity, strong presence, clear message.
            </p>
          </div>
          <div className="rounded-[24px] border border-black/8 bg-white p-7 shadow-[0_18px_40px_rgba(17,17,17,0.07)]">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#575757]">
              Manage your social media the right way
            </p>
            <p className="mt-3 text-base leading-7 text-[#575757]">
              From content strategy to execution, we help you show up
              consistently and confidently across every platform.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
