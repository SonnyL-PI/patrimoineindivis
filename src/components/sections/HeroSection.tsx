import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Calendar, Award, CheckCircle2, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-haussmann.jpg";
const trustBadges = [{
  icon: Calendar,
  text: "Créé en 2017"
}, {
  icon: Award,
  text: "1ère société en France"
}, {
  icon: CheckCircle2,
  text: "Expertise unique"
}, {
  icon: MapPin,
  text: "Tout le territoire"
}];
export function HeroSection() {
  // Off-white / ivory color for premium feel
  const ivoryText = "hsl(45 20% 96%)";
  const ivoryTextMuted = "hsl(45 15% 88%)";
  
  return <>
      {/* Mobile (<768px) */}
      <section className="md:hidden relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden" style={{
      paddingTop: "calc(88px + env(safe-area-inset-top, 0px))"
    }}>
        {/* Background Image - more prominent */}
        <img src={heroImage} alt="Façade immeuble haussmannien – Paris" className="absolute inset-0 h-full w-full object-cover object-center" style={{
        filter: "brightness(1.05) saturate(1.0)"
      }} loading="eager" />

        {/* Subtle overlay - reduced opacity for image prominence */}
        <div className="absolute inset-0 pointer-events-none" style={{
        background: `
              linear-gradient(180deg,
                hsl(215 25% 12% / 0.35) 0%,
                hsl(215 22% 10% / 0.45) 40%,
                hsl(215 20% 8% / 0.65) 70%,
                hsl(215 22% 6% / 0.80) 100%
              )
            `
      }} />

        {/* Content - more vertical breathing room */}
        <div className="relative z-10 px-6 pt-8 pb-8" style={{
        paddingBottom: "calc(32px + env(safe-area-inset-bottom, 0px))"
      }}>
          {/* Sur-titre - more refined */}
          <p className="text-accent/90 text-[11px] tracking-[0.22em] uppercase font-medium mb-4 animate-fade-up">
            Sortir de l'indivision
          </p>

          {/* Accroche - lighter */}
          <p className="text-sm font-normal mb-4 animate-fade-up" style={{
          animationDelay: "50ms",
          color: ivoryTextMuted
        }}>
            Vous souhaitez sortir de l'indivision ?
          </p>

          {/* H1 - reduced size, less heavy, ivory tone */}
          <h1 className="font-serif text-[1.5rem] font-semibold leading-[1.15] mb-4 animate-fade-up" style={{
          animationDelay: "100ms",
          color: ivoryText,
          textShadow: "0 2px 8px rgba(0,0,0,0.25)"
        }}>
            Vendez vos parts indivises
          </h1>

          {/* Sous-titre - lighter, finer */}
          <p className="text-accent/85 font-medium text-base mb-7 animate-fade-up" style={{
          animationDelay: "150ms",
          letterSpacing: "0.02em"
        }}>
            Rachat de parts indivises
          </p>

          {/* Paragraphe - softer */}
          <div className="mb-8 animate-fade-up max-w-[340px]" style={{
          animationDelay: "200ms"
        }}>
            <p className="text-[14px] leading-[1.8] mb-2" style={{ color: ivoryTextMuted }}>
              Patrimoine Indivis, première société en France en volume d'achat de parts indivises.
            </p>
            <p className="text-[14px] leading-[1.8] mb-2" style={{ color: ivoryTextMuted }}>
              100% dédié à l'achat de vos parts indivises. 100% dédié à l'accompagnement des indivisaires.
            </p>
            <p className="text-[14px] leading-[1.8]" style={{ color: ivoryTextMuted }}>
              Achat de parts indivises mêmes minoritaires sur tout le territoire.
            </p>
          </div>

          {/* CTAs - refined */}
          <div className="flex flex-col gap-3 mb-5 animate-fade-up" style={{
          animationDelay: "250ms"
        }}>
            <Button variant="gold" size="lg" className="w-full min-h-[52px] text-[15px] font-semibold shadow-lg" asChild>
              <Link to="/contact">
                Demander une étude
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" className="w-full min-h-[52px] text-[15px] font-medium bg-white/15 border border-white/40 hover:bg-white/25 shadow-md backdrop-blur-sm" style={{ color: ivoryText }} asChild>
              <Link to="/contact?tab=callback">
                <Phone className="w-4 h-4" />
                Être rappelé
              </Link>
            </Button>
          </div>

          {/* Micro-texte */}
          <p className="text-[13px] text-center mb-6 font-normal animate-fade-up" style={{
          animationDelay: "300ms",
          color: ivoryTextMuted
        }}>
            Étude confidentielle — Réponse rapide
          </p>

          {/* Trust badges - more subtle */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-3 pt-5 border-t border-white/20 animate-fade-up" style={{
          animationDelay: "350ms"
        }}>
            {trustBadges.map((badge, index) => <div key={index} className="flex items-center gap-2">
                <badge.icon className="w-3.5 h-3.5 text-accent/80 flex-shrink-0" />
                <span className="text-[12px] font-medium" style={{ color: ivoryTextMuted }}>{badge.text}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Desktop (>=768px) - INSTITUTIONAL & PREMIUM */}
      <section className="relative hidden md:flex flex-col justify-center overflow-hidden" style={{
      minHeight: "92vh",
      paddingTop: "calc(90px + env(safe-area-inset-top, 0px))",
      paddingBottom: "calc(48px + env(safe-area-inset-bottom, 0px))"
    }}>
        {/* Background Image - more prominent, brighter */}
        <img src={heroImage} alt="Façade immeuble haussmannien – Paris" className="absolute inset-0 w-full h-full object-cover" style={{
        filter: "brightness(1.08) saturate(0.95)"
      }} />

        {/* Subtle, refined overlay - much lighter */}
        <div className="absolute inset-0 pointer-events-none" style={{
        background: `
              linear-gradient(100deg,
                hsl(215 28% 8% / 0.72) 0%,
                hsl(215 25% 10% / 0.62) 20%,
                hsl(215 22% 12% / 0.48) 35%,
                hsl(215 20% 15% / 0.32) 50%,
                hsl(215 18% 18% / 0.15) 65%,
                transparent 82%
              )
            `
      }} />

        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{
        background: "linear-gradient(to top, hsl(215 25% 8% / 0.45) 0%, transparent 100%)"
      }} />

        {/* Content - elegant positioning with breathing room */}
        <div className="relative z-10 py-20 lg:py-28 px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-32 max-w-[1600px] mx-auto w-full">
          <div className="max-w-3xl lg:max-w-4xl">
            {/* Sur-titre - refined, lighter */}
            <p className="text-accent/85 text-[13px] lg:text-sm tracking-[0.25em] uppercase font-medium mb-6 lg:mb-8 animate-fade-up">
              Sortir de l'indivision
            </p>

            {/* Accroche - lighter, more secondary */}
            <p className="text-base lg:text-lg font-normal mb-5 lg:mb-6 animate-fade-up" style={{
            animationDelay: "50ms",
            color: ivoryTextMuted
          }}>
              Vous souhaitez sortir de l'indivision ?
            </p>

            {/* H1 - significantly reduced, elegant weight, ivory tone */}
            <h1 className="font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem] font-semibold leading-[1.12] mb-6 lg:mb-8 animate-fade-up" style={{
            animationDelay: "100ms",
            color: ivoryText,
            textShadow: "0 2px 12px rgba(0,0,0,0.2)"
          }}>
              Vendez vos parts indivises
            </h1>

            {/* Sous-titre - lighter, finer, more spacing */}
            <p className="text-accent/80 font-medium text-lg lg:text-xl mb-10 lg:mb-12 animate-fade-up" style={{
            animationDelay: "150ms",
            letterSpacing: "0.025em"
          }}>
              Rachat de parts indivises
            </p>

            {/* Paragraphe - softer, refined */}
            <div className="mb-12 lg:mb-14 animate-fade-up max-w-xl lg:max-w-2xl" style={{
            animationDelay: "200ms"
          }}>
              <div className="space-y-2">
                <p className="text-[15px] lg:text-base leading-[1.85]" style={{ color: ivoryTextMuted }}>
                  Patrimoine Indivis, première société en France exclusivement dédiée au rachat de parts indivises
                </p>
                <p className="text-[15px] lg:text-base leading-[1.85]" style={{ color: ivoryTextMuted }}>
                  Nous sommes le leader incontesté du marché par le nombre de biens achetés et le volume de parts indivises acquises depuis notre création en 2017.
                </p>
                <p className="text-[15px] lg:text-base leading-[1.85]" style={{ color: ivoryTextMuted }}>
                  Rachat de parts indivises mêmes minoritaires sur tout le territoire.
                </p>
              </div>
            </div>

            {/* CTAs - refined, less aggressive */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-up" style={{
            animationDelay: "250ms"
          }}>
              <Button variant="gold" className="w-full sm:w-auto px-7 lg:px-9 py-3.5 lg:py-4 text-[15px] lg:text-base font-semibold shadow-lg min-h-[50px]" asChild>
                <Link to="/contact">
                  Demander une étude
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </Link>
              </Button>
              <Button className="w-full sm:w-auto px-7 lg:px-9 py-3.5 lg:py-4 text-[15px] lg:text-base font-medium bg-white/12 border border-white/35 hover:bg-white/20 shadow-md backdrop-blur-sm min-h-[50px]" style={{ color: ivoryText }} asChild>
                <Link to="/contact?tab=callback">
                  <Phone className="w-4 h-4" />
                  Être rappelé
                </Link>
              </Button>
            </div>

            {/* Micro-texte - subtle */}
            <p className="text-sm font-normal mb-10 animate-fade-up" style={{
            animationDelay: "300ms",
            color: ivoryTextMuted
          }}>
              Étude confidentielle — Réponse rapide
            </p>

            {/* Trust badges - more subtle, refined */}
            <div className="flex flex-wrap items-center gap-x-8 lg:gap-x-10 gap-y-3 pt-6 border-t border-white/20 animate-fade-up" style={{
            animationDelay: "350ms"
          }}>
              {trustBadges.map((badge, index) => <div key={index} className="flex items-center gap-2">
                  <badge.icon className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-accent/75 flex-shrink-0" />
                  <span className="text-[13px] lg:text-sm font-medium" style={{ color: ivoryTextMuted }}>{badge.text}</span>
                </div>)}
            </div>
          </div>
        </div>

        {/* Legal quote - bottom, more subtle */}
        <div className="relative z-10 mt-auto">
          <div className="container-wide py-6">
            <p className="text-sm lg:text-[15px] font-serif italic" style={{ color: `${ivoryTextMuted}99` }}>
              « Nul ne peut être contraint à demeurer dans l'indivision » — Art. 815 du Code civil
            </p>
          </div>
        </div>
      </section>
    </>;
}