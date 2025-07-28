import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import RepoList from "../components/RepoList";
import FilterBar from "../components/FilterBar";

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("best-match");

  // ✅ Memoized fetch function to avoid useEffect warning
  const fetchRepos = useCallback(
    async (reset = false) => {
      if (!query) return;
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.github.com/search/repositories?q=${query}&sort=${sort}&order=desc&page=${
            reset ? 1 : page
          }&per_page=10`
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

  // ✅ Safe useEffect with fetchRepos dependency
  useEffect(() => {
    if (query) {
      fetchRepos(true);
    }
  }, [query, sort, fetchRepos]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub Explorer</h1>

      <SearchBar onSearch={handleSearch} />
      <FilterBar sort={sort} setSort={setSort} />

      {error && <p className="text-red-500 text-center my-4">{error}</p>}
      {loading && <p className="text-center my-4">Loading...</p>}

      <RepoList repos={repos} />

      {repos.length > 0 && !loading && (
        <div className="text-center my-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => fetchRepos()}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
