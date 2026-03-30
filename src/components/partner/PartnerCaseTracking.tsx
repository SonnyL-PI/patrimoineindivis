import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardList, Lock, Circle } from "lucide-react";

const statuses = [
  { label: "Dossier reçu", variant: "default" as const },
  { label: "En cours d'analyse", variant: "active" as const },
  { label: "Offre en cours", variant: "active" as const },
  { label: "Finalisé", variant: "done" as const },
];

const statusStyles = {
  default: "bg-muted text-muted-foreground",
  active: "bg-accent/15 text-accent border border-accent/20",
  done: "bg-primary/10 text-primary border border-primary/20",
};

interface PartnerCaseTrackingProps {
  isAuthenticated: boolean;
  onRequestAccess: () => void;
  variant?: "agent" | "notaire";
}

export default function PartnerCaseTracking({
  isAuthenticated,
  onRequestAccess,
  variant = "agent",
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
        {isAuthenticated ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {variant === "agent"
                ? "Suivez vos dossiers et bénéficiez d'un traitement prioritaire."
                : "Accédez au suivi des dossiers en cours de traitement."}
            </p>
            <div className="space-y-2.5">
              {statuses.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 p-2.5 rounded-lg border border-border/30"
                >
                  <Circle className="w-2.5 h-2.5 flex-shrink-0 text-muted-foreground/40" />
                  <span className="text-sm text-foreground flex-1">{s.label}</span>
                  <span
                    className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${statusStyles[s.variant]}`}
                  >
                    —
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground pt-1">
              Aucun dossier transmis pour le moment.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Retrouvez l'ensemble des dossiers transmis et suivez leur avancement.
            </p>

            <div className="space-y-2.5 opacity-60 pointer-events-none select-none">
              {statuses.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 p-2.5 rounded-lg border border-border/30"
                >
                  <Circle className="w-2.5 h-2.5 flex-shrink-0 text-muted-foreground/40" />
                  <span className="text-sm text-foreground flex-1">{s.label}</span>
                  <Lock className="w-3.5 h-3.5 text-muted-foreground/40 flex-shrink-0" />
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-border/30 space-y-3">
              <p className="text-xs text-muted-foreground">
                Fonction réservée aux partenaires disposant d'un compte validé.
              </p>
              <p className="text-xs text-accent font-medium">
                Bénéficiez d'un suivi en temps réel et d'un traitement prioritaire de vos dossiers.
              </p>
              <Button variant="gold" size="sm" onClick={onRequestAccess}>
                <Lock className="w-3.5 h-3.5 mr-1.5" />
                Accéder à mon espace
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
