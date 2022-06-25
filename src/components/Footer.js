import React from "react";

function Footer({theme, isDarkMode}) {
  return (
    <div className="footer--section">
      <small style={{
          color: isDarkMode ? theme.dark.textColor : "rgba(0,0,0,0.6)",
      }}>CodedKen {`\u{00A9}`} {new Date().getFullYear()}</small>
    </div>
  );
}

export default Footer;
