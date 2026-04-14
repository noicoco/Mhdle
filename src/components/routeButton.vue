<script setup>
import {RouterLink} from "vue-router";

defineProps({ name: String })
</script>

<template>
<div class="button">
  <RouterLink to="/{{ name }}">{{ name }}</RouterLink>
</div>
</template>

<style scoped>
.button {
  
}
</style>
