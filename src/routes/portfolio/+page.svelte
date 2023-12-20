<script lang="ts">
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import Loading from "$lib/components/Loading.svelte";
  import { fetchGithubRepos } from "$lib/github";
  import type { Repo } from "$lib/github";
  import ProjectCard from "$lib/components/ProjectCard.svelte";

  // Use a store to prevent the loading component from flashing on every navigation
  const projectsStore = writable(Promise.resolve<Repo[]>([]));

  onMount(async () => {
    const projects = await fetchGithubRepos();
    projectsStore.set(Promise.resolve(projects));
  });
</script>

{#await $projectsStore}
  <Loading />
{:then projects}
  <div class="flex flex-wrap justify-center px-[15rem]">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
{:catch error}
  <p>Failed to load projects: {error.message}</p>
{/await}
