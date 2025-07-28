import React from "react";
import { Link } from "react-router-dom";

const RepoList = ({ repos }) => {
  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.id} className="border p-2 mb-2 rounded">
          <Link
            to={`/repo/${repo.owner.login}/${repo.name}`}
            className="text-blue-600 font-semibold"
          >
            {repo.full_name}
          </Link>
          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
