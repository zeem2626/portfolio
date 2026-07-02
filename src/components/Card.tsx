import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
};

export default function Card({ children, className = "", glow = false }: Props) {
  const baseCls = "rounded-xl overflow-hidden transition-all duration-300 glass-panel";
  const glowCls = glow ? "glow-card" : "hover:-translate-y-1 hover:shadow-md hover:shadow-slate-200/50 dark:hover:shadow-slate-950/40";
  
  return (
    <div className={`${baseCls} ${glowCls} ${className}`}>
      {children}
    </div>
  );
}
