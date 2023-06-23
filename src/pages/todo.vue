<template>
  <AppLayout>
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.fullPath" />
    </RouterView>
  </AppLayout>
</template>
