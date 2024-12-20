import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UpcomingEvent from './components/UpcomingEvent';
import Activities from './components/Activities';
import EventsSection from './components/EventsSection';
import AboutSection from './components/AboutSection';
import Meetings from './components/Meetings';
import Contact from './components/Contact';
import ContactUs from './components/ContactUs';
import ParticleBackground from './components/ParticleBackground';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-agray-900 text-white">
        <ParticleBackground />
        <div className="fixed inset-0 grid-background pointer-events-none"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="relative pt-16">
              <Hero />
              <UpcomingEvent />
              <Activities />
              <EventsSection />
              <AboutSection />
              <Meetings />
              <ContactUs />
              <Contact />
            </main>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
        <footer className="relative bg-gray-900 border-t border-purple-900/30 text-gray-400 py-6 text-center">
          <p>&copy; {new Date().getFullYear()} AIML HUB. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}