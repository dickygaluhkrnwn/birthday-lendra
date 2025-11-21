"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion'; // Import Variants
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { ArrowRight, Heart, Star } from 'lucide-react';

// Helper untuk membuat array [1, 2, ..., 10]
const photos = Array.from({ length: 10 }, (_, i) => i + 1);

export default function PhotoGallery() {
  const router = useRouter();

  // Tambahkan type annotation ': Variants' di sini
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Jeda muncul antar foto
      }
    }
  };

  // Tambahkan type annotation ': Variants' di sini juga
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50 } 
    }
  };

  return (
    <div className="min-h-screen bg-lilac-50 py-12 px-4 sm:px-6 overflow-x-hidden">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-lilac-600 text-sm font-medium uppercase tracking-wider"
        >
          <Star className="w-4 h-4 fill-lilac-400 text-lilac-400" />
          Our Journey
          <Star className="w-4 h-4 fill-lilac-400 text-lilac-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-serif font-bold text-lilac-900"
        >
          Kepingan Kenangan Indah
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lilac-700 max-w-lg mx-auto"
        >
          Setiap foto punya ceritanya sendiri, tapi kamu adalah tokoh utama di setiap cerita bahagiaku.
        </motion.p>
      </div>

      {/* Masonry Grid Gallery */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
      >
        {photos.map((num) => (
          <motion.div 
            key={num}
            variants={itemVariants}
            className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative w-full">
              {/* Efek overlay saat hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10" />
              
              <Image
                src={`/images/lendra/photo${num}.jpg`}
                alt={`Kenangan ${num}`}
                width={500}
                height={500}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                unoptimized={true} // Agar aman di localhost
              />

              {/* Icon Love Kecil di pojok saat hover */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
                <div className="bg-white/90 p-2 rounded-full shadow-sm">
                  <Heart className="w-4 h-4 text-lilac-500 fill-lilac-500" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto text-center mt-16 pb-8"
      >
        <p className="text-lilac-800 mb-6 italic font-serif">
          "Dan masih banyak lagi lembaran baru yang ingin ku tulis bersamamu..."
        </p>
        
        <Button 
          onClick={() => router.push('/letter')}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-lilac-600 hover:bg-lilac-700"
        >
          Baca Surat Untukmu <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
}