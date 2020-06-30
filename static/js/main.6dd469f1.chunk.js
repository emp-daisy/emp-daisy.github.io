(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,a,t){e.exports=t(56)},41:function(e,a,t){e.exports=t.p+"static/media/portfolio_dp.8e9a0ac4.jpg"},42:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(22),s=t(58),r=t(7),o=t(8),i=t(11),m=t(9),d=t(12),u=function(e){var a=e.size,t=void 0===a?"2x":a;return l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{href:"https://github.com/emp-daisy"},l.a.createElement("i",{className:"fa fa-".concat(t," fa-github-square")})),l.a.createElement("a",{href:"https://www.linkedin.com/in/adachi-jessica-madufor-57a049a6"},l.a.createElement("i",{className:"fa fa-".concat(t," fa-linkedin-square")})),l.a.createElement("a",{href:"https://medium.com/@empressia"},l.a.createElement("i",{className:"fa fa-".concat(t," fa-medium")})),l.a.createElement("a",{href:"mailto:adajess01@gmail.com?Subject=Enquiry"},l.a.createElement("i",{className:"fa fa-".concat(t," fa-envelope-square")})))},p=function(e){var a=e.className,n=void 0===a?"":a;return l.a.createElement("div",{className:"profile ".concat(n)},l.a.createElement("div",{className:"img-frame"},l.a.createElement("img",{src:t(41),className:"profile-pic",alt:"profile"})),l.a.createElement("span",{className:"full-name"},"Hello. I'm Jessica M."),l.a.createElement("span",{className:"bio"},"Full stack web and mobile  developer"),l.a.createElement(u,null))},v=t(13),f=t(23),b=["#540404","#370454","#045254","#100454","#044d54","#105404","#515404","#543904"],h=[{label:"Testing",value:10,type:"convention"},{label:"GraphQL",value:10,type:"tools"},{label:"Jest",value:10,type:"tools"},{label:"Mocha",value:10,type:"tools"},{label:"Webpack",value:10,type:"tools"},{label:"Git",value:10,type:"tools"},{label:"CircleCI",value:10,type:"tools"},{label:"CodeClimate",value:5,type:"tools"},{label:"Jira",value:5,type:"tools"},{label:"Slack",value:5,type:"tools"},{label:"Heroku",value:5,type:"tools"},{label:"Pivotal Tracker",value:5,type:"tools"},{label:"Databases",value:10,type:"tools"},{label:"PostgresQL",value:10,type:"tools"},{label:"MySQL",value:10,type:"tools"},{label:"MongoDB",value:10,type:"tools"},{label:"DevOps",value:10,type:"ops"},{label:"Docker",value:10,type:"ops"},{label:"Bash scripting",value:10,type:"ops"},{label:"Javascript",value:25,type:"language"},{label:"Typescript",value:25,type:"language"},{label:"Python",value:25,type:"language"},{label:"React Native",value:25,type:"mobile"},{label:"Nest JS",value:25,type:"backend"},{label:"API",value:15,type:"backend"},{label:"TypeORM",value:15,type:"backend"},{label:"Node JS",value:10,type:"backend"},{label:"Express JS",value:10,type:"backend"},{label:"React JS",value:20,type:"frontend"},{label:"Redux",value:10,type:"frontend"},{label:"Next JS",value:20,type:"frontend"},{label:"Angular",value:10,type:"frontend"},{label:"HTML",value:10,type:"frontend"},{label:"CSS",value:10,type:"frontend"},{label:"SCSS",value:10,type:"frontend"},{label:"Bootstrap",value:10,type:"frontend"},{label:"Semantic",value:10,type:"frontend"},{label:"PHP",value:5,type:"frontend"}],y=function(e){switch(e){case"frontend":return b[0];case"backend":return b[1];case"mobile":return b[2];case"ops":return b[3];case"tools":return b[4];case"language":return b[5];case"convention":return b[6];default:return b[7]}},g=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).svgRef=l.a.createRef(),t.settings={overflow:!1,data:h,zoom:1.1,width:"100%",height:450,padding:0,showLegend:!0,legendPercentage:20},t.renderWordClouds=function(){t.settings.width=t.svg.parentNode.clientWidth;var e=t.settings,a=e.width,n=e.height;t.svg.innerHTML="",f().size([a,n]).words(h).rotate(function(){return 90*~~(2*Math.random())}).padding(2).font("Artifika").fontWeight(800).text(function(e){return e.label}).fontSize(function(e){return 2*e.value}).on("end",t.drawSkillCloud).start()},t.drawSkillCloud=function(){var e=t.settings,a=e.width,n=e.height;v.a(t.svg).attr("width",a).attr("height",n).append("g").attr("transform","translate("+~~(a/2)+","+~~(n/2)+")").selectAll("text").data(h).enter().append("text").style("font-size",function(e){return"".concat(2*e.value,"px")}).style("-webkit-touch-callout","none").style("-webkit-user-select","none").style("-khtml-user-select","none").style("-moz-user-select","none").style("-ms-user-select","none").style("user-select","none").style("cursor","default").style("opacity",.8).style("font-family","Artifika").style("font-weight",700).style("fill",function(e){return y(e.type)}).attr("text-anchor","middle").attr("transform",function(e){return"translate("+[e.x,e.y]+")rotate("+e.rotate+")"}).text(function(e){return e.label}).on("mouseover",function(){v.a(this).style("opacity",1)}).on("mouseout",function(){v.a(this).style("opacity",.8)})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.svg=this.svgRef.current,this.renderWordClouds(),window.addEventListener("resize",this.renderWordClouds,!1)}},{key:"componentDidUpdate",value:function(){var e=this.settings,a=e.width,t=e.height;0!==a&&0!==t&&this.renderWordClouds()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.renderWordClouds,!1)}},{key:"render",value:function(){var e=this.props.className,a=void 0===e?"":e;return l.a.createElement("div",{className:"technologies ".concat(a)},l.a.createElement("h3",{className:"section-header"},"Expertise"),l.a.createElement("blockquote",null,"Jack of many language, Master of a growing list"),l.a.createElement("div",{className:"section"},l.a.createElement("span",null,"Focus on writing clean and efficient code")),l.a.createElement("div",{className:"skill-set"},l.a.createElement("svg",{ref:this.svgRef})))}}]),a}(n.Component),E=function(e){var a=e.className,t=void 0===a?"":a;return l.a.createElement("div",{className:"contact ".concat(t)},l.a.createElement("h3",null,"Thank!"),l.a.createElement("h5",null,"Get in touch. Let's talk business. ",l.a.createElement("i",{className:"fa fa-smile-wink face"})),l.a.createElement(u,{size:"4x"}),l.a.createElement("small",null,"Sure I would get back to you ASAP!!!"),l.a.createElement("small",{className:"copyright"},"\xa9  ",(new Date).getFullYear()," Empress ",l.a.createElement("i",{className:"fa fa-heart fa-beat"})))},N=[{icon:"graduation-cap",title:"BSc Computer Science",start:"2013",end:"2016",description:"Awarded by The University of Essex."},{icon:"rocket",title:"Freelance Developer",start:"2015",end:"2017",description:""},{icon:"briefcase",title:"Frontend Developer @ ECR Technologies",start:"2017",end:"2018",description:"Worked on several projects such as a School Management\n    Application using PHP."},{icon:"briefcase",title:"Frontend Developer @ Andela",start:"2018",description:"Buliding web applications in Javascript ensuring the\n    applications met all the requirements by writing unit and\n    end-to-end tests throughout development."},{icon:"briefcase",title:"Frontend Developer @ Secoura",start:"2019",end:"2020",description:"Working in a remote team using NextJS and Redux to build a\n    cybersecurity web application that provides real-time\n    collection, management, analysis and detection of emerging\n    cyber threats across the business system."}],w=function(e){var a=e.className,t=void 0===a?"":a;return l.a.createElement("div",{className:"contact ".concat(t)},l.a.createElement("h3",{className:"section-header"},"Education & Experience"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"main-timeline"},N.map(function(e){return l.a.createElement("div",{className:"timeline"},l.a.createElement("div",{className:"timeline-icon"},l.a.createElement("i",{className:"fa fa-".concat(e.icon)})),l.a.createElement("span",{className:"year"},e.start," - ",e.end?e.end:l.a.createElement("i",{className:"fa fa-clock-o"})),l.a.createElement("div",{className:"timeline-content"},l.a.createElement("h5",{className:"title"},e.title),l.a.createElement("p",{className:"description"},e.description)))}))))))},k=[{name:"Tech Eat",website:"http://techone-solutions.com/tech-eat",code:void 0,description:"A web/mobile food ordering application with a dashboard to manage orders.",year:2020,stack:["Javascript","NodeJS","PHP","Xamarin","MongoDB"]},{name:"Go Space Ball",website:"http://techone-solutions.com/go-space-ball",code:void 0,description:"A simple but challenging mobile game.",year:2017,stack:["Unity"]},{name:"Smart Education",website:"http://smarteducation.co/",code:void 0,description:"A Website for an educational counselling agency",year:2016,stack:["PHP","Wordpress"]},{name:"Momap",website:"https://momap-client.herokuapp.com/",code:void 0,description:"Built a web-based and mobile application for streaming video content with subtitle suggestions.",year:2018,stack:["Javascript","Node","React Native","Angular 5","MongoDB"]},{name:"Vicinitee",website:"https://vicinitiee.herokuapp.com/login",code:void 0,description:"A platform to help event companies make reservations and manage their day-to-day business activities.",year:2019,stack:["Javascript","Node","React","Postgres"]},{name:"React Table It",website:"https://emp-daisy.github.io/react-table-it/",code:"https://github.com/emp-daisy/react-table-it",description:"A simple data-table component with React",year:2019,stack:["Javascript","React"]}],S=function(e){var a=e.className,t=void 0===a?"":a;return l.a.createElement("div",{className:"contact ".concat(t)},l.a.createElement("h3",{className:"section-header"},"Portfolio"),l.a.createElement("p",null,"Below are few of the work I have done so far"),l.a.createElement("ul",{className:"portfolio-cards"},k.map(function(e){return l.a.createElement("li",{className:"card"},l.a.createElement("div",{className:"card_content"},l.a.createElement("h2",{className:"card_title"},e.name,e.year&&l.a.createElement("span",null,e.year)),l.a.createElement("p",{className:"card_text"},e.description),l.a.createElement("div",{className:"card_tag"},e.stack&&e.stack.map(function(e){return l.a.createElement("span",null,e)})),l.a.createElement("div",{className:"card_action"},e.website&&l.a.createElement("a",{href:e.website},"Demo"),e.code&&l.a.createElement("a",{href:e.code},"Code"))))})))},x=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).glitter=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"glitter"}),l.a.createElement("div",{className:"glitter__medium"}),l.a.createElement("div",{className:"glitter__big"}))},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(p,{className:"parallax"}),l.a.createElement(g,{className:"plain-section"}),l.a.createElement(S,{className:"parallax"}),l.a.createElement(w,{className:"plain-section"}),l.a.createElement(E,{className:"parallax"}))}}]),a}(n.Component),J=(t(42),t(24)),A=t.n(J)()({basename:""});c.render(n.createElement(s.a,{history:A},n.createElement(x,null)),document.getElementById("root"))}},[[36,2,1]]]);
//# sourceMappingURL=main.6dd469f1.chunk.js.map