import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserProfile from "../components/UserProfile";

const UserPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${username}`);
        setUser(res.data);
      } catch (err) {
        setError("User not found or API error.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  if (loading) return <p>Loading user profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return <UserProfile user={user} />;
};

export default UserPage;
