import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Social Media Management | Zenith Multipurposes",
  description:
    "Social media setup, branding, and management across platforms including YouTube.",
};

const deliverables = [
  {
    title: "Platform Setup & Branding",
    description:
      "Professional setup of your social profiles — bios, cover images, profile photos, and branded visuals aligned with your corporate identity.",
  },
  {
    title: "Content Strategy",
    description:
      "A clear content direction tailored to your audience, industry, and business goals.",
  },
  {
    title: "Content Creation & Scheduling",
    description:
      "Graphics, captions, and posts created and scheduled consistently to keep your platforms active and engaging.",
  },
  {
    title: "Account Management",
    description:
      "Regular monitoring, engagement, and updates so your social presence stays relevant and responsive.",
  },
  {
    title: "Performance Reporting",
    description:
      "Clear, straightforward reporting on how your accounts are growing and what's working.",
  },
];

const pricing = [
  {
    name: "Social Setup Only (All Platforms) – one time",
    price: "₦40,000 – ₦60,000",
    items: [
      "Setup or clean up of IG, FB, TikTok, LinkedIn, X, and YT branding",
      "Bios, profile optimization, highlight covers, banners, cover graphics",
    ],
  },
  {
    name: "Monthly Social Media Lite – for small local businesses",
    price: "₦70,000 – ₦100,000 per month",
    items: [
      "Up to 10 posts per month across 1–2 platforms",
      "Graphics + captions",
      "Basic DM/comment monitoring",
    ],
  },
  {
    name: "YouTube Channel Operations (Basic)",
    price: "₦100,000 – ₦150,000 per month",
    items: [
      "Upload management, descriptions, tags",
      "8–12 thumbnails per month",
      "Basic title & SEO optimization",
    ],
  },
];

const showcaseCards = [
  {
    title: "Platform branding",
    description:
      "Profile-ready visuals and cover assets that make social channels feel coordinated.",
    images: ["/Eminent Autos/em7.jpeg", "/Eminent Autos/em8.jpeg"],
  },
  {
    title: "Campaign content",
    description:
      "Social post graphics that keep the message clear and the feed visually consistent.",
    images: ["/Eminent Autos/em9.jpeg", "/Trendy Shoes/tr2.jpeg"],
  },
  {
    title: "Short-form support",
    description:
      "Extra visuals for promotions, launches, and campaign follow-ups.",
    images: ["/Trendy Shoes/tr3.jpeg"],
  },
];

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f5f1] text-[#141414]">
      <Navbar variant="solid" />
      <ServicePageLayout
        iconGradient="from-blue-50 via-cyan-50 to-white"
        badge="Social Media Management"
        title="Social media that engages and grows"
        description="Strategic content and management that builds your audience"
        heroImage="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80"
        heroImageAlt="Social media content planning"
        deliverables={deliverables}
        whatWeDo="We set up, brand, and manage your social media platforms so your business maintains a professional, consistent presence online — without you having to think about it. This includes Facebook, Instagram, X (Twitter), LinkedIn, TikTok, YouTube, and WhatsApp Business, with support for other platforms where relevant to your audience."
        whoThisIsFor={[
          "Businesses with no social media presence that need a proper setup",
          "Companies with inactive or inconsistent accounts that need to be revived",
          "Brands that want professionally managed content without hiring in-house",
          "Organizations that understand the value of social media but don't have the time to manage it",
        ]}
        pricing={pricing}
        whyItMatters="An inactive or poorly managed social media account sends the wrong message. Clients and partners check your socials — and what they find either builds confidence or raises doubt. A well-managed presence builds credibility, keeps your audience engaged, and creates a consistent pipeline of visibility for your business."
        whyZenithMultipurposes="We understand both the creative and strategic sides of social media. We don't just post content — we build a presence that reflects your brand accurately and consistently across every platform."
        showcaseTitle="Social media showcase"
        showcaseDescription="A visual sample of the kind of branded content, covers, and campaign assets we build for active social platforms."
        showcaseCards={showcaseCards}
        pastWorksTitle="Social media branding and content samples."
        pastWorksDescription="Request curated examples of social profiles, templates, and YouTube assets tailored to your industry."
        pastWorksLinks={[
          {
            label: "View Past Works",
            href: "mailto:Dzmultipurposes@gmail.com?subject=Social%20Media%20Past%20Works%20Request",
            type: "email",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
