import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import article815Bg from "@/assets/article-815-bg.jpg";

export function Article815Section() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <img
        src={article815Bg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          filter: "saturate(0.7) blur(4px)",
        }}
      />
      
      {/* Overlay - Dark layer + gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              hsla(215, 26%, 18%, 0.75) 0%,
              hsla(215, 26%, 22%, 0.60) 50%,
              hsla(215, 26%, 18%, 0.70) 100%
            )
          `,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 py-20 md:py-28 lg:py-32">
        <div className="container-wide">
          <div className="max-w-2xl">
            {/* Title - Premium serif */}
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                textShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              Article 815
            </h2>
            
            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Le principe fondamental du droit français qui garantit à chaque indivisaire le droit de sortir de l'indivision.
            </p>
            
            {/* Quote */}
            <blockquote 
              className="border-l-4 border-accent pl-6 py-3 mb-8"
            >
              <p 
                className="text-base md:text-lg italic"
                style={{ color: "rgba(255,255,255,0.82)" }}
              >
                « Nul ne peut être contraint à demeurer dans l'indivision et le partage
                peut toujours être provoqué, à moins qu'il n'y ait été sursis par jugement
                ou convention. »
              </p>
              <cite 
                className="block mt-3 text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                — Code civil, Article 815
              </cite>
            </blockquote>
            
            {/* CTA Button */}
            <Button variant="hero" size="lg" asChild>
              <Link to="/comprendre-indivision">
                En savoir plus sur l'indivision
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
