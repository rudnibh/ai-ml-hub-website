import React from 'react';
import Hero from './Hero';
import UpcomingEvent from './UpcomingEvent';
import Activities from './Activities';
import EventsSection from './EventsSection';
import Meetings from './Meetings';
import ContactUs from './ContactUs';
import Contact from './Contact';

export default function MainContent() {
  return (
    <main className="relative">
      <Hero />
      <div className="relative z-10 bg-gray-900">
        <UpcomingEvent />
        <Activities />
        <EventsSection />
        <Meetings />
        <ContactUs />
        <Contact />
      </div>
    </main>
  );
}
