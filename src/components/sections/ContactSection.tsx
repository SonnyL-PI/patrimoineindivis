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
import { FileText, Phone, Send, Shield, ChevronDown, ChevronUp, Upload, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const situations = [
  { value: "succession", label: "Succession" },
  { value: "divorce", label: "Divorce" },
  { value: "conflit", label: "Désaccord familial" },
  { value: "blocage", label: "Blocage de vente" },
  { value: "liquidite", label: "Besoin de liquidité" },
  { value: "autre", label: "Autre situation" },
];

const typeBiens = [
  { value: "appartement", label: "Appartement" },
  { value: "maison", label: "Maison" },
  { value: "immeuble", label: "Immeuble" },
  { value: "terrain", label: "Terrain" },
  { value: "local", label: "Local commercial" },
  { value: "autre", label: "Autre" },
];

const situationsLocatives = [
  { value: "libre", label: "Libre" },
  { value: "occupe-proprietaire", label: "Occupé par un indivisaire" },
  { value: "loue", label: "Loué" },
  { value: "autre", label: "Autre" },
];

const creneaux = [
  { value: "matin", label: "Matin (9h-12h)" },
  { value: "apresmidi", label: "Après-midi (14h-18h)" },
  { value: "soir", label: "Fin de journée (18h-20h)" },
];

export function ContactSection() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("offre");
  const [showStep2, setShowStep2] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div>
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Contactez-nous
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Parlons de votre situation
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Que vous souhaitiez une offre de rachat ou simplement être rappelé
              pour discuter de votre situation, nous sommes à votre écoute.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-accent" />
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
                    Étude de rachat sans engagement
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
              <TabsList className="grid grid-cols-2 mb-8 bg-secondary rounded-xl p-1.5">
                <TabsTrigger
                  value="offre"
                  className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm font-medium py-3"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Je veux une offre
                </TabsTrigger>
                <TabsTrigger
                  value="rappel"
                  className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm font-medium py-3"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Être rappelé
                </TabsTrigger>
              </TabsList>

              {/* Tab: Offre */}
              <TabsContent value="offre">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Step 1 */}
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

                  {/* Toggle Step 2 */}
                  <button
                    type="button"
                    onClick={() => setShowStep2(!showStep2)}
                    className="w-full flex items-center justify-center gap-2 py-3 text-sm text-accent hover:text-accent/80 transition-colors border border-dashed border-accent/30 rounded-xl hover:border-accent/50"
                  >
                    {showStep2 ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Masquer les détails optionnels
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Ajouter des détails (optionnel)
                      </>
                    )}
                  </button>

                  {/* Step 2 - Optional */}
                  {showStep2 && (
                    <div className="space-y-4 pt-4 border-t border-border/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="typeBien">Type de bien</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez" />
                            </SelectTrigger>
                            <SelectContent>
                              {typeBiens.map((t) => (
                                <SelectItem key={t.value} value={t.value}>
                                  {t.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="estimation">Estimation du bien (€)</Label>
                          <Input id="estimation" type="text" placeholder="Ex: 300 000" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="quotepart">Votre quote-part (%)</Label>
                          <Input id="quotepart" type="text" placeholder="Ex: 25" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="situationLocative">Situation locative</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez" />
                            </SelectTrigger>
                            <SelectContent>
                              {situationsLocatives.map((s) => (
                                <SelectItem key={s.value} value={s.value}>
                                  {s.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description de votre situation</Label>
                        <Textarea
                          id="description"
                          placeholder="Décrivez brièvement votre situation..."
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="documents">Documents / Photos (optionnel)</Label>
                        <div className="border-2 border-dashed border-border/50 rounded-xl p-6 text-center hover:border-accent/30 transition-colors cursor-pointer">
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Glissez vos fichiers ici ou cliquez pour sélectionner
                          </p>
                          <p className="text-xs text-muted-foreground/70 mt-1">
                            PDF, JPG, PNG (max 10 Mo)
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button type="submit" variant="gold" size="lg" className="w-full mt-2">
                    <Send className="w-4 h-4" />
                    Demander une étude de rachat
                  </Button>

                  <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-2">
                    <Shield className="w-3 h-3" />
                    Confidentiel – sans engagement.{" "}
                    <a href="/politique-confidentialite" className="text-accent hover:underline">
                      Politique de confidentialité
                    </a>
                  </p>
                </form>
              </TabsContent>

              {/* Tab: Rappel */}
              <TabsContent value="rappel" id="rappel">
                <form onSubmit={handleSubmit} className="space-y-5">
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

                  <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-2">
                    <Shield className="w-3 h-3" />
                    Confidentiel – sans engagement.{" "}
                    <a href="/politique-confidentialite" className="text-accent hover:underline">
                      Politique de confidentialité
                    </a>
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
