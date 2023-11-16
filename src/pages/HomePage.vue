<template>
  <section class="container-fluid main-content">
    <!-- <section class="row navigation">
      <div class="col-6 d-flex justify-content-center">
        Here is the navigation area
      </div>
      <div class="col-6 d-flex justify-content-center">
        Here is the second nav area
      </div>
    </section> -->
    <section class="row splash-area text-center elevation-3">
      <div class="col-12 splash-heading d-flex flex-column align-items-center justify-content-center">
        <div class="profile-picture">
          a
        </div>
        <h2 class="text-start m-3 splash-heading-text">
          <b>I'm Everett.<br>
            A Full Stack Web Developer</b>
        </h2>
      </div>
      <div class="col-12 splash-asset d-flex align-items-center justify-content-center">
        <a href="https://github.com/everettsmith928" title="github link">
          <h3 class="icon"><i class="icon mdi mdi-github"></i></h3>
        </a>
        <a href="https://www.linkedin.com/in/everett-smith-811b57132/" title="indeed link">
          <h3 class="icon"><i class="icon mdi mdi-linkedin"></i></h3>
        </a>
        <h3 class="icon"><i class="icon mdi mdi-note"></i></h3>
      </div>
    </section>
    <section class="row about-area justify-content-center">
      <div class="col-12 text-center">
        <h3 class="banner-text">About</h3>
      </div>
      <div class="col-md-5 col-12 d-flex justify-content-center about-portrait">
        <img src="../assets/img/headshot1.jpg" alt="portrait" class="img-fluid portrait elevation-4">
      </div>
      <div class="col-md-5 col-12 d-flex flex-column justify-content-center about-description">
        <p>Coming from a decade long fine art background, and now moving into the Full Stack Development world. I began my
          coding
          journey at the beginning of 2023. I have hundreds of hours towards learning to code, developing
          projects, and solving complex problems.</p>
        <p>I attended Codeworks Full Stack Immersion Bootcamp course from August of this year to November. At CodeWorks we
          learned Agile software development strategies as well as working with others. Beyond that we learned plenty of
          languages and devoted many hours to building multiple reactive applications. I
          excelled in JavaScript and front-end development. My learning time spent at CodeWorks was robust and I really
          enjoy anything technical. I now have
          a strong foundation for building out personal projects and working on new exciting applications. My learning
          journey has just begun</p>
        <p>🧘 You can find me doing yoga, reading a book, or at the gym in my free time.</p>
      </div>
    </section>
    <section class="row banner-row elevation-5 justify-content-center">
      <div class="col-12 d-flex justify-content-center skill-title">
        <h2 class="banner-text"><b>Skills</b></h2>
      </div>
      <div class="banner col-lg-3 col-10 d-flex flex-column elevation-4">
        <div class="text-center">
          <h2 class="skill-subtitle">Front End</h2>
        </div>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>Javascript</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>Bootstrap</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>Vue</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>HTML</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>CSS</h3>
      </div>
      <div class="banner col-lg-3 col-10 d-flex flex-column elevation-4">
        <div class="text-center">
          <h2 class="skill-subtitle">Back End</h2>
        </div>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>Node JS</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>C#</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>Java</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>Mongoose</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>My SQL</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>Mongo</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>Express</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>XRPL</h3>
      </div>
      <div class="banner col-lg-3 col-10 d-flex flex-column elevation-4">
        <div class="text-center">
          <h2 class="skill-subtitle">Design</h2>
        </div>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>Adobe Suite</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>Photography</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>Color Theory</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>Drawing</h3>
        <h3 class="skill-text"><i class="mdi mdi-circle mx-4"></i>Graphic Design</h3>
        <h3 class="skill-text"></h3>
      </div>
    </section>
    <section class="row project-row justify-content-center">
      <div class="col-12 d-flex justify-content-center skill-title">
        <h3 class="splash-heading-text"><b>Projects</b></h3>
      </div>
      <div class="col-5 d-flex justify-content-center align-items-center screenshot">
        <img src="../assets/img/blob-scene-haikei.svg" class="img-fluid project-image elevation-3">
      </div>
      <div class="col-5 d-flex flex-column justify-content-center project-description align-items-center g-3">
        <h2 class="project-title">Stackify</h2>
        <p class="project-text">Stackify is a Spotify Premium user extension that allows DJs and event planners to
          creatively organize event
          playlists, speeches, and write important notes while hosting an event. Built by a team of 4 developers at
          CodeWorks we see Stackify as the capstone of our development journey at bootcamp.<br><br> Utilizing the Spotify
          API,
          agile development methods, and creative technical solutions Stackify allows users to access rich information
          about songs,
          and come up with creative ways for the user to manage and edit
          playlists. This entire robust full-stack application was created within 2 weeks.</p>
        <h2 class="project-tools">Node JS ◾ Vue ◾ Mongo DB ◾ Spotify API ◾ Bootstrap</h2>
      </div>
      <div class="col-5 d-flex flex-column justify-content-center project-description align-items-center g-3">
        <h2 class="project-title">Keepr</h2>
        <p class="project-text">Keepr is a mock social media image sharing web application. Keepr has a C# backend, and
          Vue frontend. Utilizing a My SQL database, allowing users to store image links and have private vaults where
          they can store user information and images. Images have a view count, and are able to be favorited.</p>
        <h2 class="project-tools">C# ◾ JavaScript ◾ Vue ◾ My SQL ◾ .NET ◾ Bootstrap</h2>
      </div>
      <div class="col-5 d-flex justify-content-center align-items-center screenshot">
        <img src="../assets/img/blob-scene-haikei.svg" class="img-fluid project-image elevation-3">
      </div>
      <div class="col-5 d-flex justify-content-center align-items-center screenshot">
        <img src="../assets/img/blob-scene-haikei.svg" class="img-fluid project-image elevation-3">
      </div>
      <div class="col-5 d-flex flex-column justify-content-center project-description align-items-center g-3">
        <h2 class="project-title">Tower</h2>
        <p class="project-text">Tower is a mock ticket and event organization website. Users with an account are able to
          get tickets,
          create events, attend events, and leave comments on events. Built in accordance with a robust figma and strict
          set of requirements.</p>
        <h2 class="project-tools">Node JS ◾ Vue ◾ Mongo DB ◾ Bootstrap</h2>
      </div>
    </section>
    <section class="row contact-area justify-content-center">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h2 class="banner-text"><b>Contact</b></h2>
      </div>
      <div class="col-md-6 col-12">
        <form class="row contact-form elevation-3">
          <div class="col-md-6 col-12 d-flex flex-column">
            <label>
              <h3><b>Name</b></h3>
            </label>
            <input type="text" class="my-3">
          </div>
          <div class="col-md-6 col-12 d-flex flex-column">
            <label>
              <h3><b>Email Address</b></h3>
            </label>
            <input type="text" class="my-3">
          </div>
          <div class="col-12 d-flex flex-column">
            <label>
              <h3><b>Title</b></h3>
            </label>
            <input type="text" class="my-3">
          </div>
          <label>
            <h3><b>Message</b></h3>
          </label>
          <textarea rows="15" class="my-3"></textarea>
          <button class="form-button">Submit</button>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
input {
  height: 40px;
  border: 2px solid #EB5722;
  border-radius: 8px;
}

textarea {
  border-radius: 8px;
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
  background-color: white;
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
  }
}

.contact-form {
  background-color: #efefef;
  border: 10px solid white;
  padding: 1rem;
  border-radius: 13px;
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
