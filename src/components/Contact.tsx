import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaCheck,
  FaCopy,
  FaLinkedin,
} from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { personalDetails } from "../constants/portfolio";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact(): JSX.Element {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <motion.section
      id="contact"
      className="max-w-4xl mx-auto p-6 py-24 text-center scroll-mt-20"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-extrabold mb-3">Get in Touch</h3>
      <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
      <p className="max-w-lg mx-auto text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-sm sm:text-base">
        {personalDetails.contactDescription}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-slate-700 dark:text-slate-200">
        {/* Copy Email Button */}
        <div className="relative group w-full sm:w-auto">
          <button
            id="contact-email"
            onClick={() => copyToClipboard(personalDetails.email, "email")}
            className="flex items-center justify-between sm:justify-start gap-3 w-full px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md hover:-translate-y-0.5 transition duration-300 focus-ring"
            aria-label="Copy email address"
          >
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span className="font-semibold text-xs sm:text-sm">
                {personalDetails.email}
              </span>
            </div>
            {copiedEmail ? (
              <FaCheck className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <FaCopy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
            )}
          </button>
          {copiedEmail && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] font-bold text-white bg-slate-900 dark:bg-slate-800 rounded shadow-md z-50">
              Copied Email!
            </div>
          )}
        </div>

        {/* Copy Phone Button */}
        <div className="relative group w-full sm:w-auto">
          <button
            id="contact-phone"
            onClick={() => copyToClipboard(personalDetails.phoneRaw, "phone")}
            className="flex items-center justify-between sm:justify-start gap-3 w-full px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md hover:-translate-y-0.5 transition duration-300 focus-ring"
            aria-label="Copy phone number"
          >
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-indigo-500" />
              <span className="font-semibold text-xs sm:text-sm">
                {personalDetails.phone}
              </span>
            </div>
            {copiedPhone ? (
              <FaCheck className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <FaCopy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
            )}
          </button>
          {copiedPhone && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] font-bold text-white bg-slate-900 dark:bg-slate-800 rounded shadow-md z-50">
              Copied Phone Number!
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 text-slate-600 dark:text-slate-300">
        <a
          id="contact-github"
          href={personalDetails.github}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-slate-200/50 dark:bg-slate-800/80 hover:bg-slate-300/60 dark:hover:bg-slate-700 hover:scale-110 transition duration-300 focus-ring"
          aria-label="Visit Zeeshan Ahmad's GitHub Profile"
        >
          <SiGithub className="w-5 h-5" />
        </a>
        <a
          id="contact-linkedin"
          href={personalDetails.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-slate-200/50 dark:bg-slate-800/80 hover:bg-slate-300/60 dark:hover:bg-slate-700 hover:scale-110 transition duration-300 focus-ring"
          aria-label="Visit Zeeshan Ahmad's LinkedIn Profile"
        >
          <FaLinkedin className="w-5 h-5 text-blue-600" />
        </a>
      </div>
    </motion.section>
  );
}
