import React from "react";
import { Link } from "react-router-dom";
import {
  Star,
  GitFork,
  Eye,
  Calendar,
  ExternalLink,
  Code,
  User,
} from "lucide-react";

const RepoDetails = ({ repo }) => {
  if (!repo) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={repo.owner.avatar_url || "/placeholder.svg"}
              alt={repo.owner.login}
              className="w-16 h-16 rounded-full ring-4 ring-purple-100 shadow-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {repo.name}
              </h1>
              <div className="flex items-center space-x-2 text-gray-600">
                <a
                  href={repo.owner.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 transition-colors font-medium"
                >
                  {repo.owner.login}
                </a>
                <span>/</span>
                <span className="font-medium">{repo.name}</span>
              </div>
            </div>
          </div>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="font-medium">View on GitHub</span>
          </a>
        </div>

        {repo.description && (
          <p className="text-gray-700 text-lg mb-6 leading-relaxed bg-gray-50 p-4 rounded-xl">
            {repo.description}
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-yellow-50 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-yellow-600 mb-2">
              <Star className="w-5 h-5" />
              <span className="font-semibold text-2xl">
                {repo.stargazers_count.toLocaleString()}
              </span>
            </div>
            <span className="text-sm text-gray-600">Stars</span>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-2">
              <GitFork className="w-5 h-5" />
              <span className="font-semibold text-2xl">
                {repo.forks_count.toLocaleString()}
              </span>
            </div>
            <span className="text-sm text-gray-600">Forks</span>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-green-600 mb-2">
              <Eye className="w-5 h-5" />
              <span className="font-semibold text-2xl">
                {repo.watchers_count?.toLocaleString() || 0}
              </span>
            </div>
            <span className="text-sm text-gray-600">Watching</span>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-purple-600 mb-2">
              <Code className="w-5 h-5" />
              <span className="font-semibold text-lg">
                {repo.language || "Multiple"}
              </span>
            </div>
            <span className="text-sm text-gray-600">Language</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Created {formatDate(repo.created_at)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Updated {formatDate(repo.updated_at)}</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <Link
            to={`/user/${repo.owner.login}`}
            className="inline-flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors"
          >
            <User className="w-5 h-5" />
            <span className="font-medium">
              View {repo.owner.login}'s profile
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepoDetails;
