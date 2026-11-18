import { Reveal } from "./Reveal";
import "./Experience.css";

const roles = [
  {
    period: "Jul 2024 — Sep 2026",
    title: "Full Stack Developer",
    company: "Pecometer Software Limited",
    points: [
      "Delivered full-stack bespoke business software, web applications, and data-driven platforms for clients.",
      "Built and enhanced scalable platforms, internal tools, and third-party integrations across front end and back end.",
      "Designed REST APIs and relational / NoSQL data models; implemented authentication, authorisation, and validation.",
      "Diagnosed production issues, refactored for performance and maintainability, and supported deployment across environments.",
      "Collaborated in Agile teams with developers, testers, and designers — using Git, code reviews, and AI-assisted tooling to ship reliably.",
    ],
  },
  {
    period: "Aug 2022 — May 2024",
    title: "Web / Database Developer",
    company: "Tailored Ltd",
    points: [
      "Developed web and database features with 4D, JavaScript, SQL, HTML, and CSS.",
      "Contributed across the delivery cycle — development, testing, client meetings, and Agile practice.",
      "Supported project management and continuous improvement of live systems.",
    ],
  },
];

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <Reveal>
          <span className="section-kicker">Experience</span>
          <h2 className="section-title">Professional experience</h2>
          <p className="section-lead">
            Hands-on delivery of bespoke business software, data-driven
            platforms, and reliable web products — from first requirements to
            production support.
          </p>
        </Reveal>

        <ul className="experience__list">
          {roles.map((role, index) => (
            <Reveal
              as="li"
              key={role.company}
              className="experience__item"
              delay={100 + index * 120}
            >
              <div className="experience__meta">
                <span>{role.period}</span>
                <em>{role.company}</em>
              </div>
              <div className="experience__body">
                <h3>{role.title}</h3>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
