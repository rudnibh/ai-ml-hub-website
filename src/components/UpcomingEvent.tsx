import React from 'react';
import { Calendar, Clock, MapPin, ShieldCheck, FileText } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Card } from './ui/Card';
import { events } from '../data/events';
import type { Event } from '../types/event';

interface UpcomingEventProps {
  event?: Event;
}

export default function UpcomingEvent({ event }: UpcomingEventProps) {
  const currentEvent = event || events.find(e => e.isFeatured && (e.status === 'upcoming' || e.status === 'ongoing'));

  if (!currentEvent) {
    return null;
  }

  const eventStatusText = currentEvent.status === 'ongoing' ? 'Ongoing Event' : 'Upcoming Event';

  return (
    <section id="upcoming-event" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  {eventStatusText}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-purple-400 transition-all duration-300">
                {currentEvent.title}
              </h3>
              <p className="text-[var(--text-dim)] mb-6">{currentEvent.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2 hover:text-[var(--primary)] transition-colors">
                  <Calendar className="h-5 w-5 text-[var(--primary)]" />
                  <span className="text-[var(--text-dim)]">{currentEvent.date}</span>
                </div>
                {/* <div className="flex items-center space-x-2 hover:text-[var(--primary)] transition-colors">
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
                </div> */}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {currentEvent.registrationLink && (
                  <a 
                    href={currentEvent.registrationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Register Now
                  </a>
                )}
                {currentEvent.whatsappLink && (
                  <a 
                    href={currentEvent.whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                    Join Group
                  </a>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
