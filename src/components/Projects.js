import React from "react";

import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import ProjectModel from "../models/ProjectModel";
import "../styles/Projects.css";
import Shape from "../components/Shape";

function Projects({ theme, isDarkMode }) {
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

                      <FaLongArrowAltRight
                        className="project-btn-arrow"
                        style={{
                          color: isDarkMode
                            ? theme.dark.textColor
                            : theme.light.textLightColor,
                        }}
                      />
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

  return (
    <section id="projects" className="projects--section">
      <div className="header">
        <h2
          style={{
            color: isDarkMode
              ? theme.dark.textColor
              : theme.light.textLightColor,
          }}
          className="leading--title"
        >
          My Projects
        </h2>
        <a href="./index">Click to see all projects</a>
      </div>
      <div className="projects">{allProjects}</div>
    </section>
  );
}

export default Projects;
