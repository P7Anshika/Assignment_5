import React from 'react';
import Playlist from './components/Playlist';
//import Playlist from '../components/Playlist';  // Adjust path if necessary

const Home = ({ playlists, onSelectSong }) => {
  return (
    <div>
      <h1>Home</h1>
      {playlists.map((playlist, index) => (
        <Playlist key={index} playlist={playlist} onSelectSong={onSelectSong} />
      ))}
    </div>
  );
};

export default Home;
