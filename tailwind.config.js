/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "displey": ["'Noto Sans Display'", "sans-serif"]
      },
      colors: {
        light: "#F5F4F5",
        primary: "#BA06F9",
      },
    },
  },
  plugins: [],
};
