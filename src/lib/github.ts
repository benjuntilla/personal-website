const GITHUB_API_URL = "https://api.github.com";
const GITHUB_USERNAME = "benjuntilla";

export type Repo = {
  id: string;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  fork: boolean;
  created_at: string;
  created_at_date: Date;
  languages_url: string;
  languages: string[];
};

export async function fetchGithubRepos(): Promise<Repo[]> {
  // Fetch all projects from GitHub API
  const projects = (await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?per_page=100`)
    .then((response) => response.json() as Promise<Repo[]>))
    .filter((project) => !project.fork && project.name !== "benjuntilla");

  // Enhance projects with languages and localized creation date
  const projectsEnhanced = await Promise.all(
    projects.map(async (project) => {
      const languages = await fetch(project.languages_url)
        .then((response) => response.json())
        .then((data) => Object.keys(data));

      const created_at_date = new Date(project.created_at);

      return { ...project, languages, created_at_date };
    })
  );

  // Return projects sorted by creation date
  return projectsEnhanced.sort((a, b) => b.created_at_date.getTime() - a.created_at_date.getTime());
}
