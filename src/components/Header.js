// import React from 'react';
// import { AppBar, Toolbar, Typography, TextField } from '@mui/material';

// const Header = ({ onSearch }) => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           Spotify 2.0
//         </Typography>
//         <TextField 
//           label="Search"
//           variant="outlined"
//           onChange={(e) => onSearch(e.target.value)}
//         />
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
import React from 'react';
import { AppBar, Toolbar, Typography, TextField } from '@mui/material';  // Ensure Material-UI is installed

const Header = ({ onSearch }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Spotify 2.0
        </Typography>
        <TextField 
          label="Search"
          variant="outlined"
          onChange={(e) => onSearch(e.target.value)}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
