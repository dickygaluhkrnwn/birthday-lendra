"use client";

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Moon, Star } from 'lucide-react';

// Tipe data untuk bintang agar TypeScript senang
interface StarData {
  id: number;
  top: number;
  left: number;
  delay: number;
  size: number;
}

export default function OpeningGate() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);
  const [stars, setStars] = useState<StarData[]>([]);

  // EFEK: Generate bintang hanya di Client (Browser)
  useEffect(() => {
    const generatedStars = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 10 + 5,
    }));
    setStars(generatedStars);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push('/celebration');
    }, 1500);
  };

  const starVariants: Variants = {
    animate: {
      opacity: [0.2, 1, 0.2],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-lilac-950 text-white overflow-hidden">
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* Gradient Langit Malam */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2e1065] via-[#4c1d95] to-[#701a75] opacity-80" />

      {/* Bintang-bintang (Render hanya jika data stars sudah ada) */}
      <div className="absolute inset-0 w-full h-full">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            variants={starVariants}
            animate="animate"
            className="absolute text-yellow-200"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
            }}
          >
            <Star size={star.size} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Glowing Orbs (Efek Cahaya Magis) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-lilac-500 rounded-full blur-[150px] opacity-20 animate-blob" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-pink-600 rounded-full blur-[150px] opacity-20 animate-blob animation-delay-2000" />

      {/* --- KONTEN UTAMA --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 1.5 : 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 flex flex-col items-center justify-center h-full w-full px-6"
      >
        {/* Bulan Sabit Ikonik */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="mb-12 relative"
        >
          <div className="relative p-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
            <Moon size={64} className="text-yellow-100 drop-shadow-lg" fill="#fef3c7" />
          </div>
          {/* Kilauan di sekitar bulan */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-white/30 w-full h-full scale-150"
          />
        </motion.div>

        {/* Teks Pengantar */}
        <motion.div className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-lilac-100 via-white to-lilac-200 drop-shadow-md"
          >
            Untuk Lendra
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-lilac-200 font-sans font-light tracking-[0.3em] uppercase text-sm md:text-base"
          >
            Sebuah Kejutan Kecil
          </motion.p>
        </motion.div>

        {/* Tombol Interaktif "Ketuk untuk Masuk" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-16"
        >
          <motion.button
            onClick={handleEnter}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(192, 132, 252, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white font-serif text-lg tracking-wider overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/50"
          >
            <span className="relative z-10 flex items-center gap-3">
              Buka Kado
              <Star size={16} className="group-hover:rotate-180 transition-transform duration-500" />
            </span>
            
            {/* Efek Shimmer pada tombol */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
          </motion.button>
        </motion.div>

        {/* Pesan Kaki */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 text-xs text-lilac-300 font-light tracking-widest"
        >
          DIBUAT DENGAN CINTA UNTUK AYANG
        </motion.div>
      </motion.div>
    </div>
  );
}