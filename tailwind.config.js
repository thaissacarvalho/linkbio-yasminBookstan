/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
       'only-alice-blue': '#F8F8FF',
       'only-black': '#1C1C1C',
       'only-orange': '#F1886B',
       'only-pink': '#F28DC5',
      }
    },
  },
  plugins: [],
}