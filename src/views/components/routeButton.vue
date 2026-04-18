<script setup>
import {RouterLink} from "vue-router";

const props = defineProps({name: String, id: String});
// Name defines the route destination and name that appears on the button, could be a problem if translatation is added
// Id is used for the style and region icon of the button.
</script>

<template>
  <RouterLink :to="`/${name}`" class="button" :style="{ backgroundColor: `var(--bg-id-${props.id})`, backgroundImage: `url(/assets/images/region/${props.id}.png)`}">
      {{ props.name }}
  </RouterLink>
</template>

<style scoped>
.button {
  padding: 0;
  transition: 0.3s;
  display: inline-block;

  height: 60px;
  width: 300px;

  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;

  border-radius: var(--border-radius);

  text-align: start;
  text-indent: 70px;
  line-height: 60px;
  font-size: 40px;
  font-family: Markazi Text;
  text-shadow: 0 1px 1px var(--color-background);

  text-transform: capitalize;

  user-select: none;
  -webkit-user-drag: none;
}

.button:hover {
  transform: scale(1.02);
  filter: brightness(120%);
}
</style>
