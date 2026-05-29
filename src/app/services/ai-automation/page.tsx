import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "../../../components/ServicePageLayout";
import { getPricingForSlug } from "@/lib/pricingData";

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

const pricing = getPricingForSlug("ai-automation");

const businessNeeds = [
  "A school that wants to automate admission enquiries, student communication, exam processing, and result release.",
  "A hospital or clinic that wants to automate appointment booking, reminders, patient form handling, and internal scheduling.",
  "A real estate company that wants to capture leads, respond instantly, and follow up automatically with prospects.",
  "A corporate office that wants leave requests, approvals, document movement, and staff requests to flow without manual chasing.",
  "A service business that wants website or WhatsApp customer enquiries answered faster without relying on staff every minute.",
  "A company that wants an internal AI assistant to answer staff questions from company files and procedures.",
];

const afterPricingContent = (
  <section className="bg-white py-20">
    <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">Business needs</p>
        <h2 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">Where AI automation helps most</h2>
        <p className="mt-4 text-base leading-7 text-[#6B7280]">
          These are the kinds of AI automation services businesses most often understand and immediately see value in because they save time, reduce delays, and remove repeated manual effort.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-none border border-black/10 bg-off-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-text-primary">Automation use cases</h3>
          <p className="mt-3 text-sm leading-7 text-text-secondary">
            Business process automation is commonly used for repeatable tasks such as approvals, notifications, records movement, appointment handling, billing, internal requests, and customer support workflows.
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-text-secondary">
            {businessNeeds.map((item) => (
              <li key={item} className="border-t border-black/5 pt-3">{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-none border border-dark-green/10 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-text-primary">Why these projects are priced differently</h3>
          <p className="mt-3 text-sm leading-7 text-text-secondary">
            AI automation pricing is influenced by the number of workflows, the amount of logic required, integrations, approvals, testing, and how deeply the system connects with your current operations.
          </p>
          <div className="mt-5 grid gap-4 text-sm leading-7 text-text-secondary">
            <p>A simple workflow may only need a chatbot or enquiry form connected to responses and lead capture.</p>
            <p>A larger system may need staff routing, records handling, approvals, notifications, dashboards, and multiple connected workflows.</p>
            <p>That is why automation is often scoped by business process complexity, not just by the number of screens or pages.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

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
          afterPricingContent={afterPricingContent}
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
