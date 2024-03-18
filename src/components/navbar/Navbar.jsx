import React from "react";
import "./navbar.css"; // Import the CSS for styling the navbar
import Toggle from "../toggle/Toggle";
import logo from "../../img/logo.svg"
import logoSm from "../../img/logoSm.svg"

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-large" />
        <img src={logoSm} alt="Logo" className="logo-small" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
        <a href="#about" onClick={() => setCurrentPage("about")}>About</a>
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
