/* eslint-disable react/prop-types */
import { ArticleStyled } from "./Styles/ArticleStyled";
export const Article = ({ article }) => {
  return (
    <ArticleStyled>
      {article && (
        <a href={article.url} target="_blank">
          <div className="content">
            <h4>{article.subsection}</h4>
            <h3>{article.title}</h3>
            <p>{article.abstract}</p>
          </div>
          <div className="image">
            {article.multimedia !== null && (
              <img src={article.multimedia[0].url} alt="img" />
            )}
          </div>
        </a>
      )}
    </ArticleStyled>
  );
};
