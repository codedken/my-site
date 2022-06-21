import { FaPhoneAlt } from "react-icons/fa";

import "../styles/NavBar.css";
import MobileNav from "./MobileNav";

function NavBar({ toggle, isDarkMode, theme, isMenuOpen, toggleMenu }) {
  const linkColor = {
    color: isDarkMode ? theme.dark.textColor : theme.light.textColor,
    "--after": isDarkMode ? theme.dark.textColor : theme.light.textColor,
  };

  const allList = document.querySelectorAll(".menu--list");

  function activeLink () {
    allList.forEach((list) => {
      list.classList.remove("active");
      this.classList.add("active");
    });
  };
  allList.forEach(list => {
    list.addEventListener("click", activeLink);
  });

  return (
    <nav
      className="nav--bar"
      style={{
        background: isDarkMode ? theme.dark.bg : theme.light.bg,
        transition: "0.5s",
      }}
    >
      <h1 className="nav--title">CodedKen</h1>
      <ul className="nav--menu">
        <li className="menu--list active">
          <a style={linkColor} className="menu--item" href="#home">
            Home
          </a>
        </li>

        <li className="menu--list">
          <a style={linkColor} className="menu--item" href="#projects">
            Projects
          </a>
        </li>

        <li className="menu--list">
          <a style={linkColor} className="menu--item" href="#skills">
            Skills
          </a>
        </li>

        <li className="menu--list">
          <a style={linkColor} className="menu--item" href="#articles">
            Articles
          </a>
        </li>

        <li className="menu--list">
          <a style={linkColor} className="menu--item" href="#about">
            About
          </a>
        </li>
        <div className="indicator"></div>
      </ul>
      <div
        style={{
          "--before": isDarkMode ? theme.dark.primary : theme.dark.textColor,
          background: isDarkMode ? theme.dark.textColor : theme.dark.primary,
        }}
        id="toggleElement"
        className={`toggleBtn ${isDarkMode && "active"}`}
        onClick={toggle}
      ></div>
      <a href="#contact" style={{ textDecoration: "none" }}>
        <button className="nav-contact-btn">
          <FaPhoneAlt />
          <p className="nav-contact-btn-text">Contact</p>
        </button>
      </a>

      <MobileNav
        isDarkMode={isDarkMode}
        theme={theme}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </nav>
  );
}

export default NavBar;
