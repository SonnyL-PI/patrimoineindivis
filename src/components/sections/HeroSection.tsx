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
          paddingTop: "calc(88px + env(safe-area-inset-top, 0px))",
        }}
      >
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Façade immeuble haussmannien – Paris"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            filter: "brightness(1.02) saturate(1.02)",
          }}
          loading="eager"
        />

        {/* Strong overlay for mobile */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(180deg,
                hsl(215 32% 8% / 0.65) 0%,
                hsl(215 30% 10% / 0.75) 35%,
                hsl(215 28% 8% / 0.88) 65%,
                hsl(215 30% 6% / 0.95) 100%
              )
            `,
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 px-6 pt-6 pb-6"
          style={{
            paddingBottom: "calc(28px + env(safe-area-inset-bottom, 0px))",
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
            className="font-serif text-[2rem] text-white font-bold leading-[1.08] mb-3 animate-fade-up"
            style={{
              animationDelay: "100ms",
              textShadow: "0 3px 12px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            Vendez vos parts indivises
          </h1>

          {/* Sous-titre */}
          <p
            className="text-accent font-bold text-xl mb-5 animate-fade-up"
            style={{
              animationDelay: "150ms",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            Rachat de parts indivises
          </p>

          {/* Paragraphe - 2 lignes */}
          <div className="mb-6 animate-fade-up max-w-[360px]" style={{ animationDelay: "200ms" }}>
            <p className="text-[15px] text-white leading-[1.7] mb-2">
              Patrimoine Indivis, première société en France dans le volume d'achat de parts indivises.
            </p>
            <p className="text-[15px] text-white leading-[1.7]">
              100% dédié à l'achat de vos parts indivises. 95% des biens achetés en indivision sur tout le territoire.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 mb-4 animate-fade-up" style={{ animationDelay: "250ms" }}>
            <Button
              variant="gold"
              size="lg"
              className="w-full min-h-[56px] text-base font-bold shadow-xl"
              asChild
            >
              <Link to="/contact">
                Demander une étude
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="w-full min-h-[56px] text-base font-semibold text-white bg-white/25 border-2 border-white hover:bg-white/35 shadow-lg backdrop-blur-sm"
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
            className="grid grid-cols-2 gap-x-5 gap-y-3 pt-5 border-t border-white/35 animate-fade-up"
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

      {/* Desktop (>=768px) - BIGGER & MORE IMPACTFUL */}
      <section
        className="relative hidden md:flex flex-col justify-center overflow-hidden"
        style={{
          minHeight: "90vh",
          paddingTop: "calc(80px + env(safe-area-inset-top, 0px))",
          paddingBottom: "calc(40px + env(safe-area-inset-bottom, 0px))",
        }}
      >
        {/* Background Image with subtle blur in text zone */}
        <img
          src={heroImage}
          alt="Façade immeuble haussmannien – Paris"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(1.0) saturate(1.0)",
          }}
        />

        {/* Strong reading zone overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(98deg,
                hsl(215 35% 5% / 0.95) 0%,
                hsl(215 32% 8% / 0.92) 18%,
                hsl(215 30% 10% / 0.85) 32%,
                hsl(215 28% 12% / 0.7) 45%,
                hsl(215 26% 15% / 0.5) 55%,
                hsl(215 24% 18% / 0.25) 68%,
                transparent 85%
              )
            `,
          }}
        />

        {/* Bottom fade for badges */}
        <div
          className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none"
          style={{
            background: "linear-gradient(to top, hsl(215 32% 8% / 0.7) 0%, transparent 100%)",
          }}
        />

        {/* Content - wider zone for single-line H1 */}
        <div className="relative z-10 py-16 lg:py-20 px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1600px] mx-auto w-full">
          <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            {/* Sur-titre */}
            <p className="text-accent text-sm lg:text-base tracking-[0.2em] uppercase font-bold mb-4 animate-fade-up">
              Sortir de l'indivision
            </p>

            {/* Accroche */}
            <p
              className="text-white text-lg lg:text-xl xl:text-2xl font-medium mb-4 animate-fade-up"
              style={{ animationDelay: "50ms" }}
            >
              Vous souhaitez sortir de l'indivision ?
            </p>

            {/* H1 - sized to fit on ONE line */}
            <h1
              className="font-serif text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem] 2xl:text-[4.75rem] text-white font-bold leading-[1.0] mb-5 animate-fade-up whitespace-nowrap"
              style={{
                animationDelay: "100ms",
                textShadow: "0 4px 20px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.35)",
              }}
            >
              Vendez vos parts indivises
            </h1>

            {/* Sous-titre */}
            <p
              className="text-accent font-bold text-xl lg:text-2xl xl:text-[1.75rem] mb-8 animate-fade-up"
              style={{
                animationDelay: "150ms",
                textShadow: "0 2px 10px rgba(0,0,0,0.45)",
              }}
            >
              Rachat de parts indivises
            </p>

            {/* Paragraphe */}
            <div
              className="mb-10 animate-fade-up max-w-2xl relative"
              style={{ animationDelay: "200ms" }}
            >
              {/* Subtle reading band */}
              <div
                className="absolute -inset-x-4 -inset-y-3 rounded-lg pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, hsl(215 30% 8% / 0.35) 0%, hsl(215 30% 10% / 0.15) 70%, transparent 100%)",
                }}
              />
              <div className="relative">
                <p className="text-base lg:text-lg xl:text-xl text-white leading-[1.75] mb-2">
                  Patrimoine Indivis, première société en France dans le volume d'achat de parts indivises.
                </p>
                <p className="text-base lg:text-lg xl:text-xl text-white leading-[1.75]">
                  100% dédié à l'achat de vos parts indivises. 95% des biens achetés en indivision sur tout le territoire.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-5 animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              <Button
                variant="gold"
                className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 text-base lg:text-lg font-bold shadow-2xl min-h-[56px]"
                asChild
              >
                <Link to="/contact">
                  Demander une étude
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </Link>
              </Button>
              <Button
                className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 text-base lg:text-lg font-semibold text-white bg-white/25 border-2 border-white hover:bg-white/40 shadow-xl backdrop-blur-sm min-h-[56px]"
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
              className="text-sm lg:text-base text-white font-medium mb-8 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              Étude confidentielle — Réponse rapide
            </p>

            {/* Trust badges */}
            <div
              className="flex flex-wrap items-center gap-x-8 lg:gap-x-10 gap-y-3 pt-6 border-t border-white/40 animate-fade-up"
              style={{ animationDelay: "350ms" }}
            >
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <badge.icon className="w-5 h-5 lg:w-6 lg:h-6 text-accent flex-shrink-0" />
                  <span className="text-sm lg:text-base text-white font-semibold">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal quote - bottom */}
        <div className="relative z-10 mt-auto">
          <div className="container-wide py-5">
            <p className="text-base text-white/70 font-serif italic">
              « Nul ne peut être contraint à demeurer dans l'indivision » — Art. 815 du Code civil
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
