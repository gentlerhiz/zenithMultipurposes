"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const columns = [
  // Column 1 — Branding & Identity
  [
    "/portfolio/IBRAHIM01.jpg",
    "/portfolio/IBRAHIM02.jpg",
    "/portfolio/IBRAHIM03.jpg",
    "/portfolio/1.jpg",
    "/portfolio/2.jpg",
    "/portfolio/3.jpg",
    "/portfolio/4.jpg",
    "/portfolio/COLOUR.jpg",
    "/portfolio/E.jpg",
    "/portfolio/N.jpg",
    "/portfolio/S.jpg",
    "/portfolio/SMPP.jpg",
  ],
  // Column 2 — Graphics & Design
  [
    "/portfolio/Fries by Koks.jpg",
    "/portfolio/Fries by Koks 1.jpg",
    "/portfolio/Fries by Koks 2.jpg",
    "/portfolio/Fries by Koks 3.jpg",
    "/portfolio/Fries by Koks 4.jpg",
    "/portfolio/Fries by Koks AI-03.jpg",
    "/portfolio/Fries by Koks2.jpg",
    "/portfolio/Fries by Koks3.jpg",
    "/portfolio/CHRISTMAS.jpg",
    "/portfolio/welcome to february.jpg",
    "/portfolio/welcome2.jpg",
    "/portfolio/From The Haves.jpg",
  ],
  // Column 3 — Social Media & Print
  [
    "/portfolio/STRATEGY PLAN.jpg",
    "/portfolio/STRATEGY PLAN 1.jpg",
    "/portfolio/Randshelp Banner Design.jpg",
    "/portfolio/Randshelp Banner Design 02.jpg",
    "/portfolio/TBSPINE.jpg",
    "/portfolio/Middle Info.jpg",
    "/portfolio/Mission&Vision.jpg",
    "/portfolio/Degree in Canada.jpg",
    "/portfolio/Ireland Famous Schools - Title Page.jpg",
    "/portfolio/Ireland Famous Schools - Page1.jpg",
    "/portfolio/Ireland Famous Schools - Page2.jpg",
    "/portfolio/Ireland Famous Schools - Page3.jpg",
    "/portfolio/Ireland Famous Schools - Page4.jpg",
  ],
];

function Slider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % images.length);
    }, 2500);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    resetTimer();
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % images.length);
    resetTimer();
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }),
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[20px]" style={{ aspectRatio: "1 / 1" }}>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt="Portfolio work"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); resetTimer(); }}
            aria-label={`Go to image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-5 bg-[#fbbf24]" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function WorkShowcaseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#f6f5f1] py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-10 text-center"
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.35em] text-[#1f3f16]">
            Our Work
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold text-[#141414] md:text-4xl">
            Results that speak for themselves
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#575757]">
            A glimpse into the brands we&apos;ve built, the graphics we&apos;ve
            crafted, and the digital presences we&apos;ve elevated.
          </motion.p>
        </motion.div>

        {/* 3 square sliders */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-5 sm:grid-cols-3"
        >
          {columns.map((images, i) => (
            <motion.div key={i} variants={staggerItem}>
              <Slider images={images} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
