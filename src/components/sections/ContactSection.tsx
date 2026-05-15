"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from "@/lib/motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

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

            <motion.div variants={fadeRight} className="grid gap-5">
              <motion.div variants={staggerContainer} className="grid gap-5">
                <motion.div variants={staggerItem} className="bg-white/10 p-5">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#CDFF00] to-[#B8E600]">
                      <FiMapPin className="h-4 w-4 text-[#0F2419]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CDFF00]">
                        Address
                      </p>
                      <p className="mt-1 text-sm text-white/80">
                        No 23, Akinyemi Street, Oluyole Estate, Ibadan, Oyo State
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-5">
                  <motion.div variants={staggerItem} className="bg-white/10 p-5">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#CDFF00] to-[#B8E600]">
                        <FaWhatsapp className="h-4 w-4 text-[#0F2419]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CDFF00]">WhatsApp</p>
                        <p className="mt-1 text-sm text-white/80">+234 903 746 8616</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={staggerItem} className="bg-white/10 p-5">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#CDFF00] to-[#B8E600]">
                        <FiPhone className="h-4 w-4 text-[#0F2419]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CDFF00]">Message</p>
                        <p className="mt-1 text-sm text-white/80">08108529124</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div variants={staggerItem} className="bg-white/10 p-5">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#CDFF00] to-[#B8E600]">
                      <FiMail className="h-4 w-4 text-[#0F2419]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CDFF00]">
                        Email
                      </p>
                      <p className="mt-1 text-sm text-white/80">
                        Dzmultipurposes@gmail.com
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.a
                variants={staggerItem}
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
