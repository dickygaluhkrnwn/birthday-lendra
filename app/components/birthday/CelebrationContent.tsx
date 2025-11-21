"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import Confetti from '../ui/Confetti';
import { Calendar, Heart } from 'lucide-react';

export default function CelebrationContent() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-lilac-50 flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* Efek Confetti */}
      <Confetti />

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-lilac-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-lilac-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-[20%] left-[20%] w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center text-center space-y-6 max-w-md w-full"
      >
        {/* Header Text */}
        <div className="space-y-2">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-lilac-600 font-medium tracking-widest uppercase text-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>22 November 2025</span>
          </motion.div>
          
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="text-4xl md:text-5xl font-serif font-bold text-lilac-900"
          >
            Happy Birthday!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-lg text-lilac-700 font-medium"
          >
            Selamat Ulang Tahun, Ayang ❤️
          </motion.p>
        </div>

        {/* Main Photo Frame */}
        <motion.div
          initial={{ rotate: -5, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-lilac-400 to-pink-400 rounded-[2rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          
          {/* FOTO UTAMA */}
          <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-[1.8rem] overflow-hidden border-4 border-white shadow-2xl bg-white">
            <Image
              src="/images/lendra/photo11.jpg" 
              alt="Lendra Ningrum Puspita Sari"
              fill
              className="object-cover"
              priority
              unoptimized={true} // Tambahkan ini agar load gambar lebih stabil di local
              onError={(e) => console.error("Gambar Gagal Load:", e)}
            />
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -bottom-6 -right-6 bg-white p-3 rounded-full shadow-lg text-lilac-600 z-20"
          >
            <Heart fill="#b97ae0" className="w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* Button Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="pt-8 pb-12"
        >
          <p className="text-lilac-800 mb-4 italic opacity-80">
            "Ada sejuta kenangan yang ingin ku ingat bersamamu..."
          </p>
          <Button 
            onClick={() => router.push('/gallery')}
            className="bg-gradient-to-r from-lilac-500 to-lilac-700 hover:from-lilac-600 hover:to-lilac-800 transform hover:-translate-y-1"
          >
            Lihat Kenangan Kita 📸
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}