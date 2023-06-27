/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#287BFF",
        customRed: "#e1341e",
        white: "#EEEDE7",
        width: {
          min: "min-content",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hover\\:rounded-l-none:hover": {
          "border-top-left-radius": "0",
          "border-bottom-left-radius": "0",
        },
      });
    },
  ],
};
