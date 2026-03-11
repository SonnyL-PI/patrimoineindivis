import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Lock, Mail } from "lucide-react";

export default function PartnerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
      navigate("/espace-partenaires/dashboard");
    }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Accès partenaires | Patrimoine Indivis</title>
        <meta name="description" content="Espace réservé aux professionnels partenaires de Patrimoine Indivis." />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background pt-[var(--header-height)]">
        <div className="section-padding">
          <div className="container-narrow flex flex-col items-center">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
                Espace réservé
              </span>
              <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Accès partenaires
              </h1>
              <div className="w-12 h-0.5 bg-accent mx-auto mb-4" />
              <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base leading-relaxed">
                Cet espace est réservé aux professionnels partenaires de Patrimoine Indivis.
                Connectez-vous pour accéder aux ressources et transmettre un dossier.
              </p>
            </div>

            <Card className="w-full max-w-md border-border/40">
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                  <Lock className="w-5 h-5 text-accent" />
                </div>
                <CardTitle className="font-serif text-xl">Connexion</CardTitle>
                <CardDescription>Entrez vos identifiants pour accéder à votre espace</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Button type="submit" variant="gold" className="w-full" disabled={loading}>
                    {loading ? "Connexion..." : "Se connecter"}
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <Link
                    to="/espace-partenaires/demande-acces"
                    className="text-sm text-accent hover:underline font-medium"
                  >
                    Demander un accès
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
