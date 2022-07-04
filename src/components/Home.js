import React from "react";

import Main from "./Main";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Articles from "./Articles";
import Contact from "./Contact";
import Footer from "./Footer";

function Home({isDarkMode, theme}) {
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
    <div>
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

export default Home;
