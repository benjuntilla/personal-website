<script lang="ts">
  import "../app.postcss";
  import "@fontsource/ibm-plex-mono";
  import "@fontsource/metropolis";
  import "@fontsource/vt323";
  import { AppBar, AppShell, TabAnchor, TabGroup } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";
  import monitor from "$lib/img/monitor.png"

  export let data;

  const TRANSITION_TIME = 200;
  const FADE_IN = { easing: cubicOut, duration: TRANSITION_TIME, delay: TRANSITION_TIME };
  const FADE_OUT = { easing: cubicIn, duration: TRANSITION_TIME };
</script>

<AppShell slotPageContent="m-[2%]">
  <svelte:fragment slot="header">
    <AppBar gridColumns="3" gap="5rem">
      <TabGroup
        justify="justify-center"
        active="variant-filled-primary"
        hover="hover:variant-soft-primary"
        flex="flex-1"
        rounded=""
        border=""
        class="bg-surface-100-800-token w-full items-stretch font-mono font-bold"
      >
        <a href="/">
          <img alt="Monitor logo" src={monitor} class="max-h-[5vh] mx-5" />
        </a>
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
      </TabGroup>
    </AppBar>
  </svelte:fragment>
  {#key data.pathname}
    <div in:fade={FADE_IN} out:fade={FADE_OUT}>
      <slot />
    </div>
  {/key}
</AppShell>
