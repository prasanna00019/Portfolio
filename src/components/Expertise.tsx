import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
    "System Design",
    "Node.js",
    "Express.js",
    "AdonisJS",
    "PostgreSQL",
    "MongoDB",
    "SQL",
    "REST APIs",
    "Authentication",
    "Performance",
    "Scalable Architecture",
    "Postman"
];

const labelsThird = [
    "MCP",
    "RAG",
    "LLMs",
    "SLMs",
    "Agentic AI",
    "NLP",
    "Hugging Face",
    "Langchain",
    "LangGraph",
    "LlamaIndex",
    "CrewAI",
    "Streamlit",
];

const labelsSystems = [
    "LLM Architecture",
    "Inference",
    "Prompt Design",
    "Evaluation",
    "AI Automation",
    "Python",
    "FastAPI",
    "Research",
];

function Expertise() {
    const expertiseAreas = [
        {
            icon: faReact,
            eyebrow: "Backend focus",
            title: "Backend systems with strong architecture and database instincts",
            description:
                "I work mainly on backend engineering: designing APIs, structuring services, modeling data, and building systems that stay clean as product complexity grows.",
            labels: labelsFirst,
        },
        {
            icon: faPython,
            eyebrow: "AI systems",
            title: "MCP, RAG, LLM, SLM, and agentic workflows built for real use",
            description:
                "My AI work centers on practical intelligence layers: MCP tooling, retrieval pipelines, agent orchestration, fine-tuning workflows, and systems that fit into real products.",
            labels: labelsThird,
        },
        {
            icon: faBolt,
            eyebrow: "Current exploration",
            title: "Going deeper into AI automation and the architecture of language models",
            description:
                "Right now I&apos;m actively working on AI automation while studying LLM architecture more deeply, so I can understand not just how to use these systems, but how they are structured underneath.",
            labels: labelsSystems,
        },
    ];

    const principles = [
        "Strong backend contracts before interface complexity",
        "AI systems designed for usable product workflows",
        "Continuous depth in model architecture and agentic patterns",
    ];

    return (
    <section className="section-shell expertise-shell" id="expertise">
        <div className="section-heading">
            <span className="section-kicker">What I bring</span>
            <h2 className="section-title">Three lanes that define how I build.</h2>
            <p className="section-intro">
                The core combination is backend depth, AI-native implementation, and
                a strong bias toward systems that are useful, explainable, and scalable.
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
