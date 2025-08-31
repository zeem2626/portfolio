import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
};

export default function Button({
  children,
  variant = "solid",
  ...props
}: Props) {
  const base = "px-4 py-2 rounded-md font-medium focus:outline-none transition";
  const solid = "bg-blue-600 text-white hover:bg-blue-700";
  const outline =
    "border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200";
  const cls = `${base} ${variant === "outline" ? outline : solid}`;
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
