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
  import www from "$lib/img/www.gif"

  export let data;

  const TRANSITION_TIME = 200;
  const FADE_IN = { easing: cubicOut, duration: TRANSITION_TIME, delay: TRANSITION_TIME };
  const FADE_OUT = { easing: cubicIn, duration: TRANSITION_TIME };

  // analytics
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  inject({ mode: dev ? 'development' : 'production' });
</script>

<AppShell slotPageContent="m-[2%]">
  <svelte:fragment slot="header">
    <AppBar gridColumns="3" gap="5rem">
      <TabGroup
        justify="justify-center items-center"
        active="variant-filled-primary"
        hover="hover:variant-soft-primary"
        flex="flex-1"
        rounded=""
        border=""
        class="bg-surface-100-800-token w-full items-stretch font-mono
        font-bold items-center"
      >
        <a href="/">
          <img alt="Monitor logo" src={monitor} class="flex-none
          h-[3rem] mr-5 aspect-square" />
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
  <svelte:fragment slot="pageFooter">
    <div class="bg-surface-100-800-token flex justify-center items-center">
      Proud to be a part of the
      <img src={www} alt="World Wide Web logo"
      class="m-2 h-20" />
    </div>
  </svelte:fragment>
</AppShell>
