<script setup>
import {RouterLink} from "vue-router";
import routeButton from "../components/routeButton.vue";
</script>

<template>
<div class="container">
  <div class="nav-links">
    <routeButton :name="'monster'" :id="'1'" />
    <routeButton :name="'roar'" :id="'2'" />
    <routeButton :name="'talent'" :id="'3'" />
    <routeButton :name="'compendium'" :id="'4'" />
  </div>
</div>
</template>

<style scoped>
.nav-links {
  display: inline-grid;
  grid-template-columns: 1fr;
  grid-template-rows:  repeat(4, 1fr);
  grid-gap: 20px;
  align-content: center;

  background-color: var(--color-background);
  padding: 16px 20px;
  border: 2px solid var(--border-metal);
  border-radius: var(--border-radius);

}

.container {
  display: flex;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>
