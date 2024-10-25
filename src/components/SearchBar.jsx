import { SearchBarStyled } from "./Styles/searchBarStyled";

export const SearchBar = () => {
  return (
    <SearchBarStyled>
      <input type="text" placeholder="Search" />
      <button type="submit">GO</button>
    </SearchBarStyled>
  );
};
