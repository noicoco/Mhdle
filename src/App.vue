<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/home" id="title">MHdle</RouterLink>
  </header>

  <div id="background"></div>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>

header {
  top: 0;
  z-index: 100;
}

nav {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

#background {
  position: absolute;
  top: 0;
  filter: blur(7px);
  opacity: 75%;
  background-color: var(--color-background);
  background-image: url("./assets/images/bg/bg1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -10;

}

#title {
  font-size: 4rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
}
#title:hover {
  opacity: 1;
  color: var(--color-text);
  background: none;
}
</style>
