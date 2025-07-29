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
import { Github, Sparkles, Heart, Code } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Router>
        {/* Header */}
        <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Github className="w-8 h-8" />
                  <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  GitHub Explorer
                </h1>
              </div>
            </div>
          </div>
        </header>

        <main>
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-16">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span className="text-gray-300">Built with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                <span className="text-gray-300">using</span>
                <Github className="w-4 h-4 text-white" />
                <span className="text-gray-300">GitHub API</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Code className="w-4 h-4" />
                  <span>© 2024 GitHub Explorer</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
