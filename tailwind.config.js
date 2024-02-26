/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulsar: {
          '0%': { padding: '0', "border-color": "red", margin: "8px" },
          '50%': { padding: '8px', "border-color": "transparent", margin: "0px"},
          '100%': { padding: '8px', "border-color": "transparent", margin: "0px"},
        },
      },
      animation: {
        pulsar: 'pulsar 2s ease-in-out infinite',
      },
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
