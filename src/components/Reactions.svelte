<script>
  import { initAuth } from "../firebase/auth";
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/database";
  import { encode } from "firebase-encode";

  export let reactions = ["😭", "😕", "😀", "🤩"];
  export let page = window.location.pathname.endsWith("/")
    ? window.location.pathname
    : window.location.pathname + "/";
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
    } else {
      userReacts = [];
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

<style lang="postcss">
  @tailwind utilities;
</style>
