import React from 'react';
import ProjectsSection from '../components/ProjectsSection';
import { Container } from '../components/ui/Container';
import { GradientHeading } from '../components/ui/GradientHeading';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className="min-h-screen pt-28 z-0">
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
              Our Showcase
            </motion.p>
            <GradientHeading align="center">Student Projects</GradientHeading>
            <motion.div 
              className="max-w-3xl mx-auto text-center mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-[var(--text-dim)]">
                Explore innovative projects created by our talented students, showcasing the practical application of AI and ML concepts.
              </p>
            </motion.div>
          </div>
          <ProjectsSection />
        </section>
      </Container>
    </div>
  );
}