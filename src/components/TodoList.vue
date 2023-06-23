<script setup lang="ts">
  import { useTodoStore } from "@/stores/todo";
  import { TodoData } from "@/utils/interfaces";
  import { isNull } from "lodash";

  const todoStore = useTodoStore();
  const selectedItem = ref<TodoData | null>(null);

  function onDblClick(todo: TodoData) {
    todoStore.updateTodoStatus(todo);
  }

  function updateTodo() {
    todoStore.updateTodo(selectedItem.value as TodoData);
    selectedItem.value = null;
  }

  function editTodo(todo: TodoData) {
    selectedItem.value = todo;
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
        <span class="col-4">Doble click to mark as completed</span>
        <span class="col-4">
          <span class="complete-box"></span> = Completed
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
              <div
                v-if="selectedItem && todo.id === selectedItem.id"
                class="d-flex"
              >
                <input
                  class="form-control"
                  type="text"
                  v-model="selectedItem.title"
                />
                <button class="btn" type="button" @click="updateTodo">
                  <IFeatherCheck
                    :class="{
                      'text-muted': !todo.completed,
                      'text-white': todo.completed,
                    }"
                  />
                </button>
              </div>
              <h5 v-else class="card-title">{{ todo.title }}</h5>
            </div>
            <div class="card-footer py-3 d-flex">
              <button
                class="btn border-0 ms-auto"
                type="button"
                :disabled="!isNull(selectedItem)"
                @click="editTodo(todo)"
              >
                <IFeatherEdit
                  :class="{
                    'text-muted': !todo.completed,
                    'text-white': todo.completed,
                  }"
                />
              </button>
              <button
                class="btn border-0"
                type="button"
                @click="deleteTodo(todo.id)"
                :disabled="!isNull(selectedItem)"
              >
                <IFeatherTrash
                  :class="{
                    'text-muted': !todo.completed,
                    'text-white': todo.completed,
                  }"
                />
              </button>
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
