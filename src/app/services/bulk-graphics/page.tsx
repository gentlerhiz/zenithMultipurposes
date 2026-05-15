import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Bulk Graphics Design | Zenith Multipurposes",
  description:
    "Print ready graphics for banners, posters, event materials, and corporate campaigns.",
};

const deliverables = [
  "Banners, posters, flyers, and corporate graphics",
  "Wedding invites, event packs, and conference materials",
  "Seasonal greeting sets for campaigns",
  "Print ready files for vendors",
];

const highlights = [
  {
    title: "Print ready quality",
    description:
      "Files are prepared for clear, professional printing results.",
  },
  {
    title: "Event focused packs",
    description:
      "Coordinated designs for conferences, weddings, and corporate events.",
  },
  {
    title: "Brand consistency",
    description:
      "Every graphic matches your brand colors, typography, and tone.",
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

const addOns = [
  "Corporate Graphics Bundle (company profile + catalogue + posters): From ₦120,000 (custom)",
  "For larger corporate campaigns or full document sets",
];

const showcaseCards = [
  {
    title: "Travel-led graphics",
    description:
      "Poster and campaign visuals with a polished promotional finish.",
    images: ["/Leyony Travels/le1.jpeg", "/Leyony Travels/le3.jpeg", "/Shopify Drinks and More/s1.jpeg"],
  },
  {
    title: "Event and product promos",
    description:
      "Reusable graphics that keep launches, announcements, and sales visually consistent.",
    images: ["/Leyony Travels/le4.jpeg", "/Shopify Drinks and More/s2.jpeg", "/Shopify Drinks and More/s3.jpeg"],
  },
  {
    title: "Print-ready details",
    description:
      "Additional samples showing how the design system holds up across different formats.",
    images: ["/Leyony Travels/le5.jpeg", "/Shopify Drinks and More/s4.jpeg", "/Leyony Travels/le6.jpeg"],
  },
];

export default function BulkGraphicsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f5f1] text-[#141414]">
      <Navbar variant="solid" />
      <ServicePageLayout
        iconGradient="from-orange-50 via-red-50 to-white"
        badge="Bulk Graphics Design"
        title="Print ready designs for campaigns, events, and corporate needs."
        description="We design professional graphics that keep your business consistent across print and digital touchpoints."
        heroImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
        heroImageAlt="Designing print graphics"
        deliverables={deliverables}
        highlights={highlights}
        pricing={pricing}
        addOns={addOns}
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
      />
      <Footer />
    </div>
  );
}
