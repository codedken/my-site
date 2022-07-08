import { FaPhoneAlt } from "react-icons/fa";

import {
  IoHomeOutline,
  IoBookOutline,
  IoInformationCircleOutline,
  IoConstructOutline,
  IoCallOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";

import "../styles/NavBar.css";
import Logo from "../images/logo.png";
import CodedkenLogo from "../images/logo192.png";
import MobileNav from "./MobileNav";

function NavBar({ toggle, isDarkMode, theme, isMenuOpen, toggleMenu }) {
  const aColor = isDarkMode ? theme.dark.textColor : theme.light.textLightColor;
  const linkColor = {
    color: isDarkMode ? theme.dark.textColor : theme.light.textColor,
    "--after": isDarkMode ? theme.dark.textColor : theme.light.textColor,
  };

  const allList = document.querySelectorAll(".menu--list");

  function activeLink() {
    allList.forEach((list) => {
      list.classList.remove("active");
      this.classList.add("active");
    });
  }
  allList.forEach((list) => {
    list.addEventListener("click", activeLink);
  });

  const links = [
    {
      name: "Home",
      href: "#home",
      icon: IoHomeOutline,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: IoDocumentTextOutline,
    },
    {
      name: "Skills",
      href: "#skills",
      icon: IoConstructOutline,
    },
    {
      name: "Articles",
      href: "#articles",
      icon: IoBookOutline,
    },
    {
      name: "About",
      href: "#about",
      icon: IoInformationCircleOutline,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: IoCallOutline,
    },
  ];
  const allLinks = links.map((link) => (
    <li>
      <a style={{ "--acolor": aColor }} onClick={toggleMenu} href={link.href}>
        {<link.icon />}
        {link.name}
      </a>
    </li>
  ));

  return (
    <nav
      className="nav--bar"
      style={{
        background: isDarkMode ? theme.dark.bg : theme.light.bg,
        transition: "0.5s",
      }}
    >
      <img src={CodedkenLogo} alt="codedken--logo" className="codedken--logo" />
      <img src={Logo} alt="logo" className="logo" />
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
        allLinks={allLinks}
      />
    </nav>
  );
}

export default NavBar;
