import { Phone } from "lucide-react";

export default function PartnerCTAContact() {
  return (
    <div className="flex items-center gap-4 mb-8 py-4 px-5 rounded-md bg-muted/30 border border-border/30">
      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <p className="text-sm text-foreground">
          <span className="font-medium">Un doute sur un dossier ?</span>
          <span className="text-muted-foreground ml-1.5">Échangez directement avec notre équipe avant transmission.</span>
        </p>
        <a
          href="tel:0142301000"
          className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors whitespace-nowrap"
        >
          01.42.30.10.00
        </a>
        <span className="text-xs text-muted-foreground">· Réponse rapide</span>
      </div>
    </div>
  );
}
