import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Mail, Phone } from "lucide-react";

export default function PartnerContact() {
  return (
    <Card className="border-border/40 shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-accent" />
          </div>
          <CardTitle className="font-serif text-lg">Contact dédié aux professionnels</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Une question sur un dossier ? Notre équipe vous accompagne.
        </p>
        <div className="space-y-3">
          <a
            href="mailto:partenaires@patrimoineindivis.fr"
            className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4 text-accent" />
            partenaires@patrimoineindivis.fr
          </a>
          <a
            href="tel:0142301000"
            className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4 text-accent" />
            01.42.30.10.00
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
