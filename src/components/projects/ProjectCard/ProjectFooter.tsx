import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { TeamMember } from '../../../types/project';
import { ProjectLinks } from './ProjectLinks';

interface ProjectFooterProps {
  team: TeamMember[];
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectFooter({ team, demoUrl, githubUrl }: ProjectFooterProps) {
  return (
    <div className="pt-4 border-t border-purple-500/20">
      <div className="flex items-center justify-between">
        <TeamAvatars team={team} />
        <ProjectLinks demoUrl={demoUrl} githubUrl={githubUrl} />
      </div>
    </div>
  );
}

function TeamAvatars({ team }: { team: TeamMember[] }) {
  return (
    <div className="flex -space-x-2">
      {team.map((member) => (
        <img
          key={member.id}
          src={member.avatar}
          alt={member.name}
          className="w-8 h-8 rounded-full border-2 border-gray-900"
          title={member.name}
        />
      ))}
    </div>
  );
}