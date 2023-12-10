import React from 'react';

const Search = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search notes"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}

export default Search;