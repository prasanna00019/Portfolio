import React from "react";
import {
  Code2,
  Github,
  Instagram,
  Linkedin,
  MoveUpRight,
  Twitter,
} from "lucide-react";
import "../assets/styles/Contact.scss";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/prasanna00019",
    href: "https://github.com/prasanna00019",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/prasanna-h-28b07b27b",
    href: "https://www.linkedin.com/in/prasanna-h-28b07b27b/",
    icon: Linkedin,
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/user8424ju",
    href: "https://leetcode.com/u/user8424ju/",
    icon: Code2,
  },
  {
    label: "Instagram",
    value: "instagram.com/prasanna_00019",
    href: "https://instagram.com/prasanna_00019",
    icon: Instagram,
  },
  {
    label: "X / Twitter",
    value: "x.com/prasanna_00019",
    href: "https://x.com/prasanna_00019",
    icon: Twitter,
  },
];

function Contact() {
  return (
    <section className="section-shell contact-shell" id="contact">
      <div className="contact-grid">
        <div className="contact-copy">
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">If the product needs brains and visual attitude, I&apos;m in.</h2>
          <p className="section-intro">
            Reach out for backend-heavy builds, AI features,
            or collaborative experiments that need engineering depth.
          </p>
       
        </div>

        <div className="contact-list">
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                className="contact-item"
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-item-left">
                  <span className="contact-icon">
                    <Icon size={18} />
                  </span>
                  <div className="contact-text">
                    <span className="contact-label">{link.label}</span>
                    <span className="contact-value">{link.value}</span>
                  </div>
                </div>
                <MoveUpRight className="contact-arrow" size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
