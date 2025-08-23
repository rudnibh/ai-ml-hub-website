import React, { useRef, useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Users, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/Card';
import { GradientHeading } from '../ui/GradientHeading';
import { events } from '../../data/events';

// Filter only past events
const pastEvents = events.filter(event => event.status === 'past');

export function PastEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Create infinite carousel by duplicating events
  const carouselEvents = [...pastEvents, ...pastEvents, ...pastEvents];

  useEffect(() => {
    if (!isPaused && pastEvents.length > 0) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % pastEvents.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, pastEvents.length]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + pastEvents.length) % pastEvents.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % pastEvents.length);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Don't render if no past events
  if (pastEvents.length === 0) {
    return null;
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <motion.p 
              className="text-[var(--primary)] font-medium mb-2 tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              OUR JOURNEY
            </motion.p>
            <GradientHeading>Past Events</GradientHeading>
          </div>
          <motion.div
            className="flex gap-4 mt-6 md:mt-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={handlePrevious}
              className="p-3 rounded-full border border-gray-700 hover:border-[var(--primary)] text-gray-400 hover:text-[var(--primary)] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[var(--primary)]/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-gray-700 hover:border-[var(--primary)] text-gray-400 hover:text-[var(--primary)] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[var(--primary)]/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
        
        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 300 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="group"
                  >
                    <Card 
                      variant="glass" 
                      className="h-full group/card overflow-hidden border border-gray-800/50 hover:border-[var(--primary)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/10"
                    >
                      <div className="relative h-48 overflow-hidden rounded-t-xl">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/20 to-gray-900/80 z-10" />
                        <motion.img
                          src={event.imageUrl}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          draggable="false"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                        <div className="absolute top-4 left-4 bg-[var(--primary)]/20 backdrop-blur-md border border-[var(--primary)]/30 rounded-full px-3 py-1 flex items-center z-20">
                          <Calendar className="h-3 w-3 text-[var(--primary)] mr-1" />
                          <span className="text-xs font-medium text-white">{event.date}</span>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15" />
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-white group-hover/card:text-[var(--primary)] transition-colors duration-300">
                          {event.title}
                        </h3>

                        <p className="text-[var(--text-dim)] line-clamp-3 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="space-y-3">
                          {event.location && (
                            <div className="flex items-center text-sm text-[var(--text-dim)] group-hover:text-gray-300 transition-colors">
                              <MapPin className="h-4 w-4 mr-2 text-[var(--primary)]" />
                              {event.location}
                            </div>
                          )}
                          {event.time && (
                            <div className="flex items-center text-sm text-[var(--text-dim)] group-hover:text-gray-300 transition-colors">
                              <Calendar className="h-4 w-4 mr-2 text-[var(--primary)]" />
                              {event.time}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {pastEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'bg-[var(--primary)] w-8 h-2 shadow-lg shadow-[var(--primary)]/50' 
                    : 'bg-gray-600 hover:bg-gray-500 w-2 h-2 hover:scale-125'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-sm text-[var(--text-dim)]">
              <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                isPaused ? 'bg-gray-600' : 'bg-[var(--primary)] animate-pulse'
              }`} />
              <span>{isPaused ? 'Paused' : 'Auto-playing'}</span>
            </div>
          </div>
        </div>

        {/* View All Events Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-[var(--text-dim)] text-lg max-w-2xl mx-auto leading-relaxed">
            Want to see more of our journey? Follow us on social media for event updates and highlights!
          </p>
        </motion.div>
      </div>
    </section>
  );
}