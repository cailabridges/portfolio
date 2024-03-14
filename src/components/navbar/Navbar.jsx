import React from "react";
import "./navbar.css"; // Import the CSS for styling the navbar
import Toggle from "../toggle/Toggle";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/About">About</a>
        </li>
        <li className="nav-item">
          <a href="#my-work">My Work</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        <li className="navbar-toggle">
        <Toggle />
      </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
