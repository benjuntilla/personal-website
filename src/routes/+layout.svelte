<script lang="ts">
  import "../app.postcss";
  import { AppBar, AppShell, TabAnchor, TabGroup } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";
  import "@fontsource/vt323";
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <TabGroup
        justify="justify-center"
        active="variant-filled-primary"
        hover="hover:variant-soft-primary"
        flex="flex-1 lg:flex-none"
        rounded=""
        border=""
        class="bg-surface-100-800-token w-full"
      >
        <TabAnchor href="/" selected={$page.url.pathname === "/"}>
          <span>Home</span>
        </TabAnchor>
        <TabAnchor href="/portfolio" selected={$page.url.pathname === "/portfolio"}>
          <span>Portfolio</span>
        </TabAnchor>
        <TabAnchor href="/blog" selected={$page.url.pathname === "/blog"}>
          <span>Blog</span>
        </TabAnchor>
        <TabAnchor href="/about" selected={$page.url.pathname === "/about"}>
          <span>About</span>
        </TabAnchor>
        <!-- ... -->
      </TabGroup>
    </AppBar>
  </svelte:fragment>
  <slot />
</AppShell>
