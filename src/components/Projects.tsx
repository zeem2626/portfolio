import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../constants/portfolio";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects(): JSX.Element {
  return (
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
        {projects.map((proj) => (
          <Card key={proj.title} className="flex flex-col h-full bg-white dark:bg-slate-900" glow={true}>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${proj.roleBadgeColor}`}>
                  {proj.category}
                </span>
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                  {proj.role}
                </span>
              </div>
              <h4 className="font-extrabold text-xl mb-3 text-slate-909 dark:text-white">
                {proj.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                {proj.description}
              </p>
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                {proj.repoLink ? (
                  <a
                    id={`${proj.title.toLowerCase().replace(/\s+/g, "-")}-repo-link`}
                    href={proj.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    aria-label={`View ${proj.title} repository on GitHub`}
                  >
                    {proj.repoStatus} <FaExternalLinkAlt className="w-2.5 h-2.5" />
                  </a>
                ) : (
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    {proj.repoStatus}
                  </span>
                )}
                <span className="text-[10px] text-slate-500 italic font-semibold">
                  {proj.techText}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
