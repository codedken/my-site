import React from "react";

import "../styles/Main.css";
import SocialLinks from "./SocialLinks";
import photo from "../images/freshboy.png";
import Shape from "./Shape";
function Main({ theme, isDarkMode }) {
  return (
    <section
      id="home"
      className="home--main"
      style={{
        background: isDarkMode ? theme.dark.bg : theme.light.bg,
        transition: "0.5s",
      }}
    >
      <div className="text--section">
        <div className="mobile-photo-section">
          <div className="mobile-bg-circle"></div>
          <div className="mobile-bg-smallcircle"></div>
          <div
            className="home-main-rounded-photo"
            style={{
              // "--photo-bg-color": isDarkMode ? theme.dark.bg : theme.light.bg,
              "--photo-bg-color": theme.dark.bg,
              // "--photo-b-color": isDarkMode ? "white" : "var(--primary-color)",
              "--photo-b-color": "white",
            }}
          >
            <img className="rounded--chibuzor" src={photo} alt="chibuzor" />
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {/* <h1
            style={{
              color: isDarkMode
                ? theme.dark.textColor
                : theme.light.textLightColor,
              whiteSpace: "nowrap",
            }}
          >
            Hi, I'm
          </h1> */}
          <h1
            style={{
              color: theme.dark.secondary,
              textShadow: "0px -4px 4px rgba(255,255,255,.5)",
              whiteSpace: "nowrap",
            }}
          >
            Ken Ojukwu C.
          </h1>
        </div>
        <h2
          style={{
            color: isDarkMode
              ? theme.dark.textColor
              : theme.light.textLightColor,
          }}
        >
          DevOps Engineer
        </h2>
        <p
          style={{
            color: isDarkMode ? theme.dark.textColor : theme.light.textColor,
          }}
          className="home-profile-desc"
        >
          I manage and automate stuffs in the cloud using some interesting tools and technologies
        </p>
        <p
          style={{
            color: isDarkMode ? theme.dark.textColor : theme.light.textColor,
          }}
          className="find-me-here"
        >
          LET'S CONNECT
        </p>
        <SocialLinks />
      </div>
      <div className="photo--section">
        <div className="photo-large-animated-bg">
          <Shape att={{
            cl: "secondary--box"
          }} />
          <Shape att={{
            cl: "rounded--bg"
          }} />
          <Shape att={{
            cl: "small-rounded-bg"
          }} />
        </div>

        <img className="chibuzor" src={photo} alt="chibuzor" />
      </div>
    </section>
  );
}

export default Main;
