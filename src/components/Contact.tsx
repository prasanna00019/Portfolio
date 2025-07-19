import React from 'react';
import '../assets/styles/Contact.scss'; 

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Me</h1>
        <p>You can contact me here:</p>
        <ul>
          <li>
            <a href="https://github.com/prasanna00019" target="_blank" rel="noopener noreferrer">
              GitHub: github.com/prasanna00019
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/prasanna-h-28b07b27b/" target="_blank" rel="noopener noreferrer">
              LinkedIn: linkedin.com/in/prasanna-h-28b07b27b
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/user8424ju/" target="_blank" rel="noopener noreferrer">
              LeetCode: leetcode.com/u/user8424ju
            </a>
          </li>
          <li>
            <a href="https://instagram.com/prasanna_00019" target="_blank" rel="noopener noreferrer">
              Instagram: instagram.com/prasanna_00019
            </a>
          </li>
          <li>
            <a href="https://x.com/prasanna_00019" target="_blank" rel="noopener noreferrer">
              X (Twitter): x.com/prasanna_00019
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
