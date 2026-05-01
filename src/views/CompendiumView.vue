<script setup>
import wordleTable from "@/views/components/wordleTable.vue";
import SearchBox from "@/views/components/searchBox.vue";

import {inject, ref} from "vue";

// const bgi = ref('bg')

const monsterData = inject("monsterData");
const selectedMonster = inject("selectedMonster");
let guesses = ref([]);

function selectionHandler(selection) {
  guesses.value.push(selection);

  // Todo: winscreen !
  if (selection === selectedMonster) {
    alert("yay!");
  }
  else {
    alert("aw");
  }
}

function filterDescription(description) {
  let finalDescription = description.toString();

  for (let monsterDataKey in monsterData) {
    finalDescription = finalDescription.replaceAll(monsterData[monsterDataKey].name, "[...]");
  }

  return finalDescription;
}
</script>

<template>
  <div id="title">
    <h1>Compendium</h1>
  </div>

  <div class="container bg">
    <h2>Guess from the Compendium's description</h2>

    <div class="description">
      <blockquote>
        <p>
          {{filterDescription(selectedMonster.description)}}
        </p>
      </blockquote>
    </div>
    <search-box :data="monsterData" :category="'monster'" @selected="selectionHandler"></search-box>
    <wordle-table :guesses="guesses" :columns="Object.keys(monsterData[0])" :category="'monster'" :ignored-columns="['description', 'ailments', 'resistances', 'weaknesses', 'height', 'elements', 'species']" :selected="selectedMonster"></wordle-table>
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

.description {
  color: var(--color-text);
  font-family: "Markazi Text";
  font-size: 1.7em;
  text-align: justify;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 5px 5px 25px;
  padding: 15px;
  width: 75%;
  border-radius: var(--border-radius);
  border: 2px solid var(--border-metal);

}


/* TY MDN DOCS */
blockquote p::before {
  content: "\201C  ";
}

blockquote p::after {
  content: "  \201D";
}

</style>
