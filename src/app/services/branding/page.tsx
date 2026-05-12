import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Branding & Rebranding | Zenith Multipurposes",
  description:
    "Brand identity, company profiles, catalogues, brochures, and full rebranding solutions.",
};

const deliverables = [
  "Logo systems and brand identity design",
  "Company profile creation and layout",
  "Product or service catalogues",
  "Brochure and flyer templates",
  "Business cards and stationery",
];

const highlights = [
  {
    title: "Brand system clarity",
    description:
      "Consistent colors, typography, and layouts that make your brand easy to recognize.",
  },
  {
    title: "Executive ready documents",
    description:
      "Profiles, catalogues, and brochures designed for meetings and proposals.",
  },
  {
    title: "Launch support assets",
    description:
      "Rollout materials that keep your rebrand organized across every channel.",
  },
];

const pricing = [
  {
    name: "Brand Starter Pack – for micro and small businesses",
    price: "₦50,200 – ₦80,000",
    items: [
      "Simple logo (1 main + 5 variations)",
      "Basic brand colors & fonts guide",
      "One–two page company profile",
      "Business card design",
      "4 flyer designs",
    ],
  },
  {
    name: "Full Business Branding (Top–to–Bottom) – for serious SMEs",
    price: "₦150,000 – ₦250,000",
    items: [
      "Logo suite (primary logo, icon, monochrome + 4 variations)",
      "Full company profile (up to 30 pages)",
      "Product or service catalogue design (where applicable)",
      "Brochure template design",
      "Business card set (management and team)",
      "3–5 flyer/poster templates for campaigns or offers",
    ],
  },
  {
    name: "Corporate Rebranding Pack – for established companies",
    price: "From ₦300,000 (custom)",
    items: [
      "Brand audit and review of existing identity and materials",
      "New brand identity (updated logo system, colors, typography, and visual direction)",
      "New, expanded company profile and updated catalogue/brochures",
      "Rollout materials: stationery, presentation templates, social media branding, email signatures, and launch graphics",
    ],
  },
];

const standalone = [
  "Logo Design Only (1 main + 2 variations): ₦45,000",
  "Company Profile Design Only (up to 20 pages): ₦80,000",
  "Product / Service Catalogue Design Only (up to 30 pages): ₦95,000",
  "Brochure Design Only (trifold or multi-page): ₦35,000",
  "Business Card Design Only: ₦15,000",
  "Single Flyer / Poster Design: ₦12,000",
  "Social Media Post Template (per design): ₦8,000",
  "Event / Campaign Pack (5 related designs): ₦60,000",
];

const showcaseCards = [
  {
    title: "Identity systems",
    description:
      "Logo explorations and brand marks that help a business feel distinct and memorable.",
    images: ["/Branding/b10.jpeg", "/Branding/b14.jpeg", "/Branding/b15.jpeg"],
  },
  {
    title: "Brand rollout visuals",
    description:
      "Practical identity applications that show how a brand holds up across different uses.",
    images: ["/Branding/b16.jpeg", "/Branding/b17.jpeg", "/Trendy Shoes/tr2.jpeg"],
  },
  {
    title: "Campaign-ready details",
    description:
      "Supporting visuals that round out a branding system with a polished finish.",
    images: ["/Trendy Shoes/tr3.jpeg"],
  },
];

export default function BrandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f5f1] text-[#141414]">
      <Navbar variant="solid" />
      <ServicePageLayout
        iconName="palette"
        iconGradient="from-purple-50 via-pink-50 to-white"
        badge="Branding & Rebranding"
        title="Build a clear identity with strong, consistent brand assets."
        description="From logos to full corporate identity systems, we help businesses present a professional, trustworthy image across every channel."
        heroImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80"
        heroImageAlt="Branding materials"
        heroCaption="Identity systems, company profiles, and catalogues that look executive and polished."
        deliverables={deliverables}
        highlights={highlights}
        pricing={pricing}
        addOns={standalone}
        showcaseTitle="Branding showcase"
        showcaseDescription="A curated look at recent branding work, identity assets, and visual rollouts from real projects."
        showcaseCards={showcaseCards}
        pastWorksTitle="Branding samples, profiles, and catalogues."
        pastWorksDescription="Explore real deliverables from identity projects and company documentation builds."
        pastWorksLinks={[
          {
            label: "View Company Profiles",
            href: "https://drive.google.com/drive/folders/1ODIGBS04PDPi3EkiOWmbgOria3ABtyJB?usp=sharing",
            type: "external",
          },
          {
            label: "View Catalogues",
            href: "https://drive.google.com/drive/folders/1MMRFqbGQxaNNyxJ_CTI09snjELRkPyhA?usp=sharing",
            type: "external",
          },
          {
            label: "Request Branding Showcase",
            href: "mailto:Dzmultipurposes@gmail.com?subject=Branding%20Past%20Works%20Request",
            type: "email",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
