<template>
  <section class="landing-section">
    <div ref="lilyPlane" class="lily-plane">
      <div class="ripples ripples-a"></div>
      <div class="ripples ripples-b"></div>
      <div ref="floatingAsset" class="floating-asset">
        <div class="lily-bump"><img :src="lily" alt="" class="lily-img" /></div>
      </div>
      <div ref="floatingAsset2" class="floating-asset-2">
        <div class="lily-bump"><img :src="lily" alt="" class="lily-img" /></div>
      </div>
      <div ref="floatingAsset3" class="floating-asset-3">
        <div class="lily-bump"><img :src="lily" alt="" class="lily-img" /></div>
      </div>
    </div>
    <div class="landing-splash">
      <h2 class="display-title site-title text-palm font-xlarge">
        Everett<br><span class="text-beige">Marsland</span><br>Smith
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

    </div>
  </section>
  <section class="portfolio-section">
    <div class="section-card border-palm" v-for="project in projects" :key="project.title"
      @mouseenter="setFocused(project)" @mouseleave="unsetFocused()" @click="setActive(project)"
      :style="{ zIndex: project.title === focusedProject?.title ? 999 : project.zIndex }" :class="[project.bgClass, {
        'focused-card': project.title === focusedProject?.title,
        'minimized-card': project.title !== focusedProject?.title
      }]">
      <div class="project-card">
        <div class="color-tiles">
          <div v-for="color in project.colors" :key="color" class="color-tile" :style="{ backgroundColor: color }">
          </div>
        </div>
        <div class="project-header text-beige display-title font-medium bg-carbon border-palm">
          {{ project.title }}</div>
      </div>
    </div>

  </section>
  <section class="active-portfolio-section" ref="activeSection">
    <div v-if="activeProject" class="active-card shadow-palm border-palm">
      <div class="active-video">
        <div class="video-stack">
          <video v-for="(src, i) in activeProject.videos" :key="src" :ref="(el) => registerActiveVideo(i, el)"
            :src="src" muted loop playsinline preload="metadata" class="card-video"
            :class="{ 'is-active': i === (activeVideoIndex[activeProject.title] ?? 0) }" />
        </div>
      </div>
      <div class="project-description text-palm bg-carbon">
        <div class="project-titles">
          <h2 class="display-title font-large text-palm">{{ activeProject.title }}</h2>
          <h4 class="display-subtitle font-medium text-beige">{{ activeProject.subtitle }}</h4>
        </div>
        <div class="project-badges">
          <TechBadge v-for="tech in activeProject.technologies" :key="tech" :slug="tech" />
        </div>
        <div class="project-body text-small text-beige">
          {{ activeProject.description }}
        </div>
        <div class="text-center">
          <a class="project-link text-center" href="https://teleportpod.com">Visit Site</a>
        </div>
      </div>
    </div>
  </section>
  <section class="about-section">

  </section>

</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { float, ripple, repel } from '../utils/GSAPAnimation.js';

const teleportAuthFlow = new URL('../public/teleport_auth_flow.mp4', import.meta.url).href;
const teleportLanding = new URL('../public/teleport_landing.mp4', import.meta.url).href;
const lily = new URL('../public/lily1.png', import.meta.url).href;
// const teleportSecondVideo = new URL('../assets/img/<your second filename>.mp4', import.meta.url).href;

const mainLoading = ref(false);
const projects = ref([
  {
    title: 'Teleport',
    subtitle: 'The 3D Print on Demand Application',
    description: 'Serving over 10,000 small business across Etsy, Shopify, Amazon, and TikTok Shop. Utilizes Shippo and Shipstation API for fulfillment. Powered by the Slant 3D API. Processing 100s of orders a day with webhook tracking and fulfillment updates. Etsy API Integration for tracking updates and product listings. Uses "matching" for product to file connections.',
    bgClass: 'bg-onyx',
    zIndex: 0,
    videos: [teleportAuthFlow, teleportLanding],
    technologies: ['vue', 'docker', 'node', 'typescript', 'aws', 'google'],
    colors: ['#EEF6FC', '#CBE3F6', '#4D9DE0', '#224a69'] // White, Light Blue, Blue Primary, Dark Blue
  },
  {
    title: 'Portals',
    description: '3D Print Marketplace',
    bgClass: 'bg-onyx',
    zIndex: 0,
    technologies: ['vue', 'docker', 'node', 'typescript', 'aws']
  },
  {
    title: 'Slant 3D API',
    description: 'Rest API',
    bgClass: 'bg-onyx',
    zIndex: 0,
    technologies: ['vue', 'docker', 'node', 'typescript', 'aws']
  },
  {
    title: 'Kraken',
    description: 'Proprietary Farm Operations Software',
    bgClass: 'bg-onyx',
    zIndex: 0,
    technologies: ['vue', 'docker', 'node', 'typescript', 'aws']
  }
]);
const activeProject = ref(null);
const focusedProject = ref(null);
const videoRefs = ref({});
const activeVideoRefs = ref([]);
const activeVideoIndex = ref({});
const activeSection = ref(null);
const floatingAsset = ref(null);
const floatingAsset2 = ref(null);
const floatingAsset3 = ref(null);
const lilyPlane = ref(null);
let stopFloat = null;
let stopRipple = null;
let stopRepel = null;

onMounted(() => {
  stopFloat = float(floatingAsset.value);
  float(floatingAsset2.value);
  float(floatingAsset3.value);
  stopRipple = ripple(lilyPlane.value);
  stopRepel = repel([floatingAsset.value, floatingAsset2.value, floatingAsset3.value]);
});

onBeforeUnmount(() => {
  stopFloat?.();
  stopRipple?.();
  stopRepel?.();
});

const registerActiveVideo = (index, el) => {
  activeVideoRefs.value[index] = el;
};

const playActiveVideo = (title) => {
  const idx = activeVideoIndex.value[title] ?? 0;
  videoRefs.value[title]?.[idx]?.play().catch(() => { });
};

const playActiveSectionVideo = () => {
  const title = activeProject.value?.title;
  if (!title) return;
  const idx = activeVideoIndex.value[title] ?? 0;
  activeVideoRefs.value[idx]?.play().catch(() => { });
};

const stopActiveSectionVideos = () => {
  activeVideoRefs.value.forEach((v) => {
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  });
};

const stopAllVideos = (title) => {
  videoRefs.value[title]?.forEach((v) => {
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  });
};

const setActive = (project) => {
  stopActiveSectionVideos();
  activeVideoRefs.value = [];
  activeProject.value = project;
  nextTick(() => {
    activeSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (project.videos?.length) playActiveSectionVideo();
  });
};

const setFocused = (project) => {
  focusedProject.value = project;
  if (project.videos?.length) playActiveVideo(project.title);
}

const unsetFocused = () => {
  focusedProject.value = null;
  if (focusedProject.value?.videos?.length) stopAllVideos(focusedProject.value.title);
}

const cycleVideo = (title, direction = 1) => {
  const project = projects.value.find((p) => p.title === title);
  const count = project?.videos?.length ?? 0;
  if (count < 2) return;
  const current = activeVideoIndex.value[title] ?? 0;
  const next = (current + direction + count) % count;
  stopAllVideos(title);
  activeVideoIndex.value[title] = next;
  if (activeProject.value?.title === title) {
    stopActiveSectionVideos();
    playActiveSectionVideo();
  }
};

defineExpose({ cycleVideo });
</script>

<style scoped lang="scss">
.landing-section {
  position: relative;
  perspective: 1500px;
  perspective-origin: 50% 0%;
}

.lily-plane {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) rotateX(-55deg);
  transform-style: preserve-3d;
  transform-origin: 50% 0%;
  width: 100%;
  height: 100dvh;
  pointer-events: none;
  z-index: 1;
  mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 90%);
  -webkit-mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 90%);
  background-image: radial-gradient($palm-leaf-ghost 0%, transparent 50%, transparent 100%)
}

.ripples {
  position: absolute;
  inset: 0;

}

// .ripples-a {
//   background-image: repeating-linear-gradient(100deg,
//       transparent 0,
//       transparent 32px,
//       rgba(255, 255, 255, 0.04) 32px,
//       rgba(255, 255, 255, 0.06) 38px,
//       transparent 38px,
//       transparent 80px);
// }

.ripples-b {}

.floating-asset,
.floating-asset-2,
.floating-asset-3 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  position: absolute;
  background-image: radial-gradient($onyx 0%, $palm-leaf-ghost 30%, transparent 70%);
}

.floating-asset {
  top: 20%;
  left: 50%;
}

.floating-asset-2 {
  top: 10%;
  left: 40%;
  transform: rotateX(180deg);
}

.floating-asset-3 {
  top: 60%;
  left: 80%;
}

.lily-bump {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lily-img {
  display: block;
  width: 80%;
  height: 80%;
}

.site-title {
  z-index: 2;
}

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
  gap: 1rem;
  min-height: 20dvh;
  padding-left: 10dvw;
  padding-right: 10dvw;
  background-color: $onyx;
  padding-top: 10dvh;
  perspective: 3000px;
  perspective-origin: center;
}

.section-card {
  position: relative;
  min-height: 40dvh;
  padding: 1rem;
  display: flex;
  justify-content: start;
  align-items: start;
  transition: transform .6s ease-in-out, width .6s ease-in-out;
  will-change: transform;
  cursor: pointer;
  overflow: hidden;
  flex-grow: 1;
}

.section-card:hover {
  cursor: pointer;
}

.focused-card {
  transition: .6s ease-in-out;
  box-shadow: 0px 0px 40px $palm-leaf;
}

.active-portfolio-section {
  display: flex;
  justify-content: center;
  padding-bottom: 10dvh;
  padding-top: 5dvh;
  scroll-margin-top: 0;
}

.active-card {
  max-height: 80dvh;
  display: flex;
  width: 80%;
  align-items: stretch;
}

.active-video {
  position: relative;
  flex: 0 0 66.6667%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.project-titles {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-description {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
}

.project-card {
  position: absolute;
  inset: 0;
}

.color-tiles {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
}

.color-tile {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
}

.project-header {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: .5rem 1.25rem;
  z-index: 1;
}

.video-stack {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.card-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity .4s ease-in-out;
}

.card-video.is-active {
  opacity: 1;
}

.project-title {
  position: relative;
  z-index: 1;
  padding: .5rem;
  background-color: $palm-leaf;
  color: $onyx;
}

.project-badges {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  justify-content: center;
  padding: 1rem;
}

.project-body {
  min-height: 0;
  flex: 1;
}

.about-section {
  min-height: 100dvh;
}
</style>
