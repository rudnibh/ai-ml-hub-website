import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectLinksProps {
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectLinks({ demoUrl, githubUrl }: ProjectLinksProps) {
  return (
    <div className="flex space-x-3">
      {demoUrl && (
        <ProjectLink href={demoUrl} icon={ExternalLink} />
      )}
      {githubUrl && (
        <ProjectLink href={githubUrl} icon={Github} />
      )}
    </div>
  );
}

interface ProjectLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

function ProjectLink({ href, icon: Icon }: ProjectLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-purple-400 hover:text-purple-300 transition-colors"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}