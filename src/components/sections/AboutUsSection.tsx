import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Scale, Heart } from "lucide-react";

// Team photos
import team1 from "@/assets/team/team-1.jpg";
import team2 from "@/assets/team/team-2.jpg";
import team3 from "@/assets/team/team-3.jpg";
import team4 from "@/assets/team/team-4.jpg";
import team5 from "@/assets/team/team-5.jpg";
import team6 from "@/assets/team/team-6.jpg";

// Background
import bgImage from "@/assets/hero-building.jpg";

const pillars = [
  {
    icon: Shield,
    title: "Spécialiste exclusif",
    description: "Rachat de parts indivises uniquement — aucune autre activité",
  },
  {
    icon: Scale,
    title: "Expertise juridique",
    description: "Partenaires formés sur des milliers de cas, formalisme article 815",
  },
  {
    icon: Heart,
    title: "Efficacité & empathie",
    description: "Procédures maîtrisées, médiation humaine, discrétion absolue",
  },
];

const teamMembers = [
  { photo: team1, name: "Associé", role: "Direction" },
  { photo: team2, name: "Associée", role: "Juridique" },
  { photo: team3, name: "Associé", role: "Immobilier" },
  { photo: team4, name: "Associée", role: "Fiscalité" },
  { photo: team5, name: "Associé", role: "Relations" },
  { photo: team6, name: "Associée", role: "Opérations" },
];

export function AboutUsSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Bureau Patrimoine Indivis"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.7) brightness(0.4)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(215 30% 8% / 0.92) 0%, hsl(215 26% 12% / 0.88) 50%, hsl(215 26% 10% / 0.95) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Glass Card */}
          <div
            className="relative rounded-[24px] p-6 sm:p-8 lg:p-10 animate-fade-up"
            style={{
              background:
                "linear-gradient(135deg, hsl(215 26% 18% / 0.55) 0%, hsl(215 26% 14% / 0.45) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid hsl(var(--accent) / 0.15)",
              boxShadow:
                "0 25px 50px -12px hsl(215 30% 8% / 0.5), inset 0 1px 0 0 hsl(var(--accent) / 0.1)",
            }}
          >
            {/* Highlight top-left */}
            <div
              className="absolute top-0 left-0 w-32 h-32 rounded-tl-[24px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top left, hsl(var(--accent) / 0.12) 0%, transparent 70%)",
              }}
            />

            {/* Section label */}
            <p className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              À propos
            </p>

            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary-foreground font-semibold leading-tight mb-6">
              Qui sommes-nous ?
            </h2>

            {/* Story paragraphs */}
            <div className="space-y-4 text-primary-foreground/80 text-[0.9375rem] sm:text-base leading-relaxed mb-8">
              <p>
                Nous sommes dans l'immobilier depuis une trentaine d'années. En{" "}
                <span className="text-accent font-medium">2013</span>, nous avons étudié
                toutes les solutions possibles pour permettre aux copropriétaires en
                indivision de sortir de situations souvent complexes et conflictuelles.
              </p>
              <p>
                En <span className="text-accent font-medium">2017</span>, nous avons créé
                la première société en France dédiée exclusivement à l'achat de parts
                indivises — une spécialisation unique qui nous permet d'accompagner chaque
                dossier avec une expertise inégalée.
              </p>
              <p>
                Notre équipe réunit des compétences en{" "}
                <span className="text-primary-foreground font-medium">
                  droit, fiscalité et immobilier
                </span>
                . Mais notre véritable cœur de métier, c'est l'humain : écoute, médiation,
                discrétion.
              </p>
            </div>

            {/* Stats proof */}
            <div className="flex flex-wrap gap-6 mb-8 py-4 border-y border-primary-foreground/10">
              <div>
                <p className="text-accent font-serif text-2xl sm:text-3xl font-semibold">
                  30+
                </p>
                <p className="text-primary-foreground/60 text-sm">années d'expérience</p>
              </div>
              <div>
                <p className="text-accent font-serif text-2xl sm:text-3xl font-semibold">
                  1000+
                </p>
                <p className="text-primary-foreground/60 text-sm">dossiers traités</p>
              </div>
              <div>
                <p className="text-accent font-serif text-2xl sm:text-3xl font-semibold">
                  100%
                </p>
                <p className="text-primary-foreground/60 text-sm">spécialisé indivision</p>
              </div>
            </div>

            {/* Pillars */}
            <div className="grid sm:grid-cols-3 gap-4">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <pillar.icon className="w-5 h-5 text-accent mb-2" />
                  <h3 className="text-primary-foreground font-medium text-sm mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-primary-foreground/60 text-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Team Grid */}
          <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
            <p className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              L'équipe
            </p>
            <h3 className="font-serif text-xl sm:text-2xl text-primary-foreground font-semibold mb-6">
              Les associés
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group text-center"
                  style={{ animationDelay: `${200 + index * 50}ms` }}
                >
                  <div
                    className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-3 rounded-2xl overflow-hidden"
                    style={{
                      border: "2px solid hsl(var(--accent) / 0.3)",
                      boxShadow: "0 8px 24px -8px hsl(215 30% 8% / 0.6)",
                    }}
                  >
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
                  </div>
                  <p className="text-primary-foreground font-medium text-sm">
                    {member.name}
                  </p>
                  <p className="text-primary-foreground/50 text-xs">{member.role}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button
                variant="outline"
                size="lg"
                className="border-accent/40 text-accent hover:bg-accent/10 hover:text-accent"
                asChild
              >
                <Link to="/notre-approche">
                  Découvrir notre approche
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
