import React from "react";
import "./navbar.css"; // Import the CSS for styling the navbar
import Toggle from "../toggle/Toggle";
import logo from "../../img/logo.svg";
import logoSm from "../../img/logoSm.svg";

const Navbar = ({ setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-large" />
        <img src={logoSm} alt="Logo" className="logo-small" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" onClick={() => handleNavigation("home")}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" onClick={() => handleNavigation("about")}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" onClick={() => handleNavigation("projects")}>
           Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" onClick={() => handleNavigation("contact")}>
            Contact
          </a>
        </li>
        <li className="navbar-toggle">
          <Toggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
