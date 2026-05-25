import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "../../../components/ServicePageLayout";

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
