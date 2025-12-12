import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, AlertTriangle, Lock, Wallet } from "lucide-react";

const situations = [
  {
    icon: Users,
    slug: "succession",
    title: "Succession",
    context: "Vous avez hérité d'un bien en indivision avec d'autres héritiers.",
    benefit: "Récupérez la valeur de votre part sans attendre l'accord de tous.",
  },
  {
    icon: Heart,
    slug: "divorce",
    title: "Divorce",
    context: "Votre ex-conjoint détient une partie du bien commun.",
    benefit: "Sortez de l'indivision rapidement et tournez la page.",
  },
  {
    icon: AlertTriangle,
    slug: "conflit",
    title: "Désaccord familial",
    context: "Les co-indivisaires ne s'entendent pas sur l'avenir du bien.",
    benefit: "Une solution de sortie qui préserve les relations.",
  },
  {
    icon: Lock,
    slug: "blocage",
    title: "Blocage de vente",
    context: "Un indivisaire refuse de vendre malgré la majorité.",
    benefit: "Débloquez la situation grâce à notre expertise juridique.",
  },
  {
    icon: Wallet,
    slug: "liquidite",
    title: "Besoin de liquidité",
    context: "Vous souhaitez transformer votre part en capital.",
    benefit: "Obtenez une offre ferme dans les meilleurs délais.",
  },
];

export function SituationsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Nous comprenons
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Votre situation
          </h2>
          <p className="text-body">
            Chaque indivision est unique. Découvrez comment nous pouvons vous aider
            selon votre contexte particulier.
          </p>
        </div>

        {/* Situation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((situation) => (
            <Link
              key={situation.slug}
              to={`/votre-situation#${situation.slug}`}
              className="card-situation group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                <situation.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {situation.title}
              </h3>

              {/* Context */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {situation.context}
              </p>

              {/* Benefit */}
              <p className="text-accent text-sm font-medium mb-4">
                {situation.benefit}
              </p>

              {/* Link */}
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                Voir la solution
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
