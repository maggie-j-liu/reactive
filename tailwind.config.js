const colors = require("tailwindcss/colors");
module.exports = {
  prefix: "r-",
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
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
            h5: {
              color: "inherit",
            },
            h6: {
              color: "inherit",
            },
            a: {
              color: theme("colors.primary.300"),
            },
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
