import React from "react";
import { useSearchTextField } from "./styles";
import { ReactComponent as SearchIcon } from "../../../../../img/icons/search-icon.svg";
import { SearchTextFieldProps } from "./types";

const SearchTextField = ({ onChangeHanlder }: SearchTextFieldProps) => {
  const classes = useSearchTextField();

  return (
    <div className={classes.searchTextFieldContainer}>
      <SearchIcon className={classes.searchTextFieldLogo} />
      <input
        className={classes.searchTextField}
        type="text"
        placeholder="Search"
        onChange={(e) => onChangeHanlder(e)}
      />
    </div>
  );
};

export default SearchTextField;
