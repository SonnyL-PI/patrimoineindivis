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
import PartnerCaseTracking from "@/components/partner/PartnerCaseTracking";
import NotaireLoginScreen from "@/components/partner/NotaireLoginScreen";
import NotaireAuthenticatedView from "@/components/partner/NotaireAuthenticatedView";
import { Lock, LogOut, User, Shield, ArrowRight, FileText } from "lucide-react";

export default function PartnerDashboard() {
  const [activeTab, setActiveTab] = useState("agents");
  const [loginOpen, setLoginOpen] = useState(false);
  const { user, isAuthenticated, signOut, loading } = usePartnerAuth();

  const handleRequestAccess = () => {
    setActiveTab("agents");
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
              <div className="max-w-2xl">
                <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                  Espace réservé
                </p>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
                  Espace professionnel
                </h1>
                <p className="text-primary-foreground/70 text-base md:text-lg mb-3">
                  Un espace dédié aux professionnels pour transmettre des dossiers librement et accéder, après validation, à nos ressources et biens disponibles à la revente.
                </p>
                <p className="text-primary-foreground/50 text-sm mb-8">
                  Une question sur un dossier ? Échangez avec notre équipe au{" "}
                  <a href="tel:0142301000" className="font-semibold text-accent hover:text-accent/80 transition-colors">01.42.30.10.00</a>.
                </p>
                {!isAuthenticated && (
                  <div className="flex flex-col sm:flex-row items-start gap-3">
                    <Button variant="gold" size="lg" onClick={() => setLoginOpen(true)}>
                      <Lock className="w-4 h-4 mr-2" />
                      Accès partenaires
                    </Button>
                    <Button variant="heroOutline" size="lg" onClick={handleRequestAccess}>
                      Demander un accès
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
              {isAuthenticated && (
                <div className="flex items-center gap-3 flex-shrink-0">
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
              )}
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
                    <PartnerForm professionalType="agent" />

                    {!isAuthenticated && (
                      <div id="partner-access-form">
                        <PartnerAccessForm />
                      </div>
                    )}
                  </div>
                  <div className="space-y-6">
                    <h3 className="font-serif text-lg text-foreground border-b border-border/40 pb-2">
                      Ressources partenaires
                    </h3>
                    <PartnerDocumentsGated
                      isAuthenticated={isAuthenticated}
                      onRequestAccess={() => setLoginOpen(true)}
                    />
                    <PartnerPropertiesSection
                      isAuthenticated={isAuthenticated}
                      onRequestAccess={() => setLoginOpen(true)}
                    />
                    <PartnerCaseTracking
                      isAuthenticated={isAuthenticated}
                      onRequestAccess={() => setLoginOpen(true)}
                    />
                    <PartnerPremiumSection
                      isAuthenticated={isAuthenticated}
                      onRequestAccess={() => setLoginOpen(true)}
                    />
                    <PartnerContact />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notaires">
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-8">
                    <PartnerForm professionalType="notaire" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="font-serif text-lg text-foreground border-b border-border/40 pb-2">
                      Ressources notaires
                    </h3>
                    <PartnerDocumentsGated
                      isAuthenticated={isAuthenticated}
                      onRequestAccess={() => setLoginOpen(true)}
                      documents={[
                        { name: "Plaquette Patrimoine Indivis" },
                        { name: "Estimation à réaliser pour le compte de Patrimoine Indivis" },
                        { name: "Mandat de vente de biens appartenant à Patrimoine Indivis" },
                      ]}
                    />
                    <PartnerPropertiesSection
                      isAuthenticated={isAuthenticated}
                      onRequestAccess={() => setLoginOpen(true)}
                    />
                    <PartnerCaseTracking
                      isAuthenticated={isAuthenticated}
                      onRequestAccess={() => setLoginOpen(true)}
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
