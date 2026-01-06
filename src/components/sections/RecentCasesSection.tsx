import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import salleReunion from "@/assets/salle-reunion.png";

interface CaseData {
  id: string;
  name: string;
  quotepart: string;
  location: string;
  result: string;
  fullText: string;
}

const recentCases: CaseData[] = [
  {
    id: "marilyne-t",
    name: "Marilyne T.",
    quotepart: "50%",
    location: "Île-de-France",
    result: "Clôture en 4 semaines",
    fullText: "Après dix-sept ans de procédure, Marilyne a pu sortir de son indivision avec sa sœur. Patrimoine Indivis a acheté ses parts indivises et l'a accompagnée dans son nouveau projet pour acquérir la maison de ses rêves.",
  },
  {
    id: "helene-k",
    name: "Hélène K.",
    quotepart: "50%",
    location: "Paris (75)",
    result: "Offre acceptée en 3 mois",
    fullText: "En indivision sur un bel appartement parisien avec sa belle-mère à 50% depuis le décès de son père, elle payait toutes les charges de la copropriété et les travaux (les indivisaires étant solidaires devant la copropriété). Elle souhaitait sortir de l'indivision pour récupérer son actif et aider ses enfants dans leurs études. Mais sa belle-mère refusait de vendre l'appartement. Elle a contacté Patrimoine Indivis et a vendu ses parts en l'espace de trois mois.",
  },
  {
    id: "bertrand-d",
    name: "Bertrand D.",
    quotepart: "67%",
    location: "Normandie / PACA / Paris",
    result: "Négociation en cours",
    fullText: "À la suite d'une succession, Bertrand s'est retrouvé en indivision avec des cousins plutôt pas sympathiques. Une propriété en Normandie, un appartement à Saint-Raphaël et deux petits appartements loués à Paris. Sous pression de ses cousins et ne pouvant pas utiliser les biens, il a décidé de vendre ses parts indivises. Patrimoine Indivis a acheté les parts de Bertrand et nous sommes actuellement en négociation avec nos coindivisaires (les cousins).",
  },
  {
    id: "laurence-pierre-m",
    name: "Laurence et Pierre M.",
    quotepart: "20% chacun",
    location: "Lyon (69)",
    result: "Rachat des parts",
    fullText: "Issus d'une fratrie de cinq, ils étaient propriétaires de 20% chacun d'un immeuble à Lyon. Toutes les décisions étaient prises par les autres coindivisaires et ils ne percevaient que très peu de loyers. Ils ont tenté à l'amiable de vendre leurs parts à leurs frères et sœurs, mais impossible de trouver une solution amiable. Puis ils ont entamé une procédure en partage qui dure depuis 7 ans, sans sortie en vue. Nous avons travaillé avec Laurence et Pierre pour finalement trouver une solution et racheter leurs parts indivises.",
  },
  {
    id: "jacques-a",
    name: "Jacques A.",
    quotepart: "50%",
    location: "Île-de-France",
    result: "Médiation puis rachat",
    fullText: "Jacques est en situation de handicap et il souhaite s'acheter une petite maison en province pour sa retraite. Mais sa sœur souhaite garder la maison familiale en région parisienne pour en profiter pendant les vacances. Patrimoine Indivis a tenté, pour le compte de Jacques, de trouver une médiation mais sans succès. Il a vendu ses parts à Patrimoine Indivis et est sorti de l'indivision.",
  },
  {
    id: "malika-b",
    name: "Malika B.",
    quotepart: "30%",
    location: "Alpes-Maritimes (06)",
    result: "Rachat + procédure en cours",
    fullText: "En indivision avec son ex-mari, après une ordonnance de non-conciliation, elle souhaite vendre ses parts. Son avocat nous a contactés pour nous demander d'étudier ce dossier. L'appartement, dans les Alpes-Maritimes, était occupé par l'ex-mari qui ne souhaitait pas vendre. Patrimoine Indivis a acheté les parts de Malika, qui a pu reprendre sa liberté. Nous sommes actuellement en procédure avec le mari.",
  },
];

export function RecentCasesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-secondary/40" id="cas-recents">
      <div className="container-wide">
        {/* Header - 2 columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-14">
          {/* Left: Text */}
          <RevealOnScroll className="text-center lg:text-left">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
              Cas récents
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Quelques exemples de dossiers
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto lg:mx-0">
              Exemples anonymisés. Chaque situation est unique.
            </p>
          </RevealOnScroll>

          {/* Right: Image */}
          <RevealOnScroll delay={100} className="order-first lg:order-last">
            <img
              src={salleReunion}
              alt="Salle de réunion – Patrimoine Indivis"
              className="w-full h-[280px] md:h-[340px] lg:h-[360px] object-cover rounded-2xl shadow-soft"
              loading="lazy"
            />
          </RevealOnScroll>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {recentCases.map((caseItem, index) => (
            <RevealOnScroll key={caseItem.id} delay={index * 80}>
              <button
                onClick={() => setSelectedCase(caseItem)}
                className="group bg-card rounded-2xl p-6 border border-border/20 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 text-left cursor-pointer w-full h-full"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {caseItem.name}
                </h3>
                <p className="text-accent font-semibold mb-2">
                  Quote-part : {caseItem.quotepart}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {caseItem.location}
                </p>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-sm">{caseItem.result}</span>
                </div>
              </button>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-14">
          <Button variant="goldOutline" size="lg" asChild>
            <Link to="/contact">
              Étudier mon dossier
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedCase} onOpenChange={(open) => !open && setSelectedCase(null)}>
        <DialogContent className="max-w-[720px] w-[calc(100%-2rem)] max-h-[85vh] overflow-y-auto bg-background border-border/30 rounded-2xl shadow-xl p-0">
          <DialogHeader className="p-6 pb-4 border-b border-border/20">
            <DialogTitle className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              {selectedCase?.name}
            </DialogTitle>
            <DialogDescription className="text-accent font-semibold mt-2 text-base">
              Quote-part : {selectedCase?.quotepart}
            </DialogDescription>
          </DialogHeader>
          <div className="p-6 pt-5">
            <p className="text-foreground/90 leading-relaxed text-base">
              {selectedCase?.fullText}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
