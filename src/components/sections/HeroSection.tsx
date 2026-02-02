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
  // High contrast text colors for perfect readability
  const textPrimary = "hsl(40 25% 98%)";
  const textSecondary = "hsl(40 18% 92%)";
  
  return <>
      {/* Mobile (<768px) */}
      <section className="md:hidden relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden" style={{
      paddingTop: "calc(88px + env(safe-area-inset-top, 0px))"
    }}>
        {/* Background Image */}
        <img src={heroImage} alt="Façade immeuble haussmannien – Paris" className="absolute inset-0 h-full w-full object-cover object-center" loading="eager" />

        {/* Strong overlay for readability - vertical gradient */}
        <div className="absolute inset-0 pointer-events-none" style={{
        background: `
              linear-gradient(180deg,
                hsl(220 20% 8% / 0.55) 0%,
                hsl(220 18% 6% / 0.70) 35%,
                hsl(220 16% 5% / 0.85) 65%,
                hsl(220 18% 4% / 0.92) 100%
              )
            `
      }} />

        {/* Content */}
        <div className="relative z-10 px-6 pt-8 pb-8" style={{
        paddingBottom: "calc(32px + env(safe-area-inset-bottom, 0px))"
      }}>
          {/* Sur-titre */}
          <p className="text-accent text-[11px] tracking-[0.22em] uppercase font-semibold mb-4 animate-fade-up">
            Sortir de l'indivision
          </p>

          {/* Accroche */}
          <p className="text-[15px] font-normal mb-4 animate-fade-up" style={{
          animationDelay: "50ms",
          color: textSecondary
        }}>
            Vous souhaitez sortir de l'indivision ?
          </p>

          {/* H1 - clear, readable */}
          <h1 className="font-serif text-[1.625rem] font-semibold leading-[1.15] mb-4 animate-fade-up" style={{
          animationDelay: "100ms",
          color: textPrimary,
          textShadow: "0 2px 12px rgba(0,0,0,0.4)"
        }}>
            Vendez vos parts indivises
          </h1>

          {/* Sous-titre */}
          <p className="text-accent font-semibold text-lg mb-7 animate-fade-up" style={{
          animationDelay: "150ms",
          letterSpacing: "0.01em"
        }}>
            Rachat de parts indivises
          </p>

          {/* Paragraphe */}
          <div className="mb-8 animate-fade-up max-w-[340px]" style={{
          animationDelay: "200ms"
        }}>
            <p className="text-[14px] leading-[1.8] mb-2" style={{ color: textSecondary }}>
              Patrimoine Indivis, première société en France en volume d'achat de parts indivises.
            </p>
            <p className="text-[14px] leading-[1.8] mb-2" style={{ color: textSecondary }}>
              100% dédié à l'achat de vos parts indivises. 100% dédié à l'accompagnement des indivisaires.
            </p>
            <p className="text-[14px] leading-[1.8]" style={{ color: textSecondary }}>
              Achat de parts indivises mêmes minoritaires sur tout le territoire.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 mb-5 animate-fade-up" style={{
          animationDelay: "250ms"
        }}>
            <Button variant="gold" size="lg" className="w-full min-h-[52px] text-[15px] font-semibold shadow-lg" asChild>
              <Link to="/contact">
                Demander une étude
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" className="w-full min-h-[52px] text-[15px] font-medium bg-white/20 border border-white/50 hover:bg-white/30 shadow-md backdrop-blur-sm" style={{ color: textPrimary }} asChild>
              <Link to="/contact?tab=callback">
                <Phone className="w-4 h-4" />
                Être rappelé
              </Link>
            </Button>
          </div>

          {/* Micro-texte */}
          <p className="text-[13px] text-center mb-6 font-normal animate-fade-up" style={{
          animationDelay: "300ms",
          color: textSecondary
        }}>
            Étude confidentielle — Réponse rapide
          </p>

          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-3 pt-5 border-t border-white/25 animate-fade-up" style={{
          animationDelay: "350ms"
        }}>
            {trustBadges.map((badge, index) => <div key={index} className="flex items-center gap-2">
                <badge.icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span className="text-[12px] font-medium" style={{ color: textSecondary }}>{badge.text}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Desktop (>=768px) - INSTITUTIONAL & PREMIUM with strong readability */}
      <section className="relative hidden md:flex flex-col justify-center overflow-hidden" style={{
      minHeight: "92vh",
      paddingTop: "calc(90px + env(safe-area-inset-top, 0px))",
      paddingBottom: "calc(48px + env(safe-area-inset-bottom, 0px))"
    }}>
        {/* Background Image - natural colors */}
        <img src={heroImage} alt="Façade immeuble haussmannien – Paris" className="absolute inset-0 w-full h-full object-cover" />

        {/* Strong dark overlay - dense on left, fading to right */}
        <div className="absolute inset-0 pointer-events-none" style={{
        background: `
              linear-gradient(95deg,
                hsl(220 18% 5% / 0.92) 0%,
                hsl(220 16% 6% / 0.88) 15%,
                hsl(220 14% 8% / 0.78) 30%,
                hsl(220 12% 10% / 0.62) 45%,
                hsl(220 10% 12% / 0.42) 60%,
                hsl(220 8% 15% / 0.22) 75%,
                transparent 92%
              )
            `
      }} />

        {/* Bottom fade for legal quote */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{
        background: "linear-gradient(to top, hsl(220 16% 5% / 0.6) 0%, transparent 100%)"
      }} />

        {/* Content - elegant positioning with increased left margin */}
        <div className="relative z-10 py-20 lg:py-28 pl-[8%] md:pl-[10%] lg:pl-[12%] xl:pl-[14%] 2xl:pl-[15%] pr-8 md:pr-12 lg:pr-16 max-w-[1800px] w-full">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-[44rem]">
            {/* Sur-titre */}
            <p className="text-accent text-[13px] lg:text-sm tracking-[0.25em] uppercase font-semibold mb-6 lg:mb-8 animate-fade-up">
              Sortir de l'indivision
            </p>

            {/* Accroche */}
            <p className="text-base lg:text-lg font-normal mb-5 lg:mb-6 animate-fade-up" style={{
            animationDelay: "50ms",
            color: textSecondary
          }}>
              Vous souhaitez sortir de l'indivision ?
            </p>

            {/* H1 - high contrast, clearly readable */}
            <h1 className="font-serif text-[1.875rem] md:text-[2.125rem] lg:text-[2.375rem] xl:text-[2.625rem] font-semibold leading-[1.12] mb-6 lg:mb-8 animate-fade-up" style={{
            animationDelay: "100ms",
            color: textPrimary,
            textShadow: "0 2px 16px rgba(0,0,0,0.35)"
          }}>
              Vendez vos parts indivises
            </h1>

            {/* Sous-titre - distinct, readable */}
            <p className="text-accent font-semibold text-lg lg:text-xl mb-10 lg:mb-12 animate-fade-up" style={{
            animationDelay: "150ms",
            letterSpacing: "0.015em"
          }}>
              Rachat de parts indivises
            </p>

            {/* Paragraphe - comfortable reading */}
            <div className="mb-12 lg:mb-14 animate-fade-up max-w-xl lg:max-w-2xl" style={{
            animationDelay: "200ms"
          }}>
              <div className="space-y-2.5">
                <p className="text-[15px] lg:text-base leading-[1.85]" style={{ color: textSecondary }}>
                  Patrimoine Indivis, première société en France exclusivement dédiée au rachat de parts indivises
                </p>
                <p className="text-[15px] lg:text-base leading-[1.85]" style={{ color: textSecondary }}>
                  Nous sommes le leader incontesté du marché par le nombre de biens achetés et le volume de parts indivises acquises depuis notre création en 2017.
                </p>
                <p className="text-[15px] lg:text-base leading-[1.85]" style={{ color: textSecondary }}>
                  Rachat de parts indivises mêmes minoritaires sur tout le territoire.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-up" style={{
            animationDelay: "250ms"
          }}>
              <Button variant="gold" className="w-full sm:w-auto px-7 lg:px-9 py-3.5 lg:py-4 text-[15px] lg:text-base font-semibold shadow-lg min-h-[50px]" asChild>
                <Link to="/contact">
                  Demander une étude
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </Link>
              </Button>
              <Button className="w-full sm:w-auto px-7 lg:px-9 py-3.5 lg:py-4 text-[15px] lg:text-base font-medium bg-white/20 border border-white/50 hover:bg-white/30 shadow-md backdrop-blur-sm min-h-[50px]" style={{ color: textPrimary }} asChild>
                <Link to="/contact?tab=callback">
                  <Phone className="w-4 h-4" />
                  Être rappelé
                </Link>
              </Button>
            </div>

            {/* Micro-texte */}
            <p className="text-sm font-normal mb-10 animate-fade-up" style={{
            animationDelay: "300ms",
            color: textSecondary
          }}>
              Étude confidentielle — Réponse rapide
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-x-8 lg:gap-x-10 gap-y-3 pt-6 border-t border-white/30 animate-fade-up" style={{
            animationDelay: "350ms"
          }}>
              {trustBadges.map((badge, index) => <div key={index} className="flex items-center gap-2">
                  <badge.icon className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-accent flex-shrink-0" />
                  <span className="text-[13px] lg:text-sm font-medium" style={{ color: textSecondary }}>{badge.text}</span>
                </div>)}
            </div>
          </div>
        </div>

        {/* Legal quote - bottom */}
        <div className="relative z-10 mt-auto">
          <div className="pl-[8%] md:pl-[10%] lg:pl-[12%] xl:pl-[14%] 2xl:pl-[15%] pr-8 py-6">
            <p className="text-sm lg:text-[15px] font-serif italic" style={{ color: textSecondary }}>
              « Nul ne peut être contraint à demeurer dans l'indivision » — Art. 815 du Code civil
            </p>
          </div>
        </div>
      </section>
    </>;
}