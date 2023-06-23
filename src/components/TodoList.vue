<script setup lang="ts">
  import { useTodoStore } from "@/stores/todo";
  import { TodoData } from "@/utils/constants";

  const todoStore = useTodoStore();
  // const todos = computed(() => todoStore.list);
  // console.log({ todos });

  function onDblClick(todo: TodoData) {
    const updTodo = {
      ...todo,
      completed: !todo.completed,
    };
    todoStore.updateTodo(updTodo);
  }

  function deleteTodo(id: number) {
    const confirmed = confirm("Are you sure?");
    if (confirmed) todoStore.deleteTodo(id);
  }
</script>

<template>
  <div class="row">
    <h3>Todos</h3>
    <div class="col-12 mb-3">
      <div class="row">
        <span class="col-4">Doble click to mark as complete</span>
        <span class="col-4">
          <span class="incomplete-box"></span> = Incomplete
        </span>
        <span class="col-4">
          <span class="complete-box"></span> = Complete
        </span>
      </div>
    </div>
    <div class="col-12">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          class="col"
          v-for="todo in todoStore.list"
          :key="todo.id"
          @dblclick="onDblClick(todo)"
        >
          <div
            class="card h-100"
            :class="todo.completed ? 'bg-success text-white' : 'bg-light'"
          >
            <div class="card-body">
              <h5 class="card-title">{{ todo.title }}</h5>
            </div>
            <div class="card-footer py-3">
              <i
                :class="todo.completed ? 'text-light' : 'text-muted'"
                @click="deleteTodo(todo.id)"
                >Delete</i
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped type="scss">
  .card-body {
    cursor: pointer;
  }
</style>
