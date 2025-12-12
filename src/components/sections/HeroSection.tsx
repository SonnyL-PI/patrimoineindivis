import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Scale, Handshake } from "lucide-react";
import { PremiumPlate } from "@/components/ui/PremiumPlate";
import heroImage from "@/assets/hero-signature.jpg";

const trustItems = [
  { icon: Shield, text: "100% spécialisé" },
  { icon: Scale, text: "Article 815" },
  { icon: Handshake, text: "Offre ferme + accompagnement" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Signature d'acte notarié"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.85)" }}
        />
        {/* Navy gradient overlay - darker at top */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsl(215 30% 12% / 0.85) 0%, hsl(215 26% 18% / 0.75) 50%, hsl(215 26% 22% / 0.7) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-16 lg:py-24">
        <PremiumPlate className="max-w-2xl lg:max-w-3xl" align="left">
          {/* Subtitle */}
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4 font-medium animate-fade-up">
            Sortie d'indivision
          </p>

          {/* Main Title */}
          <h1 
            className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-foreground font-semibold leading-tight mb-5 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Rachat de parts indivises —{" "}
            <span className="text-accent">sortie d'indivision encadrée</span>
          </h1>

          {/* Description */}
          <p 
            className="text-base md:text-lg text-primary-foreground/85 leading-relaxed mb-8 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Société 100% spécialisée. Expertise fondée sur des milliers de cas, 
            formalisme article 815, approche humaine et discrète.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Demander une étude de rachat
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link to="/contact#rappel">
                <Phone className="w-5 h-5" />
                Être rappelé
              </Link>
            </Button>
          </div>

          {/* Trust Bar - inside plate */}
          <div 
            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-primary-foreground/15 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            {trustItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </PremiumPlate>
      </div>

      {/* Legal quote - bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container-wide py-5">
          <p className="text-sm text-primary-foreground/60 font-serif italic">
            « Nul ne peut être contraint à demeurer dans l'indivision » — Art. 815 du Code civil
          </p>
        </div>
      </div>
    </section>
  );
}
