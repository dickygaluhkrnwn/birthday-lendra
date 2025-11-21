import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lilac: {
          50: '#fdfaff',
          100: '#f8f0fc',
          200: '#f0dbf8',
          300: '#e5bdf2',
          400: '#d596ea',
          500: '#c06ce0', // Warna Utama Lebih Vibrant
          600: '#a64cc6',
          700: '#8a3ba3',
          800: '#733385',
          900: '#5f2b6b',
          950: '#42154d',
        },
        // Warna pendukung untuk gradient magis
        dream: {
          pink: '#ffcee6',
          blue: '#dbeafe',
          cyan: '#cffafe'
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      },
      backgroundImage: {
        'dream-gradient': 'linear-gradient(to bottom right, #fdfaff, #f0dbf8, #e5bdf2)',
      }
    },
  },
  plugins: [],
};
export default config;