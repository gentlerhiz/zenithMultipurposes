"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export default function AboutIntroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-off-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
        >
          <motion.div variants={fadeUp}>
            {/* <p className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">
              About Us
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.03em] text-text-primary md:text-4xl lg:text-5xl">
              Built to help businesses look sharper, work smarter, and grow with confidence.
            </h2> */}

            <div className="mt-6 space-y-4 text-base leading-8 text-text-secondary">
              <p>
                Active since 2020, we have spent over half a decade working with businesses across industries,
                helping them build stronger brands, sharper visuals, and smarter systems. What started as a
                focused creative service has grown into a full-service business support operation trusted by more
                than 30 companies and counting.
              </p>
              <p>
                Zenith Multipurposes operates as a division of Bornstellar Limited, which means every project we
                take on is backed by a broader organizational structure built for reliability, consistency, and
                results. We don&apos;t just deliver work — we deliver work that holds up, represents your business well,
                and drives real outcomes.
              </p>
              {/* <p>
                Whether you&apos;re a startup looking to establish your identity or an established company ready to
                rebrand and scale, we bring the creativity, strategy, and technical execution to make it happen.
              </p> */}
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="border border-black/10 bg-white p-8 shadow-[0_18px_40px_rgba(17,17,17,0.05)] lg:mt-6">
            {/* <p className="text-xs font-semibold uppercase tracking-[0.3em] text-dark-green">
              Why it matters
            </p> */}

            <div className="space-y-5 text-sm leading-7 text-text-secondary">
              <p>
                Whether you&apos;re a startup looking to establish your identity or an established 
                  company ready to rebrand and scale, we bring the creativity, strategy, and technical 
                  execution to make it happen.
              </p>
              {/* <p>
                We focus on clarity, consistency, and execution so your business can communicate professionally
                across every touchpoint.
              </p> */}
              <div className="border-l-2 border-neon-green pl-4">
                <p className="font-semibold uppercase text-text-primary">What we stand for</p>
                <p className="mt-1 text-[#6B7280]">
                  Clear strategy, consistent branding, and reliable execution. We build the assets and systems that help businesses look professional and grow with confidence.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
