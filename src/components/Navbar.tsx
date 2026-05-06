"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#showcase" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Social Media Management", href: "#services" },
  { label: "Graphics Design", href: "#services" },
  { label: "Branding & Rebranding", href: "#services" },
  { label: "Website Building", href: "#services" },
];

const navEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!servicesOpen) return;
    const close = () => setServicesOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [servicesOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: navEase }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logogreen.jpeg"
              alt="Zenith Multipurposes"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-contain"
              priority
            />
            <span className={`text-sm font-semibold tracking-tight transition-colors duration-300 ${scrolled ? "text-[#141414]" : "text-white"}`}>
              Zenith <span className={scrolled ? "text-[#1f3f16]" : "text-[#fbbf24]"}>Multipurposes</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-[#444] hover:bg-black/5 hover:text-[#141414]"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Services dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setServicesOpen((o) => !o)}
                className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-[#444] hover:bg-black/5 hover:text-[#141414]"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
                  >
                    <div className="p-1.5">
                      {services.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-xl px-4 py-2.5 text-[13px] font-medium text-[#444] transition hover:bg-[#f6f5f1] hover:text-[#1f3f16]"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className={`hidden rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-200 md:inline-flex ${
              scrolled
                ? "bg-[#1f3f16] text-white hover:bg-[#142c10]"
                : "bg-white text-[#1f3f16] hover:bg-white/90"
            }`}
          >
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition md:hidden ${
              scrolled ? "text-[#141414]" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: navEase }}
              className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-white shadow-2xl md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-black/[0.06] px-6 py-5">
                <span className="text-sm font-semibold text-[#141414]">
                  Zenith <span className="text-[#1f3f16]">Multipurposes</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-[#888] hover:bg-black/5"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer links */}
              <div className="flex flex-col gap-0.5 overflow-y-auto p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-[15px] font-medium text-[#444] transition hover:bg-[#f6f5f1] hover:text-[#1f3f16]"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="my-2 h-px bg-black/[0.06]" />

                <p className="px-4 pb-1 pt-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#aaa]">
                  Services
                </p>
                {services.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-[15px] font-medium text-[#444] transition hover:bg-[#f6f5f1] hover:text-[#1f3f16]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>

              {/* Drawer CTA */}
              <div className="border-t border-black/[0.06] p-4">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-full bg-[#1f3f16] py-3.5 text-center text-[13px] font-semibold text-white transition hover:bg-[#142c10]"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
