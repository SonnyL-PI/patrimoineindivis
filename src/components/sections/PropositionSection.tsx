import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Quote } from "lucide-react";

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
    <section className="section-padding bg-background" id="proposition">
      <div className="container-wide">
        {/* Main Proposition */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Notre offre
          </span>
          <h2 className="heading-section text-foreground mb-8">
            Notre Proposition
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-foreground font-serif italic mb-8">
            Une équipe à votre service, dans la plus stricte confidentialité.
          </p>

          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Demander une étude gratuite
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Ils nous ont fait confiance
            </h3>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border/50 shadow-card relative"
              >
                <Quote className="w-8 h-8 text-accent/30 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-semibold">{testimonial.initials}</span>
                  </div>
                  <span className="text-sm text-accent font-medium uppercase tracking-wide">
                    {testimonial.situation}
                  </span>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Cases */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Cas récents
            </h3>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentCases.map((caseItem, index) => (
              <div 
                key={index}
                className="bg-secondary/50 rounded-2xl p-6 border border-border/30"
              >
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {caseItem.type}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {caseItem.situation}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent font-medium">Quote-part : {caseItem.quotepart}</span>
                </div>
                <p className="text-sm text-foreground font-medium mt-3 pt-3 border-t border-border/50">
                  ✓ {caseItem.result}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="goldOutline" size="lg" asChild>
              <Link to="/contact">
                Étudier mon dossier
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
