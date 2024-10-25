import { HomeStyled } from "../components/Styles/HomeStyled";
import { Article } from "../components/Article";
import { fetchTopNewsByName } from "../utils/FetchNews";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useIsMobile } from "../utils/MobileResponsive";
import { useSelector } from "react-redux";
import { SecondaryNews } from "../components/SecondaryNews";

const Home = () => {
  const isMobile = useIsMobile(1200);
  const [visibleCount, setVisibleCount] = useState(20);
  let section = useSelector((state) => state.section);

  // api call
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["news"],
    queryFn: () => fetchTopNewsByName({ section }),
  });
  const filteredData = data?.filter((item) => item.abstract);
  useEffect(() => {
    refetch();
  }, [section, refetch]);
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  console.log(data);

  return (
    <HomeStyled>
      <div className="principal">
        {filteredData.slice(0, visibleCount).map((article) => (
          <Article key={article.uri} article={article} />
        ))}
        <div className="loadMore">
          <button onClick={() => setVisibleCount(visibleCount + 10)}>
            Load More News
          </button>
        </div>
      </div>
      {!isMobile && (
        <div className="secondary">
          <SecondaryNews />
        </div>
      )}
    </HomeStyled>
  );
};

export default Home;
