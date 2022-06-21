import { FaReact, FaNode } from "react-icons/fa";
import { SiFlutter, SiFirebase } from "react-icons/si";

import FigmaLogo  from "../components/FigmaLogo";

const SkillModel = [
  {
    className: "react",
    text: "React",
    url: "https://www.reactjs.org",
    icon: (
      <FaReact
        style={{
          color: "#08D0F9",
          width: "3rem",
          height: "3rem",
        }}
      />
    ),
  },
  {
    className: "flutter",
    text: "Flutter",
    url: "https://www.flutter.dev",
    icon: (
      <SiFlutter
        style={{
          color: "#08D0F9",
          width: "3rem",
          height: "3rem",
        }}
      />
    ),
  },
  {
    className: "node",
    text: "",
    url: "https://www.nodejs.org",
    icon: (
        <FaNode
          style={{
            color: "#60b146",
            width: "4rem",
            height: "4rem",
          }}
        />
      ),
  },
  {
    className: "firebase",
    text: "Firebase",
    url: "https://firebase.google.com",
    icon:(
        <SiFirebase
          style={{
            color: "#FCCA3F",
            width: "3rem",
            height: "3rem",
          }}
        />
      ),
  },
  {
    className: "figma",
    text: "Figma",
    url: "https://www.figma.com",
    icon:<FigmaLogo />,
  },
];

export default SkillModel;
