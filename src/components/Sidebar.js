import React from 'react';

const Sidebar = ({ onNavigate }) => {
  return (
    <div>
      <button onClick={() => onNavigate('home')}>Home</button>
      <button onClick={() => onNavigate('search')}>Search</button>
    </div>
  );
};

export default Sidebar;
