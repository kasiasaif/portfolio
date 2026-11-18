import portrait from "../assets/kasia.jpg";
import { useTypewriter } from "../hooks/useTypewriter";
import "./Hero.css";

const HEADLINE = "Full-stack developer who turns requirements into working products.";

export function Hero() {
  const { output, done } = useTypewriter(HEADLINE, 500, 26);

  return (
    <header className="hero" id="top">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__columns" />
      </div>

      <div className="hero__layout container">
        <div className="hero__content">
          <p className="hero__status">Kasia Saif</p>
          <h1 className="hero__title" aria-label={HEADLINE}>
            <span>{output}</span>
            <span
              className={`hero__cursor ${done ? "hero__cursor--blink" : ""}`}
              aria-hidden="true"
            />
          </h1>
          <p className="hero__lead">
            Detail-driven software developer with a passion for problem-solving.
            I take ideas from requirements to maintainable web applications —
            APIs, databases, and clear interfaces — and thrive in collaborative,
            fast-moving teams.
          </p>
          <div className="hero__actions">
            <a className="btn btn--light" href="#experience">
              <span className="btn__text" data-label="Experience">
                Experience
              </span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="hero__proof">
            Stockport, UK · JavaScript / TypeScript / Node.js
          </p>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-glow" aria-hidden="true" />
          <img
            src={portrait}
            alt="Kasia Saif"
            className="hero__portrait-img"
            width={640}
            height={800}
          />
        </div>
      </div>
    </header>
  );
}
