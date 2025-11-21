"use client";

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { ArrowRight, Heart, Star } from 'lucide-react';

// Definisi tipe untuk data foto
interface PhotoData {
  id: number;
  rotation: number;
}

export default function PhotoGallery() {
  const router = useRouter();
  const [photos, setPhotos] = useState<PhotoData[]>([]);

  // FIX: Generate rotasi acak hanya di Client untuk menghindari Hydration Error
  useEffect(() => {
    const generatedPhotos = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      rotation: Math.random() * 12 - 6, // Rotasi acak -6 sampai 6 derajat
    }));
    setPhotos(generatedPhotos);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <div className="min-h-screen bg-lilac-50 py-12 px-4 sm:px-6 overflow-x-hidden relative">
      
      {/* Background Orbs yang bergerak */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-lilac-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/60 shadow-sm text-lilac-700 text-sm font-bold uppercase tracking-widest"
        >
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          Our Journey Together
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-lilac-900 via-lilac-700 to-pink-700 drop-shadow-sm"
        >
          Kepingan Kenangan Indah
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lilac-800 max-w-xl mx-auto text-lg leading-relaxed font-medium"
        >
          Setiap foto punya ceritanya sendiri, tapi kamu adalah tokoh utama di setiap cerita bahagiaku.
        </motion.p>
      </div>

      {/* Masonry-like Grid Gallery dengan efek Polaroid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4"
      >
        {photos.map((photo) => (
          <motion.div 
            key={photo.id}
            variants={itemVariants}
            style={{ rotate: photo.rotation }} 
            whileHover={{ 
              scale: 1.05, 
              rotate: 0, 
              zIndex: 50,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="relative group bg-white p-3 pb-12 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            {/* Efek Tape/Selotip di atas foto (Hiasan) */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/80 backdrop-blur-sm rotate-[-2deg] shadow-sm z-20 opacity-80" />

            {/* UPDATE: Ubah aspect-[3/4] menjadi aspect-square untuk foto 1:1 */}
            <div className="relative aspect-square w-full overflow-hidden rounded-md border border-gray-100">
              <Image
                src={`/images/lendra/photo${photo.id}.jpg`}
                alt={`Kenangan ${photo.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized={true}
              />
              
              {/* Overlay Gradient saat hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Caption Polaroid / Love Icon */}
            <div className="absolute bottom-4 left-0 w-full text-center px-4">
              <div className="flex items-center justify-center gap-2 text-gray-400 group-hover:text-pink-500 transition-colors duration-300">
                <Heart className="w-5 h-5 fill-current" />
                <span className="font-handwriting text-sm font-medium">Memory #{photo.id}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 max-w-md mx-auto text-center mt-24 pb-12"
      >
        <div className="glass p-8 rounded-3xl border border-white/50">
          <p className="text-lilac-900 mb-6 italic font-serif text-lg">
            "Dan masih banyak lagi lembaran baru yang ingin ku tulis bersamamu..."
          </p>
          
          <Button 
            onClick={() => router.push('/letter')}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-lilac-600 hover:bg-lilac-700 text-white shadow-lg hover:shadow-lilac-500/40 transition-all duration-300 py-3 px-8 text-lg"
          >
            Baca Surat Untukmu <ArrowRight className="w-5 h-5 animate-bounce-slow" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}