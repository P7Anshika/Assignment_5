import React from 'react';
import MusicList from './MusicList';

const Search = ({ searchResults, onSelectSong }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <MusicList songs={searchResults} onSelectSong={onSelectSong} />
    </div>
  );
};

export default Search;
