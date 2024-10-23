import { HomeStyled } from "../components/Styles/HomeStyled";

const Home = () => {
  return (
    <HomeStyled>
      <div className="principal">
        <article>
          <h2>Title</h2>
          <p>Desctiption</p>
        </article>
      </div>
      <div className="secondary">
        <article>ciao</article>
      </div>
    </HomeStyled>
  );
};

export default Home;
