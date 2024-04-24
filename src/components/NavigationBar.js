// NavigationBar.js
import React, { useState } from 'react';

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={showMenu ? 'show' : ''}>
        <li><a href="/">Home</a></li>
        <li><a href="/search">Search Course</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/portal">Portal</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
