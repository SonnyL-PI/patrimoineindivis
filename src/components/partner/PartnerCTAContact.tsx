import { Headset, Mail, Phone } from "lucide-react";

export default function PartnerCTAContact() {
  return (
    <div className="rounded-lg border border-border/40 bg-muted/40 shadow-sm p-6 md:p-8 mb-8">
      <div className="flex gap-5 items-start">
        <div className="hidden sm:flex w-12 h-12 rounded-lg bg-accent/10 items-center justify-center flex-shrink-0 mt-0.5">
          <Headset className="w-6 h-6 text-accent" />
        </div>
        <div className="space-y-3">
          <h3 className="font-serif text-lg text-foreground">
            Un accompagnement dédié aux professionnels
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            Vous souhaitez échanger en amont sur un dossier ou valider sa faisabilité ?
            Notre équipe est à votre disposition pour vous répondre rapidement.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
            <a
              href="mailto:partenaires@patrimoineindivis.fr"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4 text-accent" />
              partenaires@patrimoineindivis.fr
            </a>
            <a
              href="tel:0142301000"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              01.42.30.10.00
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
