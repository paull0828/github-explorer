import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import RepoCard from "../components/RepoCard";
import FilterBar from "../components/FilterBar";
import { Sparkles, TrendingUp } from "lucide-react";

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("best-match");

  const fetchRepos = useCallback(
    async (reset = false) => {
      if (!query) return;
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.github.com/search/repositories?q=${query}&sort=${sort}&order=desc&page=${
            reset ? 1 : page
          }&per_page=12`
        );
        const newRepos = res.data.items;
        if (reset) {
          setRepos(newRepos);
          setPage(2);
        } else {
          setRepos((prev) => [...prev, ...newRepos]);
          setPage((prev) => prev + 1);
        }
      } catch (err) {
        setError("Failed to fetch repositories. Try again later.");
      } finally {
        setLoading(false);
      }
    },
    [query, sort, page]
  );

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setRepos([]);
    setPage(1);
    setError(null);
  };

  useEffect(() => {
    if (query) {
      fetchRepos(true);
    }
  }, [query, sort, fetchRepos]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Sparkles className="w-8 h-8 text-purple-500" />
          <h2 className="text-5xl font-bold text-gray-900">Discover Amazing</h2>
          <TrendingUp className="w-8 h-8 text-purple-500" />
        </div>
        <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
          GitHub Repositories
        </h3>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Search through millions of GitHub repositories, discover trending
          projects, and find your next favorite codebase. Explore the world of
          open source development.
        </p>

        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Filter Bar */}
      {repos.length > 0 && <FilterBar sort={sort} setSort={setSort} />}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
          <p className="text-red-600 text-center font-medium">{error}</p>
        </div>
      )}

      {/* Loading Spinner */}
      {loading && repos.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-gray-200"></div>
            <div className="w-16 h-16 rounded-full border-4 border-purple-500 border-t-transparent animate-spin absolute top-0 left-0"></div>
          </div>
          <p className="mt-4 text-gray-600 font-medium animate-pulse">
            Loading amazing repositories...
          </p>
        </div>
      )}

      {/* Repository Grid */}
      {repos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}

      {/* Load More Button */}
      {repos.length > 0 && !loading && (
        <div className="text-center">
          <button
            onClick={() => fetchRepos()}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl 
                     hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg 
                     hover:shadow-xl font-medium text-lg"
          >
            Load More Repositories
          </button>
        </div>
      )}

      {/* No Results */}
      {!loading && repos.length === 0 && query && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            No repositories found
          </h3>
          <p className="text-gray-600 text-lg">
            Try adjusting your search terms or explore different keywords
          </p>
        </div>
      )}

      {/* Welcome Message */}
      {!query && (
        <div className="text-center py-16">
          <div className="text-8xl mb-6">🚀</div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Explore?
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Start by searching for repositories, users, or topics that interest
            you. Discover amazing open source projects and connect with the
            developer community.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
