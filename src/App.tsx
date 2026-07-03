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
  FaPhoneAlt,
  FaLinkedin,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaArrowRight,
  FaCheckCircle,
  FaCopy,
  FaCheck,
  FaAward,
  FaCloudUploadAlt,
  FaFilePdf,
} from "react-icons/fa";

export default function App(): JSX.Element {
  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeArchTab, setActiveArchTab] = useState<"realtime" | "auth" | "payments" | "optimization">("realtime");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const sections = [
    { id: "about", label: "About" },
    { id: "architecture", label: "Architecture Showcase" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  const skillCategories = [
    {
      title: "Backend & Core Stack",
      color: "border-indigo-500 text-indigo-600 dark:text-indigo-400",
      skills: [
        { name: "NestJS", icon: <SiNestjs className="w-5 h-5 text-red-500" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5 text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="w-5 h-5 text-slate-400 dark:text-slate-200" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-yellow-500" /> },
        { name: "REST APIs", icon: <FaCode className="w-5 h-5 text-indigo-500" /> },
      ]
    },
    {
      title: "Databases & Storage",
      color: "border-emerald-500 text-emerald-600 dark:text-emerald-400",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-green-600" /> },
        { name: "MongoDB Aggregation", icon: <FaDatabase className="w-5 h-5 text-green-500" /> },
        { name: "Database Design", icon: <FaServer className="w-5 h-5 text-amber-500" /> },
        { name: "Query Optimization", icon: <FaCogs className="w-5 h-5 text-cyan-500" /> },
        { name: "Data Migration", icon: <FaExchangeAlt className="w-5 h-5 text-emerald-500" /> },
      ]
    },
    {
      title: "Security & Integrations",
      color: "border-blue-500 text-blue-600 dark:text-blue-400",
      skills: [
        { name: "Keycloak (OAuth2)", icon: <FaLock className="w-5 h-5 text-cyan-500" /> },
        { name: "Razorpay (Payments)", icon: <FaExchangeAlt className="w-5 h-5 text-blue-400" /> },
        { name: "Google & YouTube APIs", icon: <FaServer className="w-5 h-5 text-orange-500" /> },
        { name: "Meta APIs", icon: <FaNetworkWired className="w-5 h-5 text-blue-500" /> },
        { name: "Firebase (FCM)", icon: <FaServer className="w-5 h-5 text-yellow-500" /> },
        { name: "SendGrid (Emails)", icon: <FaEnvelope className="w-5 h-5 text-cyan-400" /> },
      ]
    },
    {
      title: "DevOps & Engineering Practices",
      color: "border-purple-500 text-purple-600 dark:text-purple-400",
      skills: [
        { name: "Apache Pulsar", icon: <FaNetworkWired className="w-5 h-5 text-teal-500" /> },
        { name: "Redis", icon: <FaDatabase className="w-5 h-5 text-red-600" /> },
        { name: "Jest (Testing)", icon: <SiJest className="w-5 h-5 text-red-600" /> },
        { name: "Nx Monorepo", icon: <FaCogs className="w-5 h-5 text-indigo-400" /> },
        { name: "Docker (Basics)", icon: <SiDocker className="w-5 h-5 text-sky-500" /> },
        { name: "Git & GitHub", icon: <SiGithub className="w-5 h-5 text-slate-800 dark:text-slate-100" /> },
        { name: "Postman", icon: <FaCode className="w-5 h-5 text-orange-500" /> },
        { name: "Agile & Refactoring", icon: <FaCheckCircle className="w-5 h-5 text-green-500" /> },
      ]
    }
  ];

  const architectureDetails = {
    realtime: {
      title: "Real-Time WebSocket & Event-Driven Architecture",
      subtitle: "Engineered for instant client-server communication and background task processing.",
      tech: ["NestJS", "WebSockets", "Apache Pulsar", "Redis", "MongoDB"],
      highlights: [
        "Built real-time admin-customer chat supporting live support workloads.",
        "Integrated Apache Pulsar as a message broker for inter-service communication.",
        "Utilized Redis for event caching and managing WebSocket connection states.",
        "Engineered reliable event flows ensuring zero message drop during network spikes."
      ],
      flow: [
        { step: "1", role: "Client App", details: "Initiates WebSocket connection / sends live message" },
        { step: "2", role: "NestJS Gateway", details: "Authenticates connection & processes payload" },
        { step: "3", role: "Redis Store", details: "Tracks active connections & cache chat sessions" },
        { step: "4", role: "Apache Pulsar", details: "Publishes message events asynchronously to other microservices" },
        { step: "5", role: "Recipient Client", details: "Instantly receives the message payload in real-time" }
      ]
    },
    auth: {
      title: "OAuth2 & Keycloak Enterprise Security Integration",
      subtitle: "Architected secure and compliant authorization models across microservices.",
      tech: ["Keycloak", "OAuth2", "JWT", "NestJS Guards", "CORS"],
      highlights: [
        "Secured e-commerce loyalty systems and social SaaS using Keycloak identity manager.",
        "Configured custom OAuth2 workflows to sync YouTube and Meta platform accounts.",
        "Implemented JWT verification guards to authorize specific endpoint actions.",
        "Protected endpoints against CORS issues and optimized environment security setup."
      ],
      flow: [
        { step: "1", role: "User Request", details: "Accesses secure resource or triggers platform sync" },
        { step: "2", role: "Keycloak server", details: "Verifies user identity or performs OAuth2 handshake" },
        { step: "3", role: "JWT Access Token", details: "Issued to the client containing user scopes & details" },
        { step: "4", role: "NestJS Auth Guards", details: "Decodes JWT & verifies roles and permissions" },
        { step: "5", role: "Protected Resource", details: "Access granted; executes requested business logic" }
      ]
    },
    payments: {
      title: "Razorpay Workflow & Automated PDF Billing Engine",
      subtitle: "Secured billing systems processing credit and subscriptions.",
      tech: ["Razorpay SDK", "SendGrid", "NestJS", "PDFKit / Puppeteer", "Webhooks"],
      highlights: [
        "Designed payment workflows verifying Razorpay webhook signatures securely.",
        "Created background subscription engines modifying loyalty tiers on payments.",
        "Solved PDF billing generation issues, automatically generating branded PDF invoices.",
        "Configured automated transactional emails using SendGrid API."
      ],
      flow: [
        { step: "1", role: "Client Checkout", details: "Initiates purchase; opens Razorpay secure overlay" },
        { step: "2", role: "Razorpay Gateway", details: "Processes card/UPI transaction; triggers payment webhook" },
        { step: "3", role: "NestJS Webhook Validator", details: "Verifies signature integrity to prevent payment spoofing" },
        { step: "4", role: "Billing Engine", details: "Generates branded PDF invoices & updates database" },
        { step: "5", role: "SendGrid Service", details: "Dispatches confirmation email with PDF invoice attached" }
      ]
    },
    optimization: {
      title: "95% API Latency Optimization & Cloud Storage Migration",
      subtitle: "Drastically reduced database load and infrastructure costs.",
      tech: ["MongoDB", "Object Storage (S3)", "Data Migration Scripts", "NestJS API Core"],
      highlights: [
        "Identified database bottlenecks caused by storing heavy image files directly.",
        "Designed and wrote a single-handed migration script running in production.",
        "Offloaded all media blobs into cloud object storage, saving DB documents sizes.",
        "Reduced overall API response latency by 95% and lowered cloud hosting costs."
      ],
      flow: [
        { step: "1", role: "Diagnostic Scan", details: "Identified large database sizes causing high read latencies" },
        { step: "2", role: "Migration Script", details: "Wrote automated script extracting binary images from MongoDB" },
        { step: "3", role: "Object Storage", details: "Uploaded binary assets to cloud storage; retrieved secure URLs" },
        { step: "4", role: "DB Document Sync", details: "Replaced heavy binary data with lightweight image URL strings" },
        { step: "5", role: "Result", details: "95% API latency reduction & significantly lower hosting costs" }
      ]
    }
  };

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
            <span className="hidden sm:inline text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400">
              Backend Engineer
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
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <FaCheckCircle className="w-3 h-3" /> Available for New Roles
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-500/10 text-slate-600 dark:text-slate-300">
                  Jamshedpur, Jharkhand, India
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight">
                Architecting <span className="gradient-text">Scalable Backend Systems</span> & APIs
              </h2>
              <p className="text-xl md:text-2xl font-bold mb-4 text-slate-700 dark:text-slate-300">
                Zeeshan Ahmad • Software Engineer
              </p>
              <p className="mb-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                I specialize in building production-grade backend solutions using the <strong>NestJS / Node.js</strong> ecosystem. With a strong ownership mindset, I have delivered scalable APIs, database schema optimizations, real-time WebSockets communication, Keycloak OAuth2 auth systems, and payment integrations.
              </p>

              {/* Metrics Highlights Panel */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/40 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm mb-8">
                <div className="text-center md:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    Nearly 2Y
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    Production Exp.
                  </div>
                </div>
                <div className="text-center md:text-left border-l border-slate-200/60 dark:border-slate-800/60 pl-3">
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    200+
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    REST APIs Shipped
                  </div>
                </div>
                <div className="text-center md:text-left border-l border-slate-200/60 dark:border-slate-800/60 pl-3">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    95%
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    API Latency Drop
                  </div>
                </div>
                <div className="text-center md:text-left border-t border-slate-200/60 dark:border-slate-800/60 pt-2 col-span-3 grid grid-cols-3 gap-2">
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">
                      1200+
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                      Git Commits/PRs
                    </div>
                  </div>
                  <div className="border-l border-slate-200/60 dark:border-slate-800/60 pl-3">
                    <div className="text-xl sm:text-2xl font-extrabold text-violet-600 dark:text-violet-400">
                      200+
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                      DSA Solved
                    </div>
                  </div>
                  <div className="border-l border-slate-200/60 dark:border-slate-800/60 pl-3">
                    <div className="text-xl sm:text-2xl font-extrabold text-amber-600 dark:text-amber-400 flex items-center justify-center md:justify-start gap-1">
                      <FaAward className="w-4 h-4 text-yellow-500" />
                      Awarded
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                      Employee of Month
                    </div>
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
                  <Button variant="outline"><SiGithub /> GitHub</Button>
                </a>
                <a
                  id="hero-linkedin-link"
                  href="https://www.linkedin.com/in/zeem26/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Zeeshan Ahmad's LinkedIn profile"
                >
                  <Button variant="outline"><FaLinkedin /> LinkedIn</Button>
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
            <h3 className="text-3xl font-extrabold mb-3">Professional Summary</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              I am a Software Engineer (Backend-Focused Full-Stack) with nearly 2 years of production experience building scalable, high-performance backend systems. I specialize in backend architecture design, database optimization, real-time messaging, and secure third-party integrations. Driven by a strong ownership mindset, I take features from concept, through implementation and optimization, straight to production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full" glow={false}>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-extrabold text-lg mb-4 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5" /> Core Competencies
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500">•</span>
                    <span>
                      <strong>Backend Scalability:</strong> Expert in structuring microservices, event queues, and real-time streaming services.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500">•</span>
                    <span>
                      <strong>API & DB Optimization:</strong> Experienced in MongoDB query refinement, custom aggregation pipelines, and schema migrations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500">•</span>
                    <span>
                      <strong>Security:</strong> Implementing standard OAuth2 platform access, JWT authorizations, and Keycloak client setups.
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="flex flex-col h-full" glow={false}>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-extrabold text-lg mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <FaCogs className="w-5 h-5" /> Professional Strengths
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>
                      <strong>End-to-End Ownership:</strong> Shipped 10+ production modules independently with minimal supervision.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>
                      <strong>Mathematical & Logical Foundation:</strong> B.Sc in Mathematics facilitates analytical, structured problem solving.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>
                      <strong>Fast Learning Cycle:</strong> Successfully integrated complex integrations (Apache Pulsar, Razorpay, Google/YouTube APIs) in record time.
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="flex flex-col h-full" glow={false}>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-extrabold text-lg mb-4 text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                  <FaServer className="w-5 h-5" /> Backend Practices
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500">•</span>
                    <span>
                      <strong>Maintainability & Testing:</strong> Enforcing clean interfaces, type safety, and maintaining 80-85% test coverage with Jest.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500">•</span>
                    <span>
                      <strong>Platform Access:</strong> Extensive troubleshooting of OAuth2 blockers, third-party platform limitations, and API quotas.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500">•</span>
                    <span>
                      <strong>Documentation:</strong> Author of detailed API and architecture documentation for onboarding team members quickly.
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* System Architecture & Integration Showcase Section */}
        <motion.section
          id="architecture"
          className="bg-slate-100 dark:bg-slate-900/50 py-20 scroll-mt-20 transition-colors"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto p-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h3 className="text-3xl font-extrabold mb-3">System Architecture & Integration Showcase</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Explore deep dives into the production-ready backend workflows I designed and implemented.
              </p>
            </div>

            {/* Tabs Selector */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto">
              <button
                onClick={() => setActiveArchTab("realtime")}
                className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 focus-ring ${
                  activeArchTab === "realtime"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
              >
                Real-Time Messaging
              </button>
              <button
                onClick={() => setActiveArchTab("auth")}
                className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 focus-ring ${
                  activeArchTab === "auth"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
              >
                OAuth2 & Security
              </button>
              <button
                onClick={() => setActiveArchTab("payments")}
                className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 focus-ring ${
                  activeArchTab === "payments"
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-500/20"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
              >
                Razorpay & Billing
              </button>
              <button
                onClick={() => setActiveArchTab("optimization")}
                className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 focus-ring ${
                  activeArchTab === "optimization"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
              >
                Latency Optimization
              </button>
            </div>

            {/* Tab Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArchTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl"
              >
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl md:text-2xl font-extrabold mb-2 text-slate-900 dark:text-white">
                      {architectureDetails[activeArchTab].title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
                      {architectureDetails[activeArchTab].subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {architectureDetails[activeArchTab].tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-3.5 mb-6">
                      {architectureDetails[activeArchTab].highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-150 dark:border-slate-900 flex flex-col justify-center">
                  <h5 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
                    <FaCode className="w-3.5 h-3.5" /> Integration Flow Architecture
                  </h5>
                  <div className="space-y-4">
                    {architectureDetails[activeArchTab].flow.map((f, i) => (
                      <div key={f.step} className="flex gap-4 relative">
                        {/* Step Connecting Line */}
                        {i < architectureDetails[activeArchTab].flow.length - 1 && (
                          <div className="absolute left-[14px] top-7 bottom-[-16px] w-[2px] bg-slate-200 dark:bg-slate-800"></div>
                        )}
                        <div className="w-7 h-7 rounded-full bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs flex-shrink-0 z-10">
                          {f.step}
                        </div>
                        <div>
                          <p className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wide">
                            {f.role}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {f.details}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="max-w-6xl mx-auto p-6 py-20 scroll-mt-20"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl font-extrabold mb-3">Technical Skills Matrix</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
            <p className="text-base text-slate-600 dark:text-slate-300">
              A comprehensive directory of languages, frameworks, databases, and engineering workflows in my stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat) => (
              <Card key={cat.title} className="p-6 bg-white dark:bg-slate-900" glow={false}>
                <h4 className={`font-bold text-sm uppercase tracking-wider px-1 border-l-2 mb-5 pl-2 ${cat.color}`}>
                  {cat.title}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center gap-2.5 p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 transition duration-300"
                    >
                      <div className="flex-shrink-0 bg-white dark:bg-slate-900 p-1.5 rounded-lg shadow-sm border border-slate-200/30 dark:border-slate-800/30">
                        {s.icon}
                      </div>
                      <span className="font-semibold text-xs text-slate-700 dark:text-slate-300 leading-tight">
                        {s.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="bg-slate-100 dark:bg-slate-900/50 py-20 scroll-mt-20 transition-colors"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto p-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl font-extrabold mb-3">Work Experience</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Detailed chronology of my achievements and software systems shipped.
              </p>
            </div>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
              {/* Full-time Role */}
              <div className="relative pl-8 md:pl-10">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-1 bg-blue-600 border-4 border-slate-100 dark:border-slate-900 w-5 h-5 rounded-full z-10 shadow-sm shadow-blue-500/30"></div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Software Engineer (Backend-Focused Full-Stack)
                  </h4>
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <FaCalendarAlt className="w-3 h-3" /> Dec 03, 2024 – Mar 03, 2026
                  </span>
                </div>
                <p className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-1.5">
                  <FaBriefcase className="w-3.5 h-3.5" /> Kanlas Technologies • Remote / WFH
                </p>

                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                  <p>
                    Led backend engineering for a high-traffic <strong>Social Media Management SaaS</strong> (Google, YouTube, and Meta integrations). Engineered microservices facilitating posting schedules, advertising budgets, multi-account syncing, and analytical tracking.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 max-w-3xl my-3">
                    <h5 className="font-extrabold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1">
                      <FaAward className="w-3.5 h-3.5" /> Core Production Impact
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      <strong>95% API Latency Reduction:</strong> Migrated database-stored images directly to cloud object storage. Drastically minimized database payload sizes, decreased query overheads, and significantly saved ongoing infrastructure costs.
                    </p>
                  </div>

                  <ul className="list-disc pl-6 space-y-2 mt-2 text-sm text-slate-600 dark:text-slate-300">
                    <li>
                      <strong>API Architecture:</strong> Designed, shipped, and documented <strong>50+ REST APIs</strong> and microservices across core subscription, advertisement scheduling, and notification modules.
                    </li>
                    <li>
                      <strong>Platform Integrations:</strong> Configured OAuth2 platform sync structures, managing API limitations and access token rotations with Google Ads API, YouTube Content API, and Meta Graph API.
                    </li>
                    <li>
                      <strong>Billing Integration:</strong> Formulated secure Razorpay checkout endpoints and developed custom billing logic producing branded transactional invoice PDFs automatically.
                    </li>
                    <li>
                      <strong>Inter-service Messaging:</strong> Maintained Apache Pulsar events configurations to process backend jobs asynchronously.
                    </li>
                    <li>
                      <strong>Quality Standards:</strong> Enforced unit and integration test coverages to <strong>80–85% with Jest</strong>, eliminating potential regression bugs. Created API schemas using Nx Monorepo structures.
                    </li>
                  </ul>

                  <div className="pt-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mr-2">Tech Stack:</span>
                    <div className="inline-flex flex-wrap gap-1.5">
                      {["NestJS", "Node.js", "MongoDB", "Apache Pulsar", "OAuth2", "Keycloak", "Razorpay", "SendGrid", "Jest", "Nx Monorepo", "TypeScript"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Internship Role */}
              <div className="relative pl-8 md:pl-10">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-1 bg-slate-300 dark:bg-slate-700 border-4 border-slate-100 dark:border-slate-900 w-5 h-5 rounded-full z-10"></div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Backend Development Intern
                  </h4>
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400">
                    <FaCalendarAlt className="w-3 h-3" /> Jun 03, 2024 – Dec 03, 2024
                  </span>
                </div>
                <p className="text-sm font-extrabold text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                  <FaBriefcase className="w-3.5 h-3.5" /> Kanlas Technologies • Remote / WFH
                </p>

                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                  <p>
                    Retained as part of the core building team for a complex <strong>Customer Loyalty & Engagement SaaS Platform</strong> from scratch. Managed database schema layouts and wrote core features.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 max-w-3xl my-3">
                    <h5 className="font-extrabold text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1">
                      <FaAward className="w-3.5 h-3.5" /> Core Production Impact
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      <strong>70%+ API Delivery Ownership:</strong> Independently developed over 70% of API endpoints and built 20+ backend features spanning products catalog, customer tiers, checkout validation, return orders, and analytics.
                    </p>
                  </div>

                  <ul className="list-disc pl-6 space-y-2 mt-2 text-sm text-slate-600 dark:text-slate-300">
                    <li>
                      <strong>Real-Time Messaging:</strong> Designed WebSocket integrations enabling instant admin-customer live chats. Interfaced chat streams with Apache Pulsar and Redis for messaging brokers and server-state caching.
                    </li>
                    <li>
                      <strong>Enterprise Authentication:</strong> Setup and configured access security utilizing Keycloak auth controllers.
                    </li>
                    <li>
                      <strong>Automated Communications:</strong> Programmed FCM integration for instant mobile push notifications and SendGrid hooks for automatic order tracking emails.
                    </li>
                    <li>
                      <strong>Data Operations:</strong> Worked on initial database structure and wrote migration scripts to safely deploy features to production databases.
                    </li>
                  </ul>

                  <div className="pt-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mr-2">Tech Stack:</span>
                    <div className="inline-flex flex-wrap gap-1.5">
                      {["NestJS", "Node.js", "Express.js", "WebSockets", "Keycloak", "MongoDB", "Redis", "Apache Pulsar", "Firebase (FCM)", "SendGrid", "Jest"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="max-w-6xl mx-auto p-6 py-20 scroll-mt-20"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-extrabold mb-3">Featured Projects</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
            <p className="text-base text-slate-600 dark:text-slate-300">
              A summary of the primary SaaS applications and personal software products I have delivered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="flex flex-col h-full bg-white dark:bg-slate-900" glow={true}>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">
                    SaaS Enterprise
                  </span>
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                    Full-time Role
                  </span>
                </div>
                <h4 className="font-extrabold text-xl mb-3 text-slate-900 dark:text-white">
                  Reppoo (Social Platform SaaS)
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                  Social media posting, scheduling, and metrics product. Shipped 50+ REST APIs, connected YouTube Content APIs, Google Ads platform profiles, configured Razorpay subscriptions, and created PDF billings engines. Reduced API latency by 95% using S3 object store migrations.
                </p>
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Private Repository
                  </span>
                  <span className="text-[10px] text-slate-500 italic font-semibold">
                    NestJS • OAuth2 • Jest
                  </span>
                </div>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="flex flex-col h-full bg-white dark:bg-slate-900" glow={true}>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    SaaS Enterprise
                  </span>
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                    Internship Role
                  </span>
                </div>
                <h4 className="font-extrabold text-xl mb-3 text-slate-900 dark:text-white">
                  Loya (Loyalty Platform)
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                  E-commerce loyalty, tiered achievements, and point processing engines. Independently built over 70% of API endpoints. Developed live WebSocket chat with Apache Pulsar brokers, Keycloak secure authentications, SendGrid notifications, and transactional databases models.
                </p>
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Private Repository
                  </span>
                  <span className="text-[10px] text-slate-500 italic font-semibold">
                    WebSockets • Pulsar • Redis
                  </span>
                </div>
              </div>
            </Card>

            {/* Project 3 */}
            <Card className="flex flex-col h-full bg-white dark:bg-slate-900" glow={true}>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                    Personal Project
                  </span>
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                    Jan - Feb 2024
                  </span>
                </div>
                <h4 className="font-extrabold text-xl mb-3 text-slate-900 dark:text-white">
                  Full-Stack YouTube Clone
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                  Developed a production-ready video sharing site clone. Coded 30+ Express.js REST APIs linked to MongoDB Atlas. Implemented video uploads via Firebase Storage, channel subscriptions, commenting threads, like/dislike interactions, and JWT/Google authentication.
                </p>
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                  <a
                    id="youtube-clone-repo-link"
                    href="https://github.com/zeem2626"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    aria-label="View YouTube Clone repository on GitHub"
                  >
                    View Repository <FaExternalLinkAlt className="w-2.5 h-2.5" />
                  </a>
                  <span className="text-[10px] text-slate-500 italic font-semibold">
                    MERN Stack • Firebase
                  </span>
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
              <h3 className="text-3xl font-extrabold mb-3">Achievements & Key Milestones</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
              <p className="text-base text-slate-600 dark:text-slate-300">
                A quantitative view of my developer achievements and institutional recognition.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-white dark:bg-slate-900" glow={false}>
                <div className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <FaTrophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-900 dark:text-white mb-1">
                      Employee of the Month (2025)
                    </h4>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mb-2">
                      Kanlas Technologies
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Awarded for consistent module ownership, delivering zero-regression code, resolving OAuth2 platform access blockers, and assisting mobile front-end syncs.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white dark:bg-slate-900" glow={false}>
                <div className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <FaCode className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-900 dark:text-white mb-1">
                      200+ DSA Problems Solved
                    </h4>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-2">
                      LeetCode & GeeksforGeeks
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Strong analytical thinking with structured problem-solving practice in linear data structures, tree traversals, search algorithms, recursion, and graphs (BFS, DFS, Dijkstra, topological sorting, cycles).
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white dark:bg-slate-900" glow={false}>
                <div className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                    <FaCloudUploadAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-900 dark:text-white mb-1">
                      1200+ Production Commits
                    </h4>
                    <p className="text-xs text-cyan-600 dark:text-cyan-400 font-bold mb-2">
                      Git & Pull Requests (Kanlas SaaS)
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Actively managed version controls, pull request branches, code refactoring reviews, and feature branch deployments across core microservices repositories.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white dark:bg-slate-900" glow={false}>
                <div className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-900 dark:text-white mb-1">
                      ~85% Test Suite Coverage
                    </h4>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mb-2">
                      Unit Testing (Jest)
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Ensured logic integrity by authoring comprehensive mock unit tests and endpoint validation assertions for microservices APIs using Jest.
                    </p>
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
            <h3 className="text-3xl font-extrabold mb-3">Academic Credentials</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
            <p className="text-base text-slate-600 dark:text-slate-300">
              My formal education background in technology and mathematical sciences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card glow={false} className="bg-white dark:bg-slate-905">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-indigo-600 dark:text-indigo-400">
                  <FaGraduationCap className="text-4xl" />
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-900 dark:text-white">
                      MCA (Information Technology)
                    </h4>
                    <p className="text-xs font-bold text-slate-500">
                      Netaji Subhas University, Jamshedpur
                    </p>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <p>
                    <strong>Timeline:</strong> 2022 – 2024
                  </p>
                  <p>
                    <strong>Score:</strong> 73.2%
                  </p>
                  <p className="text-slate-500 dark:text-slate-400">
                    Advanced study in software engineering protocols, object-oriented designs, database architecture concepts, web programming, and networks.
                  </p>
                </div>
              </div>
            </Card>

            <Card glow={false} className="bg-white dark:bg-slate-905">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-blue-600 dark:text-blue-400">
                  <FaGraduationCap className="text-4xl" />
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-900 dark:text-white">
                      B.Sc in Mathematics
                    </h4>
                    <p className="text-xs font-bold text-slate-500">
                      Kolhan University
                    </p>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <p>
                    <strong>Timeline:</strong> 2019 – 2022
                  </p>
                  <p>
                    <strong>Score:</strong> 69%
                  </p>
                  <p className="text-slate-500 dark:text-slate-400">
                    Built a strong foundation in logical reasoning, discrete math, graph theories, analytical calculations, and algorithm optimization strategies.
                  </p>
                </div>
              </div>
            </Card>

            <Card glow={false} className="bg-white dark:bg-slate-905">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-slate-500">
                  <FaGraduationCap className="text-3xl" />
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                      Intermediate (Science)
                    </h4>
                    <p className="text-xs font-bold text-slate-500">
                      Karim City College, Jamshedpur • JAC Board
                    </p>
                  </div>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  <p>
                    <strong>Timeline:</strong> 2017 – 2019 | <strong>Score:</strong> 71%
                  </p>
                </div>
              </div>
            </Card>

            <Card glow={false} className="bg-white dark:bg-slate-905">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-slate-500">
                  <FaGraduationCap className="text-3xl" />
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                      Matriculation
                    </h4>
                    <p className="text-xs font-bold text-slate-500">
                      Vikas Vidyalaya, Jamshedpur • CBSE Board
                    </p>
                  </div>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  <p>
                    <strong>Timeline:</strong> 2015 – 2017 | <strong>Score:</strong> 70%
                  </p>
                </div>
              </div>
            </Card>
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
          <p className="max-w-lg mx-auto text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-sm sm:text-base">
            I am currently exploring backend software engineering roles where I can drive ownership and scale API infrastructure. Feel free to copy my contacts or click to reach out directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-slate-700 dark:text-slate-200">
            {/* Copy Email Button */}
            <div className="relative group w-full sm:w-auto">
              <button
                id="contact-email"
                onClick={() => copyToClipboard("zeem1920@gmail.com", "email")}
                className="flex items-center justify-between sm:justify-start gap-3 w-full px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md hover:-translate-y-0.5 transition duration-300 focus-ring"
                aria-label="Copy email address"
              >
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-500" />
                  <span className="font-semibold text-xs sm:text-sm">zeem1920@gmail.com</span>
                </div>
                {copiedEmail ? (
                  <FaCheck className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <FaCopy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
                )}
              </button>
              {copiedEmail && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] font-bold text-white bg-slate-900 dark:bg-slate-800 rounded shadow-md z-50">
                  Copied Email!
                </div>
              )}
            </div>

            {/* Copy Phone Button */}
            <div className="relative group w-full sm:w-auto">
              <button
                id="contact-phone"
                onClick={() => copyToClipboard("7979825081", "phone")}
                className="flex items-center justify-between sm:justify-start gap-3 w-full px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md hover:-translate-y-0.5 transition duration-300 focus-ring"
                aria-label="Copy phone number"
              >
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-indigo-500" />
                  <span className="font-semibold text-xs sm:text-sm">+91 79798 25081</span>
                </div>
                {copiedPhone ? (
                  <FaCheck className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <FaCopy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
                )}
              </button>
              {copiedPhone && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] font-bold text-white bg-slate-900 dark:bg-slate-800 rounded shadow-md z-50">
                  Copied Phone Number!
                </div>
              )}
            </div>
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
        <p className="text-xs text-slate-600 dark:text-slate-500">Built using NestJS practices, React, and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
