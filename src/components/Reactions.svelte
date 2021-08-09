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

<div class="flex gap-4 text-2xl mt-8">
  {#each reactions as reaction, i (i)}
    <button
      type="button"
      on:click={() => handleReact(reaction)}
      class={`${
        userReacts.includes(reaction)
          ? "bg-primary-200 hover:bg-primary-100 dark:!bg-primary-800 dark:hover:!bg-primary-600"
          : "bg-white dark:!bg-gray-700 hover:bg-primary-50 dark:hover:!bg-primary-600"
      } !px-3 !py-1.5 !rounded-lg !ring-1 !ring-primary-500 hover:!ring-2 hover:!shadow-md`}
    >
      <span class="mr-2">
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
