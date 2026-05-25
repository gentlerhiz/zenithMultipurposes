"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const faqLink = { label: "FAQ", href: "/faq" };

const services = [
  { label: "Branding & Rebranding", href: "/services/branding" },
  { label: "Social Media Management", href: "/services/social-media" },
  { label: "Bulk Graphics Design", href: "/services/bulk-graphics" },
  { label: "AI Automation Setup", href: "/services/ai-automation" },
  { label: "Website Design And App Development", href: "/services/website-design" },
];

const navEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

type NavbarVariant = "transparent" | "solid";

type NavbarProps = {
  variant?: NavbarVariant;
};

export default function Navbar({ variant = "transparent" }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const solid = variant === "solid" || scrolled;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

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
          solid
            ? "bg-white/95 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logogreen.jpeg"
              alt="Zenith Multipurposes"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-contain"
              priority
            />
            <span className={`text-sm font-semibold tracking-tight transition-colors duration-300 ${solid ? "text-text-primary" : "text-white"}`}>
              Zenith <span className={solid ? "text-dark-green" : "text-neon-green"}>Multipurposes</span>
            </span>
          </Link>
           
          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 after:absolute after:bottom-1 after:left-3.5 after:h-px after:w-[calc(100%-1.75rem)] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100 ${
                  isActive(link.href)
                    ? solid
                      ? "text-text-primary font-semibold after:scale-x-100 after:bg-dark-green"
                      : "text-white font-semibold after:scale-x-100 after:bg-white"
                    : solid
                      ? "text-text-secondary after:bg-dark-green hover:text-text-primary"
                      : "text-white/85 after:bg-white hover:text-white"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setServicesOpen((o) => !o)}
                className={`relative flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 after:absolute after:bottom-1 after:left-3.5 after:h-px after:w-[calc(100%-1.75rem)] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100 ${
                  pathname.startsWith("/services")
                    ? solid
                      ? "text-text-primary font-semibold after:scale-x-100 after:bg-dark-green"
                      : "text-white font-semibold after:scale-x-100 after:bg-white"
                    : solid
                      ? "text-text-secondary after:bg-dark-green hover:text-text-primary"
                      : "text-white/85 after:bg-white hover:text-white"
                }`}
                aria-current={pathname.startsWith("/services") ? "page" : undefined}
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
                    className="absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 overflow-hidden border border-black/[0.07] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
                  >
                    <div className="p-1.5">
                      {services.map((s) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-xl px-4 py-2.5 text-[13px] font-medium text-text-secondary transition hover:bg-neon-green/10 hover:text-dark-green"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href={faqLink.href}
              className={`relative px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 after:absolute after:bottom-1 after:left-3.5 after:h-px after:w-[calc(100%-1.75rem)] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100 ${
                isActive(faqLink.href)
                  ? solid
                    ? "text-text-primary font-semibold after:scale-x-100 after:bg-dark-green"
                    : "text-white font-semibold after:scale-x-100 after:bg-white"
                  : solid
                    ? "text-text-secondary after:bg-dark-green hover:text-text-primary"
                    : "text-white/85 after:bg-white hover:text-white"
              }`}
              aria-current={isActive(faqLink.href) ? "page" : undefined}
            >
              {faqLink.label}
            </Link>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/get-a-quote"
            className={`hidden px-5 py-2.5 text-[13px] font-semibold transition-all duration-200 md:inline-flex ${
              solid
                ? "bg-neon-green text-dark-green hover:bg-[#B8E600]"
                : "bg-neon-green text-dark-green hover:bg-mint-green"
            }`}
          >
            Get a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition md:hidden ${
              solid ? "text-text-primary" : "text-white"
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
              <div className="flex items-center justify-between border-b border-black/6 px-6 py-5">
                <span className="text-sm font-semibold text-text-primary">
                  Zenith <span className="text-dark-green">Multipurposes</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-[#6B7280] hover:bg-black/5"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer links */}
              <div className="flex flex-col gap-0.5 overflow-y-auto p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-[15px] font-medium text-text-secondary transition hover:bg-neon-green/10 hover:text-dark-green"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="my-2 h-px bg-black/6" />

                <p className="px-4 pb-1 pt-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-medium-gray">
                  Services
                </p>
                {services.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                      isActive(s.href)
                        ? "bg-neon-green/10 font-semibold text-dark-green"
                        : "text-text-secondary hover:bg-neon-green/10 hover:text-dark-green"
                    }`}
                    aria-current={isActive(s.href) ? "page" : undefined}
                  >
                    {s.label}
                  </Link>
                ))}

                <Link
                  href={faqLink.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                    isActive(faqLink.href)
                      ? "bg-neon-green/10 font-semibold text-dark-green"
                      : "text-text-secondary hover:bg-neon-green/10 hover:text-dark-green"
                  }`}
                  aria-current={isActive(faqLink.href) ? "page" : undefined}
                >
                  {faqLink.label}
                </Link>
              </div>

              {/* Drawer CTA */}
              <div className="border-t border-black/6 p-4">
                <Link
                    href="/get-a-quote"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-full bg-neon-green py-3.5 text-center text-[13px] font-semibold text-dark-green transition hover:bg-[#B8E600]"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
