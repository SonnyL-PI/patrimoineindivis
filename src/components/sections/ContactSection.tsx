import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Phone, Send, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const situations = [
  { value: "succession", label: "Succession" },
  { value: "divorce", label: "Divorce" },
  { value: "conflit", label: "Désaccord familial" },
  { value: "blocage", label: "Blocage de vente" },
  { value: "liquidite", label: "Besoin de liquidité" },
  { value: "autre", label: "Autre situation" },
];

const creneaux = [
  { value: "matin", label: "Matin (9h-12h)" },
  { value: "apresmidi", label: "Après-midi (14h-18h)" },
  { value: "soir", label: "Fin de journée (18h-20h)" },
];

export function ContactSection() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("offre");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Contactez-nous
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Parlons de votre situation
            </h2>
            <p className="text-body mb-8">
              Que vous souhaitiez une offre de rachat ou simplement être rappelé
              pour discuter de votre situation, nous sommes à votre écoute.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Confidentialité garantie
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Vos informations sont traitées avec la plus stricte confidentialité.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Étude gratuite et sans engagement
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    L'analyse de votre dossier est entièrement gratuite.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Réponse sous 48h
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Notre équipe vous recontacte dans les meilleurs délais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-card">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 mb-8 bg-secondary rounded-xl p-1">
                <TabsTrigger
                  value="offre"
                  className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm font-medium"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Je veux une offre
                </TabsTrigger>
                <TabsTrigger
                  value="rappel"
                  className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm font-medium"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Être rappelé
                </TabsTrigger>
              </TabsList>

              {/* Tab: Offre */}
              <TabsContent value="offre">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input id="prenom" placeholder="Votre prénom" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom *</Label>
                      <Input id="nom" placeholder="Votre nom" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="votre@email.fr" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone *</Label>
                      <Input id="telephone" type="tel" placeholder="06 00 00 00 00" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="situation">Type de situation *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          {situations.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="departement">Département du bien *</Label>
                      <Input id="departement" placeholder="Ex: 75" required />
                    </div>
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    <Send className="w-4 h-4" />
                    Demander une étude gratuite
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    En soumettant ce formulaire, vous acceptez notre{" "}
                    <a href="/politique-confidentialite" className="text-accent hover:underline">
                      politique de confidentialité
                    </a>
                    .
                  </p>
                </form>
              </TabsContent>

              {/* Tab: Rappel */}
              <TabsContent value="rappel" id="rappel">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="telephone-rappel">Téléphone *</Label>
                    <Input
                      id="telephone-rappel"
                      type="tel"
                      placeholder="06 00 00 00 00"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="creneau">Créneau de rappel préféré</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un créneau" />
                      </SelectTrigger>
                      <SelectContent>
                        {creneaux.map((c) => (
                          <SelectItem key={c.value} value={c.value}>
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (optionnel)</Label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez brièvement votre situation..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    <Phone className="w-4 h-4" />
                    Demander à être rappelé
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    En soumettant ce formulaire, vous acceptez notre{" "}
                    <a href="/politique-confidentialite" className="text-accent hover:underline">
                      politique de confidentialité
                    </a>
                    .
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
