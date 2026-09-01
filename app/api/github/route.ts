import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const username = "M20A03";

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=owner`, {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json({
        username,
        stars: 1,
        repositories: 23,
        followers: 7,
        forks: 0,
        languages: [
          { name: "TypeScript", percent: 45, color: "bg-blue-500" },
          { name: "JavaScript", percent: 35, color: "bg-yellow-400" },
          { name: "Python", percent: 12, color: "bg-emerald-500" },
          { name: "Others", percent: 8, color: "bg-muted-foreground" },
        ],
      });
    }

    const user = await userRes.json();
    const repos = ((await reposRes.json()) as any[]).filter((repo) => !repo.fork);

    const stars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
    const forks = repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0);

    const totals = new Map<string, number>();
    let totalWeight = 0;

    repos.forEach((repo) => {
      if (!repo.language) return;
      const weight = Math.max(repo.size || 1, 1);
      totals.set(repo.language, (totals.get(repo.language) ?? 0) + weight);
      totalWeight += weight;
    });

    const languageColors = ["bg-blue-500", "bg-yellow-400", "bg-emerald-500", "bg-purple-500", "bg-orange-500"];
    const sorted = [...totals.entries()].sort((a, b) => b[1] - a[1]);
    const top = sorted.slice(0, 3);
    const othersWeight = sorted.slice(3).reduce((sum, [, weight]) => sum + weight, 0);

    const languages = top.map(([name, weight], index) => ({
      name,
      percent: Math.round((weight / (totalWeight || 1)) * 100),
      color: languageColors[index % languageColors.length],
    }));

    if (othersWeight > 0) {
      languages.push({
        name: "Others",
        percent: Math.max(1, Math.round((othersWeight / totalWeight) * 100)),
        color: "bg-muted-foreground",
      });
    }

    return NextResponse.json({
      username,
      stars: Math.max(stars, 1),
      repositories: user.public_repos || 23,
      followers: user.followers || 7,
      forks,
      languages: languages.length > 0 ? languages : [
        { name: "TypeScript", percent: 45, color: "bg-blue-500" },
        { name: "JavaScript", percent: 35, color: "bg-yellow-400" },
        { name: "Python", percent: 12, color: "bg-emerald-500" },
        { name: "Others", percent: 8, color: "bg-muted-foreground" },
      ],
    });
  } catch (error) {
    return NextResponse.json({
      username,
      stars: 1,
      repositories: 23,
      followers: 7,
      forks: 0,
      languages: [
        { name: "TypeScript", percent: 45, color: "bg-blue-500" },
        { name: "JavaScript", percent: 35, color: "bg-yellow-400" },
        { name: "Python", percent: 12, color: "bg-emerald-500" },
        { name: "Others", percent: 8, color: "bg-muted-foreground" },
      ],
    });
  }
}
