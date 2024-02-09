import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleQueryChange(sort_by, order) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sort_by);
    newParams.set("order", order);
    setSearchParams(newParams);
  }

  return (
    <div className="sort-by-holder" id="sort-by-holder">
      <div className="dropdown">
        <button className="dropbtn">
          <h3>Sort By</h3>
        </button>
        <div id="myDropdown" className="dropdown-content">
          <div className="sort-by-list">
            <button onClick={() => handleQueryChange("comment_count", "DESC")}>
              Most commented
            </button>
            <button onClick={() => handleQueryChange("comment_count", "ASC")}>
              Least commented
            </button>
            <button onClick={() => handleQueryChange("created_at", "DESC")}>
              Newest
            </button>
            <button onClick={() => handleQueryChange("created_at", "ASC")}>
              Oldest
            </button>
            <button onClick={() => handleQueryChange("votes", "DESC")}>
              Most Voted
            </button>
            <button onClick={() => handleQueryChange("votes", "ASC")}>
              Least Voted
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
