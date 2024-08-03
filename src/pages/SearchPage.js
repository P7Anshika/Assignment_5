import React from 'react';
import Search from './components/Search';

const SearchPage = ({ searchResults, onSelectSong }) => {
  return (
    <div>
      <h1>Search Page</h1>
      <Search searchResults={searchResults} onSelectSong={onSelectSong} />
    </div>
  );
};

export default SearchPage;
