import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div style={{ padding: "3em" }}>
        <div style={{ textAlign: "center", display: "inline"}}>
            <h2 style={{
                textAlign: "center",
                borderBottom: "1px solid #000",
                lineHeight: "0.1em",
                margin: "10px 0 20px"
            }}>
              <span style={{ padding: "0 10px", background: "white", fontFamily:"'Fira Sans', sans-serif" }}>
                About Me
              </span>
            </h2>
            <p className="animated fadeIn" style={{ fontSize: "20px", lineHeight: "2.7em", fontFamily:"'Fira Sans', sans-serif" }}>
              Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit.
              Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.
              Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit.
              Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.
              Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit.
            </p>
        </div>
      </div>
    );
  }
}
export default About;
