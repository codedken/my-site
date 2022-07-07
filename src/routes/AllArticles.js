import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Allprojects.css";
import "../styles/Allarticles.css";
import Logo from "../images/logo192.png";
import MenuProfileImage from "../images/champion.png";
import Shape from "../components/Shape";
import Footer from "../components/Footer";
import ArticleModel from "../models/ArticleModel";

function AllArticles({ isDarkMode, theme, toggle }) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const linkColor = {
    color: isDarkMode ? theme.dark.textColor : theme.light.textColor,
    "--after": isDarkMode ? theme.dark.textColor : theme.light.textColor,
  };
  const thematicRule = (
    <hr
      style={{
        width: "100%",
        border: `1px solid ${
          isDarkMode ? "#050004" : theme.light.textLightColor
        }`,
        alignSelf: "center",
      }}
    />
  );
  const articleElements = ArticleModel.map((article) => (
    <Shape
      key={article.id}
      att={{
        cl: "allarticles-article",
        b: `1px solid ${
          isDarkMode ? "transparent" : theme.light.textLightColor
        }`,
        bg: isDarkMode ? theme.dark.primary : theme.light.primary,
        child: (
          <div className="article--box">
            <Shape
              att={{
                cl: "article-image-box",
                child: (
                  <img
                    className="article--image"
                    src={article.image}
                    alt="computers"
                  />
                ),
              }}
            />
            <div
              className="article-textarea"
              style={{
                color: isDarkMode
                  ? theme.dark.textColor
                  : theme.light.textLightColor,
              }}
            >
              <h3 className="article--title">{article.title}</h3>
              <p className="article--desc">{article.body}</p>
              <div className="article--footer">
                <Shape
                  att={{
                    cl: "article-read-btn",
                    bg: isDarkMode ? theme.dark.primary : theme.light.bg,
                    color: theme.dark.secondary,
                    child: <b>Read More</b>,
                  }}
                />
              </div>
            </div>
          </div>
        ),
      }}
    />
  ));
  return (
    <div className="allprojects">
      <div
        className="header"
        style={{ "--header-bg": isDarkMode ? theme.dark.bg : theme.light.bg }}
      >
        <img src={Logo} alt="codedken logo" className="nav--logo" />
        <h2 className="leading--title">All Articles</h2>
        <nav className="allprojects--nav">
          <Link to="/" className="Link">
            <span style={linkColor} className="link">
              Home
            </span>
          </Link>
          <Link to="/projects" className="Link">
            <span style={linkColor} className="link">
              Projects
            </span>
          </Link>
        </nav>
        <div
          style={{
            "--before": isDarkMode ? theme.dark.primary : theme.dark.textColor,
            background: isDarkMode ? theme.dark.textColor : theme.dark.primary,
          }}
          id="toggleElement"
          className={`toggleBtn ${isDarkMode && "active"}`}
          onClick={toggle}
        ></div>

        <img
          src={MenuProfileImage}
          alt="champion"
          className="allprojects--photo"
          style={{
            "--allprojects-photo-outline": isDarkMode
              ? theme.dark.textColor
              : theme.dark.primary,
          }}
        />
      </div>
      <section className="allarticles">{articleElements}</section>
      {thematicRule}
      <Footer isDarkMode={isDarkMode} theme={theme} />
    </div>
  );
}

export default AllArticles;
