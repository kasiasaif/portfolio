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

        const remoteByName = new Map(
          data.filter((repo) => !repo.fork).map((repo) => [repo.name, repo]),
        );

        const mapped = fallbackProjects.map((project) => {
          const remote = remoteByName.get(project.name);
          return {
            ...project,
            html_url: remote?.html_url ?? project.html_url,
            homepage: remote?.homepage ?? project.homepage,
            language: remote?.language ?? project.language,
            updated_at: remote?.updated_at ?? project.updated_at,
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
              {project.stack.length > 0 ? (
                <ul className="work__stack" aria-label="Third-party tools">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
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
