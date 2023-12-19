<script lang="ts">
  import App from "$lib/components/App.svelte";
</script>

<div class="w-full h-full">
  <div class="absolute inset-0 z-[-1]">
    <App />
  </div>

  <div class="relative pointer-events-none w-full mx-[2%]" style:container-type="inline-size">
    <h1 class="text-[18cqw] leading-[18cqw] lg:text-[10cqw] lg:leading-[10cqw] font-pixel">
      BEN JUNTILLA
    </h1>
    <h1 class="text-[5cqw] leading-[5cqw]">
      <span
        class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
        >software developer</span
      >
    </h1>
  </div>
</div>
