"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const testimonials = [
  {
    quote: "Professional service and excellent delivery from start to finish.",
    name: "Business Client",
    role: "Branding project",
    accent: "from-[#CDFF00] to-[#B8E600]",
    borderColor: "#CDFF00",
  },
  {
    quote:
      "Our brand looked more organized and credible after working with Zenith Multipurposes.",
    name: "Startup Founder",
    role: "Brand identity",
    accent: "from-[#0F2419] to-[#1A3A2E]",
    borderColor: "#0F2419",
  },
  {
    quote: "The design quality and communication were very impressive.",
    name: "Event Organizer",
    role: "Campaign graphics",
    accent: "from-[#CDFF00] to-[#B8E600]",
    borderColor: "#CDFF00",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-white via-[#FAFAFA] to-white py-16 md:py-20">
      {/* Decorative accent */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 bg-[#CDFF00]/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 bg-[#0F2419]/8 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]"
          >
            Testimonials
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl"
          >
            <span className="bg-[#0F2419] bg-clip-text text-transparent">Trusted by businesses</span> that care about quality.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.quote}
              variants={staggerItem}
              className="group relative border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                borderLeft: `4px solid ${item.borderColor}`,
              }}
            >
              {/* Colored accent top bar */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />
              
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#CDFF00] text-[#CDFF00]"
                  />
                ))}
              </div>

              <p className="text-sm leading-7 text-[#1A1A1A]">&quot;{item.quote}&quot;</p>
              <div className="mt-6 border-t border-black/8 pt-4">
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  {item.name}
                </p>
                <p className="mt-1 inline-block bg-gradient-to-r from-[#0F2419] to-[#CDFF00] bg-clip-text text-xs font-semibold uppercase tracking-[0.2em] text-transparent">
                  {item.role}
                </p>
              </div>

              {/* Hover indicator */}
              <div className={`absolute -right-1 -top-1 h-3 w-3 bg-gradient-to-br ${item.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
