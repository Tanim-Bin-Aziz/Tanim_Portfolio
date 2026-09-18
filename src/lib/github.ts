import { githubSnapshot } from "@/data/github";
import { buildContributionGrid } from "@/lib/contributions";
import type { ContributionData, ContributionDay } from "@/types";

const USERNAME = githubSnapshot.profile.login;
const CONTRIBUTIONS_API = "https://github-contributions-api.jogruber.de/v4";
const REVALIDATE_SECONDS = 60 * 60 * 6;

interface ContributionsResponse {
  total: { lastYear: number };
  contributions: ContributionDay[];
}

/**
 * Real contribution data fetch kori, kintu build/runtime e network fail korle
 * committed snapshot e fallback kori — page kokhono bhangbe na.
 */
export async function getContributionData(): Promise<ContributionData> {
  try {
    const res = await fetch(`${CONTRIBUTIONS_API}/${USERNAME}?y=last`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) throw new Error(`contributions api ${res.status}`);

    const data = (await res.json()) as ContributionsResponse;
    if (!data.contributions?.length) throw new Error("empty contributions");

    return buildContributionGrid(data.contributions, data.total.lastYear);
  } catch {
    return buildContributionGrid(
      githubSnapshot.contributions,
      githubSnapshot.totalContributions
    );
  }
}
