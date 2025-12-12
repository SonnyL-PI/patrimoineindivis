import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PropositionSection() {
  return (
    <section className="section-padding bg-background" id="proposition">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-section text-foreground mb-8">
            Notre Proposition
          </h2>

          <div className="space-y-6 text-left md:text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Après étude par nos équipes et en concertation étroite avec nos notaires et nos avocats, nous vous faisons une <strong className="text-foreground">proposition pour le rachat de votre quote-part d'indivision</strong>, même si vous êtes minoritaire.
            </p>

            <p className="text-lg text-accent font-medium">
              Cette étude sera réalisée dans la plus stricte confidentialité.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nos offres sont <strong className="text-foreground">fermes et sans conditions suspensives de crédit</strong>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nous vous accompagnons dans toutes les étapes de la sortie d'indivision avec une étude notariale.
            </p>

            <p className="text-xl text-foreground font-serif italic mt-8">
              Une équipe à votre service
            </p>
          </div>

          <div className="mt-10">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Demander une étude gratuite
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
