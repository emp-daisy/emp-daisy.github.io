import React, { Component } from 'react';
import "../styles/Projects.css";


const colors = [
  {
    gradient: "expresso",
    line: "4px solid #ad5389"
  },
  {
    gradient: "moon-purple",
    line: "4px solid #4e54c8"
  },
  {
    gradient: "red-sunset",
    line: "4px solid #355C7D"
  },
  {
    gradient: "shifter",
    line: "4px solid #bc4e9c"
  },
  {
    gradient: "BigHead",
    line: "4px solid #c94b4b"
  },
]

const projects = [
  "Event Manager",
  "Converge",
  "Classique",
  "MoMap",
  "Inventory App",
  "Cringe"
]

const getColorIndex = () => Math.floor(Math.random() * 5);


class Projects extends Component {
  render() {
    return (
      <div className="animated fadeIn" style={{ padding: "3em" }}>
        <div style={{ textAlign: "center", display: "inline"}}>
            <h2 style={{ 
                textAlign: "center",
                borderBottom: "1px solid #000",
                lineHeight: "0.1em", 
                margin: "10px 0 20px" 
            }}>
              <span style={{ padding: "0 10px", background: "white", fontFamily:"'Fira Sans', sans-serif" }}>
                Projects
              </span>
            </h2>
        </div>
        <div className="skill-container">
          {
            projects.map((project, index) => {
              const colorIndex = getColorIndex();
              console.log(colorIndex);
              const colorLine = colors[colorIndex].line;
              const baseClass = `base ${colors[colorIndex].gradient}`
              return (
                <div key={index} className="project-card">
                    <div className="title">
                      <h4><b>{project}</b></h4>
                      <hr style={{borderTop: colorLine }} />
                    </div>
                    <div className="desc">
                      <p>
                        Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.
                      </p>
                    </div>
                    <div className={baseClass}>
                      <p>Architect & Engineer</p> 
                    </div>
                </div>
              );
            })
          }
      </div>
    </div>
    );
  }
}
export default Projects;
