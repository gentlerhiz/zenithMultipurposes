import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// lucide-react icons not required in this file
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Services | Zenith Multipurposes",
  description:
    "Explore branding, web design, social media, graphics, and AI automation services tailored for business growth.",
};

// Service cards data removed; `ServicesSection` handles service listings.

// serviceGallery removed — not used on this page

// serviceHighlights removed — highlight cards not needed on this page

// whatWeDo and pastWorks removed — kept in repo history if needed

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
                  Professional support for your growth.
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
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-[#FAFAFA] py-16">
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
        </section> */}

        {/* <section className="bg-[#FAFAFA] py-16">
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
        </section> */}

        <ServicesSection />

        

        {/* <section id="past-works" className="bg-[#FAFAFA] py-16">
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
        </section> */}

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
