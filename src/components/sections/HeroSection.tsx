import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-signature.jpg";

const heroSlides = [
  {
    subtitle: "SORTEZ DE VOTRE INDIVISION",
    title: "VENDEZ VOS PARTS INDIVISES",
    description: "Nous vous rachetons vos parts d'indivision même minoritaires",
  },
];

export function HeroSection() {
  return (
    <section className="relative h-[75vh] min-h-[500px] lg:min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Signature d'acte notarié"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/65" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          <p className="text-primary-foreground/90 text-base md:text-lg tracking-widest uppercase mb-4 animate-fade-up">
            {heroSlides[0].subtitle}
          </p>

          {/* Main Title */}
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground font-normal tracking-wide uppercase mb-8 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            {heroSlides[0].title}
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 font-light mb-4 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            {heroSlides[0].description}
          </p>

          {/* Additional info */}
          <p 
            className="text-base md:text-lg text-primary-foreground/70 italic mb-2 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            N'hésitez pas à nous contacter pour l'étude confidentielle de votre dossier
          </p>

          {/* Legal quote */}
          <p 
            className="text-sm md:text-base text-accent font-serif italic animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            Nul ne peut être contraint à demeurer dans l'indivision
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
}
