import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Upload, ExternalLink, CheckCircle2 } from "lucide-react";

const statusOptions = [
  { value: "agence", label: "Agence" },
  { value: "independant", label: "Indépendant" },
];

const caseTypes = [
  { value: "succession", label: "Succession" },
  { value: "divorce", label: "Divorce / Séparation" },
  { value: "autre", label: "Autre" },
];

const indivisionDocs = [
  "Évolution successorale",
  "Acte de notoriété / donation",
  "Titre de propriété",
  "Déclaration de succession",
  "Jugement de divorce",
];

const bienDocs = [
  "Estimation / expertise",
  "Diagnostic DPE",
  "Plans",
  "Photos",
  "Autre document utile",
];

interface PartnerFormProps {
  professionalType: "agent" | "notaire";
}

export default function PartnerForm({ professionalType }: PartnerFormProps) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [caseType, setCaseType] = useState("");
  const [description, setDescription] = useState("");
  const [indivisionFiles, setIndivisionFiles] = useState<File[]>([]);
  const [bienFiles, setBienFiles] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));

    setSubmitted(true);
    toast({
      title: "Dossier transmis",
      description: "Votre dossier a été envoyé avec succès. Notre équipe reviendra vers vous rapidement.",
    });
    setSubmitting(false);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setStatus("");
    setCaseType("");
    setDescription("");
    setIndivisionFiles([]);
    setBienFiles([]);
  };

  if (submitted) {
    return (
      <Card className="border-border/40 shadow-sm">
        <CardContent className="py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-accent" />
          </div>
          <h3 className="font-serif text-xl text-foreground mb-3">Dossier transmis avec succès</h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            Notre équipe analysera votre dossier et reviendra vers vous dans les meilleurs délais.
          </p>
          <Button variant="gold" size="sm" onClick={resetForm}>
            Transmettre un autre dossier
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/40 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="font-serif text-xl">
          Transmettre un dossier
        </CardTitle>
        <CardDescription>
          {professionalType === "agent"
            ? "Transmettez un dossier d'indivision identifié dans votre activité"
            : "Transmettez un dossier d'indivision pour le compte de vos clients"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Identity */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom *</Label>
              <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required placeholder="Dupont" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom *</Label>
              <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required placeholder="Jean" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="jean.dupont@cabinet.fr" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Statut *</Label>
              <Select value={status} onValueChange={setStatus} required>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((s) => (
                    <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Type de dossier *</Label>
              <Select value={caseType} onValueChange={setCaseType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez" />
                </SelectTrigger>
                <SelectContent>
                  {caseTypes.map((t) => (
                    <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description de la situation *</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Décrivez la situation d'indivision, les parties impliquées et le bien concerné…"
              rows={4}
            />
          </div>

          {/* Separator */}
          <div className="border-t border-border/50 pt-6">
            <h3 className="font-serif text-base font-medium text-foreground mb-1">
              Documents à transmettre
              <span className="text-muted-foreground font-sans text-sm font-normal ml-2">(optionnel)</span>
            </h3>
          </div>

          {/* Documents liés à l'indivision */}
          <div className="rounded-lg border border-border/40 p-5 space-y-3">
            <h4 className="text-sm font-medium text-foreground">Documents relatifs à l'indivision</h4>
            <p className="text-xs text-muted-foreground">
              Pièces utiles à la compréhension de la situation juridique
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-muted-foreground">
              {indivisionDocs.map((doc) => (
                <li key={doc} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-accent hover:text-accent/80 transition-colors font-medium">
                <Upload className="w-4 h-4" />
                Ajouter des fichiers
                <input
                  type="file"
                  multiple
                  className="sr-only"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={(e) => setIndivisionFiles(Array.from(e.target.files || []))}
                />
              </label>
              {indivisionFiles.length > 0 && (
                <p className="text-xs text-muted-foreground mt-2">
                  {indivisionFiles.length} fichier{indivisionFiles.length > 1 ? "s" : ""} sélectionné{indivisionFiles.length > 1 ? "s" : ""}
                </p>
              )}
            </div>
          </div>

          {/* Documents liés au bien */}
          <div className="rounded-lg border border-border/40 p-5 space-y-3">
            <h4 className="text-sm font-medium text-foreground">Documents liés au bien</h4>
            <p className="text-xs text-muted-foreground">
              Éléments permettant d'évaluer le bien immobilier
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-muted-foreground">
              {bienDocs.map((doc) => (
                <li key={doc} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-accent hover:text-accent/80 transition-colors font-medium">
                <Upload className="w-4 h-4" />
                Ajouter des fichiers
                <input
                  type="file"
                  multiple
                  className="sr-only"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={(e) => setBienFiles(Array.from(e.target.files || []))}
                />
              </label>
              {bienFiles.length > 0 && (
                <p className="text-xs text-muted-foreground mt-2">
                  {bienFiles.length} fichier{bienFiles.length > 1 ? "s" : ""} sélectionné{bienFiles.length > 1 ? "s" : ""}
                </p>
              )}
            </div>
          </div>

          {/* Coffre-fort */}
          <div className="rounded-lg bg-muted/50 border border-border/30 p-4 flex items-start gap-3">
            <ExternalLink className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground mb-2">
                Pour les fichiers volumineux, utilisez notre coffre-fort sécurisé :
              </p>
              <Button variant="goldOutline" size="sm" type="button" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Accéder au coffre-fort sécurisé
                </a>
              </Button>
            </div>
          </div>

          {/* Submit */}
          <Button type="submit" variant="gold" className="w-full sm:w-auto px-8" disabled={submitting}>
            <Send className="w-4 h-4 mr-2" />
            {submitting ? "Envoi en cours…" : "Transmettre le dossier"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
