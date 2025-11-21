"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';

export default function OpeningGate() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    // Mulai animasi keluar
    setIsExiting(true);
    
    // Tunggu 1 detik sebelum pindah halaman agar animasi selesai
    setTimeout(() => {
      router.push('/celebration');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-lilac-950 text-lilac-50 overflow-hidden">
      {/* Background Effects (Cahaya Redup) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lilac-500 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-lilac-600 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      {/* Content Utama */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? -50 : 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center space-y-8 px-4"
      >
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 0.5, duration: 1 }}
        >
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-lilac-200 to-white drop-shadow-md mb-4">
              Untuk Lendra
            </h1>
            <p className="text-lg md:text-xl font-light text-lilac-200 tracking-[0.2em] uppercase">
              Special Delivery for Ayang
            </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Button 
            onClick={handleEnter} 
            className="mt-8 bg-white text-lilac-900 hover:bg-lilac-100 font-medium shadow-lilac-500/50"
          >
            Buka Kado 🎁
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}