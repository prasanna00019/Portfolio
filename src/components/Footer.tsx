import React from "react";
import { Github, Linkedin } from "lucide-react";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-chip">PH</span>
          <div className="footer-copy">
            <strong>Prasanna H</strong>
            <p>Designed to feel louder, sharper, and more unmistakable.</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="https://github.com/prasanna00019" target="_blank" rel="noreferrer">
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/prasanna-h-28b07b27b/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
