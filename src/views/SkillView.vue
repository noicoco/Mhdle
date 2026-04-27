<script setup>
import wordleTable from "@/views/components/wordleTable.vue";
import SearchBox from "@/views/components/searchBox.vue";
import {inject, ref} from "vue";

// const bgi = ref('bg')

const skillData = inject("skillData");
const selectedSkill = inject("selectedSkill");
let guesses = ref([]);

function selectionHandler(selection) {
  guesses.value.push(selection);

  if (selection === selectedSkill) {
    alert("yay!");
  }
  else {
    alert("aw");
  }
}
</script>

<template>
  <div id="title">
    <h1>Skill</h1>
  </div>

  <div class="container bg">
    <h2>Guess the skill</h2>
    <search-box :data="skillData" :category="'skill'" @selected="selectionHandler"></search-box>
    <wordle-table :guesses="guesses" :columns="Object.keys(skillData[0])" :category="'skill'"></wordle-table>
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
