import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Heart, 
  MessageSquareWarning, 
  Home, 
  Wallet, 
  FileText,
  ArrowRight
} from "lucide-react";

const situations = [
  {
    icon: Users,
    title: "Succession",
    description: "Vous avez hérité d'un bien en indivision et souhaitez récupérer votre part.",
    link: "/votre-situation#succession",
  },
  {
    icon: Heart,
    title: "Divorce / Séparation",
    description: "Vous êtes en instance de divorce et devez partager un bien immobilier.",
    link: "/votre-situation#divorce",
  },
  {
    icon: MessageSquareWarning,
    title: "Conflit entre indivisaires",
    description: "Des désaccords bloquent toute décision concernant le bien indivis.",
    link: "/votre-situation#conflit",
  },
  {
    icon: Home,
    title: "Bien occupé / Blocage",
    description: "Un indivisaire occupe le bien et refuse la vente ou le partage.",
    link: "/votre-situation#blocage",
  },
  {
    icon: Wallet,
    title: "Besoin de liquidité",
    description: "Vous souhaitez financer un nouveau projet de vie ou un investissement.",
    link: "/votre-situation#liquidite",
  },
  {
    icon: FileText,
    title: "IFI / Optimisation fiscale",
    description: "Vous souhaitez sortir d'une indivision pour des raisons patrimoniales.",
    link: "/votre-situation#fiscal",
  },
];

export function SituationsSection() {
  return (
    <section className="py-16 md:py-20 bg-background" id="situation">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Votre situation
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-5">
            Nous intervenons dans toutes les situations d'indivision
          </h2>
          <p className="text-base text-muted-foreground">
            Que vous soyez en indivision familiale, maritale ou autre, 
            nous avons une solution adaptée à votre cas.
          </p>
        </div>

        {/* Situations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {situations.map((situation) => (
            <div
              key={situation.title}
              className="group bg-card rounded-2xl p-7 border border-border/40 shadow-soft hover:shadow-card hover:border-accent/25 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                <situation.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {situation.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {situation.description}
              </p>
              <Link 
                to={situation.link}
                className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
              >
                Voir la solution
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Demander une étude de rachat
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
