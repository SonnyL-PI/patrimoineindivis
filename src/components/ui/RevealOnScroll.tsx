import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  /** Delay in ms before animation starts (for stagger effects) */
  delay?: number;
  /** Animation duration in ms (default: 600) */
  duration?: number;
  /** Y offset in pixels (default: 12) */
  offset?: number;
  /** Threshold for intersection (default: 0.15) */
  threshold?: number;
  /** Disable animation (content shows immediately) */
  disabled?: boolean;
}

/**
 * RevealOnScroll - Composant d'animation au scroll sobre et professionnel
 * 
 * Usage basique:
 * <RevealOnScroll>
 *   <h2>Mon titre</h2>
 * </RevealOnScroll>
 * 
 * Avec stagger (pour listes/cartes):
 * {items.map((item, index) => (
 *   <RevealOnScroll key={item.id} delay={index * 80}>
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
  delay = 0,
  duration = 600,
  offset = 12,
  threshold = 0.15,
  disabled = false,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
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
    if (disabled || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay for stagger effect
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          // Unobserve after first trigger (one-time animation)
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold, disabled, prefersReducedMotion]);

  // If reduced motion or disabled, render without animation wrapper
  if (prefersReducedMotion || disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${offset}px)`,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/**
 * Hook pour créer des délais stagger
 * Usage: const getDelay = useStaggerDelay(80);
 *        <RevealOnScroll delay={getDelay(index)}>...</RevealOnScroll>
 */
export function useStaggerDelay(baseDelay: number = 80) {
  return (index: number) => index * baseDelay;
}
