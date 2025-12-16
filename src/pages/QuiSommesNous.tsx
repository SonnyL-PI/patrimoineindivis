import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default QuiSommesNous;
