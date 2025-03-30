import React, { useState } from 'react';
import { Sparkles, FileText, Users } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { AimlLogo } from './ui/AimlLogo';
import { SocialLinksPopup } from './ui/SocialLinksPopup';

export default function Hero() {
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  
  return (
    <div className="relative hero-grid min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-darker)] via-[var(--bg-darker)]/90 to-[var(--bg-darker)]"></div>
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="Students collaborating"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0">
        <div className="honeycomb-pattern"></div>
      </div>
      <div className="relative w-full max-w-7xl mx-auto text-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full blur-2xl opacity-35 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
          <AimlLogo className="h-41 w-41 text-[var(--primary)] mx-auto mb-6 animate-float" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-light)] to-[var(--secondary)] animate-gradient">
          AI/ML HUB
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text-dim)] mb-8 max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
          Welcome to the AIML Hub at JIIT! A space for innovation, learning, and
          collaboration in Artificial Intelligence and Machine Learning. Join us
          to explore cutting-edge tech and shape the future together!
        </p>
        
        {/* Workshop Banner */}
        <div className="mb-8 p-4 bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-500/20 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">GENESIS: Intro to Gen AI Workshop</h3>
          <p className="text-[var(--text-dim)] mb-3">
            Apr 2-5, 2025 | 5-7 PM | CL 1 Room
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <a 
              href="https://forms.gle/y5Ckj7N56fF7hChr5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-sm"
            >
              <FileText className="mr-2 h-4 w-4" />
              Register Now
            </a>
            <a 
              href="https://chat.whatsapp.com/FRsxniPp9dj0MN312alqXH" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-sm"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-4 w-4" />
              Join WhatsApp Group
            </a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <button 
              onClick={() => setIsSocialOpen(true)}
              className="relative px-8 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary)]/25">
              <span className="flex items-center">
                Connect With Us
                <Users className="ml-2 h-5 w-5 animate-pulse" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-dark)]/10 to-transparent animate-pulse-slow"></div>
      </div>

      <SocialLinksPopup 
        isOpen={isSocialOpen}
        onClose={() => setIsSocialOpen(false)}
      />
    </div>
  );
}