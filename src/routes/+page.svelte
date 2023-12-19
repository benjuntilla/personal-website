<script lang="ts">
  import App from "$lib/components/App.svelte";
  import { LinkedinSolid, GithubSolid, InfoCircleOutline } from "flowbite-svelte-icons";
</script>

<div class="w-full h-full">
  <div class="absolute inset-0 z-[-1]">
    <App />
  </div>

  <div class="relative h-max mx-[2%] flex flex-col" style:container-type="inline-size">
    <h1 class="text-[18cqw] leading-[18cqw] lg:text-[10cqw] lg:leading-[10cqw] font-pixel">
      BEN JUNTILLA
    </h1>
    <h1 class="text-[5cqw] leading-[5cqw]">
      <span
        class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
        >software developer</span
      >
    </h1>

    <div class="justify-center mt-[5%] lg:mt-[15%] logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1">
      <a class="logo-item" href="/about">
        <span><InfoCircleOutline /></span>
        <span>About</span>
      </a>
      <a
        class="logo-item"
        href="https://github.com/benjuntilla"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span><GithubSolid /></span>
        <span>GitHub</span>
      </a>
      <a
        class="logo-item"
        href="https://linkedin.com/in/benjuntilla"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span><LinkedinSolid /></span>
        <span>LinkedIn</span>
      </a>
    </div>
  </div>
</div>
