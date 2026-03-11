import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import VotreSituation from "./pages/VotreSituation";
import NotreApproche from "./pages/NotreApproche";
import QuiSommesNous from "./pages/QuiSommesNous";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import FAQ from "./pages/FAQ";
import Ressources from "./pages/Ressources";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import EtudeGratuite from "./pages/EtudeGratuite";
import PartnerLogin from "./pages/PartnerLogin";
import PartnerAccessRequest from "./pages/PartnerAccessRequest";
import PartnerDashboard from "./pages/PartnerDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/votre-situation" element={<VotreSituation />} />
            <Route path="/notre-approche" element={<NotreApproche />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/comprendre-indivision" element={<Navigate to="/blog" replace />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/etude-gratuite" element={<EtudeGratuite />} />
            <Route path="/demande-etude" element={<Navigate to="/etude-gratuite" replace />} />
            <Route path="/espace-partenaires" element={<PartnerDashboard />} />
            <Route path="/espace-partenaires/login" element={<PartnerLogin />} />
            <Route path="/espace-partenaires/demande-acces" element={<PartnerAccessRequest />} />
            <Route path="/espace-partenaires/dashboard" element={<PartnerDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
