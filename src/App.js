
import React, { useState } from 'react';
import Header from '../components/Header'; //src/components/Header.js
import Player from '../components/Player';  
import Sidebar from '../components/Sidebar';  
import Home from '../pages/Home';  
import SearchPage from '../pages/SearchPage';  
import './Styles.css';  

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [playlists] = useState([
    {
      name: 'Top Hits',
      songs: [
        { id: 1, title: 'Song A' },
        { id: 2, title: 'Song B' },
      ],
    },
  ]);
  const [searchResults, setSearchResults] = useState([]);
  const [view, setView] = useState('home');

  const handlePlayPause = () => {
    // Implement play/pause logic
  };

  const handleSelectSong = (song) => {
    setCurrentSong(song);
    // Implement additional logic for selecting a song
  };

  const handleSearch = (query) => {
    // Implement search logic and update searchResults
    const results = playlists.flatMap(playlist => playlist.songs)
                               .filter(song => song.title.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  const handleNavigate = (view) => {
    setView(view);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Sidebar onNavigate={handleNavigate} />
      <main>
        {view === 'home' && <Home playlists={playlists} onSelectSong={handleSelectSong} />}
        {view === 'search' && <SearchPage searchResults={searchResults} onSelectSong={handleSelectSong} />}
      </main>
      <Player song={currentSong} onPlayPause={handlePlayPause} />
    </div>
  );
};

export default App;
