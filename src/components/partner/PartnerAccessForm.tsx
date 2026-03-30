import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, CheckCircle2 } from "lucide-react";

export default function PartnerAccessForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("access_requests").insert({
      full_name: fullName,
      email,
      phone: phone || null,
      profession: "agent-immobilier",
      professional_card_number: cardNumber,
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

  if (submitted) {
    return (
      <Card className="border-border/40 shadow-sm">
        <CardContent className="py-12 text-center">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-7 h-7 text-accent" />
          </div>
          <h3 className="font-serif text-xl text-foreground mb-3">Demande envoyée</h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Votre demande d'accès est en cours de validation.
            Notre équipe vous transmettra vos identifiants après vérification.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/40 shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <UserPlus className="w-5 h-5 text-accent" />
          </div>
          <div>
            <CardTitle className="font-serif text-lg">Accès partenaires agents immobiliers</CardTitle>
            <CardDescription className="mt-1">Obtenez un accès privilégié à nos ressources et biens disponibles</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="access-name">Nom / Prénom *</Label>
              <Input id="access-name" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder="Jean Dupont" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="access-email">Email professionnel *</Label>
              <Input id="access-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="jean.dupont@agence.fr" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="access-phone">Téléphone</Label>
              <Input id="access-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="01 42 30 10 00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="access-card">N° carte professionnelle *</Label>
              <Input id="access-card" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required placeholder="CPI XXXX XXXX XXXX" />
            </div>
          </div>
          <Button type="submit" variant="gold" className="w-full sm:w-auto px-8" disabled={loading}>
            <UserPlus className="w-4 h-4 mr-2" />
            {loading ? "Envoi en cours..." : "Demander un accès"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
