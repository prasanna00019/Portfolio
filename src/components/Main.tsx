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
          Backend systems,
          <span> agentic AI, and interfaces that refuse to look ordinary.</span>
        </h1>
        <p className="hero-description">
          I build high-signal digital products with a backend-first mindset, then
          wrap them in expressive UI that feels sharp, modern, and alive.
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
            <span>Build focus</span>
            <strong>Scalable APIs, product logic, and platform thinking</strong>
          </article>
          <article className="hero-signal-card">
            <span>AI layer</span>
            <strong>RAG systems, fine-tuning workflows, and agent orchestration</strong>
          </article>
          <article className="hero-signal-card">
            <span>Design energy</span>
            <strong>Editorial gradients, glass surfaces, and motion with intent</strong>
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
            title="Backend Developer • AI Builder"
            handle="prasanna00019"
            status="Available for bold builds"
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
