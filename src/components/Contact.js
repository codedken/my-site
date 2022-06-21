import React, { useState } from "react";
import { send } from "emailjs-com";
import { FaLongArrowAltRight } from "react-icons/fa";

import ContactInfo from "./ContactInfo";
import "../styles/Contact.css";
import Shape from "./Shape";

function Contact({ theme, isDarkMode }) {
  const EMAILJS_SERVICE_ID = "service_tbxha8l";
  const EMAILJS_TEMPLATE_ID = "template_431nsn8";
  const EMAILJS_USER_ID = "kRjlPWZr3bUv8v6ML";

  const initialInputData = {
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  };

  const [inputData, setInputData] = useState(initialInputData);
  const [isLoading, setIsLoading] = useState(false);

  const updateInputData = (e) => {
    const { value, name } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendMail = async (e) => {
    e.preventDefault();
    setIsLoading(prevState => !prevState);
    try {
      const response = await send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        inputData,
        EMAILJS_USER_ID
      );
      setInputData(initialInputData);
      console.log("email sent successfully", response.status, response.text);
    } catch (e) {
      console.log("an error occured", e);
    }
    setIsLoading(prevState => !prevState);
  };

  const inputStyle = {
    background: theme.dark.textColor,
    border: `1px solid ${
      isDarkMode ? "transparent" : theme.light.textLightColor
    }`,
    transition: "0.5s",
  };

  const spanBgColor = {
    background: isDarkMode ? "#bdbebf" : "white",
  };
  return (
    <section id="contact" className="contact--section">
      <h2
        className="contact--title"
        style={{
          color: isDarkMode ? theme.dark.textColor : theme.light.textLightColor,
        }}
      >
        Contact Me
      </h2>
      <div className="contact--card">
        <ContactInfo isDarkMode={isDarkMode} theme={theme} />
        <Shape
          att={{
            cl: "contact-right-card",
            child: (
              <form onSubmit={sendMail} className="contact-input-fields">
                <div className="email-subject-message">
                  <div className="input--box">
                    <input
                      name="from_name"
                      value={inputData.from_name}
                      required="required"
                      type="text"
                      style={inputStyle}
                      className="contact-email-input"
                      onChange={updateInputData}
                    />
                    <span style={spanBgColor}>NAME</span>
                  </div>
                  <div className="input--box">
                    <input
                      name="from_email"
                      value={inputData.from_email}
                      required="required"
                      type="text"
                      style={inputStyle}
                      className="contact-email-input"
                      onChange={updateInputData}
                    />
                    <span style={spanBgColor}>EMAIL ADDRESS</span>
                  </div>
                  <div className="input--box">
                    <input
                      name="subject"
                      value={inputData.subject}
                      required="required"
                      type="text"
                      style={inputStyle}
                      className="contact-email-input"
                      onChange={updateInputData}
                    />
                    <span style={spanBgColor}>SUBJECT</span>
                  </div>
                  <div className="message--box">
                    <textarea
                      name="message"
                      value={inputData.message}
                      required="required"
                      type="text"
                      style={inputStyle}
                      className="contact-message-input"
                      onChange={updateInputData}
                    />
                    <span style={spanBgColor}>MESSAGE</span>
                  </div>
                </div>
                <button
                  className="contact-form-btn"
                  style={{
                    background: isDarkMode
                      ? theme.dark.primary
                      : theme.light.bg,
                  }}
                >
                  <div
                    style={{ 
                      border: isLoading ? "2px solid white" : "none",
                      borderLeft: isLoading && "0px",
                      borderTop: isLoading && "0px",
                      width: isLoading && "2rem",
                      height: isLoading && "2rem",
                      animation: isLoading && "animateLoader 1s infinite linear",
                      borderRadius: isLoading && "50%",
                      transition: "0.5s",
                      color: theme.dark.secondary 
                    }}
                    className="contact-btn-text-icon"
                  >
                    {!isLoading && <h4>SEND MESSAGE</h4>}
                    {!isLoading && <FaLongArrowAltRight
                      style={{ width: "1.5rem", height: "1.5rem" }}
                    />}
                  </div>
                </button>
              </form>
            ),
          }}
        />
      </div>
    </section>
  );
}

export default Contact;
