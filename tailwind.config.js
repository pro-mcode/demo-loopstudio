/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist: ["item-gradient"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        primary: "hsl(171, 66%, 44%)",
        secondary: "hsl(233, 100%, 69%)",
        tertiary: "hsl(210, 10%, 33%)",
        postTertiary: "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        sans: ["Epunda Sans", "sans-serif"],
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
};
