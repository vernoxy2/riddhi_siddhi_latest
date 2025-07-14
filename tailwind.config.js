
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        'xs': '526px',
      },
    },
    extend: {
      fontFamily: {
        serif: ["Noto Serif", "serif"],
        kulim: ['"Kulim Park"', "sans-serif"],
      },
      colors: {
        primary: "#D2151E",
        secondary: "#A9A8A8",
      },
      writingMode: {
        vertical: "vertical-rl",
      },
    },
  },
  variants: {
    extend: {
      writingMode: ["responsive"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".writing-vertical": {
            writingMode: "vertical-rl",
          },
        },
        ["responsive"]
      );
    },
  ],
};
