import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, GitFork, Calendar, ExternalLink } from "lucide-react";

const RepoCard = ({ repo }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-500",
      Python: "bg-green-500",
      Java: "bg-red-500",
      "C++": "bg-purple-500",
      Go: "bg-cyan-500",
      Rust: "bg-orange-500",
      default: "bg-gray-500",
    };
    return colors[language] || colors.default;
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group overflow-hidden transform hover:-translate-y-1"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={repo.owner.avatar_url || "/placeholder.svg"}
              alt={repo.owner.login}
              className="w-8 h-8 rounded-full ring-2 ring-gray-100"
            />
            <div>
              <Link
                to={`/repo/${repo.owner.login}/${repo.name}`}
                className="font-semibold text-lg text-gray-900 group-hover:text-purple-600 transition-colors hover:underline"
              >
                {repo.name}
              </Link>
              <p className="text-sm text-gray-500">{repo.owner.login}</p>
            </div>
          </div>
          <button
            onClick={() => window.open(repo.html_url, "_blank")}
            className="text-gray-400 hover:text-purple-500 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        {repo.description && (
          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
            {repo.description}
          </p>
        )}

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            {repo.language && (
              <div className="flex items-center space-x-1">
                <div
                  className={`w-3 h-3 rounded-full ${getLanguageColor(
                    repo.language
                  )}`}
                ></div>
                <span className="text-gray-600 font-medium">
                  {repo.language}
                </span>
              </div>
            )}
            <div className="flex items-center space-x-1 text-gray-500">
              <Star className="w-4 h-4" />
              <span>{repo.stargazers_count.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <GitFork className="w-4 h-4" />
              <span>{repo.forks_count.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-gray-400 text-xs">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(repo.updated_at)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RepoCard;
