import { Fragment, useEffect, useState, type FC } from "react";
import useDebounce from "../hooks/useDebounce";
import getSearchedData from "../data/mockApi";
import SuggestionList from "./SuggestionList";
import Loader from "./Loader";

const AutoComplete: FC = () => {
  const [searchData, setSearchData] = useState<string>("");
  const [suggestedData, setSuggestedData] = useState<string[]>([]);
  const [isSuggestionClicked, setIsSuggestionClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const debouncedSearch = useDebounce(searchData, 500);

  useEffect(() => {
    if (!isSuggestionClicked) {
      if (debouncedSearch.length < 3) {
        setSuggestedData([]); // No suggestions when search term is less than 3 characters or empty
      } else {
        const search = async () => {
          setIsLoading(true)
          const fetchedData = await getSearchedData(debouncedSearch);
          setSuggestedData(fetchedData.length > 0 ? fetchedData : []); // If no matches, set to empty
          setIsLoading(false)
        };
        search();
      }
    }
  }, [debouncedSearch, isSuggestionClicked]);

  const handleSearchBarText = (item: string) => {
    setSearchData(item);
    setIsSuggestionClicked(true);
    setSuggestedData([]); // Clear suggestion list when a suggestion is clicked
  };

  const handleChange = (input: string) => {
    setSearchData(input);
    setIsSuggestionClicked(false);
  };

  return (
    <Fragment>
      <div className="search-box-container">
        <input
          type="text"
          name="search"
          value={searchData}
          onChange={(e) => handleChange(e.target.value)}
          className="search-box"
          placeholder="Search"
        />
      </div>
      {searchData.length > 0 && 
          isLoading ? <Loader /> : 
            <SuggestionList
            dataList={suggestedData}
            searchTerm={debouncedSearch}
            handleSearchBarText={handleSearchBarText}
            isSuggestionClicked = {isSuggestionClicked}
          />
      }
    </Fragment>
  );
};

export default AutoComplete;
