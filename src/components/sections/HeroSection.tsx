import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, MapPin, Shield, Lock } from "lucide-react";
import heroImage from "@/assets/hero-haussmann.jpg";

const trustBadges = [
  { icon: MapPin, text: "Intervention sur tout le territoire" },
  { icon: Shield, text: "Expertise exclusivement dédiée à l'indivision" },
  { icon: Lock, text: "Analyse confidentielle de votre situation" },
];

const stats = [
  { value: "+8 ans", label: "d'expertise dans le traitement des indivisions" },
  { value: "+100", label: "indivisions conflictuelles débloquées" },
  { value: "+100 M€", label: "de parts indivises acquises" },
];

export function HeroSection() {
  return (
    <>
      {/* Mobile */}
      <section
        className="md:hidden relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden"
        style={{ paddingTop: "calc(88px + env(safe-area-inset-top, 0px))" }}
      >
        <img
          src={heroImage}
          alt="Façade immeuble haussmannien – Paris"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(180deg,
              hsl(220 20% 8% / 0.50) 0%,
              hsl(220 18% 6% / 0.68) 30%,
              hsl(220 16% 5% / 0.85) 60%,
              hsl(220 18% 4% / 0.94) 100%
            )`,
          }}
        />

        <div
          className="relative z-10 px-6 pt-6 pb-8"
          style={{ paddingBottom: "calc(32px + env(safe-area-inset-bottom, 0px))" }}
        >
          <p className="text-accent text-[11px] tracking-[0.22em] uppercase font-semibold mb-4 animate-fade-up">
            Sortir de l'indivision
          </p>

          <h1
            className="font-serif text-[1.5rem] font-semibold leading-[1.18] mb-3 animate-fade-up"
            style={{ animationDelay: "80ms", color: "hsl(40 25% 98%)", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Rachat de parts indivises
            <span className="block text-[1.125rem] font-normal mt-1.5" style={{ color: "hsl(40 18% 90%)" }}>
              Sortir d'une indivision bloquée rapidement et sereinement
            </span>
          </h1>

          <p
            className="text-[13.5px] leading-[1.75] mb-6 animate-fade-up max-w-[340px]"
            style={{ animationDelay: "140ms", color: "hsl(40 18% 88%)" }}
          >
            Patrimoine Indivis est la première société française exclusivement dédiée au rachat de parts indivises.
            Nous analysons chaque situation et proposons des solutions pour débloquer les indivisions, même les plus complexes.
          </p>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-3 mb-7 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-accent text-xl font-bold leading-tight">{s.value}</div>
                <div className="text-[11px] leading-[1.4] mt-1" style={{ color: "hsl(40 18% 82%)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 animate-fade-up" style={{ animationDelay: "260ms" }}>
            <Button variant="gold" size="lg" className="w-full min-h-[52px] text-[15px] font-semibold shadow-lg" asChild>
              <Link to="/etude-gratuite">
                Obtenir une étude gratuite
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="w-full min-h-[52px] text-[15px] font-medium bg-white/20 border border-white/50 hover:bg-white/30 shadow-md backdrop-blur-sm"
              style={{ color: "hsl(40 25% 98%)" }}
              asChild
            >
              <Link to="/notre-approche">
                <BookOpen className="w-4 h-4" />
                Comprendre notre méthode
              </Link>
            </Button>
          </div>

          <p
            className="text-[12px] text-center mt-4 animate-fade-up"
            style={{ animationDelay: "310ms", color: "hsl(40 18% 82%)" }}
          >
            Étude confidentielle — Réponse rapide
          </p>
        </div>
      </section>

      {/* Desktop */}
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
          alt="Façade immeuble haussmannien – Paris"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(92deg,
              hsl(220 18% 4% / 0.94) 0%,
              hsl(220 16% 5% / 0.90) 14%,
              hsl(220 14% 6% / 0.78) 30%,
              hsl(220 12% 8% / 0.58) 46%,
              hsl(220 10% 10% / 0.35) 60%,
              transparent 80%
            )`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to top, hsl(220 16% 5% / 0.55) 0%, transparent 100%)" }}
        />

        <div className="relative z-10 py-16 lg:py-24 px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-[46rem]">
            <p className="text-accent text-[13px] lg:text-sm tracking-[0.25em] uppercase font-semibold mb-6 animate-fade-up">
              Sortir de l'indivision
            </p>

            <h1
              className="font-serif text-[1.875rem] md:text-[2.125rem] lg:text-[2.5rem] xl:text-[2.75rem] font-semibold leading-[1.12] mb-5 animate-fade-up"
              style={{ animationDelay: "80ms", color: "hsl(40 25% 98%)", textShadow: "0 2px 16px rgba(0,0,0,0.35)" }}
            >
              Rachat de parts indivises
              <span
                className="block text-lg lg:text-xl xl:text-[1.375rem] font-normal mt-2"
                style={{ color: "hsl(40 18% 90%)" }}
              >
                Sortir d'une indivision bloquée rapidement et sereinement
              </span>
            </h1>

            <div
              className="mb-10 lg:mb-12 animate-fade-up max-w-xl lg:max-w-2xl"
              style={{ animationDelay: "140ms" }}
            >
              <p className="text-[15px] lg:text-base leading-[1.85]" style={{ color: "hsl(40 18% 90%)" }}>
                Patrimoine Indivis est la première société française exclusivement dédiée au rachat de parts indivises.
                Nous analysons chaque situation et proposons des solutions pour débloquer les indivisions, même les plus complexes.
              </p>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-8 lg:gap-12 mb-10 lg:mb-12 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              {stats.map((s, i) => (
                <div key={i} className="min-w-0">
                  <div className="font-serif text-accent text-2xl lg:text-3xl xl:text-[2rem] font-bold leading-tight">
                    {s.value}
                  </div>
                  <div
                    className="text-[13px] lg:text-sm leading-[1.45] mt-1 max-w-[160px]"
                    style={{ color: "hsl(40 18% 82%)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-5 animate-fade-up" style={{ animationDelay: "260ms" }}>
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
                style={{ color: "hsl(40 25% 98%)" }}
                asChild
              >
                <Link to="/notre-approche">
                  <BookOpen className="w-4 h-4" />
                  Comprendre notre méthode
                </Link>
              </Button>
            </div>

            <p
              className="text-sm font-normal mb-8 animate-fade-up"
              style={{ animationDelay: "310ms", color: "hsl(40 18% 88%)" }}
            >
              Étude confidentielle — Réponse rapide
            </p>
          </div>
        </div>

        {/* Legal quote */}
        <div className="relative z-10 mt-auto">
          <div className="px-6 md:px-8 lg:px-10 xl:px-12 py-6">
            <p className="text-sm lg:text-[15px] font-serif italic" style={{ color: "hsl(40 18% 88%)" }}>
              « Nul ne peut être contraint à demeurer dans l'indivision » — Art. 815 du Code civil
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
