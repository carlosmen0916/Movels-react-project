/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'lmd': '900px',
      },
      fontFamily: {
        'Arial': ['Arial', 'sans-serif'],
        'Helvetica': ['Helvetica', 'sans-serif'],
        'Navigo': ['Navigo', 'sans-serif'],
        'Satoshi': ['Satoshi', 'sans-serif'],
        'Sans': ['Public Sans', 'sans-serif'],
        // montserrat: ['Montserrat','sans-serif'],
      },
    },
  },
  plugins: [],
}
