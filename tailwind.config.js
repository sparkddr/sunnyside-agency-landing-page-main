/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        "text-grey": "hsl(232, 10%, 55%)",
        "text-title": "hsl(212, 27%, 19%)",
        "text-dark": "hsl(198, 62%, 26%)",
        "text-graphic": "hsl(167, 40%, 24%)",
        "soft-red": "hsl(7, 99%, 70%)",
        "soft-yellow": "hsl(51, 100%, 49%)",
        name: "hsl(212, 27%, 19%)",
        testi: "hsl(210, 4%, 67%)",
        "testi-text": "hsl(213, 9%, 39%)",
        "footer-text": "hsl(168, 34%, 25%)",
        footer: "hsl(168, 34%, 69%)",
      },
    },
    screens: {
      xs: "430px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
