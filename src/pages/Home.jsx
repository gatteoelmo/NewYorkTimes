import { HomeStyled } from "../components/Styles/HomeStyled";
import { Article } from "../components/Article";
import { fetchNews } from "../utils/FetchNews";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [visibleCount, setVisibleCount] = useState(10);

  // api call
  const section = "home";
  const { isLoading, data, error } = useQuery({
    queryKey: ["news"],
    queryFn: () => fetchNews({ section }),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <HomeStyled>
      <div className="principal">
        {data.slice(0, visibleCount).map((article) => (
          <Article key={article.title} article={article} />
        ))}
        <div className="loadMore">
          <button onClick={() => setVisibleCount(visibleCount + 10)}>
            Load More News
          </button>
        </div>
      </div>
      {!isMobile && <div className="secondary"></div>}
    </HomeStyled>
  );
};

export default Home;
