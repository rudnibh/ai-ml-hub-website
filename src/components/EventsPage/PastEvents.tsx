import React, { useRef } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { GradientHeading } from '../ui/GradientHeading';

const pastEvents = [
  {
    title: "GENESIS : Introduction to Gen-AI",
    date: "April 2nd-5th, 2025",
    image: "gen.jpg",
    description: "Immersive workshop on Generative AI, RAG, AI agents, essential AI tools, and building your own AI-powered application!",
    location: "CL-1 (ABB 1)",
    participants: "50+ students"
  },
  {
    title: "Mindescape",
    date: "March 01, 2024",
    image: "mindescape.JPG",
    description: "Multiple AI based minigames where multiple teams compete against each other",
    location: "Main Campus",
    participants: "100+ students"
  },
  {
    title: "Capturing Pics",
    date: "March 01, 2024",
    image: "capturingpics.JPG",
    description: "AI Powered Photobooth, Where people got their photos clicked and get back an AI generated Portrait of themselves",
    location: "Main Campus",
    participants: "200+ photos"
  },
  {
    title: "Prompt Crafting Competition",
    date: "November 18, 2024",
    image: "carnival.png",
    description: "Competition on Crafting beautiful prompts to leverage the power of Generative AI",
    location: "CS Building",
    participants: "75+ students"
  },
  {
    title: "Hands on Machine Learning",
    date: "September 24, 2024",
    image: "https://i.ibb.co/JpM215x/first-class.jpg",
    description: "Weekly Hands on Machine Learning Classes",
    location: "Lab 1",
    participants: "40+ students"
  },
  {
    title: "Orientation",
    date: "September 18, 2024",
    image: "https://i.ibb.co/3hqQsfp/orientation.jpg",
    description: "Brief Overview and introduction to Machine Learning and Artificial Intelligence.",
    location: "LT 2",
    participants: "150+ students"
  },
];

export function PastEvents() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const container = scrollContainerRef.current;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20">
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
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-gray-700 hover:border-[var(--primary)] text-gray-400 hover:text-[var(--primary)] transition duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-gray-700 hover:border-[var(--primary)] text-gray-400 hover:text-[var(--primary)] transition duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
      
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-6 snap-x no-scrollbar"
      >
        {pastEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-none w-[300px] md:w-[400px] snap-start"
          >
            <Card 
              variant="glass" 
              className="h-full group/card overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/30 to-gray-900/90" />
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  draggable="false"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute top-4 left-4 bg-[var(--primary)]/20 backdrop-blur-md border border-[var(--primary)]/20 rounded-full px-3 py-1 flex items-center">
                  <Calendar className="h-3 w-3 text-[var(--primary)] mr-1" />
                  <span className="text-xs font-medium text-white">{event.date}</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover/card:text-[var(--primary)] transition-colors">
                  {event.title}
                </h3>

                <p className="text-[var(--text-dim)] line-clamp-3">{event.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-[var(--text-dim)]">
                    <MapPin className="h-4 w-4 mr-2 text-[var(--primary)]" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-[var(--text-dim)]">
                    <Users className="h-4 w-4 mr-2 text-[var(--primary)]" />
                    {event.participants}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* View All Events Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-[var(--text-dim)] text-lg">
          Want to see more of our journey? Follow us on social media for event updates and highlights!
        </p>
      </motion.div>
    </section>
  );
}