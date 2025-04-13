import React from 'react';
import { Calendar, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Card } from './ui/Card';

interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  registrationLink: string;
  whatsappLink: string;
  certificate: string;
}

// const currentEvent: EventProps = {
//   title: 'GENESIS : Introduction to Gen-AI ( Workshop ) ',
//   date: 'April 2nd-5th 2025',
//   time: '5:00 PM - 7:00 PM',
//   location: 'CL-1 ( ABB 1 )',
//   description:
//     'Join us for an immersive workshop on Generative AI! Explore RAG, AI agents, essential AI tools, and build your own AI-powered application!',
//   imageUrl:
//     'Genesis.jpg',
//   registrationLink: 'https://forms.gle/y5Ckj7N56fF7hChr5',
//   whatsappLink: 'https://chat.whatsapp.com/FRsxniPp9dj0MN312alqXH',
//   certificate:
//     'Certificates provided !!'
// };

export default function UpcomingEvent() {
  return (
    <section className="relative pt-24 pb-20 z-0">
      {' '}
      {/* Updated padding and z-index */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hover:shadow-purple-500/50">
        <Card className="overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 hover:shadow-purple-500/50">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 mix-blend-overlay" />
              <img
                src={currentEvent.imageUrl}
                alt={currentEvent.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium animate-pulse">
                  Upcoming Event
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-purple-400 transition-all duration-300">
                {currentEvent.title}
              </h3>
              <p className="text-[var(--text-dim)] mb-6">{currentEvent.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2 hover:text-[var(--primary)] transition-colors">
                  <Calendar className="h-5 w-5 text-[var(--primary)]" />
                  <span className="text-[var(--text-dim)]">{currentEvent.date}</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-[var(--primary)] transition-colors">
                  <Clock className="h-5 w-5 text-[var(--primary)]" />
                  <span className="text-[var(--text-dim)]">{currentEvent.time}</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-[var(--primary)] transition-colors">
                  <MapPin className="h-5 w-5 text-[var(--primary)]" />
                  <span className="text-[var(--text-dim)]">{currentEvent.location}</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-[var(--primary)] transition-colors">
                  <ShieldCheck className="h-5 w-5 text-[var(--primary)]" />
                  <span className="text-[var(--text-dim)]">{currentEvent.certificate}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => window.open(currentEvent.registrationLink, "_blank")}
                  className="group relative px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-lg font-semibold transition-all duration-300 transform hover:translate-y-[-2px]">
                  <span className="relative z-10">Register Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--secondary)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                </button>
                
                <button
                  onClick={() => window.open(currentEvent.whatsappLink, "_blank")}
                  className="group relative px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:translate-y-[-2px] flex items-center">
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-4 w-4" />
                  <span className="relative z-10">Join Group</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
