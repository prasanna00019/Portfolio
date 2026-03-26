import k from "../assets/images/fit-nest.png";
import crypto from "../assets/images/crypto.png";
import finetuning from "../assets/images/fine-tuning.png";
import rag from "../assets/images/rag.png";
import aiAgents from "../assets/images/ai-agents.png";
import moodmaps from "../assets/images/moodmaps.png";
import "../assets/styles/Project.scss";

interface ProjectItem {
  title: string;
  kind: string;
  href: string;
  image?: string;
  placeholder?: string;
  description: string;
  tags: string[];
}

const aiProjects: ProjectItem[] = [
  {
    title: "IDE Memory MCP",
    kind: "Cross-IDE memory layer",
    href: "https://github.com/prasanna00019/MCP-ToolHub/tree/main/IDE-Memory-MCP",
    placeholder: "Add project image",
    description:
      "A persistent memory layer for AI coding agents that keeps project context available across IDEs with section-based storage, smart warnings, and context-optimized reads.",
    tags: ["MCP", "AI Agents", "Developer Tools"],
  },
  {
    title: "PostgreSQL MCP",
    kind: "Database intelligence server",
    href: "https://github.com/prasanna00019/MCP-ToolHub/tree/main/PostgreSQL-MCP",
    placeholder: "Add project image",
    description:
      "An MCP server that combines schema analysis, AI-assisted explanation, CRUD operations, transactions, monitoring, and diagram generation for PostgreSQL databases.",
    tags: ["PostgreSQL", "MCP", "Automation"],
  },
  {
    title: "ContentPilot",
    kind: "Agentic content platform",
    href: "https://github.com/prasanna00019/AI-Agents-Hub/tree/main/ContentGeneration",
    placeholder: "Add project image",
    description:
      "A local-first multi-agent platform for planning, researching, generating, formatting, and reviewing social content with LangGraph, advanced RAG, and memory-aware channel workflows.",
    tags: ["LangGraph", "RAG", "Agentic AI"],
  },
  {
    title: "Video2Notes Agent",
    kind: "Video intelligence workflow",
    href: "https://github.com/prasanna00019/AI-Agents-Hub/tree/main/Video2Notes_Agent",
    placeholder: "Add project image",
    description:
      "A privacy-friendly system that turns long videos, uploads, and playlist items into structured notes, searchable knowledge, optional study assets, and RAG-enabled follow-up chat.",
    tags: ["Whisper", "RAG", "Notes"],
  },
  {
    title: "AI Agents Hub",
    kind: "Agent collection",
    href: "https://github.com/prasanna00019/AI-Agents-Hub",
    image: aiAgents,
    description:
      "A repository of agentic systems and experiments exploring tools, memory, orchestration, and practical reasoning workflows with LLM-based systems.",
    tags: ["Agents", "Tools", "Memory"],
  },
  {
    title: "RAG Playground",
    kind: "Retrieval systems",
    href: "https://github.com/prasanna00019/RAG-Playground",
    image: rag,
    description:
      "A curated lab for retrieval-augmented generation patterns, from core foundations to routing and agentic reasoning experiments.",
    tags: ["RAG", "Prompt Routing", "LlamaIndex"],
  },
  {
    title: "Fine Tuning LLMs",
    kind: "Model adaptation",
    href: "https://github.com/prasanna00019/Fine-Tuning-LLMs",
    image: finetuning,
    description:
      "Hands-on fine-tuning experiments across language models, beginning with GPT-2 and expanding toward broader adaptation workflows.",
    tags: ["Fine-Tuning", "Transformers", "Experiments"],
  },
];

const fullStackProjects: ProjectItem[] = [
  {
    title: "Full Stack Chat App",
    kind: "MERN product",
    href: "https://github.com/prasanna00019/CHAT-APP-FULL-STACK",
    image:
      "https://raw.githubusercontent.com/prasanna00019/CHAT-APP-FULL-STACK/main/frontend/src/assets/Screenshot%202024-11-24%20193155.png",
    description:
      "Feature-rich one-to-one and group messaging with stories, designed to deliver a WhatsApp-inspired full-stack experience.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Full Stack LeetCode Clone",
    kind: "Developer platform",
    href: "https://github.com/prasanna00019/LEETCODE-CLONE-FULL-STACK",
    image:
      "https://raw.githubusercontent.com/prasanna00019/LEETCODE-CLONE-FULL-STACK/main/frontend/src/assets/leetcode-ss-1.png",
    description:
      "A coding practice platform focused on interactive problem solving, performance tracking, and a familiar competitive programming flow.",
    tags: ["MERN", "Coding Platform", "UI/UX"],
  },
];

const cryptoProjects: ProjectItem[] = [
  {
    title: "Crypto Toolkit Scratch",
    kind: "Foundations from scratch",
    href: "https://github.com/prasanna00019/Crypto-Toolkit-Scratch",
    image: crypto,
    description:
      "A repository of cryptographic algorithms implemented from scratch in Python, focused on encryption, hashing, and learning by rebuilding.",
    tags: ["Python", "Cryptography", "From Scratch"],
  },
];

const hackathonProjects: ProjectItem[] = [
  {
    title: "OneSeen",
    kind: "Hackathon build",
    href: "https://github.com/prasanna00019/OneSeen",
    image:
      "https://raw.githubusercontent.com/prasanna00019/OneSeen/master/frontend/src/assets/demo.png",
    description:
      "An anonymous platform for confessions and self-destructing messages with privacy-first behavior baked into the interaction model.",
    tags: ["Privacy", "Hackathon", "Messaging"],
  },
  {
    title: "Mood Maps",
    kind: "Wellness product",
    href: "https://github.com/prasanna00019/HackGenesis-25",
    image: moodmaps,
    description:
      "A project exploring how yoga, meditation, and spirituality can support inner calm, self-discovery, and emotional wellbeing.",
    tags: ["Hackathon", "Wellness", "Storytelling"],
  },
];

const internshipProjects: ProjectItem[] = [
  {
    title: "Fit-Nest",
    kind: "Internship product",
    href: "https://www.fit-nest.in/",
    image: k,
    description:
      "A gym operations and engagement platform with admin workflows, trainer discovery, revenue features, and member-facing services.",
    tags: ["Operations", "Portal", "Deployment"],
  },
];

const researchProjects: ProjectItem[] = [
  {
    title: "Optimization Methods",
    kind: "Engineering algorithms",
    href: "https://github.com/prasanna00019/Optimization-Methods",
    placeholder: "Add project image",
    description:
      "A collection of optimization algorithms implemented in Python for engineering applications, covering linear, nonlinear, constrained, gradient-based, and population-based methods.",
    tags: ["Python", "Optimization", "Engineering"],
  },
];

function Project() {
  const projectGroups = [
    { label: "AI Projects", items: aiProjects },
    { label: "Full Stack Projects", items: fullStackProjects },
    { label: "Crypto Project", items: cryptoProjects },
    { label: "Hackathon Projects", items: hackathonProjects },
    { label: "Internship Projects", items: internshipProjects },
    { label: "Engineering & Research", items: researchProjects },
  ];

  return (
    <section className="section-shell projects-shell" id="projects">
      <div className="section-heading">
        <span className="section-kicker">Projects</span>
        <h2 className="section-title">
          Categorized around the work I actually do most: backend, AI, and real systems.
        </h2>
        <p className="section-intro">
          These projects are grouped by problem space so it&apos;s easier to scan the
          AI work, full-stack builds, crypto foundations, hackathon output, and
          internship delivery separately.
        </p>
      </div>

      <div className="project-groups">
        {projectGroups.map((group) => (
          <div className="project-group" key={group.label}>
            <div className="project-group-header">
              <span>{group.label}</span>
            </div>
            <div className="projects-grid">
              {group.items.map((project) => (
                <a
                  className="project"
                  href={project.href}
                  key={project.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="project-media">
                    {project.image ? (
                      <img src={project.image} className="zoom" alt={project.title} />
                    ) : (
                      <div className="project-placeholder">
                        <span>{project.placeholder ?? "Add image"}</span>
                      </div>
                    )}
                  </div>
                  <div className="project-body">
                    <div className="project-meta">
                      <span className="project-category">{project.kind}</span>
                      <span className="project-link">Open</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
