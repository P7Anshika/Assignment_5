// import React from 'react';
// import { Button } from '@mui/material';

// const Player = ({ song, onPlayPause }) => {
//   return (
//     <div>
//       <h2>{song ? song.title : "No song playing"}</h2>
//       <Button variant="contained" color="primary" onClick={onPlayPause}>
//         {song ? "Play/Pause" : "Select a song"}
//       </Button>
//     </div>
//   );
// };

// export default Player;
import React from 'react';
import { Button } from '@mui/material';  // Ensure Material-UI is installed

const Player = ({ song, onPlayPause }) => {
  return (
    <div>
      <h2>{song ? song.title : "No song playing"}</h2>
      <Button variant="contained" color="primary" onClick={onPlayPause}>
        {song ? "Play/Pause" : "Select a song"}
      </Button>
    </div>
  );
};

export default Player;
