import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SituationsSection } from "@/components/sections/SituationsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { PropositionSection } from "@/components/sections/PropositionSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SituationsSection />
        <WhyUsSection />
        <PropositionSection />
        <AdvantagesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
