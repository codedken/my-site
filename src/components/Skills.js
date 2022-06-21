import React from "react";
import "../styles/Skills.css";

import Shape from "./Shape";

import SkillModel from "../models/SkillModel";

function Skills({ theme, isDarkMode }) {
  const childContent = (props) => (
    <div className="skills-btn-content">
      {props.icon}
      <span
        style={{ color: props.color, fontSize: "1.5rem", transition: "0.5s" }}
      >
        {props.text}
      </span>
    </div>
  );

  const skillElements = SkillModel.map((skill) => (
    <Shape
      key={skill.text}
      att={{
        bg: isDarkMode ? theme.dark.primary : theme.light.primary,
        cl: `skills ${skill.className}`,
        child: (
          <a
            href={skill.url}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            {childContent({
              text: skill.text,
              color: isDarkMode
                ? theme.dark.textColor
                : theme.light.textLightColor,
              icon: skill.icon,
            })}
          </a>
        ),
      }}
    />
  ));

  return (
    <section id="skills" className="skills--section">
      <h6 className="text">VISIT MY SKILLS AND HIRE ME</h6>
      <h2
        style={{
          color: isDarkMode ? theme.dark.textColor : theme.light.textLightColor,
        }}
        className="title"
      >
        My Skills
      </h2>
      <div className="my-skills">{skillElements}</div>
    </section>
  );
}

export default Skills;
