import{_ as u,o as f,c as g,a as o,w as x,b as v,p as b,d as y}from"./index-629bc637.js";const l={_origin:"https://api.emailjs.com"},w=(t,e="https://api.emailjs.com")=>{l._userID=t,l._origin=e},h=(t,e,s)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class m{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const p=(t,e,s={})=>new Promise((d,i)=>{const c=new XMLHttpRequest;c.addEventListener("load",({target:a})=>{const n=new m(a);n.status===200||n.text==="OK"?d(n):i(n)}),c.addEventListener("error",({target:a})=>{i(new m(a))}),c.open("POST",l._origin+t,!0),Object.keys(s).forEach(a=>{c.setRequestHeader(a,s[a])}),c.send(e)}),k=(t,e,s,d)=>{const i=d||l._userID;return h(i,t,e),p("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:i,service_id:t,template_id:e,template_params:s}),{"Content-type":"application/json"})},_=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},j=(t,e,s,d)=>{const i=d||l._userID,c=_(s);h(i,t,e);const a=new FormData(c);return a.append("lib_version","3.11.0"),a.append("service_id",t),a.append("template_id",e),a.append("user_id",i),p("/api/v1.0/email/send-form",a)},S={init:w,send:k,sendForm:j},I="/landingPage/assets/headshot1-213ed33a.jpg",r="/landingPage/assets/blob-scene-haikei-1edf19f5.svg";const M={setup(){return{sendMail(){let t=document.getElementById("formEmail");console.log(t),S.sendForm("service_0ini5fb","template_dao22zl",t,"Ak3Wm-aVP-5uWpjpf").then(e=>{console.log("SUCCESS!",e.text)},e=>{console.log("FAILED...",e.text)})}}}},E=t=>(b("data-v-781c00de"),t=t(),y(),t),B={class:"container-fluid main-content"},P=v('<section class="row splash-area text-center elevation-3" data-v-781c00de><div class="col-12 splash-heading d-flex flex-column align-items-center justify-content-center" data-v-781c00de><div class="profile-picture" data-v-781c00de></div><h2 class="text-start m-3 splash-heading-text" data-v-781c00de><b data-v-781c00de>I&#39;m Everett.<br data-v-781c00de> A Full Stack Web Developer</b></h2></div><div class="col-12 splash-asset d-flex align-items-center justify-content-center" data-v-781c00de><a href="https://github.com/everettsmith928" title="github link" data-v-781c00de><h3 class="icon" data-v-781c00de><i class="icon mdi mdi-github" data-v-781c00de></i></h3></a><a href="https://www.linkedin.com/in/everett-smith-811b57132/" title="indeed link" data-v-781c00de><h3 class="icon" data-v-781c00de><i class="icon mdi mdi-linkedin" data-v-781c00de></i></h3></a><h3 class="icon" data-v-781c00de><i class="icon mdi mdi-note" data-v-781c00de></i></h3></div></section><section class="row about-area justify-content-center" data-v-781c00de><div class="col-12 text-center" data-v-781c00de><h3 class="banner-text" data-v-781c00de>About</h3></div><div class="col-md-5 col-12 d-flex justify-content-center about-portrait" data-v-781c00de><img src="'+I+'" alt="portrait" class="img-fluid portrait elevation-4" data-v-781c00de></div><div class="col-md-5 col-12 d-flex flex-column justify-content-center about-description" data-v-781c00de><p data-v-781c00de>Coming from a decade long fine art background, and now moving into the Full Stack Development world. I began my coding journey at the beginning of 2023. I have hundreds of hours towards learning to code, developing projects, and solving complex problems.</p><p data-v-781c00de>I attended Codeworks Full Stack Immersion Bootcamp course from August of this year to November. At CodeWorks we learned Agile software development strategies as well as working with others. Beyond that we learned plenty of languages and devoted many hours to building multiple technical reactive applications. I excelled in JavaScript and front-end development. My learning time spent at CodeWorks was robust and I really enjoy anything technical. I now have a strong foundation for building out personal projects and working on new exciting applications. My learning journey has just begun!</p><p data-v-781c00de>🧘 You can find me doing yoga, reading a book, or at the gym in my free time.</p></div></section><section class="row banner-row elevation-5 justify-content-center" data-v-781c00de><div class="col-12 d-flex justify-content-center skill-title" data-v-781c00de><h2 class="banner-text" data-v-781c00de><b data-v-781c00de>Skills</b></h2></div><div class="banner col-lg-3 col-10 d-flex flex-column elevation-4" data-v-781c00de><div class="text-center" data-v-781c00de><h2 class="skill-subtitle" data-v-781c00de>Front End</h2></div><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>Javascript</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>Bootstrap</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>Vue</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>HTML</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>CSS</h3></div><div class="banner col-lg-3 col-10 d-flex flex-column elevation-4" data-v-781c00de><div class="text-center" data-v-781c00de><h2 class="skill-subtitle" data-v-781c00de>Back End</h2></div><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>Node JS</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>C#</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>Java</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>Mongoose</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>My SQL</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>Mongo</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>Express</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>XRPL</h3></div><div class="banner col-lg-3 col-10 d-flex flex-column elevation-4" data-v-781c00de><div class="text-center" data-v-781c00de><h2 class="skill-subtitle" data-v-781c00de>Design</h2></div><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>Adobe Suite</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>Photography</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>Color Theory</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>Drawing</h3><h3 class="skill-text" data-v-781c00de><i class="mdi mdi-circle mx-4" data-v-781c00de></i>Graphic Design</h3><h3 class="skill-text" data-v-781c00de></h3></div></section><section class="row project-row justify-content-center" data-v-781c00de><div class="col-12 d-flex justify-content-center skill-title" data-v-781c00de><h3 class="splash-heading-text" data-v-781c00de><b data-v-781c00de>Projects</b></h3></div><div class="col-5 d-flex justify-content-center align-items-center screenshot" data-v-781c00de><img src="'+r+'" class="img-fluid project-image elevation-3" data-v-781c00de></div><div class="col-5 d-flex flex-column justify-content-center project-description align-items-center g-3" data-v-781c00de><h2 class="project-title" data-v-781c00de>Stackify</h2><p class="project-text" data-v-781c00de>Stackify is a Spotify Premium user extension that allows DJs and event planners to creatively organize event playlists, speeches, and write important notes while hosting an event. Built by a team of 4 developers at CodeWorks we see Stackify as the capstone of our development journey at bootcamp.<br data-v-781c00de><br data-v-781c00de> Utilizing the Spotify API, agile development methods, and creative technical solutions Stackify allows users to access rich information about songs, and come up with creative ways for the user to manage and edit playlists. This entire robust full-stack application was created within 2 weeks.</p><h2 class="project-tools" data-v-781c00de>Node JS ◾ Vue ◾ Mongo DB ◾ Spotify API ◾ Bootstrap</h2></div><div class="col-5 d-flex flex-column justify-content-center project-description align-items-center g-3" data-v-781c00de><a href="http://52.37.45.27/tower/#/" data-v-781c00de><h2 class="project-title" data-v-781c00de>Keepr</h2></a><p class="project-text" data-v-781c00de>Keepr is a mock social media image sharing web application. Keepr has a C# backend, and Vue frontend. Utilizing a My SQL database, allowing users to store image links and have private vaults where they can store user information and images. Images have a view count, and are able to be favorited.</p><h2 class="project-tools" data-v-781c00de>C# ◾ JavaScript ◾ Vue ◾ My SQL ◾ .NET ◾ Bootstrap</h2></div><div class="col-5 d-flex justify-content-center align-items-center screenshot" data-v-781c00de><img src="'+r+'" class="img-fluid project-image elevation-3" data-v-781c00de></div><div class="col-5 d-flex justify-content-center align-items-center screenshot" data-v-781c00de><img src="'+r+'" class="img-fluid project-image elevation-3" data-v-781c00de></div><div class="col-5 d-flex flex-column justify-content-center project-description align-items-center g-3" data-v-781c00de><a href="http://52.37.45.27/tower/#/" data-v-781c00de><h2 class="project-title" data-v-781c00de>Tower</h2></a><p class="project-text" data-v-781c00de>Tower is a mock ticket and event organization website. Users with an account are able to get tickets, create events, attend events, and leave comments on events. Built in accordance with a robust figma and strict set of requirements.</p><h2 class="project-tools" data-v-781c00de>Node JS ◾ Vue ◾ Mongo DB ◾ Bootstrap</h2></div></section>',4),C={class:"row contact-area justify-content-center"},D=E(()=>o("div",{class:"col-12 d-flex justify-content-center align-items-center"},[o("h2",{class:"banner-text"},[o("b",null,"Contact")])],-1)),T={class:"col-md-6 col-12"},F=v('<div class="col-md-6 col-12 d-flex flex-column" data-v-781c00de><label data-v-781c00de><h3 data-v-781c00de><b data-v-781c00de>Name</b></h3></label><input type="text" class="my-3" id="from_name" name="from_name" maxlength="1000" required data-v-781c00de></div><div class="col-md-6 col-12 d-flex flex-column" data-v-781c00de><label data-v-781c00de><h3 data-v-781c00de><b data-v-781c00de>Email Address</b></h3></label><input type="email" class="my-3" id="email_id" name="email_id" maxlength="1000" required data-v-781c00de></div><label data-v-781c00de><h3 data-v-781c00de><b data-v-781c00de>Message</b></h3></label><textarea rows="15" class="my-3" id="message" maxlength="1000" name="message" required data-v-781c00de></textarea><button class="form-button" type="submit" data-v-781c00de>Submit</button>',5),A=[F];function L(t,e,s,d,i,c){return f(),g("section",B,[P,o("section",C,[D,o("div",T,[o("form",{ref:"emailForm",class:"row contact-form elevation-3",onSubmit:e[0]||(e[0]=x((...a)=>d.sendMail&&d.sendMail(...a),["prevent"])),id:"formEmail"},A,544)])])])}const V=u(M,[["render",L],["__scopeId","data-v-781c00de"]]);export{V as default};
