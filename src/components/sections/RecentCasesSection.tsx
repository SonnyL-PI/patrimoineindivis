import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const recentCases = [
  {
    id: "appartement-paris-16",
    title: "Appartement Paris 16e",
    situation: "Succession conflictuelle",
    quotepart: "25%",
    result: "Offre acceptée en 3 semaines",
  },
  {
    id: "maison-bordeaux",
    title: "Maison Bordeaux",
    situation: "Divorce",
    quotepart: "50%",
    result: "Clôture en 6 semaines",
  },
  {
    id: "immeuble-lyon",
    title: "Immeuble Lyon",
    situation: "Indivision bloquée",
    quotepart: "33%",
    result: "Médiation réussie",
  },
];

export function RecentCasesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-secondary/50" id="cas-recents">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Cas récents
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto" />
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {recentCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-card rounded-2xl p-6 border border-border/20 shadow-sm"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                {caseItem.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {caseItem.situation}
              </p>
              <p className="text-accent font-semibold mb-4">
                Quote-part : {caseItem.quotepart}
              </p>
              <div className="flex items-center gap-2 text-foreground">
                <Check className="w-4 h-4 text-foreground" />
                <span className="text-sm">{caseItem.result}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12">
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
