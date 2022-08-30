/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './src/*.js'],
  theme: {
    extend: {
      colors: {
        peach: {
          light: '#FFE5B4',
          std: '#FBD8B0',
        dark: '#CE8600'},
        mimosa: {
          light: '#FFCA4B',
          std: '#FACB80',
          dark: '#EEA800',
        },
        coral: {
          vibrant: '#F34100',
          light: '#FF7F50',
          std: '#F69770',
          dark: '#6A1C00'
        },
        crimson: {
          light: '#DC143C',
          std: '#B52B40',
          dark: '#880C25',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
