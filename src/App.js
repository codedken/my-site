import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import AllArticles from "./routes/AllArticles";
import AllProjects from "./routes/AllProjects";
import theme from "./constants/colors";
import Home from "./components/Home";

function App() {
  const [isDarkMode, setIsDartMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => setIsDartMode((prevState) => !prevState);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
  const bodyTheme = {
    background: isDarkMode ? theme.dark.primary : theme.light.primary,
    transition: "0.5s",
  };

  return (
    <div className="body" style={bodyTheme}>
      <div
        className="blur--bg"
        onClick={toggleMenu}
        style={{
          display: isMenuOpen ? "block" : "none",
        }}
      ></div>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isDarkMode={isDarkMode}
                theme={theme}
                toggleTheme={toggleTheme}
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
              />
            }
          />
          <Route
            path="/articles"
            element={
              <AllArticles
                isDarkMode={isDarkMode}
                theme={theme}
                toggle={toggleTheme}
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <AllProjects
                isDarkMode={isDarkMode}
                theme={theme}
                toggle={toggleTheme}
                toggleMenu ={toggleMenu}
                isMenuOpen = {isMenuOpen}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
