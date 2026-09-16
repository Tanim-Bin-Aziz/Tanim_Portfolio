import { githubSnapshot } from "@/data/github";
import type { SocialLink } from "@/types";

const { profile } = githubSnapshot;

export const site = {
  name: profile.name,
  role: "Software Engineer",
  company: profile.company,
  location: "Dhaka, Bangladesh",
  timeZone: "Asia/Dhaka",
  timeZoneLabel: "GMT+6",
  avatar: "/images/avatar.png",
  github: profile.github,
  website: profile.blog,
  publicRepos: profile.publicRepos,
  followers: profile.followers,
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: "https://linkedin.com/in/tanimbinaziz" },
  { label: "Email", href: "mailto:hello@tanimbinazi145@gmail.com" },
];
