<script lang="ts">
  import type { Repo } from "$lib/github";
  import { fade } from "svelte/transition";

  export let repos: Repo[];

  const TRANSITION_TIME = 200;
</script>

<div class="flex flex-wrap justify-center lg:px-[10vw]">
  {#each repos as repo, i}
    <a
      in:fade|global={{ duration: TRANSITION_TIME, delay: TRANSITION_TIME * 0.5 * i }}
      class="variant-glass-primary flex flex-col card card-hover overflow-hidden flex-initial w-[20rem] m-6 h-max"
      href={repo.html_url}
      target="_blank"
    >
      <header class="card-header">
        <img
          src={repo.usesCustomOpenGraphImage
            ? repo.openGraphImageUrl
            : repo.owner.avatar_url}
          class="w-full aspect-[21/9] object-scale-down"
          alt="Ben Juntilla avatar"
        />
      </header>
      <div class="p-4 space-y-4">
        <h3 class="h3" data-toc-ignore>{repo.name}</h3>
        <div class="flex flex-row flex-wrap -m-1">
          {#each repo.languages as language}
            <span class="chip variant-ghost m-1">{language}</span>
          {/each}
        </div>
        <article>
          <p>
            {repo.description}
          </p>
        </article>
      </div>
      <footer class="mt-auto">
        <hr class="opacity-50" />
        <div class="p-4 flex justify-start items-center space-x-4">
          <div class="flex-auto flex justify-between items-center">
            <h6 class="font-bold" data-toc-ignore>{repo.stargazers_count} stars</h6>
            <small>Created on {repo.created_at_date.toLocaleDateString()}</small>
          </div>
        </div>
      </footer>
    </a>
  {/each}
</div>
