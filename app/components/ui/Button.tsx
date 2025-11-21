"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Ubah interface ini agar extend HTMLMotionProps, bukan React.ButtonHTMLAttributes
interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      // Hapus type casting yang mungkin menyebabkan error, biarkan framer-motion menanganinya
      className={`px-8 py-3 bg-lilac-500 text-white rounded-full font-serif text-lg shadow-lg hover:bg-lilac-600 transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};