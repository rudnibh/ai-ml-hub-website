import React, { useState } from 'react';
import { Sparkles, FileText, Users } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { AimlLogo } from './ui/AimlLogo';
import { SocialLinksPopup } from './ui/SocialLinksPopup';

export default function Hero() {
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-darker)] via-[var(--bg-darker)]/90 to-[var(--bg-darker)]"></div>
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="Students collaborating"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="honeycomb-pattern"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center">
        {/* Logo Section */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full blur-[100px] opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
          <AimlLogo className="h-42 w-42 text-[var(--primary)] animate-float p-0" />
        </div>

        {/* Title and Description */}
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-light)] to-[var(--secondary)] animate-gradient -mt-16">
            AI/ML HUB
          </h1>
          <p className="text-lg text-[var(--text-dim)] mt-4 mb-4">
            Welcome to the AIML Hub at JIIT! A space for innovation, learning, and
            collaboration in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Workshop Banner */}
        {/* <div className="w-full max-w-2xl bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              GENESIS: Intro to Gen AI Workshop
            </h3>
            <p className="text-[var(--text-dim)] mb-4">
              Apr 2-5, 2025 | 5-7 PM | CL 1 Room
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://forms.gle/y5Ckj7N56fF7hChr5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FileText className="mr-2 h-5 w-5" />
                Register Now
              </a>
              <a 
                href="https://chat.whatsapp.com/FRsxniPp9dj0MN312alqXH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                Join Group
              </a>
            </div>
          </div>
        </div> */}

        {/* Connect Button */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow "></div>
          <button 
            onClick={() => setIsSocialOpen(true)}
            className="relative px-8 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary)]/25"
          >
            <span className="flex items-center ">
              Connect With Us
              <Users className="ml-2 h-5 w-5 animate-pulse" />
            </span>
          </button>
        </div>
      </div>

      {/* Overlay Effect */}
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