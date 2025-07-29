import React from "react";
import {
  MapPin,
  LinkIcon,
  Twitter,
  Building,
  Calendar,
  Users,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const UserProfile = ({ user }) => {
  if (!user) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <img
              src={user.avatar_url || "/placeholder.svg"}
              alt={user.login}
              className="w-32 h-32 rounded-full mx-auto mb-4 ring-4 ring-purple-100 shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {user.name || user.login}
          </h1>
          <p className="text-xl text-gray-600 mb-4">@{user.login}</p>
          <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Joined {formatDate(user.created_at)}</span>
          </div>
        </div>

        {user.bio && (
          <div className="text-center mb-8">
            <p className="text-gray-700 text-lg leading-relaxed bg-gray-50 p-4 rounded-xl max-w-2xl mx-auto">
              {user.bio}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {user.location && (
            <div className="flex items-center space-x-3 text-gray-600 bg-gray-50 p-4 rounded-xl">
              <MapPin className="w-5 h-5 text-purple-500" />
              <span className="font-medium">{user.location}</span>
            </div>
          )}

          {user.company && (
            <div className="flex items-center space-x-3 text-gray-600 bg-gray-50 p-4 rounded-xl">
              <Building className="w-5 h-5 text-purple-500" />
              <span className="font-medium">{user.company}</span>
            </div>
          )}

          {user.blog && (
            <div className="flex items-center space-x-3 text-gray-600 bg-gray-50 p-4 rounded-xl">
              <LinkIcon className="w-5 h-5 text-purple-500" />
              <a
                href={
                  user.blog.startsWith("http")
                    ? user.blog
                    : `https://${user.blog}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline font-medium"
              >
                {user.blog}
              </a>
            </div>
          )}

          {user.twitter_username && (
            <div className="flex items-center space-x-3 text-gray-600 bg-gray-50 p-4 rounded-xl">
              <Twitter className="w-5 h-5 text-purple-500" />
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline font-medium"
              >
                @{user.twitter_username}
              </a>
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-purple-600 mb-2">
              <BookOpen className="w-6 h-6" />
              <div className="text-3xl font-bold">{user.public_repos}</div>
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Repositories
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-2">
              <Users className="w-6 h-6" />
              <div className="text-3xl font-bold">{user.followers}</div>
            </div>
            <div className="text-sm text-gray-600 font-medium">Followers</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-green-600 mb-2">
              <Users className="w-6 h-6" />
              <div className="text-3xl font-bold">{user.following}</div>
            </div>
            <div className="text-sm text-gray-600 font-medium">Following</div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-900 to-gray-700 
                     text-white px-8 py-3 rounded-xl hover:from-gray-800 hover:to-gray-600 
                     transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
          >
            <ExternalLink className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
