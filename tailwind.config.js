/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        waterFlow: {
          '0%': { 'background-position': '0% 0%' },
          '25%': { 'background-position': '100% 0%' },
          '50%': { 'background-position': '100% 100%' },
          '75%': { 'background-position': '0% 100%' },
          '100%': { 'background-position': '0% 0%' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out',
        waterFlow: 'waterFlow 40s linear infinite',
      },
      backgroundSize: {
        '400%': '400% 400%',
      }
    },
  },
  plugins: [],
}

