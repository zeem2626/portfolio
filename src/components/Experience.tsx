import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaBriefcase, FaAward } from "react-icons/fa";
import { experiences } from "../constants/portfolio";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience(): JSX.Element {
  return (
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
          {experiences.map((exp, index) => (
            <div
              key={exp.company + exp.period}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-[9px] top-1 border-4 border-slate-100 dark:border-slate-900 w-5 h-5 rounded-full z-10 ${
                  index === 0
                    ? "bg-blue-600 shadow-sm shadow-blue-500/30"
                    : "bg-slate-300 dark:bg-slate-700"
                }`}
              ></div>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {exp.title}
                </h4>
                <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <FaCalendarAlt className="w-3 h-3" /> {exp.period}
                </span>
              </div>
              <p className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-1.5">
                <FaBriefcase className="w-3.5 h-3.5" /> {exp.company} •{" "}
                {exp.location}
              </p>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                <p>{exp.description}</p>

                {exp.impactDescription && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 max-w-3xl my-3">
                    <h5 className="font-extrabold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1">
                      <FaAward className="w-3.5 h-3.5" /> {exp.impactTitle}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {exp.impactDescription}
                    </p>
                  </div>
                )}

                <ul className="list-disc pl-6 space-y-2 mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {exp.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      {bullet.includes(":") ? (
                        <>
                          <strong>{bullet.split(":")[0]}:</strong>
                          {bullet.split(":").slice(1).join(":")}
                        </>
                      ) : (
                        bullet
                      )}
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mr-2">
                    Tech Stack:
                  </span>
                  <div className="inline-flex flex-wrap gap-1.5">
                    {exp.techStack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
