import React, { useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";
import Iridescence from "./components/Iridescence/Iridescence";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="main-container">
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />
      <div className="ambient-orb ambient-orb-three" />
      <div className="page-grid" />
      <Iridescence
        color={[0.38, 0.86, 1]}
        speed={0.55}
        amplitude={0.08}
        mouseReact={false}
      />
      <Navigation />
      <main className="page-content">
        <FadeIn
          transitionDuration={700}
          wrapperTag="div"
          className="section-stack"
          childTag="div"
          childClassName="fade-section"
        >
          <Main />
          <Expertise />
          <Timeline />
          <Project />
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}

export default App;
