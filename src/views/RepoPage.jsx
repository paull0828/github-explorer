import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RepoDetails from "../components/RepoDetails";

const RepoPage = () => {
  const { owner, repo } = useParams();
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}`
        );
        setRepoData(response.data);
      } catch (err) {
        setError("Repository not found or API error.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepo();
  }, [owner, repo]);

  if (loading) return <div className="loader"></div>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return <RepoDetails repo={repoData} />;
};

export default RepoPage;
