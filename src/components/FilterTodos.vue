<script setup>
import { useStore } from '@/stores'
import { computed, ref } from 'vue';

const mainStore = useStore()
const selectedCount = computed({
  get: () => mainStore.todosCount,
  set: (val) => {
    mainStore.todosCount = val
    mainStore.filterTodos()
  }
})
</script>

<template>
  <div class="row my-3">
    <div class="col-auto">
      <h3>Filter Todos:</h3>
      <select class="form-select" v-model="selectedCount">
        <option :value="10">10</option>
        <option :value="20">20</option>
        <option :value="50">50</option>
      </select>
    </div>
  </div>
</template>
