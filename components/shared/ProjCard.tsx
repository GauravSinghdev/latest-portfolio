"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Define the interface for the proj prop
interface Project {
  title: string;
  description: string;
  stack?: string[]; // Optional array of strings
  githubLink?: string; // Optional
  live?: string; // Optional
  image?: string; // Optional
}

interface CardProps {
  proj: Project;
}

const ProjCard = ({ proj }: CardProps) => {
  // Animation variants for hover effect
  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.03, y: -5, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="bg-[var(--background)] rounded-xl shadow-lg overflow-hidden max-w-3xl w-full mx-auto flex flex-col md:flex-row min-h-[16rem]"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      {/* Image Section */}
      {proj?.image && (
        <div className="relative w-full md:w-1/2 h-48 md:h-full flex-shrink-0">
          <Image
            src={proj.image}
            alt={`${proj.title} preview`}
            fill
            className="rounded-t-xl md:rounded-t-none md:rounded-l-xl object-contain"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <h2 className="text-lg md:text-xl font-bold text-[var(--foreground)] mb-2 line-clamp-1">
          {proj.title}
        </h2>
        <p className="text-sm md:text-base text-[var(--foreground)] opacity-80 mb-4 line-clamp-2 md:line-clamp-3 overflow-hidden">
          {proj.description}
        </p>

        {/* Stack */}
        {proj.stack && (
          <div className="mb-4 flex-1 overflow-hidden">
            <p className="text-xs md:text-sm font-semibold text-[var(--foreground)]">
              Tech Stack:
            </p>
            <div className="flex flex-wrap gap-1 md:gap-2 mt-1">
              {proj.stack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-[var(--primary)] text-white text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-2 md:gap-4 mt-auto">
          {proj.githubLink && (
            <a
              href={proj.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 md:px-4 md:py-2 bg-[var(--primary)] text-white rounded-lg font-semibold text-sm md:text-base hover:bg-[var(--primary-hover)] transition-colors duration-200"
            >
              GitHub
            </a>
          )}
          {proj.live && (
            <a
              href={proj.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 md:px-4 md:py-2 border border-[var(--primary)] text-[var(--primary)] rounded-lg font-semibold text-sm md:text-base hover:bg-[var(--primary)] hover:text-white transition-colors duration-200"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjCard;