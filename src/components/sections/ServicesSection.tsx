"use client";

import { Globe, BarChart2, Award, Palette, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, fadeLeft, staggerContainer, staggerItem } from "@/lib/motion";

const services = [
  {
    title: "Website Building & Deployment",
    description:
      "A sleek, responsive website that delivers credibility, clarity, and a great first impression.",
    cta: "Learn More",
    href: "#contact",
    Icon: Globe,
  },
  {
    title: "Social Media Management",
    description:
      "Consistent, engaging content that grows your audience and keeps your brand top of mind.",
    cta: "Learn More",
    href: "#contact",
    Icon: BarChart2,
  },
  {
    title: "Branding",
    description:
      "A distinct identity that speaks to your audience and sets you apart from the competition.",
    cta: "Learn More",
    href: "#contact",
    Icon: Award,
  },
  {
    title: "Graphics Designing",
    description:
      "Professional graphics that elevate your marketing, campaigns, and overall visual presence.",
    cta: "Learn More",
    href: "#contact",
    Icon: Palette,
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="bg-[#f6f5f1] py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.35em] text-[#1f3f16]">
              Our Services
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold text-[#141414] md:text-4xl">
              Everything you need to show up strong
            </motion.h2>
          </div>
          <motion.p variants={fadeLeft} className="max-w-sm text-sm leading-7 text-[#888]">
            Practical, visual, and strategic services that keep your business
            visible and trusted.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="group flex flex-col rounded-2xl border border-black/[0.07] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon */}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f4ee]">
                <service.Icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-[#1f3f16]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-sm font-bold leading-snug text-[#141414]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-6 text-[#888]">
                {service.description}
              </p>

              {/* CTA */}
              <a
                href={service.href}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1f3f16] transition-all duration-200 hover:gap-2.5"
              >
                {service.cta}
                <ArrowRight size={12} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
