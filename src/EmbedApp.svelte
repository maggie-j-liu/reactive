<script>
  import { initAuth } from "./firebase/auth";
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/database";
  export let firebaseConfig;
  if (!firebaseConfig) {
    throw new Error("No firebaseConfig was provided");
  }
  firebase.initializeApp(firebaseConfig);
</script>

<main>
  <h1 class="text-red-500">Hello world!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  main {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    line-height: 1.5;
    -moz-tab-size: 4;
    tab-size: 4;
    -webkit-text-size-adjust: 100%;
  }
</style>
