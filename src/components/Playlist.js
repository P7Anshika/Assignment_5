import React from 'react';

const Playlist = ({ playlist, onSelectSong }) => {
  return (
    <div>
      <h2>{playlist.name}</h2>
      <ul>
        {playlist.songs.map((song) => (
          <li key={song.id} onClick={() => onSelectSong(song)}>
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
