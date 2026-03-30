import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Lock, ArrowRight } from "lucide-react";

interface PartnerPropertiesSectionProps {
  isAuthenticated: boolean;
  onRequestAccess: () => void;
}

export default function PartnerPropertiesSection({ isAuthenticated, onRequestAccess }: PartnerPropertiesSectionProps) {
  return (
    <Card className="border-border/40 shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <Home className="w-5 h-5 text-accent" />
          </div>
          <div>
            <CardTitle className="font-serif text-lg">Biens disponibles à la revente</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-5">
          Consultez les biens issus de nos opérations d'indivision, actuellement disponibles pour vos acquéreurs.
        </p>

        {isAuthenticated ? (
          <Button variant="gold" size="sm">
            Accéder aux biens disponibles
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
