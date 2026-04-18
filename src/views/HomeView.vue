<script setup>
import {RouterLink} from "vue-router";
import routeButton from "@/views/components/routeButton.vue";

</script>

<template>
<div class="container">
  <div class="nav-links">
    <routeButton :name="'monster'" :id="'2'" />
    <routeButton :name="'roar'" :id="'3'" />
    <routeButton :name="'talent'" :id="'4'" />
    <routeButton :name="'compendium'" :id="'5'" />
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
</style>
