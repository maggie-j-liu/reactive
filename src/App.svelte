<script>
  import EmbedApp from "./EmbedApp.svelte";
  import TailwindGlobal from "./components/TailwindGlobal.svelte";
</script>

<div class="reactive_widget w-screen">
  <EmbedApp {...$$props} />
</div>
<TailwindGlobal />
