/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './src/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")]
};
