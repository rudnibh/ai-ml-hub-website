import React from 'react';
import ProjectsSection from '../components/ProjectsSection';
import { Container } from '../components/ui/Container';
import { GradientHeading } from '../components/ui/GradientHeading';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <Container>
        <section className="py-20">
          <GradientHeading>Student Projects</GradientHeading>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-300">
              Explore innovative projects created by our talented students, showcasing the practical application of AI and ML concepts.
            </p>
          </div>
          <ProjectsSection />
        </section>
      </Container>
    </div>
  );
}