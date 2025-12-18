import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Phone, 
  Clock, 
  FileText, 
  Shield, 
  CheckCircle2, 
  Star, 
  ArrowRight,
  Send,
  Building2,
  Scale,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Logo } from "@/components/Logo";
import { PremiumPlate } from "@/components/ui/PremiumPlate";
import heroImage from "@/assets/hero-haussmann.jpg";

// Minimal Header for LP
function LPHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-primary">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link to="/lp" className="flex items-center">
            <Logo className="h-8 md:h-10" />
          </Link>
          <Button variant="gold" size="sm" asChild>
            <a href="#contact">
              <Phone className="w-4 h-4" />
              Être rappelé
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

// Minimal Footer for LP
function LPFooter() {
  return (
    <footer className="bg-primary py-6 border-t border-border/20">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Patrimoine Indivis – Tous droits réservés</p>
          <div className="flex items-center gap-4">
            <Link to="/mentions-legales" className="hover:text-accent transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-accent transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Trust Banner
function TrustBanner() {
  const items = [
    { icon: Clock, text: "Réponse sous 24h" },
    { icon: FileText, text: "Dossier étudié gratuitement" },
    { icon: Shield, text: "Confidentialité garantie" },
  ];

  return (
    <div className="bg-accent/10 border-y border-accent/20">
      <div className="container-wide py-3">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {items.map((item, index) => (
            <span key={index} className="flex items-center gap-2 text-sm font-medium text-foreground">
              <item.icon className="w-4 h-4 text-accent" />
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Hero Section (simplified)
function LPHero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Architecture parisienne"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <div className="container-wide relative z-10 py-12 md:py-16">
        <div className="max-w-2xl">
          <PremiumPlate className="p-8 md:p-10">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Spécialiste du rachat de parts indivises
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Sortez de l'indivision rapidement et sereinement
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Succession bloquée, divorce, désaccord familial ? Nous rachetons vos parts 
              indivises pour vous permettre d'avancer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="#contact">
                  Demander une étude de rachat
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-accent/30 text-foreground hover:bg-accent/10">
                <a href="#contact">
                  <Phone className="w-4 h-4" />
                  Être rappelé
                </a>
              </Button>
            </div>
          </PremiumPlate>
        </div>
      </div>
    </section>
  );
}

// Proof/Expertise Section
function ProofSection() {
  const proofs = [
    {
      icon: Building2,
      title: "100% spécialisés",
      description: "Première société française dédiée exclusivement au rachat de parts indivises."
    },
    {
      icon: Scale,
      title: "Expertise juridique",
      description: "Maîtrise du formalisme article 815 du Code civil et milliers de dossiers traités."
    },
    {
      icon: Users,
      title: "Approche humaine",
      description: "Médiation et accompagnement personnalisé pour les situations les plus complexes."
    }
  ];

  return (
    <section id="expertise" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Pourquoi nous faire confiance
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
            Une expertise unique en France
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofs.map((proof, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 border border-border/30 shadow-soft text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <proof.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {proof.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {proof.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Recent Cases Section (simplified)
function LPRecentCases() {
  const cases = [
    { type: "Succession", location: "Paris 16e", quotepart: "25%", result: "Offre sous 48h" },
    { type: "Divorce", location: "Lyon", quotepart: "50%", result: "Signature en 3 semaines" },
    { type: "Blocage familial", location: "Bordeaux", quotepart: "33%", result: "Médiation réussie" },
  ];

  return (
    <section id="cas" className="section-padding bg-card">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Cas récents
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
            Des situations résolues chaque semaine
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, index) => (
            <div 
              key={index}
              className="bg-secondary/50 rounded-2xl p-6 border border-border/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                  {c.type}
                </span>
                <span className="text-xs text-muted-foreground">{c.location}</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Quote-part : <span className="text-foreground font-medium">{c.quotepart}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Résultat : <span className="text-accent font-medium">{c.result}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Google Reviews Section
function LPReviews() {
  const reviews = [
    {
      name: "Marie L.",
      rating: 5,
      text: "Situation de succession très compliquée résolue en moins d'un mois. Équipe réactive et professionnelle.",
    },
    {
      name: "Philippe D.",
      rating: 5,
      text: "Après des années de blocage avec mon ex-épouse, j'ai enfin pu sortir de l'indivision. Merci !",
    },
    {
      name: "Sophie M.",
      rating: 5,
      text: "Offre rapide et juste. Le processus était clair du début à la fin. Je recommande.",
    },
  ];

  return (
    <section id="avis" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Avis clients
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Ce que disent nos clients
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">4.9/5 sur Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 border border-border/30 shadow-soft"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                "{review.text}"
              </p>
              <p className="font-medium text-foreground text-sm">{review.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a 
            href="https://share.google/Mns4nXOvAarToXWs2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
          >
            Voir tous les avis sur Google
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// FAQ Section (simplified)
function LPFAQ() {
  const faqs = [
    {
      question: "Comment se passe un rachat de parts indivises ?",
      answer: "Le processus se déroule en 4 étapes : analyse gratuite de votre situation, émission d'une offre ferme, procédure encadrée selon l'article 815 du Code civil, puis versement et clôture."
    },
    {
      question: "Combien de temps prend une offre ?",
      answer: "Une fois votre dossier complet reçu, nous vous adressons une offre ferme sous 48 heures ouvrées."
    },
    {
      question: "Dois-je informer les autres indivisaires ?",
      answer: "Oui, la loi impose d'informer les co-indivisaires de toute cession de parts. Nous vous accompagnons dans cette démarche."
    },
    {
      question: "Quels documents sont nécessaires ?",
      answer: "Acte de propriété, attestation notariée d'indivision (ou acte de succession), pièce d'identité et informations sur le bien."
    },
  ];

  return (
    <section id="faq" className="section-padding bg-card">
      <div className="container-wide max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Questions fréquentes
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
            Vos questions, nos réponses
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-secondary/50 rounded-xl border border-border/30 px-6 data-[state=open]:shadow-soft transition-shadow"
            >
              <AccordionTrigger className="text-left font-serif text-base font-medium text-foreground hover:text-accent py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// Contact Form Section
function LPContact() {
  const { toast } = useToast();
  const [consent, setConsent] = useState(false);

  const situations = [
    { value: "succession", label: "Succession" },
    { value: "divorce", label: "Divorce" },
    { value: "conflit", label: "Désaccord familial" },
    { value: "blocage", label: "Blocage de vente" },
    { value: "liquidite", label: "Besoin de liquidité" },
    { value: "autre", label: "Autre situation" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      toast({
        title: "Consentement requis",
        description: "Veuillez accepter la politique de confidentialité pour continuer.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Demande envoyée",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-wide max-w-2xl">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Contactez-nous
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Demandez votre étude de rachat
          </h2>
          <p className="text-muted-foreground">
            Gratuite, confidentielle, sans engagement.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/30 shadow-soft">
          <form onSubmit={handleSubmit} className="space-y-5">
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
              Demander une étude de rachat
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Sticky CTA Mobile
function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] md:hidden bg-primary/95 backdrop-blur-sm border-t border-border/30 p-3 safe-area-bottom">
      <Button variant="gold" size="lg" className="w-full" asChild>
        <a href="#contact">
          <Send className="w-4 h-4" />
          Demander une étude gratuite
        </a>
      </Button>
    </div>
  );
}

// Main Landing Page
export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Rachat de Parts Indivises | Patrimoine Indivis</title>
        <meta 
          name="description" 
          content="Sortez de l'indivision rapidement. Succession, divorce, blocage familial : nous rachetons vos parts indivises. Réponse sous 24h, étude gratuite." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <LPHeader />
      
      <main className="pb-16 md:pb-0">
        <LPHero />
        <TrustBanner />
        <ProofSection />
        <LPRecentCases />
        <LPReviews />
        <LPFAQ />
        <LPContact />
      </main>

      <LPFooter />
      <StickyCTA />
    </>
  );
}
