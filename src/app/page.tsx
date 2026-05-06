import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import ElevateSection from "@/components/sections/ElevateSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkShowcaseSection from "@/components/sections/WorkShowcaseSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f5f1] text-[#141414]">
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <ElevateSection />
      <ServicesSection />
      <WorkShowcaseSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
