import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const USERNAME = process.env.GITHUB_USERNAME || "Tanim-Bin-Aziz";
const OUT = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../src/data/github-snapshot.json"
);

async function getJson(url) {
  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfolio-sync",
    },
  });
  if (!res.ok) throw new Error(`${url} -> ${res.status} ${res.statusText}`);
  return res.json();
}

const [profile, repos, contributions] = await Promise.all([
  getJson(`https://api.github.com/users/${USERNAME}`),
  getJson(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
  getJson(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`),
]);

const snapshot = {
  generatedAt: new Date().toISOString(),
  profile: {
    login: profile.login,
    name: profile.name,
    bio: profile.bio,
    company: profile.company,
    location: profile.location,
    blog: profile.blog,
    github: profile.html_url,
    avatar: profile.avatar_url,
    publicRepos: profile.public_repos,
    followers: profile.followers,
    following: profile.following,
  },
  totalContributions: contributions.total.lastYear,
  contributions: contributions.contributions,
  repos: repos
    .filter((repo) => !repo.fork && repo.name !== USERNAME)
    .map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      homepage: repo.homepage || null,
      language: repo.language,
      description: repo.description,
      stars: repo.stargazers_count,
      pushedAt: repo.pushed_at,
      topics: repo.topics ?? [],
    })),
};

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, `${JSON.stringify(snapshot, null, 2)}\n`);

console.log(
  `Synced ${snapshot.repos.length} repos and ${snapshot.contributions.length} contribution days -> ${OUT}`
);
