import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./components/Button";
import Card from "./components/Card";

export default function App(): JSX.Element {
  const [navOpen, setNavOpen] = useState(false);

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="font-sans text-gray-800 min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Zeeshan Ahmad</h1>
          <div className="hidden md:flex space-x-6">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-blue-600">
                {s.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-xl"
            onClick={() => setNavOpen(!navOpen)}
          >
            ☰
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden flex flex-col space-y-2 p-4 bg-white border-t">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-blue-600">
                {s.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-50 to-white p-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I’m Zeeshan Ahmad
        </motion.h2>
        <p className="text-lg md:text-2xl mb-6">
          Backend Developer (NestJS | Node.js | MongoDB | Microservices)
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://drive.google.com/file/d/1jrvQvwH0BFGUCl9wXnXXrepc9BawXMts/view?usp=drive_link"
            target="_blank"
            download
          >
            <Button>Resume</Button>
          </a>
          <div className="flex gap-2">
            <a
              href="https://github.com/zeem2626"
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
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto p-6 py-20">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p>
          Backend developer experienced in NestJS, Node.js, MongoDB,
          microservices, and real-time systems. Built and maintained production
          backends, OAuth2 integrations, and solved 250+ DSA problems. Focused
          on backend roles in India, with long-term interest in global
          opportunities.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto p-6">
          <h3 className="text-2xl font-bold mb-8">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "NestJS",
              "Node.js",
              "MongoDB",
              "Apache Pulsar",
              "WebSockets",
              "React",
              "Redux",
              "Docker",
              "Git",
              "Firebase",
              "SendGrid",
              "Keycloak",
            ].map((skill) => (
              <Card key={skill}>
                <div className="p-4 text-center font-medium">{skill}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto p-6 py-20">
        <h3 className="text-2xl font-bold mb-6">Experience</h3>
        <div className="space-y-6">
          <Card>
            <div className="p-4">
              <h4 className="font-bold">
                Kanlas Technologies — Software Engineer (Backend)
              </h4>
              <p className="text-sm text-gray-600">Dec 2024 – Present</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>50+ REST APIs & microservices</li>
                <li>Nx monorepo adoption, OAuth2, Pulsar integration</li>
                <li>85% unit test coverage</li>
                <li>Employee of the Month (2025)</li>
              </ul>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h4 className="font-bold">
                Kanlas Technologies — Backend Intern
              </h4>
              <p className="text-sm text-gray-600">Jun 2024 – Dec 2024</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Built backend for loyalty platform</li>
                <li>100+ APIs, WebSockets with Pulsar, Firebase, SendGrid</li>
                <li>434 GitHub contributions (2024)</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto p-6">
          <h3 className="text-2xl font-bold mb-8">Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Social Platform Manager",
                desc: "OAuth2, Pulsar, 50+ APIs",
              },
              {
                name: "Loyalty Program App",
                desc: "100+ APIs, WebSocket chat, Firebase, SendGrid",
              },
              {
                name: "YouTube Clone",
                desc: "React, Redux, Node.js, MongoDB, JWT, Firebase",
              },
            ].map((project) => (
              <Card key={project.name}>
                <div className="p-4">
                  <h4 className="font-bold">{project.name}</h4>
                  <p className="text-gray-600">{project.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-6xl mx-auto p-6 py-20">
        <h3 className="text-2xl font-bold mb-6">Education</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>MCA — Netaji Subhash University (2022–2024)</li>
          <li>B.Sc. Mathematics — Kolhan University (2019–2022)</li>
          <li>Intermediate — Jharkhand Academic Council (2017–2019)</li>
          <li>Matriculation — Vikas Vidhyalaya, CBSE (2015–2017)</li>
        </ul>
      </section>

      {/* Achievements */}
      <section id="achievements" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto p-6">
          <h3 className="text-2xl font-bold mb-6">
            Achievements & Problem Solving
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>250+ DSA problems solved</li>
            <li>GitHub contributions: 434 (2024), 494 (2025)</li>
            <li>Unit test coverage: ~85%</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto p-6 py-20 text-center">
        <h3 className="text-2xl font-bold mb-6">Contact</h3>
        <p>📞 +91 79798 25081</p>
        <p>📧 zeem1920@gmail.com</p>
        <p>🌍 Jamshedpur, Jharkhand, India</p>
        <p>
          🔗{" "}
          <a className="text-blue-600" href="https://github.com/zeem2626">
            GitHub
          </a>{" "}
          |{" "}
          <a
            className="text-blue-600"
            href="https://www.linkedin.com/in/zeem26/"
          >
            LinkedIn
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        © 2025 Zeeshan Ahmad.
      </footer>
    </div>
  );
}
