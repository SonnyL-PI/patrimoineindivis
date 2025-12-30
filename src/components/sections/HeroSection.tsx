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
            filter: "brightness(1.05) saturate(1.05)",
          }}
          loading="eager"
        />

        {/* Full-height overlay - uniform reading zone */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(180deg,
                hsl(215 32% 10% / 0.7) 0%,
                hsl(215 30% 12% / 0.75) 40%,
                hsl(215 28% 10% / 0.85) 70%,
                hsl(215 30% 8% / 0.92) 100%
              )
            `,
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 px-6 pb-6"
          style={{
            paddingBottom: "calc(24px + env(safe-area-inset-bottom, 0px))",
          }}
        >
          {/* Sur-titre */}
          <p className="text-accent text-xs tracking-[0.18em] uppercase font-bold mb-2 animate-fade-up">
            Sortir de l'indivision
          </p>

          {/* Accroche */}
          <p
            className="text-white text-base font-medium mb-2 animate-fade-up"
            style={{ animationDelay: "50ms" }}
          >
            Vous souhaitez sortir de l'indivision ?
          </p>

          {/* H1 */}
          <h1
            className="font-serif text-[1.875rem] text-white font-bold leading-[1.1] mb-3 animate-fade-up tracking-[-0.01em]"
            style={{
              animationDelay: "100ms",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            Vendez vos parts indivises
          </h1>

          {/* Sous-titre */}
          <p
            className="text-white font-semibold text-lg mb-5 animate-fade-up"
            style={{
              animationDelay: "150ms",
              textShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            <span className="text-accent">Achat ou rachat</span> de parts indivises
          </p>

          {/* Paragraphe - 2 lignes visuelles */}
          <div className="mb-6 animate-fade-up max-w-[340px]" style={{ animationDelay: "200ms" }}>
            <p className="text-[15px] text-white leading-[1.65] mb-2">
              Patrimoine Indivis, première société en France dans le volume d'achat de parts indivises.
            </p>
            <p className="text-[15px] text-white leading-[1.65]">
              100% dédié à l'achat de vos parts indivises. 95% des biens achetés en indivision sur tout le territoire.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 mb-4 animate-fade-up" style={{ animationDelay: "250ms" }}>
            <Button
              variant="gold"
              size="lg"
              className="w-full min-h-[52px] text-[15px] font-semibold shadow-lg"
              asChild
            >
              <Link to="/contact">
                Demander une étude
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="w-full min-h-[52px] text-[15px] font-semibold text-white bg-white/20 border-2 border-white/70 hover:bg-white/30 hover:border-white shadow-md backdrop-blur-sm"
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
            className="text-sm text-white text-center mb-5 font-medium animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            Étude confidentielle — Réponse rapide
          </p>

          {/* Trust badges */}
          <div
            className="grid grid-cols-2 gap-x-5 gap-y-3 pt-5 border-t border-white/30 animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <badge.icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-[13px] text-white font-semibold">{badge.text}</span>
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
            filter: "brightness(1.05) saturate(1.02)",
          }}
        />

        {/* Reading zone overlay - strong left side gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(100deg,
                hsl(215 32% 8% / 0.92) 0%,
                hsl(215 30% 10% / 0.88) 15%,
                hsl(215 28% 12% / 0.8) 28%,
                hsl(215 26% 15% / 0.65) 40%,
                hsl(215 24% 18% / 0.45) 52%,
                hsl(215 22% 22% / 0.2) 65%,
                transparent 80%
              )
            `,
          }}
        />

        {/* Additional bottom fade for badges area */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background: "linear-gradient(to top, hsl(215 30% 10% / 0.6) 0%, transparent 100%)",
          }}
        />

        {/* Content - left aligned */}
        <div className="container-wide relative z-10 py-12 lg:py-16">
          <div className="max-w-[540px] lg:max-w-[580px]">
            {/* Sur-titre */}
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-bold mb-4 animate-fade-up">
              Sortir de l'indivision
            </p>

            {/* Accroche */}
            <p
              className="text-white text-lg md:text-xl font-medium mb-3 animate-fade-up"
              style={{ animationDelay: "50ms" }}
            >
              Vous souhaitez sortir de l'indivision ?
            </p>

            {/* H1 */}
            <h1
              className="font-serif text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem] text-white font-bold leading-[1.05] mb-4 animate-fade-up tracking-[-0.015em]"
              style={{
                animationDelay: "100ms",
                textShadow: "0 3px 12px rgba(0,0,0,0.35)",
              }}
            >
              Vendez vos parts indivises
            </h1>

            {/* Sous-titre */}
            <p
              className="text-white font-semibold text-xl md:text-2xl lg:text-[1.625rem] mb-6 animate-fade-up"
              style={{
                animationDelay: "150ms",
                textShadow: "0 2px 6px rgba(0,0,0,0.25)",
              }}
            >
              <span className="text-accent">Achat ou rachat</span> de parts indivises
            </p>

            {/* Paragraphe - 2 lignes visuelles */}
            <div
              className="mb-8 animate-fade-up max-w-[480px]"
              style={{ animationDelay: "200ms" }}
            >
              <p className="text-[17px] md:text-lg text-white leading-[1.7] mb-2">
                Patrimoine Indivis, première société en France dans le volume d'achat de parts indivises.
              </p>
              <p className="text-[17px] md:text-lg text-white leading-[1.7]">
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
                className="w-full sm:w-auto px-8 text-base font-semibold shadow-xl"
                asChild
              >
                <Link to="/contact">
                  Demander une étude
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="xl"
                className="w-full sm:w-auto px-8 text-base font-semibold text-white bg-white/20 border-2 border-white/80 hover:bg-white/30 hover:border-white shadow-lg backdrop-blur-sm"
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
              style={{ animationDelay: "300ms" }}
            >
              Étude confidentielle — Réponse rapide
            </p>

            {/* Trust badges */}
            <div
              className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-white/40 animate-fade-up"
              style={{ animationDelay: "350ms" }}
            >
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <badge.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-[15px] text-white font-semibold">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal quote - bottom */}
        <div className="relative z-10 mt-auto">
          <div className="container-wide py-4">
            <p className="text-sm text-white/70 font-serif italic">
              « Nul ne peut être contraint à demeurer dans l'indivision » — Art. 815 du Code civil
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
