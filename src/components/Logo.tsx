import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  showBadge?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ 
  variant = "dark", 
  showBadge = true, 
  size = "md",
  className 
}: LogoProps) {
  const isDark = variant === "dark";
  
  const sizeClasses = {
    sm: {
      badge: "w-10 h-12",
      art: "text-[9px]",
      num: "text-lg",
      text: "text-base",
      slash: "text-xl",
      gap: "gap-2.5",
    },
    md: {
      badge: "w-12 h-14",
      art: "text-[11px]",
      num: "text-2xl",
      text: "text-xl tracking-[0.15em]",
      slash: "text-3xl",
      gap: "gap-3",
    },
    lg: {
      badge: "w-16 h-[72px]",
      art: "text-sm",
      num: "text-3xl",
      text: "text-2xl tracking-[0.2em]",
      slash: "text-4xl",
      gap: "gap-4",
    },
  };

  const s = sizeClasses[size];

  return (
    <Link 
      to="/" 
      className={cn(
        "flex items-center", 
        s.gap,
        className
      )}
    >
      {/* Art. 815 Badge */}
      {showBadge && (
        <div 
          className={cn(
            "relative flex flex-col items-center justify-center",
            s.badge,
            "border-l-2 border-t-2 border-b-2 rounded-tl-sm rounded-bl-sm",
            isDark ? "border-accent" : "border-accent"
          )}
        >
          <span 
            className={cn(
              "font-serif italic",
              s.art,
              isDark ? "text-accent" : "text-accent"
            )}
          >
            Art.
          </span>
          <span 
            className={cn(
              "font-serif font-bold leading-none",
              s.num,
              "bg-gradient-to-br from-[#c28e52] to-[#a87835] bg-clip-text text-transparent"
            )}
            style={{ fontVariantNumeric: "lining-nums" }}
          >
            815
          </span>
        </div>
      )}

      {/* Text Logo */}
      <div className="flex items-baseline">
        <span 
          className={cn(
            "font-serif uppercase font-normal",
            s.text,
            isDark ? "text-foreground" : "text-primary-foreground"
          )}
          style={{ fontVariant: "small-caps" }}
        >
          Patrimoine
        </span>
        <span 
          className={cn(
            "font-serif font-light",
            s.slash,
            "bg-gradient-to-b from-[#c28e52] to-[#a87835] bg-clip-text text-transparent"
          )}
          style={{ 
            display: "inline-block",
            transform: "rotate(-15deg)",
            marginLeft: "2px",
            marginRight: "2px",
          }}
        >
          /
        </span>
        <span 
          className={cn(
            "font-serif uppercase font-normal",
            s.text,
            isDark ? "text-foreground" : "text-primary-foreground"
          )}
          style={{ fontVariant: "small-caps" }}
        >
          Indivis
        </span>
      </div>
    </Link>
  );
}
