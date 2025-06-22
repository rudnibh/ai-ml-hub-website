import React from 'react';
import { Container } from '../components/ui/Container';
import { GradientHeading } from '../components/ui/GradientHeading';
import { motion } from 'framer-motion';
import { CurrentEvents } from '../components/EventsPage/CurrentEvents';
import { PastEvents } from '../components/EventsPage/PastEvents';

export default function Events() {
  return (
    <div className="min-h-screen pt-32 relative">
      <Container withFade>
        <section className="py-20">
          <div className="flex flex-col items-center mb-12">
            <motion.p 
              className="text-[var(--primary)] font-medium mb-2 tracking-wide uppercase"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Journey
            </motion.p>
            <GradientHeading align="center">Events & Activities</GradientHeading>
            <motion.div 
              className="max-w-3xl mx-auto text-center mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-[var(--text-dim)]">
                Discover our upcoming workshops, competitions, and past achievements that showcase our commitment to AI/ML education and innovation.
              </p>
            </motion.div>
          </div>

          <CurrentEvents />
          <PastEvents />
        </section>
      </Container>
    </div>
  );
}