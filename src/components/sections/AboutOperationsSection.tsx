"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const operations = [
  {
    title: "Discovery",
    description:
      "We start with a focused conversation to understand your business, your goals, and who you're trying to reach.",
  },
  {
    title: "Planning",
    description:
      "We map out the right services, realistic timelines, and clear deliverables that fit your scope and budget — no guesswork, no surprises.",
  },
  {
    title: "Execution",
    description:
      "We get to work. Whether it's design, branding, social media, or automation, every deliverable goes through quality checks before it reaches you.",
  },
  {
    title: "Launch & Support",
    description:
      "We help you deploy the final results and make sure everything is set up to perform — with guidance to keep your brand consistent long after delivery.",
  },
];

export default function AboutOperationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.p variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">
          How We Operate
        </motion.p>
        <motion.h2 variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="mt-3 text-3xl font-bold md:text-4xl">
          A clear process from first conversation to final delivery.
        </motion.h2>

        <div className="mt-8">
          <motion.div variants={staggerContainer} initial="hidden" animate={inView ? "show" : "hidden"} className="grid gap-6 md:grid-cols-2">
            {operations.map((step, i) => (
              <motion.div key={step.title} variants={staggerItem} className="flex gap-6 border border-black/10 bg-off-white p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-dark-green font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" animate={inView ? "show" : "hidden"} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
            <a
              href="/services"
              className="inline-flex items-center justify-center bg-neon-green px-6 py-3 text-sm font-semibold text-dark-green transition-colors duration-200 hover:bg-[#bde800]"
            >
              Explore our services
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-dark-green transition-colors duration-200 hover:bg-[#F4F7F5]"
            >
              Get a quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
