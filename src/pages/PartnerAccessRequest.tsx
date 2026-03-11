import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";

const professions = [
  { value: "notaire", label: "Notaire" },
  { value: "avocat", label: "Avocat" },
  { value: "agent-immobilier", label: "Agent immobilier" },
  { value: "gestionnaire-patrimoine", label: "Gestionnaire de patrimoine" },
  { value: "expert-comptable", label: "Expert-comptable" },
  { value: "autre", label: "Autre professionnel" },
];

export default function PartnerAccessRequest() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("access_requests").insert({
      full_name: fullName,
      email,
      company: company || null,
      profession,
      phone: phone || null,
      message: message || null,
    });

    if (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } else {
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Demander un accès partenaire | Patrimoine Indivis</title>
        <meta name="description" content="Demandez un accès à l'espace partenaires de Patrimoine Indivis." />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background pt-[var(--header-height)]">
        <div className="section-padding">
          <div className="container-narrow flex flex-col items-center">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
                Devenir partenaire
              </span>
              <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Demander un accès
              </h1>
              <div className="w-12 h-0.5 bg-accent mx-auto mb-4" />
              <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base leading-relaxed">
                Remplissez ce formulaire pour demander l'accès à l'espace partenaires.
                Nous reviendrons vers vous dans les plus brefs délais.
              </p>
            </div>

            <Card className="w-full max-w-lg border-border/40">
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                  <UserPlus className="w-5 h-5 text-accent" />
                </div>
                <CardTitle className="font-serif text-xl">Formulaire de demande</CardTitle>
                <CardDescription>Tous les champs marqués * sont obligatoires</CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <UserPlus className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Demande envoyée</h3>
                    <p className="text-muted-foreground text-sm">
                      Votre demande d'accès a bien été enregistrée. Notre équipe vous contactera prochainement.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nom complet *</Label>
                      <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder="Jean Dupont" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email professionnel *</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="jean.dupont@cabinet.fr" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="profession">Profession *</Label>
                      <Select value={profession} onValueChange={setProfession} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre profession" />
                        </SelectTrigger>
                        <SelectContent>
                          {professions.map((p) => (
                            <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Cabinet / Entreprise</Label>
                      <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Nom du cabinet" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="01 42 30 10 00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message (optionnel)</Label>
                      <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Précisez votre demande..." rows={3} />
                    </div>
                    <Button type="submit" variant="gold" className="w-full" disabled={loading}>
                      {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
