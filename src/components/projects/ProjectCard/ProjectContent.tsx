import React from 'react';
import { TechnologyBadge } from '../TechnologyBadge';

interface ProjectContentProps {
  description: string;
  technologies: string[];
}

export function ProjectContent({ description, technologies }: ProjectContentProps) {
  return (
    <>
      <p className="text-purple-100/80 line-clamp-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechnologyBadge key={tech} technology={tech} />
        ))}
      </div>
    </>
  );
}