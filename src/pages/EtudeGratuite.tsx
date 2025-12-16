import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Logo } from "@/components/Logo";
import {
  Phone,
  Send,
  Shield,
  Upload,
  Lock,
  FileText,
  Scale,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Clock,
  Award,
  Building2,
  Users,
  Heart,
  Banknote,
  Home,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-signature.jpg";

const situations = [
  { value: "succession", label: "Succession" },
  { value: "divorce", label: "Divorce" },
  { value: "ifi", label: "IFI / Exit Tax" },
  { value: "conflit", label: "Conflit entre indivisaires" },
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

const situationCards = [
  { icon: Users, label: "Succession", color: "text-accent" },
  { icon: Heart, label: "Divorce", color: "text-accent" },
  { icon: Banknote, label: "IFI", color: "text-accent" },
  { icon: Scale, label: "Conflit", color: "text-accent" },
  { icon: Home, label: "Exit Tax", color: "text-accent" },
];

export default function EtudeGratuite() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [consent, setConsent] = useState(false);
  const [rdv, setRdv] = useState<string>("");
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    situation: "",
    departement: "",
    estimation: "",
    typeBien: "",
    quotepart: "",
    situationLocative: "",
    descriptionSuccession: "",
    descriptionBien: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone || !formData.situation || !formData.departement) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }
    setStep(2);
    window.scrollTo({ top: document.getElementById("form-section")?.offsetTop || 0, behavior: "smooth" });
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast({
        title: "Consentement requis",
        description: "Veuillez accepter la politique de confidentialité pour continuer.",
        variant: "destructive",
      });
      return;
    }
    if (!rdv) {
      toast({
        title: "Champ requis",
        description: "Veuillez indiquer si vous souhaitez prendre rendez-vous.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Demande envoyée avec succès",
      description: "Nous vous recontacterons dans les 48h.",
    });
  };

  const scrollToForm = () => {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Étude gratuite — Patrimoine Indivis</title>
        <meta
          name="description"
          content="Demandez votre étude gratuite et confidentielle. Patrimoine Indivis, spécialiste du rachat de parts indivises, vous accompagne pour débloquer votre situation d'indivision."
        />
      </Helmet>

      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
        <div className="container-wide py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo className="h-10 md:h-12" />
          </Link>
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="tel:+33100000000"
              className="hidden md:flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground text-sm"
            >
              <Phone className="w-4 h-4" />
              01 00 00 00 00
            </a>
            <Link
              to="/contact#rappel"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground hidden md:inline"
            >
              Être rappelé
            </Link>
            <Button variant="gold" size="sm" onClick={scrollToForm}>
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Demander une étude</span>
              <span className="sm:hidden">Étude</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Bureau notarial premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        <div className="container-wide relative z-10 py-12 md:py-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4 md:mb-6 leading-tight">
              Débloquez votre situation d'indivision
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 md:mb-8">
              Étude gratuite, confidentielle et sans engagement
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30">
                <CheckCircle2 className="w-4 h-4" />
                100% spécialisé
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30">
                <Scale className="w-4 h-4" />
                Article 815
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30">
                <Shield className="w-4 h-4" />
                Offre ferme
              </span>
            </div>

            <Button variant="gold" size="lg" onClick={scrollToForm} className="group">
              Demander une étude gratuite
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToForm}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground animate-bounce hidden md:block"
          aria-label="Défiler vers le formulaire"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* How We Help Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Notre méthode
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
              Comment nous débloquons votre situation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="card-premium p-6 md:p-8 bg-card rounded-2xl border border-border/30">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Étude approfondie
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Analyse immobilière, juridique, financière et fiscale complète de votre dossier.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Sans frais
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Sans engagement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Confidentialité totale
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="card-premium p-6 md:p-8 bg-card rounded-2xl border border-border/30">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Proposition de rachat
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Offre ferme dans un délai bref. Finalisation possible en moins de 3 mois.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Offre ferme et définitive
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Surface financière propre
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Sans condition de crédit
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="card-premium p-6 md:p-8 bg-card rounded-2xl border border-border/30">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Scale className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Accompagnement juridique
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Respect strict du formalisme article 815 du Code civil.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Droit de préemption
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Sommation interpellative
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  Mise en demeure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-12 md:py-16 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/30 shadow-soft">
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                      step >= 1 ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    1
                  </div>
                  <div className={`flex-1 h-1 rounded ${step >= 2 ? "bg-accent" : "bg-secondary"}`} />
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                      step >= 2 ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    2
                  </div>
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <form onSubmit={handleStep1Submit} className="space-y-5">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      Vos coordonnées
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nom *</Label>
                        <Input
                          id="nom"
                          placeholder="Votre nom"
                          value={formData.nom}
                          onChange={(e) => handleInputChange("nom", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prenom">Prénom *</Label>
                        <Input
                          id="prenom"
                          placeholder="Votre prénom"
                          value={formData.prenom}
                          onChange={(e) => handleInputChange("prenom", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.fr"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telephone">Téléphone *</Label>
                        <Input
                          id="telephone"
                          type="tel"
                          placeholder="06 00 00 00 00"
                          value={formData.telephone}
                          onChange={(e) => handleInputChange("telephone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="situation">Type de situation *</Label>
                        <Select
                          value={formData.situation}
                          onValueChange={(value) => handleInputChange("situation", value)}
                        >
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
                        <Label htmlFor="departement">Département ou ville du bien *</Label>
                        <Input
                          id="departement"
                          placeholder="Ex: 75 ou Paris"
                          value={formData.departement}
                          onChange={(e) => handleInputChange("departement", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" variant="gold" size="lg" className="w-full">
                      Continuer
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <form onSubmit={handleFinalSubmit} className="space-y-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        Détails du bien
                      </h3>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-sm text-accent hover:underline"
                      >
                        ← Retour
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="estimation">Estimation de la valeur du bien (€)</Label>
                        <Input
                          id="estimation"
                          placeholder="Ex: 300 000"
                          value={formData.estimation}
                          onChange={(e) => handleInputChange("estimation", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="typeBien">Type de bien *</Label>
                        <Select
                          value={formData.typeBien}
                          onValueChange={(value) => handleInputChange("typeBien", value)}
                        >
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quotepart">Quote-part d'indivision (%)</Label>
                        <Input
                          id="quotepart"
                          placeholder="Ex: 25"
                          value={formData.quotepart}
                          onChange={(e) => handleInputChange("quotepart", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="situationLocative">Situation locative du bien</Label>
                        <Select
                          value={formData.situationLocative}
                          onValueChange={(value) => handleInputChange("situationLocative", value)}
                        >
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
                      <Label htmlFor="descriptionSuccession">
                        Présentation de la situation successorale
                      </Label>
                      <Textarea
                        id="descriptionSuccession"
                        placeholder="Décrivez brièvement la situation (origine de l'indivision, nombre d'indivisaires, etc.)"
                        rows={3}
                        value={formData.descriptionSuccession}
                        onChange={(e) => handleInputChange("descriptionSuccession", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="descriptionBien">Descriptif du bien</Label>
                      <Textarea
                        id="descriptionBien"
                        placeholder="Surface, nombre de pièces, état général, travaux éventuels..."
                        rows={3}
                        value={formData.descriptionBien}
                        onChange={(e) => handleInputChange("descriptionBien", e.target.value)}
                      />
                    </div>

                    {/* File upload */}
                    <div className="space-y-2">
                      <Label>Photos / Documents (optionnel)</Label>
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

                    {/* RDV */}
                    <div className="space-y-3">
                      <Label>Je souhaite prendre rendez-vous *</Label>
                      <RadioGroup value={rdv} onValueChange={setRdv} className="flex gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="oui" id="rdv-oui" />
                          <Label htmlFor="rdv-oui" className="font-normal cursor-pointer">
                            Oui
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="non" id="rdv-non" />
                          <Label htmlFor="rdv-non" className="font-normal cursor-pointer">
                            Non
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Consent */}
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={consent}
                        onCheckedChange={(checked) => setConsent(checked as boolean)}
                        className="mt-1"
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                      >
                        J'accepte que mes données soient traitées conformément à la{" "}
                        <Link to="/politique-confidentialite" className="text-accent hover:underline">
                          Politique de confidentialité
                        </Link>{" "}
                        de Patrimoine Indivis. *
                      </label>
                    </div>

                    <Button type="submit" variant="gold" size="lg" className="w-full">
                      <Send className="w-4 h-4" />
                      Envoyer votre demande
                    </Button>

                    {/* RGPD mention */}
                    <div className="pt-4 border-t border-border/30">
                      <p className="text-xs text-muted-foreground/70 leading-relaxed">
                        Conformément à la loi n°78-17 du 6 janvier 1978 modifiée et au Règlement
                        européen n°2016/679/UE du 27 avril 2016, vous disposez d'un droit d'accès, de
                        rectification, de portabilité et d'effacement de vos données ou encore de
                        limitation du traitement. Vous pouvez également, pour des motifs légitimes,
                        vous opposer au traitement des données vous concernant. Pour exercer vos
                        droits, contactez-nous à{" "}
                        <a href="mailto:contact@patrimoineindivis.fr" className="text-accent hover:underline">
                          contact@patrimoineindivis.fr
                        </a>
                        .
                      </p>
                      <div className="flex gap-4 mt-3 text-xs">
                        <Link to="/politique-confidentialite" className="text-accent hover:underline">
                          Politique de confidentialité
                        </Link>
                        <Link to="/mentions-legales" className="text-accent hover:underline">
                          Mentions légales
                        </Link>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Side info */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div>
                  <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-2">
                    Étude gratuite
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Demandez votre analyse personnalisée
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Recevez une étude complète de votre situation d'indivision et une proposition
                    de rachat adaptée à vos besoins.
                  </p>
                </div>

                {/* Trust elements */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-0.5">
                        Confidentiel
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Vos données sont protégées et traitées avec discrétion.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-0.5">
                        Sans engagement
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Étude gratuite, vous restez libre de votre décision.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-0.5">
                        Réponse sous 48h
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Notre équipe vous recontacte rapidement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Situations Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Votre situation
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
              Nous intervenons dans toutes les situations
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {situationCards.map((card, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 bg-card rounded-xl border border-border/30 hover:border-accent/30 transition-colors"
              >
                <card.icon className={`w-5 h-5 ${card.color}`} />
                <span className="font-medium text-foreground">{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Notre expertise
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
              Pourquoi nous confier votre dossier ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="card-premium p-6 md:p-8 bg-card rounded-2xl border border-border/30">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Notre cœur de métier
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Patrimoine Indivis est la première société française 100% dédiée au rachat de parts
                indivises. Notre spécialisation exclusive nous permet une expertise inégalée.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-premium p-6 md:p-8 bg-card rounded-2xl border border-border/30">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Une expertise unique
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Plus de 10 ans d'expérience et des milliers de dossiers traités avec succès.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="text-center">
                  <div className="font-serif text-2xl font-semibold text-accent">10+</div>
                  <div className="text-muted-foreground text-xs">ans d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-2xl font-semibold text-accent">3000+</div>
                  <div className="text-muted-foreground text-xs">dossiers traités</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-2xl font-semibold text-accent">150M€</div>
                  <div className="text-muted-foreground text-xs">parts acquises</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <Logo className="h-8 mb-3" />
              <p className="text-sm text-primary-foreground/70">
                2, rue d'Auteuil, 75016 Paris
              </p>
              <p className="text-sm text-primary-foreground/70">
                <a href="mailto:contact@patrimoineindivis.fr" className="hover:text-primary-foreground">
                  contact@patrimoineindivis.fr
                </a>{" "}
                •{" "}
                <a href="tel:+33100000000" className="hover:text-primary-foreground">
                  01 00 00 00 00
                </a>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground">
                Retour au site
              </Link>
              <Link to="/mentions-legales" className="text-primary-foreground/70 hover:text-primary-foreground">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-primary-foreground/70 hover:text-primary-foreground">
                Confidentialité
              </Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Patrimoine Indivis. Tous droits réservés.
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t border-border/30 md:hidden z-40">
        <Button variant="gold" size="lg" className="w-full" onClick={scrollToForm}>
          <FileText className="w-4 h-4" />
          Demander une étude gratuite
        </Button>
      </div>
    </>
  );
}
