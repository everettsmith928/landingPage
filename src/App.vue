<template>
  <header>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }

  },
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}



main {
  background-color: rgb(235, 87, 34);
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
