// FilterSidebar.js
import React, { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    university: '',
    course: '',
    ranking: '',
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });
  };

  const handleResetFilters = () => {
    setFilters({
      university: '',
      course: '',
      ranking: '',
    });
    onFilterChange({});
  };

  return (
    <div className="sidebar">
      <h2>Filters</h2>
      <button onClick={handleResetFilters}>Reset Filters</button>
      <div>
        <label>University Name:</label>
        <input
          type="text"
          name="university"
          value={filters.university}
          onChange={handleFilterChange}
          placeholder="Enter University Name"
        />
      </div>
      <div>
        <label>Course Name:</label>
        <input
          type="text"
          name="course"
          value={filters.course}
          onChange={handleFilterChange}
          placeholder="Enter Course Name"
        />
      </div>
      <div>
        <label>German Ranking:</label>
        <input
          type="text"
          name="ranking"
          value={filters.ranking}
          onChange={handleFilterChange}
          placeholder="Enter German Ranking"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
