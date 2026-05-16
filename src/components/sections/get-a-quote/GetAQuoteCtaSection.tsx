import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GetAQuoteCtaSection() {
  return (
    <section className="bg-off-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="border border-black/10 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-dark-green">
            CTA close
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-text-primary">
            Let&apos;s discuss your project.
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-text-secondary">
            Send your request today and get a quote based on your business goals, service needs, and project scope.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
            <Link
              href="#quote-form"
              className="inline-flex items-center gap-2 border border-neon-green bg-neon-green px-4 py-2 text-dark-green transition hover:bg-mint-green"
            >
              Request a Quote
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-black/10 px-4 py-2 text-text-primary transition hover:border-dark-green hover:text-dark-green"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
