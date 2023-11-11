import React from "react";
import { BsSearch } from 'react-icons/bs';
import "../style/search.css";

function Search() {
  return (
    <div className="search-bar">
      <BsSearch
        className="search-icon"
      />
      <input
        className="search-input"
        placeholder="Buscar ferramenta"
      />
    </div>
  )
}

export default Search;
