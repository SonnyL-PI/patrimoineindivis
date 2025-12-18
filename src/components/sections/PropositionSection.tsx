import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Quote, Star } from "lucide-react";
import { PremiumPlate } from "@/components/ui/PremiumPlate";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import heroBuilding from "@/assets/hero-building.jpg";

const benefits = [
  "Proposition de rachat après étude par nos équipes, notaires et avocats",
  "Offres fermes et sans conditions suspensives de crédit",
  "Accompagnement complet jusqu'à la clôture avec étude notariale",
  "Étude réalisée dans la plus stricte confidentialité",
];

const googleReviews = [
  {
    initials: "C.B.",
    author: "Christine BASSI",
    rating: 5,
    visited: "mai",
    quote: "Une aide précieuse et un accompagnement de qualité qui m'ont permis de sortir d'une situation difficile. Mention spéciale à Franck SAVEAU pour sa disponibilité et sa bienveillance.",
  },
  {
    initials: "B.L.",
    author: "Brigitte le crane",
    rating: 5,
    visited: "mars",
    quote: "J'ai vraiment apprécié l'écoute, la compétence, la disponibilité et la bienveillance de Philippe Rogel et son équipe. Dans une situation compliquée, la prise en charge est complète et sécurisante.",
  },
  {
    initials: "J.P.",
    author: "Jean-Pierre Augé",
    rating: 5,
    visited: "juin 2024",
    quote: "Toute ma reconnaissance à monsieur Saveau qui, avec délicatesse et efficacité, a permis à mon épouse de sortir d'une indivision problématique.",
  },
  {
    initials: "M.B.",
    author: "MM BIZIEN",
    rating: 5,
    visited: "juin 2022",
    quote: "Je pensais la situation bloquée et finalement j'ai pu vendre mes parts d'indivision. Une équipe sérieuse et humaine pour un win-win.",
  },
  {
    initials: "P.C.",
    author: "patricia cauvin",
    rating: 4,
    visited: "février 2023",
    quote: "Un grand merci à Patrimoine Indivis pour m'avoir permis de sortir d'une situation familiale trop conflictuelle et de vendre ma nue-propriété.",
  },
  {
    initials: "C.G.",
    author: "Charles Gonzal",
    rating: 5,
    visited: "avril 2022",
    quote: "Très bon service, belle écoute et très professionnel. Équipe dynamique et orientée solution. Je recommande vivement !",
  },
];

// Threshold for showing "Lire la suite" (~4 lines of text)
const TRUNCATE_THRESHOLD = 175;

export function PropositionSection() {
  const [selectedReview, setSelectedReview] = useState<typeof googleReviews[0] | null>(null);

  return (
    <>
      {/* Main Proposition - Photo background + Premium Plate */}
      <section className="relative min-h-[60vh] flex items-center" id="proposition">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBuilding}
            alt="Immeuble haussmannien"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "saturate(0.8)" }}
          />
          {/* Navy gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, hsl(215 30% 14% / 0.88) 0%, hsl(215 26% 20% / 0.8) 60%, hsl(215 26% 22% / 0.75) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="container-wide relative z-10 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <PremiumPlate className="max-w-2xl" align="center">
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
                Notre offre
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-primary-foreground font-semibold mb-6">
                Notre Proposition
              </h2>

              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <p className="text-primary-foreground/90 text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              <p className="text-base text-accent font-serif italic mb-6">
                Une équipe à votre service, dans la plus stricte confidentialité.
              </p>

              <Button variant="gold" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  Demander une étude de rachat
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </PremiumPlate>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
              Ils nous ont fait confiance
            </h3>
            <div className="w-12 h-0.5 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {googleReviews.map((review, index) => {
              const isTruncated = review.quote.length > TRUNCATE_THRESHOLD;
              
              return (
                <div 
                  key={index}
                  className="card-premium relative group"
                >
                  <Quote className="w-6 h-6 text-accent/20 absolute top-5 right-5" />
                  
                  {/* Header with initials and Google tag */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                        <span className="text-accent font-semibold text-sm">{review.initials}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{review.author}</p>
                        <p className="text-xs text-muted-foreground">Visité en {review.visited}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-accent/80 font-semibold uppercase tracking-wider bg-accent/10 px-2 py-1 rounded">
                      Avis Google
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < review.rating ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`} 
                      />
                    ))}
                  </div>

                  {/* Quote - clamped to 4 lines */}
                  <p className="text-muted-foreground italic leading-relaxed text-sm line-clamp-4">
                    "{review.quote}"
                  </p>

                  {/* "Lire la suite" link - only if truncated */}
                  {isTruncated && (
                    <button
                      onClick={() => setSelectedReview(review)}
                      className="mt-3 text-xs text-accent hover:text-accent/80 transition-colors font-medium cursor-pointer"
                    >
                      Lire la suite →
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Link to all reviews */}
          <div className="text-center mt-8">
            <a 
              href="https://www.google.com/search?q=patrimoine+indivis+avis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Lire tous les avis sur Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Review Modal */}
      <Dialog open={!!selectedReview} onOpenChange={(open) => !open && setSelectedReview(null)}>
        <DialogContent className="max-w-lg w-[calc(100%-2rem)] bg-background border-border/30 rounded-2xl shadow-xl p-0">
          <DialogHeader className="p-6 pb-4 border-b border-border/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                  <span className="text-accent font-semibold">{selectedReview?.initials}</span>
                </div>
                <div>
                  <DialogTitle className="font-serif text-lg font-semibold text-foreground">
                    {selectedReview?.author}
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground">Visité en {selectedReview?.visited}</p>
                </div>
              </div>
              <span className="text-[10px] text-accent/80 font-semibold uppercase tracking-wider bg-accent/10 px-2 py-1 rounded">
                Avis Google
              </span>
            </div>
            
            {/* Stars */}
            <div className="flex gap-0.5 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${selectedReview && i < selectedReview.rating ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`} 
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">{selectedReview?.rating}/5</span>
            </div>
          </DialogHeader>
          
          <div className="p-6 pt-5">
            <p className="text-foreground/90 italic leading-relaxed">
              "{selectedReview?.quote}"
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
