import projects from "./projects.json";
import { gql, GraphQLClient } from "graphql-request";

export type Owner = {
  login: string;
  avatar_url: string;
}

export type Repo = {
  owner: Owner;
  full_name: string;
  id: string;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  fork: boolean;
  created_at: string;
  languages_url: string;

  // Derived fields
  languages: string[];
  created_at_date: Date;
  openGraphImageUrl: string;
  usesCustomOpenGraphImage: boolean;
};

const GITHUB_REST_ENDPOINT = "https://api.github.com";
const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";
const GITHUB_USERNAME = "benjuntilla";
const GITHUB_PAT = import.meta.env.VITE_GITHUB_PAT;

const graphQLClient = new GraphQLClient(GITHUB_GRAPHQL_ENDPOINT, {
  headers: {
    authorization: `Bearer ` + GITHUB_PAT,
  },
})

export async function fetchGithubRepos(): Promise<Repo[]> {
  // Fetch all repos from GitHub API
  const apiRepos = (await fetch(`${GITHUB_REST_ENDPOINT}/users/${GITHUB_USERNAME}/repos?per_page=100`)
    .then((response) => response.json() as Promise<Repo[]>))
    .filter((project) => !project.fork && project.name !== "benjuntilla");

  // Fetch repos from JSON
  const jsonRepos = await Promise.all(projects.repos.map(async (repo) =>
    await fetch(`${GITHUB_REST_ENDPOINT}/repos/${repo}`).then(response => response.json() as Promise<Repo>)));

  // Combine Github API & JSON repos
  let combinedRepos = [...apiRepos, ...jsonRepos]

  // Enhance projects with additional metadata
  const projectsEnhanced = await Promise.all(
    combinedRepos.map(async (project) => {
      // Get languages
      const languages = await fetch(project.languages_url)
        .then((response) => response.json())
        .then((data) => Object.keys(data));

      // Get localized creation date
      const created_at_date = new Date(project.created_at);

      // Initialize default values for Open Graph image URL and custom
      // image flag
      let openGraphImageUrl = "";
      let usesCustomOpenGraphImage = false;

      try {
        const query = gql`
          query getRepository($owner: String!, $name: String!) {
            repository(owner: $owner, name: $name) {
              openGraphImageUrl
              usesCustomOpenGraphImage
            }
          }
        `;
        const variables = { owner: project.owner.login, name: project.name };
        const data = await graphQLClient.request(query, variables);
        openGraphImageUrl = data.repository.openGraphImageUrl;
        usesCustomOpenGraphImage = data.repository.usesCustomOpenGraphImage;
      } catch (error) {
        console.error("Error fetching Open Graph image URL:", error);
      }

      return { ...project, languages, created_at_date, openGraphImageUrl, usesCustomOpenGraphImage };
    })
  );

  // Return projects sorted by creation date
  return projectsEnhanced.sort((a, b) => b.created_at_date.getTime() - a.created_at_date.getTime());
}
