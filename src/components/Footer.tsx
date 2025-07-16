import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/prasanna00019" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/prasanna-h-28b07b27b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio website designed & built by <a href="https://github.com/prasanna00019" target="_blank" rel="noreferrer">Prasanna H</a> </p>
    </footer>
  );
}

export default Footer;