import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqCategories = [
  {
    title: "Le rachat de parts indivises",
    questions: [
      {
        question: "Comment se passe un rachat de parts indivises ?",
        answer: "Le processus se déroule en 4 étapes : analyse gratuite de votre situation, émission d'une offre ferme, procédure encadrée selon l'article 815 du Code civil, puis versement et clôture. Nous vous accompagnons à chaque étape avec transparence.",
      },
      {
        question: "Combien de temps prend une offre ?",
        answer: "Une fois votre dossier complet reçu, nous vous adressons une offre ferme sous 3-4 jours ouvrés. La durée totale de la procédure dépend ensuite de la complexité du dossier et de la réactivité des différentes parties.",
      },
      {
        question: "Comment est déterminé le prix de rachat ?",
        answer: "Le prix est calculé sur la base de la valeur vénale du bien (estimation par expert si nécessaire), de votre quote-part, et des éventuelles charges ou dettes liées au bien. Nous vous expliquons en détail le calcul de notre offre.",
      },
      {
        question: "L'étude de mon dossier est-elle payante ?",
        answer: "Non, l'analyse de votre dossier est entièrement gratuite et sans engagement. Vous ne payez rien avant d'avoir accepté notre offre et signé l'acte de cession.",
      },
    ],
  },
  {
    title: "Le cadre juridique",
    questions: [
      {
        question: "Que dit l'article 815 du Code civil ?",
        answer: "L'article 815 dispose que « nul ne peut être contraint à demeurer dans l'indivision ». Il permet à tout indivisaire de demander le partage ou la sortie de l'indivision, sous certaines conditions et dans le respect d'un formalisme précis que nous maîtrisons parfaitement.",
      },
      {
        question: "Dois-je informer les autres indivisaires ?",
        answer: "Oui, la loi impose d'informer les co-indivisaires de toute cession de parts à un tiers. Ils disposent d'un droit de préemption d'un mois pour racheter vos parts aux mêmes conditions. Nous vous accompagnons dans cette démarche.",
      },
      {
        question: "Les autres indivisaires peuvent-ils s'opposer à la vente ?",
        answer: "Non, ils ne peuvent pas s'opposer à la vente de vos parts. En revanche, ils bénéficient d'un droit de préemption : ils peuvent racheter vos parts aux mêmes conditions que notre offre dans un délai d'un mois.",
      },
      {
        question: "Quels documents sont nécessaires ?",
        answer: "Pour établir une offre, nous avons besoin de l'acte de propriété, de l'attestation notariée d'indivision (ou acte de succession), d'une pièce d'identité et d'informations sur le bien. Notre équipe vous guide dans la constitution du dossier.",
      },
    ],
  },
  {
    title: "Comparaison avec d'autres solutions",
    questions: [
      {
        question: "Quelle différence avec une agence immobilière ?",
        answer: "Une agence immobilière ne peut vendre que le bien dans son intégralité, ce qui nécessite l'accord de tous les indivisaires. Nous, nous rachetons votre part uniquement, sans avoir besoin de l'accord des autres.",
      },
      {
        question: "Quelle différence avec un marchand de biens ?",
        answer: "Contrairement aux marchands de biens généralistes, nous sommes 100% spécialisés dans le rachat de parts indivises. Cette expertise nous permet de traiter des situations complexes que d'autres refusent, avec une connaissance approfondie du cadre juridique.",
      },
      {
        question: "Pourquoi ne pas demander un partage judiciaire ?",
        answer: "Le partage judiciaire est souvent long (plusieurs années), coûteux (frais d'avocat, d'expertise, de procédure) et source de tensions familiales. Notre solution vous permet de récupérer la valeur de votre part rapidement et sereinement.",
      },
    ],
  },
  {
    title: "Cas particuliers",
    questions: [
      {
        question: "Puis-je vendre ma part si le bien est occupé ?",
        answer: "Oui, nous pouvons racheter votre part même si un autre indivisaire occupe le bien. Cette situation est d'ailleurs très courante dans les successions ou après un divorce.",
      },
      {
        question: "Et si le bien a des dettes (hypothèque, charges impayées) ?",
        answer: "Nous analysons chaque situation au cas par cas. Les dettes éventuelles sont prises en compte dans notre offre. Nous vous expliquons clairement l'impact sur le prix de rachat.",
      },
      {
        question: "Intervenez-vous dans toute la France ?",
        answer: "Oui, nous intervenons sur l'ensemble du territoire français (métropole et DOM-TOM) pour tous types de biens en indivision : appartements, maisons, terrains, locaux commerciaux.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Questions fréquentes
              </span>
              <h1 className="heading-display text-primary-foreground mb-6">
                Toutes les réponses à vos <span className="text-accent">questions</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Retrouvez ici les réponses aux questions les plus courantes sur le rachat
                de parts indivises et notre accompagnement.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="heading-card text-foreground mb-6 pb-4 border-b border-border">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${catIndex}-${index}`}
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
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/50">
          <div className="container-narrow text-center">
            <h2 className="heading-section text-foreground mb-6">
              Vous n'avez pas trouvé votre réponse ?
            </h2>
            <p className="text-body mb-8">
              Contactez-nous directement, notre équipe se fera un plaisir de répondre
              à toutes vos questions.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Nous contacter
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
