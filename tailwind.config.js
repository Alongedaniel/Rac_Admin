/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ["Roboto", "sans-serif"],
      },
      colors:{
        "t/100": "#49454F",
        "brand": '#1D192B',
        "brand/50": '#E8DEF8',
        "brand/100": "#060C2C",
        "brand/200": "#6750A4",
        "brand/bg": "#F4EFF4",
        "brand/red": "#B3261E",
        "brand/active": "#E6E1E514"
      }
    },
  },
  plugins: [],
}