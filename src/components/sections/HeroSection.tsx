import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Award, CheckCircle2, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-haussmann.jpg";

const trustBadges = [
  {
    icon: Calendar,
    text: "Créé en 2017",
  },
  {
    icon: Award,
    text: "N°1 du marché",
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
      {/* Mobile (<768px): Stacked layout */}
      <section
        className="md:hidden flex flex-col w-full overflow-hidden bg-background"
        style={{
          paddingTop: "calc(72px + env(safe-area-inset-top, 0px))",
        }}
      >
        {/* Image with lighter overlay */}
        <div className="relative w-full aspect-[16/10]">
          <img
            src={heroImage}
            alt="Façade immeuble haussmannien – Paris"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{
              filter: "brightness(1.05) saturate(1.1)",
            }}
            loading="eager"
          />
          {/* Much lighter overlay - just for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(215 30% 20% / 0.25) 0%, hsl(215 26% 22% / 0.35) 70%, hsl(215 26% 22% / 0.6) 100%)",
            }}
          />
        </div>

        {/* Content Card - brighter and more finished */}
        <div
          className="relative z-10 w-full px-4 -mt-12"
          style={{
            paddingBottom: "calc(32px + env(safe-area-inset-bottom, 0px))",
          }}
        >
          <div className="w-full max-w-[560px] mx-auto p-6 sm:p-7 rounded-2xl bg-white shadow-xl border border-border/50">
            {/* Sur-titre */}
            <div className="inline-block px-3 py-1 rounded-full bg-accent/15 mb-3 animate-fade-up">
              <p className="text-accent text-xs tracking-[0.15em] uppercase font-bold">
                Sortir de l'indivision
              </p>
            </div>

            {/* Accroche */}
            <p
              className="text-foreground/80 text-sm mb-3 animate-fade-up"
              style={{ animationDelay: "50ms" }}
            >
              Vous souhaitez sortir de l'indivision ?
            </p>

            {/* H1 */}
            <h1
              className="font-serif text-2xl sm:text-[1.75rem] text-foreground font-bold leading-tight mb-2 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Vendez vos parts indivises
            </h1>

            {/* Ligne clé */}
            <p
              className="text-accent font-semibold text-base mb-4 animate-fade-up"
              style={{ animationDelay: "150ms" }}
            >
              Achat ou rachat de parts indivises
            </p>

            {/* Description */}
            <p
              className="text-sm text-muted-foreground leading-relaxed mb-5 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Patrimoine Indivis, première société créée en France pour l'achat
              de parts indivises. Leader incontesté du marché.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col gap-3 mb-4 animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              <Button variant="gold" size="lg" className="w-full min-h-12" asChild>
                <Link to="/contact">
                  Demander une étude
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full min-h-12"
                asChild
              >
                <Link to="/contact#rappel">
                  <Phone className="w-5 h-5" />
                  Être rappelé
                </Link>
              </Button>
            </div>

            {/* Micro-ligne */}
            <p
              className="text-xs text-muted-foreground text-center mb-5 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              Étude confidentielle — Réponse rapide
            </p>

            {/* Trust badges */}
            <div
              className="grid grid-cols-2 gap-3 pt-4 border-t border-border animate-fade-up"
              style={{ animationDelay: "350ms" }}
            >
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <badge.icon className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-xs font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Legal quote */}
          <p className="mt-5 text-xs text-muted-foreground font-serif italic text-center">
            « Nul ne peut être contraint à demeurer dans l'indivision » — Art.
            815 du Code civil
          </p>
        </div>
      </section>

      {/* Desktop (>=768px): Full hero with lighter overlay */}
      <section
        className="relative hidden md:flex flex-col justify-center min-h-[90vh]"
        style={{
          paddingTop: "calc(80px + env(safe-area-inset-top, 0px))",
          paddingBottom: "calc(40px + env(safe-area-inset-bottom, 0px))",
        }}
      >
        {/* Background Image with much lighter overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Façade immeuble haussmannien – Paris"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: "brightness(1.08) saturate(1.05)",
            }}
          />
          {/* Much lighter gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(215 30% 20% / 0.45) 0%, hsl(215 26% 25% / 0.35) 50%, hsl(215 26% 30% / 0.3) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="container-wide relative z-10 py-12 lg:py-16">
          {/* Hero Card - bright and polished */}
          <div className="w-full max-w-2xl lg:max-w-[680px] mx-8 sm:mx-0 p-8 md:p-10 lg:p-12 rounded-3xl bg-white/95 backdrop-blur-sm shadow-2xl border border-white/50">
            {/* Sur-titre */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/15 mb-4 animate-fade-up">
              <p className="text-accent text-sm tracking-[0.15em] uppercase font-bold">
                Sortir de l'indivision
              </p>
            </div>

            {/* Accroche */}
            <p
              className="text-foreground/70 text-base md:text-lg mb-3 animate-fade-up"
              style={{ animationDelay: "50ms" }}
            >
              Vous souhaitez sortir de l'indivision ?
            </p>

            {/* H1 */}
            <h1
              className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-foreground font-bold leading-tight mb-3 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Vendez vos parts indivises
            </h1>

            {/* Ligne clé */}
            <p
              className="text-accent font-bold text-lg md:text-xl mb-5 animate-fade-up"
              style={{ animationDelay: "150ms" }}
            >
              Achat ou rachat de parts indivises
            </p>

            {/* Description */}
            <p
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Patrimoine Indivis, première société créée en France pour l'achat
              de parts indivises. 100% dédié à l'achat de vos parts indivises.{" "}
              <span className="font-semibold text-foreground">
                Leader incontesté du marché.
              </span>
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-4 animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              <Button
                variant="gold"
                size="xl"
                className="w-full sm:w-auto px-8"
                asChild
              >
                <Link to="/contact">
                  Demander une étude
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto px-8"
                asChild
              >
                <Link to="/contact#rappel">
                  <Phone className="w-5 h-5" />
                  Être rappelé
                </Link>
              </Button>
            </div>

            {/* Micro-ligne */}
            <p
              className="text-sm text-muted-foreground mb-8 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              Étude confidentielle — Réponse rapide
            </p>

            {/* Trust badges */}
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-border animate-fade-up"
              style={{ animationDelay: "350ms" }}
            >
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <badge.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal quote */}
        <div className="relative z-10 mt-auto">
          <div className="container-wide py-5">
            <p className="text-sm text-white/80 font-serif italic drop-shadow-md">
              « Nul ne peut être contraint à demeurer dans l'indivision » — Art.
              815 du Code civil
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
