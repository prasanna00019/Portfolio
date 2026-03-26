import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
    "React",
    "Next JS",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express.js",
    "AdonisJS",
    "MongoDB",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsThird = [
    "LLMs",
    "NLP",
    "Hugging Face",
    "Langchain",
    "LangGraph",
    "LlamaIndex",
    "CrewAI",
    "Streamlit",
];

const labelsSystems = [
    "System Design",
    "REST APIs",
    "Authentication",
    "Developer Experience",
    "Performance",
    "Deployment",
    "GitHub Actions",
    "MCP",
];

function Expertise() {
    const expertiseAreas = [
        {
            icon: faReact,
            eyebrow: "Full stack",
            title: "Product engineering with a backend-first center of gravity",
            description:
                "I build end-to-end applications with clean backend contracts, practical frontend architecture, and enough polish to make the experience feel premium.",
            labels: labelsFirst,
        },
        {
            icon: faPython,
            eyebrow: "AI systems",
            title: "LLM features that move beyond demos into usable workflows",
            description:
                "My AI work focuses on retrieval, orchestration, fine-tuning, and agentic systems that can plug into real products rather than living as isolated experiments.",
            labels: labelsThird,
        },
        {
            icon: faBolt,
            eyebrow: "Execution",
            title: "Shipping mindset with strong system and product instincts",
            description:
                "I like building fast, but not loosely. That means scalable APIs, sensible trade-offs, observability, and interfaces that still feel intentional under pressure.",
            labels: labelsSystems,
        },
    ];

    const principles = [
        "Strong backend contracts before interface complexity",
        "AI features designed for actual user flow",
        "Visual systems that feel distinctive, not templated",
    ];

    return (
    <section className="section-shell expertise-shell" id="expertise">
        <div className="section-heading">
            <span className="section-kicker">What I bring</span>
            <h2 className="section-title">Three lanes that define how I build.</h2>
            <p className="section-intro">
                The sweet spot is combining product thinking, backend depth, and
                AI-native experimentation into interfaces that feel current.
            </p>
        </div>

        <div className="skills-container">
            <div className="skills-grid">
                {expertiseAreas.map((area) => (
                    <article className="skill" key={area.title}>
                        <span className="skill-eyebrow">{area.eyebrow}</span>
                        <FontAwesomeIcon icon={area.icon} size="2x"/>
                        <h3>{area.title}</h3>
                        <p>{area.description}</p>
                        <div className="flex-chips">
                            {area.labels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            <div className="expertise-principles">
                {principles.map((principle) => (
                    <div className="principle-card" key={principle}>
                        {principle}
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}

export default Expertise;
