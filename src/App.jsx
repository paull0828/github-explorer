import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./views/Home";
import RepoPage from "./views/RepoPage";
import UserPage from "./views/UserPage";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.4 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/repo/:owner/:repo"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.4 }}
            >
              <RepoPage />
            </motion.div>
          }
        />
        <Route
          path="/user/:username"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.4 }}
            >
              <UserPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <header className="navbar">
        <h1>🚀 GitHub Explorer</h1>
      </header>

      <main className="container">
        <AnimatedRoutes />
      </main>

      <footer className="footer">
        <p>Built with ❤️ using GitHub API</p>
      </footer>
    </Router>
  );
}

export default App;
