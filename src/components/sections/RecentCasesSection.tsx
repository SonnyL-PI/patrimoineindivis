import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const recentCases = [
  {
    id: "marilyne-t",
    name: "Marilyne T.",
    quotepart: "50%",
    location: "Paris (75)",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "helene-k",
    name: "Hélène K.",
    quotepart: "50%",
    location: "Paris (75)",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "bertrand-d",
    name: "Bertrand D.",
    quotepart: "67%",
    location: "Paris (75)",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "laure-m",
    name: "Laure M.",
    quotepart: "25%",
    location: "Lyon (69)",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "philippe-r",
    name: "Philippe R.",
    quotepart: "33%",
    location: "Bordeaux (33)",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "nathalie-b",
    name: "Nathalie B.",
    quotepart: "75%",
    location: "Nice (06)",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop&auto=format",
  },
];

export function RecentCasesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background" id="cas-recents">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Cas récents
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Quelques exemples de dossiers
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Exemples anonymisés. Chaque situation est unique.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {recentCases.map((caseItem) => (
            <Link
              key={caseItem.id}
              to={`/cas-recents/${caseItem.id}`}
              className="group block overflow-hidden rounded-2xl bg-card border border-border/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/20"
            >
              {/* Image container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={`Bien immobilier - ${caseItem.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 bg-primary/95">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-1">
                      {caseItem.name}
                    </h3>
                    <p className="text-sm text-primary-foreground/70">
                      {caseItem.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1.5 text-sm font-semibold text-accent bg-accent/10 rounded-lg">
                      Quote-part {caseItem.quotepart}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-12">
          <Button variant="goldOutline" size="lg" asChild>
            <Link to="/cas-recents">
              Voir tous les cas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Demander une étude de rachat
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
