import React, { Component } from 'react';
import "../styles/ImagePanel.css";
class ImagePanel extends Component {
  render() {
    return (
      <div className="panel">
        <div className="frame">
          <div className="image">
            <img className="responsive" alt="empress" src="https://scontent-lht6-1.cdninstagram.com/vp/631243a63217f0e8f2d79f635919deaa/5C728DEF/t51.2885-15/e35/37011313_246250636194022_8462809250870067200_n.jpg" />
          </div>
        </div>
        <div className="name">
          <p>Jessica Madufor</p>
          <p className="occupation">Software Developer</p>
        </div>
      </div>
    );
  }
}

export default ImagePanel;