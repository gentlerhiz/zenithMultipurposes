"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const leaders = [
  {
    name: "Sijuade Henry Oluwatimilehin",
    title: "Founder and Chief Executive Officer",
    image: "/ceoimage.png",
    alt: "Sijuade Henry Oluwatimilehin",
    bio:
      "Sijuade Henry Oluwatimilehin is the Founder and Chief Executive Officer of Bornstellar Limited, the parent company behind Zenith Multipurposes. His vision is simple — build businesses that solve real problems and create lasting value. Zenith Multipurposes is a direct product of that vision, designed to give brands the creative support, strategy, and systems they need to grow with confidence.",
  },
  {
    name: "Daniel Sijuade",
    title: "Vice Chairman & Group Executive Director",
    image: "/Daniel_Sijuade.png",
    alt: "Daniel Sijuade",
    bio:
      "Daniel Sijuade brings over seven years of experience in content strategy and digital communications, with a track record of driving millions of views for local and international brands. At Zenith Multipurposes, he provides strategic oversight across our creative operations — making sure every project is built to perform, not just look good.",
  },
];

export default function AboutCEOSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-off-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">
            About Our CEO
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-[-0.03em] text-text-primary md:text-4xl">
            Leadership behind Zenith Multipurposes.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-10 grid gap-8 lg:grid-cols-2"
        >
          {leaders.map((leader) => (
            <motion.article
              key={leader.name}
              variants={staggerItem}
              className="border border-black/10 bg-white shadow-[0_18px_40px_rgba(17,17,17,0.05)]"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-[#F3F3F3]">
                <Image
                  src={leader.image}
                  alt={leader.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={leader.name === "Sijuade Henry Oluwatimilehin"}
                />
              </div>

              <div className="p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-dark-green">
                  {leader.title}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-text-primary">
                  {leader.name}
                </h3>
                <div className="mt-4 h-px w-16 bg-neon-green" />
                <p className="mt-4 text-base leading-8 text-text-secondary">
                  {leader.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
