const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,svelte}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
