<script lang="ts">
  import "../app.postcss";
  import { AppBar, AppShell, TabAnchor, TabGroup } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";
  import "@fontsource/vt323";
</script>

<AppShell slotPageContent="flex justify-center m-[2%]">
  <svelte:fragment slot="header">
    <AppBar gridColumns="3" gap="5rem">
      <TabGroup
        justify="justify-center"
        active="variant-filled-primary"
        hover="hover:variant-soft-primary"
        flex="flex-1"
        rounded=""
        border=""
        class="bg-surface-100-800-token w-full items-stretch"
      >
        <TabAnchor href="/" selected={$page.url.pathname === "/"}>
          <span>home</span>
        </TabAnchor>
        <TabAnchor href="/portfolio" selected={$page.url.pathname === "/portfolio"}>
          <span>portfolio</span>
        </TabAnchor>
        <!-- <TabAnchor href="/blog" selected={$page.url.pathname === "/blog"}>
          <span>blog</span>
        </TabAnchor> -->
        <TabAnchor href="/about" selected={$page.url.pathname === "/about"}>
          <span>about</span>
        </TabAnchor>
        <!-- ... -->
      </TabGroup>
    </AppBar>
  </svelte:fragment>
  <slot />
</AppShell>
