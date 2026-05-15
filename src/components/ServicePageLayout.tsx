import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ExternalLink, Mail } from "lucide-react";

interface ServicePageLayoutProps {
  // Hero Section
  iconGradient: string;
  badge: string;
  title: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  
  // Deliverables Section
  deliverables: string[];
  
  // Highlights Section
  highlights: Array<{
    title: string;
    description: string;
  }>;
  
  // Pricing Section
  pricing: Array<{
    name: string;
    price: string;
    items: string[];
  }>;
  addOns?: string[];

  // Showcase Section
  showcaseTitle?: string;
  showcaseDescription?: string;
  showcaseCards?: Array<{
    title: string;
    description: string;
    images: string[];
  }>;
  
  // Past Works Section
  pastWorksTitle: string;
  pastWorksDescription: string;
  pastWorksLinks: Array<{
    label: string;
    href: string;
    type: "external" | "email";
  }>;
}

export default function ServicePageLayout({
  iconGradient,
  badge,
  title,
  description,
  heroImage,
  heroImageAlt,
  deliverables,
  highlights,
  pricing,
  addOns,
  showcaseTitle,
  showcaseDescription,
  showcaseCards,
  pastWorksTitle,
  pastWorksDescription,
  pastWorksLinks,
}: ServicePageLayoutProps) {
  return (
    <main>
      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${iconGradient} pb-16 pt-24 md:pt-28`}>
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 h-96 w-96 bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-white/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]">
                  {badge}
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#pricing"
                  className="inline-flex items-center gap-2 bg-[#CDFF00] px-6 py-3 text-sm font-semibold text-[#0F2419] transition-all hover:bg-[#B8E600] hover:shadow-lg"
                >
                  View Pricing
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
                <Link
                  href="#past-works"
                  className="inline-flex items-center gap-2 border-2 border-[#0F2419]/20 bg-white/80 px-6 py-3 text-sm font-semibold text-[#0F2419] backdrop-blur-sm transition-all hover:border-[#0F2419]/40 hover:bg-white"
                >
                  View Past Works
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden border border-black/10 bg-white shadow-2xl">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <h2 className="text-3xl font-bold text-[#1A1A1A]">What we deliver</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, index) => (
              <div
                key={item}
                className="group border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[#CDFF00]/10 text-[#0F2419] transition-transform duration-300 group-hover:scale-110">
                    <CheckCircle2 size={20} />
                  </span>
                  <p className="text-sm font-semibold leading-6 text-[#1A1A1A]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="border border-black/10 bg-gradient-to-br from-[#FAFAFA] to-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0F2419]/70">
                  Highlight
                </p>
                <p className="mt-3 text-base font-bold text-[#1A1A1A]">
                  {highlight.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#FAFAFA] py-20">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Transparent Pricing</h2>
            <p className="mt-3 text-base text-[#6B7280]">
              Choose the package that fits your business needs
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((tier, index) => (
              <div
                key={tier.name}
                className={`group relative flex flex-col overflow-hidden border ${
                  index === 1
                    ? "border-[#0F2419] bg-white shadow-2xl lg:-mt-4 lg:scale-105"
                    : "border-black/10 bg-white shadow-lg"
                } transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {index === 1 && (
                  <div className={`absolute right-4 top-4 rounded-full bg-gradient-to-r ${iconGradient.replace('to-white', 'to-transparent')} px-3 py-1 text-xs font-bold text-white`}>
                    POPULAR
                  </div>
                )}
                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#0F2419]/70">
                    {index === 0 ? "Starter" : index === 1 ? "Professional" : "Enterprise"}
                  </p>
                  <h3 className="mt-3 text-lg font-bold text-[#1A1A1A]">
                    {tier.name}
                  </h3>
                  <p className="mt-4 text-3xl font-bold text-[#0F2419]">
                    {tier.price}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {tier.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-[#6B7280]"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0F2419]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-all ${
                      index === 1
                        ? "bg-[#CDFF00] text-[#0F2419] hover:bg-[#B8E600]"
                        : "border-2 border-[#0F2419]/20 text-[#0F2419] hover:border-[#0F2419] hover:bg-[#0F2419]/5"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons if provided */}
          {addOns && addOns.length > 0 && (
            <div className="mt-8 rounded-2xl border border-black/10 bg-white p-8 shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1A1A1A]">
                    {addOns.length > 3 ? "Standalone Services" : "Add-ons"}
                  </h3>
                  <p className="mt-2 text-sm text-[#6B7280]">
                    {addOns.length > 3
                      ? "Need just one specific item? We offer à la carte options."
                      : "Enhance your package with these optional extras."}
                  </p>
                </div>
                <span className="rounded-full bg-[#CDFF00]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0F2419]">
                  {addOns.length > 3 ? "Flexible" : "Optional"}
                </span>
              </div>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {addOns.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#6B7280]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0F2419]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {showcaseCards && showcaseCards.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">
                Past Works Showcase
              </p>
              <h2 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">
                {showcaseTitle || "Selected work that shows the range of what we do."}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#6B7280]">
                {showcaseDescription || "A quick visual tour through previous work samples, curated to match this service."}
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {showcaseCards.map((card, index) => {
                const mainImage = card.images[0];
                const secondaryImages = card.images.slice(1, 4);

                return (
                  <article key={card.title} className="group overflow-hidden border border-black/10 bg-off-white shadow-[0_16px_40px_rgba(17,17,17,0.07)] transition-transform duration-300 hover:-translate-y-1">
                    <div className="grid gap-2 p-3">
                      <div className="relative aspect-4/3 overflow-hidden border border-black/5 bg-white">
                        <Image
                          src={encodeURI(mainImage)}
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,36,25,0.02)_0%,rgba(15,36,25,0.25)_100%)]" />
                      </div>

                      {secondaryImages.length > 0 && (
                        <div className="grid grid-cols-2 gap-2">
                          {secondaryImages.map((src, imageIndex) => (
                            <div key={`${card.title}-${imageIndex}`} className="relative aspect-square overflow-hidden border border-black/5 bg-white">
                              <Image
                                src={encodeURI(src)}
                                alt={`${card.title} sample ${imageIndex + 2}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 1024px) 50vw, 16vw"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="border-t border-black/10 bg-white p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">
                        0{index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-text-primary">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                        {card.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Past Works Section */}
      <section id="past-works" className="bg-white py-20">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-[#CDFF00]/10 px-4 py-2">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]">
                  Past Works
                </p>
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">
                {pastWorksTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#6B7280]">
                {pastWorksDescription}
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-black/10 bg-gradient-to-br from-[#FAFAFA] to-white p-8 shadow-lg">
              {pastWorksLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.type === "external" ? "_blank" : undefined}
                  rel={link.type === "external" ? "noreferrer noopener" : undefined}
                  className={`group flex items-center justify-between rounded-xl px-5 py-4 text-sm font-semibold transition-all ${
                    index === 0
                      ? "bg-[#CDFF00] text-[#0F2419] hover:bg-[#B8E600] hover:shadow-lg"
                      : index === 1
                      ? "border-2 border-[#0F2419]/20 bg-white text-[#0F2419] hover:border-[#0F2419] hover:bg-[#0F2419]/5"
                      : "border-2 border-black/10 bg-white text-[#6B7280] hover:border-black/20 hover:bg-[#FAFAFA]"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.type === "external" ? (
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  ) : (
                    <Mail className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
