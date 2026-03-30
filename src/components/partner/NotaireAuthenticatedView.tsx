import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Building2, Mail, Phone } from "lucide-react";
import PartnerCaseTracking from "@/components/partner/PartnerCaseTracking";

const notaireDocuments = [
  { name: "Plaquette Patrimoine Indivis" },
  { name: "Estimation à réaliser pour le compte de Patrimoine Indivis" },
  { name: "Mandat de vente de biens appartenant à Patrimoine Indivis" },
];

export default function NotaireAuthenticatedView() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Documents */}
      <Card className="border-border/40 shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-accent" />
            </div>
            <CardTitle className="font-serif text-lg">Documents professionnels</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {notaireDocuments.map((doc) => (
              <li key={doc.name}>
                <button className="flex items-center gap-3 w-full text-left p-3 rounded-lg border border-border/30 hover:border-accent/30 hover:bg-accent/5 transition-colors group">
                  <FileText className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                  <span className="text-sm text-foreground flex-1">{doc.name}</span>
                  <Download className="w-4 h-4 text-muted-foreground/50 group-hover:text-accent transition-colors flex-shrink-0" />
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Suivi des dossiers */}
      <PartnerCaseTracking
        isAuthenticated={true}
        onRequestAccess={() => {}}
      />

      {/* Contact dédié */}
      <Card className="border-border/40 shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-accent" />
            </div>
            <CardTitle className="font-serif text-lg">Contact dédié aux études notariales</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Notre équipe est à votre disposition pour toute question relative à un dossier ou à la mise en œuvre d'une opération.
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
    </div>
  );
}
