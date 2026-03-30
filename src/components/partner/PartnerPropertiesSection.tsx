import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";

export default function PartnerPropertiesSection() {
  return (
    <Card className="border-border/40 shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <Home className="w-5 h-5 text-accent" />
          </div>
          <CardTitle className="font-serif text-lg">Biens disponibles à la revente</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-5">
          Consultez les biens issus de nos opérations d'indivision, actuellement disponibles pour vos acquéreurs.
        </p>
        <Button variant="gold" size="sm">
          Accéder aux biens disponibles
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}
