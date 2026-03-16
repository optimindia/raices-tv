/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0F', // Slightly deeper black
        slate: '#1D1D26', // Deep bluish gray
        ivory: '#F9F9F9',
        champagne: '#D4AF37', // True gold
        dominican: {
          blue: '#002D62', // Essential Dominican Flag Blue
          red: '#CE1126',  // Essential Dominican Flag Red
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
