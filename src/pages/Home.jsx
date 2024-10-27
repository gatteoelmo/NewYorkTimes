import { HomeStyled } from "../components/Styles/HomeStyled";
import { Article } from "../components/Article";
import { fetchTopNewsByName } from "../utils/FetchNews";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useIsMobile } from "../utils/MobileResponsive";
import { useSelector } from "react-redux";
import { SecondaryNews } from "../components/SecondaryNews";
import { Header } from "../components/Header";

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [section, refetch]);
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  console.log(data);

  return (
    <>
      <Header />
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

        {!isMobile && <hr />}
        {!isMobile && (
          <div className="secondary">
            <SecondaryNews />
          </div>
        )}
      </HomeStyled>
      <div
        style={{ margin: "0 auto", padding: "0px 3.7vw", maxWidth: "1300px" }}
      >
        <hr />
        <hr />
      </div>
    </>
  );
};

export default Home;
