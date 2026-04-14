<script setup>
import {RouterLink} from "vue-router";

defineProps({ name: String, id: String });
// Name defines the route destination and name that appears on the button, could be a problem if translatation is added
// Id is used for the style and region icon of the button.
</script>

<template>
<div class="button">
  <RouterLink to="/{{ name }}">{{ name.toUpperCase() }}</RouterLink>
</div>
</template>

<style scoped>
.button {
  background-image: url("../assets/images/region/{{ id }}.png");
}
</style>
