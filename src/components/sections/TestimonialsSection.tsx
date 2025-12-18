import { Star, Clock, FileCheck, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: FileCheck,
    value: "500+",
    label: "Dossiers traités",
  },
  {
    icon: Clock,
    value: "48h",
    label: "Délai de réponse moyen",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Clients satisfaits",
  },
];

const testimonials = [
  {
    name: "Brigitte le crane",
    quote:
      "J'ai vraiment apprécié l'écoute, la compétence, la disponibilité et la bienveillance de Philippe Nogel et son équipe. Dans une situation compliquée, la prise en charge est complète et sécurisante. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "MM BIZIEN",
    quote:
      "Je ne regrette pas de m'être tourné vers Patrimoine Indivis. Je pensais la situation bloquée et finalement j'ai pu vendre mes parts d'indivision. Une équipe sérieuse et humaine pour un win-win à la clef. Merci !",
    rating: 5,
  },
  {
    name: "Michel H",
    quote:
      "Sérieux et professionnels, ils vous accompagnent et sont disponibles. Je recommande vivement cette Société pour la vente de vos parts d'indivision. Merci à eux de m'avoir accompagné et renseigné lorsque j'en avais besoin.",
    rating: 5,
  },
  {
    name: "Astrid Schauffler",
    quote:
      "Merci à patrimoine indivis d'exister et plus particulièrement à Monsieur SAVEAU pour son accompagnement, ses diligences, sa fiabilité et sa sympathie.",
    rating: 5,
  },
  {
    name: "Anne-Sophie Ranghiasci",
    quote:
      "En cas de difficulté ou de blocage concernant une sortie d'état d'indivision, je vous conseille vivement Patrimoine Indivis qui m'a permis de mettre terme à une situation complexe.",
    rating: 5,
  },
  {
    name: "Mélanie",
    quote:
      "Merci à toute l'équipe qui m'a sorti d'une situation complètement bloquée suite à une séparation hors mariage. Professionnalisme et accompagnement remarquables.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Ils nous font confiance
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
            Preuves & Réassurance
          </h2>
          <p className="text-primary-foreground/75 text-sm md:text-base max-w-xl mx-auto">
            Discrétion, respect des procédures et accompagnement humain :
            découvrez les retours de nos clients.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/[0.1]"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-5 md:p-6 rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/[0.1] hover:bg-primary-foreground/[0.08] transition-all duration-300"
            >
              {/* Google badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-xs text-primary-foreground/50">Avis Google</span>
              </div>

              {/* Quote */}
              <blockquote className="text-primary-foreground/85 text-sm leading-relaxed mb-4">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-primary-foreground text-sm">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google link */}
        <div className="text-center mt-8">
          <a 
            href="https://share.google/Mns4nXOvAarToXWs2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
          >
            Voir tous nos avis sur Google
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
