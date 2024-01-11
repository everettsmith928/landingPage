<template>
  <section class="container-fluid main-content">
    <section class="row splash-area text-center elevation-3 fade">
      <div class="col-12 splash-heading d-flex flex-column align-items-center justify-content-center">

        <h2 class="text-start m-3 splash-heading-text bebas fade">
          <b>I'm Everett.<br>
            A Full Stack Web Developer</b>
        </h2>
      </div>
      <div class="col-12 splash-asset d-flex align-items-center justify-content-center">
        <a href="https://github.com/everettsmith928" title="Github Link" target="_blank">
          <h3 class="icon"><i class="icon mdi mdi-github"></i></h3>
        </a>
        <a href="https://www.linkedin.com/in/everett-smith-811b57132/" title="Indeed Link" target="_blank">
          <h3 class="icon"><i class="icon mdi mdi-linkedin"></i></h3>
        </a>
        <h3 class="icon" title="Download Resume"><a href="src/assets/documents/EverettSmithResume.pdf"
            download="Everett_Smith_Resume.pdf"><i class="icon mdi mdi-note"></i></a></h3>
      </div>
    </section>
    <section class="row about-area justify-content-center">
      <div class="col-12 text-center">
        <h3 class="banner-text bebas">About</h3>
      </div>
      <div class="col-md-5 col-12 d-flex justify-content-center about-portrait">
        <img src="../assets/img/headshot1.jpg" alt="portrait" class="img-fluid portrait elevation-4">
      </div>
      <div class="col-md-5 col-12 d-flex flex-column justify-content-center about-description">
        <p class="roboto">Coming from a decade long fine art background, and now moving into the Full Stack Development
          world. I began my
          coding
          journey at the beginning of 2023. I have hundreds of hours towards learning to code, developing
          projects, and solving complex problems.</p>
        <p class="roboto">I attended Codeworks Full Stack Immersion Bootcamp course from August of this year to November.
          At CodeWorks we
          learned Agile software development strategies as well as working with others. Beyond that we learned plenty of
          languages and devoted many hours to building multiple technical reactive applications. I
          excelled in JavaScript and front-end development. My learning time spent at CodeWorks was robust and I really
          enjoy anything technical. I now have
          a strong foundation for building out personal projects and working on new exciting applications. My learning
          journey has just begun!</p>
        <p class="roboto">🧘 You can find me doing yoga, reading a book, or at the gym in my free time.</p>
      </div>
    </section>
    <section class="row banner-row elevation-5 justify-content-center">
      <div class="col-12 d-flex justify-content-center skill-title">
        <h2 class="banner-text bebas"><b>Skills</b></h2>
      </div>
      <div class="banner col-lg-3 col-10 d-flex flex-column elevation-4">
        <div class="text-center">
          <h2 class="skill-subtitle bebas">Front End</h2>
        </div>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>Javascript</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>Bootstrap</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>Vue</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>HTML</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>CSS</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>React</h3>
      </div>
      <div class="banner col-lg-3 col-10 d-flex flex-column elevation-4">
        <div class="text-center">
          <h2 class="skill-subtitle bebas">Back End</h2>
        </div>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>Node JS</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>C#</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>Java</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>Mongoose</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>My SQL</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>Mongo</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>Express</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>XRPL</h3>
      </div>
      <div class="banner col-lg-3 col-10 d-flex flex-column elevation-4">
        <div class="text-center">
          <h2 class="skill-subtitle bebas">Design</h2>
        </div>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>Adobe Suite</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>Photography</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>Color Theory</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>Drawing</h3>
        <h3 class="skill-text roboto"><i class="mdi mdi-circle mx-4"></i>Graphic Design</h3>
        <h3 class="skill-text roboto"></h3>
      </div>
    </section>
    <section class="row project-row justify-content-center">
      <div class="col-12 d-flex justify-content-center skill-title">
        <h3 class="splash-heading-text bebas"><b>Projects</b></h3>
      </div>
      <div class="col-12 col-lg-5 d-flex justify-content-center align-items-center screenshot">
        <img src="../assets/img/Stackify.png" class="img-fluid project-image elevation-3">
      </div>
      <div class="col-12 col-lg-5 d-flex flex-column justify-content-center project-description align-items-center g-3">
        <h2 class="project-title bebas"><a href="https://stackify-jch3.onrender.com/" target="_blank">Stackify</a></h2>
        <p class="project-text roboto">Stackify is a Spotify Premium user extension that allows DJs and event planners to
          creatively organize event
          playlists, speeches, and write important notes while hosting an event. Built by a team of 4 developers at
          CodeWorks we see Stackify as the capstone of our development journey at bootcamp.<br><br> Utilizing the Spotify
          API,
          agile development methods, and creative technical solutions Stackify allows users to access rich information
          about songs,
          and come up with creative ways for the user to manage and edit
          playlists. This entire robust full-stack application was created within 2 weeks.</p>
        <a href="https://github.com/everettsmith928/StackifyCapstone" target="_blank">
          <h2 class="project-tools roboto">Github</h2>
        </a>
        <h2 class="project-tools">Node JS ◾ Vue ◾ Mongo DB ◾ Spotify API ◾ Bootstrap</h2>
      </div>
      <div class="col-12 col-lg-5 d-flex justify-content-center align-items-center screenshot">
        <img src="../assets/img/boisemenu.png" class="img-fluid project-image elevation-3">
      </div>
      <div class="col-12 col-lg-5 d-flex flex-column justify-content-center project-description align-items-center g-3">
        <h2 class="project-title bebas">The Boise Menu</h2>
        <p class="project-text roboto">The Boise Menu is a an ambitious passion project built by a small team of
          developers to change the way that users rate and search for restaurants on the web,
          JavaScript, C# and SQL. A website for optimizing
          restaurant entree searching without having to
          navigate through multiple restaurant websites. My contribution to the team is digital hand drawings, UX and
          front-end design as well as
          some web scraping and Javascript.</p>
        <h2 class="project-tools">C# ◾ JavaScript ◾ React ◾ My SQL ◾ .NET </h2>
      </div>

      <div class="col-12 col-lg-5 d-flex justify-content-center align-items-center screenshot">
        <img src="../assets/img/blob-scene-haikei.svg" class="img-fluid project-image elevation-3">
      </div>
      <div class="col-12 col-lg-5 d-flex flex-column justify-content-center project-description align-items-center g-3">
        <a href="http://52.37.45.27/tower/#/">
          <h2 class="project-title bebas"><a href="https://github.com/everettsmith928/theTower" target="_blank">Tower</a>
          </h2>
        </a>
        <p class="project-text roboto">Tower is a mock ticket and event organization website. Users with an account are
          able to
          get tickets,
          create events, attend events, and leave comments on events. Built in accordance with a robust figma and strict
          set of requirements.</p>
        <h2 class="project-tools">Node JS ◾ Vue ◾ Mongo DB ◾ Bootstrap</h2>
      </div>
    </section>
    <section class="row contact-area justify-content-center">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h2 class="banner-text bebas"><b>Contact</b></h2>
      </div>
      <div class="col-md-6 col-12">
        <form ref="emailForm" class="row contact-form elevation-3" @submit.prevent="sendMail" id="formEmail">
          <div class="col-md-6 col-12 d-flex flex-column">
            <label>
              <h3 class="bebas"><b>Name</b></h3>
            </label>
            <input type="text" class="my-3" id="from_name" name="from_name" maxlength="1000" required>
          </div>
          <div class="col-md-6 col-12 d-flex flex-column">
            <label>
              <h3 class="bebas"><b>Email Address</b></h3>
            </label>
            <input type="email" class="my-3" id="email_id" name="email_id" maxlength="1000" required>
          </div>
          <label>
            <h3 class="bebas"><b>Message</b></h3>
          </label>
          <textarea rows="15" class="my-3" id="message" maxlength="1000" name="message" required></textarea>
          <button class="form-button" type="submit">Submit</button>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
import { ref } from "vue";
import emailjs from '@emailjs/browser';

export default {
  setup() {
    return {
      sendMail() {
        let formBody = document.getElementById("formEmail")
        console.log(formBody)
        emailjs.sendForm('service_0ini5fb', 'template_dao22zl', formBody, 'Ak3Wm-aVP-5uWpjpf')
          .then((result) => {
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes Text-fade-In {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fade {
  animation-name: Text-fade-In;
  animation-duration: 2s;
}

input {
  height: 40px;
  border: 2px solid #EB5722;
  border-radius: 8px;
}

textarea {
  border-radius: 8px;
}

a {
  color: #EB5722;
}

.roboto {
  font-family: 'Roboto', sans-serif;
  opacity: 1;
}

.bebas {
  font-family: 'Bebas Neue', sans-serif;
  opacity: 1;
}

.navigation {
  background-color: rgb(9, 9, 9);
  height: 10vh;
}

.center-line {
  height: 30vh;
  width: 1px;
}

.about-area {
  background-color: #efefef;
  min-height: 100vh;
  padding-top: 10vh;
  padding-bottom: 10vh;

  .banner-text {
    color: #EB5722;
  }

  p {
    font-size: 20px;
    font-weight: 500;
  }
}

.portrait {
  min-height: 50vh;
  object-fit: cover;
  border-radius: 13px;
  margin: 3rem;
}

.about-description {
  min-height: 50vh;
  margin: 3rem;
}

.banner {
  background-color: #efefef;
  margin: 1rem;
  border: 3px #efefef solid;
  padding: 2rem;
  border-radius: 13px;
  transition: .3s;
}

.banner-row {
  padding-bottom: 10vh;
  background-color: #EB5722;
}

.banner-text {
  font-size: 4rem;
  color: #efefef;
  font-weight: 800;
}

.skill {
  margin: 1rem;
  max-height: 50px;
  width: 50px;
  display: flex;
}

.skill-title {
  margin-top: 10vh;
  margin-bottom: 10vh;
}

.skill-subtitle {
  color: #EB5722;
  font-size: 3rem;
  margin: 1rem;
  margin-bottom: 3rem;
  font-weight: 800;
}

.skill-text {
  color: #EB5722;
}

.icon {
  font-size: 4rem;
  padding: 1rem;
  color: #EB5722;
  transition: .3s;
  opacity: 1;
}

.icon:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.splash-area {
  min-height: 100dvh;
  background-color: rgb(235, 87, 34);
  background-image: url("../assets/img/blob-scene-haikei.svg");
  background-position: center;
  background-size: cover;
  border: 20px solid #EB5722;
  opacity: 1;
}

.splash-asset {
  max-height: 5vh;
}

.splash-heading {
  min-height: 80vh;
  color: white;
}

.splash-heading-text {
  font-weight: 900;
  font-size: 4rem;
  padding: 3rem;
  color: #EB5722;
  text-shadow: #efefef 3px 3px 5px;
}

.profile-picture {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: #EB5722;
  transition: 1s;
}

.profile-picture:hover {
  background-color: #f79977;
  height: 50px;
  width: 400px;
}

.project-row {
  background-color: #efefef;
  padding-bottom: 20vh;
}

.project-description {
  border-bottom: 5px solid #EB5722;
  min-height: 20vh;
  margin-bottom: 10vh;
}

.project-text {
  margin: 3rem;
  font-size: 18px;
}

.screenshot {
  min-height: 20vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
}

.project-image {
  border-radius: 13px;
}

.project-title {
  font-weight: 900;
  font-size: 3rem;
  padding: 1rem;
  color: #EB5722;
}

.project-tools {
  color: #EB5722;
  font-size: 2rem;
}

.contact-area {
  min-height: 100dvh;
  background-image: url("../assets/img/contact-waves.svg");
  background-size: cover;
  background-position: center;

  .banner-text {
    color: #EB5722;
    margin-bottom: 10vh;
  }
}

.contact-form {
  background-color: #efefef;
  border: 10px solid white;
  padding: 1rem;
  border-radius: 13px;
  margin-bottom: 10vh;
  color: #EB5722;
}

.form-button {
  background-color: #EB5722;
  border: 0px;
  border-radius: 8px;
  color: #efefef;
  font-size: 2rem;
}
</style>
