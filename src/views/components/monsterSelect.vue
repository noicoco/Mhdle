<script setup>
import {ref} from "vue";

// Placeholder way of getting Monster Data, should be inherited from the view, monsterView should act as gamemaster and contain game logic.
// Should be using a custom combobox search bar like with icons and such.
import monsterData from "../../../assets/data/monster_data.json";

const currentMonster = ref("default");

// <img :src="'../../../assets/images/monster/'+ monster.name.toString().trim().toLowerCase().replaceAll(' ', '-') + '.png'" :alt="monster.name" style="width: 32px"/>
</script>

<template>
  <div>
    <img :src="'../../../assets/images/monster/'+currentMonster+'.png'" :alt="currentMonster"/>
    <select v-model="currentMonster">
      <option disabled value="default" selected style="color: grey">Select Monster</option>
      <option v-for="monster in monsterData" :key="monster.id" :value="monster.name.toString().trim().toLowerCase().replaceAll(' ', '-')">
        {{ monster.name }}
      </option>
    </select>
  </div>
</template>

<style scoped>
select {
  color: var(--color-text);
  background-color: var(--color-background);
  border: 2px solid var(--border-metal);
  border-radius: var(--border-radius);

  height: 45px;
  width: 100%;
  padding: 10px;
  margin: 10px;

  text-align: center;

  font-size: 1em;
  font-weight: bolder;
  font-family: "SourceHanSans";
}

img {
  width: 50%;
  min-height: fit-content;
  border: 2px solid var(--border-metal);
  border-radius: var(--border-radius);
  background-color: var(--color-text);
}

div {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
</style>