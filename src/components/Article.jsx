/* eslint-disable react/prop-types */
import { ArticleStyled } from "./Styles/ArticleStyled";
export const Article = ({ article }) => {
  return (
    <ArticleStyled>
      <a href="article.url">
        <div className="content">
          <h4>{article.subsection}</h4>
          <h3>{article.title}</h3>
          <p>{article.abstract}</p>
        </div>
        <div className="image">
          <img src={article.multimedia[0].url} alt="" />
        </div>
      </a>
    </ArticleStyled>
  );
};
