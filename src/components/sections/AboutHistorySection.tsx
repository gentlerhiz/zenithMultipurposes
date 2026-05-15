"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const historySteps = [
  {
    title: "Foundation",
    description:
      "Zenith Multipurposes was created to help businesses improve how they look and operate through creative and digital support.",
  },
  {
    title: "Expansion",
    description:
      "We expanded into branding, web, social media, and print solutions for growing SMEs and corporate teams.",
  },
  {
    title: "Today",
    description:
      "Now operating under Bornstellar Limited through Zenith Multiservices, we deliver end to end brand and business systems.",
  },
];

export default function AboutHistorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? "show" : "hidden"} className="grid gap-8 lg:grid-cols-3">
          <motion.div variants={fadeUp}>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]">
              History
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built from real business needs.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              Our growth has been shaped by helping organizations organize
              their brand assets, digital presence, and workflow processes.
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} className="lg:col-span-2 grid gap-4">
            {historySteps.map((step) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="border border-black/10 bg-[#FAFAFA] p-6"
              >
                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
