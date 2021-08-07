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

  let comments = [];
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
      .orderByChild("timestamp")
      .once("value")
      .then((snap) => snap.val())
      .then((c) => {
        updateComments(
          Object.entries(c)
            .map(([key, val]) => {
              return {
                id: key,
                ...val,
              };
            })
            .reverse()
        );
      });
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
    comments = [
      {
        id: newCommentKey,
        user: $authStore.user.uid,
        text: currentComment,
        timestamp: Date.now(),
      },
      ...comments,
    ];
    currentComment = "";
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
    <div class="space-y-8">
      {#each comments as comment (comment.id)}
        <div class="flex gap-4">
          <img
            src={users[comment.user].photo}
            alt="{users[comment.user].name}'s profile picture"
            class="h-12 w-12 rounded-full"
          />
          <div class="bg-primary-50 flex-grow px-6 py-2">
            <h4 class="text-lg text-primary-800 mb-2">
              {users[comment.user].name}
            </h4>
            <p class="text-xl">
              {comment.text}
            </p>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
