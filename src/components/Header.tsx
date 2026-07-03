import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { personalDetails } from "../constants/portfolio";

const sections = [
  { id: "about", label: "About" },
  { id: "architecture", label: "Showcase" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

interface HeaderProps {
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export default function Header({
  navOpen,
  setNavOpen,
  theme,
  setTheme,
}: HeaderProps): JSX.Element {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4">
      <nav
        id="main-nav"
        aria-label="Primary Navigation"
        className="max-w-6xl mx-auto rounded-full glass-nav px-6 py-3 flex justify-between items-center transition-all duration-300 shadow-md shadow-slate-200/20 dark:shadow-none"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
          <h1 className="text-lg md:text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 leading-tight">
            {personalDetails.name}
          </h1>
          <span className="inline-flex items-center text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400 w-fit">
            {personalDetails.title}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-5">
          {sections.map((s) => (
            <a
              id={`nav-link-${s.id}`}
              key={s.id}
              href={`#${s.id}`}
              className="text-xs lg:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 focus-ring rounded-md px-2 py-1 transition-colors"
            >
              {s.label}
            </a>
          ))}
          <button
            id="theme-toggle-btn"
            aria-label="Toggle dark and light theme"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 focus-ring transition-colors"
          >
            {theme === "light" ? <FaMoon className="w-4 h-4" /> : <FaSun className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-theme-toggle-btn"
            aria-label="Toggle theme mobile"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 focus-ring"
          >
            {theme === "light" ? <FaMoon className="w-4 h-4" /> : <FaSun className="w-4 h-4" />}
          </button>
          <button
            id="mobile-menu-btn"
            aria-label="Open primary menu navigation"
            aria-expanded={navOpen}
            className="p-2 text-xl text-slate-700 dark:text-slate-300 focus-ring"
            onClick={() => setNavOpen(!navOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl glass-panel p-4 flex flex-col space-y-2 shadow-lg"
          >
            {sections.map((s) => (
              <a
                id={`nav-link-mobile-${s.id}`}
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setNavOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
