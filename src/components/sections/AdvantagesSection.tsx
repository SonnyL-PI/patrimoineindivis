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
    <section className="py-12 md:py-16 bg-navy text-primary-foreground" id="avantages">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Nos atouts
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
            Les Avantages Patrimoine Indivis
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto" />
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="text-center p-6 md:p-7 rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/[0.1] hover:bg-primary-foreground/[0.09] hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-base md:text-lg font-semibold text-primary-foreground mb-2">
                {advantage.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed text-sm">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
