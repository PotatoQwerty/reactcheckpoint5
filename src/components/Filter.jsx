import React from "react";

const Filter = ({ onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        name="title"
        placeholder="Filter by Title"
        onChange={handleChange}
        className="filter-input"
      />
      <input
        type="number"
        name="rating"
        placeholder="Filter by Rating"
        onChange={handleChange}
        className="filter-input"
        min="0"
        max="10"
        step="0.1"
      />
    </div>
  );
};

export default Filter;
