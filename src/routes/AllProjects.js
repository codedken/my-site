import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import {IoHomeOutline, IoBookOutline} from "react-icons/io5";

import { FaLongArrowAltRight, FaGithub, FaGooglePlay } from "react-icons/fa";

import Shape from "../components/Shape";
import MobileNav from "../components/MobileNav";
import ProjectModel from "../models/ProjectModel";
import "../styles/Allprojects.css";
import Logo from "../images/logo192.png";
import Footer from "../components/Footer";

function AllProjects({ isDarkMode, theme, toggle, toggleMenu, isMenuOpen }) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const links = [
    {
      name: "Home",
      href: "/",
      icon: IoHomeOutline,
    },
    {
      name: "Articles",
      href: "/articles",
      icon: IoBookOutline,
    },
  ];

  const aColor = isDarkMode ? theme.dark.textColor : theme.light.textLightColor;

  const allLinks = links.map(link => <li>
    <Link className="a" style={{ "--acolor": aColor }} onClick={toggleMenu} to={link.href}>
      {<link.icon />}
      {link.name}
    </Link>
  </li>);
  const linkColor = {
    color: isDarkMode ? theme.dark.textColor : theme.light.textColor,
    "--after": isDarkMode ? theme.dark.textColor : theme.light.textColor,
  };
  const allProjects = ProjectModel.map((project) => (
    <Shape
      key={project.id}
      att={{
        cl: "project--card",
        bg: isDarkMode ? theme.dark.primary : theme.light.primary,
        child: (
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div style={{ position: "absolute", padding: "30px 0 16px 16px" }}>
              <h2
                style={{ color: project.titleColor }}
                className="project--title"
              >
                {project.title}
              </h2>
              <p
                className="project-brief-desc"
                style={{
                  color: isDarkMode
                    ? theme.dark.textColor
                    : theme.light.textLightColor,
                }}
              >
                {project.desc}
              </p>
            </div>

            <Shape
              att={{
                cl: "github--link",
                bg: isDarkMode ? theme.dark.primary : theme.light.primary,
                child: (
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <FaGithub
                      style={{
                        color: isDarkMode ? "#ffffff" : theme.light.textColor,
                        opacity: ".7",
                        width: "1.7rem",
                        height: "1.7rem",
                      }}
                    />
                  </a>
                ),
              }}
            />
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <Shape
                att={{
                  cl: "project--box",
                  bg: isDarkMode ? theme.dark.primary : theme.light.bg,
                  child: (
                    <div className="project--btn">
                      {project.btnText === "" ? (
                        <FaGooglePlay
                          style={{
                            fontSize: "1.5rem",
                            color: isDarkMode
                              ? theme.dark.textColor
                              : theme.light.textLightColor,
                          }}
                        />
                      ) : (
                        <h6
                          style={{
                            color: isDarkMode
                              ? theme.dark.textColor
                              : theme.light.textLightColor,
                          }}
                          className="project-btn-text"
                        >
                          {project.btnText}
                        </h6>
                      )}
                      {project.btnText && (
                        <FaLongArrowAltRight
                          className="project-btn-arrow"
                          style={{
                            color: isDarkMode
                              ? theme.dark.textColor
                              : theme.light.textLightColor,
                          }}
                        />
                      )}
                    </div>
                  ),
                }}
              />
            </a>
          </div>
        ),
      }}
    />
  ));
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
    <div className="allprojects">
      <div
        className="header"
        style={{ "--header-bg": isDarkMode ? theme.dark.bg : theme.light.bg }}
      >
        <img src={Logo} alt="codedken logo" className="nav--logo" />
        <h2 className="leading--title">All Projects</h2>
        <nav className="allprojects--nav">
          <Link to="/" className="Link">
            <span style={linkColor} className="link">
              Home
            </span>
          </Link>
          <Link to="/articles" className="Link">
            <span style={linkColor} className="link">
              Articles
            </span>
          </Link>
        </nav>
        <div
          style={{
            "--before": isDarkMode ? theme.dark.primary : theme.dark.textColor,
            background: isDarkMode ? theme.dark.textColor : theme.dark.primary,
          }}
          id="toggleElement"
          className={`toggleBtn ${isDarkMode && "active"}`}
          onClick={toggle}
        ></div>

        <MobileNav
          isDarkMode={isDarkMode}
          theme={theme}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          allLinks = {allLinks}
        />
      </div>
      <section className="allprojects--section">
        <div className="projects">{allProjects}</div>
      </section>
      {thematicRule}
      <Footer isDarkMode={isDarkMode} theme={theme} />
    </div>
  );
}

export default AllProjects;
