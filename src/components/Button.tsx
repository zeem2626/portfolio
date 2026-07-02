import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
};

export default function Button({
  children,
  variant = "solid",
  className = "",
  ...props
}: Props) {
  const base = "px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform active:scale-95 focus-ring inline-flex items-center justify-center gap-2";
  
  const solid = "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-indigo-500/15 hover:shadow-indigo-500/25";
  
  const outline = "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 backdrop-blur-sm";
  
  const ghost = "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80";

  let variantCls = solid;
  if (variant === "outline") variantCls = outline;
  else if (variant === "ghost") variantCls = ghost;

  const cls = `${base} ${variantCls} ${className}`;
  
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
