<script>
  import { initAuth } from "../firebase/auth";
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/database";
  import { encode } from "firebase-encode";
  import { onMount } from "svelte";
  import TimeAgo from "javascript-time-ago";
  import en from "javascript-time-ago/locale/en";
  import SvelteMarkdown from "svelte-markdown";

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
  let commentsLoaded = false;
  let currentComment = "";
  let users = {};
  let usersLoaded = false;
  let previewMode = false;
  let commentLikes = [];

  const updateComments = (com) => {
    comments = com;
    commentsLoaded = true;
  };

  const updateCommentLikes = (likes) => {
    commentLikes = Object.keys(likes);
  };

  onMount(async () => {
    users =
      (await db
        .ref("users/info")
        .once("value")
        .then((snap) => snap.val())) ?? {};
    usersLoaded = true;
  });

  $: {
    db.ref(`posts/${encode(page)}/comments`)
      .orderByChild("timestamp")
      .once("value")
      .then((snap) => snap.val())
      .then((c) => {
        updateComments(
          Object.entries(c ?? {})
            .map(([key, val]) => {
              return {
                id: key,
                ...val,
              };
            })
            .reverse()
        );
      });

    if ($authStore.user) {
      db.ref(
        `users/activity/${$authStore.user.uid}/${encode(page)}/commentLikes`
      )
        .once("value")
        .then((snap) => snap.val())
        .then((c) => updateCommentLikes(c ?? {}));
    } else {
      commentLikes = [];
    }
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
      likes: 0,
    }).key;
    comments = [
      {
        id: newCommentKey,
        user: $authStore.user.uid,
        text: currentComment,
        timestamp: Date.now(),
        likes: 0,
      },
      ...comments,
    ];
    currentComment = "";
    previewMode = false;
  };

  const handleDeleteComment = async (comment) => {
    if (!$authStore.user || !(comment.user == $authStore.user.uid)) {
      return;
    }
    await db.ref(`posts/${encode(page)}/comments/${comment.id}`).set(null);
    comments = comments.filter((c) => c.id !== comment.id);
  };

  const addCommentLike = async (comment) => {
    if (!$authStore.user) {
      return;
    }
    const updates = {};
    updates[`posts/${encode(page)}/comments/${comment.id}/likes`] =
      firebase.database.ServerValue.increment(1);
    updates[
      `users/activity/${$authStore.user.uid}/${encode(page)}/commentLikes/${
        comment.id
      }`
    ] = true;
    await db.ref().update(updates);
    comment.likes++;
    comments = [...comments];
    commentLikes = [...commentLikes, comment.id];
  };

  const removeCommentLike = async (comment) => {
    if (!$authStore.user) {
      return;
    }
    const updates = {};
    updates[`posts/${encode(page)}/comments/${comment.id}/likes`] =
      firebase.database.ServerValue.increment(-1);
    updates[
      `users/activity/${$authStore.user.uid}/${encode(page)}/commentLikes/${
        comment.id
      }`
    ] = null;
    await db.ref().update(updates);
    comment.likes--;
    comments = [...comments];
    commentLikes = commentLikes.filter((comId) => comId !== comment.id);
  };

  const handleLike = async (comment) => {
    if (commentLikes.includes(comment.id)) {
      removeCommentLike(comment);
    } else {
      addCommentLike(comment);
    }
  };
</script>

<div class="flex flex-col gap-4 mt-16 text-base w-full">
  {#if previewMode}
    <p class="text-gray-600 dark:!text-gray-200">
      Add a comment (markdown is supported)
    </p>
    <p
      class="text-base prose dark:!prose-dark max-w-none dark:!text-white bg-gray-100 dark:!bg-gray-700 px-6 py-4"
    >
      <SvelteMarkdown source={currentComment || "Nothing to preview"} />
    </p>
  {:else}
    <label>
      <p class="text-gray-600 dark:!text-gray-200">
        Add a comment (markdown is supported)
      </p>
      <textarea
        bind:value={currentComment}
        class="border-gray-300 dark:!border-gray-600 dark:!bg-gray-800 rounded-md w-full form-textarea font-sans h-28 disabled:cursor-not-allowed"
        placeholder={$authStore.user
          ? "Write your thoughts..."
          : "Login to leave a comment"}
        disabled={!$authStore.user}
      />
    </label>
  {/if}

  <div class="self-end space-x-4">
    <button
      on:click={() => {
        previewMode = !previewMode;
      }}
      class="dark:!bg-primary-600 dark:hover:!bg-primary-500 dark:disabled:!bg-gray-500 dark:!text-white dark:disabled:!text-gray-300 text-lg bg-primary-100 hover:bg-primary-200 text-primary-800 px-4 py-1 rounded-md disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-600"
      disabled={!$authStore.user || !currentComment}
    >
      {previewMode ? "Edit" : "Preview"}
    </button>
    <button
      on:click={() => handleAddComment()}
      type="button"
      class="dark:!from-primary-600 dark:hover:!from-primary-500 dark:disabled:hover:!from-primary-600 dark:!via-blue-500 dark:hover:!via-blue-400 dark:disabled:hover:!via-blue-500 dark:!to-purple-600 dark:hover:!to-purple-500 dark:disabled:hover:!to-purple-600 dark:!text-white text-lg primary-btn px-4 py-1"
      disabled={!$authStore.user || !currentComment}
    >
      Submit
    </button>
  </div>
  {#if usersLoaded}
    <div class="mt-4">
      {commentsLoaded ? comments.length : "-"}{" "}
      {commentsLoaded && comments.length == 1 ? "comment" : "comments"}
      <span class="mx-4 text-lg">|</span>
      <em class="text-gray-600 dark:!text-gray-300">
        Powered by
        <a
          href="https://github.com/maggie-j-liu/reactive"
          rel="noreferrer"
          target="_blank"
          class="text-primary-500 font-medium hover:underline"
        >
          Reactive
        </a>
      </em>
    </div>
    <div class="space-y-8">
      {#each comments as comment (comment.id)}
        <div class="flex gap-4">
          <img
            src={users[comment.user].photo}
            alt="{users[comment.user].name}'s profile picture"
            class="h-12 w-12 rounded-full"
          />
          <div class="bg-primary-50 dark:!bg-gray-700 flex-grow px-6 py-4">
            <h4
              class="text-lg text-primary-800 dark:!text-primary-300 mb-2 font-medium"
            >
              {users[comment.user].name}
              <span class="text-base text-gray-400 font-normal"
                >commented {timeAgo.format(comment.timestamp)}
              </span>
            </h4>
            <p
              class="text-base prose dark:!prose-dark max-w-none dark:!text-white"
            >
              <SvelteMarkdown source={comment.text} />
            </p>
            <div class="w-full flex justify-end items-center gap-2">
              {#if $authStore.user && comment.user == $authStore.user.uid}
                <button
                  class="hover:bg-red-100/60 dark:hover:!bg-red-500/25 px-2 py-2 rounded-full"
                  on:click={() => handleDeleteComment(comment)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class=" h-6 w-6 text-red-600 dark:!text-red-500"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path
                      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </button>
              {/if}
              {#if $authStore.user}
                <button
                  class="px-2 py-2 rounded-full hover:bg-pink-100/60 dark:hover:!bg-pink-400/20 flex text-pink-600 dark:!text-pink-400 font-semibold gap-2 items-center"
                  on:click={() => handleLike(comment)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={commentLikes.includes(comment.id)
                      ? "currentColor"
                      : "none"}
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6 text-pink-600 dark:!text-pink-400"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    />
                  </svg>
                  {comment.likes ?? 0}
                </button>
              {:else}
                <div
                  class="px-2 py-2 flex text-pink-600 font-semibold gap-2 items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6 text-pink-600"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    />
                  </svg>
                  {comment.likes ?? 0}
                </div>
              {/if}
            </div>
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
      @apply bg-gradient-to-r from-primary-100 hover:from-primary-200 via-blue-100 hover:via-blue-200 to-purple-100 hover:to-purple-200 text-primary-900 hover:bg-primary-100 rounded-md disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:from-primary-100 disabled:hover:via-blue-100 disabled:hover:to-purple-100;
    }
  }
</style>
