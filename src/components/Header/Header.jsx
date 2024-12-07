import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>NURSQUAD</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="./Main">Home</a></li>
          <li><a href="./About">About</a></li>
          <li><a href="./Call">Call</a></li>
          <li><a href="./Azbuka">Study</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

