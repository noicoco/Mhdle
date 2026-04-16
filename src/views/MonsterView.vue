<script setup>
import blocki from "@/components/bloc.vue";
import routeB from "@/components/routeButton.vue";
import {ref} from "vue";

const bgi = ref('bg')
</script>

<template>
  <div>
    <h1>Monster</h1>
  </div>

  <div :id="bgi">
    <blocki></blocki>
  </div>
</template>

<style scoped>
#bg{
  background: #252525;
  width: 100px;
  height: 100px;
}
</style>
