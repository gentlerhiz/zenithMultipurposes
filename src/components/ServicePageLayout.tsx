"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ExternalLink, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, staggerContainer } from "../lib/motion";
import WorkShowcaseSection from "./sections/WorkShowcaseSection";
import ContactSection from "./sections/ContactSection";

interface ServicePageLayoutProps {
  iconGradient: string;
  badge: string;
  title: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;

  deliverables: Array<{ title: string; description: string }>;

  highlights?: Array<{ title: string; description: string }>;

  pricing: Array<{ name: string; price: string; items: string[] }>;
  addOns?: string[];

  showcaseTitle?: string;
  showcaseDescription?: string;
  showcaseCards?: Array<{ title: string; description: string; images: string[] }>;

  pastWorksTitle: string;
  pastWorksDescription: string;
  pastWorksLinks: Array<{ label: string; href: string; type: "external" | "email" }>;

  whatWeDo: string;
  whoThisIsFor: string[];
  whyItMatters: string;
  whyZenithMultipurposes: string;
}

export default function ServicePageLayout({
  iconGradient,
  badge,
  title,
  description,
  heroImage,
  heroImageAlt,
  deliverables,
  pricing,
  showcaseTitle,
  showcaseDescription,
  showcaseCards,
  pastWorksTitle,
  pastWorksDescription,
  pastWorksLinks,
  whatWeDo,
  whoThisIsFor,
  whyItMatters,
  whyZenithMultipurposes,
}: ServicePageLayoutProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neon-green/5 pb-16 pt-24 md:pt-28">
        <div className="absolute right-0 top-0 h-96 w-96 bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-white/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">{badge}</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6B7280]">{description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#pricing" className="inline-flex items-center gap-2 bg-neon-green px-6 py-3 text-sm font-semibold text-dark-green">
                  View Pricing
                </Link>
                <Link href="#past-works" className="inline-flex items-center gap-2 border-2 border-dark-green/20 bg-white/80 px-6 py-3 text-sm font-semibold text-dark-green">
                  View Past Works
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden border border-black/10 bg-white shadow-2xl">
                <Image src={heroImage} alt={heroImageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Past Works */}
      <section id="past-works" className="bg-white py-20">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-neon-green/10 px-4 py-2">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">Past Works</p>
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">{pastWorksTitle}</h2>
              <p className="mt-4 text-base leading-7 text-[#6B7280]">{pastWorksDescription}</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-lg md:p-6">
              <div className="space-y-3">
                {pastWorksLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.type === "external" ? "_blank" : undefined}
                    rel={link.type === "external" ? "noreferrer noopener" : undefined}
                    className={`group flex w-full items-center justify-between rounded-xl border px-5 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                      index === 0
                        ? "border-neon-green bg-neon-green text-dark-green"
                        : "border-black/10 bg-white text-text-primary hover:border-dark-green/20 hover:bg-off-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.type === "external" ? (
                      <ExternalLink className="h-4 w-4" />
                    ) : (
                      <Mail className="h-4 w-4" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* What We Do / Who This Is For */}
      <motion.section
        className="bg-dark-green py-20 text-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <motion.div variants={fadeLeft} className="py-10 md:py-12">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-neon-green/80">Service Overview</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">What We Do</h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-white/75">{whatWeDo}</p>
          </motion.div>

          <div className="border-t border-white/10" />

          <motion.div variants={fadeRight} className="py-10 md:py-12">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-neon-green/80">Ideal For</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Who This Is For</h2>
            <ul className="mt-6 list-disc space-y-4 pl-5">
              {whoThisIsFor.map((item) => (
                <li key={item} className="pl-2 text-base leading-relaxed text-white/75 marker:text-neon-green">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Deliverables */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <h2 className="text-3xl font-bold text-text-primary">What you get</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div key={item.title} className="group border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-dark-green/20 hover:shadow-lg">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center bg-neon-green/10 text-dark-green"><CheckCircle2 size={20} /></span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-6 text-text-primary">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-text-secondary">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-off-white py-20">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Transparent Pricing</h2>
            <p className="mt-3 text-base text-[#6B7280]">Choose the package that fits your business needs</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((tier, index) => (
              <div key={tier.name} className={`group relative flex flex-col overflow-hidden border ${index === 1 ? "border-dark-green bg-white shadow-2xl lg:-mt-4 lg:scale-105" : "border-black/10 bg-white shadow-lg"}`}>
                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-dark-green/70">{index === 0 ? "Starter" : index === 1 ? "Professional" : "Enterprise"}</p>
                  <h3 className="mt-3 text-lg font-bold text-text-primary">{tier.name}</h3>
                  <p className="mt-4 text-3xl font-bold text-dark-green">{tier.price}</p>
                  <ul className="mt-6 space-y-3">
                    {tier.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm text-text-secondary"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-dark-green" />{it}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold ${index === 1 ? "bg-neon-green text-dark-green" : "border-2 border-dark-green/20 text-dark-green"}`}>Get Started</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase (carousel) */}
      {showcaseCards && showcaseCards.length > 0 && (
        <WorkShowcaseSection showcaseCards={showcaseCards} />
      )}

      

      {/* Why It Matters */}
      <motion.section className="bg-linear-to-br from-dark-green via-[#1a3a28] to-dark-green py-20 text-white" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="grid gap-12">
            <motion.div variants={fadeRight}>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-neon-green">The Impact</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Why It Matters</h2>
              <p className="mt-6 text-base leading-7 text-white/80">{whyItMatters}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Zenith */}
      <motion.section className="bg-off-white py-16" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="grid gap-12">
            <motion.div variants={fadeLeft}>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">Our Advantage</p>
              <h2 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">Why Zenith Multipurposes</h2>
              <p className="mt-6 text-base leading-7 text-text-secondary">{whyZenithMultipurposes}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      
      <motion.section >
        <ContactSection />
      </motion.section>
    </main>
  );
}
