"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from "@/lib/motion";

const slides = [
  "/portfolio/IBRAHIM01.jpg",
  "/portfolio/Fries by Koks 1.jpg",
  "/portfolio/STRATEGY PLAN 1.jpg",
  "/portfolio/Randshelp Banner Design.jpg",
  "/portfolio/COLOUR.jpg",
  "/portfolio/TBSPINE.jpg",
  "/portfolio/welcome to february.jpg",
];

const slideEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const bullets = [
  { accent: "Work", rest: " with the Professionals" },
  { accent: "Be", rest: " Branded" },
  { accent: null, rest: "Ignite your Digital Presence" },
  { accent: "Start ", rest: "upscaling your business." },
];

export default function ShowcaseSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % slides.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
    resetTimer();
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
    resetTimer();
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: slideEase } },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.35, ease: slideEase } }),
  };

  return (
    <section id="showcase" ref={sectionRef} className="bg-[#f6f5f1] py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-10 rounded-[28px] border border-black/8 bg-white p-8 shadow-[0_18px_45px_rgba(17,17,17,0.07)] md:grid-cols-[1.1fr_0.9fr] md:p-12"
        >
          {/* Left — text + bullets */}
          <motion.div variants={fadeLeft}>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#1f3f16]">
              LET US SHOW YOU WHAT LASTS
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#141414] md:text-4xl">
              Make every detail feel intentional.
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="mt-6 grid gap-3 text-sm font-semibold text-[#141414]"
            >
              {bullets.map((item, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="rounded-2xl border border-black/8 bg-[#f6f5f1] px-5 py-4"
                >
                  {item.accent && (
                    <span className="text-[#1f3f16]">{item.accent}</span>
                  )}
                  {item.rest}
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="#services"
              className="mt-8 inline-flex rounded-full bg-[#1f3f16] px-7 py-3 text-xs font-bold uppercase tracking-[0.3em] text-white transition hover:bg-[#142c10]"
            >
              Learn More about Us
            </motion.a>
          </motion.div>

          {/* Right — image slider with Framer Motion transitions */}
          <motion.div variants={fadeRight} className="relative w-full overflow-hidden rounded-[24px]" style={{ aspectRatio: "1 / 1" }}>
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
                  src={slides[current]}
                  alt="Portfolio work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={current === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); resetTimer(); }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-5 bg-[#fbbf24]" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
