import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RepoCard = ({ repo }) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded p-4 mb-4 hover:shadow-lg transition"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-2">
        <Link
          to={`/repo/${repo.owner.login}/${repo.name}`}
          className="text-blue-600 hover:underline"
        >
          {repo.full_name}
        </Link>
      </h2>
      <p className="text-sm text-gray-600 mb-2">{repo.description}</p>
      <div className="text-sm text-gray-500">
        ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
      </div>
    </motion.div>
  );
};

export default RepoCard;
