import React from 'react';
import { ExternalLink, Github, ThumbsUp, Calendar } from 'lucide-react';
import { Card } from '../ui/Card';
import type { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center space-x-2 text-gray-400">
            <ThumbsUp className="h-4 w-4" />
            <span>{project.likes}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Calendar className="h-4 w-4" />
          <span>{project.date}</span>
        </div>

        <p className="text-gray-300 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-purple-900/20">
          <p className="text-sm text-gray-400 mb-4">
            By: {project.students.join(', ')}
          </p>
          <div className="flex items-center space-x-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}