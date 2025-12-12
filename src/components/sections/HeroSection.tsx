import { Link } from "react-router-dom";
import { ArrowRight, Phone, Shield, Scale, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-building.jpg";

const trustBadges = [
  {
    icon: Shield,
    title: "100% spécialisé",
    description: "Rachat de parts indivises exclusivement",
  },
  {
    icon: Scale,
    title: "Procédure encadrée",
    description: "Formalisme article 815 du Code civil",
  },
  {
    icon: CheckCircle2,
    title: "Offre ferme",
    description: "Accompagnement jusqu'à la clôture",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-light" />
        <img
          src={heroImage}
          alt="Architecture parisienne"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      </div>

      <div className="container-wide relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            <span className="text-sm font-medium text-accent">
              Première société française spécialisée
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-display text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Rachat de parts indivises
            <span className="block text-accent">— sortie d'indivision encadrée et rapide</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-3xl mb-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
            La 1ère société française 100% dédiée au rachat de parts indivises. 
            Expertise fondée sur des milliers de cas, formalisme article 815, 
            approche humaine et discrète.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Demander une étude de rachat
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact#rappel">
                <Phone className="w-5 h-5" />
                Être rappelé
              </Link>
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
          {trustBadges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex items-start gap-4 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">
                  {badge.title}
                </h3>
                <p className="text-sm text-primary-foreground/60">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
