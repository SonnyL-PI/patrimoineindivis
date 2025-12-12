import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PremiumPlateProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

export function PremiumPlate({ children, className, align = "left" }: PremiumPlateProps) {
  return (
    <div
      className={cn(
        "premium-plate relative overflow-hidden",
        "bg-navy/50 backdrop-blur-md",
        "rounded-[20px] md:rounded-[24px]",
        "border border-accent/20",
        "shadow-[0_8px_32px_-8px_hsl(215_26%_22%/0.4)]",
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
          background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
          borderRadius: "inherit",
        }}
      />
      {/* Gold border glow - very subtle */}
      <div 
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1px hsl(43 45% 59% / 0.15), 0 0 40px -10px hsl(43 45% 59% / 0.1)",
        }}
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
