import React from 'react';
import { Calendar, Clock, MapPin, ShieldCheck, Users } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { GradientHeading } from '../ui/GradientHeading';

// Current/Upcoming events data
const currentEvents = [
  // Uncomment and modify when you have upcoming events
  {
    title: 'Applications Open | Join the AI/ML Hub as a Volunteer!',
    date: 'Deadline: 27th June 2025',
    //time: '5:00 PM - 7:00 PM',
    //location: 'CL-1 (ABB 1)',
    description: 'Are you passionate about technology? Curious about the world of Artificial Intelligence and Machine Learning? Eager to be part of a vibrant, innovative, and future-driven community? If yes — this is your chance!',
    imageUrl: 'currentEvent.jpg',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeV-s327DweqnfurzsRRTUN0NyAXwv7yEuOj2RearXsewjI0w/viewform?usp=sharing&ouid=113006706481846438271',
    whatsappLink: 'https://chat.whatsapp.com/FRsxniPp9dj0MN312alqXH',
    //certificate: 'Certificates provided!',
    status: 'Ongoing'
  }
];

export function CurrentEvents() {
  if (currentEvents.length === 0) {
    return (
      <section className="py-12">
        <GradientHeading align="center">Current Events</GradientHeading>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center py-12"
        >
          <div className="max-w-md mx-auto">
            <Calendar className="h-16 w-16 text-[var(--primary)] mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-[var(--text-light)] mb-2">
              No Upcoming Events
            </h3>
            <p className="text-[var(--text-dim)]">
              Stay tuned for exciting upcoming workshops and events! Follow our social media for the latest updates.
            </p>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <GradientHeading align="center">Current Events</GradientHeading>
      
      <div className="space-y-8">
        {currentEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card variant="glass" className="overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 mix-blend-overlay" />
                  <motion.img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-64 lg:h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 left-4 bg-green-500/20 backdrop-blur-md border border-green-500/20 rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-green-400 animate-pulse">
                      {event.status === 'upcoming' ? 'Upcoming' : 'Live'}
                    </span>
                  </div>
                </div>
                
                <div className="lg:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                    {event.title}
                  </h3>
                  <p className="text-[var(--text-dim)] mb-6 text-lg">{event.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-3 hover:text-[var(--primary)] transition-colors">
                      <Calendar className="h-5 w-5 text-[var(--primary)]" />
                      <span className="text-[var(--text-light)]">{event.date}</span>
                    </div>
                    {/* <div className="flex items-center space-x-3 hover:text-[var(--primary)] transition-colors">
                      <Clock className="h-5 w-5 text-[var(--primary)]" />
                      <span className="text-[var(--text-light)]">{event.time}</span>
                    </div> */}
                    {/* <div className="flex items-center space-x-3 hover:text-[var(--primary)] transition-colors">
                      <MapPin className="h-5 w-5 text-[var(--primary)]" />
                      <span className="text-[var(--text-light)]">{event.location}</span>
                    </div> */}
                    {/* <div className="flex items-center space-x-3 hover:text-[var(--primary)] transition-colors">
                      <ShieldCheck className="h-5 w-5 text-[var(--primary)]" />
                      <span className="text-[var(--text-light)]">{event.certificate}</span>
                    </div> */}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      onClick={() => window.open(event.registrationLink, "_blank")}
                      className="group relative px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-lg font-semibold transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Register Now
                      </span>
                    </motion.button>
                    
                    <motion.button
                      onClick={() => window.open(event.whatsappLink, "_blank")}
                      className="group relative px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-4 w-4" />
                      <span className="relative z-10">Join Group</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}