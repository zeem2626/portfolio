import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { FaTrophy, FaCode, FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";
import { achievements } from "../constants/portfolio";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const getIcon = (index: number) => {
  switch (index) {
    case 0:
      return <FaTrophy className="w-6 h-6" />;
    case 1:
      return <FaCode className="w-6 h-6" />;
    case 2:
      return <FaCloudUploadAlt className="w-6 h-6" />;
    case 3:
      return <FaCheckCircle className="w-6 h-6" />;
    default:
      return <FaTrophy className="w-6 h-6" />;
  }
};

export default function Achievements(): JSX.Element {
  return (
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
          {achievements.map((ach, index) => (
            <Card key={ach.title} className="bg-white dark:bg-slate-900" glow={false}>
              <div className="p-6 flex items-start gap-4">
                <div className={`p-3 rounded-xl flex-shrink-0 ${ach.iconColor}`}>
                  {getIcon(index)}
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900 dark:text-white mb-1">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mb-2">
                    {ach.subtitle}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
