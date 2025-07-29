import React from "react";

const FilterBar = ({ sort, setSort }) => {
  return (
    <div className="flex justify-end mb-4 pt-4">
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="best-match">Best Match</option>
        <option value="stars">Most Stars</option>
        <option value="forks">Most Forks</option>
        <option value="updated">Recently Updated</option>
      </select>
    </div>
  );
};

export default FilterBar;
