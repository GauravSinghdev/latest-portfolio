"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 px-1 py-6 lg:px-10 lg:py-10 max-w-7xl mx-auto items-center justify-center">
      {/* Image Section */}
      <motion.div
        className="flex justify-center lg:justify-start items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          // src="https://cdn.pixabay.com/photo/2025/03/19/19/04/man-9481358_640.jpg"
          src={"/port_ghibli.png"}
          alt="Gaurav - Software Engineer"
          width={500}
          height={500}
          className="h-[28rem] w-full max-w-[30rem] lg:h-[30rem] object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          priority
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          Hey There, I’m
          <span className="relative inline-block ml-1">
            Gaurav!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 800 400"
              className="absolute -bottom-8 left-0 w-full h-14 pointer-events-none"
            >
              <path
                d="M145.74,226.91C214.20,211.36,251.27,180.57,351.12,180.27C450.97,179.97,357.70,227.80,445.29,226.01C532.88,224.22,557.70,191.93,613.90,174.89"
                fill="none"
                strokeWidth="48"
                stroke="url(#SvgjsLinearGradient1002)"
                strokeLinecap="round"
                strokeDasharray="0 0"
                strokeOpacity="1"
              />
              <defs>
                <linearGradient id="SvgjsLinearGradient1002">
                  <stop stopColor="hsl(205, 69%, 60%)" offset="0" />
                  <stop stopColor="hsl(205, 69%, 80%)" offset="1" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-gray-700 max-w-lg">
          I’m a Software Engineer with over 2.5 years of experience, passionate
          about building scalable web applications and solving real-world
          problems with code.
        </p>

        <p className="text-gray-700 max-w-lg">
          Specializing in full-stack development, I’ve worked with technologies
          like React, Next.js, Node.js, Express.js, MongoDB and Postgresql and
          more to deliver clean, efficient solutions. Let’s create something
          amazing together!
        </p>

        <div className="flex flex-row gap-4 mt-4">
          <Link
            href="/all-projects"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-gray-500 text-white rounded-lg font-semibold hover:bg-primary transition-colors duration-200 hover:scale-110"
          >
            View My Work
          </Link>
          <a
            href="/contact"
            className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
