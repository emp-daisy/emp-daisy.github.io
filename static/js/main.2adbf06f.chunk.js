(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(50)},42:function(e,t,a){e.exports=a.p+"static/media/portfolio_dp.8e9a0ac4.jpg"},43:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(21),r=a(53),o=a(6),i=a(7),s=a(13),u=a(12),d=a(3),m=[{link:"https://github.com/emp-daisy",icon:"github-square"},{link:"https://www.linkedin.com/in/adachi-jessica-m-57a049a6",icon:"linkedin-square"},{link:"https://medium.com/@empressia",icon:"medium"},{link:"mailto:adajess01@gmail.com?Subject=Enquiry",icon:"envelope-square"}],p=function(e){var t=e.size,a=void 0===t?"2x":t;return l.a.createElement("div",{className:"social-icons"},m.map(function(e,t){var n=e.link,c=e.icon;return l.a.createElement("a",{href:n,key:"social-".concat(t)},l.a.createElement("i",{className:"fa fa-".concat(a," fa-").concat(c)}))}))},f=function(e){var t=e.className,n=void 0===t?"":t;return l.a.createElement("div",{className:"profile ".concat(n)},l.a.createElement("div",{className:"img-frame"},l.a.createElement("img",{src:a(42),className:"profile-pic",alt:"profile"})),l.a.createElement("span",{className:"full-name"},"Hello. I'm Jessica M."),l.a.createElement("span",{className:"bio"},"Full stack web and mobile  developer"),l.a.createElement(p,null))},v=a(14),h=a(22);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(d.a)(e);if(t){var l=Object(d.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var b=["#540404","#370454","#045254","#100454","#044d54","#105404","#515404","#543904"],g=[{label:"Testing",value:10,type:"convention"},{label:"GraphQL",value:10,type:"tools"},{label:"Jest",value:10,type:"tools"},{label:"Mocha",value:10,type:"tools"},{label:"Webpack",value:10,type:"tools"},{label:"Git",value:10,type:"tools"},{label:"CircleCI",value:10,type:"tools"},{label:"CodeClimate",value:5,type:"tools"},{label:"Jira",value:5,type:"tools"},{label:"Slack",value:5,type:"tools"},{label:"Heroku",value:5,type:"tools"},{label:"Pivotal Tracker",value:5,type:"tools"},{label:"Databases",value:10,type:"tools"},{label:"PostgresQL",value:10,type:"tools"},{label:"MySQL",value:10,type:"tools"},{label:"MongoDB",value:10,type:"tools"},{label:"DevOps",value:10,type:"ops"},{label:"Docker",value:10,type:"ops"},{label:"Bash scripting",value:10,type:"ops"},{label:"Javascript",value:25,type:"language"},{label:"Typescript",value:25,type:"language"},{label:"Python",value:25,type:"language"},{label:"React Native",value:25,type:"mobile"},{label:"NestJS",value:25,type:"backend"},{label:"API",value:15,type:"backend"},{label:"TypeORM",value:15,type:"backend"},{label:"NodeJS",value:10,type:"backend"},{label:"ExpressJS",value:10,type:"backend"},{label:"ReactJS",value:20,type:"frontend"},{label:"Redux",value:10,type:"frontend"},{label:"NextJS",value:20,type:"frontend"},{label:"Angular",value:10,type:"frontend"},{label:"HTML",value:10,type:"frontend"},{label:"CSS",value:10,type:"frontend"},{label:"SCSS",value:10,type:"frontend"},{label:"Bootstrap",value:10,type:"frontend"},{label:"Semantic",value:10,type:"frontend"},{label:"PHP",value:5,type:"frontend"}],E=function(e){switch(e){case"frontend":return b[0];case"backend":return b[1];case"mobile":return b[2];case"ops":return b[3];case"tools":return b[4];case"language":return b[5];case"convention":return b[6];default:return b[7]}},k=function(e){Object(s.a)(a,e);var t=y(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).svgRef=l.a.createRef(),e.settings={overflow:!1,data:g,zoom:1.1,width:"100%",height:450,padding:0,showLegend:!0,legendPercentage:20},e.renderWordClouds=function(){e.settings.width=e.svg.parentNode.clientWidth;var t=e.settings,a=t.width,n=t.height;e.svg.innerHTML="",h().size([a,n]).words(g).rotate(function(){return 90*~~(2*Math.random())}).padding(2).font("Artifika").fontWeight(800).text(function(e){return e.label}).fontSize(function(e){return 2*e.value}).on("end",e.drawSkillCloud).start()},e.drawSkillCloud=function(){var t=e.settings,a=t.width,n=t.height;v.a(e.svg).attr("width",a).attr("height",n).append("g").attr("transform","translate("+~~(a/2)+","+~~(n/2)+")").selectAll("text").data(g).enter().append("text").style("font-size",function(e){return"".concat(2*e.value,"px")}).style("-webkit-touch-callout","none").style("-webkit-user-select","none").style("-khtml-user-select","none").style("-moz-user-select","none").style("-ms-user-select","none").style("user-select","none").style("cursor","default").style("opacity",.8).style("font-family","Artifika").style("font-weight",700).style("fill",function(e){return E(e.type)}).attr("text-anchor","middle").attr("transform",function(e){return"translate("+[e.x,e.y]+")rotate("+e.rotate+")"}).text(function(e){return e.label}).on("mouseover",function(){v.a(this).style("opacity",1)}).on("mouseout",function(){v.a(this).style("opacity",.8)})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.svg=this.svgRef.current,this.renderWordClouds(),window.addEventListener("resize",this.renderWordClouds,!1)}},{key:"componentDidUpdate",value:function(){var e=this.settings,t=e.width,a=e.height;0!==t&&0!==a&&this.renderWordClouds()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.renderWordClouds,!1)}},{key:"render",value:function(){var e=this.props.className,t=void 0===e?"":e;return l.a.createElement("div",{className:"technologies ".concat(t)},l.a.createElement("h3",{className:"section-header"},"Expertise"),l.a.createElement("blockquote",null,"Jack of many language, Master of a growing list"),l.a.createElement("div",{className:"section"},l.a.createElement("span",null,"Focus on writing clean and efficient code")),l.a.createElement("div",{className:"skill-set"},l.a.createElement("svg",{ref:this.svgRef})))}}]),a}(n.Component),N=function(e){var t=e.className,a=void 0===t?"":t;return l.a.createElement("div",{className:"contact ".concat(a)},l.a.createElement("h3",null,"Thank!"),l.a.createElement("h5",null,"Get in touch. Let's talk business. ",l.a.createElement("i",{className:"fa fa-smile-wink face"})),l.a.createElement(p,{size:"4x"}),l.a.createElement("small",null,"Sure I would get back to you ASAP!!!"),l.a.createElement("small",{className:"copyright"},"\xa9  ",(new Date).getFullYear()," Empress ",l.a.createElement("i",{className:"fa fa-heart fa-beat"})))},w=[{icon:"graduation-cap",title:"BSc Computer Science",start:"2013",end:"2016",description:"Awarded by The University of Essex."},{icon:"rocket",title:"Freelance Developer",start:"2015",end:"2017",description:""},{icon:"briefcase",title:"Frontend Developer @ ECR Technologies",start:"2017",end:"2018",description:"Worked on several projects such as a School Management\n    Application using PHP."},{icon:"briefcase",title:"Frontend Developer @ Andela",start:"2018",description:"Buliding web applications in Javascript ensuring the\n    applications met all the requirements by writing unit and\n    end-to-end tests throughout development."},{icon:"briefcase",title:"Frontend Developer @ Secoura",start:"2019",end:"2020",description:"Working in a remote team using NextJS and Redux to build a\n    cybersecurity web application that provides real-time\n    collection, management, analysis and detection of emerging\n    cyber threats across the business system."},{icon:"briefcase",title:"Full-stack Developer @ Clinify Inc",start:"2020",end:"2021",description:"Planning and building backend structure with graphQL endpoints\n    \u25cf Developed full-stack web applications which processed, analyzed and rendered data visually\n    \u25cf Capturing the best development practices that helped to decrease code complexity and improve the maintainability of the shared libraries and components\n    \u25cf Design and configuration of the fully automated CI/CD lifecycle for the application resulting in 5x reduction of average deployment time"}],x=function(e){var t=e.className,a=void 0===t?"":t;return l.a.createElement("div",{className:"contact ".concat(a)},l.a.createElement("h3",{className:"section-header"},"Education & Experience"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"main-timeline"},w.map(function(e,t){return l.a.createElement("div",{className:"timeline",key:"experience-".concat(t)},l.a.createElement("div",{className:"timeline-icon"},l.a.createElement("i",{className:"fa fa-".concat(e.icon)})),l.a.createElement("span",{className:"year"},e.start," - ",e.end?e.end:l.a.createElement("i",{className:"fa fa-clock-o"})),l.a.createElement("div",{className:"timeline-content"},l.a.createElement("h5",{className:"title"},e.title),l.a.createElement("p",{className:"description"},e.description)))}))))))},S=[{name:"Tech Eat",website:"http://techone-solutions.com/tech-eat",code:void 0,description:"A web/mobile food ordering application with a dashboard to manage orders.",year:2020,stack:["Javascript","NodeJS","PHP","Xamarin","MongoDB"]},{name:"Go Space Ball",website:"http://techone-solutions.com/go-space-ball",code:void 0,description:"A simple but challenging mobile game.",year:2017,stack:["Unity"]},{name:"Smart Education",website:"http://smarteducation.co/",code:void 0,description:"A Website for an educational counselling agency",year:2016,stack:["PHP","Wordpress"]},{name:"Momap",website:"https://momap-client.herokuapp.com/",code:void 0,description:"Built a web-based and mobile application for streaming video content with subtitle suggestions.",year:2018,stack:["Javascript","Node","React Native","Angular 5","MongoDB"]},{name:"Vicinitee",website:"https://vicinitiee.herokuapp.com/login",code:void 0,description:"A platform to help event companies make reservations and manage their day-to-day business activities.",year:2019,stack:["Javascript","Node","React","Postgres"]},{name:"React Table It",website:"https://emp-daisy.github.io/react-table-it/",code:"https://github.com/emp-daisy/react-table-it",description:"A simple data-table component with React",year:2019,stack:["Javascript","React"]}],R=function(e){var t=e.className,a=void 0===t?"":t;return l.a.createElement("div",{className:"contact ".concat(a)},l.a.createElement("h3",{className:"section-header"},"Portfolio"),l.a.createElement("p",null,"Below are few of the work I have done so far"),l.a.createElement("ul",{className:"portfolio-cards"},S.map(function(e,t){return l.a.createElement("li",{className:"card",key:"project-".concat(t)},l.a.createElement("div",{className:"card_content"},l.a.createElement("h2",{className:"card_title"},e.name,e.year&&l.a.createElement("span",null,e.year)),l.a.createElement("p",{className:"card_text"},e.description),l.a.createElement("div",{className:"card_tag"},e.stack&&e.stack.map(function(e){return l.a.createElement("span",{key:"project-".concat(t,"-").concat(e)},e)})),l.a.createElement("div",{className:"card_action"},e.website&&l.a.createElement("a",{href:e.website},"Demo"),e.code&&l.a.createElement("a",{href:e.code},"Code"))))})))};function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(d.a)(e);if(t){var l=Object(d.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var j=function(e){Object(s.a)(a,e);var t=C(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).glitter=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"glitter"}),l.a.createElement("div",{className:"glitter__medium"}),l.a.createElement("div",{className:"glitter__big"}))},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(f,{className:"parallax"}),l.a.createElement(k,{className:"plain-section"}),l.a.createElement(R,{className:"parallax"}),l.a.createElement(x,{className:"plain-section"}),l.a.createElement(N,{className:"parallax"}))}}]),a}(n.Component),J=(a(43),a(25)),P=Object(J.a)({basename:""});c.render(n.createElement(r.a,{history:P},n.createElement(j,null)),document.getElementById("root"))}},[[37,2,1]]]);
//# sourceMappingURL=main.2adbf06f.chunk.js.map