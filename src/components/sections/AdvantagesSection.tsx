import { Award, Zap, Building, Users, Euro, Lock } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Une véritable expertise",
    description: "Notre expertise et notre savoir-faire nous permettent de prendre des décisions rapides.",
  },
  {
    icon: Zap,
    title: "Offre ferme et décision rapide",
    description: "Des offres sans conditions suspensives de crédit proposées grâce à notre surface financière.",
  },
  {
    icon: Building,
    title: "Évaluation immobilière",
    description: "Notre connaissance du marché immobilier nous donne l'expertise pour valoriser les biens.",
  },
  {
    icon: Users,
    title: "Négociation et médiation",
    description: "Une approche humaine qui passe par la médiation dans des contextes parfois difficiles.",
  },
  {
    icon: Euro,
    title: "Sans intermédiaires",
    description: "Nous sommes acheteur direct, la vente se fait donc sans intermédiaire ni commission.",
  },
  {
    icon: Lock,
    title: "Discrétion garantie",
    description: "Toutes nos transactions se font devant notaires dans la plus stricte confidentialité.",
  },
];

export function AdvantagesSection() {
  return (
    <section className="section-padding bg-navy text-primary-foreground" id="avantages">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Nos atouts
          </span>
          <h2 className="heading-section text-primary-foreground mb-4">
            Les Avantages Patrimoine Indivis
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="text-center p-8 lg:p-10 rounded-2xl bg-primary-foreground/[0.03] border border-primary-foreground/10 hover:bg-primary-foreground/[0.06] hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-6">
                <advantage.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-4">
                {advantage.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed text-sm">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
