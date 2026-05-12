import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "FAQ | Zenith Multipurposes",
  description:
    "Find quick answers about branding, web design, social media, graphics, and automation.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAFA] text-[#1A1A1A]">
      <Navbar variant="solid" />
      <main>
        <div className="pt-24 md:pt-28"><FaqSection /></div>
      </main>
      <Footer />
    </div>
  );
}
