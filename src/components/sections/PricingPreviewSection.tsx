"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

type PricingTier = {
  name: "Starter" | "Standard" | "Premium";
  packageName: string;
  price: string;
  summary: string;
  highlights: string[];
};

type ServicePricing = {
  name: string;
  tiers: PricingTier[];
};

const services: ServicePricing[] = [
  {
    name: "Website Design and Setup",
    tiers: [
      {
        name: "Starter",
        packageName: "One Page / Landing Website",
        price: "₦90,000 – ₦130,000",
        summary: "Single page or basic multi section site.",
        highlights: [
          "For campaigns, events, or personal brands",
          "Responsive layout",
          "Contact section",
        ],
      },
      {
        name: "Standard",
        packageName: "Standard Business Website (3–5 pages)",
        price: "₦180,000 – ₦280,000",
        summary: "Multi page site with service focused structure.",
        highlights: [
          "Home, About, Services, Contact, basic gallery or blog",
          "Mobile responsive",
          "Clear service structure",
        ],
      },
      {
        name: "Premium",
        packageName: "Premium Business / Corporate Website (6–10+ pages)",
        price: "From ₦300,000",
        summary: "Full business site with premium polish.",
        highlights: [
          "Extra service pages, team, case studies, advanced layouts",
          "SEO ready structure",
          "Custom polished design",
        ],
      },
    ],
  },
  {
    name: "Business and Corporate Branding",
    tiers: [
      {
        name: "Starter",
        packageName: "Brand Starter Pack – for micro and small businesses",
        price: "₦50,200 – ₦80,000",
        summary: "Logo and basic brand touchpoints.",
        highlights: [
          "Simple logo (1 main + 5 variations)",
          "Basic brand colors & fonts guide",
          "One–two page company profile",
        ],
      },
      {
        name: "Standard",
        packageName: "Full Business Branding (Top–to–Bottom) – for serious SMEs",
        price: "₦150,000 – ₦250,000",
        summary: "Expanded identity and collateral set.",
        highlights: [
          "Logo suite (primary logo, icon, monochrome + 4 variations)",
          "Full company profile (up to 30 pages)",
          "Product or service catalogue design (where applicable)",
        ],
      },
      {
        name: "Premium",
        packageName: "Corporate Rebranding Pack – for established companies",
        price: "From ₦300,000 (custom)",
        summary: "Full brand suite for corporate presence.",
        highlights: [
          "Brand audit and review of existing identity and materials",
          "New brand identity (updated logo system, colors, typography, and visual direction)",
          "Rollout materials and launch graphics",
        ],
      },
    ],
  },
  {
    name: "Social Media Management and Setup",
    tiers: [
      {
        name: "Starter",
        packageName: "Social Setup Only (All Platforms) – one time",
        price: "₦40,000 – ₦60,000",
        summary: "Profile setup and visual alignment.",
        highlights: [
          "Setup or clean up of IG, FB, TikTok, LinkedIn, X, and YT branding",
          "Bios, profile optimization, highlight covers, banners, cover graphics",
          "Basic content plan",
        ],
      },
      {
        name: "Standard",
        packageName: "Monthly Social Media Lite – for small local businesses",
        price: "₦70,000 – ₦100,000 per month",
        summary: "Monthly management for growth.",
        highlights: [
          "Up to 10 posts per month across 1–2 platforms",
          "Graphics + captions",
          "Basic DM/comment monitoring",
        ],
      },
      {
        name: "Premium",
        packageName: "YouTube Channel Operations (Basic)",
        price: "₦100,000 – ₦150,000 per month",
        summary: "Full social presence management.",
        highlights: [
          "Upload management, descriptions, tags",
          "8–12 thumbnails per month",
          "Basic title & SEO optimization",
        ],
      },
    ],
  },
  {
    name: "Bulk Graphics Design",
    tiers: [
      {
        name: "Starter",
        packageName: "Single Design (banner, poster, flyer, invite, etc.)",
        price: "₦8,000 – ₦15,000 per design",
        summary: "Small batch graphics.",
        highlights: ["For basic corporate or event graphics"],
      },
      {
        name: "Standard",
        packageName: "Event Pack (wedding, conference, church program, political event)",
        price: "₦40,000 – ₦70,000 (4–7 designs)",
        summary: "Seasonal or campaign bundle.",
        highlights: [
          "Main banner, social media flyers, countdown posts, program cover, and more",
        ],
      },
      {
        name: "Premium",
        packageName: "Corporate Seasonal Pack (New Year / festive greetings)",
        price: "₦60,000 – ₦100,000 per season",
        summary: "Large scale graphic system.",
        highlights: ["Branded New Year or festive creatives for email, WhatsApp, socials, and print"],
      },
    ],
  },
  {
    name: "AI Automation Setup",
    tiers: [
      {
        name: "Starter",
        packageName: "AI Strategy & Discovery Session",
        price: "₦60,000 – ₦80,000",
        summary: "Single workflow automation.",
        highlights: [
          "1–2 sessions to map AI into customer support, marketing, or operations",
          "Simple roadmap document",
        ],
      },
      {
        name: "Standard",
        packageName: "Basic AI Automation Setup",
        price: "₦150,000 – ₦220,000",
        summary: "Multi task workflow improvements.",
        highlights: [
          "One main workflow (WhatsApp lead capture → auto replies → Google Sheet)",
          "Simple documentation for the client",
        ],
      },
      {
        name: "Premium",
        packageName: "Advanced AI Automation System",
        price: "From ₦250,000 – ₦400,000",
        summary: "End to end automation plan.",
        highlights: ["Multiple workflows and tools", "For more mature businesses ready to invest"],
      },
    ],
  },
];

export default function PricingPreviewSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedService, setSelectedService] = useState(services[0].name);

  const currentService = useMemo(
    () => services.find((service) => service.name === selectedService) ?? services[0],
    [selectedService]
  );

  return (
    <section ref={sectionRef} id="pricing" className="relative overflow-hidden bg-off-white py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(205,255,0,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(15,36,25,0.06),transparent_34%)]" />
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end"
        >
          <div>
            {/* <motion.p variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-dark-green/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-dark-green shadow-[0_12px_30px_rgba(17,17,17,0.04)]">
              <Sparkles size={12} />
              Interactive Pricing Preview
            </motion.p> */}
            <motion.h2 variants={fadeUp} className="mt-6 max-w-2xl text-3xl font-bold tracking-[-0.03em] text-text-primary md:text-5xl">
              Interactive pricing preview.
            </motion.h2>

            <motion.div variants={staggerContainer} className="mt-8 flex flex-wrap gap-3">
              {services.map((service) => {
                const isActive = service.name === selectedService;
                return (
                  <motion.button
                    key={service.name}
                    type="button"
                    onClick={() => setSelectedService(service.name)}
                    variants={staggerItem}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition duration-300 ${
                      isActive
                        ? "bg-dark-green text-white shadow-[0_16px_36px_rgba(15,36,25,0.18)]"
                        : "border border-black/10 bg-white text-text-secondary hover:border-dark-green/20"
                    }`}
                  >
                    {service.name}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {currentService.tiers.map((tier, index) => (
            <motion.div
              key={`${currentService.name}-${tier.name}`}
              variants={staggerItem}
              className={`group flex h-full flex-col border p-6 shadow-[0_16px_36px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-1 ${
                index === 0
                  ? "border-dark-green/10 bg-[#FCFBF7]"
                  : index === 1
                    ? "border-dark-green/10 bg-white"
                    : "border-dark-green/10 bg-[#F7F8F5]"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="bg-neon-green/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-dark-green">
                  {tier.name}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-light">
                  Package
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-tight text-text-primary">
                {tier.packageName}
              </h3>

              <p className="mt-4 text-sm leading-7 text-text-secondary">
                {tier.summary}
              </p>

              <p className="mt-5 text-2xl font-bold tracking-[-0.03em] text-dark-green">
                {tier.price}
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-text-secondary">
                {tier.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-dark-green" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href="#contact"
                  className={`inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    index === 0
                      ? "bg-dark-green text-white hover:bg-[#0a1a11]"
                      : "border border-dark-green/10 bg-white text-dark-green hover:border-dark-green/20 hover:bg-neon-green/10"
                  }`}
                >
                  Request a Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 border border-dark-green/10 bg-white px-6 py-5 shadow-[0_16px_36px_rgba(17,17,17,0.04)] md:px-8 md:py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-text-primary">
                Need a tailored scope?
              </p>
              <p className="mt-1 text-sm leading-7 text-text-secondary">
                We can refine any package to match the exact size and goals of your business.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-neon-green px-5 py-3 text-sm font-semibold text-dark-green transition-all hover:bg-mint-green"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
