import { Star, Quote, Clock, FileCheck, ThumbsUp } from "lucide-react";

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
    initials: "M.D.",
    situation: "Succession",
    quote:
      "Après des années de blocage avec mes frères et sœurs, Patrimoine Indivis m'a permis de sortir de l'indivision en quelques semaines. Professionnalisme et discrétion remarquables.",
    rating: 5,
  },
  {
    initials: "S.L.",
    situation: "Divorce",
    quote:
      "Dans une situation de divorce difficile, j'avais besoin de tourner la page rapidement. L'équipe a été à l'écoute et efficace. Je recommande sans hésitation.",
    rating: 5,
  },
  {
    initials: "P.R.",
    situation: "Conflit familial",
    quote:
      "Une approche humaine qui a permis de préserver les relations familiales tout en trouvant une solution équitable pour tous. Merci pour votre médiation.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Ils nous font confiance
          </span>
          <h2 className="heading-section text-primary-foreground mb-6">
            Preuves & réassurance
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Discrétion, respect des procédures et accompagnement humain :
            découvrez les retours de nos clients.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-4xl font-serif font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/60 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/30" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-primary-foreground/80 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground">
                    {testimonial.initials}
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    {testimonial.situation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-primary-foreground/50 text-sm mt-12">
          Tous les témoignages sont authentiques. Les initiales sont utilisées pour préserver la confidentialité de nos clients.
        </p>
      </div>
    </section>
  );
}
