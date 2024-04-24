// SearchCoursePage.js
import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';

const SearchCoursePage = ({ programs }) => {
  const [filteredPrograms, setFilteredPrograms] = useState([]);

  const handleFilterChange = (selectedFilters) => {
    // Implement filtering logic based on selected filters
    const filteredPrograms = programs.filter(program =>
      selectedFilters.includes(program.category) // Assuming 'category' is a property in each program
    );
    setFilteredPrograms(filteredPrograms);
  };

  return (
    <div className="search-course-page">
      <FilterSidebar programs={programs} onFilterChange={handleFilterChange} />
      <div className="main-content">
        <h1>Search Course Page</h1>
        {/* Render filtered programs */}
        <ul>
          {filteredPrograms.map(program => (
            <li key={program.id}>{program.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchCoursePage;
