import { Award, Scale, Heart } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "1ère société française",
    subtitle: "100% dédiée au rachat",
    description: "Première société française exclusivement spécialisée dans le rachat de parts indivises. Notre unique métier, notre seule expertise.",
  },
  {
    icon: Scale,
    title: "Expertise juridique",
    subtitle: "Article 815 du Code civil",
    description: "Nos partenaires notaires et avocats sont formés sur la multitude de cas traités. Maîtrise parfaite du formalisme judiciaire.",
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
    <section className="section-padding bg-secondary/30" id="pourquoi">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Nos engagements
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Pourquoi Patrimoine Indivis ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Trois piliers fondamentaux qui font notre différence sur le marché du rachat de parts indivises.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="relative bg-card rounded-3xl p-10 border border-border/50 shadow-card hover:shadow-lg transition-all duration-300 group"
            >
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent text-navy font-bold flex items-center justify-center text-lg">
                {index + 1}
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors">
                <pillar.icon className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-accent text-sm font-medium uppercase tracking-wide mb-4">
                {pillar.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
