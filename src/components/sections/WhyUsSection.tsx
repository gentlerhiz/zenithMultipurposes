"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const values = [
  {
    title: "Professional and modern business solutions",
    description:
      "We deliver clean, current design and digital systems that help you compete with confidence.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  {
    title: "Services tailored to different business needs",
    description:
      "Choose the right mix of branding, web, social, graphics, and automation support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Strong attention to quality and brand consistency",
    description:
      "We keep every asset aligned so your business looks organized and credible.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Support for both digital and print communication needs",
    description:
      "Web, social, and print ready graphics are handled with the same care.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v8H6z" />
      </svg>
    ),
  },
  {
    title: "Practical solutions designed for growth and efficiency",
    description:
      "We focus on what saves time, improves clarity, and helps you scale.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]">
            Why Choose Us
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
            Why businesses choose Zenith
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-7 text-[#6B7280]">
            We focus on practical results, consistent execution, and a strong
            brand presence across every touchpoint.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="bg-[#0F2419] p-6 text-white"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center bg-white/10 text-[#CDFF00]">
                  {v.icon}
                </div>
                <h3 className="text-base font-bold">{v.title}:</h3>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  {v.description}
                </p>
              </motion.div>
              ))}
            </motion.div>
          </motion.div>

      </div>
    </section>
  );
}
