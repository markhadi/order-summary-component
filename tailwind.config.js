/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        patternMobile: "url('../src/images/pattern-background-mobile.svg')",
        patternDesktop: "url('../src/images/pattern-background-desktop.svg')",
      },

      backgroundSize: {
        100: "100%",
      },
    },

    colors: {
      paleBlue: "hsl(225, 100%, 94%)",
      brightBlue: {
        DEFAULT: "hsl(245, 75%, 52%)",
        70: "hsla(245, 75%, 52%, 70%)",
      },
      veryPaleBlue: "hsl(225, 100%, 98%)",
      desaturatedBlue: "hsl(224, 23%, 55%)",
      darkBlue: "hsl(223, 47%, 23%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
