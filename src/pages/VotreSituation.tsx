import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, AlertTriangle, Lock, Wallet, FileText, CheckCircle2 } from "lucide-react";
import successionImg from "@/assets/situation-succession-new.jpg";
import divorceImg from "@/assets/situation-divorce-new.jpg";
import conflitImg from "@/assets/situation-conflit-new.jpg";
import blocageImg from "@/assets/situation-blocage-new.jpg";
import liquiditeImg from "@/assets/situation-liquidite-new.jpg";
import fiscalImg from "@/assets/situation-fiscal-new.jpg";
const situations = [{
  id: "succession",
  icon: Users,
  image: successionImg,
  imageAlt: "Dossier d'indivision",
  title: "Succession",
  description: "Vous avez hérité d'un bien en indivision avec d'autres héritiers et souhaitez sortir de l'indivision.",
  problems: ["Désaccord entre héritiers sur le devenir du bien", "La succession n'est toujours pas close alors que vous avez l'attestation de notoriété", "Un des héritiers occupe le bien et bloque la vente de celui ci", "Un ou plusieurs héritiers fixent la valeur du bien hors marché, le bien devient invendable", "Frais de succession à payer"],
  solution: "Notre intervention permet de débloquer la situation et de transformer rapidement votre part en capital, sans dépendre de l'accord des autres héritiers."
}, {
  id: "divorce",
  icon: Heart,
  image: divorceImg,
  imageAlt: "Clés et dossier",
  title: "Divorce / Séparation",
  description: "Votre divorce a été prononcé. Une ordonnance de non-conciliation a également été rendue.",
  problems: ["Procédure de divorce longue et complexe", "Une ordonnance de non conciliation a été prononcée", "Le conjoint occupe le bien et vous payez les charges", "Votre conjoint refuse de vendre et le bien se dégrade"],
  solution: "Nous rachetons votre part dans le respect du cadre légal (article 815), vous permettant de sortir de l'indivision rapidement."
}, {
  id: "conflit",
  icon: AlertTriangle,
  image: conflitImg,
  imageAlt: "Classeur et pièces",
  title: "Conflit entre indivisaires",
  description: "Les co-indivisaires ne s'entendent pas sur l'avenir du bien : vente, location, travaux... les tensions s'accumulent.",
  problems: ["Refus de vendre le bien par un des coindivisaires", "Décisions bloquées faute de majorité aux 2/3", "Dégradation des relations familiales", "Dégradation du bien qui perd de la valeur", "Vous ne souhaitez pas transmettre cette situation à vos enfants"],
  solution: "Notre approche inclut, si nécessaire, une médiation pour préserver les relations tout en vous permettant de sortir de l'impasse."
}, {
  id: "blocage",
  icon: Lock,
  image: blocageImg,
  imageAlt: "Plan cadastral",
  title: "Bien occupé / Blocage",
  description: "Un ou plusieurs indivisaires refusent de vendre malgré la volonté de la majorité. Le bien reste bloqué.",
  problems: ["Aucune indemnité d'occupation payé par l'occupant", "Bien qui se dégrade faute d'entretien", "Charges et impôts fonciers importants alors que vous n'en profitez pas"],
  solution: "Grâce à notre expertise de l'article 815 et notre réseau de partenaires juridiques, nous pouvons vous proposer une sortie encadrée et sécurisée."
}, {
  id: "liquidite",
  icon: Wallet,
  image: liquiditeImg,
  imageAlt: "Archives de dossiers",
  title: "Besoin de liquidité",
  description: "Vous souhaitez simplement transformer votre part en capital pour financer un projet ou faire face à des besoins.",
  problems: ["Capital immobilisé dans le bien indivis", "Projet professionnel ou personnel à financer", "Autres indivisaires qui ne souhaitent pas vendre", "Besoin d'argent à court terme", "Vous souhaitez faire des donations à vos enfants en numéraire"],
  solution: "Nous vous faisons une offre ferme sous 48h et procédons au versement dès la signature. Une solution rapide et discrète."
}, {
  id: "fiscal",
  icon: FileText,
  image: fiscalImg,
  imageAlt: "Salle de réunion",
  title: "IFI / Optimisation fiscale",
  description: "Vous souhaitez sortir d'une indivision pour des raisons patrimoniales ou fiscales, notamment dans le cadre de l'IFI ou de l'Exit Taxe.",
  problems: ["Patrimoine immobilier soumis à l'IFI alors que vous n'avez que des parts indivises", "Vous souhaitez rendre vos parts indivises liquides", "Vous résidez à l'étranger et vous ne souhaitez plus être lié fiscalement à la France"],
  solution: "Nous vous permettons de céder votre part rapidement et de réorganiser votre patrimoine de manière optimale sur le plan fiscal."
}];
const VotreSituation = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Nous comprenons
              </span>
              <h1 className="heading-display text-primary-foreground mb-6">
                Votre <span className="text-accent">situation</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Chaque situation d'indivision est unique et notre approche s'adapte en fonction de chaque cas rencontré.
              </p>
            </div>
          </div>
        </section>

        {/* Situations */}
        <section className="section-padding">
          <div className="container-wide space-y-20">
            {situations.map((situation, index) => <div key={situation.id} id={situation.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <situation.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="heading-section text-foreground mb-4">{situation.title}</h2>
                  <p className="text-body mb-8">{situation.description}</p>
                  
                  <h3 className="font-semibold text-foreground mb-4">Les problèmes courants :</h3>
                  <ul className="space-y-3 mb-8">
                    {situation.problems.map(problem => <li key={problem} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                        {problem}
                      </li>)}
                  </ul>

                  <h3 className="font-semibold text-foreground mb-4">Notre solution :</h3>
                  <p className="text-body flex items-start gap-3 mb-8">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    {situation.solution}
                  </p>

                  <Button variant="gold" asChild>
                    <Link to="/contact">
                      Demander une étude de rachat
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`rounded-3xl overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img src={situation.image} alt={situation.imageAlt} className="w-full h-full object-cover aspect-[4/3]" />
                </div>
              </div>)}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="heading-section text-primary-foreground mb-6">
              Vous êtes dans une situation d’indivision conflictuelle ?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Contactez-nous pour en parler, nous trouverons ensemble la meilleure solution.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Nous contacter
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default VotreSituation;