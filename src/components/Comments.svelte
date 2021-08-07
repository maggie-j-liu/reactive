<script>
  import { initAuth } from "../firebase/auth";
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/database";
  import { encode } from "firebase-encode";
  import { onMount } from "svelte";
  import TimeAgo from "javascript-time-ago";
  import en from "javascript-time-ago/locale/en";

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en-US");

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
    if (!$authStore.user || !currentComment) {
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
    class="border-gray-400 rounded-md w-full form-textarea font-sans h-24 disabled:cursor-not-allowed"
    placeholder={$authStore.user
      ? "Write your thoughts..."
      : "Login to leave a comment"}
    disabled={!$authStore.user}
  />
  <button
    on:click={() => handleAddComment()}
    type="button"
    class="self-end text-lg primary-btn px-4 py-1 "
    disabled={!$authStore.user || !currentComment}
  >
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
            <h4 class="text-lg text-primary-800 mb-2 font-medium">
              {users[comment.user].name}
              <span class="text-base text-gray-400 font-normal"
                >commented {timeAgo.format(comment.timestamp)}
              </span>
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
  @layer utilities {
    .primary-btn {
      @apply bg-gradient-to-r from-primary-100 hover:from-primary-200 via-blue-100 hover:via-blue-200 to-purple-100 hover:to-purple-200 text-primary-900 hover:bg-primary-100 rounded-md disabled:cursor-not-allowed disabled:saturate-50 disabled:hover:from-primary-100 disabled:hover:via-blue-100 disabled:hover:to-purple-100;
    }
  }
</style>
