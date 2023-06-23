<script setup lang="ts">
  import { useTodoStore } from "@/stores/todo";

  const title = ref("");
  const todoStore = useTodoStore();
  const todos = computed(() => todoStore.list);
  console.log({ todos });

  function onSubmit() {
    todoStore.addTodo({
      id: Date.now(),
      title: title.value,
      completed: false,
    });
    title.value = "";
  }
</script>

<template>
  <div class="row">
    <div class="col-auto">
      <h3>Add Todo</h3>
      <form @submit.prevent="onSubmit" class="d-flex">
        <input
          class="form-control"
          type="text"
          required="true"
          v-model="title"
          placeholder="Add Todo..."
        />
        <button class="btn btn-success" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>
