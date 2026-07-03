import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { skillCategories } from "../constants/portfolio";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills(): JSX.Element {
  return (
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
            <div className="grid grid-cols-1 min-[380px]:grid-cols-2 sm:grid-cols-3 gap-3">
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
  );
}
