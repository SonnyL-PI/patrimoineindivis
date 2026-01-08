import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import article815Bg from "@/assets/article-815-bg.jpg";

export function Article815Section() {
  return (
    <section className="relative overflow-hidden">
      {/* === LAYER 1: Background Image - Zoomed, heavily blurred, desaturated === */}
      <div className="absolute inset-0">
        <img
          src={article815Bg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: "scale(1.45)",
            transformOrigin: "center center",
            objectPosition: "70% 40%",
            filter: "blur(5px) grayscale(55%) saturate(0.9) contrast(0.95)",
          }}
        />
      </div>
      
      {/* === LAYER 2: "ARTICLE 815" watermark - UNDER the overlay === */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-end justify-start overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(8rem, 22vw, 20rem)",
            fontWeight: 700,
            letterSpacing: "0.12em",
            opacity: 0.10,
            color: "rgba(255, 255, 255, 0.9)",
            filter: "blur(0.8px)",
            transform: "translate(-3%, 18%)",
            textTransform: "uppercase",
            mixBlendMode: "overlay",
            maskImage: "linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          }}
        >
          Article 815
        </span>
      </div>
      
      {/* === LAYER 3: Dark overlay + gradient (covers the watermark) === */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              hsla(215, 28%, 8%, 0.82) 0%,
              hsla(215, 26%, 12%, 0.70) 45%,
              hsla(215, 28%, 8%, 0.78) 100%
            )
          `,
        }}
      />
      
      {/* Subtle noise/grain texture */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.035,
          mixBlendMode: "overlay",
        }}
      />
      
      {/* === LAYER 4: Content (on top of everything) === */}
      <div className="relative z-10 py-20 md:py-28 lg:py-32">
        <div className="container-wide">
          <div className="max-w-2xl">
            {/* Title - Premium serif */}
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
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
