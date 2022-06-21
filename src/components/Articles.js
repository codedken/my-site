import React from "react";

import "../styles/Articles.css";
import Shape from "./Shape";
import ArticleModel from "../models/ArticleModel";

function Articles({ theme, isDarkMode }) {
  const articleElements = ArticleModel.map((article) => (
    <Shape
      key={article.id}
      att={{
        cl: "article",
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
              <div
                style={{
                  paddingBottom: "1rem",
                  position: "relative",
                  width: "100%",
                }}
              >
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
    <section id="articles" className="articles--section">
      <div className="header">
        <h2
          style={{
            color: isDarkMode
              ? theme.dark.textColor
              : theme.light.textLightColor,
          }}
          className="leading--title"
        >
          Articles
        </h2>
        <a href="./index">Click to see all articles</a>
      </div>
      <div className="all--articles">{articleElements}</div>
    </section>
  );
}

export default Articles;
