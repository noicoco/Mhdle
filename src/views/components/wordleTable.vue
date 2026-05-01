<script setup>
// TODO : add hints as to what category means what
const props = defineProps({columns: Array, guesses: Array, category: String, ignoredColumns: Array, selected: Object}); // Selected is the selectedMonster from App.vue rng
// 1st Array : column names
// 2nd Array : a list of the selected guesses from the searchBox, handled by view
const columns = props.columns.filter(x => !props.ignoredColumns.includes(x));


// Works. Very Hardcoded. But it works.
function formatField(guess, field) {
  let formatted;
  switch (field) {
      // Long string
    case 'description':
      formatted = guess[field].toString().split('.')[0] + '.';
      break;

      // Arrays
    case 'elements':
    case 'ailments':
    case 'weaknesses':
    case 'resistances':
      formatted = guess[field].toString().replace(',', ', ');
      if (formatted === '') {
        formatted = 'None'
      }
      break;

      // Object
    case 'height':
      formatted = guess[field]['formatted'];
      break;

    default:
      formatted = guess[field].toString();
      break;
  }
  return formatted;
}


function getStatus(guess, field) {
  let guessVal = guess[field];
  let targetVal = props.selected[field];

  if (guessVal === targetVal) return 'correct';

  // 1. Handle Height/Range Objects
  if (guessVal && typeof guessVal === 'object' && 'min' in guessVal) {
    const isExact = guessVal.min === targetVal.min && guessVal.max === targetVal.max;
    if (isExact) return 'correct';

    const guessMid = (guessVal.min + guessVal.max) / 2;
    const targetMid = (targetVal.min + targetVal.max) / 2;
    const direction = targetMid > guessMid ? 'higher' : 'lower';
    const hasOverlap = guessVal.min <= targetVal.max && guessVal.max >= targetVal.min;

    const baseStatus = hasOverlap ? 'partial' : 'incorrect';
    return `${baseStatus} ${direction}`;
  }

  // 2. Handle Levels ONLY (Matches your screenshot's red background)
  if (field === 'levels') {
    // If it made it past the exact match check at the top, it's incorrect.
    // Figure out if the target is higher or lower than the guess.
    const direction = targetVal > guessVal ? 'higher' : 'lower';

    // Returning 'incorrect' instead of 'partial' so it stays red like your screenshot
    return `incorrect ${direction}`;
  }

  // 3. Handle Partial String Matches
  if (typeof guessVal === 'string' && typeof targetVal === 'string') {
    const g = guessVal.toLowerCase();
    const t = targetVal.toLowerCase();

    if (g === t) return 'correct';

    const guessWords = g.split(' ');
    const targetWords = t.split(' ');

    const hasSharedWord = guessWords.some(word =>
        word.length > 2 && targetWords.includes(word)
    );

    if (hasSharedWord || g.includes(t) || t.includes(g)) {
      return 'partial';
    }
  }

  // 4. Array Comparison
  if (Array.isArray(guessVal) && Array.isArray(targetVal)) {
    const matches = guessVal.filter(item => targetVal.includes(item));
    if (matches.length === targetVal.length && guessVal.length === targetVal.length) {
      return 'correct';
    }
    return matches.length > 0 ? 'partial' : 'incorrect';
  }

  return 'incorrect';
}

</script>

<template>
  <table>
    <thead>
    <tr>
      <th v-for="colName in columns" :key="colName" scope="col">
        {{ colName }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="guess in props.guesses" :key="guess.id">
      <td v-for="col in columns" :key="col.id" :class="col === 'icon' ? col : `${col} ${getStatus(guess, col)}`">
        <img
            v-if="col === 'icon'"
            :src="'../../../assets/images/' + category + '/' + guess.icon + '.png'"
            :alt="guess.icon"
            class="icon"
        />

        <span v-else>
          {{ formatField(guess, col) }}
        </span>
      </td>
      <!--      <td v-for="attribute in guess" :key="attribute.id" :class="getStatus(attribute)">{{ formatField(attribute) }}</td>-->
      <!--      <td v-if="category !== ''">-->
      <!--        <img :src="'../../../assets/images/' + category + '/' + guess.icon + '.png'" class="icon"-->
      <!--             alt="" draggable="false"/>-->
      <!--      </td>-->
      <!--      <td v-else></td>-->


      <!--      <td :class="getStatus(guess.name, monster.name)">{{ guess.name }}</td>-->
      <!--      <td class="description" :class="getStatus(guess.description, monster.description)">{{ guess.description.split('.')[0] + '.' }}</td>-->
      <!--      <td :class="getStatus(guess.species, monster.species)">{{ guess.species }}</td>-->
      <!--      <td :class="getStatus(guess.elements, monster.elements)">{{ formatField(guess.elements) }}</td>-->
      <!--      <td :class="getStatus(guess.ailments, monster.ailments)">{{ formatField(guess.ailments) }}</td>-->
      <!--      <td :class="getStatus(guess.weaknesses, monster.weaknesses)">{{ formatField(guess.weaknesses) }}</td>-->
      <!--      <td :class="getStatus(guess.resistances, monster.resistances)">{{ formatField(guess.resistances) }}</td>-->
      <!--      <td>{{ guess.height.formatted }}</td>-->
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

table {
  display: table;
  vertical-align: middle;
  text-align: center;
  width: 100%;
  margin: 15px;
  padding: 0;
  border: 2px solid var(--border-metal);
  border-radius: var(--border-radius);
  border-spacing: 0;
  overflow: hidden;
}

thead {
  background-color: rgba(255, 255, 255, 0.1);
}

th {
  text-transform: capitalize;
  font-weight: bold;
}

thead th, td {
  border-right: 2px solid var(--border-metal);
  padding: 8px;
}

tbody th, td {
  border-top: 2px solid var(--border-metal);
  border-right: 2px solid var(--border-metal);
  padding: 8px;
}

.icon {
  width: 64px;
}

.description {
  text-justify: inter-word;
  width: 20%;
}

th:last-child, td:last-child {
  border-right: none;
}

/* Remove bottom border on the last row */
tr:last-child td {
  border-bottom: none;
}

tr td:first-child {
  background-color: rgba(255, 255, 255, 0.1);
}


.correct {
  background-color: rgb(from var(--color-correct) r g b / 0.2);
}

.partial {
  background-color: rgb(from var(--color-present) r g b / 0.2);
}

.incorrect {
  background-color: rgb(from var(--color-absent) r g b / 0.2);
}

.higher::after {
  content: ' ↑';
}

.lower::after {
  content: ' ↓';
}
</style>