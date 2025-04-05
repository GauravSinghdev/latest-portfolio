"use client";

import { ChevronRightCircle } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
  },
};

// Animation variants for the work entry
const entryVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Animation variants for list items
const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  hover: { scale: 1.02, color: "#1E40AF", transition: { duration: 0.3 } }, // Blue hover color
};

const WorkExp = () => {
  return (
    <motion.div
      className="space-y-6 px-2 lg:px-6 max-w-6xl mx-auto py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between">
        <div className="h2-grad flex items-center gap-2">
          <div className="h2-grad flex items-center gap-2">
            Work Experience
            <span>
              <ChevronRightCircle className="w-6 h-6 text-[var(--primary)]" />
            </span>
          </div>
        </div>
      </div>

      {/* Work Experience Entry */}
      <motion.div
        variants={entryVariants}
        className="space-y-4 relative bg-white rounded-xl p-6 px-2 sm:px-6 shadow-md border border-gray-100 overflow-hidden group"
      >
        {/* Background gradient effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, #1E40AF 0%, transparent 70%)`, // Blue gradient
          }}
        ></div>

        <div className="flex flex-row md:justify-between z-10">
          <div>
            <p className="font-medium text-gray-800">Metacube Software</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-xl px-2 text-sm text-gray-600">
              Software Engineer
            </div>
            <div className="text-sm text-gray-500">(July 21 - Jan 24)</div>
          </div>
        </div>

        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {[
            "Developed and maintained responsive web applications using React, improving user experience and performance by 30%.",
            "Integrated Salesforce APIs into frontend systems, streamlining data flow between customer-facing apps and CRM.",
            "Configured and customized Salesforce dashboards, reports, and workflows to support sales and customer support teams.",
            "Collaborated with cross-functional teams to deliver scalable solutions under tight deadlines, reducing deployment time by 20%.",
            "Implemented reusable React components and optimized code, enhancing maintainability and reducing bugs by 15%.",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              whileHover="hover"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default WorkExp;
