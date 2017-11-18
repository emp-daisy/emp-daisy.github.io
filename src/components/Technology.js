import React from 'react';
const Technology = () => {
  return (
    <div className="technologies">
      <h3>Skills</h3>
      <span>
        I specialize in front end development and back end development.
      </span>
      <div className="skill-set">
        <span>
          HTML 
            <i className="fa fa-1x fa-html5"></i>
        </span>
        <div class="skill-bar">
          <div class="skills bar-90">90%</div>
        </div>

        <span>CSS
            <i className="fa fa-1x fa-css3"></i>
        </span>
        <div class="skill-bar">
          <div class="skills bar-80">80%</div>
        </div>

        <span>JavaScript
            <i className="fa fa-1x fa-github-square"></i>
        </span>
        <div class="skill-bar">
          <div class="skills bar-65">65%</div>
        </div>

        <span>PHP
            <i className="fa fa-1x fa-angular"></i>
        </span>
        <div class="skill-bar">
          <div class="skills bar-60">60%</div>
        </div>
      </div>
    </div>
  );
};

export default Technology;