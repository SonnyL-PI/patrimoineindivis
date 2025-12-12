import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Comment se passe un rachat de parts indivises ?",
    answer:
      "Le processus se déroule en 4 étapes : analyse gratuite de votre situation, émission d'une offre ferme, procédure encadrée selon l'article 815 du Code civil, puis versement et clôture. Nous vous accompagnons à chaque étape avec transparence.",
  },
  {
    question: "Que dit l'article 815 du Code civil ?",
    answer:
      "L'article 815 dispose que « nul ne peut être contraint à demeurer dans l'indivision ». Il permet à tout indivisaire de demander le partage ou la sortie de l'indivision, sous certaines conditions et dans le respect d'un formalisme précis que nous maîtrisons parfaitement.",
  },
  {
    question: "Combien de temps prend une offre ?",
    answer:
      "Une fois votre dossier complet reçu, nous vous adressons une offre ferme sous 48 heures ouvrées. La durée totale de la procédure dépend ensuite de la complexité du dossier et de la réactivité des différentes parties.",
  },
  {
    question: "Dois-je informer les autres indivisaires ?",
    answer:
      "Oui, la loi impose d'informer les co-indivisaires de toute cession de parts. Nous vous accompagnons dans cette démarche et, si nécessaire, proposons une médiation pour faciliter les échanges.",
  },
  {
    question: "Quelle différence avec une agence ou un marchand de biens ?",
    answer:
      "Contrairement aux agences immobilières classiques ou aux marchands de biens, nous sommes 100% spécialisés dans le rachat de parts indivises. Cette expertise exclusive nous permet de traiter des situations que d'autres acteurs refusent, avec une connaissance approfondie du cadre juridique.",
  },
  {
    question: "Quels documents sont nécessaires ?",
    answer:
      "Pour établir une offre, nous avons besoin de l'acte de propriété, de l'attestation notariée d'indivision (ou acte de succession), d'une pièce d'identité et d'informations sur le bien. Notre équipe vous guide dans la constitution du dossier.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Questions fréquentes
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Vos questions, nos réponses
            </h2>
            <p className="text-body mb-8">
              Vous avez des interrogations sur le rachat de parts indivises ?
              Retrouvez ici les réponses aux questions les plus courantes.
            </p>
            <Button variant="gold" asChild>
              <Link to="/faq">
                Voir toutes les questions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right: Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:shadow-soft transition-shadow"
                >
                  <AccordionTrigger className="text-left font-serif text-lg font-medium text-foreground hover:text-accent py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
