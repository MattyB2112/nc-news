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
        <button className="dropbtn sort-by">
          <h4>Sort By</h4>
        </button>
        <div id="myDropdown" className="dropdown-content">
          <div className="sort-by-list">
            <div className="sort-by-option">
              <button
                className="sort-by-button"
                onClick={() => handleQueryChange("created_at", "DESC")}
              >
                Newest
              </button>
            </div>
            <div className="sort-by-option">
              <button
                className="sort-by-button"
                onClick={() => handleQueryChange("created_at", "ASC")}
              >
                Oldest
              </button>
            </div>
            <div className="sort-by-option">
              <button
                className="sort-by-button"
                onClick={() => handleQueryChange("votes", "DESC")}
              >
                Most Voted
              </button>
            </div>
            <div className="sort-by-option">
              <button
                className="sort-by-button"
                onClick={() => handleQueryChange("votes", "ASC")}
              >
                Least Voted
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
