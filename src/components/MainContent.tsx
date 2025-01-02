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
    <main className="relative pt-16">
      <Hero />
      <UpcomingEvent />
      <Activities />
      <EventsSection />
      <Meetings />
      <ContactUs />
      <Contact />
    </main>
  );
}
