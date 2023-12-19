<script lang="ts">
  import type { Repo } from "$lib/github";
  import { fetchGithubRepos } from "$lib/github";
  import { onMount } from "svelte";

  let projects: Repo[] = [];

  onMount(async () => {
    try {
      projects = await fetchGithubRepos();
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  });
</script>

<div class="flex flex-wrap justify-center px-[15rem]">
  {#each projects as project}
    <a
      class="flex flex-col card card-hover overflow-hidden flex-initial w-[20rem] m-6 h-max"
      href={project.html_url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <header class="card-header">
        <img
          src="https://avatars.githubusercontent.com/u/46634820?v=4"
          class="w-full aspect-[21/9] object-scale-down"
          alt="Ben Juntilla avatar"
        />
      </header>
      <div class="p-4 space-y-4">
        <h3 class="h3" data-toc-ignore>{project.name}</h3>
        <div class="flex flex-row flex-wrap -m-1">
          {#each project.languages as language}
            <span class="chip variant-ghost m-1">{language}</span>
          {/each}
        </div>
        <article>
          <p>
            {project.description}
          </p>
        </article>
      </div>
      <footer class="mt-auto">
        <hr class="opacity-50" />
        <div class="p-4 flex justify-start items-center space-x-4">
          <div class="flex-auto flex justify-between items-center">
            <h6 class="font-bold" data-toc-ignore>{project.stargazers_count} stars</h6>
            <small>Created on {project.created_at_date.toLocaleDateString()}</small>
          </div>
        </div>
      </footer>
    </a>
  {/each}
</div>
