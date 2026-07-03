import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "../constants/portfolio";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Education(): JSX.Element {
  return (
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
        {education.map((edu) => (
          <Card key={edu.title} glow={false} className="bg-white dark:bg-slate-905">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4 text-indigo-600 dark:text-indigo-400">
                <FaGraduationCap className={`text-4xl ${edu.color || "text-slate-500"}`} />
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900 dark:text-white">
                    {edu.title}
                  </h4>
                  <p className="text-xs font-bold text-slate-500">
                    {edu.school}
                  </p>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <p>
                  <strong>Timeline:</strong> {edu.timeline}
                </p>
                <p>
                  <strong>Score:</strong> {edu.score}
                </p>
                {edu.details && (
                  <p className="text-slate-500 dark:text-slate-400">
                    {edu.details}
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
