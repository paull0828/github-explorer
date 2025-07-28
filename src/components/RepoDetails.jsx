import React from "react";
import { Link } from "react-router-dom";

const RepoDetails = ({ repo }) => {
  if (!repo) return null;

  return (
    <div className="repo-card">
      <h2>{repo.full_name}</h2>
      <p>{repo.description || "No description provided."}</p>
      <p>
        <strong>⭐ Stars:</strong> {repo.stargazers_count}
      </p>
      <p>
        <strong>🍴 Forks:</strong> {repo.forks_count}
      </p>
      <p>
        <strong>🛠 Language:</strong> {repo.language || "N/A"}
      </p>
      <p>
        <strong>📅 Last Updated:</strong>{" "}
        {new Date(repo.updated_at).toLocaleDateString()}
      </p>
      <p>
        <strong>👤 Owner:</strong>{" "}
        <Link
          to={`/user/${repo.owner.login}`}
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          {repo.owner.login}
        </Link>
      </p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <button style={{ marginTop: "10px" }}>View on GitHub</button>
      </a>
    </div>
  );
};

export default RepoDetails;
