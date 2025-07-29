import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search GitHub Repositories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full pl-12 pr-32 py-4 text-lg border-2 border-gray-200 rounded-2xl 
                   focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none 
                   transition-all duration-200 shadow-sm hover:shadow-md bg-white
                   placeholder-gray-400"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            type="submit"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 
                     text-white px-6 py-2.5 rounded-xl hover:from-purple-700 hover:to-blue-700 
                     transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
