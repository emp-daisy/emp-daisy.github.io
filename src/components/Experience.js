import React from "react";

const WorkTimeline = [
  {
    icon: 'graduation-cap',
    title: 'BSc Computer Science',
    start: '2013',
    end: '2016',
    description: `Awarded by The University of Essex.`
  },
  {
    icon: 'rocket',
    title: 'Freelance Developer',
    start: '2015',
    end: '2017',
    description: ''
  },
  {
    icon: 'briefcase',
    title: 'Frontend Developer @ ECR Technologies',
    start: '2017',
    end: '2018',
    description: `Worked on several projects such as a School Management
    Application using PHP.`
  },
  {
    icon: 'briefcase',
    title: 'Frontend Developer @ Andela',
    start: '2018',
    description: `Buliding web applications in Javascript ensuring the
    applications met all the requirements by writing unit and
    end-to-end tests throughout development.`
  },
  {
    icon: 'briefcase',
    title: 'Frontend Developer @ Secoura',
    start: '2019',
    end: '2020',
    description: `Working in a remote team using NextJS and Redux to build a
    cybersecurity web application that provides real-time
    collection, management, analysis and detection of emerging
    cyber threats across the business system.`
  },
  {
    icon: 'briefcase',
    title: 'Full-stack Developer @ Clinify Inc',
    start: '2020',
    end: '2021',
    description: `Planning and building backend structure with graphQL endpoints
    ● Developed full-stack web applications which processed, analyzed and rendered data visually
    ● Capturing the best development practices that helped to decrease code complexity and improve the maintainability of the shared libraries and components
    ● Design and configuration of the fully automated CI/CD lifecycle for the application resulting in 5x reduction of average deployment time`
  },
]

const Experience = ({ className = "" }) => {
  return (
    <div className={`contact ${className}`}>
      <h3 className="section-header">Education & Experience</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline">
              {WorkTimeline.map((work, idx) => (
                <div className="timeline" key={`experience-${idx}`}>
                  <div className="timeline-icon">
                    <i className={`fa fa-${work.icon}`}></i>
                  </div>
                  <span className="year">
                    {work.start} - {work.end ? work.end : <i className="fa fa-clock-o"></i>}
                  </span>
                  <div className="timeline-content">
                    <h5 className="title">{work.title}</h5>
                    <p className="description">{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
