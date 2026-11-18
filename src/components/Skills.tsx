import { Reveal } from "./Reveal";
import "./Skills.css";

const skills = [
  {
    title: "Languages & runtime",
    text: "JavaScript, TypeScript, and Node.js day to day — with SQL / NoSQL, 4D, and grounding in Java, C#, and Python from professional courses and delivery work.",
  },
  {
    title: "Frontend",
    text: "React, HTML, and CSS for responsive business interfaces, CMS / CRM screens, and public-facing sites that stay clear and usable.",
  },
  {
    title: "Backend & data",
    text: "REST APIs, third-party integrations, relational and NoSQL databases, data modelling, authentication, and application-level data management.",
  },
  {
    title: "Delivery",
    text: "Git, Agile collaboration, testing / QA, Linux, deployment and environment configuration, plus AI-assisted tooling to move faster without cutting quality.",
  },
];

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <Reveal>
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">Technical skills</h2>
          <p className="section-lead">
            A practical toolkit shaped by full-stack roles, database development,
            and continuous learning — ready to apply on real product work.
          </p>
        </Reveal>

        <ul className="skills__grid">
          {skills.map((skill, index) => (
            <Reveal
              as="li"
              key={skill.title}
              className="skills__item"
              delay={100 + index * 90}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
