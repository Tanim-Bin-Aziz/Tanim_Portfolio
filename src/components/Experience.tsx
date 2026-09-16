"use client";

import { useState } from "react";
import { experiences } from "@/data/experiences";
import { IconBriefcase } from "@/components/icons";

const VISIBLE_COUNT = 2;

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? experiences : experiences.slice(0, VISIBLE_COUNT);
  const hasMore = experiences.length > VISIBLE_COUNT;

  return (
    <section id="work" className="section scroll-mt-24">
      <p className="section-label"><IconBriefcase />Professional experience</p>

      {visible.map((exp) => (
        <article key={`${exp.company}-${exp.period}`} className="exp-item">
          <div className="exp-timeline" aria-hidden>
            <span className="exp-dot" />
            <span className="exp-line" />
          </div>

          <div>
            <div className="exp-head">
              <span className="exp-company">{exp.company}</span>
              <span className="exp-period">{exp.period}</span>
            </div>

            <p className="exp-role">
              {exp.role} – {exp.stack}
            </p>

            <p className="exp-title">{exp.title}</p>

            <ul className="exp-list">
              {exp.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}

      {hasMore && (
        <button
          type="button"
          className="see-more"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? "See less" : "See more"}
          <span className={`chevron${expanded ? " up" : ""}`} aria-hidden>
            ▾
          </span>
        </button>
      )}
    </section>
  );
}
