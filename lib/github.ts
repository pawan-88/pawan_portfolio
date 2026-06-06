import { personalInfo } from "@/data/personal";

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
};

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=6&type=owner`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": `${personalInfo.name}-Portfolio`,
        },
      }
    );

    if (!res.ok) return [];

    const data = (await res.json()) as GitHubRepo[];
    return data.filter((repo) => !repo.fork).slice(0, 6);
  } catch {
    return [];
  }
}

export async function getGitHubProfile() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${personalInfo.githubUsername}`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": `${personalInfo.name}-Portfolio`,
        },
      }
    );
    if (!res.ok) return null;
    return res.json() as Promise<{
      public_repos: number;
      followers: number;
      bio: string | null;
    }>;
  } catch {
    return null;
  }
}
