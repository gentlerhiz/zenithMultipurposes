"use client";

import { useEffect, useRef } from "react";
import { Globe, BarChart2, Award, Palette, Bot, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import { fadeUp, fadeLeft, staggerContainer, staggerItem } from "@/lib/motion";

const services = [
  {
    title: "Website Design And App Development",
    description:
      "We build clean, professional websites that make your business easy to find, trust, and contact.",
    cta: "View Details",
    href: "/services/website-design",
    Icon: Globe,
  },
  {
    title: "Corporate Branding",
    description:
      "Full branding and rebranding solutions including company profiles, catalogues, brand identity, and everything your business needs to command respect and recognition.",
    cta: "View Details",
    href: "/services/branding",
    Icon: Award,
  },
  {
    title: "Social Media Setup & Management",
    description:
      "We set up, brand, and manage your social platforms so your business shows up consistently and professionally online.",
    cta: "View Details",
    href: "/services/social-media",
    Icon: BarChart2,
  },
  {
    title: "Bulk Graphics Design (Printable & Non-Printable)",
    description:
      "From banners, posters, and print-ready materials to digital graphics, flyers, and corporate visuals — we produce in volume without compromising quality.",
    cta: "View Details",
    href: "/services/bulk-graphics",
    Icon: Palette,
  },
  {
    title: "AI Automation for Corporations",
    description:
      "We integrate smart automation systems into your business operations — cutting manual work, speeding up communication, and improving efficiency at scale.",
    cta: "View Details",
    href: "/services/ai-automation",
    Icon: Bot,
  },
];

const loopedServices = [...services, ...services];

export default function ServicesSection() {
  const ref = useRef(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const autoScrollTimer = useRef<number | null>(null);

  const getScrollStep = () => {
    const rail = railRef.current;
    if (!rail) return 0;

    const cards = rail.querySelectorAll<HTMLElement>("[data-service-card]");
    if (cards.length > 1) {
      return cards[1].offsetLeft - cards[0].offsetLeft;
    }

    return cards[0]?.offsetWidth ?? rail.clientWidth * 0.6;
  };

  const scrollRail = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) return;

    const loopWidth = rail.scrollWidth / 2;
    const amount = getScrollStep();
    rail.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });

    window.setTimeout(() => {
      if (rail.scrollLeft >= loopWidth) {
        rail.scrollLeft -= loopWidth;
      } else if (rail.scrollLeft < 0) {
        rail.scrollLeft += loopWidth;
      }
    }, 320);
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || !inView) return;

    autoScrollTimer.current = window.setInterval(() => {
      const loopWidth = rail.scrollWidth / 2;

      const step = getScrollStep();

      rail.scrollBy({
        left: step,
        behavior: "smooth",
      });

      window.setTimeout(() => {
        if (rail.scrollLeft >= loopWidth) {
          rail.scrollLeft -= loopWidth;
        }
      }, 320);
    }, 4200);

    return () => {
      if (autoScrollTimer.current !== null) {
        window.clearInterval(autoScrollTimer.current);
        autoScrollTimer.current = null;
      }
    };
  }, [inView]);

  return (
    <section id="services" ref={ref} className="bg-[#ffffff] py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start"
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">
              Everything you need to show up strong
            </h2>
          </motion.div>

          <motion.div variants={fadeLeft} className="flex items-center gap-4 self-start">
            <button
              type="button"
              onClick={() => scrollRail("left")}
              aria-label="Scroll services left"
              className="flex h-14 w-14 items-center justify-center bg-dark-green text-neon-green transition-transform duration-300 hover:scale-105 md:h-16 md:w-16"
            >
              <ArrowRight className="h-5 w-5 rotate-180 md:h-6 md:w-6" />
            </button>
            <button
              type="button"
              onClick={() => scrollRail("right")}
              aria-label="Scroll services right"
              className="flex h-14 w-14 items-center justify-center bg-neon-green text-dark-green shadow-[0_14px_36px_rgba(17,17,17,0.06)] transition-transform duration-300 hover:scale-105 md:h-16 md:w-16"
            >
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={railRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-0 [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-thumb]:bg-transparent [&::-webkit-scrollbar-track]:bg-transparent"
        >
          {loopedServices.map((service, index) => {
            const serviceIndex = index % services.length;

            return (
            <motion.div
              key={`${service.title}-${index}`}
              variants={staggerItem}
              data-service-card
              className={`group flex min-h-80 w-70 shrink-0 snap-start flex-col border border-black/5 p-6 shadow-[0_18px_40px_rgba(17,17,17,0.04)] transition-all duration-300 md:w-77.5 ${
                serviceIndex === 0
                  ? "bg-[#F6F2D9]"
                  : serviceIndex === 1
                    ? "bg-[#EDF5E9]"
                    : serviceIndex === 2
                      ? "bg-[#F4EEF6]"
                      : serviceIndex === 3
                        ? "bg-[#EEF2F7]"
                        : "bg-[#F5F0EA]"
              }`}
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center shadow-[0_10px_24px_rgba(17,17,17,0.04)] md:h-14 md:w-14 ${
                serviceIndex === 0
                  ? "bg-neon-green/20"
                  : serviceIndex === 1
                    ? "bg-dark-green/12"
                    : serviceIndex === 2
                      ? "bg-neon-green/14"
                      : serviceIndex === 3
                        ? "bg-dark-green/10"
                        : "bg-neon-green/12"
              }`}>
                <service.Icon
                  size={22}
                  strokeWidth={1.8}
                  className={
                    serviceIndex === 0
                      ? "text-[#8A6E00]"
                      : serviceIndex === 1
                        ? "text-[#50753F]"
                        : serviceIndex === 2
                          ? "text-[#7A4E73]"
                          : serviceIndex === 3
                            ? "text-[#4F6C91]"
                            : "text-[#8B6A4D]"
                  }
                />
              </div>

              <h3 className="mt-8 max-w-55 text-[22px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B0B0B] md:text-[24px]">
                {service.title}
              </h3>

              <p className="mt-6 max-w-55 text-sm leading-6 text-[#1F1F1F]">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-medium tracking-[-0.01em] text-[#111111] transition-transform duration-200 hover:gap-3"
              >
                {service.cta}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
