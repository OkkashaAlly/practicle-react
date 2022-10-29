/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: "#232625",
        ban: "#1f2123",
        pink: "#f95292",
        greey: "#c9c9c4",
      },
    },
  },
  plugins: [],
};
