"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from "@/lib/motion";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="bg-[#FAFAFA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="bg-[#0F2419] p-8 md:p-14"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid gap-10 md:grid-cols-2 md:items-center"
          >
            <motion.div variants={fadeLeft}>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#CDFF00]">
                Contact Call to Action
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Ready to build your brand or business presence?
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                Contact Zenith Multipurposes today for website design, branding,
                social media setup, graphics design, or AI automation support.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid gap-5">
              <motion.div variants={staggerItem} className="bg-white/10 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CDFF00]">
                  Address
                </p>
                <p className="mt-2 text-sm text-white/80">
                  No 23, Akinyemi Street, Oluyole Estate, Oyo State, Nigeria
                </p>
              </motion.div>
              <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-5">
                <motion.div variants={staggerItem} className="bg-white/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CDFF00]">
                    Email
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    Dzmultipurposes@gmail.com
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="bg-white/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CDFF00]">
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
                className="inline-flex w-full items-center justify-center bg-[#CDFF00] py-3 text-xs font-bold uppercase tracking-[0.3em] text-[#0F2419] transition hover:bg-[#B8E600]"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
