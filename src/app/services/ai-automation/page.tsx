import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "AI Automation Setup | Zenith Multipurposes",
  description:
    "AI automation strategy and workflow setup for faster communication and operations.",
};

const deliverables = [
  "AI strategy and discovery for customer support and marketing",
  "Workflow automation with tools like WhatsApp, email, and spreadsheets",
  "Lead capture and reporting setup",
  "Documentation and basic training",
];

const highlights = [
  {
    title: "Faster responses",
    description:
      "Automate lead capture and customer replies without losing quality.",
  },
  {
    title: "Operational clarity",
    description:
      "Streamlined workflows that reduce manual tasks and errors.",
  },
  {
    title: "Scalable systems",
    description:
      "Automation built to grow with your business needs.",
  },
];

const pricing = [
  {
    name: "AI Strategy & Discovery Session",
    price: "₦60,000 – ₦80,000",
    items: [
      "1–2 sessions to map AI into customer support, marketing, or operations",
      "Simple roadmap document",
    ],
  },
  {
    name: "Basic AI Automation Setup",
    price: "₦150,000 – ₦220,000",
    items: [
      "One main workflow (WhatsApp lead capture → auto replies → Google Sheet)",
      "Simple documentation for the client",
    ],
  },
  {
    name: "Advanced AI Automation System",
    price: "From ₦250,000 – ₦400,000",
    items: [
      "Multiple workflows and tools",
      "For more mature businesses ready to invest",
    ],
  },
];

export default function AiAutomationPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f5f1] text-[#141414]">
      <Navbar variant="solid" />
      <ServicePageLayout
        iconGradient="from-yellow-50 via-amber-50 to-white"
        badge="AI Automation Setup"
        title="Smart systems that simplify communication and operations."
        description="We design automation workflows that reduce manual tasks, capture leads faster, and keep your team focused on growth."
        heroImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&q=80"
        heroImageAlt="Automation workflow dashboard"
        deliverables={deliverables}
        highlights={highlights}
        pricing={pricing}
        pastWorksTitle="Workflow automation references and examples."
        pastWorksDescription="Request tailored automation samples based on your tools and business process."
        pastWorksLinks={[
          {
            label: "View Past Works",
            href: "mailto:Dzmultipurposes@gmail.com?subject=AI%20Automation%20Past%20Works%20Request",
            type: "email",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
