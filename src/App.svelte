<script>
  import EmbedApp from "./EmbedApp.svelte";
  import TailwindGlobal from "./components/TailwindGlobal.svelte";
</script>

<div id="reactive_widget" class="dark">
  <EmbedApp {...$$props} />
</div>
<TailwindGlobal />

<style>
  #reactive_widget {
    width: 52.5vw;
    margin-left: auto;
    margin-right: auto;
  }
</style>
