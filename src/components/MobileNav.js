import React from "react";

import MenuProfileImage from "../images/champion.png";

function MobileNav({ isDarkMode, theme, isMenuOpen, toggleMenu, allLinks }) {
  return (
    <div
      style={{
        background: isDarkMode ? theme.dark.primary : theme.light.bg,
      }}
      className={`navigation ${isMenuOpen && "active"}`}
    >
      <div
        className="userBx"
        style={{ background: isDarkMode ? theme.dark.bg : theme.light.bg }}
      >
        <div
          className="imgBx"
          style={{
            border: `1px solid ${
              isDarkMode ? theme.dark.textColor : theme.light.textLightColor
            }`,
          }}
        >
          <img src={MenuProfileImage} alt="champion" />
        </div>
        <p
          style={{
            color: isDarkMode
              ? theme.dark.textColor
              : theme.light.textLightColor,
          }}
          className="username"
        >
          Kennedy Ojukwu
        </p>
      </div>
      <div
        style={{
          background: isDarkMode ? theme.dark.bg : theme.light.bg,
          "--menu-icon-color": isDarkMode
            ? theme.dark.textColor
            : theme.light.textLightColor,
        }}
        onClick={toggleMenu}
        className={`menu--icon ${isMenuOpen && "active"}`}
      ></div>
      <ul className="menu">{allLinks}</ul>
    </div>
  );
}

export default MobileNav;
