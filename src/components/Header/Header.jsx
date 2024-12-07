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
          <a href="./Main">Home</a>
          <a href="./About">About</a>
          <a href="./Call">Call</a>
          <a href="./Azbuka">Study</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

