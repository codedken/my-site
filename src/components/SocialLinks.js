import React from "react";
import { FaBehance, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import Shape from "./Shape";

function SocialLinks() {
  const icon = (IconName, url) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Shape
          att={{
            cl: "main-social-links",
            child: <IconName style={{ color: "#ffffff", opacity: ".7" }} />,
          }}
        />
      </a>
    );
  };
  return (
    <div className="social--links">
      {icon(FaGithub, "https://www.github.com/codedken")}
      {icon(
        FaLinkedinIn,
        "https://www.linkedin.com/in/chibuzor-ojukwu-6606a7b5/"
      )}
      {icon(FaBehance, "https://www.behance.net/codedken?")}
      {icon(FaTwitter, "https://www.twitter.com/kenbuzor")}
    </div>
  );
}

export default SocialLinks;
