import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Lock, Mail, Scale } from "lucide-react";

interface NotaireLoginScreenProps {
  onRequestAccess: () => void;
}

export default function NotaireLoginScreen({ onRequestAccess }: NotaireLoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast({
        title: "Erreur de connexion",
        description: "Email ou mot de passe incorrect.",
        variant: "destructive",
      });
    } else {
      toast({ title: "Connexion réussie", description: "Bienvenue dans votre espace notaire." });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
          <Scale className="w-6 h-6 text-accent" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
          Accès notaires
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
          Cet espace est réservé aux études notariales partenaires de Patrimoine Indivis.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mt-1">
          Veuillez vous authentifier pour accéder aux documents et ressources dédiés.
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5 bg-card border border-border/40 rounded-xl p-6 md:p-8 shadow-sm">
        <div className="space-y-2">
          <Label htmlFor="notaire-email" className="text-sm font-medium">
            Email professionnel
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="notaire-email"
              type="email"
              placeholder="etude@notaire.fr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="notaire-password" className="text-sm font-medium">
            Mot de passe
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="notaire-password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Button type="submit" variant="gold" className="w-full" disabled={loading}>
            {loading ? "Connexion..." : "Se connecter"}
          </Button>
          <Button type="button" variant="outline" className="w-full" onClick={onRequestAccess}>
            Demander un accès
          </Button>
        </div>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-5">
        Vos identifiants vous sont transmis par notre équipe après validation.
      </p>
    </div>
  );
}
