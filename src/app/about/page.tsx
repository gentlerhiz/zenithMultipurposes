import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/sections/AboutHeroSection";
import AboutIntroSection from "@/components/sections/AboutIntroSection";
import AboutStatsSection from "@/components/sections/AboutStatsSection";
import AboutHistorySection from "@/components/sections/AboutHistorySection";
import AboutCEOSection from "@/components/sections/AboutCEOSection";
import AboutOperationsSection from "@/components/sections/AboutOperationsSection";

export const metadata: Metadata = {
  title: "About Us | Zenith Multipurposes",
  description:
    "Learn about Zenith Multipurposes, our history, leadership, and how we deliver modern business support services.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAFA] text-[#1A1A1A]">
      <Navbar variant="solid" />
      <main>
        <AboutHeroSection />
        <AboutIntroSection />
        <AboutStatsSection />
        {/* <AboutHistorySection /> */}
        <AboutCEOSection />
        <AboutOperationsSection />
      </main>
      <Footer />
    </div>
  );
}
