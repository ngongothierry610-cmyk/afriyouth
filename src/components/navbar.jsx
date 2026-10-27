import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="nav-logo-icon" aria-hidden="true">
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
        </div>
        <div className="nav-brand-text">
          <h2>AfriYouth</h2>
          <h3>INNOVATION LABS</h3>
        </div>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" className={isActive("/") ? "active" : ""} onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={handleLinkClick}>
          About
        </Link>
        <Link to="/service" className={isActive("/service") ? "active" : ""} onClick={handleLinkClick}>
          Services
        </Link>
        <Link to="/programs" className={isActive("/programs") ? "active" : ""} onClick={handleLinkClick}>
          Programs
        </Link>
        <Link to="/blog" className={isActive("/blog") ? "active" : ""} onClick={handleLinkClick}>
          Impact & Resources
        </Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={handleLinkClick}>
          Contact
        </Link>
      </div>

      <div className="nav-right">
        <button className="get-involved-btn">
          <span>Get Involved</span> <span className="arrow-icon">↗</span>
        </button>

        <button 
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}