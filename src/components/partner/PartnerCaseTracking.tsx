import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";

export default function PartnerCaseTracking() {
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
        <p className="text-sm text-muted-foreground">
          Retrouvez l'ensemble des dossiers transmis et suivez leur avancement depuis votre espace partenaire.
        </p>
      </CardContent>
    </Card>
  );
}
