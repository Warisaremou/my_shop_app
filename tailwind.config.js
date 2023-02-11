/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-color": "#3281CB",
      },
    },
    fontFamily: {
      poppins: ["Poppins, sans-serif"],
      caudex: ["Caudex, serif"],
    },
    container: {
      center: true,
      padding: "5rem",
    },
  },
  plugins: [],
};
