import React, { Component } from "react";
import * as d3 from "d3";
import * as cloud from 'd3-cloud'
//$skill-colors: (#f63a0f, #f27011, #f2b01e, #f2d31b, #86e01e);
const colors = [
  '#540404', '#370454', '#045254', '#100454',
  '#044d54', '#105404', '#515404', '#543904'
]
const skills = [
  // TESTING
  { label: "Testing", value: 10, type: 'convention' },
  { label: "GraphQL", value: 10, type: 'tools' },
  { label: "Jest", value: 10, type: 'tools' },
  { label: "Mocha", value: 10, type: 'tools' },
  { label: "Webpack", value: 10, type: 'tools' },
  { label: "Git", value: 10, type: 'tools' },
  { label: "CircleCI", value: 10, type: 'tools' },
  { label: "CodeClimate", value: 5, type: 'tools' },
  { label: "Jira", value: 5, type: 'tools' },
  { label: "Slack", value: 5, type: 'tools' },
  { label: "Heroku", value: 5, type: 'tools' },
  { label: "Pivotal Tracker", value: 5, type: 'tools' },
  // DATABASES
  { label: "Databases", value: 10, type: 'tools' },
  { label: "PostgresQL", value: 10, type: 'tools' },
  { label: "MySQL", value: 10, type: 'tools' },
  { label: "MongoDB", value: 10, type: 'tools' },
  // OTHERS
  { label: "DevOps", value: 10, type: 'ops' },
  { label: "Docker", value: 10, type: 'ops' },
  { label: "Bash scripting", value: 10, type: 'ops' },
  // LANGUAGES
  { label: "Javascript", value: 25, type: 'language' },
  { label: "Typescript", value: 25, type: 'language' },
  { label: "Python", value: 25, type: 'language' },
  // MOBILE
  { label: "React Native", value: 25, type: 'mobile' },
  // BACKEND
  { label: "Nest JS", value: 25, type: 'backend' },
  { label: "API", value: 15, type: 'backend' },
  { label: "TypeORM", value: 15, type: 'backend' },
  { label: "Node JS", value: 10, type: 'backend' },
  { label: "Express JS", value: 10, type: 'backend' },
  // FRONTEND
  { label: "React JS", value: 20, type: 'frontend' },
  { label: "Redux", value: 10, type: 'frontend' },
  { label: "Next JS", value: 20, type: 'frontend' },
  { label: "Angular", value: 10, type: 'frontend' },
  { label: "HTML", value: 10, type: 'frontend' },
  { label: "CSS", value: 10, type: 'frontend' },
  { label: "SCSS", value: 10, type: 'frontend' },
  { label: "Bootstrap", value: 10, type: 'frontend' },
  { label: "Semantic", value: 10, type: 'frontend' },
  { label: "PHP", value: 5, type: 'frontend' },
];
/**
  (1+ years): ES6, Webpack, Node, Express, MongoDB, PostgreSQL, MySQL, PHP, SCSS, CodeClimate, CircleCI, TravisCI, Heroku, Jira
  (< 1 year): TypeORM, Typescript, Bash scripting, and GraphQL
 */

const getColor = (type) => {
  switch(type){
    case 'frontend':
      return colors[0];
    case 'backend':
      return colors[1];
    case 'mobile':
      return colors[2];
    case 'ops':
      return colors[3];
    case 'tools':
      return colors[4];
    case 'language':
      return colors[5];
    case 'convention':
      return colors[6];
    default:
      return colors[7]
  }
}

class Technology extends Component {
  svgRef = React.createRef();
  settings = {
    overflow: false,
    data: skills,
    zoom: 1.1,
    width: '100%',
    height: 450,
    padding: 0,
    showLegend: true,
    legendPercentage: 20,
  };
  componentDidMount() {
    this.svg = this.svgRef.current;
    // this.renderChart();
    this.renderWordClouds();
    // window.addEventListener('resize', this.renderChart, false);
    window.addEventListener('resize', this.renderWordClouds, false);
  }

  componentDidUpdate() {
    const { width, height } = this.settings;
    if (width !== 0 && height !== 0) {
      this.renderWordClouds();
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.renderWordClouds, false);
  }

  renderWordClouds = () => {
    this.settings.width = this.svg.parentNode.clientWidth;
    const {width, height} = this.settings;
    this.svg.innerHTML = '';
    cloud()
    	.size([width, height])
      .words(skills)
      .rotate(() => ~~(Math.random() * 2) * 90)
      .padding(2)
      .font("Artifika")
      .fontWeight(800)
    	.text((d) => d.label)
    	.fontSize((d) => d.value*2)
    	.on("end", this.drawSkillCloud)
    	.start();
  }

  drawSkillCloud = () => {
    const {width, height} = this.settings
    d3.select(this.svg)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + ~~(width / 2) + "," + ~~(height / 2) + ")")
        .selectAll("text")
        .data(skills)
        .enter().append("text")
        .style("font-size", (d) => `${d.value*2}px`)
        .style("-webkit-touch-callout", "none")
        .style("-webkit-user-select", "none")
        .style("-khtml-user-select", "none")
        .style("-moz-user-select", "none")
        .style("-ms-user-select", "none")
        .style("user-select", "none")
        .style("cursor", "default")
        .style("opacity", .8)
        .style("font-family", "Artifika")
        .style("font-weight", 700)
        .style("fill", (d) => getColor(d.type))
        .attr("text-anchor", "middle")
        .attr("transform", (d) => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
        .text((d) => d.label)
        .on("mouseover", function ()  {
          d3.select(this)
          .style("opacity", 1)
        })
        .on("mouseout", function() {
          d3.select(this)
          .style("opacity", .8)
        })
  }

  render() {
    const { className='' } = this.props;
    return (
      <div className={`technologies ${className}`}>
        <h3 className='section-header'>Expertise</h3>
        <blockquote>Jack of many language, Master of a growing list</blockquote>
        <div className="section">
          <span>Focus on writing clean and efficient code</span>
        </div>
        <div className="skill-set">
          <svg ref={this.svgRef} />
        </div>
      </div>
    );
  }
}

export default Technology;
