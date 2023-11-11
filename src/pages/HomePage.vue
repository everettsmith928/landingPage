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
    <section class="row splash-area text-center">
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
        <a href="https://github.com/everettsmith928">
          <h3 class="splash-heading-text icon"><i class="icon mdi mdi-github"></i></h3>
        </a>
        <a href="https://www.linkedin.com/in/everett-smith-811b57132/">
          <h3 class="splash-heading-text icon"><i class="icon mdi mdi-linkedin"></i></h3>
        </a>
        <h3 class="splash-heading-text icon"><i class="icon mdi mdi-note"></i></h3>
      </div>
    </section>
    <section class="row banner-row elevation-5 justify-content-center">
      <div class="col-12 d-flex justify-content-center skill-title">
        <h2 class="banner-text"><b>My Skills</b></h2>
      </div>
      <div class="banner col-3 d-flex flex-column align-items-center elevation-4">
        <h2 class="skill-subtitle">Front End</h2>
        <h3 class="skill-text">Javascript</h3>
        <h3 class="skill-text">C#</h3>
        <h3 class="skill-text">Node JS</h3>
        <h3 class="skill-text">Bootstrap</h3>
        <h3 class="skill-text">Vue</h3>
        <h3 class="skill-text">My SQL</h3>
        <h3 class="skill-text">Mongo</h3>
      </div>
      <div class="banner col-3 d-flex flex-column align-items-center elevation-4">
        <h2 class="skill-subtitle">Back End</h2>
        <h3 class="skill-text">Adobe Suite</h3>
        <h3 class="skill-text">Photography</h3>
        <h3 class="skill-text">Design</h3>
        <h3 class="skill-text">Color Theory</h3>
        <h3 class="skill-text">Mongoose</h3>
        <h3 class="skill-text">Express</h3>
        <h3 class="skill-text">XRPL</h3>
      </div>
      <div class="banner col-3 d-flex flex-column align-items-center elevation-4">
        <h2 class="skill-subtitle">Design</h2>
        <h3 class="skill-text">Adobe Suite</h3>
        <h3 class="skill-text">Photography</h3>
        <h3 class="skill-text">Design</h3>
        <h3 class="skill-text">Color Theory</h3>
        <h3 class="skill-text">Mongoose</h3>
        <h3 class="skill-text">Express</h3>
        <h3 class="skill-text">XRPL</h3>
      </div>
    </section>
    <section class="row project-row">
      <div class="col-12 d-flex justify-content-center skill-title">
        <h3 class="banner-text"><b>Projects</b></h3>
      </div>
      <div class="col-5 d-flex justify-content-center screenshot">
        Project Screenshot
      </div>
      <div class="col-5 d-flex flex-column justify-content-center project-description align-items-center g-3">
        <h2 class="project-title">Stackify</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda sapiente officiis enim voluptatem minus
          ipsum non autem, vero nulla adipisci saepe. Corrupti nemo quos atque doloremque deleniti, distinctio optio
          exercitationem.</p>
      </div>
      <div class="col-5 d-flex justify-content-center screenshot">
        Project Screenshot
      </div>
      <div class="col-5 d-flex flex-column justify-content-center project-description align-items-center g-3">
        <h2 class="project-title">Keepr</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda sapiente officiis enim voluptatem minus
          ipsum non autem, vero nulla adipisci saepe. Corrupti nemo quos atque doloremque deleniti, distinctio optio
          exercitationem.</p>
      </div>
      <div class="col-5 d-flex justify-content-center screenshot">
        Project Screenshot
      </div>
      <div class="col-5 d-flex flex-column justify-content-center project-description align-items-center g-3">
        <h2 class="project-title">Tower</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda sapiente officiis enim voluptatem minus
          ipsum non autem, vero nulla adipisci saepe. Corrupti nemo quos atque doloremque deleniti, distinctio optio
          exercitationem.</p>
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
.main-content {}

.navigation {
  background-color: rgb(9, 9, 9);
  height: 10vh;
}

.center-line {
  height: 30vh;
  width: 1px;
}

.banner {
  min-height: 20vh;
  background-color: #EB5722;
  margin: 1rem;
  border: 3px #efefef solid;
  padding: 2rem;
  border-radius: 13px;
}

.banner-row {
  padding-bottom: 10vh;
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
  color: #efefef;
  font-size: 3rem;
  margin: 1rem;
  margin-bottom: 3rem;
  font-weight: 800;
}

.skill-text {
  color: white;
}

.icon {
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
  border: 0px solid #ffffff;
}

.splash-heading {
  color: white;
}

.splash-heading-text {
  font-weight: 900;
  font-size: 3rem;
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
  background-color: white;
}

.project-description {
  min-height: 20vh;
  border: 1px solid white;
  border-radius: 8px;
}

.project-title {
  font-size: 2rem;
  padding: 1rem;
  color: white;
}
</style>
