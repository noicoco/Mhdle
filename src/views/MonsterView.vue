<script setup>
import blocki from "@/views/components/bloc.vue";
import wordleTable from "@/views/components/wordleTable.vue";
import monsterSelect from "@/views/components/monsterSelect.vue";

import {ref} from "vue";

// const bgi = ref('bg')
</script>

<template>
  <div id="title">
    <h1>Monster</h1>
  </div>

  <div class="container bg">
    <monster-select>a</monster-select>
  </div>

</template>

<style scoped>
.bg {
  background: var(--color-background);
  width: 100%;
  padding: 15px;
  border-radius: var(--border-radius);
  border: 2px solid var(--border-metal);
}

#title {
  font-size: 1.3em;
  color: var(--color-text);
  font-weight: bolder;
  text-align: center;

  font-family: Markazi Text;
  text-shadow: 0 1px 1px var(--color-background);
  user-select: none;
  padding: 0;
  margin: 0;
}
</style>
