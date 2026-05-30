import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "../../../components/ServicePageLayout";
import { getPricingForSlug } from "@/lib/pricingData";
import TermsTrigger from "@/components/TermsTrigger";

export const metadata: Metadata = {
  title: "Website Design And App Development | Zenith Multipurposes",
  description:
    "Business websites, landing pages, and corporate site builds that attract inquiries.",
};

const deliverables = [
  {
    title: "Custom Website Design",
    description:
      "A professionally designed website built around your brand identity, audience, and business objectives.",
  },
  {
    title: "Mobile & Desktop Optimization",
    description:
      "Your site will look and function perfectly across all devices — phones, tablets, and desktops.",
  },
  {
    title: "Contact & Inquiry Setup",
    description:
      "Forms, call-to-action buttons, and contact integrations set up to convert visitors into leads.",
  },
  {
    title: "Basic SEO Setup",
    description:
      "Page titles, meta descriptions, and site structure configured to help your business get found on search engines.",
  },
  {
    title: "Handover & Walkthrough",
    description:
      "We walk you through your site so you understand how to manage it after delivery.",
  },
];

const pricing = getPricingForSlug("website-design");
const appPricing = getPricingForSlug("app-development");

const showcaseCards = [
  {
    title: "Business website builds",
    description: "Recent website layouts and page structures created for service businesses and brands.",
    images: ["/website/1.jpeg", "/website/2.jpeg", "/website/3.jpeg"],
  },
  {
    title: "Landing pages and conversion layouts",
    description: "Focused pages designed to drive bookings, inquiries, and campaign responses.",
    images: ["/website/4.jpeg", "/website/5.jpeg", "/website/6.jpeg"],
  },
  {
    title: "Corporate and content sections",
    description: "Page compositions that show how the website system holds together across sections.",
    images: ["/website/7.jpeg", "/website/8.jpeg", "/website/9.jpeg"],
  },
];

const addOns = [
  { title: "Language Translation", price: "₦40,000" },
  { title: "Dark / Light Mode Toggle", price: "₦25,000" },
  { title: "WhatsApp / Live Chat Integration", price: "₦15,000" },
  { title: "Blog Setup", price: "₦50,000" },
  { title: "Booking / Reservation Feature", price: "₦80,000" },
  { title: "Payment Gateway Integration", price: "₦100,000" },
  { title: "User Login / Dashboard", price: "₦150,000" },
  { title: "Newsletter Integration", price: "₦10,000" },
  { title: "Analytics Setup", price: "₦25,000" },
  { title: "Advanced SEO Setup", price: "₦60,000" },
  { title: "Extra Page", price: "₦5,000" },
  { title: "Premium Plugin / Tool Setup", price: "₦70,000/year" },
];

const afterPricingContent = (
  <section className="bg-white py-20">
    <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">App Development</p>
        <h2 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">App Development Packages</h2>
        <p className="mt-4 text-base leading-7 text-[#6B7280]">Mobile and web apps built to solve specific business problems.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {appPricing.map((tier, index) => (
          <article key={tier.name} className={`group relative flex flex-col overflow-hidden border ${index === 1 ? "border-dark-green bg-white shadow-2xl lg:-mt-4 lg:scale-105" : "border-black/10 bg-white shadow-lg"}`}>
            <div className="p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-dark-green/70">{tier.name}</p>
              <h3 className="mt-3 text-lg font-bold text-text-primary">{tier.name}</h3>
              <p className="mt-4 text-3xl font-bold text-dark-green">{tier.price}</p>
              <ul className="mt-6 space-y-3">
                {tier.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-text-secondary"><span className="mt-0.5 h-5 w-5 shrink-0 text-dark-green" />{it}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold ${index === 1 ? "bg-neon-green text-dark-green" : "border-2 border-dark-green/20 text-dark-green"}`}>Get Started</a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-[28px] border border-dark-green/10 bg-off-white p-6 md:p-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">Add-Ons</p>
          <h3 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">Optional Add-Ons</h3>
          <p className="mt-4 text-base leading-7 text-[#6B7280]">Enhance your website or app with these additional services.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {addOns.map((a) => (
            <div key={a.title} className="flex items-center justify-between gap-4 rounded-lg border border-dark-green/10 bg-white p-4">
              <div>
                <p className="text-sm font-semibold text-text-primary">{a.title}</p>
              </div>
              <p className="text-sm font-bold text-dark-green">{a.price}</p>
            </div>
          ))}
        </div>
        <TermsTrigger />
      </div>
    </div>
  </section>
);

export default function WebsiteDesignPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f5f1] text-[#141414]">
      <Navbar variant="solid" />
      <ServicePageLayout
        iconGradient="from-green-50 via-emerald-50 to-white"
        badge="Website Design And App Development"
        title="Websites built to convert and inspire"
        description="Fast, beautiful web solutions designed with your business goals in mind"
        heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heroImageAlt="Website design workspace"
        deliverables={deliverables}
        pricing={pricing}
        showcaseCards={showcaseCards}
        afterPricingContent={afterPricingContent}
        whatWeDo="We design and build clean, professional websites that make your business easy to find, easy to trust, and easy to contact. Every site we build is tailored to your business goals — not recycled from a template and handed over."
        whoThisIsFor={[
          "Businesses with no website that need to establish an online presence",
          "Companies with outdated websites that no longer reflect their brand",
          "Entrepreneurs launching a new product, service, or venture",
          "Organizations that need a functional, professional site without the technical headache",
        ]}
        whyItMatters="Most people will check your website before they ever contact you. A poorly designed or outdated site sends the wrong signal — it tells potential clients you're not serious. A clean, professional website does the opposite. It builds credibility instantly and turns visitors into inquiries."
        whyZenithMultipurposes="Since 2020, we've built websites for businesses of all sizes — from single-page sites to multi-page corporate platforms. We focus on sites that work first and look great second, with every design built around your specific business goals."
        pastWorksTitle="Website and landing page samples."
        pastWorksDescription="Request a curated set of web builds and layouts we have delivered for other businesses."
        pastWorksLinks={[
          {
            label: "View Past Works",
            href: "mailto:Dzmultipurposes@gmail.com?subject=Website%20Past%20Works%20Request",
            type: "email",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
