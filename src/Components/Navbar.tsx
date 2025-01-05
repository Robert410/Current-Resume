import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link className="nav-link" to="/">
          Codegrid
        </Link>
      </div>
      <div className="nav-links">
        <div className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
        <div className="nav-item">
  <a className="nav-link" href="/page.html" target="_blank" rel="noopener noreferrer">
    Open Static Page
  </a>
</div>
      </div>
    </div>
  );
};

export default NavBar;
