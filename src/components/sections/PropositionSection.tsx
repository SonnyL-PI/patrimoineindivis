import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Quote } from "lucide-react";
import { PremiumPlate } from "@/components/ui/PremiumPlate";
import heroBuilding from "@/assets/hero-building.jpg";

const benefits = [
  "Proposition de rachat après étude par nos équipes, notaires et avocats",
  "Offres fermes et sans conditions suspensives de crédit",
  "Accompagnement complet jusqu'à la clôture avec étude notariale",
  "Étude réalisée dans la plus stricte confidentialité",
];

const testimonials = [
  {
    initials: "M.D.",
    situation: "Succession",
    quote: "Après 3 ans de blocage avec mes frères et sœurs, Patrimoine Indivis m'a permis de récupérer ma part en moins de 2 mois.",
  },
  {
    initials: "S.L.",
    situation: "Divorce",
    quote: "Professionnalisme et discrétion remarquables. L'équipe a su gérer une situation très tendue avec mon ex-conjoint.",
  },
  {
    initials: "P.R.",
    situation: "Conflit familial",
    quote: "Je recommande vivement. Ils ont su trouver une solution alors que je pensais être dans une impasse totale.",
  },
];

const recentCases = [
  {
    type: "Appartement Paris 16e",
    situation: "Succession conflictuelle",
    quotepart: "25%",
    result: "Offre acceptée en 3 semaines",
  },
  {
    type: "Maison Bordeaux",
    situation: "Divorce",
    quotepart: "50%",
    result: "Clôture en 6 semaines",
  },
  {
    type: "Immeuble Lyon",
    situation: "Indivision bloquée",
    quotepart: "33%",
    result: "Médiation réussie",
  },
];

export function PropositionSection() {
  return (
    <>
      {/* Main Proposition - Photo background + Premium Plate */}
      <section className="relative min-h-[60vh] flex items-center" id="proposition">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBuilding}
            alt="Immeuble haussmannien"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "saturate(0.8)" }}
          />
          {/* Navy gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, hsl(215 30% 14% / 0.88) 0%, hsl(215 26% 20% / 0.8) 60%, hsl(215 26% 22% / 0.75) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="container-wide relative z-10 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <PremiumPlate className="max-w-2xl" align="center">
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
                Notre offre
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-primary-foreground font-semibold mb-6">
                Notre Proposition
              </h2>

              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <p className="text-primary-foreground/90 text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              <p className="text-base text-accent font-serif italic mb-6">
                Une équipe à votre service, dans la plus stricte confidentialité.
              </p>

              <Button variant="gold" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  Demander une étude de rachat
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </PremiumPlate>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
              Ils nous ont fait confiance
            </h3>
            <div className="w-12 h-0.5 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card-premium relative group"
              >
                <Quote className="w-6 h-6 text-accent/20 absolute top-5 right-5" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <span className="text-accent font-semibold text-sm">{testimonial.initials}</span>
                  </div>
                  <span className="text-xs text-accent font-medium uppercase tracking-wide">
                    {testimonial.situation}
                  </span>
                </div>
                <p className="text-muted-foreground italic leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Cases */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
              Cas récents
            </h3>
            <div className="w-12 h-0.5 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {recentCases.map((caseItem, index) => (
              <div 
                key={index}
                className="card-situation"
              >
                <h4 className="font-serif text-base md:text-lg font-semibold text-foreground mb-1">
                  {caseItem.type}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {caseItem.situation}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent font-medium">Quote-part : {caseItem.quotepart}</span>
                </div>
                <p className="text-sm text-foreground font-medium mt-3 pt-3 border-t border-border/30">
                  ✓ {caseItem.result}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="goldOutline" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/contact">
                Étudier mon dossier
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
