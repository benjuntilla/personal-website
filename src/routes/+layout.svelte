<script lang="ts">
  import "../app.css";
  import "@fontsource/vt323";
</script>

<slot />

<style lang="postcss">
  :global(body) {
    font-family: "VT323";
    color: white;
    background-color: black;
  }
</style>
