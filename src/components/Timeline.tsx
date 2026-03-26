import React from "react";
import "../assets/styles/Timeline.scss";

const experiences = [
  {
    period: "May 2025 - Present",
    company: "Hausvalley.com",
    role: "Backend & AI Engineering Intern",
    summary:
      "Working on backend development, chatbot development, API workflows, and user-centered product improvements.",
    tags: ["Backend Development", "Chatbot Development", "API Development", "User Experience"],
  },
  {
    period: "Dec 2024 - Jan 2025",
    company: "AIntelligence",
    role: "Full Stack Intern",
    summary:
      "Contributed across frontend, backend, and team execution, with a strong focus on product flow and practical delivery.",
    tags: ["Frontend Development", "Backend Development", "User Experience", "Team Leading"],
  },
];

function Timeline() {
  return (
    <section className="section-shell timeline-shell" id="history">
      <div className="timeline-grid">
        <div className="timeline-copy">
          <span className="section-kicker">Experience</span>
          <h2 className="section-title">A short timeline, built around real shipping work.</h2>
          <p className="section-intro">
            My experience leans practical: backend systems, AI-oriented features,
            product collaboration, and delivery in fast-moving environments.
          </p>
        </div>

        <div className="timeline-list">
          {experiences.map((experience) => (
            <article className="timeline-item" key={`${experience.company}-${experience.period}`}>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-period">{experience.period}</span>
                <h3>{experience.role}</h3>
                <h4>{experience.company}</h4>
                <p>{experience.summary}</p>
                <div className="timeline-tags">
                  {experience.tags.map((tag) => (
                    <span className="timeline-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
