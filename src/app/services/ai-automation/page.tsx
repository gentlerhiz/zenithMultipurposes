import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "AI Automation Setup | Zenith Multipurposes",
  description:
    "AI automation strategy and workflow setup for faster communication and operations.",
};

const deliverables = [
  {
    title: "Workflow Automation",
    description:
      "We identify repetitive tasks in your operations and build automated systems that handle them — saving your team time and reducing human error.",
  },
  {
    title: "AI-Powered Communication Systems",
    description:
      "Automated responses, follow-up sequences, and communication workflows that keep your business responsive around the clock.",
  },
  {
    title: "Process Integration",
    description:
      "We connect your existing tools and platforms into a unified, automated workflow — so your systems talk to each other without manual input.",
  },
  {
    title: "Custom Automation Builds",
    description:
      "Every business runs differently. We build automation solutions specific to your operations, not generic setups that only partially fit.",
  },
  {
    title: "Team Onboarding & Support",
    description:
      "We train your team on how to use and manage the systems we build — so you stay in control after handover.",
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
          title="Automation that simplifies your operations"
          description="Smart systems designed to save time, reduce costs, and boost efficiency"
          heroImage="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QUklMjBhdXRvbWF0aW9ufGVufDB8fDB8fHww"
          heroImageAlt="Automation workflow dashboard"
          whatWeDo="We design and integrate AI-powered automation systems into your business operations — reducing manual work, speeding up communication, and improving efficiency across your team. We make automation practical, accessible, and tailored specifically to how your business runs."
          whoThisIsFor={[
            "Corporations and mid-sized businesses with repetitive operational tasks eating into productivity",
            "Companies looking to modernize their workflows without overhauling their entire structure",
            "Organizations that want faster response systems for customer communication and internal processes",
            "Business owners who want to scale operations without proportionally scaling their team size",
          ]}
          deliverables={deliverables}
          pricing={pricing}
          whyItMatters="Time is your most valuable resource. Every hour your team spends on repetitive manual tasks is an hour not spent on growth. AI automation doesn't replace your people — it frees them to focus on work that actually moves your business forward. Companies that adopt smart systems early operate faster, respond better, and scale more efficiently than those that don't."
          whyZenithMultipurposes="We approach automation from a business-first perspective — not a purely technical one. We understand operations, communication, and workflow, which means the systems we build are practical, functional, and built around how your business actually works."
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
