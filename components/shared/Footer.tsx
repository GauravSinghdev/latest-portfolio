"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-[var(--background)] border-t border-[var(--primary)]">
      <div className="container mx-auto flex flex-col items-center gap-4">
        {/* Copyright Text with SVG */}
        <div className="relative text-center text-sm text-[var(--foreground)] opacity-80">
          © {new Date().getFullYear()} codewithkara. All rights reserved.
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 800 400"
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-4 opacity-50"
          >
            <path
              d="M100,200 Q400,100 700,200"
              fill="none"
              stroke="url(#footerGradient)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="footerGradient">
                <stop stopColor="hsl(205, 69%, 60%)" offset="0" />
                <stop stopColor="hsl(205, 69%, 80%)" offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>        
      </div>
    </footer>
  );
};

export default Footer;
