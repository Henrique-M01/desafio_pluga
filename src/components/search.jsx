import React, { useContext } from "react";
import { BsSearch } from 'react-icons/bs';
import "../style/search.css";
import Context from "../context/contex";

function Search() {
  const { setWordFilter, wordFilter } = useContext(Context);

  return (
    <div className="search-bar">
      <BsSearch
        className="search-icon"
      />
      <input
        className="search-input"
        placeholder="Buscar ferramenta"
        value={wordFilter}
        onChange={(event) => setWordFilter(event.target.value)}
      />
    </div>
  )
}

export default Search;
