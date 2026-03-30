import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Lock, ArrowRight } from "lucide-react";

interface PartnerPremiumSectionProps {
  isAuthenticated: boolean;
  onRequestAccess: () => void;
}

export default function PartnerPremiumSection({ isAuthenticated, onRequestAccess }: PartnerPremiumSectionProps) {
  return (
    <Card className="border-border/40 shadow-sm border-accent/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <Star className="w-5 h-5 text-accent" />
          </div>
          <div>
            <CardTitle className="font-serif text-lg">Soumettre un dossier prioritaire</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-5">
          En tant que partenaire validé, bénéficiez d'un traitement prioritaire pour vos dossiers d'indivision.
        </p>

        {isAuthenticated ? (
          <Button variant="gold" size="sm">
            Soumettre un dossier prioritaire
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <div className="pt-3 border-t border-border/30">
            <Button variant="gold" size="sm" onClick={onRequestAccess}>
              <Lock className="w-3.5 h-3.5 mr-1.5" />
              Accéder avec un compte
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
