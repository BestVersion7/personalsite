(this.webpackJsonp2310website=this.webpackJsonp2310website||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(17),o=a.n(r),s=a(14),i=a(6),c=a(18),m=a(0),u=a(19),p=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!0),p=Object(s.a)(o,2),h=p[0],d=p[1],f=function(){r(!a),d(!h)},g=function(){window.scrollTo(0,0),r(!a),d(!h)},E=function(){window.scrollTo(0,0)};return l.a.createElement("header",null,l.a.createElement("nav",{className:"section-nav"},a?l.a.createElement(m.b.Provider,{value:{className:"section-nav-icon-provider"}},l.a.createElement(c.a,{onClick:f})):l.a.createElement(m.b.Provider,{value:{className:"section-nav-icon-provider"}},l.a.createElement(u.a,{onClick:f})),h?l.a.createElement("nav",{className:"section-navlink-container"},l.a.createElement("div",{className:"section-navlink-container-blank"},l.a.createElement(i.b,{onClick:E,className:"section-nav-links",to:"/",exact:!0},"Home"),l.a.createElement(i.b,{onClick:E,className:"section-nav-links",to:"/profile"},"Profile"),l.a.createElement(i.b,{onClick:E,className:"section-nav-links",to:"/skills"},"Skills"),l.a.createElement(i.b,{onClick:E,className:"section-nav-links",to:"/project"},"Project"),l.a.createElement("a",{className:"section-nav-links",href:"https://athomeblogs.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Blog"))):l.a.createElement("nav",{className:"section-navlink-container-mobile"},l.a.createElement("div",{className:"section-navlink-container-blank"},l.a.createElement(i.b,{onClick:g,className:"section-nav-links",to:"/",exact:!0},"Home"),l.a.createElement(i.b,{onClick:g,className:"section-nav-links",to:"/profile"},"Profile"),l.a.createElement(i.b,{onClick:g,className:"section-nav-links",to:"/skills"},"Skills"),l.a.createElement(i.b,{onClick:g,className:"section-nav-links",to:"/project"},"Project"),l.a.createElement("a",{className:"section-nav-links",href:"https://athomeblogs.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Blog")))))},h=a(2),d=function(e){var t=e.company,a=e.position,n=e.summary,r=e.date;return l.a.createElement("div",{className:"section-work-container-items"},l.a.createElement("div",null,t,l.a.createElement("br",null)," ",r),l.a.createElement("div",null,l.a.createElement("b",null,a)," ",l.a.createElement("br",null)," ",n),l.a.createElement("br",null))},f=[{Company:"PTC",Position:"Accounts Receivable Contractor",Summary:"Highlight: Wrote a 400 line macro to automate a billing report to submit to portal daily. Saved 30 minutes each day!",Date:"Jul 2019 - Sep 2020"},{Company:"Five Star Senior Living",Position:"Accounts Payable Contractor",Summary:"Highlight: Approved 220 invoices per day on Workday which is the highest within department!",Date:"Jul 2018 - Aug 2018"},{Company:"Lux Dental",Position:"Accounts Payable Representative",Summary:"Highlight: Reduced expenses by 22% for Q1 2018 by researching and switching dental vendors!",Date:"Oct 2017 - Jun 2018"},{Company:"Dependable Cleaners",Position:"Customer Service Representative",Summary:"Highlight: Marketed and increased coat sale by 54% on President\u2019s Day sale week from prior year!",Date:"Aug 2015 - Apr 2017"}],g=function(e){var t=e.quote,a=e.author;return l.a.createElement("p",{className:"quote"},l.a.createElement("i",null,t," ",l.a.createElement("br",null),"-",a))},E=function(){return l.a.createElement("div",{className:"section-profile",id:"section-profile"},l.a.createElement("br",null),l.a.createElement("section",null,l.a.createElement("br",null),l.a.createElement("h1",null,"Profile"),l.a.createElement("hr",null),l.a.createElement("h2",null,"My Story"),l.a.createElement("article",{className:"section-profile-about"},l.a.createElement("img",{style:{borderRadius:"4em"},src:"https://res.cloudinary.com/crimson-flamingo/image/upload/v1603662887/1104%20profile/me.png",alt:"hunter"}),l.a.createElement("p",null,"I am self-taught web developer with a background in finance. In the past 3 years, I have worked in accounts receivables and accounts payable in startups and large companies. Besides work, I like to build websites from scratch using javascript. Scroll down to see my projects! :)")),l.a.createElement("article",{className:"section-profile-about"},l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Suffolk_University_coat_of_arms.svg/1200px-Suffolk_University_coat_of_arms.svg.png",alt:"suffolk"}),l.a.createElement("p",null,"I graduated Suffolk University in May 2019 located in Boston, Massachusetts, USA. During my time here, I got to meet lots of interesting people and learn about investments, business strategies, accounting, information systems and more!"))),l.a.createElement("section",null,l.a.createElement("h2",null,"Work Experience"),l.a.createElement(g,{quote:"Protons give an atom its identity, electrons its personality.",author:"Bill Bryson"}),l.a.createElement("div",{className:"section-work-container"},f.map((function(e,t){var a=e.Company,n=e.Position,r=e.Date,o=e.Summary;return l.a.createElement(d,{key:t,company:a,position:n,date:r,summary:o})})))))},b=function(e){var t=e.title,a=e.url_link,n=e.url_image,r=e.description,o=e.technologiesUsed,s=e.githubLink;return l.a.createElement("article",{className:"section-projects-web-items"},l.a.createElement("h4",null,t),l.a.createElement("div",null,l.a.createElement("b",null,"Link to Project: "),l.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},a)),l.a.createElement("div",null,l.a.createElement("b",null,"Link to Code: "),l.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},s)),l.a.createElement("img",{className:"section-projects-web-items-image",src:n,alt:t}),l.a.createElement("p",null,l.a.createElement("b",null,"Technologies Used:")," ",o),l.a.createElement("p",null,l.a.createElement("b",null,"Description:")," ",r))},k=[{title:"My Personal Blog",url_link:"https://athomeblogs.herokuapp.com/",url_image:"https://res.cloudinary.com/crimson-flamingo/image/upload/v1604689614/3105%20portfolio%20screenshots/myblog.png",description:"This is a full stack website deployed on Heroku. The goal of this website is for me to write and share articles with you. I have created my own API: REST for user authentication, and SOCKET.io for live comments. I also have a master/admin page running on web sockets for me to publish, update, delete articles real time. All the data is stored on PostgreSQL.",technologiesUsed:"React, HTML, SCSS, Node, Postgres, ExpressJs, Heroku, Socket.io, Git, VS Code",gitHubLink:"https://github.com/BestVersion7/myblogsite"},{title:"Drink Recipe Blog",url_link:"https://goldenwine.herokuapp.com/",url_image:"https://res.cloudinary.com/crimson-flamingo/image/upload/v1561066077/3105%20portfolio%20screenshots/3105_wine_screenshot.png",description:"This is a full stack website deployed on Heroku. The goal of this website is to find recipes for alcoholic beverages and post reviews on the recipe. Reviews can only be posted once users sign in or create a new account. I have also incorporated Cloudinary CDN to submit profile images and transformations. All the data is stored on MongoDB Atlas.",technologiesUsed:"React, HTML, SCSS, Node, MongoDB, ExpressJs, Heroku, Google Analytics, Git, VS Code",gitHubLink:"https://github.com/BestVersion7/heroku-site"},{title:"Food Recipe Blog (Not Working at the Moment 25/10/2020",url_link:"https://bestversion7.github.io/portfolio/#/",url_image:"https://res.cloudinary.com/crimson-flamingo/image/upload/c_scale,h_794,w_794/v1559314999/3105%20portfolio%20screenshots/3105_static_site_screenshot.png",description:"This is a static website deployed on Github pages. The goal of this website is to be able to look up recipes for different dishes. I am using a third party API to fetch the recipes, images, url links on the recipe page.",technologiesUsed:"React, HTML, SCSS, Node, Github, Git, Google Analytics, VS Code",gitHubLink:"https://github.com/BestVersion7/portfolio"}],v=function(){return l.a.createElement("section",{className:"section-projects"},l.a.createElement("br",null),l.a.createElement("h2",null,"Passion Projects: "),l.a.createElement(g,{quote:"The secret to getting ahead is getting started.",author:"Mark Twain"}),l.a.createElement("div",{className:"section-projects-web"},k.map((function(e,t){var a=e.title,n=e.url_link,r=e.url_image,o=e.description,s=e.gitHubLink,i=e.technologiesUsed;return l.a.createElement(b,{key:t,title:a,url_link:n,githubLink:s,url_image:r,description:o,technologiesUsed:i})}))),l.a.createElement("br",null))},y=[{name:"Microsoft Excel",starFill:5,starHalf:0,star:0},{name:"Microsoft Access",starFill:4,starHalf:0,star:1},{name:"Microsoft VBA",starFill:3,starHalf:1,star:1},{name:"Google Analytics",starFill:4,starHalf:1,star:0},{name:"Salesforce",starFill:3,starHalf:1,star:1},{name:"Oracle",starFill:4,starHalf:0,star:1},{name:"Quickbooks Online",starFill:4,starHalf:0,star:1},{name:"Tableau",starFill:3,starHalf:1,star:1}],w=[{name:"React",starFill:4,starHalf:0,star:1},{name:"HTML",starFill:4,starHalf:0,star:1},{name:"CSS",starFill:4,starHalf:0,star:1},{name:"SCSS",starFill:3,starHalf:1,star:1},{name:"Node",starFill:4,starHalf:0,star:1},{name:"MongoDB",starFill:4,starHalf:1,star:0},{name:"ExpressJs",starFill:4,starHalf:1,star:0},{name:"SQL",starFill:4,starHalf:0,star:1},{name:"Web Sockets",starFill:4,starHalf:1,star:0},{name:"RESTful API",starFill:4,starHalf:1,star:0},{name:"UI/UX Testing",starFill:3,starHalf:0,star:2},{name:"AWS",starFill:2,starHalf:1,star:2}],H=[{name:"Git",starFill:4,starHalf:1,star:0},{name:"Visual Studio Code",starFill:4,starHalf:1,star:0},{name:"Adobe Photoshop",starFill:4,starHalf:1,star:0},{name:"Adobe Premiere Pro",starFill:3,starHalf:1,star:1}],S=a(10),N=function(e){for(var t=e.name,a=e.starFill,n=e.starHalf,r=e.star,o=[],s=[],i=[],c=1;c<=a;c++)o.push(l.a.createElement(S.b,{key:c}));for(var u=1;u<=n;u++)s.push(l.a.createElement(S.c,{key:u}));for(var p=0;p<r;p++)i.push(l.a.createElement(S.a,{key:p}));return l.a.createElement("div",{className:"section-skills-item-mapped"},l.a.createElement("span",null,t," "),l.a.createElement("span",null,l.a.createElement(m.b.Provider,{value:{size:"15px",color:"darkorange"}},o,s,i)))},C=function(){return l.a.createElement("section",{className:"section-skills"},l.a.createElement("br",null),l.a.createElement("h2",null,"Skills and Abilities"),l.a.createElement(g,{quote:"The reason I've been able to be so financially successful is that my focus has never, ever for one minute been money",author:"Oprah"}),l.a.createElement("h3",null,"Business Skills"),l.a.createElement("div",{className:"section-skills-item"},y.map((function(e,t){var a=e.name,n=e.star,r=e.starFill,o=e.starHalf;return l.a.createElement("div",{key:t},l.a.createElement(N,{name:a,starFill:r,starHalf:o,star:n}))}))),l.a.createElement("h3",null,"Web Development"),l.a.createElement("div",{className:"section-skills-item"},w.map((function(e,t){var a=e.name,n=e.star,r=e.starFill,o=e.starHalf;return l.a.createElement("div",{key:t},l.a.createElement(N,{name:a,starFill:r,starHalf:o,star:n}))}))),l.a.createElement("h3",null,"Tools"),l.a.createElement("div",{className:"section-skills-item"},H.map((function(e,t){var a=e.name,n=e.star,r=e.starFill,o=e.starHalf;return l.a.createElement(N,{key:t,name:a,starFill:r,starHalf:o,star:n})}))))},_=a(21),F=function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"section-home"},l.a.createElement("div",{className:"section-home-name"},l.a.createElement("h2",null,"Hi I'm Hunter"),l.a.createElement("h2",null,"Welcome to my site!")),l.a.createElement("div",{className:"icon-down",onClick:function(e){e.preventDefault(),document.getElementById("section-profile").scrollIntoView()}},l.a.createElement(m.b.Provider,{value:{size:"2em",color:"black"}},l.a.createElement(_.a,null)))),l.a.createElement(E,null),l.a.createElement(C,null),l.a.createElement(v,null))},P=function(){return l.a.createElement("div",null,"404 not found")},A=function(){return l.a.createElement("footer",null,"Connect with me! ",l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/BestVersion7",target:"_blank",rel:"noopener noreferrer",title:"Github"},l.a.createElement("img",{height:"40",src:"https://res.cloudinary.com/crimson-flamingo/image/upload/v1556071829/230419%20Icons/github.png",alt:"github"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/hunterkfan",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn"},l.a.createElement("img",{height:"40",src:"https://res.cloudinary.com/crimson-flamingo/image/upload/v1603470384/230419%20Icons/logo-linkedin.png",alt:"linkedin"})),l.a.createElement("br",null),"2020 - ",l.a.createElement("b",null,"www.hunterkenfan.com"))};var T=function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/",exact:!0,component:F}),l.a.createElement(h.a,{path:"/skills",component:C}),l.a.createElement(h.a,{path:"/project",component:v}),l.a.createElement(h.a,{path:"/profile",component:E}),l.a.createElement(h.a,{component:P})),l.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(32);o.a.render(l.a.createElement(i.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.b38119e8.chunk.js.map