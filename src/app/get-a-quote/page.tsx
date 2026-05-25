import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetAQuoteHeroSection from "@/components/sections/get-a-quote/GetAQuoteHeroSection";
import GetAQuoteOverviewSection from "@/components/sections/get-a-quote/GetAQuoteOverviewSection";
import GetAQuoteFormSection from "@/components/sections/get-a-quote/GetAQuoteFormSection";
import GetAQuoteCtaSection from "@/components/sections/get-a-quote/GetAQuoteCtaSection";

export const metadata: Metadata = {
  title: "Get a Quote | Zenith Multipurposes",
  description:
    "Request a tailored quote for branding, websites, social media, bulk graphics, and AI automation.",
};

const requestReasons = [
  "Get pricing tailored to your exact needs instead of a one-size-fits-all estimate.",
  "Tell us your goals, preferred timeline, and service requirements in one place.",
  "Receive a response based on project scope, not guesswork.",
  "Choose the service that fits your business, from branding and graphics to websites and automation.",
];

const services = [
  {
    title: "Website Design And App Development",
    description:
      "Business websites, landing pages, redesigns, and website setup for brands that need a stronger online presence.",
  },
  {
    title: "Bulk Graphics Design",
    description:
      "Printable and non-printable design work, including company profiles, catalogues, branded materials, banners, posters, flyers, and other visual assets produced in volume.",
  },
  {
    title: "Social Media Setup and Management",
    description:
      "Social platform setup, branding, content support, and ongoing management for businesses that want to show up consistently online.",
  },
  {
    title: "AI Automation for Corporations",
    description:
      "Smart workflow and communication systems designed to reduce manual work and improve business efficiency.",
  },
  {
    title: "Corporate Branding",
    description:
      "Branding and rebranding solutions including identity development, company profile design, catalogues, brochures, business cards, logos, and related brand materials.",
  },
];

const quoteFactors = [
  "Type of service selected.",
  "Project size or quantity required.",
  "Deadline or delivery timeline.",
  "Revisions, add-ons, or custom requests.",
];

export default function GetAQuotePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-off-white text-text-primary">
      <Navbar variant="solid" />
      <main>
        <GetAQuoteHeroSection />
        <GetAQuoteOverviewSection
          requestReasons={requestReasons}
          services={services}
          quoteFactors={quoteFactors}
        />
        <GetAQuoteFormSection />
        <GetAQuoteCtaSection />
      </main>
      <Footer />
    </div>
  );
}
