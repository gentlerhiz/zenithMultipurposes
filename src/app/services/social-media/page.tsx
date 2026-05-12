import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Social Media Management | Zenith Multipurposes",
  description:
    "Social media setup, branding, and management across platforms including YouTube.",
};

const deliverables = [
  "Profile setup or cleanup across IG, FB, TikTok, LinkedIn, X, and YouTube",
  "Branding assets like banners, highlight covers, and profile visuals",
  "Content planning with graphics and captions",
  "Monthly monitoring and engagement support",
  "YouTube upload management, thumbnails, and SEO basics",
];

const highlights = [
  {
    title: "Consistent posting",
    description:
      "Stay visible with a steady stream of branded content and captions.",
  },
  {
    title: "Platform ready branding",
    description:
      "We align your visuals across Instagram, Facebook, TikTok, LinkedIn, X, and YouTube.",
  },
  {
    title: "Growth focused execution",
    description:
      "Community support and basic analytics keep your presence improving.",
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

const addOns = [
  "YouTube + Multi Platform Growth Pack: From ₦180,000 per month",
  "Full YT publishing + repurposed clips to TikTok/IG Reels/Facebook",
  "Thumbnails, community posts, and basic strategy",
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
        iconName="megaphone"
        iconGradient="from-blue-50 via-cyan-50 to-white"
        badge="Social Media Management"
        title="Consistent social presence across all platforms."
        description="We handle setup, branding, and content delivery so your business stays visible, credible, and organized online."
        heroImage="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80"
        heroImageAlt="Social media content planning"
        heroCaption="Profile setup, branded visuals, and content delivery for IG, FB, TikTok, LinkedIn, X, and YouTube."
        deliverables={deliverables}
        highlights={highlights}
        pricing={pricing}
        addOns={addOns}
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
