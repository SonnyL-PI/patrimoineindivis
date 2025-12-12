import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import VotreSituation from "./pages/VotreSituation";
import NotreApproche from "./pages/NotreApproche";
import ComprendreIndivision from "./pages/ComprendreIndivision";
import FAQ from "./pages/FAQ";
import Ressources from "./pages/Ressources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="/comprendre-indivision" element={<ComprendreIndivision />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ressources" element={<Ressources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
