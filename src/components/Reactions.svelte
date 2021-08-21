<script>
  import { initAuth } from "../firebase/auth";
  import { getDatabase, onValue, ref, increment } from "firebase/database";
  import { encode } from "firebase-encode";
  import { update } from "@firebase/database";

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
  const db = getDatabase();
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
    Object.entries(r ?? {}).forEach(([reactionName, count]) => {
      reactCounts[reactionName] = count;
    });
    loadingCounts = false;
  };

  $: {
    onValue(
      ref(db, `posts/${encode(page)}/reactions/count`),
      (snap) => {
        updateReactCounts(snap.val() ?? {});
      },
      {
        onlyOnce: true,
      }
    );
    if ($authStore.user) {
      onValue(
        ref(
          db,
          `users/activity/${$authStore.user.uid}/${encode(page)}/reactions`
        ),
        (snap) => {
          updateUserReacts(snap.val() ?? {});
        },
        {
          onlyOnce: true,
        }
      );
    } else {
      userReacts = [];
    }
  }

  const addReact = async (reaction) => {
    userReacts = [...userReacts, reaction];
    reactCounts[reaction]++;
    reactCounts = { ...reactCounts };
    const pageReactionsPath = `posts/${encode(page)}/reactions`;
    const usersReactionsPath = `users/activity/${$authStore.user.uid}/${encode(
      page
    )}/reactions`;
    const updates = {};
    updates[`${pageReactionsPath}/count/${reaction}`] = increment(1);
    updates[
      `${pageReactionsPath}/users/${reaction}/${$authStore.user.uid}`
    ] = true;
    updates[`${usersReactionsPath}/${reaction}`] = true;
    update(ref(db), updates);
  };

  const removeReact = async (reaction) => {
    userReacts = userReacts.filter((r) => r !== reaction);
    reactCounts[reaction]--;
    reactCounts = { ...reactCounts };
    const pageReactionsPath = `posts/${encode(page)}/reactions`;
    const usersReactionsPath = `users/activity/${$authStore.user.uid}/${encode(
      page
    )}/reactions`;
    const updates = {};
    updates[`${pageReactionsPath}/count/${reaction}`] = increment(-1);
    updates[`${pageReactionsPath}/users/${reaction}/${$authStore.user.uid}`] =
      null;
    updates[`${usersReactionsPath}/${reaction}`] = null;
    update(ref(db), updates);
  };

  const handleReact = (reaction) => {
    if (!$authStore.user || loadingCounts || loadingReacts) {
      return;
    }
    if (userReacts.includes(reaction)) {
      removeReact(reaction);
    } else {
      addReact(reaction);
    }
  };
</script>

<div class="r-flex r-gap-4 r-text-2xl r-mt-8">
  {#each reactions as reaction, i (i)}
    <button
      type="button"
      on:click={() => handleReact(reaction)}
      class={`${
        userReacts.includes(reaction)
          ? "r-bg-primary-200 hover:r-bg-primary-100 dark:!r-bg-primary-800 dark:hover:!r-bg-primary-600"
          : "r-bg-white dark:!r-bg-gray-700 hover:r-bg-primary-50 dark:hover:!r-bg-primary-600"
      } !r-px-3 !r-py-1.5 !r-rounded-lg !r-ring-1 !r-ring-primary-500 hover:!r-ring-2 hover:!r-shadow-md`}
    >
      <span class="r-mr-2">
        {reaction}
      </span>
      {loadingCounts ? "-" : reactCounts[reaction]}
    </button>
  {/each}
</div>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
