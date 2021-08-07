<script>
  import { initAuth } from "./firebase/auth";
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/database";
  import LogOut from "./components/LogOut.svelte";
  import { encode } from "firebase-encode";

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
  firebase.initializeApp(firebaseConfig);
  let authStore, loginWithGoogle, logout;
  try {
    const auth = initAuth();
    authStore = auth.authStore;
    loginWithGoogle = auth.loginWithGoogle;
    logout = auth.logout;
  } catch (error) {
    throw error;
  }
  const db = firebase.database();
  let userReacts = [];
  let reactCounts = {};
  reactions.forEach((reaction) => (reactCounts[reaction] = 0));
  let loadingReacts = true;
  let loadingCounts = true;

  const updateUserReacts = (r) => {
    userReacts = Object.keys(r);
    loadingReacts = false;
  };

  const updateReactCounts = (r) => {
    Object.entries(r).forEach(([reactionName, count]) => {
      reactCounts[reactionName] = count;
    });
    loadingCounts = false;
  };

  $: console.log("user", $authStore.user);

  $: {
    db.ref(`posts/${encode(page)}/reactions/count`)
      .once("value")
      .then((snap) => snap.val())
      .then((r) => updateReactCounts(r ?? {}));
    if ($authStore.user) {
      db.ref(`users/${$authStore.user.uid}/pages/${encode(page)}/reactions`)
        .once("value")
        .then((snap) => snap.val())
        .then((r) => updateUserReacts(r ?? {}));
    }
  }

  const addReact = async (reaction) => {
    userReacts = [...userReacts, reaction];
    reactCounts[reaction]++;
    reactCounts = { ...reactCounts };
    const pageReactionsPath = `posts/${encode(page)}/reactions`;
    const usersReactionsPath = `users/${$authStore.user.uid}/pages/${encode(
      page
    )}/reactions`;
    const updates = {};
    updates[`${pageReactionsPath}/count/${reaction}`] =
      firebase.database.ServerValue.increment(1);
    updates[
      `${pageReactionsPath}/users/${reaction}/${$authStore.user.uid}`
    ] = true;
    updates[`${usersReactionsPath}/${reaction}`] = true;
    db.ref().update(updates);
  };

  const removeReact = async (reaction) => {
    userReacts = userReacts.filter((r) => r !== reaction);
    reactCounts[reaction]--;
    reactCounts = { ...reactCounts };
    const pageReactionsPath = `posts/${encode(page)}/reactions`;
    const usersReactionsPath = `users/${$authStore.user.uid}/pages/${encode(
      page
    )}/reactions`;
    const updates = {};
    updates[`${pageReactionsPath}/count/${reaction}`] =
      firebase.database.ServerValue.increment(-1);
    updates[`${pageReactionsPath}/users/${reaction}/${$authStore.user.uid}`] =
      null;
    updates[`${usersReactionsPath}/${reaction}`] = null;
    db.ref().update(updates);
  };

  const handleReact = (reaction) => {
    if (!$authStore.user || loadingCounts || loadingReacts) {
      return;
    }
    console.log($authStore.user);
    console.log(loadingCounts);
    console.log(loadingReacts);
    if (userReacts.includes(reaction)) {
      removeReact(reaction);
    } else {
      addReact(reaction);
    }
  };
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
  <div class="flex gap-4 text-2xl mt-3">
    {#each reactions as reaction, i}
      <button
        key={i}
        type="button"
        on:click={() => handleReact(reaction)}
        class={`${
          userReacts.includes(reaction)
            ? "bg-primary-200 hover:bg-primary-100"
            : "bg-white hover:bg-primary-50"
        } px-3 py-1.5 rounded-lg ring-1 ring-primary-500 hover:ring-2 hover:shadow-md `}
      >
        <span class="mr-2">
          {reaction}
        </span>
        {loadingCounts ? "-" : reactCounts[reaction]}
      </button>
    {/each}
  </div>
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
  .primary-btn {
    @apply bg-gradient-to-r from-primary-100 hover:from-primary-200 via-blue-100 hover:via-blue-200 to-purple-100 hover:to-purple-200 text-primary-900 hover:bg-primary-100 rounded-md py-1 px-2;
  }
</style>
