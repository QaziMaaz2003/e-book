/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["'League Gothic'", "sans-serif"],
        body: ["'League Gothic'", "sans-serif"],
        readable: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      boxShadow: {
        card: "0 24px 48px -24px rgba(0,0,0,0.9)",
      },
    },
  },
  plugins: [],
};
