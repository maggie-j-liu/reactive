<script>
  import { initAuth } from "./firebase/auth";
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/database";
  import LogOut from "./components/LogOut.svelte";
  import Reactions from "./components/Reactions.svelte";
  import Comments from "./components/Comments.svelte";

  export let firebaseConfig;
  export let reactions = ["😭", "😕", "😀", "🤩"];
  export let page = window.location.pathname.endsWith("/")
    ? window.location.pathname
    : window.location.pathname + "/";
  export let reactionText =
    "Did you enjoy this post? Leave your reaction below!";

  if (!firebaseConfig) {
    throw new Error("No firebaseConfig was provided");
  }
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
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
</script>

<main class="w-full mx-auto flex flex-col items-center my-16">
  {#if $authStore.user}
    <div class="flex gap-10 items-center">
      <h2 class="text-3xl font-bold">
        Hi <span class="text-primary-600">{$authStore.user.displayName}</span> 👋!
      </h2>

      <button
        type="button"
        on:click={logout}
        class="flex items-center gap-2 text-md primary-btn"
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
        class="primary-btn text-md"
      >
        Login
      </button>
      to add reactions.
    </div>
  {:else}
    <div class="h-9" />
  {/if}
  <h3 class="text-2xl mt-4 font-medium">{reactionText}</h3>
  <Reactions {page} {reactions} />
  <Comments {page} />
</main>

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
    .primary-btn {
      @apply bg-gradient-to-r from-primary-100 hover:from-primary-200 via-blue-100 hover:via-blue-200 to-purple-100 hover:to-purple-200 text-primary-900 hover:bg-primary-100 rounded-md py-1 px-2;
    }
  }
</style>
