import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { usePartnerAuth } from "@/hooks/usePartnerAuth";
import PartnerForm from "@/components/partner/PartnerForm";
import PartnerContact from "@/components/partner/PartnerContact";
import PartnerCTAContact from "@/components/partner/PartnerCTAContact";
import PartnerDocumentsGated from "@/components/partner/PartnerDocumentsGated";
import PartnerPropertiesSection from "@/components/partner/PartnerPropertiesSection";
import PartnerPremiumSection from "@/components/partner/PartnerPremiumSection";
import PartnerAccessForm from "@/components/partner/PartnerAccessForm";
import PartnerLoginDialog from "@/components/partner/PartnerLoginDialog";
import { Lock, LogOut, User } from "lucide-react";

export default function PartnerDashboard() {
  const [activeTab, setActiveTab] = useState("agents");
  const [loginOpen, setLoginOpen] = useState(false);
  const { user, isAuthenticated, signOut, loading } = usePartnerAuth();

  const handleRequestAccess = () => {
    setActiveTab("agents");
    // Scroll to access form
    document.getElementById("partner-access-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Espace professionnel | Patrimoine Indivis</title>
        <meta name="description" content="Espace dédié aux professionnels pour transmettre des dossiers d'indivision et accéder à nos ressources." />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background pt-[var(--header-height)]">
        {/* Hero banner */}
        <div className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                  Espace réservé
                </p>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
                  Espace professionnel
                </h1>
                <p className="text-primary-foreground/70 text-base md:text-lg max-w-2xl">
                  Un espace dédié aux professionnels pour transmettre des dossiers et accéder à nos ressources
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                {isAuthenticated ? (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                      <User className="w-4 h-4" />
                      <span className="hidden sm:inline">{user?.email}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={signOut}
                      className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <LogOut className="w-4 h-4 mr-1.5" />
                      Déconnexion
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setLoginOpen(true)}
                    className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Lock className="w-4 h-4 mr-1.5" />
                    Connexion partenaire
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="section-padding">
          <div className="container-wide">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full max-w-md mx-auto mb-10 bg-transparent border-b border-border rounded-none p-0 h-auto">
                <TabsTrigger
                  value="agents"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none text-muted-foreground pb-3 pt-2 text-sm md:text-base font-medium transition-colors"
                >
                  Agents immobiliers
                </TabsTrigger>
                <TabsTrigger
                  value="notaires"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none text-muted-foreground pb-3 pt-2 text-sm md:text-base font-medium transition-colors"
                >
                  Notaires
                </TabsTrigger>
              </TabsList>

              <TabsContent value="agents">
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-8">
                    <PartnerCTAContact />
                    <PartnerForm professionalType="agent" />

                    {/* Access request form for agents */}
                    {!isAuthenticated && (
                      <div id="partner-access-form">
                        <PartnerAccessForm />
                      </div>
                    )}
                  </div>
                  <div className="space-y-6">
                    {/* Ressources partenaires */}
                    <h3 className="font-serif text-lg text-foreground border-b border-border/40 pb-2">
                      Ressources partenaires
                    </h3>
                    <PartnerDocumentsGated
                      isAuthenticated={isAuthenticated}
                      onRequestAccess={handleRequestAccess}
                    />
                    <PartnerPropertiesSection
                      isAuthenticated={isAuthenticated}
                      onRequestAccess={handleRequestAccess}
                    />
                    <PartnerPremiumSection
                      isAuthenticated={isAuthenticated}
                      onRequestAccess={handleRequestAccess}
                    />
                    {!isAuthenticated && (
                      <div className="rounded-lg border border-accent/20 bg-accent/5 p-5 text-center">
                        <Lock className="w-5 h-5 text-accent mx-auto mb-3" />
                        <p className="text-sm font-medium text-foreground mb-1">Vous êtes partenaire ?</p>
                        <p className="text-xs text-muted-foreground mb-4">
                          Connectez-vous pour accéder à l'ensemble des ressources
                        </p>
                        <Button variant="gold" size="sm" onClick={() => setLoginOpen(true)}>
                          Se connecter
                        </Button>
                      </div>
                    )}
                    <PartnerContact />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notaires">
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <PartnerCTAContact />
                    <PartnerForm professionalType="notaire" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="font-serif text-lg text-foreground border-b border-border/40 pb-2">
                      Ressources partenaires
                    </h3>
                    <PartnerDocumentsGated
                      isAuthenticated={isAuthenticated}
                      onRequestAccess={() => {
                        setActiveTab("agents");
                        setTimeout(() => handleRequestAccess(), 100);
                      }}
                    />
                    <PartnerPropertiesSection
                      isAuthenticated={isAuthenticated}
                      onRequestAccess={() => {
                        setActiveTab("agents");
                        setTimeout(() => handleRequestAccess(), 100);
                      }}
                    />
                    <PartnerContact />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />

      <PartnerLoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}
