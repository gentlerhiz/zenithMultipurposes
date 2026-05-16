import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "FAQ | Zenith Multipurposes",
  description:
    "Find quick answers about branding, web design, social media, graphics, and automation.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-off-white text-text-primary">
      <Navbar variant="solid" />
      <main>
        <div className="pt-6 md:pt-8"><FaqSection /></div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
