"use client";

import { motion } from "framer-motion";

import React from "react";

const SuperMotion = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.9 }}
    >
      {children}
    </motion.div>
  );
};

export default SuperMotion;
