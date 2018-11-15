import React, { Component } from 'react';
import headshot from './assets/images/headshot.jpg';
import html from './assets/images/html.png';
import css from './assets/images/css3.png';
import javascript from './assets/images/JavaScript.png';
import react from './assets/images/react3.png';
import angular from './assets/images/angular.png';
import node from './assets/images/nodejs.png';

const skills = [
  {
    image: html,
    text: "HTML"
  },
  {
    image: css,
    text: "CSS"
  },
  {
    image: javascript,
    text: "JAVASCIRPT"
  },
  {
    image: react,
    text: "REACT"
  },
  {
    image: angular,
    text: "ANGULAR"
  },
  {
    image: node,
    text: "NodeJS"
  },
]

class Skills extends Component {
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
                My Skills
              </span>
            </h2>
        </div>
        <div className="skill-container">
          {
            skills.map((skill, index) => (
              <div key={index} className="card animated fadeIn">
                <img src={skill.image} alt="Avatar" style={{ width: "100%" }}/>
                <div  style={{ textAlign: "center" }} className="container">
                  <h4><b>{skill.text}</b></h4> 
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
export default Skills;
