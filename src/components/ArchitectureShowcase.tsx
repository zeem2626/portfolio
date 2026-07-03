import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaCode } from "react-icons/fa";
import { architectureTabs } from "../constants/portfolio";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ArchitectureShowcase(): JSX.Element {
  const [activeArchTab, setActiveArchTab] = useState<string>(
    architectureTabs[0]?.id || "realtime",
  );

  const activeTabObj =
    architectureTabs.find((tab) => tab.id === activeArchTab) ||
    architectureTabs[0];
  const details = activeTabObj.architectureDetails;

  return (
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
          <h3 className="text-3xl font-extrabold mb-3">
            System Architecture & Integration Showcase
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Explore deep dives into the production-ready backend workflows I
            designed and implemented.
          </p>
        </div>

        {/* Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto">
          {architectureTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveArchTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 focus-ring ${
                activeArchTab === tab.id
                  ? tab.colorClass
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
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
                  {details.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
                  {details.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {details.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-3.5 mb-6">
                  {details.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
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
                {details.flow.map((f, i) => (
                  <div key={f.step} className="flex gap-4 relative">
                    {/* Step Connecting Line */}
                    {i < details.flow.length - 1 && (
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
  );
}
