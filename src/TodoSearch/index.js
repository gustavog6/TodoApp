import React from "react";
import "./todoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="cebollas"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
