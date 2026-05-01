<template>
  <section class="landing-section">
    <div ref="lilyPlane" class="lily-plane">
      <div ref="floatingAsset" class="floating-asset">
        <div class="lily-bump"><img :src="lily" alt="" class="lily-img" /></div>
      </div>
      <div ref="floatingAsset2" class="floating-asset-2">
        <div class="lily-bump"><img :src="lily" alt="" class="lily-img" /></div>
      </div>
      <div ref="floatingAsset3" class="floating-asset-3">
        <div class="lily-bump"><img :src="lily" alt="" class="lily-img" /></div>
      </div>
      <div ref="floatingAsset4" class="floating-asset-4">
        <div class="lily-bump"><img :src="lily" alt="" class="lily-img" /></div>
      </div>
      <div ref="floatingAsset5" class="floating-asset-5">
        <div class="lily-bump"><img :src="lily" alt="" class="lily-img" /></div>
      </div>
    </div>
    <div class="landing-splash">
      <div class="site-title">
        <h2 class="display-title text-palm font-xlarge">
          <span ref="everett">Everett</span><br><span ref="marsland" class="text-beige">Marsland</span><br><span
            ref="smith">Smith</span>
        </h2>
        <div class="spacer-palm"></div>
        <h3 class="display-subtitle font-medium text-beige job-title">Fullstack Software Developer</h3>
      </div>
      <div class="landing-navigation">
        <div class="option-wrapper">
          <a class="navigation-option text-beige" @click="navigateTo('portfolio')">Portfolio</a>
          <a class="navigation-option text-beige" @click="navigateTo('about')">About</a>
          <a class="navigation-option text-beige">Resume</a>
          <a class="navigation-option text-beige">Contact</a>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="introduction-section bg-onyx">
    <div class="bio-info">

    </div>
  </section> -->
  <section class="portfolio-section" ref="activeSection">
    <div class="portfolio-header" id="portfolio-section">
      <h3 class="display-title font-large text-beige">Portfolio</h3>
    </div>
    <div class="section-cards">
      <div class="section-card border-palm" v-for="project in projects" :key="project.title"
        @mouseenter="setFocused(project)" @mouseleave="unsetFocused()" @click="setActive(project)"
        :style="{ zIndex: project.title === focusedProject?.title ? 999 : project.zIndex }" :class="[project.bgClass, {
          'focused-card': project.title === focusedProject?.title || project.title === activeProject?.title,
          'minimized-card': project.title !== focusedProject?.title
        }]">
        <div class="project-card">
          <div class="color-tiles">
            <div v-for="color in project.colors" :key="color" class="color-tile" :style="{ backgroundColor: color }">
            </div>
          </div>
          <div class="project-header text-beige display-title font-small">
            {{ project.title }}</div>
        </div>
      </div>
    </div>

  </section>
  <section class="active-portfolio-section">
    <div v-if="activeProject" class="active-card-shadow">
      <div ref="activeCardEl" class="active-card border-palm shadow-palm">
        <div class="active-video">
          <div class="video-stack" v-if="activeProject.videos">
            <video v-for="(src, i) in activeProject.videos" :key="src" :ref="(el) => registerActiveVideo(i, el)"
              :src="src" muted loop playsinline preload="metadata" class="card-video"
              :class="{ 'is-active': i === (activeVideoIndex[activeProject.title] ?? 0) }" />
          </div>
          <div class="video-stack" v-else>
            <p class="text-palm font-small">No video available</p>
          </div>
        </div>
        <div class="project-description text-palm bg-onyx">
          <div class="project-titles">
            <h2 class="display-title font-medium text-beige">{{ activeProject.title }}</h2>
            <h4 class="display-subtitle font-small text-palm">{{ activeProject.subtitle }}</h4>
          </div>
          <div class="project-badges">
            <TechBadge v-for="tech in activeProject.technologies" :key="tech" :slug="tech" />
          </div>
          <div class="project-body font-small text-beige">
            {{ activeProject.description }}
          </div>
          <div class="text-center">
            <a class="project-link text-center" :href="activeProject.url" target="_blank">Visit Site</a>
          </div>
        </div>
      </div>
    </div>
    <div class="active-card shadow-palm border-palm" v-else>
      <p class="text-beige">Select a project to view</p>
    </div>
  </section>
  <section id="about-section" class="about-section">
    <div class="about-header">
      <div class="portrait-box">
        <div class="portrait  shadow-palm">
          <p class="text-beige">Image Here</p>
        </div>

        <!-- Oval shaped -->
      </div>
      <h3 class="display-title font-large text-beige">Who I am</h3>
      <p class="font-small text-palm about-definition info">// Marsland <br><br> It signifies someone who lived near
        marshy land or a meadow close to a marsh. Marsland literally translates to "marsh land." This name would have
        been adopted by
        individuals residing near such geographical features, eventually becoming a hereditary surname. </p>
    </div>
    <div class="about-bio">
      <p class="text-beige font-small">Here is some information on who I am and my past/present/current + strengthsHere
        is some information on who I am and my past/present/current + strengthsHere is some information on who I am and
        my past/present/current + strengthsHere is some information on who I am and my past/present/current + strengths
        Here is some information on who I am and my past/present/current + strengthsHere is some information on who I am
        and my past/present/current + strengths</p>
    </div>
  </section>

</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { float, floatDown, floatUp, floatUpOnScroll, loadTitle, repel, scrollToSection, underwaterFloat } from '../utils/GSAPAnimation.js';

const route = useRoute();
const router = useRouter();

const sectionMap = {
  portfolio: 'portfolio-section',
  about: 'about-section',
};

const navigateTo = (key) => {
  if (!sectionMap[key]) return;
  router.replace({ query: { ...route.query, section: key } });
  scrollToSection(sectionMap[key]);
};

const teleportAuthFlow = new URL('../public/teleport_auth_flow.mp4', import.meta.url).href;
const teleportLanding = new URL('../public/teleport_landing.mp4', import.meta.url).href;
const slant3dAPIVideo = new URL('../public/api_walkthrough.mp4', import.meta.url).href;
const portalsVideo = new URL('../public/portals_walkthrough.mp4', import.meta.url).href;
const lily = new URL('../public/lily1.png', import.meta.url).href;

const mainLoading = ref(false);
const projects = ref([
  {
    title: 'Teleport',
    subtitle: 'The 3D Print on Demand Application',
    description: 'Serving over 10,000 small business across Etsy, Shopify, Amazon, and TikTok Shop. Utilizes Shippo and Shipstation API for fulfillment. Powered by the Slant 3D API. Processing 100s of orders a day with webhook tracking and fulfillment updates. Etsy API Integration for tracking updates and product listings. Uses "matching" for product to file connections.',
    bgClass: 'bg-onyx',
    zIndex: 0,
    videos: [teleportAuthFlow, teleportLanding],
    url: 'https://teleportpod.com',
    technologies: ['vue', 'docker', 'node', 'typescript', 'aws', 'google'],
    colors: ['#EEF6FC', '#CBE3F6', '#4D9DE0', '#224a69'] // White, Light Blue, Blue Primary, Dark Blue
  },
  {
    title: 'Portals',
    subtitle: 'No Fee 3D Print Listing Marketplace',
    description: 'Feeless 3D print on demand marketplace. Sellers upload a file and it is available to sell within seconds. Using the Slant 3D API with Stripe checkout sessions to process orders. Customizable storefronts with CSS wrappers that dynamically chang the Portals experience chosen by the seller. Slant 3D prints and ships the part, and the seller gets paid out any profit.',
    bgClass: 'bg-onyx',
    zIndex: 0,
    videos: [portalsVideo],
    url: 'https://teleportpod.com/portals/explore',
    technologies: ['vue', 'docker', 'node', 'typescript', 'aws', 'google'],
    colors: ['#C27AFF', '#fb923c', '#709FEB', '#091f2e']
  },
  {
    title: 'Slant 3D API',
    subtitle: 'Where Bits Turn Into Atoms',
    description: '3D Printing API powered by a real print farm. Direct order and file management integrations. Powering Portals, Teleport, and other applications. Multiple API key support, usage limits, payment integrations. Entrance to  Slant 3D microservice architecture including Kraken, an order management and tracking system, file manager system, slicer for STL files and payment microservice.',
    bgClass: 'bg-onyx',
    zIndex: 0,
    videos: [slant3dAPIVideo],
    url: 'https://slant3dapi.com',
    technologies: ['vue', 'docker', 'node', 'typescript', 'aws', 'google', 'postgres'],
    colors: ['#F8FAFB', '#FE654F', '#FDB833', '#1789FC', '#223843']
  },
  {
    title: 'Kraken',
    subtitle: 'Print Farm Management Software',
    description: 'Scalable print farm management software. Proprietary node based system managing thousands of print jobs, files, warehousing, and filaments automatically. Converting STL to GCODE via an automated slicer and queue system.',
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
const everett = ref(null);
const marsland = ref(null);
const smith = ref(null);
const floatingAsset = ref(null);
const floatingAsset2 = ref(null);
const floatingAsset3 = ref(null);
const floatingAsset4 = ref(null);
const floatingAsset5 = ref(null);
const lilyPlane = ref(null);
const activeCardEl = ref(null);
let stopFloat = null;
let stopRepel = null;
const stopScrollTriggers = [];

onMounted(() => {
  stopFloat = float(floatingAsset.value);
  float(floatingAsset2.value);
  float(floatingAsset3.value);
  stopRepel = repel([floatingAsset.value, floatingAsset2.value, floatingAsset3.value, floatingAsset4.value, floatingAsset5.value]);
  loadTitle([everett.value, marsland.value, smith.value]);
  underwaterFloat(document.querySelectorAll(`.navigation-option`))
  setActive(projects.value[0], { scroll: false });

  nextTick(() => {
    document.querySelectorAll('.portfolio-section .section-card').forEach((card) => {
      stopScrollTriggers.push(floatUpOnScroll(card));
    });
    if (activeCardEl.value) {
      stopScrollTriggers.push(floatUpOnScroll(activeCardEl.value, { prehide: false }));
    }
  });

  const initial = route.query.section;
  if (initial && sectionMap[initial]) {
    nextTick(() => scrollToSection(sectionMap[initial]));
  }
});

watch(() => route.query.section, (key) => {
  if (key && sectionMap[key]) scrollToSection(sectionMap[key]);
});

onBeforeUnmount(() => {
  stopFloat?.();
  stopRepel?.();
  stopScrollTriggers.forEach((stop) => stop?.());
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

const setActive = (project, { scroll = true } = {}) => {
  const swap = () => {
    stopActiveSectionVideos();
    activeVideoRefs.value = [];
    activeProject.value = project;
    nextTick(() => {
      if (activeCardEl.value) floatUp(activeCardEl.value);
      if (project.videos?.length) playActiveSectionVideo();
    });
  };

  const isSwap = activeProject.value && activeProject.value.title !== project.title;
  if (isSwap && activeCardEl.value) {
    floatDown(activeCardEl.value, { onComplete: swap });
  } else {
    swap();
  }
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
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 105%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 105%);
  background-image: radial-gradient($palm-leaf-ghost 0%, transparent 50%, transparent 100%);
  overflow-x: hidden;
}

.floating-asset,
.floating-asset-2,
.floating-asset-3,
.floating-asset-4,
.floating-asset-5 {
  opacity: 100%;
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

.floating-asset-4 {
  top: 20%;
  left: 20%;
}

.floating-asset-5 {
  top: 40%;
  left: 90%;
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
  padding-left: 3rem;
  padding-top: 2rem;
  z-index: 2;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 70%, transparent);
  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 70%, transparent);
}

.site-title span {
  display: inline-block;
}

.job-title {
  padding-left: 2rem;
  margin-top: 2rem;
}

.name-definition {
  padding-left: 2rem;
  margin-top: 1rem;
  max-width: 400px;
}

.landing-splash {
  min-height: 100dvh;
  padding-left: 1rem;
  padding-right: 1rem;
  background-image: $splash-gradient;
  display: flex;
  justify-content: space-between;
}

.landing-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.option-wrapper {
  -webkit-mask-image: linear-gradient(to bottom right, $onyx 10%, transparent 110%);
  display: flex;
  gap: 4rem;
  padding: 2rem;
  padding-bottom: 10dvh;
  margin-top: 30dvh;
}

.navigation-option {
  font-size: 3rem;
  transition: .3s ease-in-out;
  text-shadow: $palm-leaf 10px 5px 20px;
}

.navigation-option:hover {
  color: $porcelain;
  cursor: pointer;
  text-shadow: $porcelain 1px 2px 5px;
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
  flex-direction: column;
  padding-left: 10dvw;
  padding-right: 10dvw;
  background-color: $onyx;
  padding-top: 40dvh;
  perspective: 3000px;
  perspective-origin: center;
}

.portfolio-header {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.section-cards {
  display: flex;
  min-height: 20dvh;
  gap: 1rem;
}

.section-card {
  position: relative;
  min-height: 10dvh;
  padding: 1rem;
  display: flex;
  justify-content: start;
  align-items: start;
  will-change: transform;
  background-color: $carbon-black;
  background-image: linear-gradient(to bottom, $carbon-black 10%, $onyx 100%);
  cursor: pointer;
  overflow: hidden;
  flex-grow: 1;
  opacity: 0;
}

.section-card:hover {
  cursor: pointer;
}

.focused-card {
  transition: .6s ease-in-out;
  background-color: $carbon-black;
  box-shadow: 0px 0px 40px $palm-leaf-ghost;
}

.active-portfolio-section {
  display: flex;
  justify-content: center;
  padding-bottom: 10dvh;
  padding-top: 5dvh;
  scroll-margin-top: 0;
  background-color: $onyx;
}

.active-card-shadow {
  width: 80%;
  display: flex;
  min-height: 30dvh;
  max-height: 80dvh;
}

.active-card {
  flex: 1;
  display: flex;
  align-items: stretch;
  min-height: 0;
  opacity: 0;
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
  gap: 1rem;
  align-items: center;
}

.project-description {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem;
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
  opacity: 10%;
  transition: .3s ease-in-out;
}

.focused-card .color-tiles {
  opacity: 100%;
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
  z-index: 1;
  text-shadow: $carbon-black 10px 5px 10px;
  transition: .3s ease-in-out;
}

.focused-card .project-header {
  opacity: 0;
}

.video-stack {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
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
  opacity: 85%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  background-color: $onyx;
  gap: 10dvw;
  padding-bottom: 40dvh;
  padding-top: 10dvh;
  margin-top: 30dvh;
}

.about-header {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: start;
}


.portrait-box {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
}

.portrait {
  width: 300px;
  height: 500px;
  border-radius: 40%;
  border: 8px solid $palm-leaf-ghost;
  background-color: $carbon-black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-definition {
  opacity: 60%;
}

.about-bio {
  max-width: 500px;
  display: flex;
  align-items: start;
}
</style>
