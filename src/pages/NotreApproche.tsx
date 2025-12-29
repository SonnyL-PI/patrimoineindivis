import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileSearch, FileText, Scale, Banknote, Shield, Users, Heart } from "lucide-react";
const steps = [{
  number: "01",
  icon: FileSearch,
  title: "Analyse de votre situation (gratuite et sans engagement)",
  duration: "1-2 jours",
  description: "Nous vous écoutons et échangeons avec vous pour comprendre votre situation, ensuite un expert dédié analyse les documents que vous nous transmettez et évalue votre situation.",
  details: ["Entretien téléphonique ou visioconférence", "Analyse des documents (acte de propriété, succession...)", "Évaluation du bien et de votre quote-part", "Identification des solutions"]
}, {
  number: "02",
  icon: FileText,
  title: "Proposition de rachat",
  duration: "48h après réception du dossier complet",
  description: "Nous vous transmettons une offre ferme et détaillée. Nous vous expliquons les conditions, le calendrier prévisionnel, et nous répondons à toutes vos questions.",
  details: ["Offre ferme et sans condition", "Conditions transparentes", "Calendrier prévisionnel", "Accompagnement dans la compréhension"]
}, {
  number: "03",
  icon: Scale,
  title: "Procédure d'exercice du droit de préemption",
  duration: "Attention aux pièges",
  description: "La cession est réalisée dans le respect du formalisme de l'article 815 du Code civil. Nos partenaires notaires et avocats sont spécialisés dans ces opérations.",
  details: ["Signification aux co-indivisaires (obligatoire)", "Respect du droit de préemption", "Rédaction des actes par notaire", "Médiation si nécessaire"]
}, {
  number: "04",
  icon: Banknote,
  title: "Acte authentique",
  duration: "Devant notaire",
  description: "Un acte authentique signé devant notaire dans les 3 mois après la fin de du droit de préemption des coindivisaires",
  details: ["Sans condition de financement", "Confidentialité garantie"]
}];
const values = [{
  icon: Shield,
  title: "Sécurité juridique",
  description: "Nous maîtrisons parfaitement le cadre légal de l'indivision et travaillons avec des partenaires (notaires, avocats) formés à ces situations spécifiques."
}, {
  icon: Users,
  title: "Accompagnement",
  description: "Nous vous accompagnons dans l'ensemble des démarches liées à la sortie d'indivision, en intégrant ses conséquences financières, fiscales, juridiques ainsi que les solutions de relogement si nécessaire."
}, {
  icon: Heart,
  title: "Approche humaine",
  description: "Nous comprenons que l'indivision touche souvent à des situations familiales sensibles. Discrétion et empathie guident notre accompagnement."
}];
const NotreApproche = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Méthodologie
              </span>
              <h1 className="heading-display text-primary-foreground mb-6">
                Notre <span className="text-accent">approche</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Chacun de nos conseillers prendra le temps nécessaire pour échanger avec vous, comprendre votre situation et étudier votre dossier.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="heading-section text-foreground mb-6">
                Les 4 étapes de notre accompagnement
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Un processus clair et balisé pour vous offrir sérénité et visibilité
                tout au long de la procédure.
              </p>
            </div>

            <div className="space-y-8 max-w-3xl mx-auto">
              {steps.map(step => <div key={step.number} className="bg-card rounded-2xl p-8 border border-border/50">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="heading-card text-foreground">{step.title}</h3>
                      <p className="text-accent text-sm font-medium mt-1">{step.duration}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map(detail => <li key={detail} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {detail}
                      </li>)}
                  </ul>
                </div>)}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-secondary/50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-section text-foreground mb-6">
                Nos valeurs
              </h2>
              <p className="text-body text-center mx-auto">
                Ce qui nous guide au quotidien dans l'accompagnement de nos clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map(value => <div key={value.title} className="card-premium text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="heading-card text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Article 815 */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="bg-primary rounded-3xl p-10 md:p-16 text-primary-foreground">
              <div className="flex items-center gap-4 mb-6">
                <Scale className="w-10 h-10 text-accent" />
                <h2 className="heading-section text-primary-foreground">
                  L'article 815 du Code civil
                </h2>
              </div>
              <blockquote className="border-l-4 border-accent pl-6 py-2 mb-6">
                <p className="text-xl italic text-primary-foreground/90">
                  « Nul ne peut être contraint à demeurer dans l'indivision et le partage
                  peut toujours être provoqué, à moins qu'il n'y ait été sursis par jugement
                  ou convention. »
                </p>
              </blockquote>
              <p className="text-primary-foreground/70 leading-relaxed mb-6">
                Ce principe fondamental du droit français garantit à chaque indivisaire le droit
                de sortir de l'indivision. Notre expertise consiste à mettre en œuvre ce droit
                dans le respect du formalisme légal, en protégeant vos intérêts tout en préservant
                les relations avec les autres indivisaires.
              </p>
              <Button variant="hero" asChild>
                <Link to="/comprendre-indivision">
                  En savoir plus sur l'indivision
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="heading-section text-primary-foreground mb-6">
              Prêt à sortir de l'indivision ?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Contactez-nous pour une étude de rachat sans engagement de votre situation.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Demander une étude de rachat
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default NotreApproche;