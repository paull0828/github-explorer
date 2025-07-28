import React from "react";

const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div className="user-profile">
      <img
        src={user.avatar_url}
        alt="User Avatar"
        width="120"
        style={{ borderRadius: "50%" }}
      />
      <h2>{user.login}</h2>
      <p>
        <strong>Name:</strong> {user.name || "N/A"}
      </p>
      <p>
        <strong>Location:</strong> {user.location || "Not provided"}
      </p>
      <p>
        <strong>Followers:</strong> {user.followers}
      </p>
      <p>
        <strong>Following:</strong> {user.following}
      </p>
      <p>
        <strong>Public Repos:</strong> {user.public_repos}
      </p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        <button style={{ marginTop: "10px" }}>View on GitHub</button>
      </a>
    </div>
  );
};

export default UserProfile;
