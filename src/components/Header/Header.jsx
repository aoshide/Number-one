import React, { useState } from "react";
import "./Header.css";


const Header = () => {


  return (
    <header className="header">
      <div className="logo">
        <h1>NURSQUAD</h1>
      </div>
      <nav className="nav">
        <a href="./Main">Home</a>
        <a href="./About">About</a>
        <a href="./Call">Call</a>
        <a href="./Azbuka">Study</a>
        <a href="./Registr" className="register-btn">
          Registration
        </a>
      </nav>

    </header>
  );
};

export default Header;
