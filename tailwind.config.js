const colors = require("tailwindcss/colors");
const createColors = (colorName, defaultTailwindColor) => {
  return Object.fromEntries(
    new Map(
      [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((val) => [
        val,
        `var(--reactive-${colorName}-${val}, ${defaultTailwindColor[val]})`,
      ])
    )
  );
};
module.exports = {
  prefix: "r-",
  mode: "jit",
  purge: ["./src/**/*.{js,svelte}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: createColors("primary", colors.sky),
        secondary: createColors("secondary", colors.purple),
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
