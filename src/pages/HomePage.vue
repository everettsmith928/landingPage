<template>
  <section class="landing-section">
    <div class="landing-splash">
      <h2 class="display-title site-title text-palm font-xlarge">
        Everett<span class="text-beige">Marsland</span>Smith
      </h2>
      <div class="accent-text">
        <h3 class="display-subtitle text-beige">
          Software Developer
        </h3>
        <h3 class="display-subtitle text-beige">
          Photographer
        </h3>
        <h3 class="display-subtitle text-beige">
          Painter
        </h3>
      </div>
    </div>

  </section>
  <div class="spacer-palm"></div>
  <section class="introduction-section bg-onyx">
    <div class="bio-info">
      <p class="font-small text-beige">Here is a test body of text. We will be adding information to this shortly. Here
        is a test body of text. We will be adding information to this shortlyHere is a test body of text. We will be
        adding information to this shortlyHere is a test body of text. We will be adding information to this shortlyHere
        is a test body of text. We will be adding information to this shortly</p>
    </div>
  </section>
  <section class="portfolio-section">
    <div class="section-card shadow-palm" v-for="project in projects" :key="project.title"
      @mouseenter="setActive(project)" @mouseleave="unsetActive()"
      :style="{ zIndex: project.title === focusedProject?.title ? 999 : project.zIndex }"
      :class="[project.bgClass, { 'expanded-card': project.title === focusedProject?.title }]">
      <div class="project-card">
        <p>{{ project.title }}</p>
      </div>
    </div>
  </section>

</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    title: 'Test 6',
    description: 'Slant 3D Print on Demand Software',
    bgClass: 'bg-porcelain',
    zIndex: 6
  },
  {
    title: 'Test 5',
    description: 'Slant 3D Print on Demand Software',
    bgClass: 'bg-porcelain',
    zIndex: 5
  },
  {
    title: 'Teleport',
    description: 'Slant 3D Print on Demand Software',
    bgClass: 'bg-porcelain',
    zIndex: 4
  },
  {
    title: 'Portals',
    description: '3D Print Marketplace',
    bgClass: 'bg-beige',
    zIndex: 3
  },
  {
    title: 'Slant 3D API',
    description: 'Rest API',
    bgClass: 'bg-palm',
    zIndex: 2
  },
  {
    title: 'Kraken',
    description: 'Proprietary Farm Operations Software',
    bgClass: 'bg-onyx',
    zIndex: 1
  }
]);
const focusedProject = ref(null);

const setActive = (project) => {
  focusedProject.value = project;
}

const unsetActive = () => {
  focusedProject.value = null;
}

</script>

<style scoped lang="scss">
.landing-splash {
  min-height: 100dvh;
  padding-left: 1rem;
  background-image: $splash-gradient;
  display: flex;
  justify-content: space-between;
}

.accent-text {
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 1rem;
  padding-right: 1rem;
}

.introduction-section {
  min-height: 30dvh;
}

.bio-info {
  padding: 1rem;
  max-width: 400px;
}

.portfolio-section {
  display: flex;
  justify-content: center;
  min-height: 80dvh;
  padding-left: 10dvw;
  padding-right: 10dvw;
  background-color: $onyx;
  padding-top: 10dvh;
  padding-bottom: 10dvh;
  perspective: 3000px;
  perspective-origin: center;
}

.section-card {
  width: 40%;
  min-height: 30dvh;
  padding: 1rem;
  transform-origin: center;
  transform: rotateY(-25deg);
  transition: transform .6s ease-in-out, width .6s ease-in-out;
  will-change: transform;
  cursor: pointer;
}

.section-card:hover {
  cursor: pointer;
}

.expanded-card {
  width: 100%;
  transform: rotateY(0deg);
}
</style>
