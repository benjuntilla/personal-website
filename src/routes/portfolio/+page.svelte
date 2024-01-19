<script lang="ts">
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import Loading from "$lib/components/Loading.svelte";
  import { fetchGithubRepos } from "$lib/github";
  import type { Repo } from "$lib/github";
  import RepoCards from "$lib/components/RepoCards.svelte";

  // Use a store to prevent the loading component from flashing on every navigation
  const reposStore = writable(Promise.resolve<Repo[]>([]));

  onMount(async () => {
    const repos = await fetchGithubRepos();
    reposStore.set(Promise.resolve(repos));
  });
</script>

<svelte:head>
  <title>Ben Juntilla's Portfolio</title>
  <meta property="og:title" content="Ben Juntilla's Portfolio" />
  <meta name="description" content="Ben Juntilla's portfolio 🌟" />
  <meta property="og:description" content="Ben Juntilla's portfolio 🌟" />
  <meta property="og:site_name" content="Ben Juntilla"/>
  <meta property="og:url" content="https://benjuntilla.com/portfolio"/>
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://benjuntilla.com/icon.png" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{#await $reposStore}
  <Loading />
{:then repos}
  <RepoCards {repos} />
{:catch error}
  <p>Failed to load projects: {error.message}</p>
{/await}
