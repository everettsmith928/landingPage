<template>
  <section class="landing-section">
    <div class="landing-splash">
      <h2 class="display-title site-title text-palm font-xlarge">
        Everett<br>
        <span class="text-beige">Marsland</span>
        <br>Smith
      </h2>
      <!-- <h3 class="display-subtitle text-beige font-medium">Software Developer | Artist | Photographer</h3> -->
    </div>

  </section>
  <section class="portfolio-section">
    <div class="section-card shadow-palm" v-for="project in projects" :key="project.title"
      @mouseenter="setActive(project)" @mouseleave="setActive(null)"
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
    title: 'Teleport',
    description: 'Slant 3D Print on Demand Software',
    bgClass: 'bg-porcelain'
  },
  {
    title: 'Portals',
    description: '3D Print Marketplace',
    bgClass: 'bg-beige'
  },
  {
    title: 'Slant 3D API',
    description: 'Rest API',
    bgClass: 'bg-palm'
  },
  {
    title: 'Kraken',
    description: 'Proprietary Farm Operations Software',
    bgClass: 'bg-onyx'
  }
])
const focusedProject = ref(null);

const setActive = (project) => {
  focusedProject.value = project;
}
</script>

<style scoped lang="scss">
.landing-splash {
  min-height: 100dvh;
  padding-left: 1rem;
  background-image: $gradient-bottom-right;
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
  perspective: 1600px;
  perspective-origin: bottom right;
}

.section-card {
  width: 40%;
  min-height: 30dvh;
  padding: 1rem;
  transform-origin: center;
  transform: rotateY(-25deg);
  transition: transform .6s ease-in-out, width .6s ease-in-out;
  will-change: transform;
}

.expanded-card {
  width: 90%;
  transform: rotateY(0deg);
}
</style>
