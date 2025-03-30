import React from 'react';
import Hero from './Hero';
import UpcomingEvent from './UpcomingEvent';
import Activities from './Activities';
import EventsSection from './EventsSection';
import ContactUs from './ContactUs';
import Contact from './Contact';

export default function MainContent() {
  return (
    <main className="relative pt-20 z-0">
      <Hero />
      <UpcomingEvent />
      <Activities />
      <EventsSection />
      <ContactUs />
      <Contact />
    </main>
  );
}
