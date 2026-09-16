import snapshot from "@/data/github-snapshot.json";
import type { GithubSnapshot } from "@/types";

/**
 * `scripts/sync-github.mjs` diye generate kora real GitHub data.
 * Network fail korle ei snapshot tai fallback hisebe use hoy.
 */
export const githubSnapshot = snapshot as unknown as GithubSnapshot;
