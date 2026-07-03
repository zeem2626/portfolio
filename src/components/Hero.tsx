import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { SiGithub } from "react-icons/si";
import {
  FaCheckCircle,
  FaAward,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { personalDetails, metrics } from "../constants/portfolio";

export default function Hero(): JSX.Element {
  return (
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
              {personalDetails.location}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Architecting <span className="gradient-text">Scalable Backend Systems</span> & APIs
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-4 text-slate-700 dark:text-slate-300">
            {personalDetails.subtitle}
          </p>
          <p className="mb-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {personalDetails.description}
          </p>

          {/* Metrics Highlights Panel */}
          <div className="grid grid-cols-1 min-[480px]:grid-cols-3 gap-4 p-4 rounded-2xl bg-white/40 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm mb-8">
            <div className="text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                {metrics.experience}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Production Exp.
              </div>
            </div>
            <div className="text-center md:text-left border-t min-[480px]:border-t-0 min-[480px]:border-l border-slate-200/60 dark:border-slate-800/60 pt-3 min-[480px]:pt-0 pl-0 min-[480px]:pl-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                {metrics.apisShipped}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold">
                REST APIs Shipped
              </div>
            </div>
            <div className="text-center md:text-left border-t min-[480px]:border-t-0 min-[480px]:border-l border-slate-200/60 dark:border-slate-800/60 pt-3 min-[480px]:pt-0 pl-0 min-[480px]:pl-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {metrics.latencyDrop}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold">
                API Latency Drop
              </div>
            </div>
            <div className="text-center md:text-left border-t border-slate-200/60 dark:border-slate-800/60 pt-3 col-span-1 min-[480px]:col-span-3 grid grid-cols-1 min-[480px]:grid-cols-3 gap-3">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">
                  {metrics.gitCommits}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  Git Commits/PRs
                </div>
              </div>
              <div className="border-t min-[480px]:border-t-0 min-[480px]:border-l border-slate-200/60 dark:border-slate-800/60 pt-3 min-[480px]:pt-0 pl-0 min-[480px]:pl-3">
                <div className="text-xl sm:text-2xl font-extrabold text-violet-600 dark:text-violet-400">
                  {metrics.dsaSolved}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  DSA Solved
                </div>
              </div>
              <div className="border-t min-[480px]:border-t-0 min-[480px]:border-l border-slate-200/60 dark:border-slate-800/60 pt-3 min-[480px]:pt-0 pl-0 min-[480px]:pl-3">
                <div className="text-xl sm:text-2xl font-extrabold text-amber-600 dark:text-amber-400 flex items-center justify-center md:justify-start gap-1">
                  <FaAward className="w-4 h-4 text-yellow-500" />
                  Awarded
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  {metrics.awardName}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              id="hero-resume-download"
              href={personalDetails.resumeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Download Zeeshan Ahmad's Resume (Google Drive)"
            >
              <Button variant="solid">Download Resume</Button>
            </a>
            <a
              id="hero-github-link"
              href={personalDetails.github}
              target="_blank"
              rel="noreferrer"
              aria-label="View Zeeshan Ahmad's GitHub profile"
            >
              <Button variant="outline"><SiGithub /> GitHub</Button>
            </a>
            <a
              id="hero-linkedin-link"
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="View Zeeshan Ahmad's LinkedIn profile"
            >
              <Button variant="outline"><FaLinkedin /> LinkedIn</Button>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <FaEnvelope /> {personalDetails.email}
            </span>
            <span className="flex items-center gap-1.5">
              <FaPhoneAlt /> {personalDetails.phone}
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
  );
}
