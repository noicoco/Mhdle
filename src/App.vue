<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {provide, ref} from 'vue';

import monsterData from '../assets/data/monster_data.json';
import skillData from '../assets/data/skill_data.json';

function getTodayRandom(data) {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getUTCDate();

  let math = (year+ month + day) % data.length;

  return data[math];
}

provide('monsterData', monsterData);
provide('skillData', skillData);

const monster = ref(getTodayRandom(monsterData))
const skill = ref(getTodayRandom(skillData))

provide('selectedMonster', monster)
provide('selectedSkill', skill)
// FIXME: Possible issues with spacing with the header and main content, we'll see
// FIXME: Issue above can be resolved by changing base.css line spacing.
</script>

<template>
  <header>
      <nav>
    <RouterLink to="/" id="title" draggable="false">
      MHdle
    </RouterLink>
      </nav>
  </header>

  <div id="background"></div>

  <span class="debug">Current Monster: {{monster.name}}<br>Current Skill: {{skill.name}}</span>

  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
header {
  top: 0;
  z-index: 100;
  margin-bottom: 7%;
}

nav {
  max-width: max-content;
  margin: 0 auto;
  padding: 0 2rem;
}

#background {
  position: fixed;
  top: 0;
  filter: blur(7px);
  opacity: 75%;
  background-color: var(--color-background);
  background-image: url("../assets/images/bg/bg1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -10;
  overflow: hidden;
  transform: scale(1.1);
}

#title {
  font-size: 5em;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;

  font-family: Markazi Text;
  text-shadow: 0 2px 2px var(--color-background);
  user-select: none;
}

#title:hover {
  opacity: 1;
  color: var(--color-text);
  background: none;
  transform: scale(1.02);
}

.debug {
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
  padding: 5px;
  /* Correct modern syntax */
  /* Works even if --color-background is #ffffff or blue */
  background-color: rgb(from var(--color-background) r g b / 0.5);
  border-radius: 10px;
}
</style>
