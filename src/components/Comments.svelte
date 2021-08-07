<script>
  import { initAuth } from "../firebase/auth";
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/database";
  import { encode } from "firebase-encode";
  import { onMount } from "svelte";

  console.log("comments");
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

  let comments = {};
  let currentComment = "";
  let users = {};

  const updateComments = (com) => {
    comments = com;
  };

  onMount(async () => {
    users =
      (await db
        .ref("users/info")
        .once("value")
        .then((snap) => snap.val())) ?? {};
  });

  $: {
    db.ref(`posts/${encode(page)}/comments`)
      .once("value")
      .then((snap) => snap.val())
      .then((c) => updateComments(c ?? {}));
  }

  const handleAddComment = () => {
    if (!$authStore.user) {
      return;
    }
    const pageCommentsPath = `posts/${encode(page)}/comments`;
    const newCommentKey = db.ref(pageCommentsPath).push({
      user: $authStore.user.uid,
      text: currentComment,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    }).key;
    comments = {
      ...comments,
      [newCommentKey]: {
        user: $authStore.user.uid,
        text: currentComment,
        timestamp: Date.now(),
      },
    };
  };
</script>

<div class="flex flex-col gap-4 text-2xl mt-3 w-3/4">
  <textarea
    bind:value={currentComment}
    class="border-gray-400 rounded-md w-full form-textarea font-sans"
    placeholder="Write your thoughts..."
  />
  <button on:click={() => handleAddComment()} type="button" class="self-end">
    Submit
  </button>
  {#if Object.keys(users).length}
    {#each Object.entries(comments) as [commentId, commentVal]}
      <div key={commentId}>
        {users[commentVal.user].name}
        {commentVal.text}
      </div>
    {/each}
  {/if}
</div>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
