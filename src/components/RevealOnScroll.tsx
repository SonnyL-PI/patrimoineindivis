import { useEffect, useRef, useState, ReactNode, ElementType } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  /** Delay in ms before animation starts (for stagger effects) */
  delayMs?: number;
  /** HTML element to render (default: div) */
  as?: ElementType;
}

/**
 * RevealOnScroll - Composant d'animation au scroll sobre et professionnel
 * Utilise IntersectionObserver et des classes CSS pour l'animation.
 * 
 * Usage basique:
 * <RevealOnScroll>
 *   <h2>Mon titre</h2>
 * </RevealOnScroll>
 * 
 * Avec stagger (pour listes/cartes):
 * {items.map((item, index) => (
 *   <RevealOnScroll key={item.id} delayMs={index * 80}>
 *     <Card>{item.content}</Card>
 *   </RevealOnScroll>
 * ))}
 * 
 * OÙ L'UTILISER:
 * ✓ Titres de section (H2/H3) + paragraphes d'intro
 * ✓ Cartes, piliers, chiffres clés
 * ✓ Étapes de process, témoignages
 * ✓ Listes avec stagger (60-100ms entre items)
 * 
 * OÙ L'ÉVITER:
 * ✗ Header / Navigation / Footer
 * ✗ Formulaires (perturbe la saisie)
 * ✗ Textes légaux longs (animer seulement le titre)
 * ✗ Contenu above-the-fold (hero section)
 */
export function RevealOnScroll({
  children,
  className = "",
  delayMs = 0,
  as: Component = "div",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay for stagger effect
          if (delayMs > 0) {
            setTimeout(() => setIsVisible(true), delayMs);
          } else {
            setIsVisible(true);
          }
          // Unobserve after first trigger (one-time animation)
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delayMs, prefersReducedMotion]);

  // If reduced motion, render without animation classes
  if (prefersReducedMotion) {
    return (
      <Component ref={ref} className={className}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      ref={ref}
      className={`reveal-on-scroll ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </Component>
  );
}

/**
 * Hook pour créer des délais stagger
 * Usage: const getDelay = useStaggerDelay(80);
 *        <RevealOnScroll delayMs={getDelay(index)}>...</RevealOnScroll>
 */
export function useStaggerDelay(baseDelay: number = 80) {
  return (index: number) => index * baseDelay;
}
