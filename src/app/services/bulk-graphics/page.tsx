import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "../../../components/ServicePageLayout";

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

const pricing = [
  {
    name: "Single Design (banner, poster, flyer, invite, etc.)",
    price: "₦8,000 – ₦15,000 per design",
    items: ["For basic corporate or event graphics"],
  },
  {
    name: "Event Pack (wedding, conference, church program, political event)",
    price: "₦40,000 – ₦70,000 (4–7 designs)",
    items: [
      "Main banner, social media flyers, countdown posts, program cover, and more",
    ],
  },
  {
    name: "Corporate Seasonal Pack (New Year / festive greetings)",
    price: "₦60,000 – ₦100,000 per season",
    items: [
      "Branded New Year or festive creatives for email, WhatsApp, socials, and print",
    ],
  },
];

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
      "/BulkGraphics/6.jpg",
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
        showcaseTitle="Bulk graphics showcase"
        showcaseDescription="A mixed gallery of previous work samples from print, promotional, and campaign-focused graphic design projects."
        showcaseCards={showcaseCards}
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
