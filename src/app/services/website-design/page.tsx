import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Website Design & Building | Zenith Multipurposes",
  description:
    "Business websites, landing pages, and corporate site builds that attract inquiries.",
};

const deliverables = [
  "Business websites and landing pages",
  "Home, About, Services, Contact, Gallery or Blog pages",
  "Mobile responsive layouts",
  "Basic SEO structure and analytics setup",
];

const highlights = [
  {
    title: "Lead focused layout",
    description:
      "Clear structure that guides visitors toward inquiries and calls to action.",
  },
  {
    title: "Mobile first delivery",
    description:
      "Responsive builds that look sharp on phones, tablets, and desktops.",
  },
  {
    title: "Professional credibility",
    description:
      "Designs that reflect the quality and seriousness of your business.",
  },
];

const pricing = [
  {
    name: "One Page / Landing Website",
    price: "₦90,000 – ₦130,000",
    items: ["For campaigns, events, or personal brands"],
  },
  {
    name: "Standard Business Website (3–5 pages)",
    price: "₦180,000 – ₦280,000",
    items: [
      "Home, About, Services, Contact, basic gallery or blog",
      "Mobile responsive",
    ],
  },
  {
    name: "Premium Business / Corporate Website (6–10+ pages)",
    price: "From ₦300,000",
    items: ["Extra service pages, team, case studies, advanced layouts"],
  },
];

const addOns = [
  "Extra page: ₦20,000 – ₦30,000 per page",
  "Basic SEO + Analytics setup: ₦50,000 – ₦80,000",
  "Maintenance (updates, monitoring): from ₦40,000 per month",
];

export default function WebsiteDesignPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f5f1] text-[#141414]">
      <Navbar variant="solid" />
      <ServicePageLayout
        iconGradient="from-green-50 via-emerald-50 to-white"
        badge="Website Design & Building"
        title="Websites that build trust and drive inquiries."
        description="From landing pages to full corporate sites, we design clean, mobile friendly websites that represent your business well."
        heroImage="https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1200&q=80"
        heroImageAlt="Website design workspace"
        deliverables={deliverables}
        highlights={highlights}
        pricing={pricing}
        addOns={addOns}
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
