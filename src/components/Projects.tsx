import { useEffect, useState } from "react";
import {
  fallbackProjects,
  formatProjectTitle,
  type Project,
} from "../data/fallbackProjects";
import { Reveal } from "./Reveal";
import "./Projects.css";

const GITHUB_USER = "kasiasaif";

export function Projects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=12`,
        );
        if (!response.ok) throw new Error("GitHub request failed");

        const data = (await response.json()) as Array<{
          name: string;
          description: string | null;
          html_url: string;
          homepage: string | null;
          language: string | null;
          updated_at: string;
          fork: boolean;
        }>;

        const curated = new Map(
          fallbackProjects.map((project) => [project.name, project.description]),
        );

        const mapped = data
          .filter((repo) => !repo.fork)
          .slice(0, 6)
          .map((repo) => {
            const raw = repo.description ?? "";
            const cleaned = raw
              .replace(/\s*Secrets stay in \.env(?: and Render)?, not git\.?/gi, "")
              .trim();

            return {
              name: repo.name,
              description:
                curated.get(repo.name) ??
                (cleaned || "A recent project from GitHub."),
              html_url: repo.html_url,
              homepage: repo.homepage,
              language: repo.language,
              updated_at: repo.updated_at,
            };
          });

        if (!cancelled && mapped.length) setProjects(mapped);
      } catch {
        if (!cancelled) setProjects(fallbackProjects);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section work" id="work">
      <div className="container">
        <Reveal className="work__header">
          <div>
            <span className="section-kicker">Projects</span>
            <h2 className="section-title">Selected work</h2>
          </div>
          <a
            className="work__all"
            href={`https://github.com/${GITHUB_USER}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            View All
          </a>
        </Reveal>

        <ul className="work__grid">
          {projects.map((project, index) => (
            <Reveal
              as="li"
              key={project.name}
              className="work__item"
              delay={100 + index * 90}
            >
              <div className="work__meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {project.language ? <em>{project.language}</em> : null}
              </div>
              <h3>{formatProjectTitle(project.name)}</h3>
              <p>{project.description}</p>
              <div className="work__links">
                <a href={project.html_url} target="_blank" rel="noreferrer">
                  Code
                </a>
                {project.homepage ? (
                  <a href={project.homepage} target="_blank" rel="noreferrer">
                    Live site
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
