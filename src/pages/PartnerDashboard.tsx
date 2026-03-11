import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import {
  FolderUp, FileText, Phone, Mail, LogOut, Send, Download, Building2
} from "lucide-react";
import type { User } from "@supabase/supabase-js";

const caseTypes = [
  { value: "succession", label: "Succession" },
  { value: "divorce", label: "Divorce / Séparation" },
  { value: "indivision-familiale", label: "Indivision familiale" },
  { value: "indivision-investissement", label: "Indivision d'investissement" },
  { value: "blocage", label: "Situation de blocage" },
  { value: "autre", label: "Autre" },
];

const partnerDocuments = [
  { name: "Plaquette Patrimoine Indivis", icon: FileText },
  { name: "Présentation du service", icon: FileText },
  { name: "Procédure de sortie d'indivision", icon: FileText },
  { name: "Documents explicatifs", icon: FileText },
];

export default function PartnerDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Case form
  const [partnerName, setPartnerName] = useState("");
  const [partnerEmail, setPartnerEmail] = useState("");
  const [caseType, setCaseType] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [caseSubmitted, setCaseSubmitted] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (!session?.user) {
        navigate("/espace-partenaires");
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (!session?.user) {
        navigate("/espace-partenaires");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/espace-partenaires");
  };

  const handleSubmitCase = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSubmitting(true);

    // Upload files
    for (const file of files) {
      const filePath = `${user.id}/${Date.now()}-${file.name}`;
      await supabase.storage.from("partner-documents").upload(filePath, file);
    }

    // Insert case
    const { error } = await supabase.from("partner_cases").insert({
      user_id: user.id,
      partner_name: partnerName,
      partner_email: partnerEmail,
      case_type: caseType,
      description,
    });

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de transmettre le dossier. Veuillez réessayer.",
        variant: "destructive",
      });
    } else {
      setCaseSubmitted(true);
      toast({
        title: "Dossier transmis",
        description: "Votre dossier a été envoyé avec succès.",
      });
    }
    setSubmitting(false);
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background pt-[var(--header-height)] flex items-center justify-center">
          <p className="text-muted-foreground">Chargement...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Tableau de bord partenaire | Patrimoine Indivis</title>
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background pt-[var(--header-height)]">
        {/* Hero banner */}
        <div className="bg-primary text-primary-foreground py-8 md:py-10">
          <div className="container-wide flex items-center justify-between">
            <div>
              <h1 className="font-serif text-2xl md:text-3xl mb-1">Espace partenaire</h1>
              <p className="text-primary-foreground/70 text-sm">
                Bienvenue, {user?.email}
              </p>
            </div>
            <Button variant="goldOutline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>

        <div className="section-padding">
          <div className="container-wide">
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-3">
              {/* 1 — Transmettre un dossier */}
              <Card className="lg:col-span-2 border-border/40">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <FolderUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-lg">Transmettre un dossier</CardTitle>
                      <CardDescription>Envoyez un dossier d'indivision à notre équipe</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {caseSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <Send className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-serif text-lg text-foreground mb-2">Dossier transmis avec succès</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Notre équipe analysera votre dossier et reviendra vers vous rapidement.
                      </p>
                      <Button variant="gold" size="sm" onClick={() => {
                        setCaseSubmitted(false);
                        setPartnerName("");
                        setPartnerEmail("");
                        setCaseType("");
                        setDescription("");
                        setFiles([]);
                      }}>
                        Transmettre un autre dossier
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitCase} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="partnerName">Votre nom *</Label>
                          <Input id="partnerName" value={partnerName} onChange={(e) => setPartnerName(e.target.value)} required placeholder="Me Jean Dupont" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="partnerEmail">Votre email *</Label>
                          <Input id="partnerEmail" type="email" value={partnerEmail} onChange={(e) => setPartnerEmail(e.target.value)} required placeholder="jean.dupont@cabinet.fr" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="caseType">Type de dossier *</Label>
                        <Select value={caseType} onValueChange={setCaseType} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez le type" />
                          </SelectTrigger>
                          <SelectContent>
                            {caseTypes.map((t) => (
                              <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description de la situation *</Label>
                        <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required placeholder="Décrivez la situation d'indivision, les parties impliquées, les biens concernés..." rows={4} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="documents">Documents (optionnel)</Label>
                        <Input
                          id="documents"
                          type="file"
                          multiple
                          onChange={(e) => setFiles(Array.from(e.target.files || []))}
                          className="cursor-pointer"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        />
                        <p className="text-xs text-muted-foreground">PDF, DOC, DOCX, JPG, PNG — max 10 Mo par fichier</p>
                      </div>
                      <Button type="submit" variant="gold" className="w-full sm:w-auto" disabled={submitting}>
                        <Send className="w-4 h-4 mr-2" />
                        {submitting ? "Envoi en cours..." : "Transmettre le dossier"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* 2 — Documents partenaires */}
                <Card className="border-border/40">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-accent" />
                      </div>
                      <CardTitle className="font-serif text-lg">Documents</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {partnerDocuments.map((doc) => (
                        <li key={doc.name}>
                          <button className="flex items-center gap-3 w-full text-left p-3 rounded-lg border border-border/30 hover:border-accent/30 hover:bg-accent/5 transition-colors group">
                            <doc.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                            <span className="text-sm text-foreground flex-1">{doc.name}</span>
                            <Download className="w-4 h-4 text-muted-foreground/50 group-hover:text-accent transition-colors flex-shrink-0" />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground mt-4 italic">
                      Les documents seront prochainement disponibles au téléchargement.
                    </p>
                  </CardContent>
                </Card>

                {/* 3 — Contact partenaire */}
                <Card className="border-border/40">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-accent" />
                      </div>
                      <CardTitle className="font-serif text-lg">Contact dédié</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Une question sur un dossier ? Contactez notre équipe dédiée aux partenaires.
                    </p>
                    <div className="space-y-3">
                      <a
                        href="mailto:partenaires@patrimoineindivis.fr"
                        className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors"
                      >
                        <Mail className="w-4 h-4 text-accent" />
                        partenaires@patrimoineindivis.fr
                      </a>
                      <a
                        href="tel:0142301000"
                        className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors"
                      >
                        <Phone className="w-4 h-4 text-accent" />
                        01.42.30.10.00
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
