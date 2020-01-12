import React from 'react';
const About = ({className=''}) => {
  return (
    <div className={`about ${className}`}>
      <h3 className='section-header'>About me</h3>
      <blockquote>Jack of most language, Master of a growing list</blockquote>
      <div className="section">
        <span>Focus on writing clean and efficient code</span>
      </div>
      <div className="section">
        <span className="sub-title">Education:</span> University of Essex (Bsc computer science)
      </div>
    </div>
  );
};

export default About;