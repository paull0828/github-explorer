import React from "react";
import { Filter } from "lucide-react";

const FilterBar = ({ sort, setSort }) => {
  return (
    <div className="flex items-center justify-end mb-6">
      <div className="flex items-center space-x-3 bg-white rounded-xl shadow-sm border border-gray-200 px-4 py-3">
        <Filter className="w-4 h-4 text-gray-500" />
        <label className="text-sm font-medium text-gray-700">Sort by:</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-transparent border-none outline-none text-sm font-medium text-gray-900 cursor-pointer"
        >
          <option value="best-match">Best Match</option>
          <option value="stars">Most Stars</option>
          <option value="forks">Most Forks</option>
          <option value="updated">Recently Updated</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
