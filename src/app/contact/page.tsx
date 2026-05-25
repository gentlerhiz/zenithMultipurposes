import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/sections/ContactInfoSection";

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

        <section className="bg-[#FAFAFA] py-16">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <form
                action="mailto:Dzmultipurposes@gmail.com"
                method="post"
                encType="text/plain"
                className="border border-black/10 bg-[#0F2419] p-8 text-white"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#CDFF00]">
                  Project brief
                </p>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                  Tell us what you need.
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  Fill the details below and we will respond with a clear scope
                  and next steps.
                </p>
                <div className="mt-6 grid gap-4">
                  <label className="grid gap-2 text-sm text-white/70">
                    Full name
                    <input
                      name="name"
                      placeholder="Your name"
                      className="h-12 border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-white/70">
                    Email address
                    <input
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      className="h-12 border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-white/70">
                    Service interest
                    <select
                      name="service"
                      className="h-12 border border-white/10 bg-white/5 px-4 text-sm text-white"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="Branding">Branding and Rebranding</option>
                      <option value="Social Media">Social Media Management</option>
                      <option value="Bulk Graphics">Bulk Graphics Design</option>
                      <option value="AI Automation">AI Automation Setup</option>
                      <option value="Website">Website Design And App Development</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm text-white/70">
                    Project summary
                    <textarea
                      name="summary"
                      rows={5}
                      placeholder="Share timelines, goals, and deliverables needed"
                      className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center bg-[#CDFF00] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0F2419] transition-all hover:bg-[#B8E600]"
                >
                  Send brief
                </button>
              </form>

              <div className="space-y-6">
                <div className="border border-black/10 bg-white p-6 shadow-[0_18px_36px_rgba(17,17,17,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0F2419]">
                    What happens next
                  </p>
                  <ol className="mt-4 space-y-3 text-sm text-[#6B7280]">
                    <li className="flex gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#CDFF00]/10 text-xs font-semibold text-[#0F2419]">
                        1
                      </span>
                      We review your brief and suggest a tailored package.
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#CDFF00]/10 text-xs font-semibold text-[#0F2419]">
                        2
                      </span>
                      You receive timelines, pricing, and required assets.
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#CDFF00]/10 text-xs font-semibold text-[#0F2419]">
                        3
                      </span>
                      Once approved, we kick off with a clear delivery plan.
                    </li>
                  </ol>
                </div>

                <div className="border border-black/10 bg-[#0F2419] p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Need a quicker response?
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    Send your brief and we will schedule a call.
                  </p>
                  <p className="mt-3 text-sm text-white/70">
                    We are available Monday to Saturday for consultations.
                  </p>
                  <a
                    href="mailto:Dzmultipurposes@gmail.com"
                    className="mt-5 inline-flex bg-[#CDFF00] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0F2419] transition-all hover:bg-[#B8E600]"
                  >
                    Email now
                  </a>
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
