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
    <section
      className="hero-section relative flex flex-col"
      style={{
        paddingTop: "calc(80px + env(safe-area-inset-top, 0px))",
        paddingBottom: "calc(24px + env(safe-area-inset-bottom, 0px))",
      }}
    >
      {/* Media: stacked block on mobile, full background on desktop */}
      <div className="relative z-0 aspect-[4/3] sm:aspect-[16/9] md:absolute md:inset-0 md:aspect-auto">
        <img
          src={heroImage}
          alt="Signature d'acte notarié"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "saturate(0.85)" }}
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(215 30% 12% / 0.85) 0%, hsl(215 26% 18% / 0.75) 50%, hsl(215 26% 22% / 0.7) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container-wide px-4 sm:px-6 pt-0 pb-6 md:py-8 lg:py-16">
          <PremiumPlate
            align="center"
            className="w-full max-w-[560px] md:max-w-2xl lg:max-w-3xl mt-[-24px] md:mt-0 p-5 sm:p-6 md:p-10 lg:p-12 md:mx-0 md:mr-auto"
          >
            {/* Subtitle */}
            <p className="text-accent text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-medium animate-fade-up">
              Sortie d'indivision
            </p>

            {/* Main Title */}
            <h1
              className="font-serif text-[1.875rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-foreground font-semibold leading-tight mb-4 sm:mb-5 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Rachat de parts indivises —{" "}
              <span className="text-accent">sortie d'indivision encadrée</span>
            </h1>

            {/* Description */}
            <p
              className="text-[0.95rem] sm:text-base md:text-lg text-primary-foreground/85 leading-relaxed mb-6 sm:mb-8 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Société 100% spécialisée. Expertise fondée sur des milliers de cas,
              formalisme article 815, approche humaine et discrète.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <Button
                variant="gold"
                size="lg"
                className="w-full min-h-12 sm:w-auto"
                asChild
              >
                <Link to="/contact">
                  Demander une étude de rachat
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="w-full min-h-12 sm:w-auto text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <Link to="/contact#rappel">
                  <Phone className="w-5 h-5" />
                  Être rappelé
                </Link>
              </Button>
            </div>

            {/* Trust Bar */}
            <div
              className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 sm:pt-6 border-t border-primary-foreground/15 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              {trustItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-primary-foreground/80"
                >
                  <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-[0.8125rem] sm:text-sm font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </PremiumPlate>
        </div>
      </div>

      {/* Legal quote */}
      <div className="relative z-10 mt-6 md:mt-auto">
        <div className="container-wide px-4 sm:px-6 py-4 sm:py-5">
          <p className="text-xs sm:text-sm text-primary-foreground/60 font-serif italic">
            « Nul ne peut être contraint à demeurer dans l'indivision » — Art. 815 du Code civil
          </p>
        </div>
      </div>
    </section>
  );
}
