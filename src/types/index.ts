import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  color: string;
  icon: LucideIcon;
}

export interface Project {
  name: string;
  stack: string;
  desc: string;
  github?: string;
  doc?: string;
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  stack: string;
  period: string;
  title: string;
  bullets: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContributionDay {
  date: string;
  level: number;
  count: number;
}

export interface MonthLabel {
  label: string;
  weekIndex: number;
}

export interface ContributionData {
  weeks: ContributionDay[][];
  monthLabels: MonthLabel[];
  total: number;
}

export interface GithubProfile {
  login: string;
  name: string;
  bio: string;
  company: string;
  location: string;
  blog: string;
  github: string;
  avatar: string;
  publicRepos: number;
  followers: number;
  following: number;
}

export interface GithubRepo {
  name: string;
  url: string;
  homepage: string | null;
  language: string | null;
  description: string | null;
  stars: number;
  pushedAt: string;
  topics: string[];
}

export interface GithubSnapshot {
  generatedAt: string;
  profile: GithubProfile;
  totalContributions: number;
  contributions: ContributionDay[];
  repos: GithubRepo[];
}
