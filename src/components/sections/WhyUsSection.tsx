"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from "@/lib/motion";

const values = [
  {
    title: "Client-Centric",
    description:
      "Your success is our priority. We maintain open communication, transparent processes and a commitment to exceeding your expectations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Customized Solutions",
    description:
      "We understand that every business is unique. Our services are tailored to meet your specific needs and goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Proven Expertise",
    description:
      "With over a decade of experience, our team brings deep knowledge across branding, design, and digital strategy.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: "Results-Driven",
    description:
      "We don't just deliver work — we deliver outcomes. Every project is measured against real business impact.",
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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left — image collage */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative overflow-hidden rounded-[20px]" style={{ aspectRatio: "3/4" }}>
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[20px]" style={{ aspectRatio: "1/1" }}>
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                  alt="Strategy session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative overflow-hidden rounded-[20px]" style={{ aspectRatio: "1/1" }}>
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                  alt="Creative work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Right — value cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.35em] text-[#1f3f16]">
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold text-[#141414] md:text-4xl">
              The Zenith difference
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-7 text-[#575757]">
              We&apos;re not just a service provider — we&apos;re a growth
              partner committed to your long-term success.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  variants={staggerItem}
                  className="rounded-[20px] bg-[#1f3f16] p-6 text-white"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#fbbf24]">
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
      </div>
    </section>
  );
}
