import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import RepoList from "../components/RepoList";

const Home = () => {
  const [repos, setRepos] = useState([]);

  const handleSearch = async (query) => {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${query}`
    );
    setRepos(res.data.items);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      <RepoList repos={repos} />
    </div>
  );
};

export default Home;
