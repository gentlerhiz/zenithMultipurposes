import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "../../../components/ServicePageLayout";
import { getPricingForSlug } from "@/lib/pricingData";

export const metadata: Metadata = {
  title: "Bulk Graphics Design | Zenith Multipurposes",
  description:
    "Print ready graphics for banners, posters, event materials, and corporate campaigns.",
};

const deliverables = [
  {
    title: "Print-Ready Graphics",
    description:
      "Banners, posters, flyers, brochures, event programs, wedding invites, meeting materials, and any other printable format — designed to exact print specifications.",
  },
  {
    title: "Digital Graphics",
    description:
      "Social media graphics, email headers, digital ads, presentation slides, and web-ready visuals optimized for every platform.",
  },
  {
    title: "Corporate & Event Materials",
    description:
      "Branded materials for conferences, product launches, corporate events, and internal communications.",
  },
  {
    title: "Bulk Turnaround",
    description:
      "We are structured to handle high-volume orders efficiently — multiple designs, multiple formats, tight deadlines.",
  },
];

const pricing = getPricingForSlug("bulk-graphics");

const coreGraphicDesignServices = [
  {
    title: "Banner / Billboard Design",
    price: "N15,000 – N25,000",
    note: "High-impact outdoor or promotional visuals sized to your brief.",
  },
  {
    title: "Brochure Design",
    price: "N10,000 – N15,000 per page",
    note: "Clean, structured brochure layouts for print or PDF use.",
  },
  {
    title: "Company Profile Design",
    price: "N40,000",
    note: "Professional profile design for established business presentations.",
  },
  {
    title: "Company Profile Design + Writing",
    price: "N50,000",
    note: "Design plus copywriting for a complete profile package.",
  },
  {
    title: "Business Proposal Design",
    price: "N20,000",
    note: "Polished proposal formatting for client or investor submissions.",
  },
  {
    title: "Business Proposal Design + Writing",
    price: "N40,000 – N60,000",
    note: "Full proposal support with writing and presentation design.",
  },
  {
    title: "PowerPoint / Pitch Deck Design",
    price: "N7,000 – N12,000 per slide",
    note: "Investor-ready or sales-focused slide design with clean structure.",
  },
  {
    title: "Book Cover Design (Front & Back)",
    price: "N15,000 – N25,000",
    note: "Front and back cover layout for print or digital publishing.",
  },
  {
    title: "Brand Identity Package (Logo + Brand Assets)",
    price: "N50,000 – N120,000",
    note: "A focused identity system with supporting brand assets.",
  },
];

const optionalAddOnServices = [
  {
    title: "Email Template Design",
    price: "N15,000 – N25,000",
    note: "Reusable email layouts for announcements or campaigns.",
  },
  {
    title: "Corporate Document Design",
    price: "N10,000 – N20,000",
    note: "Letterheads, reports, and other business documents.",
  },
  {
    title: "Menu / Price List Design",
    price: "N10,000 – N15,000",
    note: "Best suited for established brands that need a premium menu or list layout.",
  },
];

const afterPricingContent = (
  <section className="bg-white py-20">
    <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">Extended Options</p>
        <h2 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">Core Graphic Design Services</h2>
        <p className="mt-4 text-base leading-7 text-[#6B7280]">
          Standalone design services for businesses that need focused support beyond bulk campaign work.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {coreGraphicDesignServices.map((service, index) => (
          <article
            key={service.title}
            className={`group flex h-full flex-col border p-6 shadow-[0_16px_36px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,17,17,0.08)] ${
              index % 3 === 0
                ? "border-dark-green/10 bg-[#FCFBF7]"
                : index % 3 === 1
                  ? "border-dark-green/10 bg-white"
                  : "border-dark-green/10 bg-[#F7F8F5]"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                
                <h3 className="mt-3 text-lg font-semibold leading-tight text-text-primary">{service.title}</h3>
              </div>
             
            </div>

            <p className="mt-4 text-sm leading-7 text-text-secondary">{service.note}</p>

            <p className="mt-5 text-xl font-bold tracking-[-0.03em] text-dark-green">{service.price}</p>

            <div className="mt-auto pt-6">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center border border-dark-green/10 bg-white px-5 py-3 text-sm font-semibold text-dark-green transition-all duration-300 hover:border-dark-green/20 hover:bg-neon-green/10"
              >
                Request Service
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-[28px] border border-dark-green/10 bg-off-white p-6 md:p-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-dark-green">Add-Ons</p>
          <h3 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">Optional Add-On Services</h3>
          <p className="mt-4 text-base leading-7 text-[#6B7280]">
            High-value extras for brands that want refined supporting materials.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {optionalAddOnServices.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col border border-dark-green/10 bg-white p-5 shadow-[0_12px_28px_rgba(17,17,17,0.04)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dark-green/70">Optional</p>
              <h4 className="mt-3 text-base font-semibold leading-tight text-text-primary">{service.title}</h4>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{service.note}</p>
              <p className="mt-5 text-lg font-bold text-dark-green">{service.price}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const showcaseCards = [
  {
    title: "Travel-led graphics",
    description:
      "Poster and campaign visuals with a polished promotional finish.",
    images: [
      "/BulkGraphics/1.jpg",
      "/BulkGraphics/2.jpg",
      "/BulkGraphics/3.jpg",
      "/BulkGraphics/4.jpg",
      "/BulkGraphics/5.jpeg",
        "/BulkGraphics/6.jpeg",
    ],
  },
  {
    title: "Event and product promos",
    description:
      "Reusable graphics that keep launches, announcements, and sales visually consistent.",
    images: [
      "/BulkGraphics/7.jpeg",
      "/BulkGraphics/8.jpg",
      "/BulkGraphics/9.jpg",
      "/BulkGraphics/10.jpeg",
      "/BulkGraphics/11.jpeg",
      "/BulkGraphics/12.jpeg",
    ],
  },
  {
    title: "Print-ready details",
    description:
      "Additional samples showing how the design system holds up across different formats.",
    images: [
      "/BulkGraphics/13.jpeg",
      "/BulkGraphics/14.jpeg",
      "/BulkGraphics/15.jpeg",
      "/BulkGraphics/16.jpeg",
      "/BulkGraphics/17.jpeg",
      "/BulkGraphics/18.jpeg",
    ],
  },
];

export default function BulkGraphicsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f5f1] text-[#141414]">
      <Navbar variant="solid" />
      <ServicePageLayout
        iconGradient="from-orange-50 via-red-50 to-white"
        badge="Bulk Graphics Design"
        title="Professional graphics at scale"
        description="High-quality design assets that elevate your brand across all platforms"
        heroImage="https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heroImageAlt="Designing print graphics"
        deliverables={deliverables}
        pricing={pricing}
        showcaseCards={showcaseCards}
        afterPricingContent={afterPricingContent}
        pastWorksTitle="Event packs and corporate print samples."
        pastWorksDescription="Request print ready samples for banners, posters, and branded event materials."
        pastWorksLinks={[
          {
            label: "View Past Works",
            href: "mailto:Dzmultipurposes@gmail.com?subject=Bulk%20Graphics%20Past%20Works%20Request",
            type: "email",
          },
        ]}
        whatWeDo="We produce large volumes of print-ready and digital graphics for businesses that need consistent, professional visuals across multiple formats — fast. From corporate events to marketing campaigns, we handle the design load so your team doesn't have to."
        whoThisIsFor={[
          "Businesses running promotions, campaigns, or events that need multiple designs",
          "Companies that need branded materials produced regularly and consistently",
          "Organizations requiring both print and digital assets from a single provider",
          "Anyone who needs professional design work in volume without compromising quality",
        ]}
        whyItMatters="Inconsistent visuals damage your brand. When your graphics look different across every platform and material, it signals a lack of professionalism. Consistent, high-quality design across all your materials builds recognition, trust, and a stronger brand presence everywhere your business shows up."
        whyZenithMultipurposes="We've handled bulk design projects for businesses of all sizes since 2020. Our process is built for volume — without the drop in quality that usually comes with it."
      />
      <Footer />
    </div>
  );
}
