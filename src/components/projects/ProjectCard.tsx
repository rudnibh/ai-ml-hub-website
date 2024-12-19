import React from 'react';
import { Project } from '../../types/project';
import TechnologyBadge from './TechnologyBadge';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-xl border border-purple-500/20 overflow-hidden transition-all duration-300 hover:border-purple-400/40 hover:scale-[1.02]">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-purple-100 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-purple-200/60">
              {new Date(project.completionDate).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
              })}
            </p>
          </div>
          <span className="px-3 py-1 text-xs font-medium text-purple-200 bg-purple-900/40 rounded-full">
            {project.category}
          </span>
        </div>

        <p className="text-purple-100/80 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechnologyBadge key={tech} technology={tech} />
          ))}
        </div>

        <div className="pt-4 border-t border-purple-500/20">
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {project.team.map((member) => (
                <img
                  key={member.id}
                  src={member.avatar}
                  alt={member.name}
                  className="w-8 h-8 rounded-full border-2 border-gray-900"
                  title={member.name}
                />
              ))}
            </div>
            
            <div className="flex space-x-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}