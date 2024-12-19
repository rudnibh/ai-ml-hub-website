import React, { useState, useMemo } from 'react';
import { Search, Filter, SortDesc } from 'lucide-react';
import { Container } from '../ui/Container';
import { GradientHeading } from '../ui/GradientHeading';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import { projects } from '../../data/projects';

export default function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'popularity'>('date');

  const filteredProjects = useMemo(() => {
    return projects
      .filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.students.some(student => student.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesTech = selectedTech.length === 0 || 
          project.technologies.some(tech => selectedTech.includes(tech));
        
        const matchesYear = selectedYear === 'all' || project.year === selectedYear;
        
        return matchesSearch && matchesTech && matchesYear;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'name':
            return a.title.localeCompare(b.title);
          case 'popularity':
            return b.likes - a.likes;
          default:
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
      });
  }, [searchQuery, selectedTech, selectedYear, sortBy, projects]);

  return (
    <section id="projects" className="relative py-20">
      <Container>
        <GradientHeading>Student Projects</GradientHeading>
        
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-purple-900/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <ProjectFilters
              selectedTech={selectedTech}
              setSelectedTech={setSelectedTech}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
            />
            
            <div className="flex items-center space-x-2">
              <SortDesc className="text-purple-400 h-5 w-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'name' | 'popularity')}
                className="bg-gray-800/50 border border-purple-900/20 rounded-lg text-white px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="date">Latest</option>
                <option value="name">Name</option>
                <option value="popularity">Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </Container>
    </section>
  );
}