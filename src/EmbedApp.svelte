<script>
  import { initAuth } from "./firebase/auth";
  import { initializeApp, getApps } from "firebase/app";
  import LogOut from "./components/LogOut.svelte";
  import Reactions from "./components/Reactions.svelte";
  import Comments from "./components/Comments.svelte";
  import TailwindUtilsGlobal from "./components/TailwindUtilsGlobal.svelte";

  export let firebaseConfig;
  export let reactions = ["😭", "😕", "😀", "🤩"];
  export let page = window.location.pathname.endsWith("/")
    ? window.location.pathname
    : window.location.pathname + "/";
  export let reactionText =
    "Did you enjoy this post? Leave your reactions below!";
  export let paymentPointer = "$ilp.uphold.com/LJmbPn7WD4JB";
  if (!firebaseConfig) {
    throw new Error("No firebaseConfig was provided");
  }
  let firebaseApp;
  if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
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
  if (document.monetization) {
    document.monetization.addEventListener("monetizationstart", () => {
      console.log("started");
      document.getElementById("exclusive").classList.remove("hidden");
    });
  }
</script>

<svelte:head>
  <meta name="monetization" content={paymentPointer} />
</svelte:head>
<main
  class="r-w-full r-mx-auto r-flex r-flex-col r-items-center r-my-16 dark:r-text-white"
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
        class="r-flex r-items-center r-gap-2 r-text-md r-primary-btn dark:r-from-primary-600 dark:hover:r-from-primary-500 dark:r-via-blue-500 dark:hover:r-via-blue-400 dark:r-to-purple-600 dark:hover:r-to-purple-500 dark:r-text-white"
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
        class="r-primary-btn r-text-md dark:r-from-primary-600 dark:hover:r-from-primary-500 dark:r-via-blue-500 dark:hover:r-via-blue-400 dark:r-to-purple-600 dark:hover:r-to-purple-500 dark:r-text-white"
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
  <h3 class="r-text-2xl r-mt-4 r-font-medium">{reactionText}</h3>
  <Reactions {page} {reactions} />
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
      @apply r-bg-gradient-to-r r-from-primary-100 hover:r-from-primary-200 r-via-blue-100 hover:r-via-blue-200 r-to-purple-100 hover:r-to-purple-200 r-text-primary-900 hover:r-bg-primary-100 r-rounded-md r-py-1 r-px-2;
    }
  }
</style>
