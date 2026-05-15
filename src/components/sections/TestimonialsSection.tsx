"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const testimonials = [
  {
    quote: "Professional service and excellent delivery from start to finish.",
    name: "Shopify",
    role: "CEO",
    accent: "from-[#CDFF00] to-[#B8E600]",
    borderColor: "#CDFF00",
  },
  {
    quote: "Our brand looked more organized and credible after working with Zenith Multipurposes.",
    name: "Touch of Beauty",
    role: "CEO",
    accent: "from-[#0F2419] to-[#1A3A2E]",
    borderColor: "#0F2419",
  },
  {
    quote: "The design quality and communication were very impressive.",
    name: "Kanat Global",
    role: "CEO",
    accent: "from-[#CDFF00] to-[#B8E600]",
    borderColor: "#CDFF00",
  },
  {
    quote: "Zenith transformed our online presence and brand identity with precision and care.",
    name: "Sourface Limited",
    role: "CEO",
    accent: "from-[#0F2419] to-[#1A3A2E]",
    borderColor: "#0F2419",
  },
  {
    quote: "Exceptional work that exceeded our expectations at every step.",
    name: "Agilet",
    role: "CEO",
    accent: "from-[#CDFF00] to-[#B8E600]",
    borderColor: "#CDFF00",
  },
  {
    quote: "Swift, professional, and delivered results that matter for our business.",
    name: "Swift Panda",
    role: "CEO",
    accent: "from-[#0F2419] to-[#1A3A2E]",
    borderColor: "#0F2419",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const autoScrollTimer = useRef<number | null>(null);
  const [current, setCurrent] = useState(0);

  const scrollToCard = (index: number) => {
    const rail = railRef.current;
    if (!rail) return;

    const cards = rail.querySelectorAll<HTMLElement>("[data-testimonial-card]");
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const gap = 24; // gap-6 = 24px
    rail.scrollBy({
      left: (cardWidth + gap) * index - rail.scrollLeft,
      behavior: "smooth",
    });
    setCurrent(index);
  };

  const getScrollStep = () => {
    const rail = railRef.current;
    if (!rail) return 0;

    const cards = rail.querySelectorAll<HTMLElement>("[data-testimonial-card]");
    if (cards.length > 0) {
      return cards[0].offsetWidth + 24; // card width + gap
    }
    return rail.clientWidth * 0.7;
  };

  const scrollRail = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) return;

    const amount = getScrollStep();
    rail.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || !inView) return;

    autoScrollTimer.current = window.setInterval(() => {
      const step = getScrollStep();
      rail.scrollBy({
        left: step,
        behavior: "smooth",
      });

      // Update current index
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (autoScrollTimer.current !== null) {
        window.clearInterval(autoScrollTimer.current);
        autoScrollTimer.current = null;
      }
    };
  }, [inView]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-linear-to-br from-white via-off-white to-white py-16 md:py-20">
      {/* Decorative accent */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 bg-neon-green/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 bg-dark-green/8 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-10 flex items-end justify-between gap-6"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green"
            >
              Testimonials
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl font-bold text-text-primary md:text-4xl"
            >
              <span className="bg-dark-green bg-clip-text text-transparent">Trusted by businesses</span> that care about quality.
            </motion.h2>
          </div>

          {/* Navigation buttons */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 self-start">
            <button
              type="button"
              onClick={() => scrollRail("left")}
              aria-label="Scroll testimonials left"
              className="flex h-12 w-12 items-center justify-center bg-dark-green text-neon-green transition-transform duration-300 hover:scale-105"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollRail("right")}
              aria-label="Scroll testimonials right"
              className="flex h-12 w-12 items-center justify-center bg-neon-green text-dark-green shadow-[0_14px_36px_rgba(17,17,17,0.06)] transition-transform duration-300 hover:scale-105"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          ref={railRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-0 [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-thumb]:bg-transparent [&::-webkit-scrollbar-track]:bg-transparent"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              data-testimonial-card
              className="group relative min-h-fit w-80 shrink-0 snap-start border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                borderLeft: `4px solid ${item.borderColor}`,
              }}
            >
              {/* Colored accent top bar */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${item.accent}`} />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-neon-green text-neon-green"
                  />
                ))}
              </div>

              <p className="text-sm leading-7 text-text-primary">&quot;{item.quote}&quot;</p>
              <div className="mt-6 border-t border-black/8 pt-4">
                <p className="text-sm font-semibold text-text-primary">
                  {item.name}
                </p>
                <p className="mt-1 inline-block bg-linear-to-r from-dark-green to-neon-green bg-clip-text text-xs font-semibold uppercase tracking-[0.2em] text-transparent">
                  {item.role}
                </p>
              </div>

              {/* Hover indicator */}
              <div className={`absolute -right-1 -top-1 h-3 w-3 bg-linear-to-br ${item.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2 transition-all duration-300 ${
                index === current ? "w-6 bg-dark-green" : "w-2 bg-black/20"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
