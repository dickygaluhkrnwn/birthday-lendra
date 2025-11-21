"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import Confetti from '../ui/Confetti';
import { Calendar, Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function CelebrationContent() {
  const router = useRouter();

  // Varian animasi untuk teks (Typing effect simulasi dengan stagger)
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const titleText = "Happy Birthday!";
  const subtitleText = "Selamat Ulang Tahun, Ayang ❤️";

  return (
    <div className="min-h-screen w-full bg-lilac-50 flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* Efek Confetti */}
      <Confetti />

      {/* Dynamic Background Decoration */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-lilac-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-dream-pink rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[40%] w-96 h-96 bg-dream-blue rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
      </div>

      {/* Kartu Kaca Utama */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center text-center space-y-8 max-w-2xl w-full glass p-8 md:p-12 rounded-3xl border border-white/60 shadow-2xl relative"
      >
        {/* Sparkles Icon Floating */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 text-yellow-400"
        >
          <Sparkles size={48} fill="currentColor" />
        </motion.div>

        {/* Header Section */}
        <div className="space-y-4 w-full">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm text-lilac-700 font-medium tracking-widest uppercase text-xs md:text-sm border border-lilac-200 shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>22 November 2002</span>
          </motion.div>
          
          {/* Animated Title */}
          <motion.h1
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-lilac-600 via-lilac-500 to-pink-500 drop-shadow-sm"
          >
            {titleText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-xl md:text-2xl text-lilac-800 font-medium tracking-wide"
          >
            {subtitleText}
          </motion.p>
        </div>

        {/* 3D Floating Photo Frame */}
        <motion.div
          className="relative group perspective-1000"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          {/* Glow Effect di belakang foto */}
          <div className="absolute -inset-4 bg-gradient-to-r from-lilac-400 to-pink-400 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse-slow"></div>
          
          {/* Container Foto dengan Tilt Effect (bisa dimaksimalkan dengan library 'react-tilt' tapi framer motion basic cukup oke) */}
          <motion.div
            whileHover={{ scale: 1.02, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-64 h-80 md:w-72 md:h-96 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl bg-white rotate-[-3deg] group-hover:rotate-0 transition-all duration-500 ease-out"
          >
            <Image
              src="/images/lendra/photo11.jpg" 
              alt="Lendra Ningrum Puspita Sari"
              fill
              className="object-cover"
              priority
              unoptimized={true}
              onError={(e) => console.error("Gambar Gagal Load:", e)}
            />
            
            {/* Overlay Gradient Halus di bawah foto */}
            <div className="absolute inset-0 bg-gradient-to-t from-lilac-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          
          {/* Floating Badge Love */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-8 bg-white p-4 rounded-full shadow-xl text-pink-500 z-20 border-4 border-lilac-50"
          >
            <Heart fill="#ec4899" className="w-8 h-8 md:w-10 md:h-10 animate-bounce-slow" />
          </motion.div>
        </motion.div>

        {/* Button Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="pt-6 w-full flex flex-col items-center gap-4"
        >
          <p className="text-lilac-900/80 italic font-serif text-lg">
            "Setiap detik bersamamu adalah anugerah..."
          </p>
          <Button 
            onClick={() => router.push('/gallery')}
            className="group bg-gradient-to-r from-lilac-600 to-lilac-500 text-white px-8 py-4 rounded-full shadow-lg shadow-lilac-300/50 hover:shadow-lilac-400/60 hover:scale-105 transition-all duration-300 flex items-center gap-3 font-semibold text-lg"
          >
            Lihat Kenangan Kita 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}