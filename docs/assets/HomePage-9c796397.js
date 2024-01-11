import{_ as p,o as u,c as b,a as l,w as f,b as m,p as g,d as x}from"./index-cf45fa0a.js";const n={_origin:"https://api.emailjs.com"},w=(a,e="https://api.emailjs.com")=>{n._userID=a,n._origin=e},v=(a,e,s)=>{if(!a)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class r{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const h=(a,e,s={})=>new Promise((o,c)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:t})=>{const d=new r(t);d.status===200||d.text==="OK"?o(d):c(d)}),i.addEventListener("error",({target:t})=>{c(new r(t))}),i.open("POST",n._origin+a,!0),Object.keys(s).forEach(t=>{i.setRequestHeader(t,s[t])}),i.send(e)}),y=(a,e,s,o)=>{const c=o||n._userID;return v(c,a,e),h("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:c,service_id:a,template_id:e,template_params:s}),{"Content-type":"application/json"})},_=a=>{let e;if(typeof a=="string"?e=document.querySelector(a):e=a,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},k=(a,e,s,o)=>{const c=o||n._userID,i=_(s);v(c,a,e);const t=new FormData(i);return t.append("lib_version","3.11.0"),t.append("service_id",a),t.append("template_id",e),t.append("user_id",c),h("/api/v1.0/email/send-form",t)},j={init:w,send:y,sendForm:k},S=""+new URL("headshot1-213ed33a.jpg",import.meta.url).href,M=""+new URL("Stackify-616d9bd7.png",import.meta.url).href,I=""+new URL("boisemenu-502109c6.png",import.meta.url).href,E=""+new URL("blob-scene-haikei-1edf19f5.svg",import.meta.url).href;const B={setup(){return{sendMail(){let a=document.getElementById("formEmail");console.log(a),j.sendForm("service_0ini5fb","template_dao22zl",a,"Ak3Wm-aVP-5uWpjpf").then(e=>{console.log("SUCCESS!",e.text)},e=>{console.log("FAILED...",e.text)})}}}},L=a=>(g("data-v-c06e607a"),a=a(),x(),a),T={class:"container-fluid main-content"},C=m('<section class="row splash-area text-center elevation-3 fade" data-v-c06e607a><div class="col-12 splash-heading d-flex flex-column align-items-center justify-content-center" data-v-c06e607a><h2 class="text-start m-3 splash-heading-text bebas fade" data-v-c06e607a><b data-v-c06e607a>I&#39;m Everett.<br data-v-c06e607a> A Full Stack Web Developer</b></h2></div><div class="col-12 splash-asset d-flex align-items-center justify-content-center" data-v-c06e607a><a href="https://github.com/everettsmith928" title="Github Link" target="_blank" data-v-c06e607a><h3 class="icon" data-v-c06e607a><i class="icon mdi mdi-github" data-v-c06e607a></i></h3></a><a href="https://www.linkedin.com/in/everett-smith-811b57132/" title="Indeed Link" target="_blank" data-v-c06e607a><h3 class="icon" data-v-c06e607a><i class="icon mdi mdi-linkedin" data-v-c06e607a></i></h3></a><h3 class="icon" title="Download Resume" data-v-c06e607a><a href="src/assets/documents/EverettSmithResume.pdf" download="Everett_Smith_Resume.pdf" data-v-c06e607a><i class="icon mdi mdi-note" data-v-c06e607a></i></a></h3></div></section><section class="row about-area justify-content-center" data-v-c06e607a><div class="col-12 text-center" data-v-c06e607a><h3 class="banner-text bebas" data-v-c06e607a>About</h3></div><div class="col-md-5 col-12 d-flex justify-content-center about-portrait" data-v-c06e607a><img src="'+S+'" alt="portrait" class="img-fluid portrait elevation-4" data-v-c06e607a></div><div class="col-md-5 col-12 d-flex flex-column justify-content-center about-description" data-v-c06e607a><p class="roboto" data-v-c06e607a>Coming from a decade long fine art background, and now moving into the Full Stack Development world. I began my coding journey at the beginning of 2023. I have hundreds of hours towards learning to code, developing projects, and solving complex problems.</p><p class="roboto" data-v-c06e607a>I attended Codeworks Full Stack Immersion Bootcamp course from August of this year to November. At CodeWorks we learned Agile software development strategies as well as working with others. Beyond that we learned plenty of languages and devoted many hours to building multiple technical reactive applications. I excelled in JavaScript and front-end development. My learning time spent at CodeWorks was robust and I really enjoy anything technical. I now have a strong foundation for building out personal projects and working on new exciting applications. My learning journey has just begun!</p><p class="roboto" data-v-c06e607a>🧘 You can find me doing yoga, reading a book, or at the gym in my free time.</p></div></section><section class="row banner-row elevation-5 justify-content-center" data-v-c06e607a><div class="col-12 d-flex justify-content-center skill-title" data-v-c06e607a><h2 class="banner-text bebas" data-v-c06e607a><b data-v-c06e607a>Skills</b></h2></div><div class="banner col-lg-3 col-10 d-flex flex-column elevation-4" data-v-c06e607a><div class="text-center" data-v-c06e607a><h2 class="skill-subtitle bebas" data-v-c06e607a>Front End</h2></div><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>Javascript</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>Bootstrap</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>Vue</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>HTML</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>CSS</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>React</h3></div><div class="banner col-lg-3 col-10 d-flex flex-column elevation-4" data-v-c06e607a><div class="text-center" data-v-c06e607a><h2 class="skill-subtitle bebas" data-v-c06e607a>Back End</h2></div><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>Node JS</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>C#</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>Java</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>Mongoose</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>My SQL</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>Mongo</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>Express</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>XRPL</h3></div><div class="banner col-lg-3 col-10 d-flex flex-column elevation-4" data-v-c06e607a><div class="text-center" data-v-c06e607a><h2 class="skill-subtitle bebas" data-v-c06e607a>Design</h2></div><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>Adobe Suite</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>Photography</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>Color Theory</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>Drawing</h3><h3 class="skill-text roboto" data-v-c06e607a><i class="mdi mdi-circle mx-4" data-v-c06e607a></i>Graphic Design</h3><h3 class="skill-text roboto" data-v-c06e607a></h3></div></section><section class="row project-row justify-content-center" data-v-c06e607a><div class="col-12 d-flex justify-content-center skill-title" data-v-c06e607a><h3 class="splash-heading-text bebas" data-v-c06e607a><b data-v-c06e607a>Projects</b></h3></div><div class="col-12 col-lg-5 d-flex justify-content-center align-items-center screenshot" data-v-c06e607a><img src="'+M+'" class="img-fluid project-image elevation-3" data-v-c06e607a></div><div class="col-12 col-lg-5 d-flex flex-column justify-content-center project-description align-items-center g-3" data-v-c06e607a><h2 class="project-title bebas" data-v-c06e607a><a href="https://stackify-jch3.onrender.com/" target="_blank" data-v-c06e607a>Stackify</a></h2><p class="project-text roboto" data-v-c06e607a>Stackify is a Spotify Premium user extension that allows DJs and event planners to creatively organize event playlists, speeches, and write important notes while hosting an event. Built by a team of 4 developers at CodeWorks we see Stackify as the capstone of our development journey at bootcamp.<br data-v-c06e607a><br data-v-c06e607a> Utilizing the Spotify API, agile development methods, and creative technical solutions Stackify allows users to access rich information about songs, and come up with creative ways for the user to manage and edit playlists. This entire robust full-stack application was created within 2 weeks.</p><a href="https://github.com/everettsmith928/StackifyCapstone" target="_blank" data-v-c06e607a><h2 class="project-tools roboto" data-v-c06e607a>Github</h2></a><h2 class="project-tools" data-v-c06e607a>Node JS ◾ Vue ◾ Mongo DB ◾ Spotify API ◾ Bootstrap</h2></div><div class="col-12 col-lg-5 d-flex justify-content-center align-items-center screenshot" data-v-c06e607a><img src="'+I+'" class="img-fluid project-image elevation-3" data-v-c06e607a></div><div class="col-12 col-lg-5 d-flex flex-column justify-content-center project-description align-items-center g-3" data-v-c06e607a><h2 class="project-title bebas" data-v-c06e607a>The Boise Menu</h2><p class="project-text roboto" data-v-c06e607a>The Boise Menu is a an ambitious passion project built by a small team of developers to change the way that users rate and search for restaurants on the web, JavaScript, C# and SQL. A website for optimizing restaurant entree searching without having to navigate through multiple restaurant websites. My contribution to the team is digital hand drawings, UX and front-end design as well as some web scraping and Javascript.</p><h2 class="project-tools" data-v-c06e607a>C# ◾ JavaScript ◾ React ◾ My SQL ◾ .NET </h2></div><div class="col-12 col-lg-5 d-flex justify-content-center align-items-center screenshot" data-v-c06e607a><img src="'+E+'" class="img-fluid project-image elevation-3" data-v-c06e607a></div><div class="col-12 col-lg-5 d-flex flex-column justify-content-center project-description align-items-center g-3" data-v-c06e607a><a href="http://52.37.45.27/tower/#/" data-v-c06e607a><h2 class="project-title bebas" data-v-c06e607a><a href="https://github.com/everettsmith928/theTower" target="_blank" data-v-c06e607a>Tower</a></h2></a><p class="project-text roboto" data-v-c06e607a>Tower is a mock ticket and event organization website. Users with an account are able to get tickets, create events, attend events, and leave comments on events. Built in accordance with a robust figma and strict set of requirements.</p><h2 class="project-tools" data-v-c06e607a>Node JS ◾ Vue ◾ Mongo DB ◾ Bootstrap</h2></div></section>',4),D={class:"row contact-area justify-content-center"},F=L(()=>l("div",{class:"col-12 d-flex justify-content-center align-items-center"},[l("h2",{class:"banner-text bebas"},[l("b",null,"Contact")])],-1)),P={class:"col-md-6 col-12"},A=m('<div class="col-md-6 col-12 d-flex flex-column" data-v-c06e607a><label data-v-c06e607a><h3 class="bebas" data-v-c06e607a><b data-v-c06e607a>Name</b></h3></label><input type="text" class="my-3" id="from_name" name="from_name" maxlength="1000" required data-v-c06e607a></div><div class="col-md-6 col-12 d-flex flex-column" data-v-c06e607a><label data-v-c06e607a><h3 class="bebas" data-v-c06e607a><b data-v-c06e607a>Email Address</b></h3></label><input type="email" class="my-3" id="email_id" name="email_id" maxlength="1000" required data-v-c06e607a></div><label data-v-c06e607a><h3 class="bebas" data-v-c06e607a><b data-v-c06e607a>Message</b></h3></label><textarea rows="15" class="my-3" id="message" maxlength="1000" name="message" required data-v-c06e607a></textarea><button class="form-button" type="submit" data-v-c06e607a>Submit</button>',5),J=[A];function N(a,e,s,o,c,i){return u(),b("section",T,[C,l("section",D,[F,l("div",P,[l("form",{ref:"emailForm",class:"row contact-form elevation-3",onSubmit:e[0]||(e[0]=f((...t)=>o.sendMail&&o.sendMail(...t),["prevent"])),id:"formEmail"},J,544)])])])}const q=p(B,[["render",N],["__scopeId","data-v-c06e607a"]]);export{q as default};
