import { Award, Scale, Heart } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "1ère société française",
    subtitle: "100% dédiée au rachat",
    description: "Première société française exclusivement spécialisée dans le rachat de parts indivises. Notre unique métier, une vraie expertise.",
  },
  {
    icon: Scale,
    title: "Expertise juridique",
    subtitle: "Article 815 du Code civil",
    description: "Nos partenaires notaires et avocats sont formés sur la multitude de cas traités. Maîtrise parfaite du formalisme juridique.",
  },
  {
    icon: Heart,
    title: "Efficacité et empathie",
    subtitle: "Médiation et discrétion",
    description: "Nous excellons sur les indivisions complexes grâce à notre approche humaine, notre capacité de médiation et notre totale confidentialité.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary/50" id="pourquoi">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Nos engagements
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Pourquoi Patrimoine Indivis ?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Trois piliers fondamentaux qui font notre différence sur le marché du rachat de parts indivises.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="relative card-premium"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                <pillar.icon className="w-6 h-6 text-accent" />
              </div>
              
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-1">
                {pillar.title}
              </h3>
              <p className="text-accent text-xs font-medium uppercase tracking-wide mb-3">
                {pillar.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
