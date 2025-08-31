import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded-lg bg-white dark:bg-gray-700 shadow-sm dark:border-gray-600">
      {children}
    </div>
  );
}
