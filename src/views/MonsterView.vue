<script setup>
import blocki from "@/views/components/bloc.vue";
import wordleTable from "@/views/components/wordleTable.vue";
import SearchBox from "@/views/components/searchBox.vue";

import {inject, ref} from "vue";

// const bgi = ref('bg')

const monsterData = inject("monsterData");
const selectedMonster = inject("selectedMonster");
let guesses = ref([]);

function selectionHandler(selection) {
  guesses.value.push(selection);

  if (selection === selectedMonster) {
    alert("yay!");
  }
  else {
    alert("aw");
  }
}

</script>

<template>
  <div id="title">
    <h1>Monster</h1>
  </div>


  <div class="container bg">
    <h2>Guess the monster</h2>
    <search-box :data="monsterData" :category="'monster'" @selected="selectionHandler"></search-box>
    <wordle-table :guesses="guesses" :columns="Object.keys(monsterData[0])" :category="'monster'"></wordle-table>
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
