<template>
  <section class="landing-section">
    <div class="landing-splash">
      <h2 class="display-title site-title text-green font-xlarge">
        Everett<br>
        <span class="text-beige">Marsland</span>
        <br>Smith
      </h2>
      <!-- <h3 class="display-subtitle text-beige font-medium">Software Developer | Artist | Photographer</h3> -->
    </div>

  </section>
  <section class="portfolio-section">
    <div>
      <p class="font-small text-beige">Testing the body font now<br>Another Font test as well</p>
    </div>
  </section>

</template>

<script setup>

</script>

<style scoped lang="scss">
.landing-splash {
  min-height: 100dvh;
  padding-left: 1rem;
  background-image: $gradient-bottom-right;
}

.portfolio-section {
  min-height: 30dvh;
  background-color: $onyx;
}
</style>
