"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { Home, Heart, Sparkles } from 'lucide-react';

export default function LoveLetter() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-lilac-50 flex items-center justify-center p-4 md:p-8">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header Dekoratif */}
        <div className="h-24 bg-gradient-to-r from-lilac-400 to-lilac-600 flex items-center justify-center">
          <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
            <Heart className="w-8 h-8 text-white fill-white animate-pulse-slow" />
          </div>
        </div>

        {/* Isi Surat */}
        <div className="p-8 md:p-12 space-y-6 text-slate-700 leading-relaxed relative">
          {/* Watermark Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <Sparkles className="w-64 h-64 text-lilac-900" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative z-10"
          >
            <h2 className="font-serif text-3xl font-bold text-lilac-900 mb-6">
              Untuk Lendra Ningrum Puspita Sari,
            </h2>

            <div className="font-sans space-y-4 text-lg text-slate-600">
              <p>
                Hai Ayang, selamat ulang tahun yang ke-22 ya! 🎉
              </p>
              
              <p>
                Nggak kerasa ya waktu berjalan begitu cepat. Di hari spesialmu ini, aku cuma mau bilang terima kasih. Terima kasih sudah lahir ke dunia ini, terima kasih sudah tumbuh menjadi wanita yang hebat, dan terima kasih sudah memilihku untuk menemani hari-harimu.
              </p>

              <p>
                Aku membuat website sederhana ini karena kata-kata saja rasanya nggak cukup untuk menggambarkan betapa bersyukurnya aku punya kamu. Foto-foto tadi mungkin cuma sebagian kecil dari kenangan kita, tapi setiap detiknya sangat berharga buatku.
              </p>

              <p>
                Semoga di usia yang baru ini, kamu semakin bahagia, semakin dewasa, tercapai semua cita-citanya, dan yang pasti... semoga kita bisa terus sama-sama merayakan ulang tahun kamu di tahun-tahun berikutnya.
              </p>

              <p className="font-medium text-lilac-700">
                Tetaplah jadi Lendra yang ceria, Lendra yang kuat, dan Lendra yang aku sayang.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-lilac-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="font-serif italic text-lilac-800 text-xl">
                With all my love,<br />
                <span className="font-bold not-italic">Pacarmu ❤️</span>
              </div>

              <Button 
                onClick={() => router.push('/')}
                className="bg-slate-800 hover:bg-slate-900 text-white flex items-center gap-2 text-sm px-6"
              >
                <Home className="w-4 h-4" /> Kembali ke Awal
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Copyright */}
      <div className="absolute bottom-4 text-center w-full text-lilac-300 text-xs pointer-events-none">
        Made with ❤️ just for you.
      </div>
    </div>
  );
}