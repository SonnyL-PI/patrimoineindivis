import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PartnerForm from "@/components/partner/PartnerForm";
import PartnerContact from "@/components/partner/PartnerContact";

export default function PartnerDashboard() {
  const [activeTab, setActiveTab] = useState("agents");

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
            <div className="max-w-2xl">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                Espace réservé
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
                Espace professionnel
              </h1>
              <p className="text-primary-foreground/70 text-base md:text-lg mb-3">
                Un espace dédié aux professionnels pour transmettre des dossiers librement et accéder à nos ressources et biens disponibles à la revente.
              </p>
              <p className="text-primary-foreground/50 text-sm">
                Une question sur un dossier ? Échangez avec notre équipe au{" "}
                <a href="tel:0142301000" className="font-semibold text-accent hover:text-accent/80 transition-colors">01.42.30.10.00</a>.
              </p>
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
                  </div>
                  <div className="space-y-6">
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
                    <PartnerContact />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
