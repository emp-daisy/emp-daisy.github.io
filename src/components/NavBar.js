import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css"
class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo-container">
          <p className="logo"><i className="fas fa-chess-queen"></i> The Empress</p>
        </div>
        <div className="nav-link-container">
          <div className="nav-link-container-right">
            <Link to="/About">About</Link>
            <Link to="/Skills">Skills</Link>
            <Link to="/Projects">Project</Link>
            <Link to="/Contact">Contact Me</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;