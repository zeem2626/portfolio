import React from 'react'

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded-lg bg-white shadow-sm">
      {children}
    </div>
  )
}
