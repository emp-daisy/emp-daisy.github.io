import React from 'react';

const projects = [
  {
    name: 'Tech Eat',
    website: 'http://techone-solutions.com/tech-eat',
    code: undefined,
    description: 'A web/mobile food ordering application with a dashboard to manage orders.',
    year: 2020,
    stack: ['Javascript', 'NodeJS', 'PHP', 'Xamarin', 'MongoDB']
  },
  {
    name: 'Go Space Ball',
    website: 'http://techone-solutions.com/go-space-ball',
    code: undefined,
    description: 'A simple but challenging mobile game.',
    year: 2017,
    stack: ['Unity']
  },
  {
    name: 'Smart Education',
    website: 'http://smarteducation.co/',
    code: undefined,
    description: 'A Website for an educational counselling agency',
    year: 2016,
    stack:[ 'PHP', 'Wordpress']
  },
  {
    name: 'Momap',
    website: 'https://momap-client.herokuapp.com/',
    code: undefined,
    description: 'Built a web-based and mobile application for streaming video content with subtitle suggestions.',
    year: 2018,
    stack: ['Javascript', 'Node', 'React Native', 'Angular 5', 'MongoDB']
  },
  {
    name: 'Vicinitee',
    website: 'https://vicinitiee.herokuapp.com/login',
    code: undefined,
    description: 'A platform to help event companies make reservations and manage their day-to-day business activities.',
    year: 2019,
    stack: ['Javascript', 'Node', 'React', 'Postgres']
  },
  {
    name: 'React Table It',
    website: 'https://emp-daisy.github.io/react-table-it/',
    code: 'https://github.com/emp-daisy/react-table-it',
    description: 'A simple data-table component with React',
    year: 2019,
    stack: ['Javascript', 'React']
  },
]
const Portfolio = ({className=''}) => {
  return (
    <div className={`contact ${className}`}>
      <h3 className='section-header'>Portfolio</h3>
      <p>Below are few of the work I have done so far</p>
      <ul className="portfolio-cards">
        {projects.map((proj)=>(
          <li className="card">
            <div className="card_content">
              <h2 className="card_title">{proj.name}{proj.year && <span>{proj.year}</span>}</h2>
              <p className="card_text">{proj.description}</p>
              <div className="card_tag">
                {proj.stack && proj.stack.map((stk)=> <span>{stk}</span>)}
              </div>
              <div className='card_action'>
                {proj.website && <a href={proj.website}>Demo</a>}
                {proj.code && <a href={proj.code}>Code</a>}
              </div>
            </div>
          </li>
        ))}
        </ul>
    </div>
  );
};

export default Portfolio;