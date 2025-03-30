import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import MainContent from './components/MainContent';
import About from './pages/About';
import Projects from './pages/Projects';
import Achievements from './pages/achievements';

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
      <div className="min-h-screen bg-[var(--bg-darker)] text-[var(--text-light)] animated-gradient-bg relative overflow-hidden">
        <AnimatePresence>
          {loading && <LoadingScreen />}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: contentReady ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-0"
        >
          <ParticleBackground />
          <div className="fixed inset-0 grid-background pointer-events-none z-[-5]"></div>
          <div className="noise-texture"></div>
          <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[var(--bg-gradient-start)]/20 to-[var(--bg-gradient-end)]/60 pointer-events-none z-[-3]"></div>
          
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
          <footer className="relative glass-morphism mt-12 border-t border-purple-400/10 text-[var(--text-dim)] py-6 text-center">
            <p>&copy; {new Date().getFullYear()} AI/ML HUB. All rights reserved.</p>
          </footer>
        </motion.div>
      </div>
    </Router>
  );
}