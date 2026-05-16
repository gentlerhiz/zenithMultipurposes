import { CheckCircle2, Layers3, Mail, Phone, ShieldCheck } from "lucide-react";

export type QuoteReason = string;

export type QuoteService = {
  title: string;
  description: string;
};

export type QuoteFactor = string;

interface GetAQuoteOverviewSectionProps {
  requestReasons: QuoteReason[];
  services: QuoteService[];
  quoteFactors: QuoteFactor[];
}

export default function GetAQuoteOverviewSection({
  requestReasons,
  services,
  quoteFactors,
}: GetAQuoteOverviewSectionProps) {
  return (
    <section className="bg-off-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="space-y-8">
          <div className="border border-black/10 bg-white p-8 shadow-sm">
            <div className="space-y-4 text-base leading-8 text-text-secondary">
              <p>
                We provide tailored quotes for website design, bulk graphics,
                social media setup and management, AI automation, and corporate
                branding, so the fastest path is a short form that captures only
                the essentials first.
              </p>
              <p>
                Need something urgent? Reach out through the contact option that
                works best for you, and we will point you in the right direction
                as quickly as possible.
              </p>
              <p>
                Every business is different, so pricing depends on your service
                type, project scope, quantity, timeline, and any special
                requirements. Keeping the first step simple helps more people
                complete the form and makes it easier to begin the conversation
                without overwhelming them.
              </p>
              <p>
                Whether you need a full corporate rebrand, a business website,
                bulk design materials, social media support, or automation for
                your operations, Zenith Multipurposes will review your request
                and recommend the right next step for your goals.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-dark-green">
                Why request a quote
              </p>
              <div className="mt-6 grid gap-4">
                {requestReasons.map((reason) => (
                  <div key={reason} className="flex gap-3 text-sm leading-7 text-text-secondary">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-dark-green" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-dark-green">
                Prefer direct contact?
              </p>

              <div className="mt-5 grid gap-3 text-sm font-medium text-text-primary">
                <a
                  href="tel:+2349037468616"
                  className="inline-flex items-center gap-3 border border-black/10 bg-off-white px-4 py-3 transition hover:border-dark-green hover:text-dark-green"
                >
                  <Phone size={16} className="shrink-0" />
                  +234 903 746 8616
                </a>
                <a
                  href="tel:+2348108529124"
                  className="inline-flex items-center gap-3 border border-black/10 bg-off-white px-4 py-3 transition hover:border-dark-green hover:text-dark-green"
                >
                  <Phone size={16} className="shrink-0" />
                  +234 810 852 9124
                </a>
                <a
                  href="mailto:Dzmultipurposes@gmail.com"
                  className="inline-flex items-center gap-3 border border-black/10 bg-off-white px-4 py-3 transition hover:border-dark-green hover:text-dark-green"
                >
                  <Mail size={16} className="shrink-0" />
                  Dzmultipurposes@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="border border-black/10 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-dark-green">
              Services you can request
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Tell us what you need and we will match the right service.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
              Whether you need a full corporate rebrand, a business website,
              bulk design materials, social media support, or automation for
              your operations, Zenith Multipurposes will review your request
              and recommend the right next step for your goals.
            </p>

            <div className="mt-8 grid gap-4 xl:grid-cols-2">
              {services
                .filter(
                  (s) =>
                    s.title !== "Done-for-you delivery" &&
                    s.title !== "Conversion ready assets" &&
                    s.title !== "Systems that scale"
                )
                .map((service) => (
                  <article
                    key={service.title}
                    className="group border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-dark-green/20 hover:shadow-[0_20px_40px_rgba(17,17,17,0.08)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 bg-off-white text-dark-green transition group-hover:border-dark-green/20 group-hover:bg-neon-green/10">
                        <Layers3 size={18} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-text-secondary">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border border-black/10 bg-dark-green p-6 text-white shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neon-green/80">
                Why businesses choose Zenith Multipurposes
              </p>
              <p className="mt-4 text-sm leading-7 text-white/78">
                We offer a focused mix of services that help businesses look
                more professional, communicate better, and operate more
                efficiently through design, branding, digital setup, and
                automation support. Zenith Multipurposes also operates as a
                division of Bornstellar Limited, which supports the more
                structured and corporate positioning you have been building
                into the site copy.
              </p>
            </div>

            <div className="border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-dark-green">
                What affects your quote?
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-text-secondary">
                {quoteFactors.map((factor) => (
                  <li key={factor} className="flex gap-3">
                    <ShieldCheck size={18} className="mt-0.5 shrink-0 text-dark-green" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
