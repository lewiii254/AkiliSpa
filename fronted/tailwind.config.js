/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'calm-blue': '#4a90e2',
        'light-bg': '#e6f0fa',
      },
      animation: {
        breathe: 'breathe 4s infinite',
      },
      keyframes: {
        breathe: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};