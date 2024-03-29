/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { yeseva: "'Yeseva One', cursive;" },
      fontFamily: { lobster: "'Lobster', sans-serif;" },
      backgroundImage: {
        "hero-pattern": "url('./assets/heroBg.png')",
      },
    },
  },
  plugins: [],
};
