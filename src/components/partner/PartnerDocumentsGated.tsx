import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

const defaultDocuments = [
  { name: "Plaquette Patrimoine Indivis" },
  { name: "Mandat de recherche" },
  { name: "Annexe d'identification" },
];

interface PartnerDocumentsGatedProps {
  documents?: { name: string }[];
}

export default function PartnerDocumentsGated({ documents = defaultDocuments }: PartnerDocumentsGatedProps) {
  return (
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
          {documents.map((doc) => (
            <li key={doc.name}>
              <div className="flex items-center gap-3 w-full text-left p-3 rounded-lg border border-border/30 hover:border-accent/30 hover:bg-accent/5 cursor-pointer transition-colors group">
                <FileText className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                <span className="text-sm text-foreground flex-1">{doc.name}</span>
                <Download className="w-4 h-4 text-muted-foreground/50 group-hover:text-accent transition-colors flex-shrink-0" />
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
