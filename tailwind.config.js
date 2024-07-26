/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#363853",
        darkLight: "#F8FAFB",
        blue: "#2196F3",
        blueHover: "#0b7dda",
        green: "#04AA6D",
        headerBackground: "#1f2937",
        pageBackground: "#111827",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

