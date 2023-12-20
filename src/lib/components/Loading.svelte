<script lang="ts">
  import { fade } from "svelte/transition";
</script>

<div in:fade class="w-full p-4 space-y-4">
  <div class="placeholder animate-pulse" />
  <div class="grid grid-cols-3 gap-8">
    <div class="placeholder animate-pulse" />
    <div class="placeholder animate-pulse" />
    <div class="placeholder animate-pulse" />
  </div>
  <div class="grid grid-cols-4 gap-4">
    <div class="placeholder animate-pulse" />
    <div class="placeholder animate-pulse" />
    <div class="placeholder animate-pulse" />
    <div class="placeholder animate-pulse" />
  </div>
</div>
