import k from "../assets/images/fit-nest.png";
import crypto from "../assets/images/crypto.png";
import finetuning from "../assets/images/fine-tuning.png";
import rag from "../assets/images/rag.png";
import aiAgents from "../assets/images/ai-agents.png";
import moodmaps from "../assets/images/moodmaps.png";
import "../assets/styles/Project.scss";

const featuredProjects = [
  {
    title: "Full Stack Chat App",
    category: "MERN Product",
    href: "https://github.com/prasanna00019/CHAT-APP-FULL-STACK",
    image:
      "https://raw.githubusercontent.com/prasanna00019/CHAT-APP-FULL-STACK/main/frontend/src/assets/Screenshot%202024-11-24%20193155.png",
    description:
      "Feature-rich one-to-one and group messaging with stories, designed to deliver a WhatsApp-inspired full-stack experience.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Full Stack LeetCode Clone",
    category: "Developer Platform",
    href: "https://github.com/prasanna00019/LEETCODE-CLONE-FULL-STACK",
    image:
      "https://raw.githubusercontent.com/prasanna00019/LEETCODE-CLONE-FULL-STACK/main/frontend/src/assets/leetcode-ss-1.png",
    description:
      "A coding practice platform focused on interactive problem solving, performance tracking, and a familiar competitive programming flow.",
    tags: ["MERN", "Coding Platform", "UI/UX"],
  },
  {
    title: "AI Agents Hub",
    category: "Agentic AI",
    href: "https://github.com/prasanna00019/AI-Agents-Hub",
    image: aiAgents,
    description:
      "A collection of agentic systems and experiments exploring tools, memory, reasoning, and practical task execution with LLM-based workflows.",
    tags: ["Agents", "Tools", "Memory"],
  },
  {
    title: "RAG Playground",
    category: "Retrieval Systems",
    href: "https://github.com/prasanna00019/RAG-Playground",
    image: rag,
    description:
      "A curated lab for retrieval-augmented generation patterns, from core foundations to routing and agentic reasoning experiments.",
    tags: ["RAG", "Prompt Routing", "LlamaIndex"],
  },
  {
    title: "Fine Tuning LLMs",
    category: "Model Adaptation",
    href: "https://github.com/prasanna00019/Fine-Tuning-LLMs",
    image: finetuning,
    description:
      "Hands-on fine-tuning experiments across language models, beginning with GPT-2 and expanding toward broader adaptation workflows.",
    tags: ["Fine-Tuning", "Transformers", "Experiments"],
  },
  {
    title: "Crypto Toolkit Scratch",
    category: "Foundations",
    href: "https://github.com/prasanna00019/Crypto-Toolkit-Scratch",
    image: crypto,
    description:
      "A repository of cryptographic algorithms implemented from scratch in Python, focused on encryption, hashing, and learning by rebuilding.",
    tags: ["Python", "Cryptography", "From Scratch"],
  },
];

const shippedProjects = [
  {
    title: "OneSeen",
    category: "Hackathon Build",
    href: "https://github.com/prasanna00019/OneSeen",
    image:
      "https://raw.githubusercontent.com/prasanna00019/OneSeen/master/frontend/src/assets/demo.png",
    description:
      "An anonymous platform for confessions and self-destructing messages with privacy-first behavior baked into the interaction model.",
    tags: ["Privacy", "Hackathon", "Messaging"],
  },
  {
    title: "Mood Maps",
    category: "Wellness Product",
    href: "https://github.com/prasanna00019/HackGenesis-25",
    image: moodmaps,
    description:
      "A project exploring how yoga, meditation, and spirituality can support inner calm, self-discovery, and emotional wellbeing.",
    tags: ["Hackathon", "Wellness", "Storytelling"],
  },
  {
    title: "Fit-Nest",
    category: "Internship Product",
    href: "https://www.fit-nest.in/",
    image: k,
    description:
      "A gym operations and engagement platform with admin workflows, trainer discovery, revenue features, and member-facing services.",
    tags: ["Operations", "Portal", "Deployment"],
  },
];

function Project() {
  const projectGroups = [
    { label: "Featured builds", items: featuredProjects },
    { label: "Hackathon and shipped work", items: shippedProjects },
  ];

  return (
    <section className="section-shell projects-shell" id="projects">
      <div className="section-heading">
        <span className="section-kicker">Projects</span>
        <h2 className="section-title">
          A portfolio of systems, experiments, and shipped product work.
        </h2>
        <p className="section-intro">
          From backend-heavy platforms to agentic AI explorations, these are the
          builds that best represent how I think and execute.
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
                    <img src={project.image} className="zoom" alt={project.title} />
                  </div>
                  <div className="project-body">
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
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
