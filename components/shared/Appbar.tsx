"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { HiOutlineBars4 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { SiPicartodottv } from "react-icons/si";
import { MdOutlineReviews } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: <AiOutlineHome size={24} />,
  },
  {
    title: "Projects",
    href: "/all-projects",
    icon: <SiPicartodottv size={24} />,
  },
  {
    title: "Reviews",
    href: "/reviews",
    icon: <MdOutlineReviews size={24} />,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <IoMdContact size={24} />,
  },
];

const Appbar = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleDownload = () => {
    window.open("/GS_Resume.pdf", "_blank");
  };

  return (
    <header className="w-full flex items-center justify-between">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Slide in
            exit={{ opacity: 0, x: "100%" }} // Slide out
            transition={{ duration: 0.3 }} // Adjust timing
            className="h-[100dvh] fixed w-[70%] top-0 right-0 bg-white shadow-lg z-50 flex flex-col"
          >
            {/* Close button */}
            <Button
              className="absolute top-6 right-5"
              onClick={() => setOpen(false)}
            >
              <IoClose size={24} />
            </Button>

            {/* Mobile navigation */}
            <div className="flex flex-col items-center mt-20 border-t border-gray-200 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-black py-4 text-lg flex gap-2 items-center w-full text-center px-5"
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
            </div>
            <Button
              onClick={handleDownload}
              className="w-[90%] m-4 bg-blue-400 text-white px-5"
            >
              Resume
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href={"/"}
        className="text-3xl font-bold underline decoration-double decoration-orange-500 decoration-2 underline-offset-4"
      >
        KARA
      </Link>

      <nav className="hidden sm:flex max-w-xl mx-auto bg-gray-100 rounded-full px-3 py-2 font-semibold border border-slate-300">
        {navItems.slice(1).map((item, indx) => (
          <Link
            onMouseEnter={() => setHovered(indx)}
            onMouseLeave={() => setHovered(null)}
            href={item.href}
            key={item.title}
            className="w-full relative text-center text-black py-1 px-4"
          >
            <span className="relative">{item.title}</span>
            {hovered === indx && (
              <motion.div
                layoutId="hover-underline"
                className="absolute bottom-0 h-[2px] w-[90%] bg-black left-1/2 -translate-x-1/2"
              ></motion.div>
            )}
          </Link>
        ))}
      </nav>

      <Button
        onClick={handleDownload}
        className="hidden sm:block cursor-pointer shadow-lg bg-blue-400 text-white px-5"
      >
        Resume
      </Button>

      <Button
        className="sm:hidden flex"
        onClick={() => setOpen((prev) => !prev)}
      >
        <HiOutlineBars4 />
      </Button>
    </header>
  );
};

export default Appbar;
