import React from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

import Shape from "./Shape";

function ContactInfo({ isDarkMode, theme }) {
  const textColor = {
    white: {
      color: isDarkMode ? "#ffffff" : theme.light.textLightColor,
    },
    warmWhite: {
      color: isDarkMode ? theme.dark.textColor : theme.light.textLightColor,
    },
  };
  const socialsIconStyle = {
    color: textColor.warmWhite.color,
    width: "1.3rem",
    height: "1.3rem",
    transition: "0.5s",
  };
  return (
    <Shape
      att={{
        cl: "contact-left-card",
        child: (
          <div style={{ width: "100%", height: "100%" }}>
            <Shape
              att={{
                h: "12rem",
                w: "100%",
                br: "1rem 1rem 0 0",
                bg: "teal",
                child: (
                  <img
                    className="contact--image"
                    src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="contact"
                  />
                ),
              }}
            />
            <div className="contact--info">
              <h3 style={textColor.white} className="contact--name">
                KENNEDY OJUKWU
              </h3>
              <h4 style={textColor.warmWhite} className="contact--role">
                Software Developer
              </h4>
              <p style={textColor.warmWhite} className="contact--summary">
                I am open for gigs. Hit me up via the following channels below
              </p>
              <div className="contact-email-icon">
                <FaEnvelope style={textColor.warmWhite} />
                <h4 style={textColor.white} className="contact--email">
                  cbsmoothoj@yahoo.com
                </h4>
              </div>
              <div className="contact-phone-icon">
                <FaPhoneAlt style={textColor.warmWhite} />
                <h4 style={textColor.white} className="contact--phone">
                  +2348068895803
                </h4>
              </div>
              <div className="contact--socials">
                <a
                  href="https://www.twitter.com/codedken1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Shape
                    att={{
                      cl: "contact-info-icon",
                      bg: isDarkMode ? theme.dark.primary : theme.light.bg,
                      child: <FaTwitter style={socialsIconStyle} />,
                    }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/chibuzor-ojukwu-6606a7b5/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Shape
                    att={{
                      cl: "contact-info-icon",
                      bg: isDarkMode ? theme.dark.primary : theme.light.bg,
                      child: <FaLinkedinIn style={socialsIconStyle} />,
                    }}
                  />
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=2348068895803&text&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Shape
                    att={{
                      cl: "contact-info-icon",
                      bg: isDarkMode ? theme.dark.primary : theme.light.bg,
                      child: <FaWhatsapp style={socialsIconStyle} />,
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}

export default ContactInfo;
