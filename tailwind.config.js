/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zila: ["Zilla Slab", "sans-serif"],
        zen: ["Zen Dots", "sans-serif"],
        arvo: ["Arvo", "sans-serif"],
      }
    },
  },
  plugins: [],
}

