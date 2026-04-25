<script setup>
// TODO: make table column names dynamic to what data in guesses is given, ignore description for monster guessing, add ignore fields?
const props = defineProps({columns: Array, guesses: Array, category: String});
// 1st Array : column names
// 2nd Array : a list of the selected guesses from the searchBox, handled by view

function formatImageName(name) {
  return name.toString().trim().toLowerCase().replaceAll(' ', '-');
}

function formatField(field) {
  field = field.toString();
  if (field === null || field === '') {
    field = 'None';
  }
  return field
      .replaceAll(',', ', ');
}
</script>

<template>
<table>
  <thead>
    <tr>
      <th scope="col">Icon</th>
      <th v-for="colName in props.columns" :key="colName" scope="col">
        {{colName}}
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="guess in props.guesses" :key="guess.id">
      <td v-if="category !== ''">
        <img :src="'../../../assets/images/' + category + '/' + formatImageName(guess.name) + '.png'" class="icon" alt="" draggable="false"/>
      </td>
      <td v-else></td>

      <td>{{guess.name}}</td>
      <td class="description">{{guess.description.split('.')[0]+'.'}}</td>
      <td>{{guess.species}}</td>
      <td>{{formatField(guess.elements)}}</td>
      <td class="correct">{{formatField(guess.ailments)}}</td>
      <td class="partial">{{formatField(guess.weaknesses)}}</td>
      <td class="incorrect">{{formatField(guess.resistances)}}</td>
      <td>{{guess.height.formatted}}</td>
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
  border-right:  2px solid var(--border-metal);
  padding: 8px;
}

tbody th, td {
  border-top:  2px solid var(--border-metal);
  border-right:  2px solid var(--border-metal);
  padding: 8px;
}

.icon {
  width: 48px;
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


.correct {
  background-color: rgb(from var(--color-correct) r g b / 0.2);
}

.partial {
  background-color: rgb(from var(--color-present) r g b / 0.2);
}

.incorrect {
  background-color: rgb(from var(--color-absent) r g b / 0.2);
}
</style>