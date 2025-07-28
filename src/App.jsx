import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import RepoPage from "./views/RepoPage";
import UserPage from "./views/UserPage";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="navbar">
        <h1>🚀 GitHub Explorer</h1>
      </header>
      <div className="container"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repo/:owner/:repo" element={<RepoPage />} />
        <Route path="/user/:username" element={<UserPage />} />
      </Routes>
      <footer className="footer">
        <p>Built with ❤️ using GitHub API</p>
      </footer>
    </Router>
  );
}

export default App;
