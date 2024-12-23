import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import MainContent from './components/MainContent';
import About from './pages/About';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    // Start showing content slightly before loading screen fades out
    const contentTimer = setTimeout(() => {
      setContentReady(true);
    }, 3700); // 2500ms initial delay + 1200ms for transition start

    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Total animation duration

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <AnimatePresence>
          {loading && <LoadingScreen />}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: contentReady ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <ParticleBackground />
          <div className="fixed inset-0 grid-background pointer-events-none"></div>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
          <footer className="relative bg-gray-900 border-t border-purple-900/30 text-gray-400 py-6 text-center">
            <p>&copy; {new Date().getFullYear()} AIML HUB. All rights reserved.</p>
          </footer>
        </motion.div>
      </div>
    </Router>
  );
}