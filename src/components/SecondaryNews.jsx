import { SecondaryNewsStyled } from "./Styles/SecondaryNewsStyled";
import { fetchTopNews } from "../utils/FetchNews";
import { useQuery } from "@tanstack/react-query";

export const SecondaryNews = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["newssecondary"],
    queryFn: () => fetchTopNews(),
  });
  const filteredData = data?.filter((item) => item.abstract);
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  console.log(data);

  return (
    <SecondaryNewsStyled>
      {filteredData.map((article, index) => (
        <div key={index}>
          <a href={article.url}>
            {index % 2 ? <img src={article.multimedia[0].url} alt="" /> : null}
            <h4>{article.subsection}</h4>
            <h3>{article.title}</h3>
            <p>{article.abstract}</p>
          </a>
        </div>
      ))}
      <div className="loadMore">
        {/* <button onClick={() => setVisibleCount(visibleCount + 10)}>
          Load More News
        </button> */}
      </div>
    </SecondaryNewsStyled>
  );
};
