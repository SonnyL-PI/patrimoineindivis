import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import salleReunion3 from "@/assets/salle-reunion-3.png";

const recentCases = [
  {
    id: "marilyne-t",
    name: "Marilyne T.",
    quotepart: "50%",
    location: "Paris (75)",
    result: "Clôture en 4 semaines",
  },
  {
    id: "helene-k",
    name: "Hélène K.",
    quotepart: "50%",
    location: "Paris (75)",
    result: "Offre acceptée en 3 semaines",
  },
  {
    id: "bertrand-d",
    name: "Bertrand D.",
    quotepart: "67%",
    location: "Paris (75)",
    result: "Médiation réussie",
  },
  {
    id: "laure-m",
    name: "Laure M.",
    quotepart: "25%",
    location: "Lyon (69)",
    result: "Clôture en 5 semaines",
  },
  {
    id: "philippe-r",
    name: "Philippe R.",
    quotepart: "33%",
    location: "Bordeaux (33)",
    result: "Offre acceptée en 2 semaines",
  },
  {
    id: "catherine-b",
    name: "Catherine B.",
    quotepart: "75%",
    location: "Nice (06)",
    result: "Clôture en 6 semaines",
  },
];

export function RecentCasesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-secondary/30" id="cas-recents">
      <div className="container-wide">
        {/* Vignette Image */}
        <div className="flex justify-center mb-10 md:mb-12">
          <img
            src={salleReunion3}
            alt="Salle de réunion – Patrimoine Indivis"
            className="w-full max-w-md aspect-[16/9] object-cover rounded-2xl shadow-soft"
            loading="lazy"
          />
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            Cas récents
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Quelques exemples de dossiers
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Exemples anonymisés. Chaque situation est unique.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {recentCases.map((caseItem) => (
            <Link
              key={caseItem.id}
              to="/cas-recents"
              className="group bg-card rounded-2xl p-6 border border-border/20 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {caseItem.name}
              </h3>
              <p className="text-accent font-semibold mb-2">
                Quote-part : {caseItem.quotepart}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {caseItem.location}
              </p>
              <div className="flex items-center gap-2 text-foreground/80">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm">{caseItem.result}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-14">
          <Button variant="goldOutline" size="lg" asChild>
            <Link to="/contact">
              Étudier mon dossier
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
