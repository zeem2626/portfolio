import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./components/Button";
import Card from "./components/Card";
import {
  SiNodedotjs,
  SiNestjs,
  SiMongodb,
  SiDocker,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiJest,
  SiGithub,
  SiTypescript,
  SiJavascript,
  SiSocketdotio,
  SiExpress,
} from "react-icons/si";
import {
  FaMoon,
  FaSun,
  FaServer,
  FaNetworkWired,
  FaExchangeAlt,
  FaEnvelope,
  FaLock,
  FaDatabase,
  FaCode,
  FaCogs,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLinkedin,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

export default function App(): JSX.Element {
  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  const backendSkills = [
    { name: "NestJS", icon: <SiNestjs className="w-6 h-6 text-red-500" /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-6 h-6 text-green-500" />,
    },
    {
      name: "ExpressJS",
      icon: (
        <SiExpress className="w-6 h-6 text-slate-400 dark:text-slate-200" />
      ),
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-6 h-6 text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-6 h-6 text-yellow-500" />,
    },
    { name: "REST APIs", icon: <FaCode className="w-6 h-6 text-indigo-500" /> },
  ];

  const databaseSkills = [
    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-600" /> },
    {
      name: "Apache Pulsar",
      icon: <FaNetworkWired className="w-6 h-6 text-teal-500" />,
    },
    {
      name: "WebSockets",
      icon: <SiSocketdotio className="w-6 h-6 text-slate-300" />,
    },
    {
      name: "Database Design",
      icon: <FaDatabase className="w-6 h-6 text-amber-500" />,
    },
  ];

  const securitySkills = [
    {
      name: "Keycloak (OAuth2)",
      icon: <FaLock className="w-6 h-6 text-cyan-500" />,
    },
    {
      name: "Razorpay (Payments)",
      icon: <FaExchangeAlt className="w-6 h-6 text-blue-400" />,
    },
    {
      name: "Google & YouTube APIs",
      icon: <FaServer className="w-6 h-6 text-orange-500" />,
    },
    {
      name: "Event-Driven Architecture",
      icon: <FaCogs className="w-6 h-6 text-purple-500" />,
    },
  ];

  const engineeringSkills = [
    {
      name: "Jest (Testing)",
      icon: <SiJest className="w-6 h-6 text-red-600" />,
    },
    {
      name: "Docker (Basic)",
      icon: <SiDocker className="w-6 h-6 text-sky-500" />,
    },
    {
      name: "Git & GitHub",
      icon: <SiGithub className="w-6 h-6 text-slate-800 dark:text-slate-100" />,
    },
    {
      name: "Database Migrations",
      icon: <FaDatabase className="w-6 h-6 text-emerald-500" />,
    },
    {
      name: "API Optimization",
      icon: <FaCode className="w-6 h-6 text-violet-500" />,
    },
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="font-sans text-slate-800 dark:text-slate-100 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4">
        <nav
          id="main-nav"
          aria-label="Primary Navigation"
          className="max-w-6xl mx-auto rounded-full glass-nav px-6 py-3 flex justify-between items-center transition-all duration-300 shadow-md shadow-slate-200/20 dark:shadow-none"
        >
          <div className="flex items-center gap-3">
            <h1 className="text-lg md:text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400">
              Zeeshan Ahmad
            </h1>
            <span className="hidden sm:inline text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200/50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300">
              Software Engineer
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <a
                id={`nav-link-${s.id}`}
                key={s.id}
                href={`#${s.id}`}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 focus-ring rounded-md px-2 py-1 transition-colors"
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
              {theme === "light" ? (
                <FaMoon className="w-4 h-4" />
              ) : (
                <FaSun className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-theme-toggle-btn"
              aria-label="Toggle theme mobile"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 focus-ring"
            >
              {theme === "light" ? (
                <FaMoon className="w-4 h-4" />
              ) : (
                <FaSun className="w-4 h-4" />
              )}
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

      {/* Main Content Area */}
      <main id="main-content" onClick={() => setNavOpen(false)}>
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center pt-24 md:pt-32 pb-16 gradient-bg"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-6">
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-4">
                Available for New Roles
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight">
                Hi, I’m <span className="gradient-text">Zeeshan Ahmad</span>
              </h2>
              <p className="text-xl md:text-2xl font-bold mb-4 text-slate-700 dark:text-slate-300">
                Backend Engineer • Full-Stack Developer
              </p>
              <p className="mb-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                I design and build reliable, scalable backend systems, robust
                APIs, and secure integrations. With a strong ownership mindset,
                I specialize in the Node.js/NestJS ecosystem, WebSocket-based
                real-time architecture, and event-driven communication.
              </p>

              {/* Metrics Highlights Panel */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/40 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm mb-8">
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    2 Years
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Production Experience
                  </div>
                </div>
                <div className="text-center sm:text-left border-l border-slate-200/60 dark:border-slate-800/60 pl-2 sm:pl-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    200+
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    REST APIs Deployed
                  </div>
                </div>
                <div className="text-center sm:text-left border-l border-slate-200/60 dark:border-slate-800/60 pl-2 sm:pl-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">
                    95%
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Latency Reduction
                  </div>
                </div>
                <div className="text-center sm:text-left border-l border-slate-200/60 dark:border-slate-800/60 pl-2 sm:pl-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-violet-600 dark:text-violet-400">
                    1000+
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Git Contributions
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  id="hero-resume-download"
                  href="https://drive.google.com/file/d/1dFCf6GRQBJOjibIJcB9TfsRHoxj3SS-2/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download Zeeshan Ahmad's Resume (Google Drive)"
                >
                  <Button variant="solid">Download Resume</Button>
                </a>
                <a
                  id="hero-github-link"
                  href="https://github.com/zeem2626"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Zeeshan Ahmad's GitHub profile"
                >
                  <Button variant="outline">GitHub</Button>
                </a>
                <a
                  id="hero-linkedin-link"
                  href="https://www.linkedin.com/in/zeem26/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Zeeshan Ahmad's LinkedIn profile"
                >
                  <Button variant="outline">LinkedIn</Button>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <FaEnvelope /> zeem1920@gmail.com
                </span>
                <span className="flex items-center gap-1.5">
                  <FaPhoneAlt /> +91 79798 25081
                </span>
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-5 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative group p-2">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 rounded-3xl blur-md opacity-20 dark:opacity-30 group-hover:opacity-40 transition duration-500"></div>
                <img
                  src="/portfolio banner.png"
                  // src="/portfolio-1.png"
                  alt="Zeeshan Ahmad Profile Showcase"
                  className="hero-img rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 relative z-10 bg-slate-900"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          className="max-w-5xl mx-auto p-6 py-20 scroll-mt-20"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl font-extrabold mb-3">About Me</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Experienced Software Engineer with a strong analytical foundation
              (B.Sc. in Mathematics). I build and secure production-grade
              backend systems from scratch, deliver critical integrations, and
              focus on optimization, clean architecture, and error handling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full" glow={false}>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-extrabold text-lg mb-4 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5" /> Key Strengths
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                      •
                    </span>
                    <span>
                      <strong>End-to-End Ownership:</strong> Capable of
                      independently delivering entire backend modules with clean
                      architectures.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                      •
                    </span>
                    <span>
                      <strong>Problem Solving:</strong> 250+ DSA problems solved
                      across platforms; mathematical analysis mindset.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                      •
                    </span>
                    <span>
                      <strong>Fast Learner & Implementer:</strong> Quickly
                      master new protocols (Pulsar, OAuth2) and deploy to
                      production.
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="flex flex-col h-full" glow={false}>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-extrabold text-lg mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <FaCogs className="w-5 h-5" /> Growth Roadmap
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                      •
                    </span>
                    <span>
                      <strong>Advanced Backend:</strong> Deepening expertise in
                      distributed systems, scalability, and high-level design.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                      •
                    </span>
                    <span>
                      <strong>DevOps & Orchestration:</strong> Active learning
                      of Docker, Kubernetes, and automated deployment pipelines.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                      •
                    </span>
                    <span>
                      <strong>Frontend (Supporting):</strong> Solidifying React
                      & NextJS to build seamless full-stack modules.
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="flex flex-col h-full" glow={false}>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-extrabold text-lg mb-4 text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                  <FaServer className="w-5 h-5" /> Professional Development
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                      •
                    </span>
                    <span>
                      <strong>Senior Collaboration:</strong> Value senior code
                      reviews and database design check-ins to enforce best
                      practices.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                      •
                    </span>
                    <span>
                      <strong>Technical Mentorship:</strong> Eager to exchange
                      feedback, assist peers, and grow under experienced
                      mentors.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                      •
                    </span>
                    <span>
                      <strong>End-to-End Validation:</strong> Focus on robust
                      design validation to avoid production regressions.
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="bg-slate-100 dark:bg-slate-900/50 py-20 scroll-mt-20 transition-colors"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto p-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h3 className="text-3xl font-extrabold mb-3">Technical Skills</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
              <p className="text-base text-slate-600 dark:text-slate-300">
                A structured view of my core backend stack, databases,
                integrations, and engineering practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category 1 */}
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-600 dark:text-indigo-400 px-1 border-l-2 border-indigo-500 pl-2">
                  Backend & Core Stack
                </h4>
                <div className="flex flex-col gap-3">
                  {backendSkills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800/80 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 transition duration-300"
                    >
                      <div className="flex-shrink-0">{s.icon}</div>
                      <span className="font-semibold text-sm">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 px-1 border-l-2 border-blue-500 pl-2">
                  Databases & Real-Time
                </h4>
                <div className="flex flex-col gap-3">
                  {databaseSkills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800/80 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 transition duration-300"
                    >
                      <div className="flex-shrink-0">{s.icon}</div>
                      <span className="font-semibold text-sm">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-600 dark:text-cyan-400 px-1 border-l-2 border-cyan-500 pl-2">
                  Security & Integrations
                </h4>
                <div className="flex flex-col gap-3">
                  {securitySkills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800/80 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 transition duration-300"
                    >
                      <div className="flex-shrink-0">{s.icon}</div>
                      <span className="font-semibold text-sm">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 4 */}
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-violet-600 dark:text-violet-400 px-1 border-l-2 border-violet-500 pl-2">
                  Practices & Tooling
                </h4>
                <div className="flex flex-col gap-3">
                  {engineeringSkills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800/80 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 transition duration-300"
                    >
                      <div className="flex-shrink-0">{s.icon}</div>
                      <span className="font-semibold text-sm">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="max-w-5xl mx-auto p-6 py-20 scroll-mt-20"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-extrabold mb-3">Work Experience</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
            <p className="text-base text-slate-600 dark:text-slate-300">
              My engineering impact, production systems delivered, and
              professional history.
            </p>
          </div>

          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
            {/* Full-time Role */}
            <div className="relative pl-8 md:pl-10">
              {/* Timeline dot */}
              <div className="absolute -left-[11px] top-1 bg-blue-600 border-4 border-slate-50 dark:border-slate-950 w-5 h-5 rounded-full z-10 shadow-sm shadow-blue-500/30"></div>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Software Engineer (Backend & Full-Stack)
                </h4>
                <span className="flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <FaCalendarAlt className="w-3.5 h-3.5" /> Dec 2024 – Mar 2026
                </span>
              </div>
              <p className="text-base font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-1.5">
                <FaBriefcase className="w-4 h-4" /> Kanlas Technologies
              </p>

              <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                <p>
                  Promoted from intern to full-time engineer based on high
                  delivery capacity and backend ownership. Managed key modules
                  for <strong>Reppoo</strong>, a social-platform management
                  SaaS, handling accounts, advertising, publishing, and
                  real-time streams.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong className="text-slate-800 dark:text-slate-100">
                      95% Latency Reduction:
                    </strong>{" "}
                    Optimized API response latency by about 95% by designing and
                    executing database migrations to offload heavy image storage
                    blobs from the DB to object storage.
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-100">
                      API Architecture:
                    </strong>{" "}
                    Designed, tested, and shipped 50+ REST APIs and services in
                    an Nx-monorepo backend using NestJS, focusing on logic
                    modularity and high reusable interface setup.
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-100">
                      Production Integrations:
                    </strong>{" "}
                    Built integrations for Keycloak authentication (OAuth2),
                    Google and YouTube APIs for channel sync, publishing, and
                    ads posts, as well as Apache Pulsar for inter-service
                    communication.
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-100">
                      Testing & Mentoring:
                    </strong>{" "}
                    Authored documentation and test cases, maintaining ~85% test
                    coverage with Jest to keep regression risks minimal. Named{" "}
                    <strong>Employee of the Month (2025)</strong>.
                  </li>
                </ul>
              </div>
            </div>

            {/* Internship Role */}
            <div className="relative pl-8 md:pl-10">
              {/* Timeline dot */}
              <div className="absolute -left-[11px] top-1 bg-slate-300 dark:bg-slate-700 border-4 border-slate-50 dark:border-slate-950 w-5 h-5 rounded-full z-10"></div>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Backend Development Intern
                </h4>
                <span className="flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400">
                  <FaCalendarAlt className="w-3.5 h-3.5" /> Jun 2024 – Dec 2024
                </span>
              </div>
              <p className="text-base font-bold text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                <FaBriefcase className="w-4 h-4" /> Kanlas Technologies
              </p>

              <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                <p>
                  Joined the team to build the core services from scratch for a
                  customer loyalty and business engagement platform (Loya).
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong className="text-slate-800 dark:text-slate-100">
                      Core Systems Development:
                    </strong>{" "}
                    Engineered 100+ endpoints for core e-commerce, including
                    order modules, returns processing, subscriptions, and
                    customer points.
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-100">
                      Real-Time Messaging:
                    </strong>{" "}
                    Built real-time admin–customer chat using WebSockets and
                    integrated it with Apache Pulsar for backend inter-service
                    message distribution.
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-slate-100">
                      Secure Payments & Inviting:
                    </strong>{" "}
                    Configured Razorpay payment flow, Keycloak OAuth2
                    configurations, and automated email messaging with SendGrid.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="bg-slate-100 dark:bg-slate-900/50 py-20 scroll-mt-20 transition-colors"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto p-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl font-extrabold mb-3">Key Projects</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Detailed breakdowns of production modules delivered at work and
                major personal applications.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Card
                className="flex flex-col h-full bg-white dark:bg-slate-800"
                glow={true}
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">
                      Work Project
                    </span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Nx Monorepo
                    </span>
                  </div>
                  <h4 className="font-extrabold text-xl mb-3 text-slate-900 dark:text-white">
                    Reppoo (Social Platform Manager)
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                    Managed backend architecture setup and integrations for a
                    multi-channel social SaaS. Delivered modules for managing
                    YouTube and Google Ads, publishing posts, and collecting
                    analytics metrics. Integrated Keycloak authorization, Google
                    APIs, and Apache Pulsar event streaming.
                  </p>
                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      Private Enterprise Code
                    </span>
                    <span className="text-xs text-slate-400 italic">
                      NestJS · Pulsar · Keycloak
                    </span>
                  </div>
                </div>
              </Card>

              {/* Project 2 */}
              <Card
                className="flex flex-col h-full bg-white dark:bg-slate-800"
                glow={true}
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                      Work Project
                    </span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Real-Time
                    </span>
                  </div>
                  <h4 className="font-extrabold text-xl mb-3 text-slate-900 dark:text-white">
                    Loya (Loyalty Program Platform)
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                    Co-ordinated backend setup and database design from scratch
                    for loyalty web and mobile applications. Shipped 100+
                    endpoints covering subscription flows, customer point
                    engines, order validation, and tickets. Configured Razorpay
                    API payments and WebSocket-based client chat.
                  </p>
                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      Private Enterprise Code
                    </span>
                    <span className="text-xs text-slate-400 italic">
                      NodeJS · WebSockets · Razorpay
                    </span>
                  </div>
                </div>
              </Card>

              {/* Project 3 */}
              <Card
                className="flex flex-col h-full bg-white dark:bg-slate-800"
                glow={true}
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                      Personal Project
                    </span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Full Stack
                    </span>
                  </div>
                  <h4 className="font-extrabold text-xl mb-3 text-slate-900 dark:text-white">
                    YouTube Clone
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                    Created a full-featured video sharing platform clone.
                    Implemented authentication (JWT), media uploads via Firebase
                    Storage, user channel creation, likes, comments, and
                    responsive frontend player. Built with MERN stack.
                  </p>
                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                    <a
                      id="youtube-clone-repo-link"
                      href="https://github.com/zeem2626"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                      aria-label="View YouTube Clone repository on GitHub"
                    >
                      View GitHub Repo{" "}
                      <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    </a>
                    <span className="text-xs text-slate-400 italic">
                      React · Node · Express · Mongo
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="max-w-5xl mx-auto p-6 py-20 scroll-mt-20"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-extrabold mb-3">Education</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
            <p className="text-base text-slate-600 dark:text-slate-300">
              My academic background and structural foundations in Information
              Technology and Mathematics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card glow={false}>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-indigo-600 dark:text-indigo-400">
                  <FaGraduationCap className="text-4xl" />
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-900 dark:text-white">
                      MCA (Information Technology)
                    </h4>
                    <p className="text-sm font-semibold text-slate-500">
                      Netaji Subhas University, Jamshedpur
                    </p>
                  </div>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <p>
                    <strong>Timeline:</strong> 2022 – 2024
                  </p>
                  <p>
                    <strong>Percentage:</strong> 73.2%
                  </p>
                  <p>
                    Advanced studies in database management systems, data
                    structures, algorithms, and software development.
                  </p>
                </div>
              </div>
            </Card>

            <Card glow={false}>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-blue-600 dark:text-blue-400">
                  <FaGraduationCap className="text-4xl" />
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-900 dark:text-white">
                      B.Sc. in Mathematics
                    </h4>
                    <p className="text-sm font-semibold text-slate-500">
                      Karim City College, Kolhan University
                    </p>
                  </div>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <p>
                    <strong>Timeline:</strong> 2019 – 2022
                  </p>
                  <p>
                    <strong>Percentage:</strong> 69%
                  </p>
                  <p>
                    Developed strong logical building, analytical thinking,
                    algorithm design basics, and mathematical modeling
                    foundations.
                  </p>
                </div>
              </div>
            </Card>

            <Card glow={false}>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-slate-500">
                  <FaGraduationCap className="text-3xl" />
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                      Intermediate (Science)
                    </h4>
                    <p className="text-xs text-slate-500">
                      Karim City College, JAC Board
                    </p>
                  </div>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  <p>
                    <strong>Timeline:</strong> 2017 – 2019 |{" "}
                    <strong>Percentage:</strong> 71%
                  </p>
                </div>
              </div>
            </Card>

            <Card glow={false}>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-slate-500">
                  <FaGraduationCap className="text-3xl" />
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                      Matriculation
                    </h4>
                    <p className="text-xs text-slate-500">
                      Vikas Vidyalaya, CBSE Board
                    </p>
                  </div>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  <p>
                    <strong>Timeline:</strong> 2015 – 2017 |{" "}
                    <strong>Percentage:</strong> 70%
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          id="achievements"
          className="bg-slate-100 dark:bg-slate-900/50 py-20 scroll-mt-20 transition-colors"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto p-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl font-extrabold mb-3">
                Achievements & Impact
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Major milestones, engineering stats, and recognition received.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-white dark:bg-slate-800" glow={false}>
                <div className="p-6 flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <FaTrophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-900 dark:text-white mb-1">
                      Employee of the Month (2025)
                    </h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-bold mb-2">
                      Kanlas Technologies
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Awarded for delivering high-quality backend features under
                      tight release windows, supporting developers
                      cross-functionally, and resolving complex access blocks.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white dark:bg-slate-800" glow={false}>
                <div className="p-6 flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <FaCode className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-900 dark:text-white mb-1">
                      250+ DSA Problems Solved
                    </h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-bold mb-2">
                      LeetCode, GfG, Coding Ninjas
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Cumulative practice in algorithmic execution, recursion,
                      linear and non-linear data structures, binary searching,
                      graph cycles, BFS/DFS, and topological sorting.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white dark:bg-slate-800" glow={false}>
                <div className="p-6 flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                    <FaDatabase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-900 dark:text-white mb-1">
                      Single-Handed DB Migration
                    </h4>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400 font-bold mb-2">
                      Impact Highlight
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Wrote and successfully ran a migration script to move
                      stored images into object storage, bringing database sizes
                      down and cutting ongoing infrastructure bills
                      significantly.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white dark:bg-slate-800" glow={false}>
                <div className="p-6 flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                    <FaCogs className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-900 dark:text-white mb-1">
                      ~85% Test Suite Coverage
                    </h4>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-bold mb-2">
                      Quality Standards
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Authored extensive unit and integration tests using Jest.
                      Consistently enforced tests across Loya and Reppoo
                      microservices to maintain continuous delivery safety.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="max-w-4xl mx-auto p-6 py-24 text-center scroll-mt-20"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-extrabold mb-3">Get in Touch</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="max-w-lg mx-auto text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            I am currently exploring new opportunities in backend software
            engineering. If you have questions, roles available, or just want to
            connect, feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-slate-700 dark:text-slate-200">
            <a
              id="contact-email"
              href="mailto:zeem1920@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md hover:-translate-y-0.5 transition duration-300 focus-ring"
              aria-label="Send an email to zeem1920@gmail.com"
            >
              <FaEnvelope className="text-blue-500" />
              <span className="font-semibold text-sm">zeem1920@gmail.com</span>
            </a>

            <a
              id="contact-phone"
              href="tel:+917979825081"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md hover:-translate-y-0.5 transition duration-300 focus-ring"
              aria-label="Call Zeeshan Ahmad at +91 79798 25081"
            >
              <FaPhoneAlt className="text-indigo-500" />
              <span className="font-semibold text-sm">+91 79798 25081</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 text-slate-600 dark:text-slate-300">
            <a
              id="contact-github"
              href="https://github.com/zeem2626"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-slate-200/50 dark:bg-slate-800/80 hover:bg-slate-300/60 dark:hover:bg-slate-700 hover:scale-110 transition duration-300 focus-ring"
              aria-label="Visit Zeeshan Ahmad's GitHub Profile"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a
              id="contact-linkedin"
              href="https://www.linkedin.com/in/zeem26/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-slate-200/50 dark:bg-slate-800/80 hover:bg-slate-300/60 dark:hover:bg-slate-700 hover:scale-110 transition duration-300 focus-ring"
              aria-label="Visit Zeeshan Ahmad's LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5 text-blue-600" />
            </a>
          </div>
        </motion.section>
      </main>

      <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-slate-400 text-center py-8 px-6 text-sm">
        <p className="mb-2">© 2026 Zeeshan Ahmad. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
