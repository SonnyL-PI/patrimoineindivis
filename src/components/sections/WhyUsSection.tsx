import { Award, ShieldCheck, Heart } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Leader par le volume et l'expérience",
    subtitle: "1er acteur du marché",
    description: "Nous avons créé un métier : le rachat de parts indivises. Des milliers de cas traités et une spécialisation totale font de nous le leader incontestable du marché.",
  },
  {
    icon: ShieldCheck,
    title: "Un process qualité, rapide et confidentiel",
    subtitle: "Étude précise de votre dossier",
    description: "Un process développé et affiné depuis des années pour analyser votre situation rapidement, en toute confidentialité, et produire une étude précise au plus près de votre demande.",
  },
  {
    icon: Heart,
    title: "Une solution au plus près de votre situation",
    subtitle: "Sur-mesure et humain",
    description: "Notre expérience nous permet d'identifier la solution la plus juste selon votre contexte d'indivision, avec médiation, discrétion et une approche profondément humaine.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary/50" id="pourquoi">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Nos engagements
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Pourquoi Patrimoine Indivis ?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-4">
            Trois vraies raisons de choisir Patrimoine Indivis.
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Première société française 100% dédiée au rachat de parts indivises — et 1er acteur du marché par le volume et l'expérience.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative card-premium flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
                <pillar.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                {pillar.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
