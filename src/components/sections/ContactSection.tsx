"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from "@/lib/motion";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="bg-[#f6f5f1] py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="rounded-[28px] bg-[#1f3f16] p-8 md:p-14"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid gap-10 md:grid-cols-2 md:items-center"
          >
            <motion.div variants={fadeLeft}>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#fbbf24]">
                Want to say something?
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Why not reach out to us today?
              </h2>
              <p className="mt-4 text-base leading-7 text-white/65">
                We&apos;re here to help you get more traffic, leads, sales, and
                customers online. Let&apos;s talk about your business.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid gap-5">
              <motion.div variants={staggerItem} className="rounded-2xl bg-white/10 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fbbf24]">
                  Address
                </p>
                <p className="mt-2 text-sm text-white/80">
                  No 23, Akinyemi Street, Oluyole Estate, Oyo State, Nigeria
                </p>
              </motion.div>
              <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-5">
                <motion.div variants={staggerItem} className="rounded-2xl bg-white/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fbbf24]">
                    Email
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    Dzmultipurposes@gmail.com
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="rounded-2xl bg-white/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fbbf24]">
                    Phone
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    +234 8108529124
                  </p>
                </motion.div>
              </motion.div>
              <motion.a
                variants={fadeRight}
                href="mailto:Dzmultipurposes@gmail.com"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#fbbf24] py-3 text-xs font-bold uppercase tracking-[0.3em] text-[#142c10] transition hover:bg-[#d97706]"
              >
                Send us a message
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
