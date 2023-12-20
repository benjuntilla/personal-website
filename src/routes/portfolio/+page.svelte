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

{#await $reposStore}
  <Loading />
{:then repos}
  <RepoCards {repos} />
{:catch error}
  <p>Failed to load projects: {error.message}</p>
{/await}
