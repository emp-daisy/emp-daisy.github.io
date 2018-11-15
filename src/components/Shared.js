import React, { Component } from 'react';
import NavBar from './NavBar';
import ImagePanel from './ImagePanel';
import InfoPanel from './InfoPanel';
import "../styles/Board.css"
import '../styles/Home.css';
class Shared extends Component {
  render() {
    return (
      <div className="Aligner">
        <div className="board animated zoomIn">
          <NavBar />
          <ImagePanel />
          <InfoPanel />
        </div>
    </div>
    );
  }
}

export default Shared;