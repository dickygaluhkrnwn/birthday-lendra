"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { Home, Heart, Sparkles, MailOpen, X } from 'lucide-react';

export default function LoveLetter() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Hitung umur otomatis
  const birthYear = 2002;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear; // Akan menghasilkan 23 di tahun 2025

  return (
    <div className="min-h-screen w-full bg-lilac-50 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-lilac-200 animate-float">
          <Heart size={40} />
        </div>
        <div className="absolute bottom-20 right-20 text-pink-200 animate-float" style={{ animationDelay: "2s" }}>
          <Heart size={60} />
        </div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-lilac-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* --- TAMPILAN AMPLOP TERTUTUP --- */
          <motion.div
            key="envelope"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0, rotateX: -180 }}
            transition={{ duration: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="relative cursor-pointer group"
          >
            {/* Envelope Body */}
            <div className="w-80 h-52 bg-gradient-to-br from-lilac-100 to-white rounded-lg shadow-2xl border border-lilac-200 flex items-center justify-center relative overflow-hidden transform transition-transform group-hover:scale-105 duration-500">
              {/* Flap Pattern */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#b97ae0_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {/* Wax Seal Heart */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="z-10 bg-red-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-red-400/50"
              >
                <Heart className="text-white w-8 h-8 fill-white" />
              </motion.div>

              <div className="absolute bottom-4 text-lilac-400 text-sm font-serif tracking-widest uppercase">
                Ketuk untuk membuka
              </div>
            </div>
            
            {/* Glow effect behind envelope */}
            <div className="absolute -inset-4 bg-lilac-400 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
          </motion.div>
        ) : (
          /* --- TAMPILAN SURAT TERBUKA --- */
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="relative w-full max-w-2xl bg-[#fffdfa] rounded-xl shadow-2xl overflow-hidden border border-[#f0e6d2]" // Warna kertas agak cream
          >
            {/* Header Pattern */}
            <div className="h-32 bg-gradient-to-b from-lilac-200 to-[#fffdfa] relative">
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-md border border-lilac-100">
                    <MailOpen className="w-10 h-10 text-lilac-500" />
                </div>
            </div>

            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-lilac-400 hover:text-lilac-600 transition-colors p-2"
            >
              <X size={24} />
            </button>

            {/* Isi Surat */}
            <div className="px-8 pt-16 pb-12 md:px-12 space-y-6 text-slate-700 leading-relaxed relative">
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <Heart className="w-96 h-96" />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative z-10"
              >
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-lilac-900 mb-8 text-center">
                  Dear Lendra,
                </h2>

                <div className="font-sans text-base md:text-lg text-slate-600 space-y-6 text-justify md:text-left">
                  <p>
                    Hai Ayang, <span className="font-bold text-lilac-600">Happy {age}rd Birthday!</span> 🎉
                  </p>
                  
                  <p>
                    Nggak kerasa ya, waktu berjalan begitu cepat. Di hari spesialmu ini, aku cuma mau bilang terima kasih. Terima kasih sudah lahir ke dunia, terima kasih sudah tumbuh menjadi wanita yang hebat, dan terima kasih sudah mengizinkanku menjadi bagian dari perjalananmu.
                  </p>

                  <p>
                    Aku membuat website sederhana ini bukan untuk pamer skill, tapi karena kadang kata-kata yang kuucap langsung sering terbata-bata saking gugupnya kalau liat kamu. Foto-foto di galeri tadi mungkin cuma sebagian kecil, tapi setiap momen di dalamnya punya cerita besar buatku.
                  </p>

                  <p>
                    Di usia {age} tahun ini, doaku sederhana: Semoga kamu selalu bahagia, sesehat dan sekuat Lendra yang aku kenal. Semoga apa yang kamu semogakan, segera diaminkan oleh semesta.
                  </p>

                  <p className="font-medium text-lilac-700 italic">
                    Jangan pernah lupa kalau kamu berharga, dan kamu nggak sendirian. Aku bakal selalu ada di sini, jadi supporter nomor satumu.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-lilac-100 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="font-serif text-lilac-800 text-lg text-center md:text-left">
                    Tertanda,<br />
                    <span className="font-bold text-xl">Pacarmu Tersayang ❤️</span>
                  </div>

                  <Button 
                    onClick={() => router.push('/')}
                    className="bg-slate-800 hover:bg-slate-900 text-white flex items-center gap-2 text-sm px-6 rounded-full"
                  >
                    <Home className="w-4 h-4" /> Kembali ke Depan
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Copyright */}
      <div className="absolute bottom-4 text-center w-full text-lilac-400 text-xs pointer-events-none tracking-widest opacity-60">
        22 NOVEMBER {currentYear} • SPECIAL DAY
      </div>
    </div>
  );
}