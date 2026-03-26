import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import "../assets/styles/Main.scss";
import ProfileCard from "../components/ProfileCard/ProfileCard";

function Main() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="section-shell hero-shell" id="home">
      <div className="hero-copy">
        <span className="section-kicker">
          <Sparkles size={16} />
          Neon editorial build
        </span>
        <h1 className="hero-title">
          Backend architecture,
          <span> MCP-native AI systems, and products built to go deep.</span>
        </h1>
        <p className="hero-description">
          My strongest lane is backend engineering: system design, APIs, data flow,
          and product logic. Alongside that, I&apos;m actively building in AI with
          Agentic AI, RAG, MCP, LLMs, and SLMs, while going deeper into the
          architecture of modern language models.
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#projects">
            Explore projects
            <ArrowRight size={18} />
          </a>
          <button className="button-secondary" onClick={scrollToContact} type="button">
            Let&apos;s collaborate
          </button>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/prasanna00019" target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/prasanna-h-28b07b27b/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>

        <div className="hero-signals">
          <article className="hero-signal-card">
            <span>Primary lane</span>
            <strong>Backend systems, APIs, databases, and system design thinking</strong>
          </article>
          <article className="hero-signal-card">
            <span>Current work</span>
            <strong>Agentic AI, RAG pipelines, MCP tooling, LLM and SLM workflows</strong>
          </article>
          <article className="hero-signal-card">
            <span>Deep focus</span>
            <strong>Exploring LLM architecture, orchestration patterns, and AI automation</strong>
          </article>
        </div>
      </div>

      <div className="hero-card-column">
        <div className="hero-card-frame">
          <div className="hero-card-caption">
            <span>Live profile signal</span>
            <p>Interactive card tuned to the new neon palette</p>
          </div>
          <ProfileCard
            avatarUrl="https://avatars.githubusercontent.com/u/159623027?v=4"
            name="Prasanna H"
            title="Backend Systems • AI Automation"
            handle="prasanna00019"
            status="Working on MCP, RAG, and agentic workflows"
            contactText="Contact"
            onContactClick={scrollToContact}
            behindGradient="radial-gradient(circle at 20% 20%, rgba(0, 247, 255, 0.95) 0%, rgba(0, 247, 255, 0) 42%), radial-gradient(circle at 80% 18%, rgba(255, 84, 143, 0.88) 0%, rgba(255, 84, 143, 0) 40%), radial-gradient(circle at 50% 100%, rgba(186, 255, 60, 0.82) 0%, rgba(186, 255, 60, 0) 35%), conic-gradient(from 180deg at 50% 50%, #ff5f6d 0deg, #ffc371 50deg, #00f7ff 135deg, #8d5bff 240deg, #ff5f6d 360deg)"
            innerGradient="linear-gradient(180deg, rgba(9, 16, 37, 0.22) 0%, rgba(5, 9, 24, 0.92) 100%)"
          />
        </div>
      </div>
    </section>
  );
}

export default Main;
