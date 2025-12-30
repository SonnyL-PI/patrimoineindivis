import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PremiumPlateProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  variant?: "dark" | "light";
}

export function PremiumPlate({ children, className, align = "left", variant = "dark" }: PremiumPlateProps) {
  const isDark = variant === "dark";
  
  return (
    <div
      className={cn(
        "premium-plate relative overflow-hidden",
        isDark 
          ? "bg-navy/60 backdrop-blur-md border-accent/25" 
          : "bg-white/95 backdrop-blur-sm border-white/60",
        "rounded-2xl md:rounded-3xl",
        "border",
        isDark 
          ? "shadow-[0_12px_40px_-10px_hsl(215_26%_15%/0.5)]" 
          : "shadow-2xl",
        "p-8 md:p-10 lg:p-12",
        align === "left" && "mr-auto",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto",
        className
      )}
    >
      {/* Subtle sheen effect - top left */}
      <div 
        className="absolute top-0 left-0 w-2/3 h-1/2 pointer-events-none"
        style={{
          background: isDark 
            ? "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)",
          borderRadius: "inherit",
        }}
      />
      {/* Border glow - subtle */}
      <div 
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          boxShadow: isDark 
            ? "inset 0 0 0 1px hsl(43 45% 59% / 0.2), 0 0 50px -15px hsl(43 45% 59% / 0.15)"
            : "inset 0 0 0 1px rgba(255,255,255,0.5)",
        }}
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
