import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;