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
    const contentTimer = setTimeout(() => {
      setContentReady(true);
    }, 3700);

    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white relative">
        <AnimatePresence>
          {loading && <LoadingScreen />}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: contentReady ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <ParticleBackground />
          <div className="fixed inset-0 grid-background pointer-events-none"></div>
          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/achievements" element={<Achievements />} />
            </Routes>
            <footer className="relative bg-gray-900 border-t border-purple-900/30 text-gray-400 py-6 text-center">
              <p>&copy; {new Date().getFullYear()} AI/ML HUB. All rights reserved.</p>
            </footer>
          </div>
        </motion.div>
      </div>
    </Router>
  );
}
