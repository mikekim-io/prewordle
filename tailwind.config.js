/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        correct: '#6aaa64',
        present: '#c9b458',
        absent: '#86888a',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
        },
        'fade-out': {
          to: {
            opacity: 0,
          },
        },
        'slide-in': {
          from: {
            transform: 'translateY(0, 10px)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in .3s ease fade-out .3s ease',
        'slide-in': 'slide-in .3s ease',
        'fade-out': 'fade-out .3s 2s',
      },
    },
  },
  plugins: [],
};
