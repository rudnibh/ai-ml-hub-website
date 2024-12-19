import React from 'react';
import { Filter } from 'lucide-react';

interface ProjectFiltersProps {
  selectedTech: string[];
  setSelectedTech: (tech: string[]) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
}

export default function ProjectFilters({
  selectedTech,
  setSelectedTech,
  selectedYear,
  setSelectedYear,
}: ProjectFiltersProps) {
  const technologies = [
    'React', 'Python', 'TensorFlow', 'PyTorch', 'Computer Vision',
    'NLP', 'Machine Learning', 'Deep Learning', 'Data Science'
  ];

  const years = ['2024', '2023', '2022'];

  const handleTechChange = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter(t => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center space-x-2">
        <Filter className="text-purple-400 h-5 w-5" />
        <span className="text-gray-300">Filters:</span>
      </div>

      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="bg-gray-800/50 border border-purple-900/20 rounded-lg text-white px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
      >
        <option value="all">All Years</option>
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <div className="flex flex-wrap gap-2">
        {technologies.map(tech => (
          <button
            key={tech}
            onClick={() => handleTechChange(tech)}
            className={`px-3 py-1 rounded-full text-sm transition-all ${
              selectedTech.includes(tech)
                ? 'bg-purple-500 text-white'
                : 'bg-gray-800/50 text-gray-300 hover:bg-purple-500/20'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
}