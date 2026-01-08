import { Award, Zap, Building, Users, Euro, Lock } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const advantages = [
  {
    icon: Award,
    title: "Une véritable expertise",
    description: "Notre expertise et notre savoir-faire nous permettent de résoudre toutes les particularités juridiques de l'indivision.",
  },
  {
    icon: Zap,
    title: "Offre ferme et décision rapide",
    description: "Nos offres sont sans condition suspensive de financement ou de crédit grâce à notre surface financière.",
  },
  {
    icon: Building,
    title: "Évaluation immobilière",
    description: "Grâce à l'algorithme exclusif de Patrimoine Indivis, nous pouvons estimer avec vous la valeur de vos biens, selon votre localisation et en temps réel.",
  },
  {
    icon: Users,
    title: "Négociation et médiation",
    description: "L'humain est notre ADN, par notre écoute et notre partage nous mettrons tout en œuvre pour trouver une solution dans le traitement de votre cas particulier.",
  },
  {
    icon: Euro,
    title: "Sans intermédiaire",
    description: "Nous sommes directement acheteur de vos parts, la vente se fait donc sans intermédiaire.",
  },
  {
    icon: Lock,
    title: "Confidentialité garantie",
    description: "Dans l'intérêt commun et réciproque, nos transactions seront confidentielles et sécurisées.",
  },
];

export function AdvantagesSection() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-navy to-navy-dark text-primary-foreground" id="avantages">
      <div className="container-wide">
        {/* Header */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Nos atouts
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
            Les Avantages Patrimoine Indivis
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto" />
        </RevealOnScroll>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {advantages.map((advantage, index) => (
            <RevealOnScroll key={advantage.title} delayMs={index * 80}>
              <div className="text-center p-6 md:p-7 rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/[0.1] hover:bg-primary-foreground/[0.09] hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm h-full">
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
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
