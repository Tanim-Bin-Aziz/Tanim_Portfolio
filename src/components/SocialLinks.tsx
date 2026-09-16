import type { ReactNode } from "react";
import { socials } from "@/data/site";
import { IconGithub, IconLinkedin, IconMail } from "@/components/icons";

const iconMap: Record<string, ReactNode> = {
  GitHub: <IconGithub />,
  LinkedIn: <IconLinkedin />,
  Email: <IconMail />,
};

interface SocialLinksProps {
  /** "plain" = header er nicher simple icon row, "pill" = footer er rounded pill */
  variant?: "plain" | "pill";
}

export default function SocialLinks({ variant = "plain" }: SocialLinksProps) {
  return (
    <div className={variant === "pill" ? "social-pill" : "social-row"}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className="social-link"
          target={s.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          {iconMap[s.label] ?? <IconExternalFallback />}
        </a>
      ))}
    </div>
  );
}

function IconExternalFallback() {
  return <span aria-hidden>↗</span>;
}
