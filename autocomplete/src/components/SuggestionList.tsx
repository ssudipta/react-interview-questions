import React, { Fragment } from "react";
import NoSuggestions from "./NoSuggestion";

type SuggestionListProps = {
  dataList: string[];
  searchTerm: string;
  handleSearchBarText: (item: string) => void;
  isSuggestionClicked: boolean;
};

const SuggestionList: React.FC<SuggestionListProps> = ({
  dataList,
  searchTerm,
  handleSearchBarText,
  isSuggestionClicked,
}) => {
  const highlightMatch = (text: string, searchTerm: string) => {
    const parts = text.split(new RegExp(`(${searchTerm})`, "i")); // Case-insensitive
    return parts.map((part, index) => (
      <span
        key={index}
        style={{
          backgroundColor: part.toLowerCase() === searchTerm.toLowerCase() ? "lightblue" : "transparent",
        }}
      >
        {part}
      </span>
    ));
  };

  // Determine if "No suggestion found" should be shown
  const showNoSuggestions = dataList.length === 0 && searchTerm && !isSuggestionClicked;

  return (
    <Fragment>
      {showNoSuggestions ? (
        <NoSuggestions /> // Display the NoSuggestions component
      ) : (
        searchTerm && !isSuggestionClicked && (
          <div className="suggestion-box">
            <ul className="item-list">
              {dataList.map((item) => (
                <li
                  key={item}
                  className="item"
                  onClick={() => handleSearchBarText(item)}
                >
                  {highlightMatch(item, searchTerm)}
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </Fragment>
  );
};

export default SuggestionList;
