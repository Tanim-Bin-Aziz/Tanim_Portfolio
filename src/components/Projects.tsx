"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { IconDoc, IconExternal, IconFolder, IconGithub } from "@/components/icons";

const VISIBLE_COUNT = 3;

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? projects : projects.slice(0, VISIBLE_COUNT);
  const hasMore = projects.length > VISIBLE_COUNT;

  return (
    <section id="projects" className="section scroll-mt-24 reveal" data-reveal data-reveal-delay="300">
      <p className="section-label"><IconFolder />My Projects</p>

      <div className="project-list">
        {visible.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-body">
              <div>
                <p className="project-name">{project.name}</p>
                <p className="project-stack">{project.stack}</p>
                <p className="project-desc">{project.desc}</p>
              </div>

              <div className="project-actions">
                {project.github && (
                  <a
                    href={project.github}
                    aria-label={`${project.name} source code`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                  >
                    <IconGithub />
                  </a>
                )}
                {project.doc && (
                  <a
                    href={project.doc}
                    aria-label={`${project.name} documentation`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                  >
                    <IconDoc />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    aria-label={`${project.name} live demo`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                  >
                    <IconExternal />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {hasMore && (
        <button
          type="button"
          className="see-more"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Show more"}
          <span className={`chevron${expanded ? " up" : ""}`} aria-hidden>
            ▾
          </span>
        </button>
      )}
    </section>
  );
}
