"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa"; // Social icons
import { MdEmail } from "react-icons/md"; // Email icon

const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gaurav-singh-898072176",
    icon: <FaLinkedin size={28} />,
    color: "#0A66C2", // LinkedIn blue
  },
  {
    name: "GitHub",
    link: "https://github.com/GauravSinghdev",
    icon: <FaGithub size={28} />,
    color: "#181717", // GitHub black
  },
  {
    name: "Twitter",
    link: "https://x.com/codewithkara",
    icon: <FaTwitter size={28} />,
    color: "#1DA1F2", // Twitter blue
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/gaurav_kalakoti_/",
    icon: <FaInstagram size={28} />,
    color: "#E4405F", // Instagram pink
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100006978283228",
    icon: <FaFacebook size={28} />,
    color: "#1877F2", // Facebook blue
  },
  {
    name: "Email",
    link: "mailto:gauravkalakoti19@gmail.com",
    icon: <MdEmail size={28} />,
    color: "#D44638", // Gmail red
  },
];

// Animation variants for the card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
};

// Animation variants for the icons
const iconVariants = {
  hover: { y: -5, rotate: 10, transition: { duration: 0.3 } },
};

const ContactCompo = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Connect With Me
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {socials.map((social, index) => (
          <motion.div
            key={social.name}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: index * 0.1 }} // Staggered entrance
            className="relative bg-white rounded-lg p-6 flex items-center justify-between shadow-lg border border-gray-200 overflow-hidden group"
          >
            {/* Cool background gradient effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at center, ${social.color} 0%, transparent 70%)`,
              }}
            ></div>

            {/* Social content */}
            <div className="flex items-center space-x-4 z-10">
              <motion.span variants={iconVariants} whileHover="hover">
                {social.icon}
              </motion.span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {social.name}
                </h3>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {social.name === "Email" ? "Send Email" : "Visit Profile"}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactCompo;
