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
import EventsPage from './pages/Events';
import Chatbot from './components/Chatbot';
import { chatbotService } from './services/chatbotService';
import Footer from './components/Footer';

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

    // 👇 Wake up Gemini AI backend
    chatbotService.checkHealth().then((ok) => {
      console.log("👋 Pinged AI backend:", ok ? "Online ✅" : "Offline ❌");
    });

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#0B0F1A] text-[var(--text-light)] relative overflow-hidden">
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
          <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#131836]/20 to-[#1E1B4B]/30 pointer-events-none z-[-3]"></div>
          
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
          
          <Footer />
          
          {/* Global Chatbot - Available on all pages */}
          <Chatbot />
        </motion.div>
      </div>
    </Router>
  );
}