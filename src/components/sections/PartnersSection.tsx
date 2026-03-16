import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Patrimoine Indivis apporte une solution concrète dans des situations d'indivision souvent bloquées depuis des années.",
    name: "Maître Dubois",
    profession: "Notaire",
    location: "Paris",
  },
  {
    quote:
      "Leur expertise permet de débloquer des dossiers complexes tout en respectant le cadre juridique et humain.",
    name: "Maître Lefèvre",
    profession: "Avocat",
    location: "Lyon",
  },
  {
    quote:
      "Une collaboration efficace qui permet d'offrir une issue aux héritiers lorsque la vente devient impossible.",
    name: "Julien Martin",
    profession: "Agent immobilier",
    location: "Bordeaux",
  },
];

export function PartnersSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-wide">
        {/* Header */}
        <RevealOnScroll className="text-center mb-14">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3">
            Réseau professionnel
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
            La confiance des professionnels
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-5" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Notaires, avocats et professionnels de l'immobilier témoignent de
            leur expérience aux côtés de Patrimoine Indivis dans la résolution
            des indivisions complexes.
          </p>
        </RevealOnScroll>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {testimonials.map((t, index) => (
            <RevealOnScroll key={index} delayMs={index * 100}>
              <div className="bg-background rounded-md border border-border/40 p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <Quote
                  className="w-6 h-6 text-accent/60 mb-4 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-foreground/85 italic leading-relaxed text-[15px] mb-6 flex-1">
                  « {t.quote} »
                </p>
                <div className="border-t border-border/30 pt-4">
                  <p className="font-semibold text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {t.profession}
                    {t.location && (
                      <span className="text-muted-foreground/60">
                        {" "}
                        · {t.location}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom note */}
        <RevealOnScroll>
          <p className="text-center text-muted-foreground/70 text-sm max-w-3xl mx-auto leading-relaxed">
            Patrimoine Indivis intervient aux côtés de nombreux professionnels
            du droit et de l'immobilier sur l'ensemble du territoire.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
