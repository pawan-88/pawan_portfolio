import Link from "next/link";
import { ExternalLink, GitBranch, Star } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { getGitHubProfile, getGitHubRepos } from "@/lib/github";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function GitHubActivitySection() {
  const [repos, profile] = await Promise.all([getGitHubRepos(), getGitHubProfile()]);

  return (
    <section id="github" className="section-padding" aria-label="GitHub Activity">
      <div className="container">
        <SectionHeader
          eyebrow="Open Source"
          title="Live GitHub activity"
          description="Recent repositories and active development from my public GitHub profile."
        />

        {profile ? (
          <div className="mb-8 flex flex-wrap gap-6 text-sm text-muted">
            <span>
              <strong className="text-white">{profile.public_repos}</strong> public repos
            </span>
            <span>
              <strong className="text-white">{profile.followers}</strong> followers
            </span>
            {profile.bio ? <span className="max-w-xl">{profile.bio}</span> : null}
          </div>
        ) : null}

        {repos.length === 0 ? (
          <div className="glass-card rounded-2xl p-8 text-center text-muted">
            <p>GitHub activity will appear here once the API is reachable.</p>
            <Button asChild className="mt-4" variant="secondary">
              <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <Link
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border glass-card group block p-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-white group-hover:text-accent">
                    {repo.name}
                  </h3>
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-muted">
                  {repo.description || "No description provided."}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted">
                  {repo.language ? (
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {repo.language}
                    </span>
                  ) : null}
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="h-3 w-3" />
                    Updated {formatDate(repo.updated_at)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              View all repositories on GitHub
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
