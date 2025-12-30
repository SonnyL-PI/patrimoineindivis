import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Calendar, Award, CheckCircle2, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-haussmann.jpg";

const trustBadges = [
  {
    icon: Calendar,
    text: "Créé en 2017",
  },
  {
    icon: Award,
    text: "1ère société en France",
  },
  {
    icon: CheckCircle2,
    text: "100% dédié",
  },
  {
    icon: MapPin,
    text: "Tout le territoire",
  },
];

export function HeroSection() {
  return (
    <>
      {/* Mobile (<768px) */}
      <section
        className="md:hidden relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden"
        style={{
          paddingTop: "calc(72px + env(safe-area-inset-top, 0px))",
        }}
      >
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Façade immeuble haussmannien – Paris"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            filter: "brightness(1.1) saturate(1.05)",
          }}
          loading="eager"
        />

        {/* Strong localized gradient overlay for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, hsl(215 30% 10% / 0.92) 0%, hsl(215 30% 12% / 0.85) 30%, hsl(215 30% 15% / 0.6) 50%, hsl(215 30% 20% / 0.25) 70%, transparent 90%)",
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 px-5 pb-8"
          style={{
            paddingBottom: "calc(28px + env(safe-area-inset-bottom, 0px))",
          }}
        >
          {/* Sur-titre */}
          <p 
            className="text-accent text-[11px] tracking-[0.2em] uppercase font-bold mb-2 animate-fade-up"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
          >
            Sortir de l'indivision
          </p>

          {/* Accroche */}
          <p
            className="text-white text-sm font-medium mb-2 animate-fade-up"
            style={{ animationDelay: "50ms", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
          >
            Vous souhaitez sortir de l'indivision ?
          </p>

          {/* H1 */}
          <h1
            className="font-serif text-[1.875rem] sm:text-[2.125rem] text-white font-bold leading-[1.1] mb-3 animate-fade-up"
            style={{ 
              animationDelay: "100ms",
              textShadow: "0 2px 8px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.3)"
            }}
          >
            Vendez vos parts indivises
          </h1>

          {/* Sous-titre - white for better contrast */}
          <p
            className="text-accent font-bold text-lg mb-5 animate-fade-up"
            style={{ 
              animationDelay: "150ms",
              textShadow: "0 1px 4px rgba(0,0,0,0.6)"
            }}
          >
            Achat ou rachat de parts indivises
          </p>

          {/* Paragraphe - structured in 2 visual lines */}
          <div
            className="mb-6 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <p 
              className="text-[15px] text-white font-medium leading-relaxed mb-1.5 max-w-[380px]"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
            >
              Patrimoine Indivis, première société en France dans le volume d'achat de parts indivises.
            </p>
            <p 
              className="text-[15px] text-white font-medium leading-relaxed max-w-[380px]"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
            >
              100% dédié à l'achat de vos parts indivises. 95% des biens achetés en indivision sur tout le territoire.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col gap-3 mb-4 animate-fade-up"
            style={{ animationDelay: "250ms" }}
          >
            <Button 
              variant="gold" 
              size="lg" 
              className="w-full min-h-12 text-base shadow-lg" 
              asChild
            >
              <Link to="/contact">
                Demander une étude
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="w-full min-h-12 text-white border-2 border-white/60 bg-white/10 hover:bg-white/20 hover:text-white hover:border-white/80 backdrop-blur-sm shadow-md"
              asChild
            >
              <Link to="/contact#rappel">
                <Phone className="w-5 h-5" />
                Être rappelé
              </Link>
            </Button>
          </div>

          {/* Micro-texte */}
          <p
            className="text-[13px] text-white/90 text-center mb-5 font-medium animate-fade-up"
            style={{ animationDelay: "300ms", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
          >
            Étude confidentielle — Réponse rapide
          </p>

          {/* Trust badges */}
          <div
            className="grid grid-cols-2 gap-x-4 gap-y-2.5 pt-4 border-t border-white/30 animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white"
              >
                <badge.icon className="w-4 h-4 text-accent flex-shrink-0" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }} />
                <span 
                  className="text-[12px] font-semibold"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
                >
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop (>=768px) */}
      <section
        className="relative hidden md:flex flex-col justify-center min-h-[100svh] overflow-hidden"
        style={{
          paddingTop: "calc(80px + env(safe-area-inset-top, 0px))",
          paddingBottom: "calc(32px + env(safe-area-inset-bottom, 0px))",
        }}
      >
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Façade immeuble haussmannien – Paris"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(1.08) saturate(1.05)",
          }}
        />

        {/* Strong localized gradient overlay - left side reading zone */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(95deg, 
                hsl(215 32% 8% / 0.88) 0%, 
                hsl(215 30% 10% / 0.8) 20%, 
                hsl(215 28% 15% / 0.65) 35%, 
                hsl(215 26% 20% / 0.4) 50%, 
                hsl(215 24% 25% / 0.15) 65%, 
                transparent 80%
              )
            `,
          }}
        />

        {/* Content - left aligned with strong contrast */}
        <div className="container-wide relative z-10 py-12 lg:py-16">
          <div className="max-w-xl lg:max-w-[580px]">
            {/* Sur-titre */}
            <p 
              className="text-accent text-sm tracking-[0.2em] uppercase font-bold mb-3 animate-fade-up"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
            >
              Sortir de l'indivision
            </p>

            {/* Accroche */}
            <p
              className="text-white text-lg md:text-xl font-medium mb-3 animate-fade-up"
              style={{ animationDelay: "50ms", textShadow: "0 1px 5px rgba(0,0,0,0.5)" }}
            >
              Vous souhaitez sortir de l'indivision ?
            </p>

            {/* H1 - strong weight + shadow */}
            <h1
              className="font-serif text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] text-white font-bold leading-[1.05] mb-4 animate-fade-up"
              style={{ 
                animationDelay: "100ms",
                textShadow: "0 3px 12px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.4)"
              }}
            >
              Vendez vos parts indivises
            </h1>

            {/* Sous-titre - bold gold with shadow */}
            <p
              className="text-accent font-bold text-xl md:text-2xl lg:text-[1.625rem] mb-6 animate-fade-up"
              style={{ 
                animationDelay: "150ms",
                textShadow: "0 2px 6px rgba(0,0,0,0.6)"
              }}
            >
              Achat ou rachat de parts indivises
            </p>

            {/* Paragraphe - structured in 2 visual blocks */}
            <div
              className="mb-8 animate-fade-up max-w-lg"
              style={{ animationDelay: "200ms" }}
            >
              <p 
                className="text-[17px] md:text-lg text-white font-medium leading-[1.6] mb-2"
                style={{ textShadow: "0 1px 5px rgba(0,0,0,0.5)" }}
              >
                Patrimoine Indivis, première société en France dans le volume d'achat de parts indivises.
              </p>
              <p 
                className="text-[17px] md:text-lg text-white font-medium leading-[1.6]"
                style={{ textShadow: "0 1px 5px rgba(0,0,0,0.5)" }}
              >
                100% dédié à l'achat de vos parts indivises. 95% des biens achetés en indivision sur tout le territoire.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-4 animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              <Button
                variant="gold"
                size="xl"
                className="w-full sm:w-auto px-8 text-base shadow-xl"
                asChild
              >
                <Link to="/contact">
                  Demander une étude
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="xl"
                className="w-full sm:w-auto px-8 text-white border-2 border-white/70 bg-white/10 hover:bg-white/25 hover:text-white hover:border-white backdrop-blur-sm shadow-lg"
                asChild
              >
                <Link to="/contact#rappel">
                  <Phone className="w-5 h-5" />
                  Être rappelé
                </Link>
              </Button>
            </div>

            {/* Micro-texte */}
            <p
              className="text-[15px] text-white font-medium mb-8 animate-fade-up"
              style={{ animationDelay: "300ms", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
            >
              Étude confidentielle — Réponse rapide
            </p>

            {/* Trust badges */}
            <div
              className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-6 border-t border-white/35 animate-fade-up"
              style={{ animationDelay: "350ms" }}
            >
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 text-white"
                >
                  <badge.icon 
                    className="w-5 h-5 text-accent flex-shrink-0" 
                    style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))" }}
                  />
                  <span 
                    className="text-sm font-semibold"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                  >
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal quote - bottom */}
        <div className="relative z-10 mt-auto">
          <div className="container-wide py-4">
            <p 
              className="text-sm text-white/70 font-serif italic"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
            >
              « Nul ne peut être contraint à demeurer dans l'indivision » — Art. 815 du Code civil
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
