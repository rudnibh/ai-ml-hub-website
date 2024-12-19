import React from 'react';
import { useProjects } from '../../../hooks/useProjects';
import { ProjectList } from './ProjectList';
import { ProjectsEmpty } from './ProjectsEmpty';
import { ProjectsLoading } from './ProjectsLoading';

export function ProjectGrid() {
  const { filteredProjects, isLoading } = useProjects();

  if (isLoading) {
    return <ProjectsLoading />;
  }

  if (filteredProjects.length === 0) {
    return <ProjectsEmpty />;
  }

  return <ProjectList projects={filteredProjects} />;
}