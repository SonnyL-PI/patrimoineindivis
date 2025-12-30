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
        {/* Background Image - brighter */}
        <img
          src={heroImage}
          alt="Façade immeuble haussmannien – Paris"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            filter: "brightness(1.15) saturate(1.1)",
          }}
          loading="eager"
        />

        {/* Localized gradient overlay - only at bottom for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, hsl(215 28% 18% / 0.85) 0%, hsl(215 28% 20% / 0.6) 35%, hsl(215 28% 25% / 0.15) 60%, transparent 80%)",
          }}
        />

        {/* Content - directly on image */}
        <div
          className="relative z-10 px-5 pb-8"
          style={{
            paddingBottom: "calc(24px + env(safe-area-inset-bottom, 0px))",
          }}
        >
          {/* Sur-titre */}
          <p className="text-accent text-[11px] tracking-[0.2em] uppercase font-bold mb-2 animate-fade-up">
            Sortir de l'indivision
          </p>

          {/* Accroche */}
          <p
            className="text-white/90 text-sm mb-2 animate-fade-up"
            style={{ animationDelay: "50ms" }}
          >
            Vous souhaitez sortir de l'indivision ?
          </p>

          {/* H1 */}
          <h1
            className="font-serif text-[1.75rem] sm:text-[2rem] text-white font-bold leading-[1.15] mb-2 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Vendez vos parts indivises
          </h1>

          {/* Sous-titre */}
          <p
            className="text-accent font-semibold text-base mb-4 animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            Achat ou rachat de parts indivises
          </p>

          {/* Paragraphe */}
          <p
            className="text-sm text-white/85 leading-relaxed mb-6 max-w-md animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Patrimoine Indivis, première société en France dans le volume d'achat de parts indivises. 
            100% dédié à l'achat de vos parts indivises. 95% des biens achetés en indivision sur tout le territoire.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col gap-3 mb-3 animate-fade-up"
            style={{ animationDelay: "250ms" }}
          >
            <Button variant="gold" size="lg" className="w-full min-h-12 text-base" asChild>
              <Link to="/contact">
                Demander une étude
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="w-full min-h-12 text-white border border-white/40 hover:bg-white/10 hover:text-white"
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
            className="text-[11px] text-white/70 text-center mb-5 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            Étude confidentielle — Réponse rapide
          </p>

          {/* Trust badges */}
          <div
            className="grid grid-cols-2 gap-x-4 gap-y-2 pt-4 border-t border-white/20 animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90"
              >
                <badge.icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span className="text-[11px] font-medium">{badge.text}</span>
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
        {/* Background Image - brighter */}
        <img
          src={heroImage}
          alt="Façade immeuble haussmannien – Paris"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(1.12) saturate(1.08)",
          }}
        />

        {/* Localized gradient overlay - concentrated on left side for text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(100deg, hsl(215 28% 12% / 0.8) 0%, hsl(215 28% 15% / 0.65) 30%, hsl(215 28% 20% / 0.35) 50%, hsl(215 28% 25% / 0.1) 65%, transparent 80%)",
          }}
        />

        {/* Content - directly on image, left aligned */}
        <div className="container-wide relative z-10 py-12 lg:py-16">
          <div className="max-w-2xl lg:max-w-[640px]">
            {/* Sur-titre */}
            <p className="text-accent text-xs sm:text-sm tracking-[0.2em] uppercase font-bold mb-3 animate-fade-up">
              Sortir de l'indivision
            </p>

            {/* Accroche */}
            <p
              className="text-white/85 text-base md:text-lg mb-3 animate-fade-up"
              style={{ animationDelay: "50ms" }}
            >
              Vous souhaitez sortir de l'indivision ?
            </p>

            {/* H1 */}
            <h1
              className="font-serif text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] text-white font-bold leading-[1.1] mb-3 animate-fade-up drop-shadow-sm"
              style={{ animationDelay: "100ms" }}
            >
              Vendez vos parts indivises
            </h1>

            {/* Sous-titre */}
            <p
              className="text-accent font-bold text-lg md:text-xl lg:text-2xl mb-5 animate-fade-up"
              style={{ animationDelay: "150ms" }}
            >
              Achat ou rachat de parts indivises
            </p>

            {/* Paragraphe */}
            <p
              className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-xl animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Patrimoine Indivis, première société en France dans le volume d'achat de parts indivises. 
              100% dédié à l'achat de vos parts indivises. 95% des biens achetés en indivision sur tout le territoire.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-3 animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              <Button
                variant="gold"
                size="xl"
                className="w-full sm:w-auto px-8 text-base"
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
                className="w-full sm:w-auto px-8 text-white border border-white/40 hover:bg-white/15 hover:text-white hover:border-white/60"
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
              className="text-sm text-white/70 mb-8 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              Étude confidentielle — Réponse rapide
            </p>

            {/* Trust badges */}
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/25 animate-fade-up"
              style={{ animationDelay: "350ms" }}
            >
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white/90"
                >
                  <badge.icon className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal quote - bottom */}
        <div className="relative z-10 mt-auto">
          <div className="container-wide py-4">
            <p className="text-sm text-white/60 font-serif italic">
              « Nul ne peut être contraint à demeurer dans l'indivision » — Art. 815 du Code civil
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
