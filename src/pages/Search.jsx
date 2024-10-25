import { MobileHeader } from "../components/MobileHeader";
import { SearchPageStyled } from "../components/Styles/SearchPageStyled";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchNews } from "../utils/FetchNews";
import { useQuery } from "@tanstack/react-query";
import { setSearch, setSort } from "../redux/searchSlice";
import debounce from "lodash.debounce";

const Search = () => {
  const search = useSelector((state) => state.search.search);
  const sort = useSelector((state) => state.search.sort);
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const dispatch = useDispatch();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long", // full month name
      day: "numeric",
    });
  };

  // Usage
  const pubDate = "1969-01-12T05:00:00+0000";
  console.log(formatDate(pubDate));

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    dispatch(setSort(newSort)); // Dispatch the action to update the sort state
    setDebouncedSearch(debouncedSearch); // Trigger fetch with the new sort
  };

  // Fetch function with React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["searchResults", debouncedSearch, sort], // Add sort to the queryKey
    queryFn: () =>
      fetchSearchNews({ searchInput: debouncedSearch, sortInput: sort }), // Use sort in the fetch
    enabled: !!debouncedSearch, // Execute fetch only if debouncedSearch is not empty
    refetchOnWindowFocus: false,
  });

  // Debounce function
  const debounceSearch = debounce((value) => {
    setDebouncedSearch(value);
  }, 300);

  // Input change handler
  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setSearch(value)); // Update the search value in Redux
    debounceSearch(value); // Use debounce function to update debouncedSearch
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setDebouncedSearch(search); // Set the current search value without debounce
  };

  // Cleanup debounce when the component unmounts
  useEffect(() => {
    return () => {
      debounceSearch.cancel(); // Cancel debounce to avoid memory issues
    };
  }, [debounceSearch]);

  return (
    <>
      <MobileHeader />
      <SearchPageStyled>
        <div className="search-bar">
          <form onSubmit={handleSubmit}>
            <span className="search-input">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleChange}
              />
              <button type="submit">
                <IoIosSearch />
              </button>
            </span>
            <span className="sort-select">
              <select id="sort" onChange={handleSortChange} value={sort}>
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </span>
          </form>
        </div>
        <hr />
        {isLoading && <div>Loading...</div>}
        {error && <div>An error has occurred: {error.message}</div>}
        <section>
          {data?.map((article) => (
            <article key={article.uri}>
              <a href="{article.web_url}">
                <div className="article-info">
                  <p>{article.section_name}</p>
                  <p>{formatDate(article.pub_date)}</p>
                </div>

                <h2>{article.headline.main}</h2>
                <p>{article.abstract}</p>
              </a>
            </article>
          ))}
        </section>
      </SearchPageStyled>
    </>
  );
};

export default Search;
