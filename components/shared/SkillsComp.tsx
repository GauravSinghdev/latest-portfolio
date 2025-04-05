"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 size={40} />,
    color: "#E34F26",
    description: "Structuring content with semantic markup.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={40} />,
    color: "#1572B6",
    description: "Styling with modern layouts and animations.",
  },
  {
    name: "JavaScript",
    icon: <FaJs size={40} />,
    color: "#F7DF1E",
    description: "Building interactive and dynamic features.",
  },
  {
    name: "ReactJS",
    icon: <FaReact size={40} />,
    color: "#61DAFB",
    description: "Creating reusable UI components.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} />,
    color: "#06B6D4",
    description: "Rapidly styling with utility-first CSS.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={40} />,
    color: "#339933",
    description: "Running JavaScript on the server-side.",
  },
  {
    name: "Express",
    icon: <SiExpress size={40} />,
    color: "#000000",
    description: "Building fast and minimal web APIs.",
  },
  {
    name: "Next.js",
    icon: <RiNextjsLine size={40} />, // Added Next.js
    color: "#000000", // Next.js black
    description: "Building server-rendered React applications.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} />,
    color: "#47A248",
    description: "Storing data in NoSQL databases.",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={40} />,
    color: "#336791",
    description: "Managing relational databases.",
  },
  {
    name: "Docker",
    icon: <FaDocker size={40} />,
    color: "#2496ED",
    description: "Containerizing applications for consistency.",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={40} />,
    color: "#181717",
    description: "Version control and collaboration.",
  },
];

// Animation variants for the card
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" },
};

// Animation variants for the icons
const iconVariants = {
  hover: { rotate: 360, transition: { duration: 0.6 } },
};

const SkillsComp = () => {
  return (
    <div className="space-y-6 max-w-6xl mx-auto py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: index * 0.1 }}
            className="relative bg-white rounded-xl p-2 sm:p-6 flex flex-col items-center shadow-md border border-gray-100 overflow-hidden group"
          >
            {/* Background gradient effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)`,
              }}
            ></div>

            {/* Skill content */}
            <motion.span
              variants={iconVariants}
              whileHover="hover"
              className="text-gray-800 z-10"
            >
              {skill.icon}
            </motion.span>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 z-10">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2 z-10">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComp;
