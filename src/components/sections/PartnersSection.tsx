import { RevealOnScroll } from "@/components/RevealOnScroll";

const partners = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  label: "Logo partenaire",
}));

export function PartnersSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container-wide">
        <RevealOnScroll className="text-center mb-10">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Réseau professionnel
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Notre réseau de partenaires
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Notaires, avocats et professionnels de l'immobilier nous font confiance
            pour accompagner les situations d'indivision les plus complexes.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <RevealOnScroll key={partner.id} delayMs={index * 60}>
              <div className="aspect-[3/2] rounded-lg border border-border/40 bg-background flex flex-col items-center justify-center gap-2 transition-shadow hover:shadow-sm">
                <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-muted-foreground/40"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 16l5-5 4 4 4-6 5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[11px] text-muted-foreground/50 font-medium">
                  {partner.label}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
