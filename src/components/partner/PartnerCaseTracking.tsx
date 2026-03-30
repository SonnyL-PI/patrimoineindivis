import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardList, Lock } from "lucide-react";

interface PartnerCaseTrackingProps {
  isAuthenticated: boolean;
  onRequestAccess: () => void;
}

export default function PartnerCaseTracking({
  isAuthenticated,
  onRequestAccess,
}: PartnerCaseTrackingProps) {
  return (
    <Card className="border-border/40 shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <ClipboardList className="w-5 h-5 text-accent" />
          </div>
          <CardTitle className="font-serif text-lg">Suivi de vos dossiers</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Retrouvez l'ensemble des dossiers transmis et suivez leur avancement depuis votre espace partenaire.
        </p>

        {!isAuthenticated && (
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
