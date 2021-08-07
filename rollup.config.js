import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";
import sveltePreprocess from "svelte-preprocess";
import pkg from "./package.json";

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

let app;
// building for embed
if (process.env.EMBED) {
  app = {
    input: "src/embed.js",
    output: {
      sourcemap: false,
      format: "iife",
      name: "reactive",
      file: "public/dist/bundle.js",
    },
    plugins: [
      svelte({
        compilerOptions: {
          // enable run-time checks when not in production
          dev: !production,
        },
        preprocess: sveltePreprocess({
          sourceMap: !production,
          postcss: true,
        }),
        onwarn: (warning, handler) => {
          const { code, frame } = warning;
          if (code === "css-unused-selector") return;

          handler(warning);
        },
        emitCss: false,
      }),

      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration -
      // consult the documentation for details:
      // https://github.com/rollup/plugins/tree/master/packages/commonjs
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),

      // In dev mode, call `npm run start` once
      // the bundle has been generated
      !production && serve(),

      // Watch the `public` directory and refresh the
      // browser on changes when not in production
      !production && livereload("public"),

      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser(),
    ],
    watch: {
      clearScreen: false,
    },
  };
} else if (process.env.PACKAGE) {
  app = {
    input: "src/embed.js",
    output: [
      { file: pkg.module, format: "es" },
      { file: pkg.main, format: "umd", name: "reactive" },
    ],
    plugins: [
      svelte({
        preprocess: sveltePreprocess({
          sourceMap: !production,
          postcss: true,
        }),
        onwarn: (warning, handler) => {
          const { code, frame } = warning;
          if (code === "css-unused-selector") return;

          handler(warning);
        },
        emitCss: false,
      }),

      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration -
      // consult the documentation for details:
      // https://github.com/rollup/plugins/tree/master/packages/commonjs
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),

      // If we're building for production (npm run build
      // instead of npm run dev), minify
      terser(),
    ],
  };
} else {
  app = {
    input: "src/main.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/build/bundle.js",
    },
    plugins: [
      svelte({
        compilerOptions: {
          // enable run-time checks when not in production
          dev: !production,
        },
        preprocess: sveltePreprocess({
          sourceMap: !production,
          postcss: true,
        }),
        onwarn: (warning, handler) => {
          const { code, frame } = warning;
          if (code === "css-unused-selector") return;

          handler(warning);
        },
      }),
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css({ output: "bundle.css" }),

      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration -
      // consult the documentation for details:
      // https://github.com/rollup/plugins/tree/master/packages/commonjs
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),

      // In dev mode, call `npm run start` once
      // the bundle has been generated
      !production && serve(),

      // Watch the `public` directory and refresh the
      // browser on changes when not in production
      !production && livereload("public"),

      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser(),
    ],
    watch: {
      clearScreen: false,
    },
  };
}

export default app;
