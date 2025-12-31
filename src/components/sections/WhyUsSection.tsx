import { Award, ShieldCheck, Heart, Users } from "lucide-react";
const pillars = [{
  icon: Award,
  title: "Leader par l'expérience et le volume",
  subtitle: "Premier acteur du marché",
  description: "Pionnier du rachat de parts indivises. Des milliers de cas traités et une spécialisation totale font de nous le leader incontestable du marché."
}, {
  icon: Heart,
  title: "Une solution au plus près de votre situation",
  subtitle: "Réconcilier patrimoine et paix familiale",
  description: "Notre expérience nous permet d'identifier la solution la plus juste et la plus sereine avec médiation, discrétion et une approche profondément humaine."
}, {
  icon: ShieldCheck,
  title: "Une approche précise, rapide et confidentiel",
  subtitle: "Étude complète de votre dossier",
  description: "Une méthode d'analyse précise en immobilier, juridique et financière. Proposition de rachat ou de solution de sortie rapide, sans engagement."
}, {
  icon: Users,
  title: "Un accompagnement dans toutes les étapes",
  subtitle: "Un suivi de bout en bout",
  description: "Nous travaillons avec des partenaires, notaires, avocats, agences immobilières. Notre objectif commun : débloquer des indivisions avec méthode et respect du droit."
}];
export function WhyUsSection() {
  return <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-white" id="pourquoi">
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
            Quatre vraies raisons de choisir Patrimoine Indivis.
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            EXPERIENCE ET SAVOIR FAIRE
          </p>
        </div>

        {/* Pillars Grid - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map(pillar => <div key={pillar.title} className="relative card-premium flex flex-col h-full">
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
            </div>)}
        </div>
      </div>
    </section>;
}