import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  SiGoogle,
  SiGithub,
} from "react-icons/si";
import { FaMoon, FaSun } from "react-icons/fa";

const skills = [
  { name: "NestJS", icon: <SiNestjs size={28} /> },
  { name: "Node.js", icon: <SiNodedotjs size={28} /> },
  { name: "MongoDB", icon: <SiMongodb size={28} /> },
  { name: "Apache Pulsar", icon: <SiDocker size={28} /> },
  { name: "WebSockets", icon: <SiGoogle size={28} /> },
  { name: "React (familiar)", icon: <SiReact size={28} /> },
  { name: "Redux", icon: <SiRedux size={28} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
  { name: "Jest", icon: <SiJest size={28} /> },
  { name: "Docker (basic)", icon: <SiDocker size={28} /> },
  { name: "Keycloak (OAuth2)", icon: <SiGoogle size={28} /> },
  { name: "Git & GitHub", icon: <SiGithub size={28} /> },
];

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

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <h1 className="text-lg md:text-xl font-bold">Zeeshan Ahmad</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Backend Developer
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {s.label}
              </a>
            ))}
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>
          <button
            className="md:hidden text-xl"
            onClick={() => setNavOpen(!navOpen)}
          >
            ☰
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden flex flex-col space-y-2 p-4 bg-white dark:bg-gray-800 border-t">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {s.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-md"
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
            </div>
          </div>
        )}
      </nav>

      <div onClick={() => setNavOpen(navOpen ? !navOpen : navOpen)}>
        {/* Hero */}
        <section id="hero" className="min-h-screen flex items-center pt-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-3">
                Hi, I’m Zeeshan Ahmad
              </h2>
              <p className="text-lg md:text-xl mb-4 text-gray-700 dark:text-gray-300">
                Backend Developer — NestJS · Node.js · MongoDB · Microservices
              </p>
              <p className="mb-6 max-w-xl text-gray-600 dark:text-gray-300">
                I build reliable, test-covered backend systems, real-time
                features, and integrations (OAuth2 & third-party APIs). Seeking
                backend roles in India — open to remote/international in future.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/1jrvQvwH0BFGUCl9wXnXXrepc9BawXMts/view?usp=drive_link"
                  target="_blank"
                  download
                >
                  <Button>Resume</Button>
                </a>

                <a
                  href="https://github.com/zeem26"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline">GitHub</Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/zeem26/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline">LinkedIn</Button>
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                📍 Jamshedpur, Jharkhand, India · 📧 zeem1920@gmail.com · 📞 +91
                79798 25081
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <img
                src="/hero.svg"
                alt="Hero illustration"
                className="hero-img rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* About */}
        <motion.section
          id="about"
          className="max-w-4xl mx-auto p-6 py-12"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Backend developer experienced in NestJS, Node.js, MongoDB,
            microservices, and real-time systems. Built and maintained
            production backends and third-party integrations (OAuth2/Keycloak,
            Google & Meta APIs). Strong problem-solving background (250+ DSA
            problems solved). I take pride in writing modular, test-covered code
            and designing APIs that scale.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <div className="p-4">
                <h4 className="font-semibold">Strengths</h4>
                <ul className="list-disc pl-5 mt-2">
                  <li>Fast learner</li>
                  <li>Reliable delivery</li>
                  <li>Problem solving</li>
                </ul>
              </div>
            </Card>
            <Card>
              <div className="p-4">
                <h4 className="font-semibold">Hobbies</h4>
                <ul className="list-disc pl-5 mt-2">
                  <li>Teaching & mentoring</li>
                  <li>Traveling</li>
                  <li>Astronomy</li>
                </ul>
              </div>
            </Card>
            <Card>
              <div className="p-4">
                <h4 className="font-semibold">Career Goals</h4>
                <ul className="list-disc pl-5 mt-2">
                  <li>Backend roles in India (short-term)</li>
                  <li>International opportunities (later)</li>
                </ul>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          className="bg-gray-50 dark:bg-gray-800 py-12"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto p-6">
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((s) => (
                <motion.div
                  key={s.name}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm border"
                >
                  <div className="text-blue-600 dark:text-blue-400">
                    {s.icon}
                  </div>
                  <div className="font-medium">{s.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          id="experience"
          className="max-w-6xl mx-auto p-6 py-12"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div className="space-y-6">
            <Card>
              <div className="p-4">
                <h4 className="font-bold">
                  Kanlas Technologies — Software Engineer (Backend)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Dec 2024 – Present
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>
                    Leading backend development for a social-platform management
                    SaaS (accounts, posts, ads, analytics across Google, Meta,
                    Threads, YouTube).
                  </li>
                  <li>
                    Designed & deployed 50+ REST APIs & microservices; Nx
                    monorepo for code reuse.
                  </li>
                  <li>
                    Contributed to Apache Pulsar adoption for inter-service
                    messaging (~1,000+ concurrent events/sec target).
                  </li>
                  <li>
                    Maintained ~85% unit test coverage with Jest; authored API &
                    architecture docs.
                  </li>
                  <li>
                    GitHub contributions: 494 (2025). Employee of the Month
                    (2025).
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-4">
                <h4 className="font-bold">
                  Kanlas Technologies — Backend Development Intern
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Jun 2024 – Dec 2024
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>
                    Built backend from scratch for loyalty & engagement platform
                    (mobile + web).
                  </li>
                  <li>
                    Engineered 100+ APIs for products, orders, returns, loyalty
                    points, ticketing, admin/customer flows.
                  </li>
                  <li>
                    Implemented real-time admin–customer chat (WebSockets) with
                    Pulsar; integrated Keycloak (OAuth2), Firebase, SendGrid.
                  </li>
                  <li>
                    434 GitHub contributions to the loyalty platform repo
                    (2024).
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          className="bg-gray-50 dark:bg-gray-800 py-12"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto p-6">
            <h3 className="text-2xl font-bold mb-6">Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <div className="p-4">
                  <h4 className="font-bold">Social Platform Manager (Work)</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    OAuth2 integrations, Pulsar, Nx monorepo, 50+ APIs.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <a href="#" className="text-sm underline">
                      Private repo
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-4">
                  <h4 className="font-bold">Loyalty Program App (Work)</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Backend for loyalty/engagement: 100+ APIs, real-time chat,
                    Firebase, SendGrid.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <a href="#" className="text-sm underline">
                      Private repo
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-4">
                  <h4 className="font-bold">YouTube Clone (Personal)</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    React, Redux, Node.js, Express, MongoDB, JWT auth, Firebase
                    Storage.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <a
                      href="https://github.com/zeem26"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm underline"
                    >
                      Repo: github.com/zeem26
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          id="education"
          className="max-w-6xl mx-auto p-6 py-12"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>MCA — Netaji Subhash University — Completed Aug 2024</li>
            <li>B.Sc. Mathematics — Kolhan University — 2019–2022</li>
            <li>Intermediate — Jharkhand Academic Council — 2017–2019</li>
            <li>Matriculation — Vikas Vidhyalaya (CBSE) — 2015–2017</li>
          </ul>
        </motion.section>

        {/* Achievements */}
        <motion.section
          id="achievements"
          className="bg-gray-50 dark:bg-gray-800 py-12"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto p-6">
            <h3 className="text-2xl font-bold mb-4">
              Achievements & Problem Solving
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Solved 250+ DSA problems on LeetCode, GfG, Coding Ninjas.</li>
              <li>
                GitHub contributions: 434 (loyalty platform, 2024); 494 (social
                platform, 2025).
              </li>
              <li>
                Maintained ~85% unit test coverage (Jest) on core services.
              </li>
              <li>Employee of the Month (2025) — Kanlas Technologies.</li>
            </ul>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="max-w-6xl mx-auto p-6 py-12 text-center"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p>📞 +91 79798 25081 · 📧 zeem1920@gmail.com</p>
          <p className="mt-2">🌍 Jamshedpur, Jharkhand, India</p>
          <p className="mt-2">
            🔗{" "}
            <a
              className="text-blue-600 dark:text-blue-400"
              href="https://github.com/zeem26"
            >
              GitHub
            </a>{" "}
            ·{" "}
            <a
              className="text-blue-600 dark:text-blue-400"
              href="https://www.linkedin.com/in/zeem26/"
            >
              LinkedIn
            </a>
          </p>
        </motion.section>

        <footer className="bg-gray-900 text-white text-center py-6">
          © 2025 Zeeshan Ahmad. Built with ❤️ using React + TypeScript +
          Tailwind CSS.
        </footer>
      </div>
    </div>
  );
}
