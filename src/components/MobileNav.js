import React from "react";

import {
  IoHomeOutline,
  IoBookOutline,
  IoInformationCircleOutline,
  IoConstructOutline,
  IoCallOutline,
  IoDocumentTextOutline
} from "react-icons/io5";

import MenuProfileImage from "../images/champion.png";

function MobileNav({ isDarkMode, theme, isMenuOpen, toggleMenu }) {
  const aColor = isDarkMode ? theme.dark.textColor : theme.light.textLightColor;
  return (
    <div
      style={{
        background: isDarkMode ? theme.dark.primary : "white",
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
            border: `2px solid ${
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
      <ul className="menu">
        <li>
          <a style={{ "--acolor": aColor }} onClick={toggleMenu}  href="#home">
            <IoHomeOutline />Home
          </a>
        </li>
        <li>
          <a style={{ "--acolor": aColor }} onClick={toggleMenu} href="#projects">
            <IoDocumentTextOutline />Projects
          </a>
        </li>
        <li>
          <a style={{ "--acolor": aColor }} onClick={toggleMenu} href="#skills">
            <IoConstructOutline />Skills
          </a>
        </li>
        <li>
          <a style={{ "--acolor": aColor }} onClick={toggleMenu} href="#articles">
            <IoBookOutline />Articles
          </a>
        </li>
        <li>
          <a style={{ "--acolor": aColor }} onClick={toggleMenu} href="#about">
            <IoInformationCircleOutline /> About
          </a>
        </li>
        <li>
          <a style={{ "--acolor": aColor }} onClick={toggleMenu} href="#contact">
            <IoCallOutline />Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
