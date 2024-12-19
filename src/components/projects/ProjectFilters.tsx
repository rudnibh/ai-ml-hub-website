import React from 'react';
import { Filter } from 'lucide-react';
import { useProjectFilters } from '../../hooks/useProjectFilters';

export default function ProjectFilters() {
  const {
    filters,
    availableFilters,
    setFilter,
    resetFilters
  } = useProjectFilters();

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
      <div className="flex items-center gap-4 mb-4">
        <Filter className="w-5 h-5 text-purple-400" />
        <h2 className="text-purple-100 font-medium">Filters</h2>
        {Object.values(filters).some(Boolean) && (
          <button
            onClick={resetFilters}
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors ml-auto"
          >
            Reset
          </button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-purple-200/60 block mb-2">
            Category
          </label>
          <select
            value={filters.category || ''}
            onChange={(e) => setFilter('category', e.target.value)}
            className="w-full bg-gray-800/50 text-purple-100 rounded-md border border-purple-500/20 px-3 py-2"
          >
            <option value="">All Categories</option>
            {availableFilters.categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm text-purple-200/60 block mb-2">
            Technology
          </label>
          <select
            value={filters.technology || ''}
            onChange={(e) => setFilter('technology', e.target.value)}
            className="w-full bg-gray-800/50 text-purple-100 rounded-md border border-purple-500/20 px-3 py-2"
          >
            <option value="">All Technologies</option>
            {availableFilters.technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm text-purple-200/60 block mb-2">
            Year
          </label>
          <select
            value={filters.year || ''}
            onChange={(e) => setFilter('year', e.target.value)}
            className="w-full bg-gray-800/50 text-purple-100 rounded-md border border-purple-500/20 px-3 py-2"
          >
            <option value="">All Years</option>
            {availableFilters.years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm text-purple-200/60 block mb-2">
            Team Member
          </label>
          <select
            value={filters.teamMember || ''}
            onChange={(e) => setFilter('teamMember', e.target.value)}
            className="w-full bg-gray-800/50 text-purple-100 rounded-md border border-purple-500/20 px-3 py-2"
          >
            <option value="">All Members</option>
            {availableFilters.teamMembers.map((member) => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}