import { TodoData } from "@/utils/constants";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", () => {
  const list = useStorage<TodoData[]>("todo", []);

  async function fetchList() {
    return list;
  }

  async function addTodo(payload: TodoData) {
    list.value.push(payload);
  }

  async function updateTodo(payload: TodoData) {
    const foundIndex = list.value.findIndex(
      (item: TodoData) => item.id === payload.id
    );
    list.value.splice(foundIndex, 1, payload);
  }

  async function deleteTodo(id: number) {
    list.value = list.value.filter((item: TodoData) => item.id !== id);
  }

  return {
    list,
    fetchList,
    addTodo,
    updateTodo,
    deleteTodo,
  } as const;
});
