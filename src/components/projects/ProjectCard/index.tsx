import React from 'react';
import { Project } from '../../../types/project';
import { ProjectHeader } from './ProjectHeader';
import { ProjectContent } from './ProjectContent';
import { ProjectFooter } from './ProjectFooter';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-xl border border-purple-500/20 overflow-hidden transition-all duration-300 hover:border-purple-400/40 hover:scale-[1.02]">
      <ProjectThumbnail src={project.thumbnail} alt={project.title} />
      <div className="p-6 space-y-4">
        <ProjectHeader
          title={project.title}
          date={project.completionDate}
          category={project.category}
        />
        <ProjectContent
          description={project.description}
          technologies={project.technologies}
        />
        <ProjectFooter
          team={project.team}
          demoUrl={project.demoUrl}
          githubUrl={project.githubUrl}
        />
      </div>
    </div>
  );
}

function ProjectThumbnail({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="aspect-video overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}