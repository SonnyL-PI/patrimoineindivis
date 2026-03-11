import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileSearch, MapPin, Scale } from "lucide-react";
import heroImage from "@/assets/hero-haussmann.jpg";

const reassuranceBadges = [
  {
    icon: FileSearch,
    title: "Analyse gratuite",
    text: "Étude personnalisée sans engagement",
  },
  {
    icon: MapPin,
    title: "Intervention nationale",
    text: "Sur tout le territoire français",
  },
  {
    icon: Scale,
    title: "Accompagnement juridique",
    text: "Sécurité et conformité garanties",
  },
];

export function HeroSection() {
  const textPrimary = "hsl(40 25% 98%)";
  const textSecondary = "hsl(40 18% 92%)";

  return (
    <>
      {/* Mobile (<768px) */}
      <section
        className="md:hidden relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden"
        style={{ paddingTop: "calc(88px + env(safe-area-inset-top, 0px))" }}
      >
        <img
          src={heroImage}
          alt="Façade immeuble haussmannien – patrimoine immobilier"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(180deg,
              hsl(220 20% 8% / 0.55) 0%,
              hsl(220 18% 6% / 0.70) 35%,
              hsl(220 16% 5% / 0.85) 65%,
              hsl(220 18% 4% / 0.92) 100%
            )`,
          }}
        />

        <div
          className="relative z-10 px-6 pt-8 pb-8"
          style={{ paddingBottom: "calc(32px + env(safe-area-inset-bottom, 0px))" }}
        >
          {/* Sur-titre */}
          <p className="text-accent text-[11px] tracking-[0.22em] uppercase font-semibold mb-4 animate-fade-up">
            Patrimoine Indivis
          </p>

          {/* H1 */}
          <h1
            className="font-serif text-[1.625rem] font-semibold leading-[1.15] mb-2 animate-fade-up"
            style={{
              animationDelay: "80ms",
              color: textPrimary,
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            Rachat de parts indivises
          </h1>
          <p
            className="font-serif text-[1.25rem] font-medium leading-[1.2] mb-6 animate-fade-up"
            style={{
              animationDelay: "120ms",
              color: textSecondary,
              textShadow: "0 2px 12px rgba(0,0,0,0.3)",
            }}
          >
            Sortie d'indivision rapide et sécurisée
          </p>

          {/* Sous-titre */}
          <p
            className="text-[14px] leading-[1.75] mb-7 animate-fade-up max-w-[340px]"
            style={{ animationDelay: "160ms", color: textSecondary }}
          >
            Nous aidons les indivisaires à sortir de situations bloquées en proposant le rachat de leur quote-part immobilière.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col gap-3 mb-6 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <Button
              variant="gold"
              size="lg"
              className="w-full min-h-[52px] text-[15px] font-semibold shadow-lg"
              asChild
            >
              <Link to="/etude-gratuite">
                Obtenir une étude gratuite
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="w-full min-h-[52px] text-[15px] font-medium bg-white/20 border border-white/50 hover:bg-white/30 shadow-md backdrop-blur-sm"
              style={{ color: textPrimary }}
              asChild
            >
              <Link to="/notre-approche">
                Comprendre notre méthode
              </Link>
            </Button>
          </div>

          {/* Reassurance badges */}
          <div
            className="grid grid-cols-1 gap-4 pt-5 border-t border-white/25 animate-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            {reassuranceBadges.map((badge, index) => (
              <div key={index} className="flex items-start gap-3">
                <badge.icon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span
                    className="text-[13px] font-semibold block"
                    style={{ color: textPrimary }}
                  >
                    {badge.title}
                  </span>
                  <span
                    className="text-[12px] font-normal"
                    style={{ color: textSecondary }}
                  >
                    {badge.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop (>=768px) */}
      <section
        className="relative hidden md:flex flex-col justify-center overflow-hidden"
        style={{
          minHeight: "92vh",
          paddingTop: "calc(90px + env(safe-area-inset-top, 0px))",
          paddingBottom: "calc(48px + env(safe-area-inset-bottom, 0px))",
        }}
      >
        <img
          src={heroImage}
          alt="Façade immeuble haussmannien – patrimoine immobilier"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(92deg,
              hsl(220 18% 4% / 0.94) 0%,
              hsl(220 16% 5% / 0.92) 12%,
              hsl(220 14% 6% / 0.82) 28%,
              hsl(220 12% 8% / 0.65) 42%,
              hsl(220 10% 10% / 0.45) 55%,
              hsl(220 8% 12% / 0.25) 68%,
              transparent 82%
            )`,
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, hsl(220 16% 5% / 0.6) 0%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 py-20 lg:py-28 px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-[44rem]">
            {/* Sur-titre */}
            <p className="text-accent text-[13px] lg:text-sm tracking-[0.25em] uppercase font-semibold mb-6 lg:mb-8 animate-fade-up">
              Patrimoine Indivis
            </p>

            {/* H1 — deux lignes */}
            <h1
              className="font-serif text-[1.875rem] md:text-[2.125rem] lg:text-[2.5rem] xl:text-[2.75rem] font-semibold leading-[1.12] mb-3 animate-fade-up"
              style={{
                animationDelay: "80ms",
                color: textPrimary,
                textShadow: "0 2px 16px rgba(0,0,0,0.35)",
              }}
            >
              Rachat de parts indivises
            </h1>
            <p
              className="font-serif text-[1.375rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[1.875rem] font-medium leading-[1.2] mb-8 lg:mb-10 animate-fade-up"
              style={{
                animationDelay: "120ms",
                color: textSecondary,
                textShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              Sortie d'indivision rapide et sécurisée
            </p>

            {/* Sous-titre mission */}
            <p
              className="text-[15px] lg:text-base leading-[1.85] mb-10 lg:mb-12 max-w-xl lg:max-w-2xl animate-fade-up"
              style={{ animationDelay: "160ms", color: textSecondary }}
            >
              Nous aidons les indivisaires à sortir de situations bloquées
              en proposant le rachat de leur quote-part immobilière.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-12 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <Button
                variant="gold"
                className="w-full sm:w-auto px-7 lg:px-9 py-3.5 lg:py-4 text-[15px] lg:text-base font-semibold shadow-lg min-h-[50px]"
                asChild
              >
                <Link to="/etude-gratuite">
                  Obtenir une étude gratuite
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </Link>
              </Button>
              <Button
                className="w-full sm:w-auto px-7 lg:px-9 py-3.5 lg:py-4 text-[15px] lg:text-base font-medium bg-white/20 border border-white/50 hover:bg-white/30 shadow-md backdrop-blur-sm min-h-[50px]"
                style={{ color: textPrimary }}
                asChild
              >
                <Link to="/notre-approche">
                  Comprendre notre méthode
                </Link>
              </Button>
            </div>

            {/* Reassurance badges */}
            <div
              className="flex flex-wrap items-start gap-x-10 lg:gap-x-14 gap-y-4 pt-6 border-t border-white/30 animate-fade-up"
              style={{ animationDelay: "260ms" }}
            >
              {reassuranceBadges.map((badge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <badge.icon className="w-[18px] h-[18px] text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span
                      className="text-[13px] lg:text-sm font-semibold block"
                      style={{ color: textPrimary }}
                    >
                      {badge.title}
                    </span>
                    <span
                      className="text-[12px] lg:text-[13px] font-normal"
                      style={{ color: textSecondary }}
                    >
                      {badge.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal quote */}
        <div className="relative z-10 mt-auto">
          <div className="px-6 md:px-8 lg:px-10 xl:px-12 py-6">
            <p
              className="text-sm lg:text-[15px] font-serif italic"
              style={{ color: textSecondary }}
            >
              « Nul ne peut être contraint à demeurer dans l'indivision » — Art. 815 du Code civil
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
