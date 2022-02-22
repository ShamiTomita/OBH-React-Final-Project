import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/home"
      >
        OBH
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/content"
      >
        Content
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/logout"
      >
        Logout
      </NavLink>
    </div>
  );
}

export default NavBar;
