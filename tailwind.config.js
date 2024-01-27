/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'single':['Single Day', 'cursive'],
      }
    },
  },
  plugins: [],
}

