import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", () => {
  const app = {
      name: "TodoApp",
      version: "",
      copyright: new Date().getFullYear(),
    },
    loading = ref(true);

  function setLoading(newLoading: boolean) {
    loading.value = newLoading;
  }

  return {
    app,
    setLoading,
  };
});
