import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Scale, Handshake } from "lucide-react";
import heroImage from "@/assets/hero-signature.jpg";

const trustItems = [
  {
    icon: Shield,
    text: "100% spécialisé en parts indivises",
  },
  {
    icon: Scale,
    text: "Procédure encadrée (article 815)",
  },
  {
    icon: Handshake,
    text: "Offre ferme + accompagnement",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Signature d'acte notarié"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/75 to-navy/65" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <p className="text-accent text-sm md:text-base tracking-[0.2em] uppercase mb-6 animate-fade-up font-medium">
            Sortie d'indivision
          </p>

          {/* Main Title */}
          <h1 
            className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground font-normal leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Rachat de parts indivises — <br className="hidden md:block" />
            <span className="text-accent">sortie d'indivision encadrée</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 animate-fade-up max-w-2xl"
            style={{ animationDelay: "200ms" }}
          >
            Société 100% spécialisée. Expertise sur des milliers de cas, 
            formalisme article 815, approche humaine et discrète.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Demander une étude gratuite
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

          {/* Legal quote */}
          <p 
            className="text-sm text-accent font-serif italic animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            « Nul ne peut être contraint à demeurer dans l'indivision » — Art. 815 du Code civil
          </p>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy/95 backdrop-blur-sm border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center gap-3 text-primary-foreground/90"
              >
                <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
