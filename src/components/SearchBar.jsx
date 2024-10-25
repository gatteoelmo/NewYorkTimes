import { SearchBarStyled } from "./Styles/searchBarStyled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/searchSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <SearchBarStyled>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <button type="submit" onClick={handleLogoClick}>
        GO
      </button>
    </SearchBarStyled>
  );
};
