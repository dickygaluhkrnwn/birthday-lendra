"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Warna-warna confetti yang cocok dengan tema Lilac
const colors = ['#b97ae0', '#dec2f4', '#f5ecfc', '#FFD700', '#FF69B4', '#87CEEB'];

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  scale: number;
}

export default function Confetti() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate 50 partikel confetti
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Posisi horizontal acak (persen)
      y: -20 - Math.random() * 100, // Mulai dari atas layar
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            top: `${particle.y}%`, 
            left: `${particle.x}%`, 
            opacity: 1, 
            rotate: particle.rotation,
            scale: particle.scale
          }}
          animate={{ 
            top: '120%', // Jatuh sampai bawah layar
            rotate: particle.rotation + 360 + Math.random() * 180,
            opacity: 0 // Menghilang saat jatuh
          }}
          transition={{ 
            duration: 3 + Math.random() * 4, // Kecepatan jatuh acak
            ease: "linear",
            repeat: Infinity, // Ulangi terus menerus
            delay: Math.random() * 2 // Delay awal acak
          }}
          style={{
            position: 'absolute',
            width: '12px',
            height: '12px',
            backgroundColor: particle.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px', // Bulat atau kotak
          }}
        />
      ))}
    </div>
  );
}