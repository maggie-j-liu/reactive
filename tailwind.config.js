const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,svelte}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.white"),
            blockquote: {
              color: "inherit",
            },
            strong: {
              color: "inherit",
            },
            code: {
              fontWeight: "inherit",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }),
    require("@tailwindcss/typography"),
  ],
};
