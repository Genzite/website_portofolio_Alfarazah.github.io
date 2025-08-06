/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primaryCream: "#F8F0E5",
        secondCream: "#EADBC8",
        supportCream: "#DAC0A3",
        nightNavy: "#0F2C59",
      },
      fontFamily: {
        title: ['Nunito', 'sans'],
        paragraf: ['Montserrat', 'sans'],
        grand: ['"Grand Hotel"', 'sans']
      },
    },
  },
  plugins: [
  ],
}
