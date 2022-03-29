import React from "react";

function Search({searchTerm, handleChange}) {

  

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchTerm} onChange={handleChange}  className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
