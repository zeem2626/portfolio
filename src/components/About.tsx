import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { FaCheckCircle, FaCogs, FaServer } from "react-icons/fa";
import { about } from "../constants/portfolio";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About(): JSX.Element {
  return (
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
          {about.summary}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex flex-col h-full" glow={false}>
          <div className="p-6 flex-1 flex flex-col">
            <h4 className="font-extrabold text-lg mb-4 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
              <FaCheckCircle className="w-5 h-5" /> Core Competencies
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 flex-1">
              {about.coreCompetencies.map((comp) => (
                <li key={comp.title} className="flex items-start gap-2">
                  <span className="text-indigo-500">•</span>
                  <span>
                    <strong>{comp.title}:</strong> {comp.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card className="flex flex-col h-full" glow={false}>
          <div className="p-6 flex-1 flex flex-col">
            <h4 className="font-extrabold text-lg mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <FaCogs className="w-5 h-5" /> Professional Strengths
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 flex-1">
              {about.professionalStrengths.map((strength) => (
                <li key={strength.title} className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>
                    <strong>{strength.title}:</strong> {strength.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card className="flex flex-col h-full" glow={false}>
          <div className="p-6 flex-1 flex flex-col">
            <h4 className="font-extrabold text-lg mb-4 text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
              <FaServer className="w-5 h-5" /> Backend Practices
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 flex-1">
              {about.backendPractices.map((practice) => (
                <li key={practice.title} className="flex items-start gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>
                    <strong>{practice.title}:</strong> {practice.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </motion.section>
  );
}
