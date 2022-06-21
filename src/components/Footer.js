import React from "react";

function Footer({theme, isDarkMode}) {
  return (
    <div className="footer--section">
      <small style={{
          color: isDarkMode ? theme.dark.textColor : theme.light.textLightColor,
      }}><b>CodedKen @ {new Date().getFullYear()}</b></small>
    </div>
  );
}

export default Footer;
