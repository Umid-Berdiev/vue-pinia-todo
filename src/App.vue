<script setup lang="ts">
  //
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition name="fade" mode="out-in">
        <Suspense>
          <!-- main content -->
          <component :is="Component" />

          <!-- loading state -->
          <template #fallback> Loading... </template>
        </Suspense>
      </Transition>
    </template>
  </RouterView>
</template>

<style scoped>
  /*  */
</style>
