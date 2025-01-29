import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">React Course Platform</h1>
      <nav className="header-nav">
        <button className="header-button">Home</button>
        <button className="header-button">Courses</button>
        <button className="header-button">About</button>
      </nav>
    </header>
  );
}

export default Header;
