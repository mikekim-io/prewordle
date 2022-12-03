/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    flex: {
      1: '1 1 0%',
      0.5: '0.5 0.5 0%',
      2: '2 2 0%',
    },
    fontFamily: {
      display: ['Open Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        correct: '#6aaa64',
        present: '#c9b458',
        absent: '#86888a',
        'dark-green': '#538d4e',
      },
    },
  },
  plugins: [],
};
