import { Reveal } from "./Reveal";
import "./Contact.css";

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__panel">
        <Reveal>
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Let’s work together</h2>
          <p className="section-lead">
            Based in Stockport and motivated by the next challenge. Get in touch
            to discuss full-stack or backend roles, or to look through the work
            I’ve shipped.
          </p>
        </Reveal>

        <Reveal className="contact__actions" delay={150}>
          <a className="btn btn--light" href="mailto:kasia.saif@gmail.com">
            <span className="btn__text" data-label="kasia.saif@gmail.com">
              kasia.saif@gmail.com
            </span>
            <span aria-hidden="true">→</span>
          </a>
          <a
            className="btn btn--ghost"
            href="https://www.linkedin.com/in/kasiasaif"
            target="_blank"
            rel="noreferrer"
          >
            <span className="btn__text" data-label="LinkedIn">
              LinkedIn
            </span>
          </a>
          <a
            className="btn btn--ghost"
            href="https://github.com/kasiasaif"
            target="_blank"
            rel="noreferrer"
          >
            <span className="btn__text" data-label="GitHub">GitHub</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
