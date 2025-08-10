<script lang="ts">
  import App from "$lib/components/App.svelte";
  import { LinkedinSolid, GithubSolid, InfoCircleOutline } from "flowbite-svelte-icons";
  import { typewriter } from "$lib/animations";
  import { fade } from "svelte/transition";

  const TRANSITION_TIME = 200;
</script>

<svelte:head>
  <title>Ben Juntilla</title>
  <meta property="og:title" content="Ben Juntilla" />
  <meta name="description" content="Ben Juntilla's personal website 🌟" />
  <meta property="og:description" content="Ben Juntilla's personal website 🌟" />
  <meta property="og:site_name" content="Ben Juntilla"/>
  <meta property="og:url" content="https://benjuntilla.com"/>
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://benjuntilla.com/icon.png" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="w-full h-screen">
  <div class="absolute inset-0 z-[-1]">
    <App />
  </div>

  <div class="relative h-max mx-[2%] flex flex-col" style:container-type="inline-size">
    <h1 class="text-[18cqw] leading-[18cqw] lg:text-[10cqw] lg:leading-[10cqw] font-pixel">
      <span
        class="bg-gradient-to-br from-white to-surface-300 bg-clip-text text-transparent box-decoration-clone"
        >BEN JUNTILLA</span
      >
    </h1>
    <h1 class="text-[6cqw] leading-[6cqw] lg:text-[4cqw] lg:leading-[4cqw]">
      <span
        in:typewriter={{}}
        class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone font-mono"
      >
        software developer
      </span>
    </h1>

    <div
      class="justify-center mt-[5%] lg:mt-[15%] logo-cloud grid-cols-1 lg:!grid-cols-2 gap-1 font-mono font-bold"
    >
      <a
        class="variant-glass-primary logo-item"
        href="https://github.com/benjuntilla"
        target="_blank"
        in:fade|global={{ duration: TRANSITION_TIME, delay:
        TRANSITION_TIME * 0.5 * 1}}
      >
        <span><GithubSolid /></span>
        <span>GitHub</span>
      </a>
      <a
        class="variant-glass-primary logo-item"
        href="https://linkedin.com/in/benjuntilla"
        target="_blank"
        in:fade|global={{ duration: TRANSITION_TIME, delay:
        TRANSITION_TIME * 0.5 * 2}}
      >
        <span><LinkedinSolid /></span>
        <span>LinkedIn</span>
      </a>
    </div>
  </div>
</div>
