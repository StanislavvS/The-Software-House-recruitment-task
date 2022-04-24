import React from "react";
import { useSearchTextField } from "./styles";
import { ReactComponent as SearchIcon } from "../../../../../img/icons/search-icon.svg";

const SearchTextField = () => {
  const classes = useSearchTextField();

  return (
    <div className={classes.searchTextFieldContainer}>
      <SearchIcon className={classes.searchTextFieldLogo} />
      <input
        className={classes.searchTextField}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchTextField;
