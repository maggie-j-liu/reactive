<script>
  import EmbedApp from "./EmbedApp.svelte";
  import TailwindGlobal from "./components/TailwindGlobal.svelte";
  const storedTheme = localStorage.getItem("theme");
  let isDarkMode = storedTheme === "dark";
  const changeMode = (changeTo) => {
    isDarkMode = changeTo === "dark";
    localStorage.setItem("theme", changeTo);
  };
</script>

<div class={isDarkMode ? "r-dark" : "r-light"}>
  <div id="reactive_widget">
    <EmbedApp {...$$props} />
  </div>
  <button
    class="r-fixed r-top-6 r-right-6"
    on:click={() => changeMode(isDarkMode ? "light" : "dark")}
  >
    {#if isDarkMode}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="r-text-white"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="r-text-black"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    {/if}
  </button>
</div>
<TailwindGlobal />

{#if isDarkMode}
  <style>
    body {
      background-color: black;
    }
  </style>
{/if}

<style>
  #reactive_widget {
    width: 52.5vw;
    margin-left: auto;
    margin-right: auto;
  }
</style>
