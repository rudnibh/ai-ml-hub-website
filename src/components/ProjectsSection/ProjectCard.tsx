import React from 'react';
import { ExternalLink, Github, ThumbsUp, Calendar, Tag } from 'lucide-react';
import { Card } from '../ui/Card';
import type { Project } from '../../types/project';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card variant="glass" className="group overflow-hidden h-full">
      <div className="relative aspect-video overflow-hidden rounded-t-xl">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/60 to-transparent opacity-90" />
        
        <div className="absolute top-4 right-4 flex gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-[var(--primary)]/80 backdrop-blur-md p-2 rounded-full text-white transition-colors duration-300"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-[var(--primary)]/80 backdrop-blur-md p-2 rounded-full text-white transition-colors duration-300"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
        
        <div className="absolute bottom-4 left-4 flex gap-2">
          <div className="bg-[var(--primary)]/20 backdrop-blur-md border border-[var(--primary)]/20 rounded-full px-3 py-1 flex items-center">
            <Calendar className="h-3 w-3 text-[var(--primary)] mr-1" />
            <span className="text-xs font-medium text-white">{project.date}</span>
          </div>
          {project.likes && (
            <div className="bg-[var(--secondary)]/20 backdrop-blur-md border border-[var(--secondary)]/20 rounded-full px-3 py-1 flex items-center">
              <ThumbsUp className="h-3 w-3 text-[var(--secondary)] mr-1" />
              <span className="text-xs font-medium text-white">{project.likes}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-[var(--primary)] transition-colors">
          {project.title}
        </h3>

        <p className="text-[var(--text-dim)] line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <div
              key={tech}
              className="px-3 py-1 rounded-full bg-[#131836]/40 border border-[#1E1B4B]/30 text-xs text-[var(--text-light)] flex items-center"
            >
              <Tag className="h-3 w-3 mr-1 text-[var(--primary)]" />
              {tech}
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-[#1E1B4B]/30">
          <p className="text-sm text-[var(--text-dim)] mb-4 italic">
            By: {project.students.join(', ')}
          </p>
        </div>
      </div>
    </Card>
  );
}