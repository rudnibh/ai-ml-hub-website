import React from 'react';
import { Search } from 'lucide-react';
import { useProjectFilters } from '../../hooks/useProjectFilters';

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useProjectFilters();

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search projects..."
        className="w-full bg-gray-900/50 backdrop-blur-sm text-purple-100 rounded-lg pl-10 pr-4 py-3 border border-purple-500/20 focus:border-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
      />
    </div>
  );
}