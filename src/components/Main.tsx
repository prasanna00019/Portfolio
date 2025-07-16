import '../assets/styles/Main.scss';
import ProfileCard from '../components/ProfileCard/ProfileCard'
// import ProfileCard2 from '../components/ProfileCard2';
function Main() {

  return (
    <div className="container">
      <ProfileCard avatarUrl="https://avatars.githubusercontent.com/u/159623027?v=4" />
      {/* <ProfileCard2  /> */}
      {/* <div className="about-section">
        <div className="image-wrapper">
          <img src="https://drive.google.com/file/d/1STsaSxtb7VdoToPknL6a6ZRzRAAJWzu6/view?usp=drive_link" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/prasanna00019" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/prasanna-h-28b07b27b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Yuji Sato</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Main;