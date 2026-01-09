import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FileText, Phone, Send, Shield, Upload, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import salleReunion2 from "@/assets/salle-reunion-2.png";

const situations = [{
  value: "succession",
  label: "Succession"
}, {
  value: "divorce",
  label: "Divorce"
}, {
  value: "conflit",
  label: "Désaccord familial"
}, {
  value: "blocage",
  label: "Blocage de vente"
}, {
  value: "liquidite",
  label: "Besoin de liquidité"
}, {
  value: "autre",
  label: "Autre situation"
}];

const typeBiens = [{
  value: "appartement",
  label: "Appartement"
}, {
  value: "maison",
  label: "Maison"
}, {
  value: "immeuble",
  label: "Immeuble"
}, {
  value: "terrain",
  label: "Terrain"
}, {
  value: "local",
  label: "Local commercial"
}, {
  value: "autre",
  label: "Autre"
}];

const situationsLocatives = [{
  value: "libre",
  label: "Libre"
}, {
  value: "occupe-proprietaire",
  label: "Occupé par un indivisaire"
}, {
  value: "loue",
  label: "Loué"
}, {
  value: "autre",
  label: "Autre"
}];

const creneaux = [{
  value: "matin",
  label: "Matin (9h-12h)"
}, {
  value: "apresmidi",
  label: "Après-midi (14h-18h)"
}, {
  value: "soir",
  label: "Fin de journée (18h-20h)"
}];

// French phone validation regex
const frenchPhoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

// Fraction validation
const validateFraction = (value: string): boolean => {
  const match = value.match(/^(\d+)\/(\d+)$/);
  if (!match) return false;
  const [, numerator, denominator] = match;
  const num = parseInt(numerator, 10);
  const den = parseInt(denominator, 10);
  if (den === 0) return false;
  if (num / den <= 0 || num / den > 1) return false;
  return true;
};

// Format number with thousand separators (spaces)
const formatNumberWithSpaces = (value: string): string => {
  // Remove all non-digit characters except decimal separator
  const cleanValue = value.replace(/[^\d]/g, "");
  if (!cleanValue) return "";
  // Add spaces every 3 digits from the right
  return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

// Parse formatted number to raw number
const parseFormattedNumber = (value: string): number => {
  const cleanValue = value.replace(/\s/g, "");
  return parseInt(cleanValue, 10) || 0;
};

export function ContactSection() {
  const { toast } = useToast();
  const location = useLocation();
  const formRef = useRef<HTMLDivElement>(null);
  
  // Determine initial tab from URL hash
  const getTabFromHash = (hash: string) => {
    if (hash === "#etre-rappele" || hash === "#rappel") return "rappel";
    if (hash === "#je-veux-une-offre" || hash === "#offre") return "offre";
    return "offre";
  };
  
  const [activeTab, setActiveTab] = useState(() => getTabFromHash(location.hash));
  
  // Handle hash changes and scroll to form
  useEffect(() => {
    const hash = location.hash;
    const targetTab = getTabFromHash(hash);
    
    if (hash === "#etre-rappele" || hash === "#rappel" || hash === "#je-veux-une-offre" || hash === "#offre") {
      setActiveTab(targetTab);
      
      // Scroll to form with offset for sticky header
      setTimeout(() => {
        if (formRef.current) {
          const headerOffset = 100; // Account for sticky header
          const elementPosition = formRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [location.hash]);
  
  // Update URL hash when tab changes manually
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const newHash = value === "rappel" ? "#etre-rappele" : "#je-veux-une-offre";
    window.history.replaceState(null, "", `${location.pathname}${newHash}`);
  };
  const [consentOffre, setConsentOffre] = useState(false);
  const [consentRappel, setConsentRappel] = useState(false);
  
  // Form state for offre
  const [telephonePrincipal, setTelephonePrincipal] = useState("");
  const [telephoneSecondaire, setTelephoneSecondaire] = useState("");
  const [quotePartFormat, setQuotePartFormat] = useState<"percent" | "fraction">("percent");
  const [quotePartValue, setQuotePartValue] = useState("");
  const [estimationValue, setEstimationValue] = useState("");
  
  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validatePhoneNumber = (phone: string): boolean => {
    if (!phone) return false;
    return frenchPhoneRegex.test(phone.trim());
  };

  const validateQuotePart = (): { valid: boolean; error?: string } => {
    if (!quotePartValue.trim()) {
      return { valid: false, error: "La quote-part est obligatoire" };
    }

    if (quotePartFormat === "percent") {
      const numValue = parseFloat(quotePartValue.replace(",", "."));
      if (isNaN(numValue) || numValue <= 0 || numValue > 100) {
        return { valid: false, error: "Entrez un pourcentage entre 0 et 100" };
      }
    } else {
      if (!validateFraction(quotePartValue.trim())) {
        return { valid: false, error: "Format invalide. Ex: 1/2, 3/8 (valeur ≤ 1)" };
      }
    }

    return { valid: true };
  };

  const handleSubmitOffre = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Validate phone principal
    if (!validatePhoneNumber(telephonePrincipal)) {
      newErrors.telephonePrincipal = "Numéro de téléphone invalide";
    }

    // Validate phone secondaire if filled
    if (telephoneSecondaire && !validatePhoneNumber(telephoneSecondaire)) {
      newErrors.telephoneSecondaire = "Numéro de téléphone invalide";
    }

    // Validate quote-part
    const quotePartValidation = validateQuotePart();
    if (!quotePartValidation.valid) {
      newErrors.quotePart = quotePartValidation.error || "Quote-part invalide";
    }

    if (!consentOffre) {
      toast({
        title: "Consentement requis",
        description: "Veuillez accepter la politique de confidentialité pour continuer.",
        variant: "destructive"
      });
      return;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast({
        title: "Erreur de validation",
        description: "Veuillez corriger les erreurs dans le formulaire.",
        variant: "destructive"
      });
      return;
    }

    setErrors({});

    // Prepare normalized quote-part data
    const quotePartData = {
      type: quotePartFormat,
      value: quotePartFormat === "percent" 
        ? parseFloat(quotePartValue.replace(",", ".")) 
        : quotePartValue.trim()
    };

    console.log("Quote-part data:", quotePartData);

    toast({
      title: "Demande envoyée",
      description: "Nous vous recontacterons dans les plus brefs délais."
    });
  };

  const handleSubmitRappel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consentRappel) {
      toast({
        title: "Consentement requis",
        description: "Veuillez accepter la politique de confidentialité pour continuer.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Demande envoyée",
      description: "Nous vous recontacterons dans les plus brefs délais."
    });
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-secondary/30">
      <div className="container-wide">
        {/* Microcopy Banner */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 md:mb-10 py-3 px-4 bg-accent/10 rounded-xl border border-accent/20">
          <span className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Lock className="w-4 h-4 text-accent" />
            Confidentiel
          </span>
          <span className="flex items-center gap-2 text-sm font-medium text-foreground">
            <FileText className="w-4 h-4 text-accent" />
            Sans engagement
          </span>
          <span className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone className="w-4 h-4 text-accent" />
            Réponse sous 48h
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Info */}
          <RevealOnScroll>
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Contactez-nous
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Parlons de votre situation
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-lg">
              Que vous souhaitiez une offre de rachat ou simplement être rappelé pour discuter de votre situation, dans tous les cas nous sommes à votre écoute.
            </p>
            {/* Benefits */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-0.5">
                    Confidentialité garantie
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Vos informations sont traitées avec la plus stricte confidentialité.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-0.5">
                    Étude de rachat sans engagement
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    L'analyse de votre dossier est entièrement gratuite.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-0.5">
                    Réponse dans les meilleurs délais      
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Notre équipe vous recontacte dans les 48h.
                  </p>
                </div>
              </div>
            </div>

            {/* Image d'accompagnement */}
            <div className="mt-8">
              <img src={salleReunion2} alt="Espace d'accueil – Patrimoine Indivis" className="w-full aspect-[16/10] object-cover rounded-2xl shadow-soft" loading="lazy" />
            </div>
          </RevealOnScroll>

          {/* Right: Form */}
          <div ref={formRef} id="contact-form" className="bg-card rounded-2xl p-6 md:p-8 border border-border/30 shadow-soft">
            <Tabs value={activeTab} onValueChange={handleTabChange}>
              <TabsList className="grid grid-cols-2 mb-6 bg-secondary rounded-xl p-1">
                <TabsTrigger value="offre" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm font-medium py-2.5 text-sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Je veux une offre
                </TabsTrigger>
                <TabsTrigger value="rappel" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm font-medium py-2.5 text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Être rappelé
                </TabsTrigger>
              </TabsList>

              {/* Tab: Offre */}
              <TabsContent value="offre">
                <form onSubmit={handleSubmitOffre} className="space-y-5">
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

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="votre@email.fr" required />
                  </div>

                  {/* Two phone numbers */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telephone-principal">Téléphone principal *</Label>
                      <Input 
                        id="telephone-principal" 
                        type="tel" 
                        placeholder="" 
                        value={telephonePrincipal}
                        onChange={(e) => {
                          setTelephonePrincipal(e.target.value);
                          if (errors.telephonePrincipal) {
                            setErrors(prev => ({ ...prev, telephonePrincipal: "" }));
                          }
                        }}
                        required 
                      />
                      {errors.telephonePrincipal && (
                        <p className="text-sm text-destructive">{errors.telephonePrincipal}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone-secondaire">Téléphone secondaire</Label>
                      <Input 
                        id="telephone-secondaire" 
                        type="tel" 
                        placeholder=""
                        value={telephoneSecondaire}
                        onChange={(e) => {
                          setTelephoneSecondaire(e.target.value);
                          if (errors.telephoneSecondaire) {
                            setErrors(prev => ({ ...prev, telephoneSecondaire: "" }));
                          }
                        }}
                      />
                      <p className="text-xs text-muted-foreground">(Optionnel)</p>
                      {errors.telephoneSecondaire && (
                        <p className="text-sm text-destructive">{errors.telephoneSecondaire}</p>
                      )}
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
                          {situations.map(s => (
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

                  {/* Quote-part - mandatory with format selector */}
                  <div className="space-y-3">
                    <Label>Votre quote-part *</Label>
                    <RadioGroup 
                      value={quotePartFormat} 
                      onValueChange={(value: "percent" | "fraction") => {
                        setQuotePartFormat(value);
                        setQuotePartValue("");
                        if (errors.quotePart) {
                          setErrors(prev => ({ ...prev, quotePart: "" }));
                        }
                      }}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="percent" id="format-percent" />
                        <Label htmlFor="format-percent" className="font-normal cursor-pointer">
                          Pourcentage (%)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fraction" id="format-fraction" />
                        <Label htmlFor="format-fraction" className="font-normal cursor-pointer">
                          Fraction (ex: 1/2)
                        </Label>
                      </div>
                    </RadioGroup>
                    
                    {quotePartFormat === "percent" ? (
                      <div className="space-y-1">
                        <Input 
                          id="quotepart-percent"
                          type="text"
                          placeholder="Ex: 25"
                          value={quotePartValue}
                          onChange={(e) => {
                            setQuotePartValue(e.target.value);
                            if (errors.quotePart) {
                              setErrors(prev => ({ ...prev, quotePart: "" }));
                            }
                          }}
                          required
                        />
                        <p className="text-xs text-muted-foreground">Valeur entre 0 et 100</p>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <Input 
                          id="quotepart-fraction"
                          type="text"
                          placeholder="Ex: 1/2 ou 3/8"
                          value={quotePartValue}
                          onChange={(e) => {
                            setQuotePartValue(e.target.value);
                            if (errors.quotePart) {
                              setErrors(prev => ({ ...prev, quotePart: "" }));
                            }
                          }}
                          required
                        />
                        <p className="text-xs text-muted-foreground">Format a/b (ex: 1/2, 3/8)</p>
                      </div>
                    )}
                    {errors.quotePart && (
                      <p className="text-sm text-destructive">{errors.quotePart}</p>
                    )}
                  </div>

                  {/* Optional details - visible by default */}
                  <div className="space-y-4 pt-4 border-t border-border/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                      <div className="space-y-2">
                        <Label htmlFor="typeBien">Type de bien</Label>
                        <Select>
                          <SelectTrigger className="h-10">
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            {typeBiens.map(t => (
                              <SelectItem key={t.value} value={t.value}>
                                {t.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="estimation">Estimation du bien (sans engagement)</Label>
                        <div className="relative">
                          <Input 
                            id="estimation" 
                            type="text" 
                            placeholder="Ex: 300 000"
                            value={estimationValue}
                            onChange={(e) => {
                              const formatted = formatNumberWithSpaces(e.target.value);
                              setEstimationValue(formatted);
                            }}
                            className="pr-8 h-10"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">€</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="situationLocative">Situation locative</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          {situationsLocatives.map(s => (
                            <SelectItem key={s.value} value={s.value}>
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Détails complémentaires (optionnel)</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Expliquez brièvement la situation, nombre d'indivisaires, blocages, etc." 
                        rows={3} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="documents">Documents / Photos (optionnel)</Label>
                      <label 
                        htmlFor="file-upload" 
                        className="border-2 border-dashed border-border/50 rounded-xl p-6 text-center hover:border-accent/30 transition-colors cursor-pointer block"
                      >
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Glissez vos fichiers ici ou cliquez pour sélectionner
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-1">
                          Formats acceptés : PDF, Word, Excel, JPG, PNG
                        </p>
                        <input 
                          id="file-upload"
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv,image/jpeg,image/png"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Consent checkbox */}
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="consent-offre" 
                      checked={consentOffre} 
                      onCheckedChange={checked => setConsentOffre(checked as boolean)} 
                      className="mt-1" 
                    />
                    <label htmlFor="consent-offre" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      J'accepte que mes données soient traitées conformément à la{" "}
                      <Link to="/politique-confidentialite" className="text-accent hover:underline">
                        Politique de confidentialité
                      </Link>{" "}
                      de Patrimoine Indivis. *
                    </label>
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    <Send className="w-4 h-4" />
                    Demander une étude de rachat
                  </Button>

                  {/* RGPD Notice */}
                  <div className="text-xs text-muted-foreground/80 space-y-1 pt-2">
                    <p>
                      Vos données personnelles sont utilisées exclusivement pour traiter votre demande et vous recontacter. 
                      Elles sont conservées le temps nécessaire au traitement de votre dossier.
                    </p>
                    <p>
                      Pour en savoir plus, consultez notre{" "}
                      <Link to="/politique-confidentialite" className="text-accent hover:underline">
                        Politique de confidentialité
                      </Link>.
                    </p>
                  </div>
                </form>
              </TabsContent>

              {/* Tab: Rappel */}
              <TabsContent value="rappel" id="rappel">
                <form onSubmit={handleSubmitRappel} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="telephone-rappel">Téléphone *</Label>
                    <Input id="telephone-rappel" type="tel" placeholder="" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="creneau">Créneau de rappel préféré</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un créneau" />
                      </SelectTrigger>
                      <SelectContent>
                        {creneaux.map(c => (
                          <SelectItem key={c.value} value={c.value}>
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (optionnel)</Label>
                    <Textarea id="message" placeholder="Décrivez brièvement votre situation..." rows={4} />
                  </div>

                  {/* Consent checkbox */}
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="consent-rappel" 
                      checked={consentRappel} 
                      onCheckedChange={checked => setConsentRappel(checked as boolean)} 
                      className="mt-1" 
                    />
                    <label htmlFor="consent-rappel" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      J'accepte que mes données soient traitées conformément à la{" "}
                      <Link to="/politique-confidentialite" className="text-accent hover:underline">
                        Politique de confidentialité
                      </Link>{" "}
                      de Patrimoine Indivis. *
                    </label>
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    <Phone className="w-4 h-4" />
                    Demander à être rappelé
                  </Button>

                  {/* RGPD Notice */}
                  <div className="text-xs text-muted-foreground/80 space-y-1 pt-2">
                    <p>
                      Vos données personnelles sont utilisées exclusivement pour traiter votre demande et vous recontacter. 
                      Elles sont conservées le temps nécessaire au traitement de votre dossier.
                    </p>
                    <p>
                      Pour en savoir plus, consultez notre{" "}
                      <Link to="/politique-confidentialite" className="text-accent hover:underline">
                        Politique de confidentialité
                      </Link>.
                    </p>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}