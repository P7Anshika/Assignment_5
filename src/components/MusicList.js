import React from 'react';

const MusicList = ({ songs, onSelectSong }) => {
  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id} onClick={() => onSelectSong(song)}>
          {song.title}
        </li>
      ))}
    </ul>
  );
};

export default MusicList;
