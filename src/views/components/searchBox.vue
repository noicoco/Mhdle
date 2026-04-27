<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['selected']);
const props = defineProps({data: Object, category: String});

const currentSelection = ref(null);
const searchQuery = ref("");
const showResults = ref(false);

function formatImageName(name) {
  return name.toString().trim().toLowerCase().replaceAll(' ', '-');
}

// Filtered list based on search input
const filteredEntries = computed(() => {
  if (!searchQuery.value) return props.data;
  return props.data.filter(value =>
      value.name.toLowerCase().includes(searchQuery.value.toLowerCase()) // if searching 'cha', will return Chatacabra
  );
});

// Selection handler
const selectionHandler = (selection) => {
  currentSelection.value = selection;
  searchQuery.value = selection.name;
  showResults.value = false;
  emit('selected', selection);
};
</script>

<template>
    <div class="searchbox">
      <input
          v-model="searchQuery"
          type="text"
          placeholder="Search monsters..."
          @focus="showResults = true"
          @keyup.esc="showResults = false"
          class="search-input"
      />
      <ul v-if="showResults" class="results-list">
        <li
            v-for="entry in filteredEntries"
            :key="entry.id"
            @click="selectionHandler(entry)"
            class="result-item"
        >
          <img :src="'../../../assets/images/' + category + '/' + formatImageName(entry.name) + '.png'" class="icon" alt="" draggable="false" />
          <span>{{ entry.name }}</span>
        </li>
        <li v-if="filteredEntries.length === 0" class="no-results">
          No monsters found
        </li>
      </ul>
    </div>
</template>

<style scoped>
.searchbox {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.searchbox input[type='text'] {
  color: var(--color-text);
  background-color: var(--color-background);
  border: 2px solid var(--border-metal);
  border-radius: 10px;
  height: 45px;
  width: 100%;
  padding: 0 15px;
  font-size: 1em;
  font-weight: bolder;
  font-family: "SourceHanSans",ui-sans-serif;
  outline: none;
}

.results-list {
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  background-color: var(--color-background);
  border: 2px solid var(--border-metal);
  border-radius: var(--border-radius);
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
  list-style: none;
  padding: 0;
  margin: 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.results-list::-webkit-scrollbar {
  display: none;
}

.result-item {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid var(--border-metal);
  transition: background 0.2s;
}

.result-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.result-item:last-child {
  border-bottom: none;
}

.icon {
  width: 32px;
  height: 32px;
  margin-right: 15px;
  border-radius: 4px;
}

.no-results {
  padding: 10px;
  font-style: italic;
  text-align: center;
  color: grey;
}
</style>

<script>
let searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchInput.textContent = "";
  }
})
</script>