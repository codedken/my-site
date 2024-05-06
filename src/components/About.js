import React from "react";

import "../styles/About.css";
import Shape from "./Shape";
import Photo from "../images/champion.png";

function About({ theme, isDarkMode }) {
  return (
    <section id="about" className="about--section">
      <div className="about-photo-section">
        <div>
          <Shape
            att={{
              cl: "about-photo-box",
              bg: isDarkMode ? theme.dark.primary : theme.light.bg,
              bs: `-7px -7px 30px rgba(0,0,0, 0.3), 7px 7px 30px ${isDarkMode ? "rgba(0,0,0, 0.3)" : theme.light.bg
                }`,
              child: (
                <img
                  src={Photo}
                  style={{
                    background: isDarkMode ? "#050004" : theme.dark.primary,
                    filter: isDarkMode
                      ? "saturate(150%) brightness(75%) contrast(200%)"
                      : "saturate(200%) brightness(100%) contrast(120%)",
                    transition: "0.5s",
                  }}
                  alt="chibuzor"
                  className="champion"
                />
              ),
            }}
          />
        </div>
      </div>
      <div className="about-text-section">
        <h6
          style={{ color: theme.dark.secondary }}
          className="about-visit-my-portfolio"
        >
          VISIT MY PORTFOLIO AND HIRE ME
        </h6>
        <h2
          style={{
            color: isDarkMode
              ? theme.dark.textColor
              : theme.light.textLightColor,
          }}
          className="about--header"
        >
          About Me
        </h2>
        <p
          style={{
            color: isDarkMode ? theme.dark.textColor : theme.light.textColor,
          }}
        >
          I am a graduate of Electrical Electronic Engineering but later got
          love for computers and the tons of the amazing things they do.
        </p>
        <p
          style={{
            color: isDarkMode ? theme.dark.textColor : theme.light.textColor,
          }}
        >
          I build sleek looking high performant web and mobile apps using some
          of the best technologies.
        </p>
        <p
          style={{
            color: isDarkMode ? theme.dark.textColor : theme.light.textColor,
          }}
        >
          I build with Reactjs, Nodejs, Flutter, Firebase, TailwindCSS. I also
          do designs with Figma.
        </p>
        <button
          style={{
            background: isDarkMode ? theme.dark.primary : theme.light.bg,
            boxShadow: `${isDarkMode
              ? "-8px -8px 15px rgba(255, 255, 255, 0.05), 8px 8px 15px rgba(0,0,0,0.3)"
              : "inset -8px -8px 7px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.2)"
              }`,
          }}
          className="download-cv-btn"
        >
          <a
            href="/"
            // href="https://drive.google.com/file/d/1eimrgM-Aom9TG_iol7rAxPdhTEXc7TDt/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <span className="cv-download-text">DOWNLOAD MY CV</span>
          </a>
        </button>
      </div>
    </section>
  );
}

export default About;
