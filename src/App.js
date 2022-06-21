import { useState } from "react";

import "./App.css";
import theme from "./constants/colors";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDartMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => setIsDartMode((prevState) => !prevState);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
  const bodyTheme = {
    background: isDarkMode ? theme.dark.primary : theme.light.primary,
    transition: "0.5s",
  };
  const thematicRule = (
    <hr
      style={{
        width: "100%",
        border: `1px solid ${
          isDarkMode ? "#050004" : theme.light.textLightColor
        }`,
        alignSelf: "center",
      }}
    />
  );

  return (
    <div className="body" style={bodyTheme}>
      <div
        className="blur--bg"
        onClick={toggleMenu}
        style={{
          display: isMenuOpen ? "block" : "none",
        }}
      ></div>
      <NavBar
        toggle={toggleTheme}
        isDarkMode={isDarkMode}
        theme={theme}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <Main theme={theme} isDarkMode={isDarkMode} />
      <div className="other--section">
        <About theme={theme} isDarkMode={isDarkMode} />
        {thematicRule}
        <Skills theme={theme} isDarkMode={isDarkMode} />
        {thematicRule}
        <Projects theme={theme} isDarkMode={isDarkMode} />
        {thematicRule}
        <Articles theme={theme} isDarkMode={isDarkMode} />
        {thematicRule}
        <Contact theme={theme} isDarkMode={isDarkMode} />
        {thematicRule}
        <Footer theme={theme} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
