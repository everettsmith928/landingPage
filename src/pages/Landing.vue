<template>
  <section class="splash">
    <h2 ref="titleHTML">I'm Everett</h2>

  </section>
  <h1>Testing Home Page</h1>
</template>

<script>
import { ref, onMounted } from 'vue';
import gsap from "gsap";

export default {
  setup() {
    const titleHTML = ref(null)

    const slideInAnimation = () => {
      console.log('Sliding in the titleHTML');
      gsap.from(titleHTML, { x: -100, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 1,
      });
    }
    onMounted(() => {
      slideInAnimation()
    })

    return {
      titleHTML
    };
  },
};
</script>


<style>
.splash {
  min-height: 100dvh;
  background-color: white;
}

.roboto,
p,
span {
  font-family: 'Roboto', sans-serif;
  opacity: 1;
}

.bebas,
h1,
h2,
h3 {
  font-family: 'Bebas Neue', sans-serif;
  opacity: 1;
}
</style>