<script lang="ts">
  import { AppBar, AppShell } from "@skeletonlabs/skeleton";
  import "../app.postcss";
  import "@fontsource/vt323";
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <div class="btn-group-horizontal variant-filled">
        <button>Home</button>
        <button>Portfolio</button>
        <button>Blog</button>
        <button>About</button>
      </div>
    </AppBar>
  </svelte:fragment>
  <slot />
</AppShell>

<style lang="postcss">
  :global(body) {
    color: white;
    background-color: black;
  }
</style>
