import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us | Zenith Multipurposes",
  description:
    "Get in touch with Zenith Multipurposes for branding, design, automation, and business support services.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAFA] text-[#1A1A1A]">
      <Navbar variant="solid" />
      <main>
        <section className="relative overflow-hidden bg-[#0F2419] pb-16 pt-24 text-white md:pt-28">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
            alt="Project discussion background"
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
                  Contact
                </p>
                <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Let&apos;s plan your next brand move together.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
                  Share your goals and we will recommend the right service mix for
                  branding, web, social media, print, or automation support.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
                  <a
                    href="mailto:Dzmultipurposes@gmail.com"
                    className="bg-[#CDFF00] px-5 py-2.5 text-[#0F2419] transition-all hover:bg-[#B8E600]"
                  >
                    Email us
                  </a>
                  <Link
                    href="/services"
                    className="border border-white/20 px-5 py-2.5 text-white transition-all hover:border-[#CDFF00] hover:bg-[#CDFF00]/10 hover:text-[#CDFF00]"
                  >
                    View services
                  </Link>
                </div>
              </div>
              <div className="relative aspect-4/3 overflow-hidden border border-white/10 bg-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                  alt="Team discussing a project brief"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,36,25,0.1)_0%,rgba(15,36,25,0.45)_100%)]" />
              </div>
            </div>
          </div>
        </section>

        <ContactInfoSection />

        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
