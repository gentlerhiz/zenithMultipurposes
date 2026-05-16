import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Branding & Rebranding | Zenith Multipurposes",
  description:
    "Brand identity, company profiles, catalogues, brochures, and full rebranding solutions.",
};

const deliverables = [
  {
    title: "Brand Identity Design",
    description:
      "Logo, color palette, typography, and visual guidelines that define how your brand looks and feels across every platform.",
  },
  {
    title: "Company Profile & Catalogue",
    description:
      "Professionally written and designed company profiles and product catalogues that represent your business at its best.",
  },
  {
    title: "Brand Style Guide",
    description:
      "A complete reference document so your brand stays consistent — whether it's used by your team, a printer, or a new contractor.",
  },
  {
    title: "Rebranding Strategy",
    description:
      "If your current brand isn't working, we audit what exists, identify the gaps, and rebuild with a clear direction.",
  },
  {
    title: "Stationery & Corporate Materials",
    description:
      "Business cards, letterheads, email signatures, and branded templates designed to complete your professional identity.",
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
        iconGradient="from-purple-50 via-pink-50 to-white"
        badge="Branding & Rebranding"
        title="Build a brand identity that stands out"
        description="Professional branding that creates lasting impressions and drives recognition"
        heroImage="https://images.unsplash.com/photo-1654481414716-2f4ab5fe0fbe?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heroImageAlt="Branding materials"
        deliverables={deliverables}
        pricing={pricing}
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
        whatWeDo="At Zenith Multipurposes, we build and rebuild brand identities that are clear, consistent, and built to last. Whether you're launching a new business or an existing brand that no longer reflects where you're headed — we give you the visuals, materials, and identity system to show up with authority."
          whoThisIsFor={[
            "Startups that need a brand identity built from the ground up",
            "Established businesses whose current brand feels outdated or inconsistent",
            "Companies expanding into new markets and need a stronger corporate image",
            "Entrepreneurs who want their business to look as serious as it is",
          ]}
          whyItMatters="A weak brand costs you clients before you even get the chance to speak to them. A strong brand does the opposite — it builds trust instantly, communicates professionalism, and makes every other part of your marketing work harder. Businesses that invest in proper branding close more deals, retain more clients, and grow faster."
          whyZenithMultipurposes="We've been building strong brand identities since 2020 for startups, SMEs, and established companies. Our process blends strategy with creativity to ensure your brand isn't just beautiful — it's built to last and actually reflect who you are."
      />
      <Footer />
    </div>
  );
}
