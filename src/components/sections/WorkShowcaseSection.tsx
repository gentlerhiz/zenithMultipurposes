"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const buildImages = (folder: string, files: string[]) => files.map((file) => encodeURI(`/${folder}/${file}`));

const defaultShowcaseCards = [
  {
    // title: "Branding",
    // description: "Identity-led visuals pulled from our branding and product design work.",
    images: buildImages("Homepage Images", ["1.jpg", "2.jpg", "3.jpg", "4.jpeg"]),
  },
  {
    // title: "Social Media Management",
    // description: "Campaign visuals and content graphics from social-first client work.",
    images: buildImages("Homepage Images", ["7.jpeg", "8.jpeg", "9.jpeg"]),
  },
  {
    // title: "Logo",
    // description: "A focused look at logo directions and mark development explorations.",
    images: buildImages("Homepage Images", ["10.jpeg", "11.jpeg", "5.jpeg", "13.jpeg"]),
  },
];

const slideEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: slideEase } },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.3, ease: slideEase } }),
  };

  return (
    <div className="relative aspect-square w-full overflow-hidden">
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
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
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
            className={`h-1.5 transition-all duration-300 ${
              i === current ? "w-5 bg-neon-green" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function WorkShowcaseSection({
  showcaseCards,
}: {
  showcaseCards?: Array<{ images: string[]; title?: string; description?: string }>;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cardsToRender = showcaseCards && showcaseCards.length > 0 ? showcaseCards : defaultShowcaseCards;

  return (
    <section id="gallery" ref={ref} className="bg-off-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-10 text-center"
        >
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">
            Past Works
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">
            A look at the work we deliver.
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#6B7280]">
            Take a closer look at some of the projects and designs we&apos;ve produced for our clients — from full brand identities to standout visuals.
          </motion.p>
        </motion.div>

        {/* 3 square sliders */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-5 sm:grid-cols-3"
        >
          {cardsToRender.map((card, i) => (
            <motion.div key={i} variants={staggerItem} className="flex flex-col gap-4">
              <Slider images={card.images} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
