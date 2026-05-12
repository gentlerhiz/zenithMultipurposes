import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Palette, Globe, Megaphone, Image as ImageIcon, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Zenith Multipurposes",
  description:
    "Explore branding, web design, social media, graphics, and AI automation services tailored for business growth.",
};

const serviceCards = [
  {
    title: "Branding and Rebranding",
    description:
      "Top to bottom company profile building, catalogue creation, brochures, and identity systems.",
    href: "/services/branding",
    worksHref: "/services/branding#past-works",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Social Media Management and Setup",
    description:
      "Professional setup and management across all social platforms, including YouTube.",
    href: "/services/social-media",
    worksHref: "/services/social-media#past-works",
    icon: Megaphone,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Bulk Graphics Design for Printing",
    description:
      "Banners, posters, event materials, wedding invites, and corporate graphics for print.",
    href: "/services/bulk-graphics",
    worksHref: "/services/bulk-graphics#past-works",
    icon: ImageIcon,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "AI Automation Setup / Design",
    description:
      "Workflow automation for businesses ready to integrate AI and improve operations.",
    href: "/services/ai-automation",
    worksHref: "/services/ai-automation#past-works",
    icon: Zap,
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Website Designing and Building",
    description:
      "Professional business websites, landing pages, and corporate site builds.",
    href: "/services/website-design",
    worksHref: "/services/website-design#past-works",
    icon: Globe,
    color: "from-green-500 to-emerald-500",
  },
];

const serviceGallery = [
  {
    src: "/portfolio/IBRAHIM01.jpg",
    alt: "Brand identity showcase",
  },
  {
    src: "/portfolio/Fries by Koks 1.jpg",
    alt: "Social media design sample",
  },
  {
    src: "/portfolio/Randshelp Banner Design.jpg",
    alt: "Corporate print banner",
  },
  {
    src: "/portfolio/STRATEGY PLAN 1.jpg",
    alt: "Business proposal layout",
  },
  {
    src: "/portfolio/COLOUR.jpg",
    alt: "Brand color system",
  },
  {
    src: "/portfolio/TBSPINE.jpg",
    alt: "Catalogue spine design",
  },
];

const serviceHighlights = [
  {
    title: "Done-for-you delivery",
    description: "Clear scopes, timelines, and asset handoff every step.",
  },
  {
    title: "Conversion ready assets",
    description: "Designs that build trust and make customers act.",
  },
  {
    title: "Systems that scale",
    description: "Automation and workflows that free your team to grow.",
  },
];

const whatWeDo = [
  "Branding and rebranding from top to bottom, including company profile building, catalogue creation, and brochures.",
  "Social media management and setup across all platforms, including YouTube.",
  "Bulk graphics design for printing such as banners, posters, corporate graphics, and event materials.",
  "AI automation setup and design for businesses integrating smart workflows.",
  "Website designing and building for credible online presence.",
];


const pastWorks = [
  {
    title: "Branding & Rebranding",
    description: "Logos, company profiles, catalogues, and identity systems.",
    href: "https://drive.google.com/drive/folders/1ODIGBS04PDPi3EkiOWmbgOria3ABtyJB?usp=sharing",
    linkLabel: "View branding works",
  },
  {
    title: "Social Media",
    description: "Profile branding, social media templates, and content packs.",
    href: "mailto:Dzmultipurposes@gmail.com?subject=Social%20Media%20Past%20Works%20Request",
    linkLabel: "Request social works",
  },
  {
    title: "Bulk Graphics",
    description: "Event packs, banners, posters, and print ready creatives.",
    href: "mailto:Dzmultipurposes@gmail.com?subject=Bulk%20Graphics%20Past%20Works%20Request",
    linkLabel: "Request graphics works",
  },
  {
    title: "Website Design",
    description: "Business websites, landing pages, and portfolio builds.",
    href: "mailto:Dzmultipurposes@gmail.com?subject=Website%20Past%20Works%20Request",
    linkLabel: "Request website works",
  },
  {
    title: "AI Automation",
    description: "Workflow automation examples and strategy samples.",
    href: "mailto:Dzmultipurposes@gmail.com?subject=AI%20Automation%20Past%20Works%20Request",
    linkLabel: "Request automation works",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAFA] text-[#1A1A1A]">
      <Navbar variant="solid" />
      <main>
        <section className="relative overflow-hidden bg-[#0F2419] pb-16 pt-24 text-white md:pt-28">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
            alt="Creative workspace background"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,36,25,0.95)_0%,rgba(26,58,46,0.85)_50%,rgba(15,36,25,0.98)_100%)]" />
          <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#CDFF00]">
                  Services
                </p>
                <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Professional support for branding, design, and automation.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
                  Each service has a dedicated page with details, pricing, and past
                  works so you can choose the right solution quickly.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
                  <Link
                    href="#service-list"
                    className="bg-[#CDFF00] px-5 py-2.5 text-[#0F2419] transition-all hover:bg-[#B8E600]"
                  >
                    View services
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-white/20 px-5 py-2.5 text-white transition-all hover:border-[#CDFF00] hover:bg-[#CDFF00]/10 hover:text-[#CDFF00]"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="relative aspect-4/3 overflow-hidden border border-white/10 bg-white/5">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
                    alt="Team reviewing service deliverables"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,31,11,0.1)_0%,rgba(14,31,11,0.42)_100%)]" />
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {serviceHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="border border-white/10 bg-white/5 p-4 text-white shadow-[0_18px_36px_rgba(17,17,17,0.08)]"
                    >
                      <p className="text-sm font-semibold text-[#CDFF00]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm text-white/65">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAFA] py-16">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]">
                  Service Gallery
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  A snapshot of the work we deliver.
                </h2>
                <p className="mt-4 text-base leading-7 text-[#575757]">
                  Branding systems, social media designs, print graphics, and
                  business documents that showcase our range.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {serviceGallery.map((item) => (
                  <div
                    key={item.src}
                    className="relative aspect-4/3 overflow-hidden border border-black/10 bg-[#0e1f0b]"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAFA] py-16">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]">
                  Intro
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Clear services built for growth and credibility.
                </h2>
                <p className="mt-4 text-base leading-7 text-[#575757]">
                  We help businesses build strong brand identities, consistent
                  communication assets, and smarter workflows. From design to
                  automation, everything is built to improve how your business
                  looks and operates.
                </p>
              </div>
              <div className="border border-black/10 bg-[#0e1f0b] p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0F2419]">
                  What we do
                </p>
                <ul className="mt-4 space-y-3 text-sm text-white/65">
                  {whatWeDo.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#CDFF00]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="service-list" className="bg-white py-20">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0F2419]/5 px-4 py-2">
                <Sparkles className="h-4 w-4 text-[#0F2419]" />
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]">
                  Our services
                </p>
              </div>
              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Five core services built for your growth.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#575757]">
                Select a service to see pricing, details, and past work samples
                from our portfolio.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group relative flex flex-col overflow-hidden border border-black/10 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Gradient accent bar */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`} />
                    
                    <div className="flex flex-1 flex-col p-6 lg:p-8">
                      {/* Icon */}
                      <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#0F2419]">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#575757]">
                          {service.description}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="mt-6 flex flex-col gap-3">
                        <Link
                          href={service.href}
                          className="group/btn flex items-center justify-between rounded-lg bg-[#0F2419] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0e1f0b]"
                        >
                          <span>View Details & Pricing</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Link>
                        <Link
                          href={service.worksHref}
                          className="flex items-center justify-center rounded-lg border border-[#0F2419]/20 bg-[#0F2419]/5 px-5 py-3 text-sm font-semibold text-[#0F2419] transition-all duration-300 hover:border-[#0F2419]/40 hover:bg-[#0F2419]/10"
                        >
                          View Past Works
                        </Link>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-2xl`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="past-works" className="bg-[#FAFAFA] py-16">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]">
                Past works
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Proof of delivery across all service categories.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#575757]">
                Request samples and portfolio access directly from the category
                that interests you.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {pastWorks.map((work) => (
                <div
                  key={work.title}
                  className="group flex flex-col gap-4 border border-white/10 bg-[#0e1f0b] p-6 text-white shadow-[0_18px_36px_rgba(17,17,17,0.08)] transition-all duration-300 hover:border-[#CDFF00]/40 hover:shadow-[0_24px_48px_rgba(251,191,36,0.12)] lg:p-8"
                >
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0F2419]/70">
                      {work.title}
                    </p>
                    <p className="mt-3 text-base leading-7 text-white/75">
                      {work.description}
                    </p>
                  </div>
                  <a
                    href={work.href}
                    target={work.href.startsWith("http") ? "_blank" : undefined}
                    rel={work.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex w-fit bg-[#CDFF00] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0e1f0b] transition-all duration-300 hover:bg-[#FAFAFA]"
                  >
                    {work.linkLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="bg-[#0F2419] px-8 py-10 text-white md:px-12 md:py-12">
              <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#CDFF00]">
                    Ready to start?
                  </p>
                  <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                    Get a quote for the service that fits your business.
                  </h2>
                  <p className="mt-3 text-base text-white/75">
                    Tell us what you need and we will recommend the right plan
                    and pricing.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                  <a
                    href="mailto:Dzmultipurposes@gmail.com"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0F2419]"
                  >
                    Get a Quote
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                  >
                    Talk to Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
