import { Target, BookOpen, Heart } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "100% dédié au rachat de parts indivises",
    description:
      "Nous sommes la première société française spécialisée exclusivement dans le rachat de parts indivises. Cette spécialisation nous permet une expertise pointue et une réactivité incomparable.",
    features: ["Spécialisation unique", "Expertise approfondie", "Réactivité garantie"],
  },
  {
    icon: BookOpen,
    title: "Expertise juridique (article 815)",
    description:
      "Notre réseau de partenaires — notaires, avocats, experts — est formé sur la multitude de cas que nous avons traités. Maîtrise parfaite du formalisme judiciaire requis.",
    features: ["Partenaires formés", "Formalisme maîtrisé", "Sécurité juridique"],
  },
  {
    icon: Heart,
    title: "Efficacité & empathie",
    description:
      "Les situations d'indivision sont souvent complexes et émotionnellement chargées. Nous allions efficacité dans le traitement des dossiers et empathie dans l'accompagnement humain.",
    features: ["Dossiers complexes traités", "Médiation si nécessaire", "Discrétion absolue"],
  },
];

export function WhyUsSection() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Nos engagements
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Pourquoi Patrimoine Indivis ?
          </h2>
          <p className="text-body">
            Trois piliers fondamentaux qui guident notre approche et font notre différence
            sur le marché du rachat de parts indivises.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group bg-card rounded-3xl p-10 border border-border/50 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors">
                <pillar.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 leading-tight">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {pillar.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
