import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function GetAQuoteHeroSection() {
  return (
    <section className="bg-dark-green pb-16 pt-24 text-white md:pb-20 md:pt-28">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-neon-green">
            <Sparkles size={12} />
            Get a Quote
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Tell us what you need, and we will help you price it properly.
          </h1>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
            <Link
              href="#quote-form"
              className="inline-flex items-center gap-2 border border-neon-green bg-neon-green px-5 py-3 text-dark-green transition hover:bg-mint-green"
            >
              Request a Quote
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/18 bg-transparent px-5 py-3 text-white transition hover:border-neon-green hover:bg-neon-green/10 hover:text-neon-green"
            >
              Talk to Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/18 bg-transparent px-5 py-3 text-white transition hover:border-neon-green hover:bg-neon-green/10 hover:text-neon-green"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
