import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ElevateSection from "@/components/sections/ElevateSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingPreviewSection from "@/components/sections/PricingPreviewSection";
import WorkShowcaseSection from "@/components/sections/WorkShowcaseSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-off-white text-text-primary">
      <Navbar />
      <HeroSection />
      <ElevateSection />
      <ServicesSection />
      <WhyUsSection />
      <PricingPreviewSection />
      <WorkShowcaseSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
