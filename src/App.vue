<script setup>
import {RouterLink, RouterView} from 'vue-router'

// FIXME: Possible issues with spacing with the header and main content, we'll see
</script>

<template>
  <header>
      <nav>
    <RouterLink to="/" id="title" draggable="false">
      MHdle
    </RouterLink>
      </nav>
  </header>

  <div id="background"></div>

  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
header {
  top: 0;
  z-index: 100;
  margin-bottom: 7%;
}

nav {
  max-width: max-content;
  margin: 0 auto;
  padding: 0 2rem;
}

#background {
  position: fixed;
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
  font-size: 5em;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;

  font-family: Markazi Text;
  text-shadow: 0 2px 2px var(--color-background);
  user-select: none;
}

#title:hover {
  opacity: 1;
  color: var(--color-text);
  background: none;
  transform: scale(1.02);
}
</style>
