import React from 'react';
import { NavLink } from 'react-router-dom';
import { TiHomeOutline } from 'react-icons/ti';

const NavBar = () => (
  <nav className="navigation">
    <div>
      <NavLink className="home-link" to="/">
        <TiHomeOutline className="home-svg" />
      </NavLink>
    </div>
    <p className="logo">CRYPTO</p>
  </nav>
);

export default NavBar;
