import React, { useEffect, useState } from "react";
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
import { THEME_STORAGE_KEY, THEME_VISUALS, type ThemeName } from "./theme";

function App() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof window === "undefined") {
      return "neon";
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    return storedTheme === "ember" ? "ember" : "neon";
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const themeVisuals = THEME_VISUALS[theme];

  return (
    <div className="main-container">
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />
      <div className="ambient-orb ambient-orb-three" />
      <div className="page-grid" />
      <Iridescence
        color={themeVisuals.iridescenceColor}
        speed={themeVisuals.iridescenceSpeed}
        amplitude={themeVisuals.iridescenceAmplitude}
        mouseReact={false}
      />
      <Navigation onThemeChange={setTheme} theme={theme} />
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
