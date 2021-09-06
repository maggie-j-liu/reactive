<script>
  import { initAuth } from "../firebase/auth";
  import {
    getDatabase,
    onValue,
    query,
    push,
    ref,
    set,
    serverTimestamp,
    orderByChild,
    increment,
    update,
  } from "firebase/database";
  import { encode } from "firebase-encode";
  import { onMount } from "svelte";
  import TimeAgo from "javascript-time-ago";
  import en from "javascript-time-ago/locale/en";
  import SvelteMarkdown from "svelte-markdown";

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en-US");

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

  onMount(() => {
    onValue(
      ref(db, "users/info"),
      (snap) => {
        users = snap.val() ?? {};
        usersLoaded = true;
      },
      {
        onlyOnce: true,
      }
    );
  });

  $: {
    const orderedCommentsRef = query(
      ref(db, `posts/${encode(page)}/comments`),
      orderByChild("timestamp")
    );
    onValue(
      orderedCommentsRef,
      (snap) => {
        updateComments(
          Object.entries(snap.val() ?? {})
            .map(([key, val]) => {
              return {
                id: key,
                ...val,
              };
            })
            .reverse()
        );
      },
      { onlyOnce: true }
    );

    if ($authStore.user) {
      onValue(
        ref(
          db,
          `users/activity/${$authStore.user.uid}/${encode(page)}/commentLikes`
        ),
        (snap) => {
          updateCommentLikes(snap.val() ?? {});
        },
        { onlyOnce: true }
      );
    } else {
      commentLikes = [];
    }
  }

  const handleAddComment = () => {
    if (!$authStore.user || !currentComment) {
      return;
    }
    const pageCommentsPath = `posts/${encode(page)}/comments`;
    const newCommentKey = push(ref(db, pageCommentsPath), {
      user: $authStore.user.uid,
      text: currentComment,
      timestamp: serverTimestamp(),
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
    await set(ref(db, `posts/${encode(page)}/comments/${comment.id}`), null);
    comments = comments.filter((c) => c.id !== comment.id);
  };

  const addCommentLike = async (comment) => {
    if (!$authStore.user) {
      return;
    }
    const updates = {};
    updates[`posts/${encode(page)}/comments/${comment.id}/likes`] =
      increment(1);
    updates[
      `users/activity/${$authStore.user.uid}/${encode(page)}/commentLikes/${
        comment.id
      }`
    ] = true;
    await update(ref(db), updates);
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
      increment(-1);
    updates[
      `users/activity/${$authStore.user.uid}/${encode(page)}/commentLikes/${
        comment.id
      }`
    ] = null;
    await update(ref(db), updates);
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

<div class="r-flex r-flex-col r-gap-4 r-mt-16 r-text-base r-w-full">
  {#if previewMode}
    <p class="r-text-gray-600 dark:!r-text-gray-200">
      Add a comment (markdown is supported)
    </p>
    <div
      class="r-max-h-96 r-scroll-auto r-text-base r-prose dark:!r-prose-dark r-max-w-none dark:!r-text-white r-bg-gray-100 dark:!r-bg-gray-700 r-px-6 r-py-4"
    >
      <SvelteMarkdown source={currentComment || "Nothing to preview"} />
    </div>
  {:else}
    <label>
      <p class="r-text-gray-600 dark:!r-text-gray-200">
        Add a comment (markdown is supported)
      </p>
      <textarea
        bind:value={currentComment}
        class="r-border-gray-300 dark:!r-border-gray-600 dark:!r-bg-gray-800 r-rounded-md r-w-full form-textarea r-font-sans r-h-28 disabled:r-cursor-not-allowed"
        placeholder={$authStore.user
          ? "Write your thoughts..."
          : "Login to leave a comment"}
        disabled={!$authStore.user}
      />
    </label>
  {/if}

  <div class="r-self-end r-space-x-4">
    <button
      on:click={() => {
        previewMode = !previewMode;
      }}
      class="dark:!r-bg-primary-600 dark:hover:!r-bg-primary-500 dark:disabled:!r-bg-gray-500 dark:!r-text-white dark:disabled:!r-text-gray-300 r-text-lg r-bg-primary-100 hover:r-bg-primary-200 r-text-primary-800 r-px-4 r-py-1 r-rounded-md disabled:r-bg-gray-100 disabled:r-hover:bg-gray-100 disabled:r-cursor-not-allowed disabled:r-text-gray-600"
      disabled={!$authStore.user || !currentComment}
    >
      {previewMode ? "Edit" : "Preview"}
    </button>
    <button
      on:click={() => handleAddComment()}
      type="button"
      class="dark:!r-from-primary-600 dark:hover:!r-from-primary-500 dark:disabled:hover:!r-from-primary-600 dark:!r-via-blue-500 dark:hover:!r-via-blue-400 dark:disabled:hover:!r-via-blue-500 dark:!r-to-purple-600 dark:hover:!r-to-purple-500 dark:disabled:hover:!r-to-purple-600 dark:!r-text-white r-text-lg r-primary-btn r-px-4 r-py-1"
      disabled={!$authStore.user || !currentComment}
    >
      Submit
    </button>
  </div>
  {#if usersLoaded}
    <div class="r-mt-4">
      {commentsLoaded ? comments.length : "-"}{" "}
      {commentsLoaded && comments.length == 1 ? "comment" : "comments"}
      <span class="r-mx-4 r-text-lg">|</span>
      <em class="text-gray-600 dark:!text-gray-300">
        Powered by
        <a
          href="https://github.com/maggie-j-liu/reactive"
          rel="noreferrer"
          target="_blank"
          class="r-text-primary-500 r-font-medium r-hover:underline"
        >
          Reactive
        </a>
      </em>
    </div>
    <div class="r-space-y-8">
      {#each comments as comment (comment.id)}
        <div class="r-flex r-gap-4">
          <img
            src={users[comment.user].photo}
            alt="{users[comment.user].name}'s profile picture"
            class="r-h-12 r-w-12 r-rounded-full"
          />
          <div
            class="r-bg-primary-50 dark:!r-bg-gray-700 r-flex-grow r-px-6 r-py-4 r-max-w-full"
          >
            <h4
              class="r-text-lg r-text-primary-800 dark:!r-text-primary-300 r-mb-2 r-font-medium"
            >
              {users[comment.user].name}
              <span class="r-text-base r-text-gray-400 r-font-normal"
                >commented {timeAgo.format(comment.timestamp)}
              </span>
            </h4>
            <div
              class="r-max-h-96 r-overflow-y-auto r-break-words r-text-base r-prose dark:!r-prose-dark r-max-w-none dark:!r-text-white"
            >
              <SvelteMarkdown source={comment.text} />
            </div>
            <div class="r-w-full r-flex r-justify-end r-items-center r-gap-2">
              {#if $authStore.user && comment.user == $authStore.user.uid}
                <button
                  class="hover:r-bg-red-100/60 dark:hover:!r-bg-red-500/25 r-px-2 r-py-2 r-rounded-full"
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
                    class="r-h-6 r-w-6 r-text-red-600 dark:!r-text-red-500"
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
                  class="r-px-2 r-py-2 r-rounded-full hover:r-bg-pink-100/60 dark:hover:!r-bg-pink-400/20 r-flex r-text-pink-600 dark:!r-text-pink-400 r-font-semibold r-gap-2 r-items-center"
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
                    class="r-h-6 r-w-6 r-text-pink-600 dark:!r-text-pink-400"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    />
                  </svg>
                  {comment.likes ?? 0}
                </button>
              {:else}
                <div
                  class="r-px-2 r-py-2 r-flex r-text-pink-600 r-font-semibold r-gap-2 r-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="r-h-6 r-w-6 r-text-pink-600"
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
    .r-primary-btn {
      @apply r-bg-gradient-to-r r-from-primary-100 hover:r-from-primary-200 r-via-blue-100 hover:r-via-blue-200 r-to-purple-100 hover:r-to-purple-200 r-text-primary-900 hover:r-bg-primary-100 r-rounded-md disabled:r-cursor-not-allowed disabled:r-opacity-70 disabled:hover:r-from-primary-100 disabled:hover:r-via-blue-100 disabled:hover:r-to-purple-100;
    }
  }
</style>
