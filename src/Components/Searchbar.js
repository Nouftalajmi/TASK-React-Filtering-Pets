import React from "react";

// import { useState } from "react";

const Searchbar = ({ changeQuery }) => {
  return (
    <div className="input-group rounded">
      <input
        onChange={(event) => changeQuery(event)}
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </div>
  );
};

export default Searchbar;
