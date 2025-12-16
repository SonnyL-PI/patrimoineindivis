import { FileSearch, FileText, Scale, Banknote } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Analyse de votre situation",
    description:
      "Nous étudions votre dossier gratuitement et sans engagement. Échangez avec un expert qui comprend les enjeux de l'indivision.",
    highlight: "Sans frais, sans engagement",
  },
  {
    number: "02",
    icon: FileText,
    title: "Proposition de rachat",
    description:
      "Vous recevez une offre ferme et détaillée dans un délai court. Transparence totale sur les conditions et le calendrier.",
    highlight: "Offre ferme, réponse rapide",
  },
  {
    number: "03",
    icon: Scale,
    title: "Procédure encadrée",
    description:
      "Nous respectons le formalisme de l'article 815 du Code civil. Nos partenaires notaires et avocats sont formés sur ces cas spécifiques.",
    highlight: "Formalisme article 815",
  },
  {
    number: "04",
    icon: Banknote,
    title: "Versement & clôture",
    description:
      "Le versement est effectué dès la signature. Suivi personnalisé, discrétion garantie, médiation si nécessaire.",
    highlight: "Suivi, discrétion, médiation",
  },
];

export function ProcessSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Notre processus
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Comment ça se passe ?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Un accompagnement structuré, du premier contact jusqu'à la clôture du dossier.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative"
            >
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-border" />
              )}
              
              <div className="relative card-premium h-full pt-8">
                {/* Number badge */}
                <div className="absolute -top-3 left-6 px-3 py-1 bg-accent text-primary text-sm font-bold rounded-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Highlight */}
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
