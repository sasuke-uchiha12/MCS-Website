import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <div className={`nav-links ${menuActive ? 'active' : ''}`}>
        <Link to="/events" className="nav-link" onClick={toggleMenu}>EVENTS</Link>
        <Link to="/gallery" className="nav-link" onClick={toggleMenu}>GALLERY</Link>
        <Link to="/team" className="nav-link" onClick={toggleMenu}>TEAM</Link>
        <Link to="/contact" className="nav-link" onClick={toggleMenu}>CONTACT</Link>
      </div>
      <div className="menu-button" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
