<script>
  import { initAuth } from "./firebase/auth";
  import { initializeApp, getApps } from "firebase/app";
  import LogOut from "./components/LogOut.svelte";
  import Reactions from "./components/Reactions.svelte";
  import Comments from "./components/Comments.svelte";
  import TailwindUtilsGlobal from "./components/TailwindUtilsGlobal.svelte";

  const tailwindColorValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  export let primaryColors;
  export let secondaryColors;

  const checkColorArray = (arr) => {
    if (arr && arr.length && arr.length !== 10) {
      throw new Error("Must include exactly 10 colors");
    }
  };
  checkColorArray(primaryColors);
  checkColorArray(secondaryColors);

  const buildCssVars = (arr, name) => {
    return arr
      ? tailwindColorValues
          .map((val, idx) => `--reactive-${name}-${val}: ${arr[idx]};`)
          .join(" ")
      : "";
  };

  export let firebaseConfig;
  export let reactions = ["😭", "😕", "😀", "🤩"];
  export let page = window.location.pathname.endsWith("/")
    ? window.location.pathname
    : window.location.pathname + "/";
  export let reactionText =
    "Did you enjoy this post? Leave your reactions below!";
  export let paymentPointer = null;
  if (!firebaseConfig) {
    throw new Error("No firebaseConfig was provided");
  }
  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }
  let authStore, loginWithGoogle, logout;
  try {
    const auth = initAuth();
    authStore = auth.authStore;
    loginWithGoogle = auth.loginWithGoogle;
    logout = auth.logout;
  } catch (error) {
    throw error;
  }
  if (paymentPointer !== null && document.monetization) {
    document.monetization.addEventListener("monetizationstart", () => {
      console.log("started");
      document.getElementById("exclusive").classList.remove("hidden");
    });
  }
</script>

<svelte:head>
  {#if paymentPointer}
    <meta name="monetization" content={paymentPointer} />
  {/if}
</svelte:head>

<main
  class="r-w-full r-mx-auto r-flex r-flex-col r-items-center r-my-16 dark:r-text-white"
  style={`${buildCssVars(primaryColors, "primary")} ${buildCssVars(
    secondaryColors,
    "secondary"
  )}`}
>
  {#if $authStore.user}
    <div class="r-flex r-gap-10 r-items-center">
      <h2 class="r-text-3xl r-font-bold">
        Hi <span class="r-text-primary-600 dark:r-text-primary-400"
          >{$authStore.user.displayName}</span
        > 👋!
      </h2>
      <button
        type="button"
        on:click={logout}
        class="r-flex r-items-center r-gap-2 r-text-md r-primary-btn dark:r-from-primary-600 dark:hover:r-from-primary-500 dark:r-to-secondary-600 dark:hover:r-to-secondary-500 dark:r-text-white"
      >
        <LogOut />
        Logout
      </button>
    </div>
  {:else if !$authStore.loading}
    <div>
      <button
        type="button"
        on:click={loginWithGoogle}
        class="r-primary-btn r-text-md dark:r-from-primary-600 dark:hover:r-from-primary-500 dark:r-to-secondary-600 dark:hover:r-to-secondary-500 dark:r-text-white"
      >
        Login
      </button>
      to add reactions and comments.
    </div>
  {:else}
    <div class="r-h-9" />
  {/if}
  <div class="r-hidden dark:r-text-white r-text-gray-700" id="exclusive">
    Thanks for using Webmonetization to support this site.
  </div>
  {#if reactionText.length > 0}
    <h3 class="r-text-2xl r-text-center r-mt-4 r-font-medium">
      {reactionText}
    </h3>
  {/if}
  {#if reactions.length > 0}
    <Reactions {page} {reactions} />
  {/if}
  <Comments {page} />
</main>

<TailwindUtilsGlobal />

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @layer base {
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
  }
  @layer utilities {
    .r-primary-btn {
      @apply r-bg-gradient-to-r r-from-primary-100 hover:r-from-primary-200 r-to-secondary-100 hover:r-to-secondary-200 r-text-primary-900 hover:r-bg-primary-100 r-rounded-md r-py-1 r-px-2;
    }
  }
</style>
