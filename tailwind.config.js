/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary50: "#95FF00",
        solana: "rgb(153, 69, 255)",
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
