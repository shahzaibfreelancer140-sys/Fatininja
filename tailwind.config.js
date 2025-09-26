/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,php,css,js}'], // Scans all subfolders within 'build'
  theme: {
    extend: {
     fontFamily: {
     DelaGothicOne: ['DelaGothicOne', 'sans-serif'],
        False: ['False', 'sans-serif'],
         WorkSans: ['WorkSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}






